import { FowerPlugin } from '@fower/types'
import { Atom } from '@fower/atom'
import { atomCache } from '@fower/cache'

const row = 'row'
const column = 'column'

const toTop = 'totop'
const toLeft = 'toleft'
const toRight = 'toright'
const toBottom = 'tobottom'

const toBetween = 'tobetween'
const toAround = 'toaround'
const toEvenly = 'toevenly'

const toCenter = 'tocenter'
const toCenterX = 'tocenterx'
const toCenterY = 'tocentery'

const selfTop = 'selftop'
const selfRight = 'selfright'
const selfBottom = 'selfbottom'
const selfLeft = 'selfleft'
const selfCenter = 'selfcenter'
const selfStretch = 'selfcenter'
const selfAuto = 'selfauto'

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

  selfTop,
  selfRight,
  selfBottom,
  selfLeft,
  selfCenter,
  selfStretch,
]

const layoutReg = new RegExp(`${layoutToolkits.join('|')}`, 'i')

// TODO: should refactor
export function getFlexDirection(props: any = {}): string {
  if (props.flexDirection) return props.flexDirection
  const directions = ['row', 'column']
  const find = Object.keys(props)
    .reverse()
    .find((i) => directions.includes(i))

  if (find) return find

  const { className = '' } = props
  const arr: string[] = className.split(/\s+/)

  const findDirection = arr.find((i) => ['flexDirection-column', 'flexDirection-row'].includes(i))

  if (findDirection) return findDirection.replace('flexDirection-', '')
  return 'row'
}

export function isMatch(key: string) {
  return [row, column].includes(key) || layoutReg.test(key)
}

/**
 * Get alignment style
 * 这里比较复杂
 * @param key
 * @param props
 * @returns
 */
export function toStyle(key: string, props: any) {
  if (key === 'direction') return
  const direction = getFlexDirection(props)
  const style: any = {}

  let styleKey: 'justifyContent' | 'alignItems' = '' as any

  key = key.toLowerCase()

  /** 根据 row 和 column 设置属性，这里比较复杂 */
  if (direction.startsWith('row')) {
    if ([toLeft, toRight, toCenterX, toBetween, toAround, toEvenly].includes(key)) {
      styleKey = 'justifyContent'
    }

    if ([toTop, toBottom, toCenterY].includes(key)) {
      styleKey = 'alignItems'
    }
  } else {
    if ([toTop, toBottom, toCenterY, toBetween, toAround, toEvenly].includes(key)) {
      styleKey = 'justifyContent'
    }
    if ([toLeft, toRight, toCenterX].includes(key)) {
      styleKey = 'alignItems'
    }
  }

  /** 设置container样式 */
  if ([toTop, toLeft].includes(key)) {
    style[styleKey] = flexStart
  } else if ([toBottom, toRight].includes(key)) {
    style[styleKey] = flexEnd
  } else if ([toCenterX, toCenterY].includes(key)) {
    style[styleKey] = center
  } else if (key === toBetween) {
    style[styleKey] = spaceBetween
  } else if (key === toAround) {
    style[styleKey] = spaceAround
  } else if (key === toEvenly) {
    style[styleKey] = spaceEvenly
  } else if (key === toCenter) {
    style.justifyContent = center
    style.alignItems = center
  }

  /** 设置 self align样式 */
  if ([selfTop, selfLeft].includes(key)) {
    style.alignSelf = flexStart
  } else if ([selfBottom, selfRight].includes(key)) {
    style.alignSelf = flexEnd
  } else if (key === selfCenter) {
    style.alignSelf = center
  } else if (key === selfAuto) {
    style.alignSelf = 'auto'
  }

  return style
}

export default (): FowerPlugin => {
  return {
    isMatch,
    beforeHandleAtom(atom, parser) {
      const direction = getFlexDirection(parser.props)
      // TODO:
      if (atom.id.startsWith('row-') || atom.id.startsWith('column-')) {
        return atom
      }
      atom.id = `${direction}-${atom.id}`
      return atom
    },
    handleAtom(atom, parser) {
      if ([row, column].includes(atom.propKey)) {
        atom.isValid = false
        atom.handled = true
        return atom
      }

      atom.style = toStyle(atom.key, parser.props)

      return atom
    },

    afterAtomStyleCreate(parser) {
      if (!parser.atoms.length) return

      const matched = parser.atoms.find((i) => isMatch(i.key))

      if (!matched) return

      const direction = getFlexDirection(parser.props)
      const directionKey = 'flexDirection-' + direction
      const directionAtom = atomCache.get(directionKey)

      if (directionAtom) {
        parser.addAtom(directionAtom)
      } else {
        const atom = new Atom({
          propKey: directionKey,
          propValue: true,
          handled: true,
          style: { flexDirection: direction },
        })
        parser.addAtom(atom)
      }

      // if have display style, dont't create flex atom
      const findDisplay = parser.atoms.find((i) => !!i?.style?.display)
      if (findDisplay) return

      const flexKey = 'flex'
      const flexAtom = atomCache.get(flexKey)

      if (flexAtom) {
        parser.addAtom(flexAtom)
      } else {
        const atom = new Atom({
          propKey: flexKey,
          propValue: true,
          handled: true,
          style: { display: 'flex' },
        })
        parser.addAtom(atom)
      }
    },
  }
}
