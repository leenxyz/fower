import { Atom } from '@styli/atom'
import { styleSheet } from '@styli/sheet'
import { parse } from '@styli/css-object-processor'
import {
  isEmptyObj,
  hash,
  objectToClassName,
  jsKeyToCssKey,
  isPercentNumber,
  isNumber,
} from '@styli/utils'
import { atomPreprocessor } from './atom-preprocessor'
import { atomCache } from './cache'
import { isUnitProp } from './is-unit-prop'

type Dict = Record<string, any>

//  high-frequency used props in react
const reactProps = ['children', 'onClick', 'onChange', 'onBlur']

/**
 * An Abstract tool to handle atomic props
 */
export class Parser {
  /**
   * atom parsed from props
   */
  atoms: Atom[] = []

  constructor(readonly props: any = {}, readonly theme: any, readonly styli: any) {
    this.traverseProps(props)
  }

  formatCssValue(key: string, value: any) {
    // no need unit
    if (!isUnitProp(key)) return value

    let numValue = value
    // w-80p => width: 80%
    if (isPercentNumber('' + value)) {
      return ('' + value).replace('p', '%')
    }

    if (!isNumber(value)) return value

    numValue = Number(value)

    // if num is between 0 and 1, convert it to percent number.
    if (numValue < 1 && numValue > 0) {
      return (numValue * 100).toFixed(6) + '%'
    }

    const { config } = this.styli

    if (config.unit !== 'none' && config.transformUnit) {
      return config.transformUnit(numValue)
    }

    return numValue
  }

  cssObjToStr(style: Dict) {
    return Object.entries(style).reduce<string>((r, [key, value]) => {
      const cssKey = jsKeyToCssKey(key)
      return r + `${cssKey}: ${this.formatCssValue(cssKey, value)};`
    }, '')
  }

  addAtom(atom: Atom) {
    // if not cached, let's cache it
    if (!atomCache.get(atom.id)) atomCache.set(atom.id, atom)

    this.atoms.push(atom)
  }

  /**
   * prop that can to handle
   * @param propKey
   * @param propValue
   * @returns
   */
  isValidProp(propKey: string, propValue: any): boolean {
    const validTypes = ['string', 'boolean', 'number', 'undefined']
    if (propKey === 'css') return true

    const type = typeof propValue
    if (validTypes.includes(type)) return true

    return false
  }

  /**
   * traverse Props to init atoms
   */
  private traverseProps(props: any): void {
    if (isEmptyObj(props)) return

    const { excludedProps = [] } = props
    const { plugins = [] } = this.styli.config

    // traverse Props
    for (let [propKey, propValue] of Object.entries(props)) {
      // the prop should be excluded by user setting
      if (excludedProps.includes(propKey)) continue

      if (reactProps.includes(propKey)) continue

      if (!this.isValidProp(propKey, propValue)) continue

      let atom = new Atom({ propKey, propValue })

      const cachedAtom = atomCache.get(atom.id)
      if (cachedAtom) {
        this.addAtom(cachedAtom)
        continue
      }

      if (propKey === 'css') {
        // parse css prop
        this.parseCSSProp(propValue)
        continue
      }

      atom = atomPreprocessor(atom, this as any, this.styli)

      // if handled, push to this.atoms and skip it
      if (atom?.handled) {
        this.addAtom(atom)
        continue
      }

      for (const plugin of plugins) {
        if (!plugin.isMatch?.(atom.key)) continue

        if (plugin.beforeAtomStyleCreate) {
          atom = plugin.beforeAtomStyleCreate(atom, this as any)
        }

        if (plugin.handleAtom) {
          atom = plugin.handleAtom(atom, this as any)
        }

        atom.className = this.getAtomClassName(atom)
        atom.handled = true

        this.addAtom(atom)

        break // break from this plugin
      }
    }

    for (const plugin of plugins) {
      if (plugin.afterAtomStyleCreate) {
        plugin.afterAtomStyleCreate(this)
      }
    }
  }

  /**
   *  parse CSS prop
   * @param propValue 
   * @example 
   * ```jsx
      <Box
        css={{
          backgroundColor: 'bisque',
          padding: '20px',
          ':hover': {
            backgroundColor: 'yellow',
          },
          '.child': {
            color: 'white',
          },
        }}
      >
        SubTitle
        <Box className="child">Child</Box>
      </Box>
   * ```
   */
  private parseCSSProp(propValue: any) {
    const parsed = parse(propValue)
    const prefixClassName = objectToClassName(propValue)

    for (const { selector, selectorType, style } of parsed) {
      const isVoid = selectorType === 'void'
      const atom = new Atom({ propKey: 'css' })

      if (selectorType === 'pseudo') atom.meta.pseudo = selector
      if (selectorType === 'child') atom.meta.childSelector = selector

      atom.style = style
      atom.className = isVoid ? objectToClassName(style) : prefixClassName

      atom.id = objectToClassName({ style })
      atom.handled = true

      this.addAtom(atom)
    }
  }

  /**
   * generate className postfix if not boolean props
   * @example #fff -> fff;  50% -> 50p; 1.5 -> 15;
   */
  private getClassPostfix(value: any) {
    const valueStr = String(value)
    const str = valueStr.replace(/#/g, '').replace(/\%/g, 'p').replace(/\./g, 'd')
    const isValidClassName = /^[a-zA-Z0-9-]+$/.test(str)

    return isValidClassName ? str : hash(str)
  }

  private makeResponsiveStyle(breakpoint: string, rule: string) {
    return `@media (min-width: ${breakpoint}) {${rule}}`
  }

  /**
   * create ClassName for Atom
   * @param atom
   */
  private getAtomClassName(atom: Atom) {
    const { propKey = '', propValue, className } = atom

    if (className) return className

    /** global className prefix */
    const configPrefix = this.styli.config.prefix
    const prefix = configPrefix ? configPrefix + '-' : ''

    // if boolean type props, use prop key as className
    if (typeof propValue === 'boolean') return `${prefix}${propKey}`

    const postfix = this.getClassPostfix(propValue)
    return `${prefix}${propKey}-${postfix}`
  }

  /**
   * get component classNames
   */
  getClassNames(extraClassName: string = ''): string[] {
    const classNames = this.atoms.map((i) => i.className)
    if (extraClassName) classNames.push(extraClassName)
    return classNames
  }

  /**
   * get style object
   */
  toStyles() {
    return this.atoms.reduce((result, atom) => {
      if (!atom.isValid) return result // not style type
      return { ...result, ...atom.style }
    }, {} as any)
  }

  /**
   * get rules for parser.insertRule
   * @returns
   */
  toCssRules(): string[] {
    const rules: string[] = []

    for (const atom of this.atoms) {
      let rule: string = ''
      const { className, isValid, style = {} } = atom

      // no style in falsy prop
      if (!isValid) continue

      // empty style
      if (isEmptyObj(style)) continue

      if (atom.inserted) continue

      atom.inserted = true

      const { pseudo, mode, breakpoint = '', childSelector } = atom.meta

      let selector = `.${className}`
      if (pseudo) selector = selector + pseudo
      if (mode) selector = `.${mode} ${selector}`
      if (childSelector) selector = `${selector} ${childSelector}`
      rule = `${selector} { ${this.cssObjToStr(style)} }`
      if (breakpoint) rule = this.makeResponsiveStyle(breakpoint, rule)

      rules.push(rule)
    }

    return rules
  }

  getParsedProps(): any {
    const { props, atoms } = this
    if (isEmptyObj(props)) return {}

    const entries = Object.entries<any>(props)

    /** ignore atomic prop */
    const parsedProps = entries.reduce<any>((result, [key, value]) => {
      const find = atoms.find((atom) => {
        return [atom.propKey, atom.key, atom.id].includes(key)
      })
      if (!find) result[key] = value
      return result
    }, {})
    return parsedProps
  }

  insertRule() {
    const rules = this.toCssRules()
    styleSheet.insertStyles(rules)
  }
}
