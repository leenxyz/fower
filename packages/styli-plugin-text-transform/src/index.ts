import { StyliPlugin } from '@styli/types'

export default (): StyliPlugin => {
  return {
    name: 'styli-plugin-text-transform',
    isMatch(key) {
      const caseKeys = ['normalcase', 'uppercase', 'lowercase', 'capitalize']
      return caseKeys.includes(key)
    },
    onAtomStyleCreate(atom) {
      const { propKey } = atom

      const value: any = propKey === 'normalcase' ? 'none' : propKey

      const key = 'textTransform'
      atom.style = { [key]: value }

      return atom
    },
  }
}
