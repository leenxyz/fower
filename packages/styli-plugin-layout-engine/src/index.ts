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
  stretch: 'stretch',

  row: 'row',
  column: 'column',
}

const toTop = 'toTop'
const toLeft = 'toLeft'
const toRight = 'toRight'
const toBottom = 'toBottom'

const toBetween = 'toBetween'
const toAround = 'toAround'
const toEvenly = 'toEvenly'
const toStretch = 'toStretch'

const toCenter = 'toCenter'
const toCenterX = 'toCenterX'
const toCenterY = 'toCenterY'

// all layout engine atomic key
const flexAlign = [
  G.row,
  G.column,

  toLeft,
  toRight,
  toTop,
  toBottom,

  toCenter,
  toCenterX,
  toCenterY,

  toBetween,
  toAround,
  toEvenly,
  toStretch,
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

/**
 * Get alignment style
 * 这里比较复杂
 * @param propKey
 * @param props
 * @returns
 */
export function alignmentPropToStyle(propKey: string, props: any) {
  if (propKey === 'direction') return
  const { toCenter } = props
  const direction = getDirection(props)
  const style: any = {}

  let styleKey: 'justifyContent' | 'alignItems' = '' as any

  /** 根据 row 和 column 设置属性，这里比较复杂 */
  if (direction.startsWith('row')) {
    if ([toLeft, toRight, toCenterX, toBetween, toAround, toEvenly].includes(propKey)) {
      styleKey = 'justifyContent'
    }

    if ([toTop, toBottom, toCenterY, toStretch].includes(propKey)) {
      styleKey = 'alignItems'
    }
  } else {
    if ([toTop, toBottom, toCenterY, toBetween, toAround, toEvenly].includes(propKey)) {
      styleKey = 'justifyContent'
    }
    if ([toLeft, toRight, toCenterX, toStretch].includes(propKey)) {
      styleKey = 'alignItems'
    }
  }

  /** 设置样式 */
  if ([toTop, toLeft].includes(propKey)) {
    style[styleKey] = flexMaps.start
  } else if ([toBottom, toRight].includes(propKey)) {
    style[styleKey] = flexMaps.end
  } else if ([toCenterX, toCenterY].includes(propKey)) {
    style[styleKey] = G.center
  } else if (propKey === toBetween) {
    style[styleKey] = flexMaps.between
  } else if (propKey === toAround) {
    style[styleKey] = flexMaps.around
  } else if (propKey === toEvenly) {
    style[styleKey] = flexMaps.evenly
  } else if (propKey === toStretch) {
    style[styleKey] = flexMaps.stretch
  }

  if (toCenter) {
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

      if ([toLeft, toRight, toTop, toBottom, toCenterX, toCenterY].includes(atom.propKey)) {
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
