import { styli } from '@styli/core'
import { StyliPlugin } from '@styli/types'
import { downFirst, isValueProp } from '@styli/utils'

export function isMatch(key: string) {
  return /^leading(None|Tight|Snug|Normal|Relaxed|Loose|-.+)?$/i.test(key)
}

export function toStyle(key: string, value: any): any {
  if (isValueProp(value)) return { lineHeight: value }

  const lineHeights: any = styli.getTheme().lineHeights
  const type = key.replace(/^leading/, '')
  const presetValue = lineHeights[downFirst(type)]

  if (presetValue) return { lineHeight: presetValue }

  return { lineHeight: value }
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
