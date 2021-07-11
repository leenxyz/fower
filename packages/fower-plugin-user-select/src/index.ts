import { FowerPlugin } from '@fower/core'

export function isMatch(key: string) {
  return /^select(none|text|all|auto)$/i.test(key)
}

export default (): FowerPlugin => {
  return {
    isMatch,
    handleAtom(atom) {
      const value: any = atom.key.replace('select', '').toLowerCase()
      atom.style = { userSelect: value }
      return atom
    },
  }
}
