import { Plugin } from '@styli/core'
import { isValidPropValue, kebab } from '@styli/utils'

export const textAlign = ['textLeft', 'textCenter', 'textRight', 'textJustify']

export function isTextAlign(key: string) {
  return textAlign.includes(key) || /^textAlign$/.test(key)
}

export default (): Plugin => {
  return {
    onVisitProp({ propKey, propValue }, rule) {
      if (!isTextAlign(propKey)) return

      const key = 'textAlign'

      if (Array.isArray(propValue)) {
        propValue.forEach((value, idx) => {
          const cssFragment = rule.cssFragmentList![idx] || ''
          rule.cssFragmentList![idx] = `${cssFragment}${kebab(key)}:${value};`
        })
      } else {
        const attrValue = isValidPropValue(propValue)
          ? propValue
          : (propValue.replace('text', '').toLowerCase() as any)
        rule.style = { [key]: attrValue }
        rule.cssFragment = `${kebab(key)}: ${attrValue};}`
      }

      return rule
    },
  }
}
