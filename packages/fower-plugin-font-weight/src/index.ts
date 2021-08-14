import { FowerPlugin } from '@fower/core'
import { downFirst } from '@fower/utils'

export function isMatch(key: string) {
  return /^font(Hairline|Thin|Light|Normal|Medium|Semibold|Bold|Extrabold|Black)?$|^fontWeight$/i.test(
    key,
  )
}

export default (): FowerPlugin => {
  return {
    isMatch,
    handleAtom(atom, parser) {
      const { key, value } = atom
      const weights: any = parser.config.theme.fontWeights
      const postfix = key.replace(/^font/i, '')
      const styleValue = /^weight$/i.test(postfix) ? value : weights[downFirst(postfix)]
      atom.style = { fontWeight: styleValue }
      return atom
    },
  }
}
