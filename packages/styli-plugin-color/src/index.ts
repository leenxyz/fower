import { styli } from '@styli/core'
import { StyliPlugin } from '@styli/types'

export function isMatch(key: string) {
  if (key === 'color') return true

  // color in theme
  const colors: any = styli.getColors()
  return !!colors[key]
}

export default (): StyliPlugin => {
  return {
    isMatch,
    handleAtom(atom) {
      const { key, value } = atom
      atom.style = {
        color: key === 'color' ? value : key,
      }
      return atom
    },
  }
}
