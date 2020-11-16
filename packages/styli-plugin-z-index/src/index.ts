import { StyliPlugin } from '@styli/types'
import { isValidPropValue } from '@styli/utils'

export function isZIndexKey(key: string) {
  return /^zIndex(--?\d+)?$/.test(key)
}

export function zIndexPropToStyle(prop: string, propValue: any) {
  if (isValidPropValue(propValue)) return { zIndex: propValue }
  const [, symbol = '', value] = prop.split(/\b-*?/)
  const [, minus = ''] = symbol.split('')
  const zIndexValue = isValidPropValue(propValue) ? propValue : minus + value

  return { zIndex: zIndexValue }
}

export default (): StyliPlugin => {
  return {
    name: 'styli-plugin-z-index',
    isMatch: isZIndexKey,
    onVisitProp(atom) {
      atom.style = zIndexPropToStyle(atom.propKey, atom.propValue)
      return atom
    },
  }
}
