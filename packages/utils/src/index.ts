import hash from 'string-hash'

export { hash }

export const isBrowser =
  typeof window === 'object' &&
  typeof document === 'object' &&
  document.nodeType === 9 &&
  !!document.head?.append

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
    .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => {
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

export function objectToClassName(style: Record<string, any>, prefix = 'css-') {
  const hashed = hash(JSON.stringify(style))
  return prefix + hashed
}

/**
 * for styled(...) and css(...)
 * @param args
 * @returns
 */
export function argsToProps(args: any[], objectPropKey = 'css') {
  return args.reduce((result, cur) => {
    // handle string like 'toCenter px-8 m0'
    if (typeof cur === 'string') {
      cur
        .split(/\s+/)
        .filter((s) => !!s)
        .forEach((s) => {
          if (cur !== 'className') result[s] = true
        })
    }

    if (typeof cur !== 'object') return result

    // hanlde array like ['toCenter', 'px-8', 'mb2']
    if (Array.isArray(cur)) {
      for (const key of cur) {
        result[key] = true
      }
    } else {
      // not array, set to objectPropKey
      result[objectPropKey] = { ...(result[objectPropKey] || {}), ...cur }
    }
    return result
  }, {} as any)
}
