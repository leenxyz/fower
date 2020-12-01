import { styli } from '@styli/core'
import { StyliPlugin } from '@styli/types'
import { downFirst } from '@styli/utils'

export function isTextWeightKey(key: string) {
  return /^font([Hh]airline|[Tt]hin|[Ll]ight|[Nn]ormal|[Mm]edium|[Ss]emibold|[Bb]old|[Ee]xtrabold|[Bb]lack)?$|^font[Ww]eight(-.+)?$/.test(
    key,
  )
}

export function textWeightPropToStyle(prop: string, propValue: any) {
  const value = prop.replace(/^font|-.+$/g, '')

  if (value.toLowerCase() === 'weight') {
    const [, weightValue] = prop.split('-')
    return { fontWeight: weightValue || propValue }
  }

  const weights = styli.getTheme('fontWeights') || {}
  return { fontWeight: weights[downFirst(value)] || value }
}

export default (): StyliPlugin => {
  return {
    name: 'styli-plugin-text-weight',
    isMatch: isTextWeightKey,
    onAtomStyleCreate(atom) {
      atom.style = textWeightPropToStyle(atom.propKey, atom.propValue)
      return atom
    },
  }
}
