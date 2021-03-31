import { StyliPlugin } from '@styli/types'

const margin = 'margin'
const Top = 'Top'
const Left = 'Left'
const Right = 'Right'
const Bottom = 'Bottom'

export const marginMaps: Record<string, string[]> = {
  m: [margin],
  ml: [margin + Left],
  mt: [margin + Top],
  mr: [margin + Right],
  mb: [margin + Bottom],
  mx: [margin + Left, margin + Right],
  my: [margin + Top, margin + Bottom],
}

export function isMatch(key: string) {
  return /^m[ltrbxy]?(--?[\da-z]+)?$/i.test(key)
}

export default (): StyliPlugin => {
  return {
    isMatch,
    handleAtom(atom) {
      const { key, propValue } = atom
      atom.style = marginMaps[key].reduce<any>((r, cur) => ({ ...r, [cur]: propValue }), {})
      return atom
    },
  }
}
