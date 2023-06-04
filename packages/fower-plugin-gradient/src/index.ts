import { FowerPlugin } from '@fower/core'

function isMatch(key: string) {
  return /^bgGradient[XY]?$/i.test(key)
}

export default (): FowerPlugin => {
  return {
    isMatch,
    handleAtom(atom, parser) {
      const { key, value } = atom
      const { colors } = parser.config.theme
      const postfix = key.replace(/^bgGradient/i, '').toLowerCase()
      const direction = postfix === 'x' ? 'right' : 'bottom'

      if (postfix === '') {
        atom.style = { backgroundImage: value }
        return atom
      }

      if (!Array.isArray(value)) return atom

      const stops = value.map((i: keyof typeof colors) => colors[i] || i).join(', ')

      atom.style = {
        backgroundImage: `linear-gradient(to ${direction}, ${stops})`,
      }

      return atom
    },
  }
}
