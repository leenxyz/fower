import { StyliPlugin } from '@styli/types'

const reg = /^(in)?visible$/
const isVisibility = (key: string) => key === 'visibility'

function isMatch(key: string) {
  return isVisibility(key) || reg.test(key)
}

export default (): StyliPlugin => {
  return {
    isMatch,
    handleAtom(atom) {
      const { key } = atom
      if (isVisibility(key)) {
        atom.style = { visibility: atom.value as any }
      }

      if (key === 'visible') {
        atom.style = { visibility: 'visible' }
      }

      if (key === 'invisible') {
        atom.style = { visibility: 'hidden' }
      }

      return atom
    },
  }
}
