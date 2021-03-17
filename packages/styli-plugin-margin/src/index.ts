import { styli } from '@styli/core'
import { StyliPlugin } from '@styli/types'
import { isValidPropValue, upFirst } from '@styli/utils'

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

export function marginPropToStyle(prop: string, propValue: any) {
  const style: any = {}

  const [, matchKey = '', , xValue, , yValue] = prop.match(/^(m[ltrbxy]?)(-(-?[\d+A-Z]+))?(-(-?[\d+A-Z]+))?$/i) || []
  const key = matchKey.toLowerCase()

  if (xValue && yValue) {
    marginMaps['mx'].forEach((k: any) => {
      style[k] = styli.getValue(xValue)
    })
    marginMaps['my'].forEach((k: any) => {
      style[k] = styli.getValue(yValue)
    })
    return style
  }

  const marginValue = isValidPropValue(propValue) ? propValue : xValue
  marginMaps[key].forEach((k: any) => {
    style[k] = styli.getValue(marginValue)
  })

  return style
}

export default (): StyliPlugin => {
  return {
    name: 'styli-plugin-margin',
    isMatch: isMarginKey,
    beforeAtomStyleCreate(atom) {
      const { propKey } = atom
      const [, key, value] = propKey.match(/^([a-zA-Z]+)(\d+)$/) || []
      if (!key || !value || !marginMaps[key]) return atom

      const spacing = styli.getTheme<string[]>('spacing') || []

      if (!spacing.length) {
        console.error('theme spacing is not provide')
      }

      return {
        ...atom,
        propKey: key,
        propValue: spacing[Number(value)],
        className: propKey,
      }
    },
    onAtomStyleCreate(atom) {
      atom.style = marginPropToStyle(atom.propKey, atom.propValue)
      return atom
    },
  }
}
