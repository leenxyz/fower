import { FowerPlugin } from '@fower/types'
import { store } from '@fower/store'

function isMatch(key: string) {
  return /^gradient[XY]$/i.test(key)
}

export default (): FowerPlugin => {
  return {
    isMatch,
    handleAtom(atom) {
      const { key, value } = atom
      const { colors } = store.theme
      const postfix = key.replace(/^gradient/, '').toLowerCase()
      const direction = postfix === 'x' ? 'right' : 'bottom'

      if (!Array.isArray(value)) return atom

      const stops = value.map((i: keyof typeof colors) => colors[i] || i).join(',')

      atom.style = {
        backgroundImage: `linear-gradient(to ${direction}, ${stops})`,
      }

      return atom
    },
  }
}
