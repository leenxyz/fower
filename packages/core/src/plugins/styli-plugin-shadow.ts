import { ModifierType, Plugin } from '../types'
import { getValue, isValidPropValue, kebab } from '../utils'
import { isShadowKey } from '../utils/propKey'

const gv = (v: number) => getValue(v, ModifierType.shadow)

export const pluginBoxShadow = (): Plugin => {
  return {
    onVisitProp({ propKey, propValue }, rule) {
      if (!isShadowKey(propKey)) return

      const key = 'boxShadow'
      const style: any = {}

      if (Array.isArray(propValue)) {
        propValue.forEach((value, idx) => {
          const cssFragment = rule.cssFragmentList![idx] || ''
          rule.cssFragmentList![idx] = `${cssFragment}${key}:${value};`
        })
      } else {
        if (isValidPropValue(propValue)) {
          style[key] = propValue
        } else {
          const value = propKey.replace('shadow', '')
          switch (value) {
            case 'XXS':
              style[key] = `0 0 0 ${gv(1)} rgba(0, 0, 0, 0.05)`
              break
            case 'XS':
              style[key] = `0 ${gv(1)} ${gv(2)} 0 rgba(0, 0, 0, 0.05)`
              break
            case 'S':
              style[key] = `0 ${gv(1)} ${gv(3)} 0 rgba(0, 0, 0, 0.1), 0 ${gv(1)} ${gv(
                2,
              )} 0 rgba(0, 0, 0, 0.06)`
              break
            case 'M':
              style[key] = `0 ${gv(4)} ${gv(6)} -${gv(1)} rgba(0, 0, 0, 0.1), 0 ${gv(2)} ${gv(
                4,
              )} -${gv(1)} rgba(0, 0, 0, 0.06)`
              break
            case 'L':
              style[key] = `0 ${gv(10)} ${gv(14)} -${gv(3)} rgba(0, 0, 0, 0.1), 0 ${gv(4)} ${gv(
                6,
              )} -${gv(2)} rgba(0, 0, 0, 0.05)`
              break
            case 'XL':
              style[key] = `0 ${gv(20)} ${gv(25)} -${gv(5)} rgba(0, 0, 0, 0.1), 0 ${gv(10)} ${gv(
                10,
              )} -${gv(5)} rgba(0, 0, 0, 0.04)`
              break
            case 'XXL':
              style[key] = `0 ${gv(25)} ${gv(50)} -${gv(12)} rgba(0, 0, 0, 0.25)`
              break
            case 'Inner':
              style[key] = `inset 0 ${gv(2)} ${gv(4)} 0 rgba(0, 0, 0, 0.06)`
              break
            case 'Outline':
              style[key] = `0 0 0 ${gv(3)} rgba(66, 153, 225, 0.5)`
              break
            case 'None':
              style[key] = 'none'
              break
            default:
              style[key] = `0 ${gv(1)} ${gv(3)} 0 rgba(0, 0, 0, 0.1), 0 ${gv(1)} ${gv(
                2,
              )} 0 rgba(0, 0, 0, 0.06)`
          }
          rule.cssFragment = Object.keys(style).reduce((t, c) => `${t}${kebab(c)}:${style[c]};`, '')
          rule.style = style
        }
      }
      return rule
    },
  }
}
