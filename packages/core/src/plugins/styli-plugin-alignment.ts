import { Plugin } from '../types'
import { isAlignmentKey } from '../utils/propKey'
import { G, flexMaps, centerX, centerY } from '../constants'
import { kebab } from '../utils'

export const pluginAlignment = (): Plugin => {
  return {
    onVisitProp({ propKey }, rule, sheet) {
      if (!isAlignmentKey(propKey)) return

      const { props } = sheet

      const { row, center } = props.row || props.column ? props : { ...props, row: true }
      const style: any = {}
      const rules: { [key: string]: string[] } = {}

      if (row) {
        style.flexDirection = G.row
        rules.justifyContent = [G.left, G.right, centerX, G.between, G.around, G.evenly]
        rules.alignItems = [G.top, G.bottom, centerY]
      } else {
        rules.justifyContent = [G.top, G.bottom, centerY, G.between, G.around, G.evenly]
        rules.alignItems = [G.left, G.right, centerX]
      }

      for (const [key, positions] of Object.entries(rules)) {
        for (const p of positions) {
          if (!props[p]) continue // need match props key

          // 统一默认值为 row
          if (style.flexDirection) style.flexDirection = G.row

          // 触发 flex
          style.display = G.flex

          if ([G.top, G.left].includes(p)) {
            style[key] = flexMaps.start
          } else if ([G.bottom, G.right].includes(p)) {
            style[key] = flexMaps.end
          } else if ([centerX, centerY].includes(p)) {
            style[key] = G.center
          } else if (p === G.between) {
            style[key] = flexMaps.between
          } else if (p === G.around) {
            style[key] = flexMaps.around
          } else if (p === G.evenly) {
            style[key] = flexMaps.evenly
          }
        }
      }

      if (center) {
        style.display = G.flex
        style.justifyContent = G.center
        style.alignItems = G.center
      }

      rule.cssFragment = Object.keys(style).reduce((t, c) => `${t}${kebab(c)}:${style[c]};`, '')
      rule.style = style

      return rule
    },
  }
}
