import { cssKeyToStyleKey, objectToClassName } from '@styli/utils'
import { CSSObject } from '@styli/types'

type Dict = Record<string, any>
type FlattenItem = (string | Dict)[]

interface ParsedItem {
  selector: string
  style: Dict
}

/**
 *
 * @param cssObj
 * @returns
 *
 * @example
 *
 * ```
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
export function flatten(cssObj: CSSObject): FlattenItem[] {
  // false value
  if (!cssObj) return cssObj

  //  not object, just css primitive value like '10px', 'red
  if (typeof cssObj !== 'object') return cssObj

  // responsive value
  if (Array.isArray(cssObj)) return cssObj

  /** is plain object */
  const keys = Object.keys(cssObj)

  // 遍历第一层
  return keys.reduce<FlattenItem[]>((result, key) => {
    // 第一层值
    const value = (cssObj as any)[key]

    const flattenResult = flatten(value)

    /** primitive value */
    if (!Array.isArray(flattenResult)) {
      return [...result, [{ [cssKeyToStyleKey(key)]: flattenResult }]]
    }

    return flattenResult.reduce<FlattenItem[]>((r, cur) => {
      return [...r, [key, ...cur]]
    }, result)
  }, [])
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
 *    {
 *      selector: '',
 *      style: {
 *        border: '1px solid',
 *        color: 'red'
 *      }
 *    },
 *    {
 *      selector: '.button',
 *      style: {
 *        'font-size': '12px'
 *        display: 'block'
 *      }
 *    }
 * ]
 *
 * ```
 */

export function parse(cssObj: CSSObject): ParsedItem[] {
  const flattenItems = flatten(cssObj)

  const paths = flattenItems.reduce<ParsedItem[]>((result, item) => {
    const style = item.pop() as Dict
    const selector = item.join('')

    return [...result, { selector, style }]
  }, [])

  return paths
}

/**
 * { color: 'red' } => 'color: red'
 * @param style
 *
 */
function toRuleContent(style: Dict) {
  let str = ''
  for (const [key, value] of Object.entries(style)) {
    str += `${key}: ${value}`
  }
  return str
}

/**
 *  to rules can insertRule
 * @param cssObj
 * @param className
 * @returns
 */
export function toRules(cssObj: CSSObject, className?: string): string[] {
  const wrapperSelector = className ? `.${className}` : ''

  const parsed = parse(cssObj)

  const rules = parsed.map(({ selector, style }) => {
    const ruleContent = toRuleContent(style)

    // not nested style
    if (selector === '') {
      const atomicClassName = objectToClassName(style)
      return `.${atomicClassName} {${ruleContent}}`
    }

    const isPseudo = /^::?.+/.test(selector)
    const connector = isPseudo ? '' : ' '
    const finalSelector = wrapperSelector + connector + selector

    return `${finalSelector} {${ruleContent}}`
  })

  return rules
}
