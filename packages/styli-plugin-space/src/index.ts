import { StyliPlugin } from '@styli/types'

export function isMatch(key: string) {
  return /^space[xy]?(-[\da-z]+)?$/i.test(key)
}

const spaceMap: Record<string, string[]> = {
  all: ['marginRight', 'marginBottom'],
  x: ['marginRight'],
  y: ['marginBottom'],
}

export function spacePropToStyle(key: string, propValue: any) {
  const position = key.replace(/^space/i, '') || 'all'

  let style: any = {}
  for (const key of spaceMap[position.toLowerCase()]) {
    style[key] = propValue
  }

  return style
}

export default (): StyliPlugin => {
  return {
    isMatch,
    onAtomStyleCreate(atom) {
      atom.meta.childSelector = '>*:not(:last-child)'
      atom.style = spacePropToStyle(atom.key, atom.propValue)
      return atom
    },
  }
}
