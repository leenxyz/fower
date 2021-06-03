import { store } from '@fower/store'
import { FowerPlugin } from '@fower/types'

const Top = 'Top'
const Left = 'Left'
const Right = 'Right'
const Bottom = 'Bottom'

export const roundedMaps: Record<string, string[]> = {
  roundedT: [Top + Left, Top + Right],
  roundedR: [Top + Right, Bottom + Right],
  roundedB: [Bottom + Left, Bottom + Right],
  roundedL: [Top + Left, Bottom + Left],
  roundedTL: [Top + Left],
  roundedTR: [Top + Right],
  roundedBL: [Bottom + Left],
  roundedBR: [Bottom + Right],
}

export function isMatch(key: string) {
  return /^rounded([tlrb]|t[lr]|b[lr])?/i.test(key)
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
    const isBase = typeof value === 'boolean'
    return {
      borderRadius: isBase ? radii['base'] : value,
    }
  }

  //  roundedNone|roundedSM|roundedXL|roundedFull...
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
