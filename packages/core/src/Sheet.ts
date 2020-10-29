import hash from 'string-hash'
import { CSSProperties } from 'react'
import { Props, Rule } from './types'
import { kebab } from '@styli/utils'

/**
 * Sheet, one Props map to one Sheet
 */
export class Sheet {
  private breakpoints = [640, 768, 1024, 1280]

  private mediaStyles: string[] = ['', '', '', '', '', '']

  /**
   * component Props
   */
  props = {} as Props

  cssPropClassName: string = ''

  /**
   * rules parsed from props
   */
  rules: Rule[] = []

  constructor(props: Props) {
    this.props = props
  }

  private storeMedieStyles(rule: Rule, cssKey: string, value: any[]) {
    value.forEach((_, i) => {
      // store responsive styles
      this.mediaStyles[i] += `.${rule.className} { ${cssKey}: ${value[i + 1]}; }`
    })
  }

  /**
   * add rule to sheet
   * @param rule
   */
  addRule(rule: Rule) {
    const { name = '' } = rule
    const value = this.props[name]
    if (rule.name === 'css') {
      rule.className = `css-${hash(JSON.stringify(value))}`

      // store className from css Props
      this.cssPropClassName = rule.className
    } else if (typeof value === 'boolean') {
      rule.className = name
    } else if (Array.isArray(value)) {
      rule.className = `${name}-${value.join('-')}`
    } else {
      rule.className = `${name}-${hash(JSON.stringify(value))}`
    }

    this.rules.push(rule)
  }

  getRule(name: string) {
    return this.rules.find((rule) => rule.name === name)
  }

  removeRule(name: string) {
    const idx = this.rules.findIndex((rule) => rule.name === name)
    if (idx !== -1) {
      this.rules.splice(idx, 1)
    }
  }

  updateRule(name: string, rule: Rule) {
    const idx = this.rules.findIndex((rule) => rule.name === name)
    if (idx !== -1) {
      this.rules[idx] = rule
    } else {
      this.rules.push(rule)
    }
  }

  indexOf(name: string): number {
    return this.rules.findIndex((rule) => rule.name === name)
  }

  /**
   * get component classNames
   */
  getClassNames() {
    return this.rules.map((i) => i.className).join(' ')
  }

  /**
   * get style object
   */
  toStyles() {
    const styliStyles = this.rules.reduce((result, cur) => {
      if (cur.name !== 'css') return { ...result, ...cur.style }
      return result
    }, {} as CSSProperties)

    /** array style for RN */
    if (Array.isArray(this.props.style)) {
      return [styliStyles, ...this.props.style]
    }

    return { ...styliStyles, ...this.props.style }
  }

  /**
   * get class string
   */
  toCss(): string {
    // TODO: 循环可能太多
    const css = this.rules.reduce((result, rule) => {
      // handle css prop
      if (rule.name === 'css') return result + parseCSSProp(rule.style, rule.className)

      /** to css rule string */
      const cssRuleStr = Object.keys(rule.style).reduce((r, k) => {
        const value: any = (rule as any).style[k]
        const cssKey = kebab(k)

        if (!Array.isArray(value)) return r + `${cssKey}: ${value};`

        //responsive style, TODO: 这里有不纯
        this.storeMedieStyles(rule, cssKey, value)

        return r + `${cssKey}: ${value[0]};`
      }, '')

      // wrap with css className
      return result + `.${rule.className} { ${cssRuleStr} }`
    }, '')

    const responsiveCss = this.breakpoints.reduce((result, b, i) => {
      return result + `@media (min-width: ${b}px) { ${this.mediaStyles[i]} }`
    }, '')

    return css + responsiveCss
  }
}

function getPaths(object: any): any {
  return (
    object &&
    typeof object === 'object' &&
    Object.keys(object).reduce(
      (p, k) => (getPaths(object[k]) || [[]]).reduce((r: any, a: any) => [...r, [k, ...a]], p),
      [],
    )
  )
}

/**
 * parse css props
 * // TODO: 太乱，需要重构
 * @param cssObj
 * @param className
 */
function parseCSSProp(cssObj: any, className = '') {
  const getPrefix = (v: string) => (/^::?.*/.test(v) ? '' : ' ')
  const paths = getPaths(cssObj)

  const cssPropFragmentList: string[] = paths
    .reduce((result: any, path: string[]) => {
      const attrValue = path.reduce((obj: any, c: string) => obj[c], cssObj)
      const attr = kebab('' + path.pop())
      // pseudo-class pseudo-element connect selector string directly

      const str = path.reduce((result, value) => `${result}${getPrefix(value)}${value}`, '')

      const obj = {
        key: `.${className}${getPrefix(str)}${str}`,
        value: { [attr]: attrValue },
      }

      // merge same class
      const idx = result.findIndex((a: any) => a.key === obj.key)
      if (idx === -1) {
        result = result.concat(obj)
      } else {
        const { key, value } = result[idx]
        result[idx] = { key, value: { ...obj.value, ...value } }
      }
      return result
    }, [])
    .map(({ key, value }: any) => {
      let str = ''
      for (let i in value) {
        str = `${str}${[i]}: ${value[i]};`
      }
      return `${key}{${str}}`
    })
  return cssPropFragmentList
}
