import { StyliPlugin } from '@styli/types'

export const G = {
  flex: 'flex',

  toTop: 'toTop',
  toLeft: 'toLeft',
  toRight: 'toRight',
  toBottom: 'toBottom',

  start: 'start',
  end: 'end',
  between: 'between',
  around: 'around',
  evenly: 'evenly',
  center: 'center',
  space: 'space',

  stretch: 'stretch',

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
  G.toLeft,
  G.toRight,
  G.toTop,
  G.toBottom,
  G.between,
  G.around,
  G.evenly,
  G.stretch,
]

export const flexMaps = {
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
      G.toLeft,
      G.toRight,
      centerX,
      centerX.toLowerCase(),
      G.between,
      G.around,
      G.evenly,
    ]
    rules.alignItems = [G.toTop, G.toBottom, centerY, G.stretch]
  } else {
    rules.justifyContent = [
      G.toTop,
      G.toBottom,
      centerY,
      centerY.toLowerCase(),
      G.between,
      G.around,
      G.evenly,
    ]
    rules.alignItems = [G.toLeft, G.toRight, centerX, G.stretch]
  }

  for (const [key, positions] of Object.entries(rules)) {
    for (const p of positions) {
      if (!props[p]) continue // need match props key
      if ([G.toTop, G.toLeft].includes(p)) {
        style[key] = flexMaps.start
      } else if ([G.toBottom, G.toRight].includes(p)) {
        style[key] = flexMaps.end
      } else if ([centerX, centerY, centerX.toLowerCase(), centerY.toLowerCase()].includes(p)) {
        style[key] = G.center
      } else if (p === G.between) {
        style[key] = flexMaps.between
      } else if (p === G.around) {
        style[key] = flexMaps.around
      } else if (p === G.evenly) {
        style[key] = flexMaps.evenly
      } else if (p === G.stretch) {
        style[key] = flexMaps.stretch
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
    onAtomStyleCreate(atom, sheet) {
      atom.style = alignmentPropToStyle(atom.propKey, sheet.props)

      if ([G.toLeft, G.toRight, G.toTop, G.toBottom].includes(atom.propKey)) {
        const direction = getDirection(sheet.props)
        atom.className = direction + '-' + atom.propKey
        atom.cache = false
      }
      return atom
    },
    onStyleCreate(sheet) {
      if (!sheet.atoms || !sheet.atoms.length) return

      const matched = sheet.atoms.find((i) => i.matchedPlugin === 'styli-plugin-layout-engine')
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
