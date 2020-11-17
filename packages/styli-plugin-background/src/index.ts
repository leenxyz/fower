import { getValue, styli } from '@styli/core'
import { StyliPlugin } from '@styli/types'
import { downFirst, isValidPropValue, hexToRgba } from '@styli/utils'

export function isBgKey(key: string) {
  return /^bg(.+)?$/.test(key)
}

function isBgColorKey(key: string) {
  return /^bgColor$/.test(key)
}

function isBgImgKey(key: string) {
  return /^bgImg$/.test(key)
}

function isBgSizeKey(key: string) {
  return /^bgSize$/.test(key)
}

function isBgPosKey(key: string) {
  return /^bgPos$/.test(key)
}

export function bgPropToStyle(propKey: string, propValue: any) {
  if (isBgImgKey(propKey)) return { backgroundImage: `url("${propValue}")` }
  if (isBgPosKey(propKey)) return { backgroundPosition: getValue(propValue) }
  if (isBgSizeKey(propKey)) return { backgroundSize: getValue(propValue) }

  const Colors = styli.getColors()

  if (isValidPropValue(propValue)) {
    const [, hex, , opacity] = propValue.match(/^(#\w+)(.(\d+))?/) || []
    const value = Colors[hex] || hex || propValue
    if (isBgColorKey(propKey)) {
      return { backgroundColor: hexToRgba(value, opacity) }
    }
    return { background: hexToRgba(value, opacity) }
  }

  const [, color = ''] = propKey.match(/^bg(\w+)/) || []
  return { background: Colors[downFirst(color)] }
}

export default (): StyliPlugin => {
  return {
    name: 'styli-plugin-background',
    isMatch(key) {
      return (
        isBgKey(key) || isBgColorKey(key) || isBgImgKey(key) || isBgPosKey(key) || isBgSizeKey(key)
      )
    },
    onVisitProp(atom) {
      atom.style = bgPropToStyle(atom.propKey, atom.propValue)
      return atom
    },
  }
}
