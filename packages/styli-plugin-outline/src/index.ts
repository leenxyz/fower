import { StyliPlugin } from '@styli/types'
import { isValueProp } from '@styli/utils'

export function isMatch(key: string) {
  return key === 'outline' || isOutLineNone(key) || isOutLineOffset(key)
}

function isOutLineNone(key: string) {
  return /^outlineNone$/i.test(key)
}

function isOutLineOffset(key: string) {
  return /^outlineOffset$/i.test(key)
}

export function toStyle(key: string, value: any): any {
  if (isOutLineNone(key)) return { outline: 'none' }
  if (isOutLineOffset(key)) return { outlineOffset: value }

  return { outline: isValueProp(value) ? value : 'none' }
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
