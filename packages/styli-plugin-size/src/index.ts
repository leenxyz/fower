import { getValue, styli } from '@styli/core'
import { StyliPlugin, ModifierType } from '@styli/types'
import { isValidPropValue } from '@styli/utils'

export const sizeMaps: any = {
  w: ['width'],
  h: ['height'],
  s: ['width', 'height'],
  circle: ['width', 'height', 'borderRadius'],
  minw: ['minWidth'],
  maxw: ['maxWidth'],
  minh: ['minHeight'],
  maxh: ['maxHeight'],
}

export function isSizeKey(key: string) {
  return /^([whs]|circle|min[HWhw]|max[HWhw])(-.+)?$/.test(key)
}

export function sizePropToStyle(prop: string, propValue: any) {
  const style: any = {}
  const [key, value] = prop.split('-')

  const sizeValue = isValidPropValue(propValue) ? propValue : value

  sizeMaps[key.toLowerCase()].forEach((k: any) => {
    style[k] = getValue(sizeValue, ModifierType.size)
  })

  return style
}

export default (): StyliPlugin => {
  return {
    name: 'styli-plugin-size',
    isMatch: isSizeKey,
    beforeVisitProp(atom) {
      const { propKey } = atom
      const [, key, value] = propKey.match(/^([a-zA-Z]+)(\d+)$/) || []
      if (!key || !value || !sizeMaps[key]) return atom

      const spacing = styli.getTheme<string[]>('spacing') || []

      if (!spacing.length) {
        console.error('theme spacing is not provide')
      }

      return {
        ...atom,
        propKey: key,
        propValue: spacing[Number(value)],
        designSystemKey: propKey,
        className: propKey,
      }
    },
    onVisitProp(atom) {
      atom.style = sizePropToStyle(atom.propKey, atom.propValue)
      return atom
    },
  }
}
