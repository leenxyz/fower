import isBrowser from 'is-in-browser'
import hash from 'string-hash'
import deepmerge from 'deepmerge'
import { noCase } from 'no-case'

type Dict = Record<string, any>

export { isBrowser, hash, deepmerge }

export function upFirst(s: string = '') {
  return s.replace(/^[a-z]/, (g) => g.toUpperCase())
}

export function downFirst(s: string = '') {
  return s.replace(/^[A-Z]/, (g) => g.toLowerCase())
}

export function kebab(s: string) {
  return noCase(s).replace(/\s/g, '-')
}

export function isBooleanFalse(value: any) {
  return typeof value === 'boolean' && value === false
}

export function isNumber(str: any) {
  return /^-?[0-9.]+$/.test(str)
}

export function isValidPropValue(value: any) {
  return !!value && typeof value !== 'boolean'
}

export function isEmptyObj(props: any) {
  return !props || !Object.keys(props).length
}

export function isPercentNumber(s: string) {
  return /^-?\d+p$/.test(s)
}

export function isPlainType(value: any) {
  const plainTypes = ['number', 'string', 'boolean']
  return plainTypes.includes(typeof value)
}

/**
 *
 * @param key
 * @returns
 * @example
 * backgroundColor -> background-color
 */
export function jsKeyToCssKey(key: string): string {
  return /^[A-Z].+$/.test(key) ? '-' + kebab(key) : kebab(key)
}

export function modifierToProps(modifier: string) {
  return modifier.split(/[\s\t\n]+/).reduce((result, cur) => ({ ...result, [cur]: true }), {})
}

export function objectToClassName(style: Dict, prefix = 'css-') {
  const hashed = hash(JSON.stringify(style))
  return prefix + hashed
}
