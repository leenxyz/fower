import { Plugin, styli } from '@styli/core'
import { hexToRgba } from '@styli/utils'

export function isColorKey(key: string) {
  const Colors = styli.getColors()
  return /^color(.+)?$/.test(key) || !!Colors[key]
}

export function colorPropToStyle(prop: string, propValue: any) {
  let color: string
  const Colors = styli.getColors()
  if (Colors[prop]) {
    color = Colors[prop]
  } else if (prop === 'color') {
    const [hex, opacity] = propValue.split('.')
    color = hexToRgba(hex, opacity)
  } else {
    color = prop.replace('color', '').toLowerCase()
  }

  return { color }
}

export default (): Plugin => {
  return {
    onVisitProp(atom) {
      if (!isColorKey(atom.propKey)) return
      atom.style = colorPropToStyle(atom.propKey, atom.propValue)
      return atom
    },
  }
}
