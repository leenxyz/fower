import { styli } from '@styli/core'
import { StyliPlugin } from '@styli/types'
import { formatColor } from '@styli/utils'

export function isColorKey(key: string) {
  const Colors = styli.getColors()

  if (key === 'c') return true // c="#999"

  if (!!Colors[key]) return true //  red20,blue50...

  if (/^color(.+)?$/.test(key)) return true // colorPrImary | color="xxx"

  /** green20-O20,green20-D20,green20-L20.... */
  const [, colorName = ''] = key.match(/^(.+)-([OLDold])?(\d{0,3})?$/) || []
  if (Colors[colorName]) return true
  return false
}

export function colorPropToStyle(prop: string, propValue: any): any {
  const Colors = styli.getColors()

  if (prop === 'color' || prop === 'c') {
    const [prefix, postfix] = propValue.split('-')
    const color = Colors[prefix] || prefix
    return { color: postfix ? formatColor(`${color}-${postfix}`) : color }
  }

  const [colorType, postfix] = prop.split('-')
  const colorName = colorType.replace(/^color/i, '').toLowerCase()
  const color = Colors[colorName] || colorName

  return { color: postfix ? formatColor(`${color}-${postfix}`) : color }
}

export default (): StyliPlugin => {
  return {
    name: 'styli-plugin-color',
    isMatch: isColorKey,
    onVisitProp(atom) {
      atom.style = colorPropToStyle(atom.propKey, atom.propValue)
      return atom
    },
  }
}
