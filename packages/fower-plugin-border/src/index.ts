import { Atom, store } from '@fower/core'
import { FowerPlugin } from '@fower/core'
import { downFirst } from '@fower/utils'

const positionMaps: Record<string, string> = {
  T: 'Top',
  L: 'Left',
  R: 'Right',
  B: 'Bottom',
}

function isMatch(key: string) {
  return key.startsWith('border')
}

function toStyle({ key, value }: Atom) {
  if (key === 'border') {
    if (typeof value === 'boolean') return { borderWidth: 1 }
    if (value === 'none') return { border: 'none' }
    return { borderWidth: value }
  }

  const colors: any = store.theme.colors
  const postfix = key.replace(/^border/, '')

  /** @example borderSolid,borderDashed */
  if (/^(Solid|Dashed|Dotted|Double|None)$/i.test(postfix)) {
    return { borderStyle: postfix.toLowerCase() }
  }

  /** @example border-0,border-1,border-2,borderT-2,borderB-2, borderT, borderR={2} */
  if (/^border[trbl]?$/i.test(key)) {
    const position = postfix.replace(/-\d+$/, '')
    const borderPosition = positionMaps[position.toUpperCase()] || ''
    const cssKey = `border${borderPosition}Width`
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
    handleAtom(atom) {
      atom.style = toStyle(atom)
      return atom
    },
  }
}
