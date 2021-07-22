import { Atom, Parser, FowerPlugin } from '@fower/core'
import { downFirst } from '@fower/utils'

export function isMatch(key: string) {
  return /^leading(None|Tight|Snug|Normal|Relaxed|Loose)?$/i.test(key)
}

export function toStyle({ key, value, isValueProp }: Atom, parser: Parser): any {
  if (isValueProp) return { lineHeight: value }

  const lineHeights: any = parser.store.getTheme().lineHeights
  const type = key.replace(/^leading/, '')
  const presetValue = lineHeights[downFirst(type)]

  if (presetValue) return { lineHeight: presetValue }

  return { lineHeight: value }
}

export default (): FowerPlugin => {
  return {
    isMatch,
    handleAtom(atom, parser) {
      atom.style = toStyle(atom, parser)
      return atom
    },
  }
}
