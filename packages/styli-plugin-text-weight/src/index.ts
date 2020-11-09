import { Plugin, styli } from '@styli/core'
import { downFirst, isValidPropValue, kebab } from '@styli/utils'

export function isTextWeightKey(key: string) {
  return /^font(Hairline|Thin|Light|Normal|Medium|Semibold|Bold|Extrabold|Black)?$|^fontWeight(-.+)?$/.test(
    key,
  )
}

export function textWeightPropToStyle(prop: string, propValue: any) {
  if (isValidPropValue(propValue)) return { fontWeight: propValue }
  const [, second, third] = kebab(prop).split('-')
  if (second === 'weight') return { fontWeight: '' + third }

  const weights = styli.getTheme('fontWeights') || {}

  return { fontWeight: '' + weights[downFirst(second)] || second }
}

export default (): Plugin => {
  return {
    name: 'styli-plugin-text-weight',
    isMatch: isTextWeightKey,
    onVisitProp(atom) {
      atom.style = textWeightPropToStyle(atom.propKey, atom.propValue)
      return atom
    },
  }
}
