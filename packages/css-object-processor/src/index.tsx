import * as CSS from 'csstype'
import { objectToClassName, jsKeyToCssKey } from '@fower/utils'

type CSSProperties = CSS.Properties<number | string>
type PseudosObject = { [P in CSS.Pseudos]?: CSSProperties }
type CSSObject<T = any> =
  | (CSSProperties & PseudosObject)
  | {
      [K in keyof T]?: T[K] extends object ? CSSObject<T[K]> : CSSProperties
    }

type Dict = Record<string, any>
type FlattenItem = (string | Dict)[]

interface ParsedItem {
  selector: string
  selectorType: 'void' | 'child' | 'pseudo'
  style: Dict
}

function isPseudo(key: string) {
  return /^::?.+/.test(key)
}

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
      return [...result, [{ [key]: flattenResult }]]
    }

    return flattenResult.reduce<FlattenItem[]>((r, cur) => {
      return [...r, [key, ...cur]]
    }, result)
  }, [])
}

export function parse(cssObj: CSSObject): ParsedItem[] {
  const flattenItems = flatten(cssObj)
  const paths = flattenItems.reduce<ParsedItem[]>((result, item) => {
    const style = item.pop() as Dict
    const selector = item.reduce<string>((r, cur) => {
      if (isPseudo(cur as string)) return `${r}${cur}`
      return `${r} ${cur}`
    }, '')

    let selectorType: ParsedItem['selectorType'] = 'child'
    if (isPseudo(selector)) selectorType = 'pseudo'
    if (selector === '') selectorType = 'void'

    return [...result, { selector, style, selectorType }]
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
    str += `${jsKeyToCssKey(key)}: ${value}`
  }
  return str
}

function toRule(rule: ParsedItem, wrapperSelector = '') {
  const { selector, selectorType, style } = rule
  const ruleContent = toRuleContent(style)

  // not nested style
  if (selectorType === 'void') {
    const atomicClassName = objectToClassName(style) || wrapperSelector
    return `.${atomicClassName} {${ruleContent}}`
  }

  const connector = selectorType === 'pseudo' ? '' : ' '
  const finalSelector = wrapperSelector + connector + selector

  return `${finalSelector} {${ruleContent}}`
}

/**
 *  to rules can insertRule
 *  TODO: need improve
 * @param cssObj
 * @param className
 * @returns
 */
export function toRules(cssObj: CSSObject, className?: string): string[] {
  const wrapperSelector = className ? `.${className}` : ''
  const parsed = parse(cssObj)
  const rules = parsed.map((rule) => toRule(rule, wrapperSelector))
  return rules
}
