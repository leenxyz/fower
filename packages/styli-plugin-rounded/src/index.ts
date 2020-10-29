import { Plugin, getValue } from '@styli/core'
import { isValidPropValue, kebab, upFirst } from '@styli/utils'

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

export default (): Plugin => {
  return {
    onVisitProp({ propKey, propValue }, rule) {
      if (!isRoundedKey(propKey)) return

      const [key, value] = propKey.split('-')

      roundedMaps[key].forEach((k: string) => {
        const attrKey = `border${k}Radius`
        if (Array.isArray(propValue)) {
          propValue.forEach((value, idx) => {
            const cssFragment = rule.cssFragmentList![idx] || ''
            const attrValue = getValue(value)
            rule.cssFragmentList![idx] = `${cssFragment}${attrKey}:${attrValue};`
          })
        } else {
          const rValue = isValidPropValue(propValue) ? propValue : value
          const attrValue = getValue(rValue)
          rule.style = { [attrKey]: attrValue }
          rule.cssFragment = `${kebab(attrKey)}:${attrValue};`
        }
      })

      return rule
    },
  }
}
