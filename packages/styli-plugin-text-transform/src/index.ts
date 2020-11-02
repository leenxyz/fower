import { Plugin } from '@styli/core'

export default (): Plugin => {
  return {
    name: 'styli-plugin-text-heading',
    isMatch(key) {
      const caseKeys = ['normalcase', 'uppercase', 'lowercase', 'capitalize']
      return caseKeys.includes(key)
    },
    onVisitProp(atom) {
      const { propKey } = atom

      const value: any = propKey === 'normalcase' ? 'none' : propKey

      const key = 'textTransform'
      atom.style = { [key]: value }

      return atom
    },
  }
}
