import { Plugin, getValue, ModifierType, styli } from '@styli/core'
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
    beforeVisitProp(atom) {
      const { propKey } = atom
      const [, key, value] = propKey.match(/^([a-zA-Z]+)(\d+)$/) || []
      if (!key || !value || key !== 'f') return atom

      const fontSizes = styli.getTheme('fontSizes') || []

      if (!fontSizes.length) {
        console.error('theme fontSize is not provide')
      }
      return { ...atom, propKey: key, propValue: fontSizes[Number(value)], className: propKey }
    },
    onVisitProp(atom) {
      atom.style = textSizePropToStyle(atom.propKey, atom.propValue)
      return atom
    },
    afterVisitProp(initAtom, atom) {
      const { propValue, propKey } = initAtom
      return { ...atom, propValue, propKey }
    },
  }
}
