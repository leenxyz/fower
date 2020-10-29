import { borderStyles, positionMaps } from '../constants'
import { ColorType, IColors } from '../constants/colors'
import { Styli } from '../styli'
import { ModifierType, Plugin } from '../types'
import { getValue, isNumber, kebab, upFirst } from '../utils'
import { isBorderKey } from '../utils/propKey'

export const pluginBorder = (): Plugin => {
  return {
    onVisitProp({ propKey }, rule) {
      if (!isBorderKey(propKey)) return

      let style: any = {}

      let [, second, third] = kebab(propKey).split('-')
      const Colors = Styli.getConfig<IColors>('colors')
      const isBorderColor = (val: string) => !!Colors[val as ColorType]
      const isBorderStyle = (val: string) => borderStyles.includes(val)
      const isBorderPosition = (val: string) => !!positionMaps[val]
      const isBorderWidth = (val: string) => isNumber(val)

      if (isBorderWidth(second) || isBorderWidth(third)) {
        const position = isBorderPosition(second) ? upFirst(positionMaps[second]) : ''
        style[`border${position}Width`] = getValue(third || second, ModifierType.border)
        style[`border${position}Style`] = 'solid'
      }
      if (isBorderColor(second)) {
        style.borderColor = Colors[second as ColorType]
      }
      if (isBorderStyle(second)) {
        style.borderStyle = second
      }

      rule.style = style
      rule.cssFragment = Object.keys(style).reduce((t, c) => `${t}${kebab(c)}:${style[c]};`, '')

      return rule
    },
  }
}
