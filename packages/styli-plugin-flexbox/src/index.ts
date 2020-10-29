import { Plugin } from '@styli/core'
import { upFirst } from '@styli/utils'

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

export function flexPropToStyle(prop: string) {
  const style: any = {}
  const wraps = [G.nowrap, G.wrap]

  if (prop === G.row) style.flexDirection = G.row
  if (prop === G.column) style.flexDirection = G.column

  // 自动 display: flex
  if (prop === G.row || prop === G.column) style.display = G.flex

  // set flex-wrap
  if (wraps.includes(prop)) style.flexWrap = prop as any

  // justify-content
  if (prop.startsWith('justify')) {
    style.justifyContent = flexMaps[prop.replace('justify', '').toLocaleLowerCase()]
  }

  if (prop.startsWith('align')) {
    style.alignItems = flexMaps[prop.replace('align', '').toLocaleLowerCase()]
  }

  return style
}

export default (): Plugin => {
  return {
    onVisitProp({ propKey }, rule) {
      if (!isFlexBoxKey(propKey)) return
      rule.style = flexPropToStyle(propKey)
      return rule
    },
  }
}
