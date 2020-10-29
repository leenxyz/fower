import { sizeMaps } from '../constants'
import { Rule } from '../Sheet'
import { ModifierType, Plugin } from '../types'
import { getValue, isValidPropValue, kebab } from '../utils'
import { isSizeKey } from '../utils/propKey'

export const pluginSize = (): Plugin => {
  return {
    onVisitProp({ propKey, propValue }, sheet) {
      if (!isSizeKey(propKey)) return { sheet }

      const [key, value] = propKey.split('-')
      const rule: Rule = { name: propKey, cssFragmentList: [], cssFragment: '', style: {} }

      sizeMaps[key].forEach((k) => {
        if (Array.isArray(propValue)) {
          propValue.forEach((v: any, idx: number) => {
            const cssFragment = rule.cssFragmentList![idx] || ''
            rule.cssFragmentList![idx] = `${cssFragment}${kebab(k)}:${getValue(
              v,
              ModifierType.size,
            )};`
          })
        } else {
          const attrValue = isValidPropValue(propValue) ? propValue : value
          rule.style = { ...rule.style, [k]: getValue(attrValue, ModifierType.size) }
          rule.cssFragment = `${rule.cssFragment}${kebab(k)}:${getValue(
            attrValue,
            ModifierType.size,
          )};`
        }
      })

      sheet.addRule(rule)

      return { sheet, matched: true }
    },
  }
}
