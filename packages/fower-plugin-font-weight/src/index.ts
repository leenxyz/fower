import { store } from '@fower/store'
import { FowerPlugin } from '@fower/types'
import { downFirst } from '@fower/utils'

export function isMatch(key: string) {
  return /^font(Hairline|Thin|Light|Normal|Medium|Semibold|Bold|Extrabold|Black)?$|^fontWeight$/i.test(
    key,
  )
}

export default (): FowerPlugin => {
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
