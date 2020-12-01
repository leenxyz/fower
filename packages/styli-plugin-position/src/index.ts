import { getValue } from '@styli/core'
import { ModifierType, StyliPlugin } from '@styli/types'
import { isValidPropValue } from '@styli/utils'

export const G = {
  padding: 'padding',
  margin: 'margin',
  flex: 'flex',
  top: 'top',
  left: 'left',
  right: 'right',
  start: 'start',
  end: 'end',
  bottom: 'bottom',
  between: 'between',
  around: 'around',
  evenly: 'evenly',
  center: 'center',
  space: 'space',
  row: 'row',
  column: 'column',
  nowrap: 'nowrap',
  wrap: 'wrap',

  static: 'static',
  fixed: 'fixed',
  absolute: 'absolute',
  relative: 'relative',
  sticky: 'sticky',
}

export const positionKeys = [G.static, G.fixed, G.absolute, G.relative, G.sticky]

export const positionMaps: any = {
  t: G.top,
  l: G.left,
  r: G.right,
  b: G.bottom,
}

export function isPositionKey(key: string) {
  return /^[trbl](-.+)?$/gi.test(key) || positionKeys.includes(key)
}

export function positionPropToStyle(prop: string, propValue: any): any {
  /** @example absolute, relative  */
  if (positionKeys.includes(prop)) return { position: prop }

  /** @example T={0}, R={10}.. */
  if (/^[trbl]$/i.test(prop)) {
    return { [positionMaps[prop.toLowerCase()]]: getValue(propValue, ModifierType.position) }
  }

  const [key, symbol = '', value] = prop.split(/\b-*?/)
  const [, minus = ''] = symbol.split('')
  const lowerKey = key.toLowerCase()
  const val = isValidPropValue(propValue) ? propValue : minus + value

  return { [positionMaps[lowerKey]]: getValue(val, ModifierType.position) }
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
