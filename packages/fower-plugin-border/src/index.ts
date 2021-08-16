import { Atom, Parser } from '@fower/core'
import { FowerPlugin } from '@fower/core'
import { downFirst, upFirst, camel } from '@fower/utils'

const borderPosition = 'border(Top|Left|Right|Bottom)'
const positionRegex = new RegExp(`^${borderPosition}$`, 'i')
const positionColorRegex = new RegExp(`^(${borderPosition})([a-z]+\\d{2,3})$`, 'i')

function isMatch(key: string) {
  return key.startsWith('border')
}

function isWidthType(value: any) {
  return /^\d(px|rem|em|vh|vw)?$/.test(String(value))
}

function toStyle({ key, value }: Atom, parser: Parser) {
  if (key === 'border') {
    if (typeof value === 'boolean') return { borderWidth: 1 }
    if (value === 'none') return { border: 'none' }
    if (isWidthType(value)) return { borderWidth: value }
    return { border: value }
  }

  const colors: any = parser.config.theme.colors
  const postfix = key.replace(/^border/, '')

  /** @example borderSolid,borderDashed */
  if (/^(Solid|Dashed|Dotted|Double|None)$/i.test(postfix)) {
    return { borderStyle: postfix.toLowerCase() }
  }

  /**
   *  @example border-0,border-1,border-2,borderTop-2,borderBottom-2...
   *  @example borderTop="2px solid green"
   *  @example borderTopRed200
   * */
  if (positionRegex.test(key)) {
    const cssKey = `border${upFirst(postfix)}Width`
    if (typeof value === 'boolean' && value === true) {
      return { [cssKey]: 1 }
    }
    if (isWidthType(value)) return { [cssKey]: value }

    return { [key]: value }
  }

  if (positionColorRegex.test(key)) {
    const [, cssKey, , ColorName] = key.match(positionColorRegex) as string[]

    const colorName = downFirst(ColorName)
    return { [camel(`${cssKey}Color`)]: colors[colorName] || colorName }
  }
  /** @example borderGray20,borderRed20--O20,borderBlue--T20 */
  const colorName = downFirst(postfix)
  if (colors[colorName]) {
    return { borderColor: colorName }
  }

  return { [key]: colors[value] || value }
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
