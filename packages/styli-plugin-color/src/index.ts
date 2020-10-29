import { Plugin, styli } from '@styli/core'
import { hexToRgba, isValidPropValue } from '@styli/utils'

export function isColorKey(key: string) {
  const Colors = styli.getColors()
  return /^color(.+)?$/.test(key) || !!Colors[key]
}

export default (): Plugin => {
  return {
    onVisitProp({ propKey, propValue }, rule) {
      if (!isColorKey(propKey)) return

      const Colors = styli.getColors()
      const key = 'color'

      if (Array.isArray(propValue)) {
        propValue.forEach((value, idx) => {
          const cssFragment = rule.cssFragmentList![idx] || ''
          rule.cssFragmentList![idx] = `${cssFragment}${key}:${value};`
        })
      } else {
        let color = ''
        if (isValidPropValue(propValue)) {
          const [hex, opacity] = propValue.split('.')
          color = opacity ? hexToRgba(hex, opacity) : hex
        } else {
          color = propKey.replace('color', '')
        }
        rule.style = { ...rule.style, [key]: Colors[color] || color }
        rule.cssFragment = `${rule.cssFragment}${key}:${Colors[color] || color};`
      }

      return rule
    },
  }
}
