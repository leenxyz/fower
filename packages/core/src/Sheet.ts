import hash from 'string-hash'
import { CSSProperties } from 'react'
import { Props, Rule } from './types'

/**
 * Sheet ,one Props map to one Sheet
 */
export class Sheet {
  /**
   * rules parsed from props
   *
   * @type {Rule[]}
   * @memberof Sheet
   */
  rules: Rule[] = []

  /**
   * component Props
   *
   * @type {Props}
   * @memberof Sheet
   */
  props: Props = {}

  constructor(props: Props) {
    this.props = props
  }

  /**
   * add rule to sheet
   * @param rule
   */
  addRule(rule: Rule) {
    const { name, className = '' } = rule
    const value = this.props[name]
    if (!className) {
      if (typeof value === 'boolean') {
        rule.className = name
      } else if (Array.isArray(value)) {
        rule.className = `${name}-${value.join('-')}`
      } else {
        rule.className = `${name}-${hash(JSON.stringify(value))}`
      }
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
  getRulesStyles() {
    return this.rules.reduce((result, cur) => {
      return { ...result, ...cur.style }
    }, {} as CSSProperties)
  }

  /**
   * get class string
   */
  getRulesCss(): string {
    return this.rules.reduce((result, cur) => {
      const { className, cssFragment, cssFragmentWithSelector } = cur
      if (cssFragmentWithSelector) return `${result}${cssFragmentWithSelector}`
      if (!className || !cssFragment) return result
      return `${result}.${className}{${cssFragment}} `
    }, '')
  }

  /**
   * get media class string list
   */
  getRulesMediaCss(): string[] {
    const mediaCssFragmentList: string[] = []
    this.rules.forEach((rule) => {
      const { className, cssFragmentList = [] } = rule
      cssFragmentList.forEach((cssFragment, idx) => {
        mediaCssFragmentList[idx] = `${
          mediaCssFragmentList[idx] || ''
        } .${className}{${cssFragment}}`
      })
    })
    return mediaCssFragmentList
  }
}
