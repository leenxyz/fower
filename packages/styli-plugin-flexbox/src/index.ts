import { StyliPlugin } from '@styli/types'

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
    /^(justify|items|self|content).*$/.test(key)
  )
}

function getDirection(props: any): string {
  if (props.row) return G.row
  if (props.column) return G.column
  if (props.direction) return props.direction
  return G.row
}

export function flexPropToStyle(prop: string) {
  const style: any = {}
  const wraps = [G.nowrap, G.wrap]

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
    onAtomStyleCreate(atom) {
      atom.style = flexPropToStyle(atom.propKey)
      return atom
    },

    onStyleCreate(sheet) {
      if (!sheet.atoms || !sheet.atoms.length) return

      const matched = sheet.atoms.find((i) => i.matchedPlugin === 'styli-plugin-flexbox')
      if (!matched) return

      const direction = getDirection(sheet.props)
      const directionAtom = sheet.atoms.find((i) => i.propKey === 'direction-' + direction)

      if (!directionAtom) {
        sheet.atoms.push({
          key: 'direction-' + direction,
          propKey: 'direction-' + direction,
          propValue: '',
          className: 'direction-' + direction,
          type: 'style',
          style: { flexDirection: direction as any },
        })
      }

      const displayAtom = sheet.atoms.find((i) => i.matchedPlugin === 'styli-plugin-display')

      if (!displayAtom) {
        sheet.atoms.push({
          key: 'display-flex',
          propKey: 'display-flex',
          propValue: '',
          className: 'display-flex',
          type: 'style',
          cache: true,
          matchedPlugin: 'styli-plugin-display',
          style: { display: 'flex' },
        })
      }
    },
  }
}
