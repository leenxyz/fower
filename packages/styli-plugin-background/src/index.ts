import { getValue, styli } from '@styli/core'
import { StyliPlugin } from '@styli/types'
import { formatColor } from '@styli/utils'

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

  /** bg or bgColor */
  if (/^bg(color)?$/i.test(propKey)) {
    const [prefix, postfix] = propValue.split('-')
    const color = Colors[prefix] || prefix
    const bgKey = propKey === 'bg' ? 'background' : 'backgroundColor'
    return { [bgKey]: postfix ? formatColor(`${color}-${postfix}`) : color }
  }

  const [colorType, postfix] = propKey.split('-')
  const colorName = colorType.replace(/^bg/i, '').toLowerCase()
  const color = Colors[colorName] || colorName
  return { background: postfix ? formatColor(`${color}-${postfix}`) : color }
}

export default (): StyliPlugin => {
  return {
    name: 'styli-plugin-background',
    isMatch(key) {
      return (
        isBgKey(key) || isBgColorKey(key) || isBgImgKey(key) || isBgPosKey(key) || isBgSizeKey(key)
      )
    },
    onAtomStyleCreate(atom) {
      atom.style = bgPropToStyle(atom.propKey, atom.propValue)
      return atom
    },
  }
}
