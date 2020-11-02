import { Plugin, getValue, ModifierType } from '@styli/core'
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
  rounded: [
    `${P.top}${P.left}`,
    `${P.top}${P.right}`,
    `${P.bottom}${P.left}`,
    `${P.bottom}${P.right}`,
  ],
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
  for (const p of roundedMaps[key]) {
    style[`border${p}Radius`] = Array.isArray(propValue)
      ? propValue.map((v) => getValue(v, ModifierType.border))
      : getValue(roundedValue, ModifierType.border)
  }
  return style
}

export default (): Plugin => {
  return {
    name: 'styli-plugin-rounded',
    isMatch: isRoundedKey,
    onVisitProp(atom) {
      atom.style = roundedPropToStyle(atom.propKey, atom.propValue)
      return atom
    },
  }
}
