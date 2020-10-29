import { Plugin } from '@styli/core'
import { isValidPropValue } from '@styli/utils'

export function isZIndexKey(key: string) {
  return /^zIndex(--?\d+)?$/.test(key)
}

export function zIndexPropToStyle(prop: string, propValue: any) {
  if (isValidPropValue(propValue)) return { zIndex: propValue }
  const [, value] = prop.split('-')
  return { zIndex: value }
}

export default (): Plugin => {
  return {
    onVisitProp({ propKey, propValue }, rule) {
      if (!isZIndexKey(propKey)) return
      rule.style = zIndexPropToStyle(propKey, propValue)
      return rule
    },
  }
}
