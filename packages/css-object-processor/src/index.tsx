import { cssKeyToStyleKey } from '@styli/utils'
import { CSSObject } from '@styli/types'
interface ParsedItem {
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
export function mergeCssObjectPaths(paths: any): ParsedItem[] {
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

export function parse(cssObj: any): ParsedItem[] {
  const originPaths = getCssObjectPaths(cssObj)
  const paths = mergeCssObjectPaths(originPaths)
  return paths
}

export function toRules(cssObj: CSSObject, className = ''): string[] {
  const originPaths = getCssObjectPaths(cssObj)
  const paths = mergeCssObjectPaths(originPaths)

  const rules = paths.map(({ key, value }) => {
    const isPseudo = /^::?.+/.test(key)

    let str = ''
    for (let i in value) {
      str = `${str}${[i]}: ${value[i]};`
    }

    const selector = isPseudo ? key : ' ' + key
    const classNameWrapper = className ? '.' + className : ''

    return `${classNameWrapper}${selector}{${str}}`
  })

  return rules
}
