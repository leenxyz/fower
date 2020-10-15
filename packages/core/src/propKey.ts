import { G, positionKeys, headingTypes, textAlign, flexMaps, flexAlign } from './constants'
import { Colors } from './styli'
import { upFirst } from './utils'

export function isFlexBoxKeyWrapper() {
  const getFlexKeys = (prefix: 'justify' | 'align') =>
    Object.keys(flexMaps).map((flexKey) => `${prefix}${upFirst(flexKey)}`)
  const justifyKeys = getFlexKeys('justify')
  const alignKeys = getFlexKeys('align')
  return (key: string) =>
    [G.row, G.column, G.wrap, G.nowrap].includes(key) ||
    justifyKeys.includes(key) ||
    alignKeys.includes(key)
}

export const isFlexBoxKey = isFlexBoxKeyWrapper()

export function isAlignmentKey(key: string) {
  return flexAlign.includes(key)
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
  return textAlign.includes(key) || /^textAlign$/.test(key)
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
  return /^font(Hairline|Thin|Light|Normal|Medium|Semibold|Bold|Extrabold|Black)?$|^fontWeight$/.test(
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
