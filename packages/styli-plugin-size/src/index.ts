import { Plugin, ModifierType, getValue, styli } from '@styli/core'
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
    beforeVisitProp(atom) {
      const { propKey } = atom
      const [, key, value] = propKey.match(/^([a-zA-Z]+)(\d+)$/) || []
      if (!key || !value || !sizeMaps[key]) return atom

      const spacing = styli.getTheme<string[]>('spacing') || []

      if (!spacing.length) {
        console.error('theme spacing is not provide')
      }

      return { ...atom, propKey: key, propValue: spacing[Number(value)], className: propKey }
    },
    onVisitProp(atom) {
      atom.style = sizePropToStyle(atom.propKey, atom.propValue)
      return atom
    },
    afterVisitProp(initAtom, atom) {
      const { propValue, propKey } = initAtom
      return { ...atom, propValue, propKey }
    },
  }
}
