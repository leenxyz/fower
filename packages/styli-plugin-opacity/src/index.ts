import { Plugin } from '@styli/core'
import { isValidPropValue } from '@styli/utils'

export function isOpacityKey(key: string) {
  return /^opacity(-\d+)?$/.test(key)
}

export function opacityPropToStyle(prop: string, propValue: any): any {
  if (isValidPropValue(propValue)) {
    return {
      opacity: Array.isArray(propValue)
        ? propValue.map((v) => Number(v) / 100)
        : Number(propValue) / 100,
    }
  }
  const [, value = 50] = prop.split('-')
  return { opacity: Number(value) / 100 }
}

export default (): Plugin => {
  return {
    onVisitProp({ propKey, propValue }, rule) {
      if (!isOpacityKey(propKey)) return
      rule.style = opacityPropToStyle(propKey, propValue)
      return rule
    },
  }
}
