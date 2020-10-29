import { getValue, ModifierType, Plugin } from '@styli/core'
import { isValidPropValue, kebab, upFirst } from '@styli/utils'

export const G = {
  padding: 'padding',
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

export const paddingMaps: any = {
  p: [G.padding],
  pl: [`${G.padding}${P.left}`],
  pt: [`${G.padding}${P.top}`],
  pr: [`${G.padding}${P.right}`],
  pb: [`${G.padding}${P.bottom}`],
  px: [`${G.padding}${P.left}`, `${G.padding}${P.right}`],
  py: [`${G.padding}${P.top}`, `${G.padding}${P.bottom}`],
}

export function isPaddingKey(key: string) {
  return /^p[ltrbxy]?(-.+)?$/.test(key)
}

export default (): Plugin => {
  return {
    onVisitProp({ propKey, propValue }, rule) {
      if (!isPaddingKey(propKey)) return

      const [key, value] = propKey.split('-')

      paddingMaps[key].forEach((k: any) => {
        const cssAttrKey = kebab(k)
        if (Array.isArray(propValue)) {
          propValue.forEach((v: any, idx: number) => {
            const cssFragment = rule.cssFragmentList![idx] || ''
            const attrValue = getValue(v, ModifierType.padding)
            rule.cssFragmentList![idx] = `${cssFragment}${cssAttrKey}:${attrValue};`
          })
        } else {
          const pValue = isValidPropValue(propValue) ? propValue : value
          const attrValue = getValue(pValue, ModifierType.padding)
          rule.style = { ...rule.style, [k]: attrValue }
          rule.cssFragment = `${rule.cssFragment}${cssAttrKey}:${attrValue};`
        }
      })

      return rule
    },
  }
}
