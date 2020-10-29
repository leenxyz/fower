import { Plugin } from '../types'
import { isValidPropValue, kebab } from '../utils'
import { isTextAlign } from '../utils/propKey'

export const pluginTextAlign = (): Plugin => {
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
