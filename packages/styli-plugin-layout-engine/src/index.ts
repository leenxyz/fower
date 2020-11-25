import { StyliPlugin } from '@styli/types'

export const G = {
  flex: 'flex',

  top: 'top',
  left: 'left',
  right: 'right',
  bottom: 'bottom',

  start: 'start',
  end: 'end',
  between: 'between',
  around: 'around',
  evenly: 'evenly',
  center: 'center',
  space: 'space',

  row: 'row',
  column: 'column',
}

const centerX = `${G.center}X`

const centerY = `${G.center}Y`

const flexAlign = [
  G.row,
  G.column,
  G.center,
  centerX,
  centerY,
  centerX.toLowerCase(),
  centerY.toLowerCase(),
  G.left,
  G.right,
  G.top,
  G.bottom,
  G.between,
  G.around,
  G.evenly,
]

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

export function isAlignmentKey(key: string) {
  return flexAlign.includes(key) || key === 'direction'
}

function getDirection(props: any): string {
  if (props.row) return G.row
  if (props.column) return G.column
  if (props.direction) return props.direction
  return G.row
}

export function alignmentPropToStyle(propKey: string, props: any) {
  if (propKey === 'direction') return
  const { center } = props
  const direction = getDirection(props)
  const style: any = {}
  const rules: { [key: string]: string[] } = {}

  if (direction.startsWith('row')) {
    rules.justifyContent = [
      G.left,
      G.right,
      centerX,
      centerX.toLowerCase(),
      G.between,
      G.around,
      G.evenly,
    ]
    rules.alignItems = [G.top, G.bottom, centerY]
  } else {
    rules.justifyContent = [
      G.top,
      G.bottom,
      centerY,
      centerY.toLowerCase(),
      G.between,
      G.around,
      G.evenly,
    ]
    rules.alignItems = [G.left, G.right, centerX]
  }

  for (const [key, positions] of Object.entries(rules)) {
    for (const p of positions) {
      if (!props[p]) continue // need match props key
      if ([G.top, G.left].includes(p)) {
        style[key] = flexMaps.start
      } else if ([G.bottom, G.right].includes(p)) {
        style[key] = flexMaps.end
      } else if ([centerX, centerY, centerX.toLowerCase(), centerY.toLowerCase()].includes(p)) {
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
    style.justifyContent = G.center
    style.alignItems = G.center
  }

  return style
}

export default (): StyliPlugin => {
  return {
    name: 'styli-plugin-layout-engine',
    isMatch: isAlignmentKey,
    onVisitProp(atom, sheet) {
      atom.style = alignmentPropToStyle(atom.propKey, sheet.props)

      if ([G.left, G.right, G.top, G.bottom].includes(atom.propKey)) {
        const direction = getDirection(sheet.props)
        atom.className = direction + '-' + atom.propKey
        atom.cache = false
      }
      return atom
    },
    afterVisitProp(sheet) {
      if (!sheet.atoms || !sheet.atoms.length) return

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

      // TODO: 不严谨
      const flexAtom = sheet.atoms.find((i) => i.propKey.startsWith('display'))

      if (!flexAtom) {
        sheet.atoms.push({
          key: 'display-flex',
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
