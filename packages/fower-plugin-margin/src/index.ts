import { FowerPlugin } from '@fower/types'

const margin = 'margin'

export const marginMaps: Record<string, string[]> = {
  ml: [margin + 'Left'],
  mt: [margin + 'Top'],
  mr: [margin + 'Right'],
  mb: [margin + 'Bottom'],
}

const shortcupMaps: Record<string, string[]> = {
  mx: ['ml', 'mr'],
  my: ['mt', 'mb'],
  m: ['mt', 'mr', 'mb', 'ml'],
}

export function isMatch(key: string) {
  return /^m[ltrbxy]?$/i.test(key)
}

export default (): FowerPlugin => {
  return {
    isMatch,
    beforeParseProps(propItem, parser) {
      const { key, propKey } = propItem

      Object.keys(shortcupMaps).forEach((type) => {
        if (key !== type) return

        for (const marginType of shortcupMaps[type]) {
          const reg = new RegExp(`^${type}`)
          parser.propList.push({
            ...propItem,
            propKey: propKey.replace(reg, marginType),
            key: key.replace(reg, marginType),
          })
        }
      })
    },
    handleAtom(atom) {
      const { key, value } = atom
      if (/^m[xy]?$/.test(key)) return atom
      atom.style = marginMaps[key].reduce<any>((r, cur) => ({ ...r, [cur]: value }), {})
      return atom
    },
  }
}
