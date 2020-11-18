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

function getDirection(props: any): string {
  if (props.row) return G.row
  if (props.column) return G.column
  if (props.direction) return props.direction
  return G.row
}

export function flexPropToStyle(prop: string, propValue: any) {
  const style: any = {}
  const wraps = [G.nowrap, G.wrap]

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

    afterVisitProp(sheet) {
      if (!sheet.atoms || !sheet.atoms.length) return

      const direction = getDirection(sheet.props)
      const directionAtom = sheet.atoms.find((i) => i.propKey === 'direction-' + direction)

      if (!directionAtom) {
        sheet.atoms.push({
          propKey: 'direction-' + direction,
          propValue: '',
          className: 'direction-' + direction,
          type: 'style',
          style: { flexDirection: direction as any },
        })
      }

      const flexAtom = sheet.atoms.find((i) => i.propKey === 'display-flex')

      if (!flexAtom) {
        sheet.atoms.push({
          propKey: 'display-flex',
          propValue: '',
          className: 'display-flex',
          type: 'style',
          style: { display: 'flex' as any },
        })
      }
    },
  }
}
