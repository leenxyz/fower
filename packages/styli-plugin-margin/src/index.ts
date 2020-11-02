import { getValue, ModifierType, Plugin } from '@styli/core'
import { isValidPropValue, upFirst } from '@styli/utils'

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

export const P = {
  top: upFirst(G.top),
  right: upFirst(G.right),
  bottom: upFirst(G.bottom),
  left: upFirst(G.left),
}

export const marginMaps: any = {
  m: [G.margin],
  ml: [`${G.margin}${P.left}`],
  mt: [`${G.margin}${P.top}`],
  mr: [`${G.margin}${P.right}`],
  mb: [`${G.margin}${P.bottom}`],
  mx: [`${G.margin}${P.left}`, `${G.margin}${P.right}`],
  my: [`${G.margin}${P.top}`, `${G.margin}${P.bottom}`],
}

export function isMarginKey(key: string) {
  return /^m[ltrbxy]?(-.+)?$/.test(key)
}

export function marginPropToStyle(prop: string, propValue: any) {
  const style: any = {}
  const [key, symbol = '', value] = prop.split(/\b-*?/)
  const [, minus = ''] = symbol.split('')
  const marginValue = isValidPropValue(propValue) ? propValue : minus + value

  marginMaps[key].forEach((k: any) => {
    style[k] = Array.isArray(propValue)
      ? propValue.map((v) => getValue(v, ModifierType.margin))
      : getValue(marginValue, ModifierType.margin)
  })

  return style
}

export default (): Plugin => {
  return {
    name: 'styli-plugin-margin',
    isMatch: isMarginKey,
    onVisitProp(atom) {
      atom.style = marginPropToStyle(atom.propKey, atom.propValue)
      return atom
    },
  }
}
