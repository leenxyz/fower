import { FowerPlugin } from '@fower/core'

export function isMatch(key: string) {
  return /^appearanceNone$/i.test(key)
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
