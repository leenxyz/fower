import { IColors } from '../constants/colors'
import { Styli } from '../styli'
import { Plugin } from '../types'
import { hexToRgba, isValidPropValue } from '../utils'
import { isColorKey } from '../utils/propKey'

export const pluginColor = (): Plugin => {
  return {
    onVisitProp({ propKey, propValue }, rule) {
      if (!isColorKey(propKey)) return

      const Colors = Styli.getConfig<IColors>('colors')
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
