import { Atom } from '@fower/atom'
import { FowerPlugin } from '@fower/types'

export function isMatch(key: string) {
  return /^overflow[XY]?(Auto|Hidden|Visible|Scroll)?$/i.test(key)
}

export function toStyle({ key, value, isValueProp }: Atom): any {
  if (isValueProp) return { [key]: value }

  let result = key.match(/^(overflow[XY]?)(Auto|Hidden|Visible|Scroll)?$/i)
  let [, styleKey, styleValue] = result!

  styleKey = styleKey.replace(/[xy]$/i, (i) => i.toUpperCase())
  styleValue = styleValue.toLowerCase()

  return { [styleKey]: styleValue }
}

export default (): FowerPlugin => {
  return {
    isMatch,
    handleAtom(atom) {
      atom.style = toStyle(atom)
      return atom
    },
  }
}
