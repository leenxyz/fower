import isBrowser from 'is-in-browser'
import hash from 'string-hash'

type Dict = Record<string, any>

export { isBrowser, hash }

export const isDev = process.env.NODE_ENV !== 'production'

export function upFirst(s: string = '') {
  return s.replace(/^[a-z]/, (g) => g.toUpperCase())
}

export function downFirst(s: string = '') {
  return s.replace(/^[A-Z]/, (g) => g.toLowerCase())
}

export function kebab(value: string) {
  return downFirst(value).replace(/[A-Z]/g, (capital) => {
    return '-' + capital.toLowerCase()
  })
}

export function isBooleanFalse(value: any) {
  return typeof value === 'boolean' && value === false
}

/**
 * number type string or number
 * @param value
 * @returns
 */
export function isNumber(value: any) {
  return /^-?[0-9.]+$/.test(value)
}

/**
 * value like: 100p, 80p, or negative value -50p
 * @param value
 * @returns
 */
export function isPercentNumber(value: string) {
  return /^-?\d+p$/.test(value)
}

export function isEmptyObj(props: any) {
  return !props || !Object.keys(props).length
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
