import { StyliPlugin } from '@styli/types'
import { kebab } from '@styli/utils'

export function isCursorKey(key: string) {
  return /^cursor[a-z]*?$/i.test(key)
}

export function cursorPropToStyle(prop: string, propValue: any): any {
  if (prop === 'cursor') return { cursor: propValue }
  const value = prop.replace('cursor', '')
  return { cursor: kebab(value) }
}

export default (): StyliPlugin => {
  return {
    name: 'styli-plugin-cursor',
    isMatch: isCursorKey,
    onAtomStyleCreate(atom) {
      atom.style = cursorPropToStyle(atom.propKey, atom.propValue)
      return atom
    },
  }
}
