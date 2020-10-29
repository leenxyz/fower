import { roundedMaps } from '../constants'
import { Plugin } from '../types'
import { getValue, isValidPropValue, kebab } from '../utils'
import { isRoundedKey } from '../utils/propKey'

export const pluginRound = (): Plugin => {
  return {
    onVisitProp({ propKey, propValue }, rule) {
      if (!isRoundedKey(propKey)) return

      const [key, value] = propKey.split('-')

      roundedMaps[key].forEach((k: string) => {
        const attrKey = `border${k}Radius`
        if (Array.isArray(propValue)) {
          propValue.forEach((value, idx) => {
            const cssFragment = rule.cssFragmentList![idx] || ''
            const attrValue = getValue(value)
            rule.cssFragmentList![idx] = `${cssFragment}${attrKey}:${attrValue};`
          })
        } else {
          const rValue = isValidPropValue(propValue) ? propValue : value
          const attrValue = getValue(rValue)
          rule.style = { [attrKey]: attrValue }
          rule.cssFragment = `${kebab(attrKey)}:${attrValue};`
        }
      })

      return rule
    },
  }
}
