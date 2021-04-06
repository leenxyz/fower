import { downFirst } from '@styli/utils'
import { StyliPlugin } from '@styli/types'
import { isBgKey, isBgImgKey, isBgPosKey, isBgRepeatKey, isBgSizeKey, isMatch } from './utils'

function toStyle(key: string, value: string) {
  if (isBgImgKey(key)) return { backgroundImage: value }
  if (isBgPosKey(key)) return { backgroundPosition: value }
  if (isBgSizeKey(key)) return { backgroundSize: value }
  if (isBgRepeatKey(key)) return { backgroundRepeat: value }
  if (isBgKey(key)) return { backgroundColor: value }

  return { backgroundColor: downFirst(key.replace(/^bg/i, '')) }
}

export default (): StyliPlugin => {
  return {
    isMatch,
    handleAtom(atom) {
      atom.style = toStyle(atom.key, atom.value)
      return atom
    },
  }
}
