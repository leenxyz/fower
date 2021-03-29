import { StyliPlugin } from '@styli/types'

export default (): StyliPlugin => {
  return {
    name: 'styli-plugin-debug',
    isMatch(key) {
      return /^debug(Children)?/i.test(key)
    },
    onAtomStyleCreate(atom) {
      const { propKey } = atom

      if (propKey === 'debug') {
        atom.type = 'style'
        atom.style = { border: '1px solid gold' }
      } else {
        atom.type = 'style'
        // TODO:

        atom.style = {
          border: '1px solid gold',
          '*': { border: '1px solid gold' },
        }
      }

      return atom
    },
  }
}
