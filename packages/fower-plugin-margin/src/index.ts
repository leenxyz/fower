import { FowerPlugin } from '@fower/types'

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
  return /^m[ltrbxy]?$/i.test(key)
}

export default (): FowerPlugin => {
  return {
    isMatch,
    handleAtom(atom) {
      console.log('----atom:', atom)
      const { key, value } = atom
      atom.style = marginMaps[key].reduce<any>((r, cur) => ({ ...r, [cur]: value }), {})
      return atom
    },
  }
}
