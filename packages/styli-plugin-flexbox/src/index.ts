import { Plugin } from '@styli/core'
import { upFirst, kebab } from '@styli/utils'

export const G = {
  flex: 'flex',
  start: 'start',
  end: 'end',
  between: 'between',
  around: 'around',
  evenly: 'evenly',
  center: 'center',
  space: 'space',
  row: 'row',
  column: 'column',
  nowrap: 'nowrap',
  wrap: 'wrap',
}

export const flexMaps: any = {
  start: `${G.flex}-${G.start}`,
  end: `${G.flex}-${G.end}`,
  between: `${G.space}-${G.between}`,
  around: `${G.space}-${G.around}`,
  evenly: `${G.space}-${G.evenly}`,
  center: G.center,
  baseline: 'baseline',
  stretch: 'stretch',
}

export function isFlexBoxKeyWrapper() {
  const getFlexKeys = (prefix: 'justify' | 'align') =>
    Object.keys(flexMaps).map((flexKey) => `${prefix}${upFirst(flexKey)}`)
  const justifyKeys = getFlexKeys('justify')
  const alignKeys = getFlexKeys('align')
  return (key: string) =>
    [G.row, G.column, G.wrap, G.nowrap].includes(key) ||
    justifyKeys.includes(key) ||
    alignKeys.includes(key)
}

export const isFlexBoxKey = isFlexBoxKeyWrapper()

export default (): Plugin => {
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
