import { StyliPlugin } from '@styli/types'

export default (): StyliPlugin => {
  return {
    isMatch(key) {
      const caseKeys = ['normalcase', 'uppercase', 'lowercase', 'capitalize']
      return caseKeys.includes(key)
    },
    handleAtom(atom) {
      const { key } = atom
      const value: any = key === 'normalcase' ? 'none' : key

      atom.style = { textTransform: value }

      return atom
    },
  }
}
