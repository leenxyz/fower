import { StyliPlugin } from '@styli/types'

export const sizeMaps: Record<string, string[]> = {
  w: ['width'],
  h: ['height'],
  square: ['width', 'height'],
  circle: ['width', 'height', 'borderRadius'],
  minw: ['minWidth'],
  maxw: ['maxWidth'],
  minh: ['minHeight'],
  maxh: ['maxHeight'],
}

export function isMatch(key: string) {
  return /^([wh]|square|circle|min[hw]|max[hw])(-[\dA-Z-a-z]+)?$/i.test(key)
}

export default (): StyliPlugin => {
  return {
    isMatch,
    handleAtom(atom) {
      const { key, value } = atom
      atom.style = sizeMaps[key.toLowerCase()].reduce<any>(
        (style, cur) => ({ ...style, [cur]: value }),
        {},
      )
      return atom
    },
  }
}
