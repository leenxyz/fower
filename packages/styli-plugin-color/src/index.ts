import { Plugin, styli } from '@styli/core'
import { hexToRgba } from '@styli/utils'

export function isColorKey(key: string) {
  const Colors = styli.getColors()
  return /^color(.+)?$/.test(key) || !!Colors[key] || key === 'fontColor'
}

export function colorPropToStyle(prop: string, propValue: any): any {
  let color: string | string[]
  const colorType = prop.replace('color', '').toLowerCase()
  const Colors = styli.getColors()

  if (Colors[prop] || Colors[colorType]) {
    color = Colors[prop] || Colors[colorType]
  } else if (prop === 'color' || prop === 'fontColor') {
    const [hex, opacity] = propValue.split('.')
    color = hexToRgba(hex, opacity)
  } else {
    color = Colors[colorType] || colorType
  }

  return { color }
}

export default (): Plugin => {
  return {
    name: 'styli-plugin-color',
    isMatch: isColorKey,
    onVisitProp(atom) {
      atom.style = colorPropToStyle(atom.propKey, atom.propValue)
      return atom
    },
  }
}
