import { FowerPlugin } from '@fower/core'

export default (): FowerPlugin => {
  return {
    isMatch(key) {
      return /^list(disc|decimal|none)$/i.test(key)
    },
    handleAtom(atom) {
      const { key } = atom

      const value = key.replace(/^list/, '')
      atom.style = { listStyleType: value.toLowerCase() }

      return atom
    },
  }
}
