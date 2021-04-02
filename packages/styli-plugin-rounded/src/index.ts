import { styli } from '@styli/core'
import { StyliPlugin } from '@styli/types'

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

const presetReg = /(none|sm|md|lg|[23]?xl|full)$/i

export function isMatch(key: string) {
  return /^rounded([tlrb]|t[lr]|b[lr])?(none|sm|md|lg|[23]?xl|full)?(-.+)?$/i.test(key)
}
/**
 * TODO: need improve
 * @param atomKey
 * @param propValue
 * @returns
 */
export function roundedPropToStyle(atomKey: string, propValue: any) {
  let style: any = {}
  const borderRadius: any = styli.getTheme().radii

  if (atomKey === 'rounded') {
    const isBase = typeof propValue === 'boolean'
    return {
      borderRadius: isBase ? borderRadius['base'] : propValue,
    }
  }

  //  roundedNone|roundedSM|roundedXL|roundedFull..
  if (presetReg.test(atomKey)) {
    const [themeKey] = atomKey.match(presetReg) || []

    if (themeKey && borderRadius[themeKey.toLowerCase()]) {
      const key = atomKey.replace(themeKey, '')
      const roundedValue = borderRadius[themeKey.toLowerCase()]
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

  for (const p of roundedMaps[atomKey]) {
    style[`border${p}Radius`] = propValue
  }
  return style
}

export default (): StyliPlugin => {
  return {
    isMatch,
    handleAtom(atom) {
      atom.style = roundedPropToStyle(atom.key, atom.propValue)
      return atom
    },
  }
}
