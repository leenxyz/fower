import { StyliPlugin } from '@styli/types'
import { isValueProp } from '@styli/utils'

export function isMatch(key: string) {
  return /^text(Left|Center|Right|Justify|Align)$/i.test(key)
}

export function toStyle(key: string, value: any) {
  if (isValueProp(value)) return { textAlign: value }
  return { textAlign: key.replace(/^text/i, '').toLowerCase() }
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
