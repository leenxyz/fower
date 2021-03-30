import { StyliPlugin } from '@styli/types'
import { isValueProp, upFirst } from '@styli/utils'

export const G = {
  padding: 'padding',
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

export const paddingMaps: any = {
  p: [G.padding],
  pl: [`${G.padding}${P.left}`],
  pt: [`${G.padding}${P.top}`],
  pr: [`${G.padding}${P.right}`],
  pb: [`${G.padding}${P.bottom}`],
  px: [`${G.padding}${P.left}`, `${G.padding}${P.right}`],
  py: [`${G.padding}${P.top}`, `${G.padding}${P.bottom}`],
}

export function isPaddingKey(key: string) {
  return /^p[ltrbxy]?(--?[\dA-Z]+){0,2}$/i.test(key)
}

export function paddingPropToStyle(prop: string, propValue: any) {
  const style: any = {}

  const result = prop.match(/^(p[ltrbxy]?)(-(-?[\d+a-z]+))?$/i) || []
  const [, matchKey = '', , value] = result
  const key = matchKey.toLowerCase()

  const paddingValue = isValueProp(propValue) ? propValue : value
  paddingMaps[key].forEach((k: any) => {
    style[k] = paddingValue
  })

  return style
}

export default (): StyliPlugin => {
  return {
    name: 'styli-plugin-padding',
    isMatch: isPaddingKey,
    onAtomStyleCreate(atom) {
      atom.style = paddingPropToStyle(atom.key, atom.propValue)
      return atom
    },
  }
}
