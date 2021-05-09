import { store } from '@fower/store'
import { FowerPlugin } from '@fower/types'
import { downFirst } from '@fower/utils'

export function isMatch(key: string) {
  return /^font(Sans|Serif|Mono)?$/i.test(key)
}

export default (): FowerPlugin => {
  return {
    isMatch,
    handleAtom(atom) {
      const { key } = atom
      const fontFamilies: any = store.getTheme().fontFamilies
      const posfix = key.replace(/^font/i, '')
      const styleValue = fontFamilies[downFirst(posfix)]
      atom.style = { fontFamily: styleValue }
      return atom
    },
  }
}
