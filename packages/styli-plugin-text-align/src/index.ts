import { StyliPlugin } from '@styli/types'
import { isValueProp } from '@styli/utils'

export function isTextAlign(key: string) {
  return /^text([Ll]eft|[Cc]enter|[Rr]ight|[Jj]ustify|[Aa]lign)$/.test(key)
}

export function textAlignPropToStyle(prop: string, propValue: any) {
  if (isValueProp(propValue)) return { textAlign: propValue }
  return { textAlign: prop.replace('text', '').toLowerCase() }
}

export default (): StyliPlugin => {
  return {
    isMatch: isTextAlign,
    onAtomStyleCreate(atom) {
      atom.style = textAlignPropToStyle(atom.propKey, atom.propValue)
      return atom
    },
  }
}
