import { Atom } from '@fower/atom'
import { FowerPlugin } from '@fower/types'

export function isMatch(key: string) {
  return /^text(Left|Center|Right|Justify|Align)$/i.test(key)
}

export function toStyle({ key, value, isValueProp }: Atom): any {
  if (isValueProp) return { textAlign: value }
  return { textAlign: key.replace(/^text/i, '').toLowerCase() }
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
