import { styli } from '@styli/core'
import { formatColor } from '@styli/color-helper'
import { StyliPlugin } from '@styli/types'
import { isBgKey, isBgImgKey, isBgPosKey, isBgRepeatKey, isBgSizeKey, isMatch } from './utils'

function bgPropToStyle(propKey: string, propValue: any) {
  if (isBgImgKey(propKey)) return { backgroundImage: propValue }
  if (isBgPosKey(propKey)) return { backgroundPosition: propValue }
  if (isBgSizeKey(propKey)) return { backgroundSize: propValue }
  if (isBgRepeatKey(propKey)) return { backgroundRepeat: propValue }

  if (isBgKey(propKey)) {
    const [color, posfix] = styli.extractColor(propValue)
    return { backgroundColor: formatColor(color, posfix) }
  }

  // handle  backgroundColor
  if (/^backgroundColor$/i.test(propKey)) {
    const [color, posfix] = styli.extractColor(propValue)
    return { backgroundColor: formatColor(color, posfix) }
  }

  const [color, posfix] = styli.extractColor(propKey.replace(/^bg/i, ''))
  return { backgroundColor: formatColor(color, posfix) }
}

export default (): StyliPlugin => {
  return {
    isMatch,
    handleAtom(atom) {
      atom.style = bgPropToStyle(atom.propKey, atom.propValue)
      return atom
    },
  }
}
