import { Rule } from '../Sheet'
import { styli } from '../styli'
import { Plugin } from '../types'
import { downFirst, isValidPropValue, kebab } from '../utils'
import { isBgColorKey } from '../utils/propKey'

export default (): Plugin => {
  return {
    onVisitProp({ key: propKey, value: propValue }, sheet) {
      if (!isBgColorKey(propKey)) return { sheet }

      const Colors = styli.getColors()

      const styleKey = 'backgroundColor'
      const cssAttrKey = kebab(styleKey)

      if (Array.isArray(propValue)) {
        propValue.forEach((value, idx) => {
          const cssFragment = rule.cssFragmentList![idx] || ''
          rule.cssFragmentList![idx] = `${cssFragment}${cssAttrKey}:${value};`
        })
      } else {
        const [, color = ''] = propKey.match(/^bg(\w+)$/) || []
        const value = isValidPropValue(propValue) ? propValue : downFirst(color)
        rule.style = { ...rule.style, [styleKey]: Colors[value] || value }
        rule.cssFragment = `${rule.cssFragment}${cssAttrKey}:${Colors[value] || value};`
      }

      return rule
    },
  }
}
