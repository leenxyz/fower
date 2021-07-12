import { FowerPlugin, Parser } from '@fower/core'

function isPreset(key: string, parser: Parser) {
  const { fontSizes = {} } = parser.config.theme
  const keys = Object.keys(fontSizes) || []
  if (!keys.length) return false
  const reg = new RegExp(`^text(${keys.join('|')})$`, 'i')
  return reg.test(key)
}
export function isMatch(key: string, parser: Parser) {
  return /^text$/.test(key) || isPreset(key, parser)
}

export function toStyle(key: string, value: any, parser: Parser) {
  if (isPreset(key, parser)) {
    const fontSizes: any = parser.config.theme.fontSizes || {}
    const fontSizeKey = key.replace(/^text/, '').toLowerCase()
    return { fontSize: fontSizes[fontSizeKey] }
  }

  return { fontSize: value }
}

export default (): FowerPlugin => {
  return {
    isMatch,
    handleAtom(atom, parser) {
      atom.style = toStyle(atom.key, atom.value, parser)
      return atom
    },
  }
}
