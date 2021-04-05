import { StyliPlugin } from '@styli/types'
import { kebab } from '@styli/utils'

export function isCursorKey(key: string) {
  return /^cursor[a-z]*?$/i.test(key)
}

export function cursorPropToStyle(key: string, propValue: any): any {
  if (key === 'cursor') return { cursor: propValue }
  const value = key.replace('cursor', '')
  return { cursor: kebab(value) }
}

export default (): StyliPlugin => {
  return {
    isMatch: isCursorKey,
    handleAtom(atom) {
      atom.style = cursorPropToStyle(atom.key, atom.propValue)
      return atom
    },
  }
}
