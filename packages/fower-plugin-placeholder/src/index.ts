import { Atom, store } from '@fower/core'
import { FowerPlugin } from '@fower/core'
import { downFirst } from '@fower/utils'

function isMatch(key: string) {
  return /^placeholder.+/i.test(key)
}

function toStyle({ key }: Atom): any {
  const colors: any = store.theme.colors
  const postfix = key.replace(/^placeholder/, '')

  const colorName = downFirst(postfix)
  if (colors[colorName]) return { color: colorName }

  return undefined
}

export default (): FowerPlugin => {
  return {
    isMatch,
    handleAtom(atom) {
      atom.meta.pseudo = 'placeholder'
      atom.meta.pseudoPrefix = '::'
      atom.style = toStyle(atom)
      return atom
    },
  }
}
