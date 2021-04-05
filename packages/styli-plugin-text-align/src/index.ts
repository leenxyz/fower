import { StyliPlugin } from '@styli/types'
import { isValueProp } from '@styli/utils'

export function isTextAlign(key: string) {
  return /^text(Left|Center|Right|Justify|Align)$/i.test(key)
}

export function toStyle(key: string, propValue: any) {
  if (isValueProp(propValue)) return { textAlign: propValue }
  return { textAlign: key.replace(/^text/i, '').toLowerCase() }
}

export default (): StyliPlugin => {
  return {
    isMatch: isTextAlign,
    handleAtom(atom) {
      atom.style = toStyle(atom.key, atom.propValue)
      return atom
    },
  }
}
