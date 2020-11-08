import { getValue, ModifierType, Plugin, styli } from '@styli/core'
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
  return /^p[ltrbxy]?(-.+)?$/.test(key)
}

export function paddingPropToStyle(prop: string, propValue: any) {
  const style: any = {}
  const [key, value] = prop.split('-')

  const paddingValue = isValidPropValue(propValue) ? propValue : value

  paddingMaps[key].forEach((k: any) => {
    style[k] = Array.isArray(propValue)
      ? propValue.map((v) => getValue(v, ModifierType.padding))
      : getValue(paddingValue, ModifierType.padding)
  })

  return style
}

export default (): Plugin => {
  return {
    name: 'styli-plugin-padding',
    isMatch: isPaddingKey,
    beforeVisitProp(atom) {
      const { propKey, propValue } = atom
      const [, key, value] = propKey.match(/^([a-zA-Z]+)(\d+)$/) || []
      if (!key || !value || !propValue || !paddingMaps[key]) return atom

      const spacing = styli.getTheme<string[]>('spacing') || []

      if (!spacing.length) {
        console.error('theme spacing is not provide')
      }

      return { ...atom, propKey: key, propValue: spacing[Number(value)], className: propKey }
    },
    onVisitProp(atom) {
      atom.style = paddingPropToStyle(atom.propKey, atom.propValue)
      return atom
    },
    afterVisitProp(initAtom, atom) {
      const { propValue, propKey } = initAtom
      return { ...atom, propValue, propKey }
    },
  }
}
