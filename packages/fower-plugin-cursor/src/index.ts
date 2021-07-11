import { FowerPlugin } from '@fower/core'
import { kebab } from '@fower/utils'

export function isMatch(key: string) {
  return /^cursor[a-z]*?$/i.test(key)
}

export function toStyle(key: string, value: any): any {
  if (key === 'cursor') return { cursor: value }
  const styleValue = key.replace('cursor', '')
  return { cursor: kebab(styleValue) }
}

export default (): FowerPlugin => {
  return {
    isMatch,
    handleAtom(atom) {
      atom.style = toStyle(atom.key, atom.value)
      return atom
    },
  }
}
