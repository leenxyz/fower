import { Plugin, getValue, ModifierType } from '@styli/core'
import { isValidPropValue, kebab } from '@styli/utils'

export const fontSizes: any = {
  xs: 10,
  sm: 12,
  base: 14,
  lg: 16,
  xl: 18,
  '2xl': 20,
  '3xl': 22,
  '4xl': 24,
  '5xl': 26,
  '6xl': 28,
}

export function isTextSizeKey(key: string) {
  return /^f(-.+)?$/.test(key)
}

export default (): Plugin => {
  return {
    onVisitProp({ propKey, propValue }, rule) {
      if (!isTextSizeKey(propKey)) return

      const key = 'fontSize'

      if (Array.isArray(propValue)) {
        propValue.forEach((value, idx) => {
          const cssFragment = rule.cssFragmentList![idx] || ''
          const attrValue = getValue(value, ModifierType.text)
          rule.cssFragmentList![idx] = `${cssFragment}${key}:${attrValue};`
        })
      } else {
        const [, value] = propKey.split('-')
        const sValue = isValidPropValue(propValue) ? propValue : value
        const attrValue = fontSizes[sValue] || getValue(sValue, ModifierType.text)

        rule.style = { [key]: attrValue }
        rule.cssFragment = `${kebab(key)}: ${attrValue};}`
      }

      return rule
    },
  }
}
