import { FowerPlugin } from '@fower/core'
import { kebab } from '@fower/utils'

export default (): FowerPlugin => {
  return {
    isMatch(key) {
      return /^list(Inside|Outside|disc|circle|square|decimal|none|TradChineseInformal|LowerRoman|LowerAlpha|UpperAlpha|UpperRoman)$/i.test(
        key,
      )
    },
    handleAtom(atom) {
      const { key } = atom

      const value = key.replace(/^list/, '')
      const styleKey = /^(in|out)side$/i.test(value) ? 'Position' : 'Type'
      atom.style = { [`listStyle${styleKey}`]: kebab(value).toLowerCase() }
      return atom
    },
  }
}
