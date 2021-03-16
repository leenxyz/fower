import { styli } from '@styli/core'
import { StyliPlugin } from '@styli/types'
import { isValidPropValue } from '@styli/utils'

export const positionKeys = ['static', 'fixed', 'absolute', 'relative', 'sticky']

export function isPositionKey(key: string) {
  return /^(top|right|bottom|left)(-.+)?$/gi.test(key) || positionKeys.includes(key)
}

export function positionPropToStyle(prop: string, propValue: any): any {
  /** @example absolute, relative  */
  if (positionKeys.includes(prop)) return { position: prop }

  /** @example top={0}, right={10}... */
  if (/^(top|right|bottom|left)$/gi.test(prop)) {
    return { [prop]: styli.getValue(propValue) }
  }

  /** @example top-0, right-10, left--10... */
  const [key, symbol = '', value] = prop.split(/\b-*?/)
  const [, minus = ''] = symbol.split('')
  const val = isValidPropValue(propValue) ? propValue : minus + value
  return { [key]: styli.getValue(val) }
}

export default (): StyliPlugin => {
  return {
    name: 'styli-plugin-position',
    isMatch: isPositionKey,
    onAtomStyleCreate(atom) {
      atom.style = positionPropToStyle(atom.propKey, atom.propValue)
      return atom
    },
  }
}
