import { flexMaps, G } from '../constants'
import { Plugin } from '../types'
import { kebab } from '../utils'
import { isFlexBoxKey } from '../utils/propKey'

export const pluginFlexBox = (): Plugin => {
  return {
    onVisitProp({ propKey }, rule) {
      if (!isFlexBoxKey(propKey)) return

      const style: any = {}
      const wraps = [G.nowrap, G.wrap]

      if (propKey === G.row) style.flexDirection = G.row
      if (propKey === G.column) style.flexDirection = G.column

      // display: flex
      if (propKey === G.row || propKey === G.column) style.display = G.flex

      // set flex-wrap
      if (wraps.includes(propKey)) style.flexWrap = propKey as any

      // justify-content
      if (propKey.startsWith('justify')) {
        style.justifyContent = flexMaps[propKey.replace('justify', '').toLocaleLowerCase()]
      }

      if (propKey.startsWith('align')) {
        style.alignItems = flexMaps[propKey.replace('align', '').toLocaleLowerCase()]
      }

      rule.style = style
      rule.cssFragment = Object.keys(style).reduce((t, c) => `${t}${kebab(c)}:${style[c]};`, '')

      return rule
    },
  }
}
