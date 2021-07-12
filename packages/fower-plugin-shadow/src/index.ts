import { Atom, Parser } from '@fower/core'
import { FowerPlugin } from '@fower/core'

export function isMatch(key: string) {
  return /^shadow/i.test(key)
}

export function toStyle({ key, value, isValueProp }: Atom, parser: Parser) {
  if (isValueProp) return { boxShadow: value }
  const styleValue = key.replace('shadow', '')
  const shadowSize = styleValue.toLowerCase()
  const shadows: any = parser.config.theme.shadows
  const shadowValue = shadows[shadowSize || 'medium']
  return { boxShadow: shadowValue }
}

export default (): FowerPlugin => {
  return {
    isMatch: isMatch,
    handleAtom(atom, parser) {
      atom.style = toStyle(atom, parser)
      return atom
    },
  }
}
