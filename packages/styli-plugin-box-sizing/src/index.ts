import { StyliPlugin } from '@styli/types'
import { kebab } from '@styli/utils'

function isMatch(key: string) {
  return /^(boxSizing|contentBox|borderBox)$/i.test(key)
}

export default (): StyliPlugin => {
  return {
    isMatch,
    handleAtom(atom) {
      const { key, value } = atom
      atom.style = {
        boxSizing: kebab(key === 'boxSizing' ? value : key) as any,
      }
      return atom
    },
  }
}
