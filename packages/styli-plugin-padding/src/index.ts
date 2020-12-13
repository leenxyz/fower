import { styli } from '@styli/core'
import { StyliPlugin } from '@styli/types'
import { isValidPropValue, upFirst } from '@styli/utils'

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
  return /^p[ltrbxy]?(--?[\dA-Za-z]+){0,2}$/.test(key)
}

export function paddingPropToStyle(prop: string, propValue: any) {
  const style: any = {}
  const [key, ...values] = prop.split(/\b/)

  // ['--','10px', '-', '10px] => ['-10px', '10px]
  const paddingValues = values.reduce((result, cur, idx) => {
    if (idx % 2) return result
    return [...result, (cur.length === 2 ? '-' : '') + values[idx + 1]]
  }, [] as any)

  // p-10px--5px
  if (paddingValues.length === 2) {
    const [x, y] = paddingValues
    paddingMaps['px'].forEach((k: any) => {
      style[k] = styli.getValue(x)
    })

    paddingMaps['py'].forEach((k: any) => {
      style[k] = styli.getValue(y)
    })
  } else {
    const paddingValue = isValidPropValue(propValue) ? propValue : paddingValues[0]
    paddingMaps[key].forEach((k: any) => {
      style[k] = styli.getValue(paddingValue)
    })
  }
  return style
}

export default (): StyliPlugin => {
  return {
    name: 'styli-plugin-padding',
    isMatch: isPaddingKey,
    beforeAtomStyleCreate(atom) {
      const { propKey, propValue } = atom
      const [, key, value] = propKey.match(/^([a-zA-Z]+)(\d+)$/) || []
      if (!key || !value || !propValue || !paddingMaps[key]) return atom

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
      atom.style = paddingPropToStyle(atom.propKey, atom.propValue)
      return atom
    },
  }
}
