import { store } from '@styli/store'
import { StyliPlugin } from '@styli/types'
import { downFirst } from '@styli/utils'

export function isMatch(key: string) {
  return /^font(Hairline|Thin|Light|Normal|Medium|Semibold|Bold|Extrabold|Black)?$|^fontWeight$/i.test(
    key,
  )
}

export default (): StyliPlugin => {
  return {
    isMatch,
    handleAtom(atom) {
      const { key, value } = atom
      const weights: any = store.getTheme().fontWeights
      const posfix = key.replace(/^font/i, '')
      const styleValue = /^weight$/i.test(posfix) ? value : weights[downFirst(posfix)]
      atom.style = { fontWeight: styleValue }
      return atom
    },
  }
}
