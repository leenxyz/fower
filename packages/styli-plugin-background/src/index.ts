import { styli } from '@styli/core'
import { StyliPlugin } from '@styli/types'
import { formatColor } from '@styli/utils'
import { isBgKey, isBgImgKey, isBgPosKey, isBgRepeatKey, isBgSizeKey, isMatch } from './utils'

function bgPropToStyle(propKey: string, propValue: any) {
  if (isBgImgKey(propKey)) return { backgroundImage: `url("${propValue}")` }
  if (isBgPosKey(propKey)) return { backgroundPosition: styli.getValue(propValue) }
  if (isBgSizeKey(propKey)) return { backgroundSize: styli.getValue(propValue) }
  if (isBgRepeatKey(propKey)) return { backgroundRepeat: propValue }

  const Colors = styli.getColors()
  const [prefix, postfix] = propValue.split('-')
  const value = Colors[prefix] || prefix

  if (isBgKey(propKey)) {
    return { background: styli.isStyliColor(prefix) ? formatColor(value, postfix) : propValue }
  }

  // handle bgColor, backgroundColor
  if (/^(bgColor|backgroundColor)$/.test(propKey)) {
    return { backgroundColor: formatColor(value, postfix) }
  }

  // handle bgRed10, bgRed10-T10
  const colorName = prefix.replace(/^bg/i, '').toLowerCase()
  const color = Colors[colorName] || colorName
  return { backgroundColor: formatColor(color, postfix) }
}

export default (): StyliPlugin => {
  return {
    name: 'styli-plugin-background',
    isMatch,
    onAtomStyleCreate(atom) {
      atom.style = bgPropToStyle(atom.propKey, atom.propValue)
      return atom
    },
  }
}
