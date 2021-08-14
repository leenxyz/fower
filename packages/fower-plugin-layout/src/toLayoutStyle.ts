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

export const layoutKeys = [
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
