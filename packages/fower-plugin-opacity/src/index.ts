import { FowerPlugin } from '@fower/core'

export function isMatch(key: string) {
  return /^opacity$/.test(key)
}

export default (): FowerPlugin => {
  return {
    isMatch,
    handleAtom(atom) {
      atom.style = { opacity: Number(atom.value) / 100 }
      return atom
    },
  }
}
