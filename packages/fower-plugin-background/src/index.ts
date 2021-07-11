import { downFirst } from '@fower/utils'
import { FowerPlugin } from '@fower/core'

export function isBg(key: string) {
  return /^bg?$/.test(key)
}

export function isBgColor(key: string) {
  return /^bg.+$/i.test(key)
}

export function isBgRepeat(key: string) {
  return /^backgroundRepeat$/i.test(key)
}

export function isBgImg(key: string) {
  return /^backgroundImage$/i.test(key)
}

export function isBgSize(key: string) {
  return /^backgroundSize$/i.test(key)
}

export function isBgPos(key: string) {
  return /^backgroundPosition$/i.test(key)
}

export function isMatch(key: string) {
  return [isBg, isBgColor, isBgRepeat, isBgImg, isBgSize, isBgPos].some((cb) => cb(key))
}

function toStyle(key: string, value: string) {
  if (isBgImg(key)) return { backgroundImage: value }
  if (isBgPos(key)) return { backgroundPosition: value }
  if (isBgSize(key)) return { backgroundSize: value }
  if (isBgRepeat(key)) return { backgroundRepeat: value }
  if (isBg(key)) return { backgroundColor: value }

  return { backgroundColor: downFirst(key.replace(/^bg/i, '')) }
}

export default (): FowerPlugin => {
  return {
    isMatch,
    handleAtom(atom) {
      atom.style = toStyle(atom.key, atom.value)
      if (isBg(atom.key) || isBgColor(atom.key)) {
        atom.type = 'backgroundColor'
      }
      return atom
    },
  }
}
