import hash from 'string-hash'

type Dict = Record<string, any>

export { hash }

export const isBrowser =
  typeof window === 'object' && typeof document === 'object' && document.nodeType === 9

export function upFirst(s: string = '') {
  return s.replace(/^[a-z]/, (g) => g.toUpperCase())
}

export function downFirst(s: string = '') {
  return s.replace(/^[A-Z]/, (g) => g.toLowerCase())
}

export function kebab(str: string) {
  return downFirst(str)
    .replace(/[A-Z]/g, (capital) => {
      return '-' + capital.toLowerCase()
    })
    .replace(/-+/g, '-')
}

export function camel(str: string) {
  return str
    .replace(/(?:^\w|[A-Z]|\b\w)|(?<=_)[a-z]/g, (word, index) => {
      return index === 0 ? word.toLowerCase() : word.toUpperCase()
    })
    .replace(/(\s+|-|_)/g, '')
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

export function objectToClassName(style: Dict, prefix = 'css-') {
  const hashed = hash(JSON.stringify(style))
  return prefix + hashed
}

/**
 * for styled(...) and css(...)
 * @param args
 * @returns
 */
export function argsToProps(args: any[]) {
  let obj = args.reduce(
    (result, cur) => {
      if (typeof cur === 'string') {
        if (cur !== 'className') result[cur] = true
      }
      if (typeof cur !== 'object') return result
      if (Array.isArray(cur)) {
        for (const key of cur) {
          result[key] = true
        }
      } else {
        result.css = { ...result.css, ...cur }
      }
      return result
    },
    { css: {} } as any,
  )
  const { css, ...rest } = obj

  return { ...rest, css } // make css to lasted attr
}
