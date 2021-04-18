import { Atom } from '@fower/atom'
import { store } from '@fower/store'
import { FowerPlugin } from '@fower/types'

export function isMatch(key: string) {
  return /^shadow/i.test(key)
}

export function toStyle({ key, value, isValueProp }: Atom) {
  if (isValueProp) return { boxShadow: value }
  const styleValue = key.replace('shadow', '')
  const shadowSize = styleValue.toLowerCase()
  const shadows: any = store.getTheme().shadows
  const shadowValue = shadows[shadowSize || 'base']
  return { boxShadow: shadowValue }
}

export default (): FowerPlugin => {
  return {
    isMatch: isMatch,
    handleAtom(atom) {
      atom.style = toStyle(atom)
      return atom
    },
  }
}
