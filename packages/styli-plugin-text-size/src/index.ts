import { Plugin, getValue, ModifierType } from '@styli/core'
import { isValidPropValue } from '@styli/utils'

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

  return { fontSize: getValue(value, ModifierType.text) }
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
