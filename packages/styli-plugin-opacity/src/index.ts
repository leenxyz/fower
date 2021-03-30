import { StyliPlugin } from '@styli/types'

export function isMatch(key: string) {
  return /^opacity(-\d+)?$/.test(key)
}

export default (): StyliPlugin => {
  return {
    isMatch,
    onAtomStyleCreate(atom) {
      atom.style = { opacity: Number(atom.propValue) / 100 }
      return atom
    },
  }
}
