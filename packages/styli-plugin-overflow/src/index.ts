import { StyliPlugin } from '@styli/types'

export function isMatch(key: string) {
  return /^overflow[XY]?$/i.test(key)
}

export function toStyle(key: string, value: any): any {
  if (key === 'overflow') return { [key]: value }
  const styleKey = key.replace(/[a-z]$/, (last) => last.toUpperCase())
  return { [styleKey]: value }
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
