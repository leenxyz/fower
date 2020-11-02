import { Plugin, styli } from '@styli/core'
import { downFirst, isValidPropValue } from '@styli/utils'

export function isBgColorKey(key: string) {
  return /^bg(.+)?$/.test(key)
}

export function bgPropToStyle(propKey: string, propValue: any) {
  const Colors = styli.getColors()
  if (isValidPropValue(propValue)) return { backgroundColor: Colors[propValue] || propValue }
  const [, color = ''] = propKey.match(/^bg(\w+)/) || []
  return { backgroundColor: Colors[downFirst(color)] }
}

export default (): Plugin => {
  return {
    name: 'styli-plugin-background',
    isMatch: isBgColorKey,
    onVisitProp(atom) {
      atom.style = bgPropToStyle(atom.propKey, atom.propValue)
      return atom
    },
  }
}
