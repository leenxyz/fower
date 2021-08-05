import { Atom, Parser } from '@fower/core'
import { FowerPlugin } from '@fower/core'
import { downFirst, upFirst } from '@fower/utils'

const positionRegex = /^border(Top|Left|Right|Bottom)/i

function isMatch(key: string) {
  return key.startsWith('border')
}

function toStyle({ key, value }: Atom, parser: Parser) {
  if (key === 'border') {
    if (typeof value === 'boolean') return { borderWidth: 1 }
    if (value === 'none') return { border: 'none' }
    return { borderWidth: value }
  }

  const colors: any = parser.config.theme.colors
  const postfix = key.replace(/^border/, '')

  /** @example borderSolid,borderDashed */
  if (/^(Solid|Dashed|Dotted|Double|None)$/i.test(postfix)) {
    return { borderStyle: postfix.toLowerCase() }
  }

  /** @example border-0,border-1,border-2,borderTop-2,borderBottom-2... */
  if (positionRegex.test(key)) {
    const cssKey = `border${upFirst(postfix)}Width`
    if (typeof value === 'boolean' && value === true) {
      return { [cssKey]: 1 }
    }
    return { [cssKey]: value }
  }

  /** @example borderGray20,borderRed20--O20,borderBlue--T20 */
  const colorName = downFirst(postfix)
  if (colors[colorName]) {
    return { borderColor: colorName }
  }

  return {
    [key]: colors[value] || value,
  }
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
