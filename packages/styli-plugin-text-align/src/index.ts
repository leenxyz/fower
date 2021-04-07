import { Atom } from '@styli/atom'
import { StyliPlugin } from '@styli/types'

export function isMatch(key: string) {
  return /^text(Left|Center|Right|Justify|Align)$/i.test(key)
}

export function toStyle({ key, value, isValueProp }: Atom): any {
  if (isValueProp) return { textAlign: value }
  return { textAlign: key.replace(/^text/i, '').toLowerCase() }
}

export default (): StyliPlugin => {
  return {
    isMatch,
    handleAtom(atom) {
      atom.style = toStyle(atom)
      return atom
    },
  }
}
