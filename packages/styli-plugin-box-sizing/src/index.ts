import { StyliPlugin } from '@styli/types'
import { kebab } from '@styli/utils'

const keys = ['boxSizing', 'contentBox', 'borderBox']

function isMatch(key: string) {
  return keys.includes(key)
}

function toStyle(key: string, value: any): any {
  if (key === 'boxSizing') return { [key]: value }
  return { boxSizing: kebab(key) }
}

export default (): StyliPlugin => {
  return {
    isMatch,
    handleAtom(atom) {
      atom.style = toStyle(atom.key, atom.value)
      return atom
    },
  }
}
