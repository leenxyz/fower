import { Atom } from '@styli/atom'
import { store } from '@styli/store'
import { StyliPlugin } from '@styli/types'
import { downFirst } from '@styli/utils'

export function isMatch(key: string) {
  return /^leading(None|Tight|Snug|Normal|Relaxed|Loose)?$/i.test(key)
}

export function toStyle({ key, value, isValueProp }: Atom): any {
  if (isValueProp) return { lineHeight: value }

  const lineHeights: any = store.getTheme().lineHeights
  const type = key.replace(/^leading/, '')
  const presetValue = lineHeights[downFirst(type)]

  if (presetValue) return { lineHeight: presetValue }

  return { lineHeight: value }
}

export default (): StyliPlugin => {
  return {
    isMatch,
    handleAtom(atom) {
      atom.style = toStyle(atom)
      return atom
    },
  }
}
