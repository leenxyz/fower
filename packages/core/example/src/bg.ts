import { styli } from '../../src/styli'
import { Plugin } from '../../src/types/index'
import { downFirst, isValidPropValue, kebab } from '@styli/utils'

export function isBgColorKey(key: string) {
  return /^bg(.+)?$/.test(key)
}

export function bgPropToStyle(prop: string, propValue: any) {
  const Colors = styli.getColors()
  if (isValidPropValue(propValue)) return { backgroundColor: Colors[propValue] || propValue }
  const [, color = ''] = prop.match(/^bg(\w+)/) || []
  return { backgroundColor: Colors[downFirst(color)] }
}

export default (): Plugin => {
  return {
    onVisitProp({ propKey, propValue }, rule) {
      if (!isBgColorKey(propKey)) return

      return {
        ...rule,
        style: bgPropToStyle(propKey, propValue),
      }
    },
  }
}
