import { StyliPlugin } from '@styli/types'
import { isValidPropValue, isNumber } from '@styli/utils'

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
  auto: 'auto',
  start: `${G.flex}-${G.start}`,
  end: `${G.flex}-${G.end}`,
  between: `${G.space}-${G.between}`,
  around: `${G.space}-${G.around}`,
  evenly: `${G.space}-${G.evenly}`,
  center: G.center,
  baseline: 'baseline',
  stretch: 'stretch',
}

export function isFlexBoxKey(key: string) {
  return (
    [G.row, G.column, G.wrap, G.nowrap].includes(key) ||
    /^(justify|items|self|content).*$|^order-\d+$|^flex(-\d+)?$/.test(key)
  )
}

export function flexPropToStyle(prop: string, propValue: any) {
  const style: any = {}
  const wraps = [G.nowrap, G.wrap]

  if (prop === G.row) style.flexDirection = G.row
  if (prop === G.column) style.flexDirection = G.column

  // 自动 display: flex
  if (prop === G.row || prop === G.column) style.display = G.flex

  // flex
  if (/^flex(-\d+)?$/.test(prop)) {
    if (isValidPropValue(propValue)) {
      style.flex = propValue
    } else {
      const [, value] = prop.split('-')
      const flexValue = value || (propValue === true ? 1 : propValue)
      style.flex = isNumber(flexValue) ? Number(flexValue) : flexValue
    }
  }

  // set flex-wrap
  if (wraps.includes(prop)) style.flexWrap = prop as any

  // justify-content
  if (prop.startsWith('justify')) {
    style.justifyContent = flexMaps[prop.replace('justify', '').toLocaleLowerCase()]
  }

  // align-items
  if (prop.startsWith('items')) {
    style.alignItems = flexMaps[prop.replace('items', '').toLocaleLowerCase()]
  }

  //align-self
  if (prop.startsWith('self')) {
    style.alignSelf = flexMaps[prop.replace('self', '').toLocaleLowerCase()]
  }

  //align-content
  if (prop.startsWith('content')) {
    style.alignContent = flexMaps[prop.replace('content', '').toLocaleLowerCase()]
  }

  // order
  if (prop.startsWith('order')) {
    const [, order] = prop.split('-')
    style.order = Number(order)
  }

  return style
}

export default (): StyliPlugin => {
  return {
    name: 'styli-plugin-flexbox',
    isMatch: isFlexBoxKey,
    onVisitProp(atom) {
      atom.style = flexPropToStyle(atom.propKey, atom.propValue)
      return atom
    },
  }
}
