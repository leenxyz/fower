import { Plugin } from '../types'
import { isValidPropValue, kebab } from '../utils'
import { isZIndexKey } from '../utils/propKey'

export const pluginZIndex = (): Plugin => {
  return {
    onVisitProp({ propKey, propValue }, rule) {
      if (!isZIndexKey(propKey)) return

      const [, symbol = '', value] = propKey.split(/\b-*?/)
      const [, minus = ''] = symbol.split('')

      const key = 'zIndex'

      if (Array.isArray(propValue)) {
        propValue.forEach((value, idx) => {
          const cssFragment = rule.cssFragmentList![idx] || ''
          rule.cssFragmentList![idx] = `${cssFragment}${kebab(key)}:${value};`
        })
      } else {
        const attrValue = isValidPropValue(propValue) ? propValue : minus + value
        rule.style = { [key]: attrValue }
        rule.cssFragment = `${kebab(key)}:${attrValue};`
      }
      return rule
    },
  }
}
