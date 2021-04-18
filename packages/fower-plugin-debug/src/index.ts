import { FowerPlugin } from '@fower/types'

export const borderValue = '1px solid gold'

export default (): FowerPlugin => {
  return {
    isMatch(key) {
      return /^debug(Children)?/i.test(key)
    },
    handleAtom(atom) {
      const { propKey } = atom

      if (/^debugChildren$/i.test(propKey)) {
        atom.meta.childSelector = '*'
      }

      atom.style = { border: borderValue }

      return atom
    },
  }
}
