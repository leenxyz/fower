import { fontSizes } from '../constants/typo'
import { ModifierType, Plugin } from '../types'
import { getValue, isValidPropValue, kebab } from '../utils'
import { isTextSizeKey } from '../utils/propKey'

export const pluginTextSize = (): Plugin => {
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
