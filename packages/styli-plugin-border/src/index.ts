import { styli } from '@styli/core'
import { formatColor } from '@styli/color-helper'
import { StyliPlugin } from '@styli/types'

const G = {
  top: 'Top',
  left: 'Left',
  right: 'Right',
  bottom: 'Bottom',
}

const positionMaps: { [key: string]: string } = {
  T: G.top,
  L: G.left,
  R: G.right,
  B: G.bottom,
}

function isBorderKey(key: string) {
  return key.startsWith('border')
}

// TODO: 这里强制了颜色写在最后
function formatBorderValue(value: string) {
  const result = value.split(/\s+/)
  // if not like: 1px solid #555
  if (result.length !== 3) return value

  const [color, posfix] = styli.extractColor(result[2])
  result[2] = formatColor(color, posfix)
  return result.join(' ')
}

function borderPropToStyle(prop: string, propValue: any) {
  if (prop === 'border') {
    return { borderWidth: 1 }
  }

  const colors = styli.getColors() as any
  const postfix = prop.replace(/^border/, '') || ''

  /** @example borderSolid,borderDashed-2 */
  if (/^(Solid|Dashed|Dotted|Double|None)$/i.test(postfix)) {
    return { borderStyle: postfix.toLowerCase() }
  }

  /** @example border-0,border-1,border-2,borderT-2,borderB-2 */
  if (/^[trbl]?-\d+$/i.test(postfix)) {
    const position = postfix.replace(/-\d+$/, '')
    const borderPosition = positionMaps[position.toUpperCase()] ?? ''
    const key = `border${borderPosition}Width`
    const [, value] = postfix.split('-')
    return { [key]: value }
  }

  /** @example borderT, borderR */
  if (positionMaps[postfix.toUpperCase()]) {
    let style: any = {}

    style[`border${positionMaps[postfix.toUpperCase()]}`] = formatBorderValue(propValue)
    return style
  }

  /** @example borderGray20,borderRed20-O20,borderBlue-T20 */
  if (styli.isStyliColor(postfix)) {
    const [color, posfix] = styli.extractColor(postfix)
    return { borderColor: formatColor(color, posfix) }
  }

  if (/^color/i.test(postfix)) {
    const [color, posfix] = styli.extractColor(postfix)
    return { [prop]: formatColor(color, posfix) }
  }

  return {
    [prop]: colors[propValue] || propValue,
  }
}

export default (): StyliPlugin => {
  return {
    isMatch: isBorderKey,
    handleAtom(atom) {
      atom.style = borderPropToStyle(atom.propKey, atom.propValue)
      return atom
    },
  }
}
