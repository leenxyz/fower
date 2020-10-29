import { Plugin, getValue } from '@styli/core'
import { isValidPropValue } from '@styli/utils'

export function isShadowKey(key: string) {
  return /^shadow(XXS|XS|S|M|L|XL|XXL|Outline|None|Inner)?$/.test(key)
}

export function shadowPropToStyle(prop: string, propValue: any) {
  if (isValidPropValue(propValue)) return { boxShadow: propValue }
  const value = prop.replace('shadow', '')
  const gv = getValue
  switch (value) {
    case 'XXS':
      return { boxShadow: `0 0 0 ${gv(1)} rgba(0, 0, 0, 0.05)` }
    case 'XS':
      return { boxShadow: `0 ${gv(1)} ${gv(2)} 0 rgba(0, 0, 0, 0.05)` }
    case 'S':
      return {
        boxShadow: `0 ${gv(1)} ${gv(3)} 0 rgba(0, 0, 0, 0.1), 0 ${gv(1)} ${gv(
          2,
        )} 0 rgba(0, 0, 0, 0.06)`,
      }
    case 'M':
      return {
        boxShadow: `0 ${gv(4)} ${gv(6)} -${gv(1)} rgba(0, 0, 0, 0.1), 0 ${gv(2)} ${gv(4)} -${gv(
          1,
        )} rgba(0, 0, 0, 0.06)`,
      }
    case 'L':
      return {
        boxShadow: `0 ${gv(10)} ${gv(14)} -${gv(3)} rgba(0, 0, 0, 0.1), 0 ${gv(4)} ${gv(6)} -${gv(
          2,
        )} rgba(0, 0, 0, 0.05)`,
      }
    case 'XL':
      return {
        boxShadow: `0 ${gv(20)} ${gv(25)} -${gv(5)} rgba(0, 0, 0, 0.1), 0 ${gv(10)} ${gv(10)} -${gv(
          5,
        )} rgba(0, 0, 0, 0.04)`,
      }
    case 'XXL':
      return { boxShadow: `0 ${gv(25)} ${gv(50)} -${gv(12)} rgba(0, 0, 0, 0.25)` }
    case 'Inner':
      return { boxShadow: `inset 0 ${gv(2)} ${gv(4)} 0 rgba(0, 0, 0, 0.06)` }
    case 'Outline':
      return { boxShadow: `0 0 0 ${gv(3)} rgba(66, 153, 225, 0.5)` }
    case 'None':
      return { boxShadow: 'none' }
    default:
      return {
        boxShadow: `0 ${gv(1)} ${gv(3)} 0 rgba(0, 0, 0, 0.1), 0 ${gv(1)} ${gv(
          2,
        )} 0 rgba(0, 0, 0, 0.06)`,
      }
  }
}

export default (): Plugin => {
  return {
    onVisitProp({ propKey, propValue }, rule) {
      if (!isShadowKey(propKey)) return
      rule.style = shadowPropToStyle(propKey, propValue)
      return rule
    },
  }
}
