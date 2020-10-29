import { getValue, ModifierType, Plugin } from '@styli/core'
import { isValidPropValue } from '@styli/utils'

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

export const positionKeys = [G.static, G.fixed, G.absolute, G.relative, G.sticky]

export const positionMaps: any = {
  t: G.top,
  l: G.left,
  r: G.right,
  b: G.bottom,
}

export function isPositionKey(key: string) {
  return /^[TLRB](-.+)?$/.test(key) || positionKeys.includes(key)
}

export default (): Plugin => {
  return {
    onVisitProp({ propKey, propValue }, rule) {
      if (!isPositionKey(propKey)) return

      const [key = '', value = ''] = propKey.split('-')
      const lowerKey = key.toLocaleLowerCase()
      const _key = positionMaps[lowerKey]

      if (Array.isArray(propValue)) {
        propValue.forEach((value, idx) => {
          const cssFragment = rule.cssFragmentList![idx] || ''
          const attrValue = getValue(value, ModifierType.position)
          rule.cssFragmentList![idx] = `${cssFragment}${_key}:${attrValue};`
        })
      } else {
        if (isValidPropValue(propValue) && positionMaps.includes(propKey)) {
          rule.style = { [key]: propValue }
        } else {
          rule.style = { [key]: getValue(value, ModifierType.position) }
        }
      }

      return rule
    },
  }
}
