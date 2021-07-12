import { FowerPlugin, Parser } from '@fower/core'

export function isMatch(key: string, parser: Parser) {
  if (key === 'color') return true

  // color in theme
  const colors: any = parser.config.theme.colors
  return !!colors[key]
}

export default (): FowerPlugin => {
  return {
    isMatch,
    handleAtom(atom) {
      const { key, value } = atom
      atom.style = {
        color: key === 'color' ? value : key,
      }
      atom.type = 'color'
      return atom
    },
  }
}
