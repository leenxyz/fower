import { noCase } from 'no-case'
import { Styli } from './styli'
import { ModifierType } from './types'

export function isBooleanFlexKey(key: string) {
  return /^[TLRB]-.*/.test(key)
}

export function isValueFlexKey(key: string) {
  return /^[TLRB]$/.test(key)
}

export function isFlexKey(key: string) {
  return isBooleanFlexKey(key) || isValueFlexKey(key)
}

export function isBooleanPositionKey(key: string) {
  return /^[TLRB]-.*/.test(key)
}

export function isValuePositionKey(key: string) {
  return /^[TLRB]$/.test(key)
}

export function isPositionKey(key: string) {
  return isBooleanPositionKey(key) || isValuePositionKey(key)
}

export function isBooleanSizeKey(key: string) {
  return /^([whs]|min[HW]|max[HW])-.*/.test(key)
}

export function isValueSizeKey(key: string) {
  return /^[whs]$|^min[WH]$|^max[WH]$/.test(key)
}

export function isSizeKey(key: string) {
  return isBooleanSizeKey(key) || isValueSizeKey(key)
}

export function isBooleanPaddingKey(key: string) {
  return /^p[ltrbxy]?-([0-9]*)/.test(key)
}

export function isValuePaddingKey(key: string) {
  return /^p[ltrbxy]?$/.test(key)
}

export function isPaddingKey(key: string) {
  return isBooleanPaddingKey(key) || isValuePaddingKey(key)
}

export function isBooleanMarginKey(key: string) {
  return /^m[ltrbxy]?-([0-9]*)/.test(key)
}

export function isValueMarginKey(key: string) {
  return /^m[ltrbxy]?$/.test(key)
}

export function isMarginKey(key: string) {
  return isBooleanMarginKey(key) || isValueMarginKey(key)
}

export function isBooleanBgColorKey(key: string) {
  return /^bg.*/.test(key)
}

export function isValueBgColorKey(key: string) {
  return /^bg$/.test(key)
}

export function isBgColorKey(key: string) {
  return isBooleanBgColorKey(key) || isValueBgColorKey(key)
}

export function kebab(s: string) {
  return noCase(s).replace(/\s/g, '-')
}

export function upFirst(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1)
}

export function isNumber(s: string) {
  return /^-?\d+$/.test(s)
}

export function getValue(value: string, modifierType?: ModifierType) {
  if (isNumber(value)) {
    if (Styli.configs.transformUnit) {
      return Styli.configs.transformUnit(Number(value), modifierType)
    } else {
      return value + Styli.unit
    }
    return value
  }
  return value
}
