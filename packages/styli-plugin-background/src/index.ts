import { styli } from '@styli/core'
import { StyliPlugin } from '@styli/types'
import { isBgKey, isBgImgKey, isBgPosKey, isBgRepeatKey, isBgSizeKey, isMatch } from './utils'

function bgPropToStyle(propKey: string, propValue: any) {
  if (isBgImgKey(propKey)) return { backgroundImage: propValue }
  if (isBgPosKey(propKey)) return { backgroundPosition: styli.getValue(propValue) }
  if (isBgSizeKey(propKey)) return { backgroundSize: styli.getValue(propValue) }
  if (isBgRepeatKey(propKey)) return { backgroundRepeat: propValue }

  if (isBgKey(propKey)) {
    return { backgroundColor: styli.getStyliColorValue(propValue) }
  }

  // handle  backgroundColor
  if (/^backgroundColor$/i.test(propKey)) {
    return { backgroundColor: styli.getStyliColorValue(propValue) }
  }

  return { backgroundColor: styli.getStyliColorValue(propKey.replace(/^bg/i, '')) }
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
