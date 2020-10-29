import { Plugin } from '@styli/core'
import { isValidPropValue } from '@styli/utils'

export function isFlexItemKey(key: string) {
  return /^flex(-\d+)?$/.test(key)
}

export default (): Plugin => {
  return {
    onVisitProp({ propKey, propValue }, rule) {
      if (!isFlexItemKey(propKey)) return

      const key = 'flex'

      if (Array.isArray(propValue)) {
        propValue.forEach((value, idx) => {
          const cssFragment = rule.cssFragmentList![idx] || ''
          rule.cssFragmentList![idx] = `${cssFragment}${key}:${value};`
        })
      } else {
        if (isValidPropValue(propValue)) {
          rule.style![key] = propValue
        } else {
          const [, value] = propKey.split('-')
          const flexValue = value || (propValue === true ? 1 : propValue)
          rule.style![key] = flexValue
        }
      }

      return rule
    },
  }
}
