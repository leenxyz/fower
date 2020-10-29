import { Plugin, ModifierType, getValue } from '@styli/core'
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
    onVisitProp({ propKey, propValue }, rule) {
      if (!isSizeKey(propKey)) return

      const [key, value] = propKey.split('-')

      sizeMaps[key].forEach((k: any) => {
        if (Array.isArray(propValue)) {
          propValue.forEach((v: any, idx: number) => {
            const cssFragment = rule.cssFragmentList![idx] || ''
            const attrValue = getValue(v, ModifierType.size)
            rule.cssFragmentList![idx] = `${cssFragment}${kebab(k)}:${attrValue};`
          })
        } else {
          const sValue = isValidPropValue(propValue) ? propValue : value
          const attrValue = getValue(sValue, ModifierType.size)
          rule.style = { ...rule.style, [k]: attrValue }
          rule.cssFragment = `${rule.cssFragment}${kebab(k)}:${attrValue};`
        }
      })

      return rule
    },
  }
}
