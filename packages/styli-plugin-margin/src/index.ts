import { getValue, ModifierType, Plugin } from '@styli/core'
import { isValidPropValue, kebab, upFirst } from '@styli/utils'

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
  between: 'between',
  around: 'around',
  evenly: 'evenly',
  center: 'center',
  space: 'space',
  row: 'row',
  column: 'column',
  nowrap: 'nowrap',
  wrap: 'wrap',

  static: 'static',
  fixed: 'fixed',
  absolute: 'absolute',
  relative: 'relative',
  sticky: 'sticky',
}

export const P = {
  top: upFirst(G.top),
  right: upFirst(G.right),
  bottom: upFirst(G.bottom),
  left: upFirst(G.left),
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

export function isMarginKey(key: string) {
  return /^m[ltrbxy]?(-.+)?$/.test(key)
}

export default (): Plugin => {
  return {
    onVisitProp({ propKey, propValue }, rule) {
      if (!isMarginKey(propKey)) return

      const [key, value] = propKey.split('-')

      marginMaps[key].forEach((k: any) => {
        const cssAttrKey = kebab(k)
        if (Array.isArray(propValue)) {
          propValue.forEach((v: any, idx: number) => {
            const cssFragment = rule.cssFragmentList![idx] || ''
            const attrValue = getValue(v, ModifierType.margin)
            rule.cssFragmentList![idx] = `${cssFragment}${cssAttrKey}:${attrValue};`
          })
        } else {
          const mValue = isValidPropValue(propValue) ? propValue : value
          const attrValue = getValue(mValue, ModifierType.margin)
          rule.style = { ...rule.style, [k]: attrValue }
          rule.cssFragment = `${rule.cssFragment}${cssAttrKey}:${attrValue};`
        }
      })

      return rule
    },
  }
}
