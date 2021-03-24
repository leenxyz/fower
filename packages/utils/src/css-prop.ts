import { cssKeyToStyleKey } from './util'

interface KeyValue {
  key: string
  value: any
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
export function mergeCssObjectPaths(paths: any): KeyValue[] {
  return paths.reduce((result: any, c: any) => {
    // 合并路径
    const isValue = !Array.isArray(c)
    const value = isValue ? c : c.pop()
    const path = isValue ? '' : c.join('')

    const idx = result.findIndex(({ key }: any) => key === path)
    result[idx === -1 ? result.length : idx] = {
      key: path,
      value: Object.assign({}, idx === -1 ? {} : result[idx].value, value),
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
export function parseCSSProp(cssObj: any, className = ''): string[] {
  const originPaths = getCssObjectPaths(cssObj)
  const paths = mergeCssObjectPaths(originPaths)

  const rules = paths.map(({ key, value }) => {
    const isPseudo = /^::?.+/.test(key)

    let str = ''
    for (let i in value) {
      str = `${str}${[i]}: ${value[i]};`
    }
    return `${className ? '.' + className : ''}${isPseudo ? key : ' ' + key}{${str}}`
  })
  return rules
}
