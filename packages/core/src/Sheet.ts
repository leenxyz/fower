import hash from 'string-hash'
import { CSSProperties } from 'react'
import { kebab } from './utils'
import { Props } from './types'

export interface Rule {
  name: 'css' | ({} & string)
  style: CSSProperties
  media?: string
  pseudo?: 'link' | 'visited' | 'hover' | 'active'
  type?: 'style' | 'font' | 'keyframe'
  className?: string
  cssPropFragmentList?: string[]
  cssMediaFragmentList?: string[]
  cssFragment?: string
}

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
    const { name } = rule
    const value = this.props[name]
    if (rule.name === 'css') {
      rule.className = `css-${hash(JSON.stringify(value))}`
    } else if (typeof value === 'boolean') {
      rule.className = name
    } else {
      rule.className = `${name}-${hash(JSON.stringify(value))}`
    }

    this.rules.push(rule)
  }

  // TODO:
  getRule(name: string) {
    console.log('name', name)
  }

  // TODO:
  removeRule() {}

  // TODO:
  updateRule() {}

  // TODO:
  indexOf(): number {
    return 0
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
    return this.rules.reduce((result, cur) => {
      if (cur.name !== 'css') {
        return {
          ...result,
          ...cur.style,
        }
      }

      // TODO:
      return result
    }, {} as CSSProperties)
  }

  /**
   * get css rule string
   */
  toCss(): string {
    // TODO: 循环可能太多
    return this.rules
      .map((i) => {
        // handle css prop
        if (i.name === 'css') {
          return parseCSSProp(i.style, i.className)
        }

        /** to css rule string */
        const cssRuleStr = Object.keys(i.style)
          .map((s) => {
            const cssKeyName = kebab(s)
            return `${cssKeyName}: ${(i as any).style[s]}`
          })
          .join(';')

        // wrap with css className
        return `.${i.className} { ${cssRuleStr} }`
      })
      .join('')
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

  const cssPropFragmentList: string[] = getPaths(cssObj)
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

  return cssPropFragmentList.join('')
}
