import { FowerPlugin } from '@fower/core'
import { Atom } from '@fower/core'

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

export function getDirections(props: any = {}): string[] {
  const { flexDirection } = props
  let directions: string[] = []
  if (flexDirection) {
    directions = Array.isArray(directions) ? flexDirection : [flexDirection]
  }

  for (const key in props) {
    if (/^row/.test(key) && !!props[key]) directions.push('row')
    if (/^column/.test(key) && !!props[key]) directions.push('column')
  }

  const values = ['row', 'column']
  return directions.reduce<string[]>((r, cur) => {
    if (!values.includes(cur)) return r
    if (!r.includes(cur)) return [...r, cur]
    return r
  }, [])
}

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

function isFlexDirection(key: string) {
  return /^flexDirection$/.test(key)
}

function isDirection(key: string) {
  return [row, column].includes(key)
}

function isLayout(key: string) {
  return layoutReg.test(key)
}

export function isMatch(key: string) {
  return isDirection(key) || isFlexDirection(key) || isLayout(key)
}

export const flexDirections = ['column', 'column-reverse', 'row', 'row-reverse']

/**
 * Get alignment style
 * 这里比较复杂
 * @param key
 * @param props
 * @returns
 */
export function toLayoutStyle(key: string, direction: string) {
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
    handleAtom(atom, parser) {
      if (!parser.data.layoutAtoms) parser.data.layoutAtoms = []
      if (!parser.data.directionAtoms) parser.data.directionAtoms = []

      /** @example <Box toCenter></Box> */
      if (isLayout(atom.key)) parser.data.layoutAtoms.push(atom)

      /** @example <Box column></Box> */
      if (isDirection(atom.key)) {
        parser.data.directionAtoms.push(atom)
        atom.id = `flexDirection-${atom.id}`
        atom.style = { flexDirection: atom.key } as any
      }

      /** @example <Box flexDirection="row"></Box> */
      if (isFlexDirection(atom.key)) {
        parser.data.directionAtoms.push(atom)
        atom.style = { flexDirection: atom.value } as any
      }

      return atom
    },

    afterAtomStyleCreate(parser) {
      if (!parser.atoms.length) return

      const matched = parser.atoms.find((i) => isMatch(i.key) || /^flexDirection$/.test(i.key))

      if (!matched) return

      const directionAtoms: Atom[] = parser.data.directionAtoms
      const layoutAtoms: Atom[] = parser.data.layoutAtoms

      if (!directionAtoms.length) {
        const directionRow = 'row'
        const rowKey = 'flexDirection-' + directionRow
        const rowAtom = parser.store.atomCache.get(rowKey)
        if (rowAtom) {
          parser.addAtom(rowAtom)
        } else {
          const newRowAtom = new Atom({
            propKey: rowKey,
            propValue: true,
            key: directionRow,
            handled: true,
            style: { flexDirection: directionRow },
          })
          newRowAtom.id = `flexDirection-${newRowAtom.id}`
          parser.data.directionAtoms.push(newRowAtom)
          parser.addAtom(newRowAtom)
        }
      }

      for (const directionAtom of directionAtoms) {
        const { key, value } = directionAtom
        const { breakpoint } = directionAtom.meta
        const direction = isDirection(key) ? key : value

        for (const layoutAtom of layoutAtoms) {
          const newAtom = new Atom(layoutAtom)
          if (breakpoint) {
            newAtom.meta.breakpoint = layoutAtom.meta.breakpoint || breakpoint
          }

          newAtom.setId()
          newAtom.id = `${direction}-${newAtom.id}`

          newAtom.style = toLayoutStyle(newAtom.key, direction)
          parser.addAtom(newAtom)
        }
      }

      // if have display style, don't create flex atom
      const findDisplay = parser.atoms.find((i) => !!i?.style?.display)
      if (findDisplay) return

      const flexKey = 'flex'
      const flexAtom = parser.store.atomCache.get(flexKey)

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
