import { marginMaps } from '../constants'
import { ModifierType, Plugin } from '../types'
import { getValue, isValidPropValue, kebab } from '../utils'
import { isMarginKey } from '../utils/propKey'

export const pluginMargin = (): Plugin => {
  return {
    onVisitProp({ propKey, propValue }, rule) {
      if (!isMarginKey(propKey)) return

      const [key, value] = propKey.split('-')

      marginMaps[key].forEach((k) => {
        const cssAttrKey = kebab(k)
        if (Array.isArray(propValue)) {
          propValue.forEach((v: any, idx: number) => {
            const cssFragment = rule.cssFragmentList![idx] || ''
            const attrValue = getValue(v, ModifierType.margin)
            rule.cssFragmentList![idx] = `${cssFragment}${cssAttrKey}:${attrValue};`
          })
        } else {
          const mValue = isValidPropValue(propValue) ? propValue : value
          const attrValue = getValue(mValue, ModifierType.margin)
          rule.style = { ...rule.style, [k]: attrValue }
          rule.cssFragment = `${rule.cssFragment}${cssAttrKey}:${attrValue};`
        }
      })

      return rule
    },
  }
}
