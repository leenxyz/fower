import { styli } from '@styli/core'
import { StyliPlugin } from '@styli/types'
import { isValidPropValue } from '@styli/utils'

export function isTextSizeKey(key: string) {
  return /^f(-.+)?$/.test(key)
}

export function textSizePropToStyle(prop: string, propValue: any) {
  if (isValidPropValue(propValue)) {
    return {
      fontSize: styli.getValue(propValue),
    }
  }
  const [, value] = prop.split('-')

  return { fontSize: styli.getValue(value) }
}

export default (): StyliPlugin => {
  return {
    name: 'styli-plugin-text-size',
    isMatch: isTextSizeKey,
    beforeAtomStyleCreate(atom) {
      const { propKey } = atom
      const [, key, value] = propKey.match(/^([a-zA-Z]+)(\d+)$/) || []
      if (!key || !value || key !== 'f') return atom

      const fontSizes = styli.getTheme('fontSizes') || []

      if (!fontSizes.length) {
        console.error('theme fontSize is not provide')
      }
      return {
        ...atom,
        propKey: key,
        propValue: fontSizes[Number(value)],
        className: propKey,
      }
    },
    onAtomStyleCreate(atom) {
      atom.style = textSizePropToStyle(atom.propKey, atom.propValue)
      return atom
    },
  }
}
