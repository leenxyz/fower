import { weights } from '../constants/typo'
import { Plugin } from '../types'
import { downFirst, isValidPropValue, kebab } from '../utils'
import { isTextWeightKey } from '../utils/propKey'

export const pluginTextWeight = (): Plugin => {
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
