import { Plugin } from '@styli/core'
import { downFirst, isValidPropValue, kebab } from '@styli/utils'

export const weights: any = {
  hairline: 100,
  thin: 200,
  light: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 'bold',
  extrabold: 800,
  black: 900,
}

export function isTextWeightKey(key: string) {
  return /^font(Hairline|Thin|Light|Normal|Medium|Semibold|Bold|Extrabold|Black)?$|^fontWeight(-.+)?$/.test(
    key,
  )
}

export default (): Plugin => {
  return {
    onVisitProp({ propKey, propValue }, rule) {
      if (!isTextWeightKey(propKey)) return

      const key = 'fontWeight'

      if (Array.isArray(propValue)) {
        propValue.forEach((value, idx) => {
          const cssFragment = rule.cssFragmentList![idx] || ''
          rule.cssFragmentList![idx] = `${cssFragment}${kebab(key)}:${value};`
        })
      } else {
        const [, second, third] = kebab(propKey).split('-')
        if (isValidPropValue(propValue)) {
          rule.style = { [key]: propValue }
          rule.cssFragment = `${kebab(key)}:${propValue};`
        } else {
          const value = second === 'weight' ? third : weights[downFirst(second)] || second
          rule.style = { [key]: value }
          rule.cssFragment = `${kebab(key)}:${value};`
        }
      }
      return rule
    },
  }
}
