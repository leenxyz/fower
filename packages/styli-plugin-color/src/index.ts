import { styli } from '@styli/core'
import { formatColor } from '@styli/color-helper'
import { StyliPlugin } from '@styli/types'

export function isColorKey(key: string) {
  if (key === 'color') return true

  // red10...
  const colors: any = styli.getColors()
  if (!!colors[key]) return true //  red200,blue500...

  // green200-O20,green200-D20,green200-L20..
  const [, colorName = ''] = key.match(/^(.+)-([TOLD])?(\d{0,3})?$/i) || []
  if (colors[colorName]) return true
  return false
}

export function colorPropToStyle(propKey: string, propValue: any, colors: any): any {
  if (propKey === 'color') {
    const [color, posfix] = styli.extractColor(propValue, colors)
    return { color: formatColor(color, posfix) }
  }

  const [color, posfix] = styli.extractColor(propKey.replace(/^color/i, ''), colors)

  return { color: formatColor(color, posfix) }
}

export default (): StyliPlugin => {
  return {
    isMatch: isColorKey,
    handleAtom(atom, parser) {
      const { theme } = parser
      const colors = theme?.colors
      atom.style = colorPropToStyle(atom.propKey, atom.propValue, colors)
      return atom
    },
  }
}
