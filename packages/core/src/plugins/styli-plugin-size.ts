import { sizeMaps } from '../constants'
import { ModifierType, Plugin } from '../types'
import { getValue, isValidPropValue, kebab } from '../utils'
import { isSizeKey } from '../utils/propKey'

export const pluginSize = (): Plugin => {
  return {
    onVisitProp({ propKey, propValue }, rule) {
      if (!isSizeKey(propKey)) return

      const [key, value] = propKey.split('-')

      sizeMaps[key].forEach((k) => {
        if (Array.isArray(propValue)) {
          propValue.forEach((v: any, idx: number) => {
            const cssFragment = rule.cssFragmentList![idx] || ''
            const attrValue = getValue(v, ModifierType.size)
            rule.cssFragmentList![idx] = `${cssFragment}${kebab(k)}:${attrValue};`
          })
        } else {
          const sValue = isValidPropValue(propValue) ? propValue : value
          const attrValue = getValue(sValue, ModifierType.size)
          rule.style = { ...rule.style, [k]: attrValue }
          rule.cssFragment = `${rule.cssFragment}${kebab(k)}:${attrValue};`
        }
      })

      return rule
    },
  }
}
