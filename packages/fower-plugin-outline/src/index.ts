import { Atom } from '@fower/atom'
import { FowerPlugin } from '@fower/types'

export function isMatch(key: string) {
  return key === 'outline' || isOutLineNone(key) || isOutLineOffset(key)
}

function isOutLineNone(key: string) {
  return /^outlineNone$/i.test(key)
}

function isOutLineOffset(key: string) {
  return /^outlineOffset$/i.test(key)
}

export function toStyle({ key, value }: Atom): any {
  if (isOutLineNone(key)) return { outline: 'none' }
  if (isOutLineOffset(key)) return { outlineOffset: value }

  return { outline: value }
}

export default (): FowerPlugin => {
  return {
    isMatch,
    handleAtom(atom) {
      atom.style = toStyle(atom)
      return atom
    },
  }
}
