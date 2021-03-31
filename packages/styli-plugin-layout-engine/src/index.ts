import { StyliPlugin } from '@styli/types'
import { Atom } from '@styli/atom'
import { atomCache } from '@styli/parser'

const row = 'row'
const column = 'column'

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

const flexStart = 'flex-start'
const flexEnd = 'flex-end'
const spaceBetween = 'space-between'
const spaceAround = 'space-around'
const spaceEvenly = 'space-evenly'
const center = 'center'

const layoutToolkits = [
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

function getFlexDirection(props: any): string {
  if (props.row) return 'row'
  if (props.column) return 'column'
  if (props.flexDirection) return props.flexDirection
  return 'row'
}

export function isMatch(key: string) {
  return [row, column].includes(key) || layoutToolkits.includes(key)
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
  const direction = getFlexDirection(props)
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
    style[styleKey] = flexStart
  } else if ([toBottom, toRight].includes(propKey)) {
    style[styleKey] = flexEnd
  } else if ([toCenterX, toCenterY].includes(propKey)) {
    style[styleKey] = center
  } else if (propKey === toBetween) {
    style[styleKey] = spaceBetween
  } else if (propKey === toAround) {
    style[styleKey] = spaceAround
  } else if (propKey === toEvenly) {
    style[styleKey] = spaceEvenly
  } else if (propKey === toStretch) {
    style[styleKey] = spaceEvenly
  }

  if (toCenter) {
    style.justifyContent = center
    style.alignItems = center
  }

  return style
}

export default (): StyliPlugin => {
  return {
    isMatch,
    handleAtom(atom, parser) {
      atom.style = alignmentPropToStyle(atom.propKey, parser.props)

      if ([row, column].includes(atom.propKey)) {
        atom.isValid = false
      }

      return atom
    },

    afterAtomStyleCreate(parser) {
      if (!parser.atoms.length) return

      const matched = parser.atoms.find((i) => isMatch(i.propKey))

      if (!matched) return

      const direction = getFlexDirection(parser.props)

      const prefix = 'flexDirection-'

      const directionKey = prefix + direction
      const directionAtom = atomCache.get(directionKey)

      if (directionAtom) {
        parser.addAtom(directionAtom)
      } else {
        parser.addAtom(
          new Atom({
            id: directionKey,
            key: directionKey,
            propKey: directionKey,
            propValue: true,
            handled: true,
            className: prefix + direction,
            style: { flexDirection: direction as any },
          }),
        )
      }

      const flexKey = 'flex'
      const flexAtom = atomCache.get(flexKey)
      if (flexAtom) {
        parser.addAtom(flexAtom)
      } else {
        parser.addAtom(
          new Atom({
            id: flexKey,
            key: flexKey,
            propKey: flexKey,
            propValue: true,
            handled: true,
            className: 'flex',
            style: { display: 'flex' },
          }),
        )
      }
    },
  }
}
