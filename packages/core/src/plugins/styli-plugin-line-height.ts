import { leadings } from '../constants/typo'
import { ModifierType, Plugin } from '../types'
import { downFirst, getValue, isValidPropValue, kebab } from '../utils'
import { isTextLineHeightKey } from '../utils/propKey'

export const pluginLineHeight = (): Plugin => {
  return {
    onVisitProp({ propKey, propValue }, rule) {
      if (!isTextLineHeightKey(propKey)) return

      const key = 'lineHeight'

      if (Array.isArray(propValue)) {
        propValue.forEach((value, idx) => {
          const cssFragment = rule.cssFragmentList![idx] || ''
          rule.cssFragmentList![idx] = `${cssFragment}${kebab(key)}:${value};`
        })
      } else {
        if (isValidPropValue(propValue)) {
          rule.style = { [key]: getValue(propValue, ModifierType.lineHeight) }
        } else {
          const [, value = ''] = propKey.match(/lh-?(\w+)?/) || []
          const preset = leadings[downFirst(value)]

          rule.style = { [key]: preset ? `${preset}em` : getValue(value) }
          rule.cssFragment = `${kebab(key)}:${preset ? `${preset}em` : getValue(value)}`
        }
      }
      return rule
    },
  }
}
