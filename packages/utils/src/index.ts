import { noCase } from 'no-case'
import isBrowser from 'is-in-browser'
import isEqual from 'fast-deep-equal'
import hash from 'string-hash'

export { isBrowser, hash, isEqual }

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

// https://www.zhangxinxu.com/wordpress/2010/03/javascript-hex-rgb-hsl-color-convert/
export function hexToRgba(sColor: string, opacity?: string) {
  const reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/

  if (reg.test(sColor)) {
    if (sColor.length === 4) {
      let sColorNew = '#'
      for (let i = 1; i < 4; i += 1) {
        sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1))
      }
      sColor = sColorNew
    }
    let sColorChange = []
    for (let i = 1; i < 7; i += 2) {
      sColorChange.push(parseInt('0x' + sColor.slice(i, i + 2)))
    }
    return `rgba(${sColorChange.join(',')},${opacity ? '.' + opacity : '1'})`
  }

  return sColor
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
      let str = ''
      for (let i in value) {
        str = `${str}${[i]}: ${value[i]};`
      }
      return `${className ? '.' + className : ''}${key}{${str}}`
    })
    .join(' ')
}
