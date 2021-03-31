import { StyliPlugin } from '@styli/types'

function isMatch(key: string) {
  return key === 'visibility'
}

export default (): StyliPlugin => {
  return {
    isMatch,
    handleAtom(atom) {
      atom.style = { [atom.propKey]: atom.propValue }
      return atom
    },
  }
}
