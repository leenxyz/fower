import { cssKeyToStyleKey, isNumber, isPercentNumber } from '@styli/utils'
import { styli } from './styli'
import { ModifierType, Props } from './types'

export function getValue(value: string | number, modifierType?: ModifierType | ({} & string)) {
  if (isNumber(value)) {
    const numValue = Number(value)

    if (numValue < 1) {
      return (numValue * 100).toFixed(2) + '%'
    }

    const { transformUnit } = styli.getConfig()
    return transformUnit(numValue, modifierType)
  }
  return isPercentNumber(value) ? ('' + value).replace('p', '%') : value
}

/**
 * modifierToProps
 * @param modifier
 * @example const props = modifierToProps('px-10 m-20')
 */
export function modifierToProps(modifier: string): Props {
  return modifier
    .split(/[\s\t\n]+/)
    .reduce((result, cur) => ({ ...result, [cur]: true }), {} as Props)
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
        return [...p, { [cssKeyToStyleKey(k)]: child }]
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
