import { isValidPropValue, kebab, upFirst } from '@styli/utils'
import { Plugin, getValue, Rule, ModifierType } from '@styli/core'

export const G = {
  padding: 'padding',
  margin: 'margin',
  flex: 'flex',
  top: 'top',
  left: 'left',
  right: 'right',
  start: 'start',
  end: 'end',
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

export const marginMaps: any = {
  m: [G.margin],
  ml: [`${G.margin}${P.left}`],
  mt: [`${G.margin}${P.top}`],
  mr: [`${G.margin}${P.right}`],
  mb: [`${G.margin}${P.bottom}`],
  mx: [`${G.margin}${P.left}`, `${G.margin}${P.right}`],
  my: [`${G.margin}${P.top}`, `${G.margin}${P.bottom}`],
}

export function isPaddingKey(key: string) {
  return /^p[ltrbxy]?(-.+)?$/.test(key)
}

export function isMarginKey(key: string) {
  return /^m[ltrbxy]?(-.+)?$/.test(key)
}

export default (): Plugin => {
  return {
    onVisitProp({ key: propKey, value: propValue }, sheet) {
      if (isPaddingKey(propKey)) {
        const [key, value] = propKey.split('-')
        const rule: Rule = { name: propKey, cssFragmentList: [], cssFragment: '', style: {} }

        paddingMaps[key].forEach((k: any) => {
          const cssAttrKey = kebab(k)
          if (Array.isArray(propValue)) {
            propValue.forEach((v: any, idx: number) => {
              const cssFragment = rule.cssFragmentList![idx] || ''
              rule.cssFragmentList![idx] = `${cssFragment}${cssAttrKey}:${getValue(
                v,
                ModifierType.margin,
              )};`
            })
          } else {
            const attrValue = isValidPropValue(propValue) ? propValue : value
            rule.style = { ...rule.style, [k]: getValue(attrValue, ModifierType.size) }
            rule.cssFragment = `${rule.cssFragment}${cssAttrKey}:${getValue(
              attrValue,
              ModifierType.size,
            )};`
          }
        })

        sheet.addRule(rule)

        return { sheet, matched: true }
      }
      return { sheet }
    },
  }
}
