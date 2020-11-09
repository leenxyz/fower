import { Plugin, styli } from '@styli/core'
import { downFirst, isValidPropValue, hexToRgba } from '@styli/utils'

export function isBgColorKey(key: string) {
  return /^bg(.+)?$/.test(key)
}

export function isBgImgKey(key: string) {
  return /^bgImg$/.test(key)
}

export function isBgSizeKey(key: string) {
  return /^bgSize$/.test(key)
}

export function isBgPosKey(key: string) {
  return /^bgPos$/.test(key)
}

export function bgPropToStyle(propKey: string, propValue: any) {
  if (isBgImgKey(propKey)) return { backgroundImage: `url("${propValue}")` }
  if (isBgPosKey(propKey)) return { backgroundPosition: propValue }
  if (isBgSizeKey(propKey)) return { backgroundSize: propValue }

  const Colors = styli.getColors()

  if (isValidPropValue(propValue)) {
    const [hex, opacity] = propValue.split('.')
    const value = Colors[hex] || hex
    return { backgroundColor: hexToRgba(value, opacity) }
  }

  const [, color = ''] = propKey.match(/^bg(\w+)/) || []
  return { backgroundColor: Colors[downFirst(color)] }
}

export default (): Plugin => {
  return {
    name: 'styli-plugin-background',
    isMatch(key) {
      return isBgColorKey(key) || isBgImgKey(key) || isBgPosKey(key) || isBgSizeKey(key)
    },
    onVisitProp(atom) {
      atom.style = bgPropToStyle(atom.propKey, atom.propValue)
      return atom
    },
  }
}
