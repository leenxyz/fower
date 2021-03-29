import { StyliPlugin } from '@styli/types'

export default (): StyliPlugin => {
  return {
    name: 'styli-plugin-debug',
    isMatch(key) {
      return /^debug(Children)?/i.test(key)
    },
    onAtomStyleCreate(atom) {
      const { propKey } = atom

      if (/^debugChildren$/i.test(propKey)) {
        atom.meta.childSelector = '*'
      }

      atom.style = { border: '1px solid gold' }

      return atom
    },
  }
}
