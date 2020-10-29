import { Plugin } from '../types'
import { isValidPropValue } from '../utils'
import { isDisplayKey } from '../utils/propKey'

export const pluginDisplay = (): Plugin => {
  return {
    onVisitProp({ propKey, propValue }, rule) {
      if (!isDisplayKey(propKey)) return

      const key = 'display'

      if (Array.isArray(propValue)) {
        propValue.forEach((value, idx) => {
          const cssFragment = rule.cssFragmentList![idx] || ''
          rule.cssFragmentList![idx] = `${cssFragment}${key}:${value};`
        })
      } else {
        const [, dValue] = propKey.match(/^d(\w+)$/) || []
        const value = isValidPropValue(propValue) ? propValue : dValue
        rule.style = { ...rule.style, [key]: value }
        rule.cssFragment = `${rule.cssFragment}${key}:${value};`
      }

      return rule
    },
  }
}
