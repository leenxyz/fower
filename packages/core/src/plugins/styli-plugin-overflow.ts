import { Plugin } from '../types'
import { downFirst, isValidPropValue, kebab } from '../utils'
import { isOverFlowKey } from '../utils/propKey'

export const pluginOverFlow = (): Plugin => {
  return {
    onVisitProp({ propKey, propValue }, rule) {
      if (!isOverFlowKey(propKey)) return

      if (Array.isArray(propValue)) {
        propValue.forEach((value, idx) => {
          const cssFragment = rule.cssFragmentList![idx] || ''
          rule.cssFragmentList![idx] = `${cssFragment}${propKey}:${value};`
        })
      } else {
        if (isValidPropValue(propValue)) {
          rule.style = { ...rule.style, [propKey]: propValue }
          rule.cssFragment = `${rule.cssFragment}${propKey}:${propValue};`
        } else {
          const [, key, value] = propKey.match(/^(o[xy]?)([A-Z]\w+)$/) || []
          const val: any = downFirst(value)
          let _key = 'overflow'
          switch (key) {
            case 'ox':
              _key = 'overflowX'
              break
            case 'oy':
              _key = 'overflowY'
              break
            default:
              _key = 'overflow'
          }

          rule.style = { ...rule.style, [_key]: val }
          rule.cssFragment = `${rule.cssFragment}${kebab(_key)}:${val};`
        }
      }

      return rule
    },
  }
}
