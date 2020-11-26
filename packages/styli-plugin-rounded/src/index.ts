import { getValue } from '@styli/core'
import { StyliPlugin, ModifierType } from '@styli/types'
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

export function isRoundedKey(key: string) {
  return /^rounded([TLRB]|T[LR]|B[LR])?(-.+)?$/.test(key)
}

export function roundedPropToStyle(prop: string, propValue: any) {
  let style: any = {}
  const [key, value] = prop.split('-')
  const roundedValue = isValidPropValue(propValue) ? propValue : value

  /** @example rounded-4, rounded-8 */
  if (key === 'rounded') return { borderRadius: getValue(roundedValue, ModifierType.border) }

  /** @example roundedFull */
  if (/^roundedFull$/i.test(key)) return { borderRadius: '9999px' }

  /** @example roundedNone */
  if (/^roundedNone$/i.test(key)) return { borderRadius: 0 }

  for (const p of roundedMaps[key]) {
    style[`border${p}Radius`] = getValue(roundedValue, ModifierType.border)
  }
  return style
}

export default (): StyliPlugin => {
  return {
    name: 'styli-plugin-rounded',
    isMatch: isRoundedKey,
    onVisitProp(atom) {
      atom.style = roundedPropToStyle(atom.propKey, atom.propValue)
      return atom
    },
  }
}
