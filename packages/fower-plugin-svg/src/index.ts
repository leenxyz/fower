import { downFirst } from '@fower/utils'
import { FowerPlugin, Parser } from '@fower/core'

function isFillColor(key = '', parser: Parser) {
  if (!key.startsWith('fill')) return false

  const colors: any = parser.store.theme.colors
  const colorKey = downFirst(key.replace(/^fill/, ''))
  if (colors[colorKey]) return true

  return false
}

function isMatch(key: string, parser: Parser) {
  return /^stroke$|^(stroke|fill)?(Current|None)$/i.test(key) || isFillColor(key, parser)
}

function toStyle(key: string, value: any, parser: Parser): any {
  if (/Current$/i.test(key)) {
    const cssKey = key.replace(/current$/i, '')
    return { [cssKey]: 'currentColor' }
  }

  if (/None$/i.test(key)) {
    const cssKey = key.replace(/none$/i, '')
    return { [cssKey]: 'none' }
  }

  if (key === 'stroke') {
    if (/^\d+/.test(value)) {
      return { strokeWidth: value }
    }
    return { stroke: value }
  }

  if (isFillColor(key, parser)) {
    const colorKey = downFirst(key.replace(/^fill/, ''))
    return { fill: colorKey }
  }
}

export default (): FowerPlugin => {
  return {
    isMatch,
    handleAtom(atom, parser) {
      const { key, value } = atom
      atom.style = toStyle(key, value, parser)

      return atom
    },
  }
}
