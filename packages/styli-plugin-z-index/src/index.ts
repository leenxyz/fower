import { StyliPlugin } from '@styli/types'
import { isValidPropValue } from '@styli/utils'

export function isZIndexKey(key: string) {
  return /^zIndex(--?\d+)?$/.test(key)
}

export function zIndexPropToStyle(prop: string, propValue: any) {
  const [, , value] = prop.match(/^zIndex(-(-?\d+))?/) || []
  const zIndexValue = isValidPropValue(propValue) ? propValue : value
  return { zIndex: zIndexValue }
}

export default (): StyliPlugin => {
  return {
    name: 'styli-plugin-z-index',
    isMatch: isZIndexKey,
    onAtomStyleCreate(atom) {
      atom.style = zIndexPropToStyle(atom.propKey, atom.propValue)
      return atom
    },
  }
}
