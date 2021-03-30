import { StyliPlugin } from '@styli/types'

export function isMatch(key: string) {
  return /^zIndex(--?\d+)?$/.test(key)
}

export default (): StyliPlugin => {
  return {
    isMatch,
    onAtomStyleCreate(atom) {
      atom.style = { zIndex: atom.propValue }
      return atom
    },
  }
}
