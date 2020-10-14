import { centerX, centerY, G, positionKeys, headingTypes, textAlign } from './constants'
import { Colors } from './styli'

export function isFlexboxKey(key: string) {
  return (
    [G.row, G.column, G.wrap, G.nowrap].includes(key) ||
    key.startsWith('justify') ||
    key.startsWith('align')
  )
}

export function isAlignmentKey(key: string) {
  return [
    G.row,
    G.column,
    G.center,
    centerX,
    centerY,
    G.left,
    G.right,
    G.top,
    G.bottom,
    G.between,
    G.around,
    G.evenly,
  ].includes(key)
}

export function isZIndexKey(key: string) {
  return /^zIndex(-\d+)?$/.test(key)
}

// TODO: need refactor
export function isBorderKey(key: string) {
  return key.startsWith('border')
}

export function isRoundedKey(key: string) {
  return /^rounded([TLRB]|T[LR]|B[LR])?(-.+)?$/.test(key)
}

export function isFlexItemKey(key: string) {
  return /^flex(-\d+)?$/.test(key)
}

export function isPositionKey(key: string) {
  return /^[TLRB](-.+)?$/.test(key) || positionKeys.includes(key)
}

export function isSizeKey(key: string) {
  return /^([whsc]|min[HW]|max[HW])(-.+)?$/.test(key)
}

export function isPaddingKey(key: string) {
  return /^p[ltrbxy]?(-.+)?$/.test(key)
}

export function isMarginKey(key: string) {
  return /^m[ltrbxy]?(-.+)?$/.test(key)
}

export function isBgColorKey(key: string) {
  return /^bg(.+)?$/.test(key)
}

export function isTextAlign(key: string) {
  return textAlign.includes(key)
}

export function isTextHeadingKey(key: string) {
  return headingTypes.includes(key)
}

export function isColorKey(key: string) {
  return key === 'color' || !!Colors[key]
}

export function isTextSizeKey(key: string) {
  return /^f(-.+)?$/.test(key)
}

export function isTextWeightKey(key: string) {
  return /^font(Hairline|Thin|Light|Normal|Medium|Semibold|Bold|Extrabold|black)?$|^fontWeight$/.test(
    key,
  )
}

export function isTextLineHeightKey(key: string) {
  return /^leading(None|Tight|Snug|Normal|Relaxed|Loose|-.+)?$/.test(key)
}

export function isShadowKey(key: string) {
  return /^shadow(-(xs|sm|md|base|xl|2xl|outline|none|inner))?$/.test(key)
}

export function isOpacityKey(key: string) {
  return /^opacity(-\d+)?$/.test(key)
}
