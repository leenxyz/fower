import { Plugin, ModifierType, getValue } from '@styli/core'
import { isValidPropValue } from '@styli/utils'

export const sizeMaps: any = {
  w: ['width'],
  h: ['height'],
  s: ['width', 'height'],
  c: ['width', 'height', 'borderRadius'],
  minW: ['minWidth'],
  maxW: ['maxWidth'],
  minH: ['minHeight'],
  maxH: ['maxHeight'],
}

export function isSizeKey(key: string) {
  return /^([whsc]|min[HW]|max[HW])(-.+)?$/.test(key)
}

export function sizePropToStyle(prop: string, propValue: any) {
  const style: any = {}
  const [key, value] = prop.split('-')

  const sizeValue = isValidPropValue(propValue) ? propValue : value

  sizeMaps[key].forEach((k: any) => {
    style[k] = Array.isArray(propValue)
      ? propValue.map((v) => getValue(v, ModifierType.size))
      : getValue(sizeValue, ModifierType.size)
  })

  return style
}

export default (): Plugin => {
  return {
    name: 'styli-plugin-size',
    isMatch: isSizeKey,
    onVisitProp(atom) {
      atom.style = sizePropToStyle(atom.propKey, atom.propValue)
      return atom
    },
  }
}
