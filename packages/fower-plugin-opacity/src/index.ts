import { FowerPlugin } from '@fower/types'

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
