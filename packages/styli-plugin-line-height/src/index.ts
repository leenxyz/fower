import { styli } from '@styli/core'
import { StyliPlugin } from '@styli/types'
import { downFirst, isValueProp } from '@styli/utils'

export function isMatch(key: string) {
  return /^leading(None|Tight|Snug|Normal|Relaxed|Loose|-.+)?$/i.test(key)
}

export function toStyle(value: any): any {
  if (isValueProp(value)) return { lineHeight: value }

  const lineHeights: any = styli.getTheme().lineHeights
  const presetValue = lineHeights[downFirst(value)]

  if (presetValue) return { lineHeight: presetValue }

  return { lineHeight: value }
}

export default (): StyliPlugin => {
  return {
    isMatch,
    handleAtom(atom) {
      atom.style = toStyle(atom.value)
      return atom
    },
  }
}
