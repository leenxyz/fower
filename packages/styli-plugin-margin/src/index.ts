import { getValue, styli } from '@styli/core'
import { ModifierType, StyliPlugin } from '@styli/types'
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
  return /^m[ltrbxy]?(--?[\dA-Za-z]+){0,2}$/.test(key)
}

export function marginPropToStyle(prop: string, propValue: any) {
  const style: any = {}
  const [key, ...values] = prop.split(/\b/)

  // ['--','10px', '-', '10px] => ['-10px', '10px]
  const marginValues = values.reduce((result, cur, idx) => {
    if (idx % 2) return result
    return [...result, (cur.length === 2 ? '-' : '') + values[idx + 1]]
  }, [] as any)

  // m-10px--5px
  if (marginValues.length === 2) {
    const [x, y] = marginValues
    marginMaps['mx'].forEach((k: any) => {
      style[k] = getValue(x, ModifierType.margin)
    })

    marginMaps['my'].forEach((k: any) => {
      style[k] = getValue(y, ModifierType.margin)
    })
  } else {
    const marginValue = isValidPropValue(propValue) ? propValue : marginValues[0]
    marginMaps[key].forEach((k: any) => {
      style[k] = getValue(marginValue, ModifierType.margin)
    })
  }

  return style
}

export default (): StyliPlugin => {
  return {
    name: 'styli-plugin-margin',
    isMatch: isMarginKey,
    beforeVisitProp(atom) {
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
    onVisitProp(atom) {
      atom.style = marginPropToStyle(atom.propKey, atom.propValue)
      return atom
    },
  }
}
