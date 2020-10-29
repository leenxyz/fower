import { positionMaps } from '../constants'
import { ModifierType, Plugin } from '../types'
import { getValue, isValidPropValue } from '../utils'
import { isPositionKey } from '../utils/propKey'

export const pluginPosition = (): Plugin => {
  return {
    onVisitProp({ propKey, propValue }, rule) {
      if (!isPositionKey(propKey)) return

      const [key = '', value = ''] = propKey.split('-')
      const lowerKey = key.toLocaleLowerCase()
      const _key = positionMaps[lowerKey]

      if (Array.isArray(propValue)) {
        propValue.forEach((value, idx) => {
          const cssFragment = rule.cssFragmentList![idx] || ''
          const attrValue = getValue(value, ModifierType.position)
          rule.cssFragmentList![idx] = `${cssFragment}${_key}:${attrValue};`
        })
      } else {
        if (isValidPropValue(propValue) && positionMaps.includes(propKey)) {
          rule.style = { [key]: propValue }
        } else {
          rule.style = { [key]: getValue(value, ModifierType.position) }
        }
      }

      return rule
    },
  }
}
