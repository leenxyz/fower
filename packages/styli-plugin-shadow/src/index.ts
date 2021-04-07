import { Atom } from '@styli/atom'
import { styli } from '@styli/core'
import { StyliPlugin } from '@styli/types'

export function isMatch(key: string) {
  return /^shadow/i.test(key)
}

export function toStyle({ key, value, isValueProp }: Atom) {
  if (isValueProp) return { boxShadow: value }
  const styleValue = key.replace('shadow', '')
  const shadowSize = styleValue.toLowerCase()
  const shadows: any = styli.getTheme().shadows
  const shadowValue = shadows[shadowSize || 'base']

  if (!shadowValue) {
    console.error('can‘t find shadow size:', shadowValue)
  }
  return { boxShadow: shadowValue }
}

export default (): StyliPlugin => {
  return {
    isMatch: isMatch,
    handleAtom(atom) {
      atom.style = toStyle(atom)
      return atom
    },
  }
}
