import { FowerPlugin } from '@fower/types'

const padding = 'padding'

export const paddingMaps: Record<string, string[]> = {
  pl: [padding + 'Left'],
  pt: [padding + 'Top'],
  pr: [padding + 'Right'],
  pb: [padding + 'Bottom'],
}

const shortcupMaps: Record<string, string[]> = {
  px: ['pl', 'pr'],
  py: ['pt', 'pb'],
  p: ['pt', 'pr', 'pb', 'pl'],
}

export function isMatch(key: string) {
  return /^p[ltrbxy]?(-?-?[\da-z]+)?$/i.test(key)
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
      })
    },
    handleAtom(atom) {
      const { key, value } = atom
      if (/^p[xy]?$/.test(key)) return atom
      atom.style = paddingMaps[key].reduce<any>((r, cur) => ({ ...r, [cur]: value }), {})
      return atom
    },
  }
}
