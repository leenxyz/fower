import { styli } from '@styli/core'
import { StyliPlugin } from '@styli/types'
import { downFirst } from '@styli/utils'

export function isMatch(key: string) {
  return /^font(Hairline|Thin|Light|Normal|Medium|Semibold|Bold|Extrabold|Black)?$|^fontWeight(-.+)?$/i.test(
    key,
  )
}

export default (): StyliPlugin => {
  return {
    isMatch,
    handleAtom(atom) {
      const { key = '', propValue } = atom
      const weights: any = styli.getTheme().fontWeights
      const posfix = key.replace(/^font/i, '')
      const value = /^weight$/i.test(posfix) ? propValue : weights[downFirst(posfix)]
      atom.style = { fontWeight: value }
      return atom
    },
  }
}
