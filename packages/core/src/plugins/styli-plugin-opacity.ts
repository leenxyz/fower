import { Plugin } from '../types'
import { isValidPropValue } from '../utils'
import { isOpacityKey } from '../utils/propKey'

export const pluginOpacity = (): Plugin => {
  return {
    onVisitProp({ propKey, propValue }, rule) {
      if (!isOpacityKey(propKey)) return

      const key = 'opacity'

      if (Array.isArray(propValue)) {
        propValue.forEach((value, idx) => {
          const cssFragment = rule.cssFragmentList![idx] || ''
          rule.cssFragmentList![idx] = `${cssFragment}${key}:${value};`
        })
      } else {
        const [, value = 50] = propKey.split('-')
        const attrValue = isValidPropValue(propValue) ? propValue : value

        rule.style = { ...rule.style, [key]: attrValue }
        rule.cssFragment = `${rule.cssFragment}${key}:${attrValue};`
      }

      return rule
    },
  }
}
