import { styli } from '@styli/core'
import { StyliPlugin } from '@styli/types'
import { isValidPropValue } from '@styli/utils'

export const sizeMaps: any = {
  w: ['width'],
  h: ['height'],
  square: ['width', 'height'],
  circle: ['width', 'height', 'borderRadius'],
  minw: ['minWidth'],
  maxw: ['maxWidth'],
  minh: ['minHeight'],
  maxh: ['maxHeight'],
}

export function isMatch(key: string) {
  return /^([wh]|square|circle|min[hw]|max[hw])(-[\dA-Z-a-z]+)?$/.test(key)
}

export function sizePropToStyle(prop: string, propValue: any) {
  const [, matchKey = '', , value] =
    prop.match(/^([wh]|square|circle|min[hw]|max[hw])(-([\d+A-Z]+))?$/i) || []
  const key = matchKey.toLowerCase()

  const sizeValue = isValidPropValue(propValue) ? [propValue] : [value]

  return (sizeMaps[key] || []).reduce((style: any, cur: string, idx: number) => {
    const currentValue = sizeValue[idx] || (isValidPropValue(propValue) ? propValue : value)
    style[cur] = styli.getValue(currentValue)
    return style
  }, {} as any)
}

export default (): StyliPlugin => {
  return {
    name: 'styli-plugin-size',
    isMatch,
    onAtomStyleCreate(atom) {
      atom.style = sizePropToStyle(atom.key, atom.propValue)
      return atom
    },
  }
}
