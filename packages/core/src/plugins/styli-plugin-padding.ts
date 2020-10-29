import { paddingMaps } from '../constants'
import { Rule } from '../Sheet'
import { ModifierType, Plugin } from '../types'
import { getValue, isValidPropValue, kebab } from '../utils'
import { isPaddingKey } from '../utils/propKey'

export const pluginPadding = (): Plugin => {
  return {
    onVisitProp({ propKey, propValue }, sheet) {
      if (!isPaddingKey(propKey)) return { sheet }

      const [key, value] = propKey.split('-')
      const rule: Rule = { name: propKey, cssFragmentList: [], cssFragment: '', style: {} }

      paddingMaps[key].forEach((k) => {
        const cssAttrKey = kebab(k)
        if (Array.isArray(propValue)) {
          propValue.forEach((v: any, idx: number) => {
            const cssFragment = rule.cssFragmentList![idx] || ''
            rule.cssFragmentList![idx] = `${cssFragment}${cssAttrKey}:${getValue(
              v,
              ModifierType.margin,
            )};`
          })
        } else {
          const attrValue = isValidPropValue(propValue) ? propValue : value
          rule.style = { ...rule.style, [k]: getValue(attrValue, ModifierType.size) }
          rule.cssFragment = `${rule.cssFragment}${cssAttrKey}:${getValue(
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
