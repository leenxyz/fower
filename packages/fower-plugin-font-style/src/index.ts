import { FowerPlugin } from '@fower/types'

export function isMatch(key: string) {
  return /^(not)?Italic$/i.test(key)
}

export default (): FowerPlugin => {
  return {
    isMatch,
    handleAtom(atom) {
      const { key } = atom
      atom.style = { fontStyle: key === 'italic' ? 'italic' : 'normal' }
      return atom
    },
  }
}
