import { StyliPlugin } from '@styli/types'

export function isMatch(key: string) {
  return /^opacity$/.test(key)
}

export default (): StyliPlugin => {
  return {
    isMatch,
    handleAtom(atom) {
      atom.style = { opacity: Number(atom.value) / 100 }
      return atom
    },
  }
}
