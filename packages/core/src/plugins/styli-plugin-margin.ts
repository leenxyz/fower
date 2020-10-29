import { marginMaps } from '../constants'
import { Rule } from '../Sheet'
import { ModifierType, Plugin } from '../types'
import { getValue, isValidPropValue, kebab } from '../utils'
import { isMarginKey } from '../utils/propKey'

export const pluginMargin = (): Plugin => {
  return {
    onVisitProp({ propKey, propValue }, sheet) {
      if (!isMarginKey(propKey)) return { sheet }

      const [key, value] = propKey.split('-')
      const rule: Rule = { name: propKey, cssFragmentList: [], cssFragment: '', style: {} }

      marginMaps[key].forEach((k) => {
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
