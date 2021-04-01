import { downFirst } from '@styli/utils'
import { StyliPlugin } from '@styli/types'
import { isBgKey, isBgImgKey, isBgPosKey, isBgRepeatKey, isBgSizeKey, isMatch } from './utils'

function bgPropToStyle(key: string, propValue: string) {
  if (isBgImgKey(key)) return { backgroundImage: propValue }
  if (isBgPosKey(key)) return { backgroundPosition: propValue }
  if (isBgSizeKey(key)) return { backgroundSize: propValue }
  if (isBgRepeatKey(key)) return { backgroundRepeat: propValue }
  if (isBgKey(key)) {
    return { backgroundColor: propValue }
  }

  return { backgroundColor: downFirst(key.replace(/^bg/i, '')) }
}

export default (): StyliPlugin => {
  return {
    isMatch,
    handleAtom(atom) {
      atom.style = bgPropToStyle(atom.key, atom.propValue)
      return atom
    },
  }
}
