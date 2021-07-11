import { FowerPlugin } from '@fower/core'

const padding = 'padding'
const Top = 'Top'
const Left = 'Left'
const Right = 'Right'
const Bottom = 'Bottom'

export const paddingMaps: Record<string, string[]> = {
  p: [padding],
  pl: [padding + Left],
  pt: [padding + Top],
  pr: [padding + Right],
  pb: [padding + Bottom],
  px: [padding + Left, padding + Right],
  py: [padding + Top, padding + Bottom],
}

export function isMatch(key: string) {
  return /^p[ltrbxy]?(--?[\da-z]+)?$/i.test(key)
}

export default (): FowerPlugin => {
  return {
    isMatch,
    handleAtom(atom) {
      const { key, value } = atom
      atom.style = paddingMaps[key].reduce<any>((r, cur) => ({ ...r, [cur]: value }), {})
      return atom
    },
  }
}
