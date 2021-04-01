import { styli } from '@styli/core'
import { StyliPlugin } from '@styli/types'
import { downFirst } from '@styli/utils'

const positionMaps: Record<string, string> = {
  T: 'Top',
  L: 'Left',
  R: 'Right',
  B: 'Bottom',
}

function isMatch(key: string) {
  return key.startsWith('border')
}

function toStyle(key: string, propValue: any) {
  if (key === 'border') {
    return {
      borderWidth: typeof propValue === 'boolean' ? 1 : propValue,
    }
  }

  const colors = styli.getColors() as any
  const postfix = key.replace(/^border/, '') || ''

  /** @example borderSolid,borderDashed */
  if (/^(Solid|Dashed|Dotted|Double|None)$/i.test(postfix)) {
    return { borderStyle: postfix.toLowerCase() }
  }

  /** @example border-0,border-1,border-2,borderT-2,borderB-2, borderT, borderR={2} */
  if (/^border[trbl]?$/i.test(key)) {
    const position = postfix.replace(/-\d+$/, '')
    const borderPosition = positionMaps[position.toUpperCase()] ?? ''
    const cssKey = `border${borderPosition}Width`
    return { [cssKey]: propValue }
  }

  /** @example borderGray20,borderRed20--O20,borderBlue--T20 */
  const colorName = downFirst(postfix)
  if (colors[colorName]) {
    return { borderColor: colorName }
  }

  return {
    [key]: colors[propValue] || propValue,
  }
}

export default (): StyliPlugin => {
  return {
    isMatch,
    handleAtom(atom) {
      atom.style = toStyle(atom.key, atom.propValue)
      return atom
    },
  }
}
