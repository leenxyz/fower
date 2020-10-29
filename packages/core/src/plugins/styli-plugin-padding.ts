import { paddingMaps } from '../constants'
import { ModifierType, Plugin } from '../types'
import { getValue, isValidPropValue, kebab } from '../utils'
import { isPaddingKey } from '../utils/propKey'

export const pluginPadding = (): Plugin => {
  return {
    onVisitProp({ propKey, propValue }, rule) {
      if (!isPaddingKey(propKey)) return

      const [key, value] = propKey.split('-')

      paddingMaps[key].forEach((k) => {
        const cssAttrKey = kebab(k)
        if (Array.isArray(propValue)) {
          propValue.forEach((v: any, idx: number) => {
            const cssFragment = rule.cssFragmentList![idx] || ''
            const attrValue = getValue(v, ModifierType.padding)
            rule.cssFragmentList![idx] = `${cssFragment}${cssAttrKey}:${attrValue};`
          })
        } else {
          const pValue = isValidPropValue(propValue) ? propValue : value
          const attrValue = getValue(pValue, ModifierType.padding)
          rule.style = { ...rule.style, [k]: attrValue }
          rule.cssFragment = `${rule.cssFragment}${cssAttrKey}:${attrValue};`
        }
      })

      return rule
    },
  }
}
