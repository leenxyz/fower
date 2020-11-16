import { StyliPlugin } from '@styli/types'
import { isValidPropValue } from '@styli/utils'

export function isTextAlign(key: string) {
  return /^text([Ll]eft|[Cc]enter|[Rr]ight|[Jj]ustify|[Aa]lign)$/.test(key)
}

export function textAlignPropToStyle(prop: string, propValue: any) {
  if (isValidPropValue(propValue)) return { textAlign: propValue }
  return { textAlign: prop.replace('text', '').toLowerCase() }
}

export default (): StyliPlugin => {
  return {
    name: 'styli-plugin-text-align',
    isMatch: isTextAlign,
    onVisitProp(atom) {
      atom.style = textAlignPropToStyle(atom.propKey, atom.propValue)
      return atom
    },
  }
}
