import { FowerPlugin } from '@fower/types'

export function isMatch(key: string) {
  return /^appearancNone$/i.test(key)
}

export default (): FowerPlugin => {
  return {
    isMatch,
    handleAtom(atom) {
      atom.style = { appearance: 'none' }
      return atom
    },
  }
}
