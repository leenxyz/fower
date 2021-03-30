import { StyliPlugin } from '@styli/types'
import { Atom } from '@styli/atom'
import { isValueProp, upFirst } from '@styli/utils'

export const G = {
  margin: 'margin',
  top: 'top',
  left: 'left',
  right: 'right',
  bottom: 'bottom',
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
  return /^m[ltrbxy]?(--?[\dA-Za-z]+){0,2}$/.test(key)
}

export function marginPropToStyle(atom: Atom) {
  const { propValue, key } = atom
  const style: any = {}

  const result = key.match(/^(m[ltrbxy]?)(-(-?[\d+a-z]+))?$/i) || []

  const [, matchKey = '', , value] = result
  const marginKey = matchKey.toLowerCase()

  const marginValue: any = isValueProp(propValue) ? propValue : value

  marginMaps[marginKey].forEach((k: any) => {
    style[k] = marginValue
  })

  return style
}

export default (): StyliPlugin => {
  return {
    isMatch: isMarginKey,
    onAtomStyleCreate(atom) {
      atom.style = marginPropToStyle(atom)
      return atom
    },
  }
}
