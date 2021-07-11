import { FowerPlugin, store } from '@fower/core'

const Top = 'Top'
const Left = 'Left'
const Right = 'Right'
const Bottom = 'Bottom'

export const roundedMaps: Record<string, string[]> = {
  roundedTop: [Top + Left, Top + Right],
  roundedRight: [Top + Right, Bottom + Right],
  roundedBottom: [Bottom + Left, Bottom + Right],
  roundedLeft: [Top + Left, Bottom + Left],
  roundedTopLeft: [Top + Left],
  roundedTopRight: [Top + Right],
  roundedBottomLeft: [Bottom + Left],
  roundedBottomRight: [Bottom + Right],
}

export function isMatch(key: string) {
  return /^rounded(Top(Left|Right)?|Right|Bottom(Left|Right)?|Left)?/i.test(key)
}

/**
 * TODO: need improve
 * @param atomKey
 * @param value
 * @returns
 */
export function toStyle(atomKey: string, value: any) {
  let style: any = {}
  const radii: any = store.getTheme().radii || {}
  const radiiKeys = Object.keys(radii) || []
  const presetReg = new RegExp(`(${radiiKeys.join('|')})$`, 'i')

  if (atomKey === 'rounded') {
    const isDefault = typeof value === 'boolean'
    return {
      borderRadius: isDefault ? radii.medium : value,
    }
  }

  //  roundedNone|roundedSmall|roundedLarge|roundedHuge...
  if (presetReg.test(atomKey)) {
    const [themeKey] = atomKey.match(presetReg) || []

    const roundedValue = radii[themeKey.toLowerCase()]

    if (themeKey && typeof roundedValue === 'number') {
      const key = atomKey.replace(themeKey, '')
      if (key === 'rounded') {
        return { borderRadius: roundedValue }
      } else {
        for (const p of roundedMaps[key]) {
          style[`border${p}Radius`] = roundedValue
        }
        return style
      }
    }
  }

  for (const p of roundedMaps[atomKey] || []) {
    style[`border${p}Radius`] = value
  }
  return style
}

export default (): FowerPlugin => {
  return {
    isMatch,
    handleAtom(atom) {
      atom.style = toStyle(atom.key, atom.value)
      return atom
    },
  }
}
