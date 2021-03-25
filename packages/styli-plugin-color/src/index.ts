import { styli } from '@styli/core'
import { formatColor } from '@styli/color-helper'
import { StyliPlugin } from '@styli/types'

function isColorTheme(key: string) {
  return /^color(Brand|Primary|Secondary|Info|Warning|Error|Success)(-[TODL]\d+)?$/i.test(key)
}

export function isColorKey(key: string) {
  if (key === 'color') return true

  // colorBrand, colorPrimary-D20...
  if (isColorTheme(key)) return true

  // red10...
  const Colors = styli.getColors()
  if (!!Colors[key]) return true //  red200,blue500...

  // green200-O20,green200-D20,green200-L20..
  const [, colorName = ''] = key.match(/^(.+)-([TOLD])?(\d{0,3})?$/i) || []
  if (Colors[colorName]) return true
  return false
}

export function colorPropToStyle(propKey: string, propValue: any): any {
  if (propKey === 'color') {
    const [color, posfix] = styli.extractColor(propValue)
    return { color: formatColor(color, posfix) }
  }

  if (isColorTheme(propKey)) {
    const colorName = propKey.replace(/^color/, '')
    const [color, posfix] = styli.extractColor(colorName)
    return { color: formatColor(color, posfix) }
  }

  const [color, posfix] = styli.extractColor(propKey.replace(/^color/i, ''))
  return { color: formatColor(color, posfix) }
}

export default (): StyliPlugin => {
  return {
    name: 'styli-plugin-color',
    isMatch: isColorKey,
    onAtomStyleCreate(atom) {
      atom.style = colorPropToStyle(atom.propKey, atom.propValue)
      return atom
    },
  }
}
