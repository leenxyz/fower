import { Plugin } from '@styli/core'

export default (): Plugin => {
  return {
    onVisitProp(atom) {
      const { propKey } = atom
      const caseKeys = ['normalcase', 'uppercase', 'lowercase', 'capitalize']

      const isCaseKey = caseKeys.includes(propKey)

      if (!isCaseKey) return

      const value: any = propKey === 'normalcase' ? 'none' : propKey

      const key = 'textTransform'
      atom.style = { [key]: value }

      return atom
    },
  }
}
