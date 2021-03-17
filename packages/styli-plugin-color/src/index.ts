import { styli } from '@styli/core'
import { StyliPlugin } from '@styli/types'

function isColorTheme(key: string) {
  return /^color(Brand|Primary|Secondary|Info|Warning|Error|Success)(-[TODL]\d+)$/i.test(key)
}

export function isColorKey(key: string) {
  if (key === 'color') return true

  // colorBrand...
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
    return { color: styli.getStyliColorValue(propValue) }
  }

  if (isColorTheme(propKey)) {
    return { color: styli.getStyliColorValue(propKey) }
  }

  return { color: styli.getStyliColorValue(propKey.replace(/^color/i, '')) }
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
