import { FowerPlugin } from '@fower/core'
import { kebab } from '@fower/utils'

export default (): FowerPlugin => {
  return {
    isMatch(key) {
      return /^list(disc|circle|square|decimal|none|TradChineseInformal|LowerRoman|LowerAlpha|UpperAlpha|UpperRoman)$/i.test(
        key,
      )
    },
    handleAtom(atom) {
      const { key } = atom

      const value = key.replace(/^list/, '')
      atom.style = { listStyleType: kebab(value).toLowerCase() }

      return atom
    },
  }
}
