import { store } from '@fower/store'
import { FowerPlugin } from '@fower/types'

export function isMatch(key: string) {
  if (key === 'color') return true

  // color in theme
  const colors: any = store.theme.colors
  return !!colors[key]
}

export default (): FowerPlugin => {
  return {
    isMatch,
    handleAtom(atom) {
      const { key, value } = atom
      atom.style = {
        color: key === 'color' ? value : key,
      }
      atom.type = 'color'
      return atom
    },
  }
}
