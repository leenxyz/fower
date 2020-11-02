import { Plugin } from '@styli/core'
import { downFirst, isValidPropValue, kebab } from '@styli/utils'

export const weights: any = {
  hairline: 100,
  thin: 200,
  light: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 'bold',
  extrabold: 800,
  black: 900,
}

export function isTextWeightKey(key: string) {
  return /^font(Hairline|Thin|Light|Normal|Medium|Semibold|Bold|Extrabold|Black)?$|^fontWeight(-.+)?$/.test(
    key,
  )
}

export function textWeightPropToStyle(prop: string, propValue: any) {
  if (isValidPropValue(propValue)) return { fontWeight: propValue }
  const [, second, third] = kebab(prop).split('-')
  if (second === 'weight') return { fontWeight: '' + third }
  return { fontWeight: '' + weights[downFirst(second)] || second }
}

export default (): Plugin => {
  return {
    name: 'styli-plugin-text-heading',
    isMatch: isTextWeightKey,
    onVisitProp(atom) {
      atom.style = textWeightPropToStyle(atom.propKey, atom.propValue)
      return atom
    },
  }
}
