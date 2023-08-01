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
  selectorType: 'void' | 'child' | 'sibling' | 'pseudo'
  style: Dict
}

function isPseudo(key: string) {
  return /^::?.+/.test(key)
}

export function flatten(cssObj: CSSObject, breakpoints?: any, prefix?: any): FlattenItem[] {
  let result: FlattenItem[] = []

  /** is plain object */
  const keys = Object.keys(cssObj)

  for (const key of keys) {
    const value = (cssObj as any)[key]

    if (typeof value !== 'object') {
      const next = prefix ? [prefix, { [key]: value }] : [{ [key]: value }]
      result.push(next)

      continue
    }

    if (Array.isArray(value)) {
      if (breakpoints) {
        const pointKeys = Object.keys(breakpoints)
        const obj = value.reduce<any>((result, cur, i) => {
          const prop = `${key}${i === 0 ? '' : '--' + pointKeys[i - 1]}`
          return { ...result, [prop]: cur }
        }, {})

        result = [...result, ...flatten(obj, breakpoints, prefix)]

        continue
      }

      result.push([{ [key]: value }])
      continue
    }

    result = [...result, ...flatten(value, breakpoints, key)]
  }

  return result
}

export function parse(cssObj: CSSObject, breakpoints?: any): ParsedItem[] {
  breakpoints
  const flattenItems = flatten(cssObj, breakpoints, null)

  const paths = flattenItems.reduce<ParsedItem[]>((result, item) => {
    const style = item.pop() as Dict
    // const style = item[item.length - 1] as any

    let selector = item
      .reduce<string>((r, cur) => {
        return isPseudo(cur as string) ? `${r}${cur}` : `${r} ${cur}`
      }, '')
      .trim()

    let selectorType: ParsedItem['selectorType'] = 'child'
    if (isPseudo(selector)) selectorType = 'pseudo'
    if (selector === '') selectorType = 'void'
    if (selector.startsWith('&')) {
      selectorType = 'sibling'
      selector = selector.replace(/^&/, '')
    }

    return [...result, { selector, style, selectorType }]
  }, [])

  // console.log('flattenItems=========:', flattenItems, 'paths:', paths)

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
 *  to rules can insertRules
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
