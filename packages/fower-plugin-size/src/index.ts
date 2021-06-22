import { FowerPlugin } from '@fower/types'

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

const shortcupMaps: Record<string, string[]> = {
  square: ['w', 'h'],
  circle: ['w', 'h'],
}

export function isMatch(key: string) {
  return /^([wh]|square|circle|min[hw]|max[hw])$/i.test(key)
}

export default (): FowerPlugin => {
  return {
    isMatch,
    beforeParseProps(propItem, parser) {
      const { key, propKey } = propItem

      Object.keys(shortcupMaps).forEach((type) => {
        if (key !== type) return
        for (const item of shortcupMaps[type]) {
          const reg = new RegExp(`^${type}`)
          parser.propList.push({
            ...propItem,
            propKey: propKey.replace(reg, item),
            key: key.replace(reg, item),
          })
        }

        if (key === 'circle') {
          parser.propList.push({
            ...propItem,
            propKey: propKey.replace(/^circle/, 'rounded'),
            key: 'rounded',
          })
        }
      })
    },
    handleAtom(atom) {
      const { key, value } = atom
      if (['square', 'circle'].includes(key)) return atom
      atom.style = sizeMaps[key.toLowerCase()].reduce<any>(
        (style, cur) => ({ ...style, [cur]: value }),
        {},
      )
      return atom
    },
  }
}
