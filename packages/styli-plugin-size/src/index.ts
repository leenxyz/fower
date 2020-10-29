import { Plugin, ModifierType, Rule, getValue } from '@styli/core'
import { isValidPropValue, kebab } from '@styli/utils'

export const sizeMaps: any = {
  w: ['width'],
  h: ['height'],
  s: ['width', 'height'],
  c: ['width', 'height', 'borderRadius'],
  minW: ['minWidth'],
  maxW: ['maxWidth'],
  minH: ['minHeight'],
  maxH: ['maxHeight'],
}

export function isSizeKey(key: string) {
  return /^([whsc]|min[HW]|max[HW])(-.+)?$/.test(key)
}

export default (): Plugin => {
  return {
    onVisitProp({ key: propKey, value: propValue }, sheet) {
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
