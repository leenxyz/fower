import { styli } from '@styli/core'
import { StyliPlugin } from '@styli/types'
import { isValidPropValue, upFirst } from '@styli/utils'

export const G = {
  top: 'top',
  left: 'left',
  right: 'right',
  bottom: 'bottom',
}

export const P = {
  top: upFirst(G.top),
  right: upFirst(G.right),
  bottom: upFirst(G.bottom),
  left: upFirst(G.left),
}

export const roundedMaps: any = {
  roundedT: [`${P.top}${P.left}`, `${P.top}${P.right}`],
  roundedR: [`${P.top}${P.right}`, `${P.bottom}${P.right}`],
  roundedB: [`${P.bottom}${P.left}`, `${P.bottom}${P.right}`],
  roundedL: [`${P.top}${P.left}`, `${P.bottom}${P.left}`],
  roundedTL: [`${P.top}${P.left}`],
  roundedTR: [`${P.top}${P.right}`],
  roundedBL: [`${P.bottom}${P.left}`],
  roundedBR: [`${P.bottom}${P.right}`],
}

const presetReg = /(none|sm|md|lg|[23]?xl|full)$/i

export function isRoundedKey(key: string) {
  return /^rounded([TLRB]|T[LR]|B[LR])?(none|sm|md|lg|[23]?xl|full)?(-.+)?$/i.test(key)
}
/**
 * TODO: need improve
 * @param prop
 * @param propValue
 * @returns
 */
export function roundedPropToStyle(prop: string, propValue: any) {
  let style: any = {}
  const borderRadius = styli.getTheme('borderRadius')

  // <Box rounded></Box>
  if (prop === 'rounded' && typeof propValue === 'boolean') {
    return { borderRadius: borderRadius['base'] }
  }

  //  roundedNone|roundedSM|roundedXL|roundedFull..
  if (presetReg.test(prop) && typeof propValue === 'boolean') {
    const [themeKey] = prop.match(presetReg) || []
    if (themeKey && borderRadius[themeKey.toLowerCase()]) {
      const key = prop.replace(themeKey, '')
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

  const [key, value] = prop.split('-')
  const roundedValue = isValidPropValue(propValue) ? propValue : value

  /** @example rounded-4, rounded-8 */
  if (key === 'rounded') return { borderRadius: styli.getValue(roundedValue) }

  for (const p of roundedMaps[key]) {
    style[`border${p}Radius`] = styli.getValue(roundedValue)
  }
  return style
}

export default (): StyliPlugin => {
  return {
    name: 'styli-plugin-rounded',
    isMatch: isRoundedKey,
    onAtomStyleCreate(atom) {
      atom.style = roundedPropToStyle(atom.propKey, atom.propValue)
      return atom
    },
  }
}
