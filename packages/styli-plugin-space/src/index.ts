import { StyliPlugin } from '@styli/types'

export function isMatch(key: string) {
  return /^space[xy]?$/i.test(key)
}

const spaceMap: Record<string, string[]> = {
  all: ['marginRight', 'marginBottom'],
  x: ['marginRight'],
  y: ['marginBottom'],
}

export function toStyle(key: string, value: any) {
  const position = key.replace(/^space/i, '') || 'all'

  let style: any = {}
  for (const key of spaceMap[position.toLowerCase()]) {
    style[key] = value
  }

  return style
}

export default (): StyliPlugin => {
  return {
    isMatch,
    handleAtom(atom) {
      atom.meta.childSelector = '>*:not(:last-child)'
      atom.style = toStyle(atom.key, atom.value)
      return atom
    },
  }
}
