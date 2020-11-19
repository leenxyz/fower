import { noCase } from 'no-case'
import isBrowser from 'is-in-browser'
import isEqual from 'fast-deep-equal'
import hash from 'string-hash'
import { darken, lighten, toHex, getRgbaValue } from './color'

export { isBrowser, hash, isEqual }
export * from './color'

export function upFirst(s: string = '') {
  return s.charAt(0).toUpperCase() + s.slice(1)
}

export function downFirst(s: string = '') {
  return s.charAt(0).toLowerCase() + s.slice(1)
}

export function kebab(s: string) {
  return noCase(s).replace(/\s/g, '-')
}

export function isNumber(s: string | number) {
  return /^(\d+)?(.\d+)?$/.test('' + s)
}

export function isValidPropValue(value: any) {
  return !!value && typeof value !== 'boolean'
}

export function isEmptyObj(props: any) {
  return !props || !Object.keys(props).length
}

export function isPercentNumber(s: string | number) {
  return /^-?\d+p$/.test('' + s)
}

export function cssKeyToStyleKey(key: string) {
  return /^Webkit.+$/.test(key) ? '-' + kebab(key) : kebab(key)
}

export function isPlainType(value: any) {
  const plainTypes = ['number', 'string', 'boolean']
  return plainTypes.includes(typeof value)
}

/**
 * @example
 * ```
 * Convert
 *
 * const css = {
 *    border: '1px solid',
 *    color: 'red',
 *    '.button': {
 *       fontSize: '12px'
 *       display: 'block'
 *    }
 * }
 *
 * To
 *
 * [
 *    [{ border: '1px solid'}]
 *    [{ color: 'red'}]
 *    ['.button', { font-size: '12px'}]
 *    ['.button', { display: 'block'}]
 * ]
 * ```
 */
export function getCssObjectPaths(target: any): any {
  if (typeof target === 'object') {
    const keys = Object.keys(target)
    // 遍历第一层
    return keys.reduce((p, k) => {
      // 第一层值
      const value = target[k]
      const child = getCssObjectPaths(value)

      // 对象类型
      if (typeof child === 'object') {
        return child.reduce((r: any, a: any) => {
          return [...r, [k, ...a]]
        }, p)
        // 值类型
      } else {
        return [...p, [{ [cssKeyToStyleKey(k)]: child }]]
      }
    }, [])
  } else {
    return target
  }
}

/**
 * @example
 * ```
 * Convert
 *
 * [
 *    [{ border: '1px solid'}]
 *    [{ color: 'red'}]
 *    ['.button', { font-size: '12px'}]
 *    ['.button', { display: 'block'}]
 * ]
 *
 * To
 *
 * [
 *    {
 *      key: '',
 *      value: {
 *        border: '1px solid',
 *        color: 'red'
 *      }
 *    },
 *    {
 *      key: '.button',
 *      value: {
 *        'font-size': '12px'
 *        display: 'block'
 *      }
 *    }
 * ]
 *
 * ```
 */
export function mergeCssObjectPaths(paths: any) {
  return paths.reduce((result: any, c: any) => {
    // 合并路径
    const isValue = !Array.isArray(c)
    const value = isValue ? c : c.pop()
    const path = isValue ? '' : c.join(' ')

    const idx = result.findIndex(({ key }: any) => key === path)
    if (idx === -1) {
      result.push({
        key: path,
        value,
      })
    } else {
      result[idx] = {
        key: path,
        value: {
          ...result[idx].value,
          ...value,
        },
      }
    }
    return result
  }, [])
}

/**
 * @example
 * ```
 * Convert
 * [
 *    {
 *      key: '',
 *      value: {
 *        border: '1px solid',
 *        color: 'red'
 *      }
 *    },
 *    {
 *      key: '.button',
 *      value: {
 *        'font-size': '12px'
 *        display: 'block'
 *      }
 *    }
 * ]
 *
 * To
 *
 * .css-123 {border: 1px solid;color:red};.css-123.button{font-size:12px;display:block};
 * ```
 */
export function parseCSSProp(cssObj: any, className = ''): string {
  const originPaths = getCssObjectPaths(cssObj)
  const paths = mergeCssObjectPaths(originPaths)

  return paths
    .map(({ key, value }: any) => {
      const isPseudo = /^::?\w+$/.test(key)

      let str = ''
      for (let i in value) {
        str = `${str}${[i]}: ${value[i]};`
      }
      return `${className ? '.' + className : ''}${isPseudo ? key : ' ' + key}{${str}}`
    })
    .join(' ')
}

export function opacityFn(color: string, amount: number = 0) {
  const [r, g, b, oldOpacity = 0] = getRgbaValue(color)
  const opacity = oldOpacity + amount / 100
  const rgbValue = [r, g, b]

  if (opacity >= 1) return toHex(`rgb(${rgbValue.join(',')})`)

  return typeof opacity === 'number'
    ? `rgba(${rgbValue.join(',')},${opacity})`
    : `rgb(${rgbValue.join(',')})`
}

export function opacify(color: string, amount: number = 0) {
  return opacityFn(color, amount)
}

export function transparentize(color: string, amount: number = 0) {
  console.log('-amount:', -amount)
  return opacityFn(color, -amount)
}

export function formatColor(value: string): string {
  if (!value.includes('-')) return value
  const result = value.match(/^(.+)-([TOLDtold])?(\d{0,3})?$/)
  if (!result) return value
  const [, color, type, amountStr] = result
  const amount = Number(amountStr)

  if (!type) return type
  console.log('type:', type)
  if (/^t$/i.test(type)) return transparentize(color, amount)
  if (/^o$/i.test(type)) return opacify(color, amount)
  if (/^d$/i.test(type)) return toHex(darken(color, amount))
  if (/^l$/i.test(type)) return toHex(lighten(color, amount))
  return color
}
