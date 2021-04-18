import { FowerPlugin } from '@fower/types'

export function isMatch(key: string) {
  return /^zIndex$/i.test(key)
}

export default (): FowerPlugin => {
  return {
    isMatch,
    handleAtom(atom) {
      atom.style = { zIndex: atom.value as any }
      return atom
    },
  }
}
