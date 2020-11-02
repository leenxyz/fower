import { Plugin, getValue, ModifierType } from '@styli/core'
import { isValidPropValue } from '@styli/utils'

export const fontSizes: any = {
  xs: 10,
  sm: 12,
  base: 14,
  lg: 16,
  xl: 18,
  '2xl': 20,
  '3xl': 22,
  '4xl': 24,
  '5xl': 26,
  '6xl': 28,
}

export function isTextSizeKey(key: string) {
  return /^f(-.+)?$/.test(key)
}

export function textSizePropToStyle(prop: string, propValue: any) {
  if (isValidPropValue(propValue)) {
    return {
      fontSize: Array.isArray(propValue)
        ? propValue.map((v) => getValue(v, ModifierType.text))
        : getValue(propValue, ModifierType.text),
    }
  }
  const [, value] = prop.split('-')
  return { fontSize: fontSizes[value] || getValue(value, ModifierType.text) }
}

export default (): Plugin => {
  return {
    name: 'styli-plugin-text-heading',
    isMatch: isTextSizeKey,
    onVisitProp(atom) {
      atom.style = textSizePropToStyle(atom.propKey, atom.propValue)
      return atom
    },
  }
}
