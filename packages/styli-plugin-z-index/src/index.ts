import { StyliPlugin } from '@styli/types'

export function isMatch(key: string) {
  return /^zIndex$/i.test(key)
}

export default (): StyliPlugin => {
  return {
    isMatch,
    handleAtom(atom) {
      atom.style = { zIndex: atom.value as any }
      return atom
    },
  }
}
