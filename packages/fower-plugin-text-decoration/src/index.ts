import { FowerPlugin } from '@fower/types'
import { kebab } from '@fower/utils'

export default (): FowerPlugin => {
  return {
    isMatch(key) {
      const keys = ['textDecoration', 'underline', 'lineThrough', 'noUnderline']
      return keys.includes(key)
    },
    handleAtom(atom) {
      const { key } = atom
      const value: any =
        key === 'textDecoration' ? atom.value : key === 'noUnderline' ? 'none' : kebab(key)

      atom.style = { textDecoration: value }

      return atom
    },
  }
}
