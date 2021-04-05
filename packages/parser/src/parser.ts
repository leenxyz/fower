import { Atom } from '@styli/atom'
import { formatColor } from '@styli/color-helper'
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
const reactProps = ['children', 'onClick', 'onChange', 'onBlur', 'className']

/**
 * An Abstract tool to handle atomic props
 */
export class Parser {
  /**
   * atom parsed from props
   */
  atoms: Atom[] = []

  get uniqueClassName() {
    return objectToClassName(Object.keys(this.props))
  }

  get hasResponsive() {
    return !!this.atoms.find((i) => !!i.meta.breakpoint)
  }

  get plugins(): any[] {
    return this.styli.config.plugins
  }

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

  cssObjToStr(style: Dict, meta: Atom['meta']) {
    const { important, colorPostfix } = meta
    return Object.entries(style).reduce<string>((r, [key, value]) => {
      const cssKey = jsKeyToCssKey(key)
      const posfix = important ? '!important' : ''
      const colors = this.styli.getColors()
      if (colorPostfix) {
        value = formatColor(colors[value] || value, colorPostfix)
      } else {
        value = this.formatCssValue(cssKey, colors[value] || value)
      }
      return r + `${cssKey}: ${value}${posfix};`
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
   * to mutate atom attribute, and add atom to this.atoms
   * @param atom
   */
  mutateAtom(atom: Atom): void {
    const cachedAtom = atomCache.get(atom.id)
    if (cachedAtom) {
      this.addAtom(cachedAtom)
      throw new Error('atom is cached, add to this.atoms derectly, no need to mutate')
    }

    atom = atomPreprocessor(atom, this as any, this.styli)

    // if handled, push to this.atoms and skip it
    if (atom?.handled) {
      this.addAtom(atom)
      throw new Error('atom is handled, add to this.atoms derectly ,no need to mutate')
    }

    for (const plugin of this.plugins) {
      if (!plugin.isMatch?.(atom.key)) continue

      if (plugin.beforeAtomStyleCreate) {
        atom = plugin.beforeAtomStyleCreate(atom, this as any)
      }

      if (plugin.handleAtom) {
        atom = plugin.handleAtom(atom, this as any)
      }

      atom.className = this.getAtomClassName(atom)
      atom.handled = true

      // this.addAtom(atom)

      break // break from this plugin
    }
  }

  /**
   * traverse Props to init atoms
   */
  private traverseProps(props: any): void {
    if (isEmptyObj(props)) return

    const { excludedProps = [] } = props

    // traverse Props
    for (let [propKey, propValue] of Object.entries(props)) {
      // the prop should be excluded by user setting
      if (excludedProps.includes(propKey)) continue

      if (reactProps.includes(propKey)) continue

      if (!this.isValidProp(propKey, propValue)) continue

      // parse css prop
      if (propKey === 'css') {
        this.parseCSSProp(propValue)
        continue
      }

      let atom = new Atom({ propKey, propValue })

      try {
        this.mutateAtom(atom)
        this.addAtom(atom)
      } catch (error) {
        continue
      }
    }

    for (const plugin of this.plugins) {
      if (plugin.afterAtomStyleCreate) {
        plugin.afterAtomStyleCreate(this)
      }
    }
  }

  private parseCSSProp(propValue: any) {
    const parsed = parse(propValue)

    const prefixClassName = objectToClassName(propValue)

    for (const { selector, selectorType, style } of parsed) {
      const [propKey, propValue] = Object.entries(style)[0]
      const atom = new Atom({ propKey, propValue })

      const isVoid = selectorType === 'void'

      if (selectorType === 'pseudo') atom.meta.pseudo = selector
      if (selectorType === 'child') atom.meta.childSelector = selector

      try {
        this.mutateAtom(atom)
      } catch (error) {
        continue
      }

      // not match atomic props rule
      if (!atom.style) {
        atom.style = style

        // TODO: need refactor
        atom.id = objectToClassName({ style })

        atom.className = isVoid ? objectToClassName(style) : prefixClassName

        atom.handled = true
      }

      this.addAtom(atom)
    }
  }

  private makeResponsiveStyle(breakpoint: string, rule: string) {
    return `@media (min-width: ${breakpoint}) {${rule}}`
  }

  /**
   * create ClassName for Atom
   * @param atom
   */
  private getAtomClassName(atom: Atom) {
    const { id, className } = atom

    if (className) return className

    /** global className prefix */
    const configPrefix = this.styli.config.prefix
    const prefix = configPrefix ? configPrefix + '-' : ''
    let value = id.replace(/#/g, '').replace(/\%/g, 'p').replace(/\./g, 'd')
    const isValidClassName = /^[a-zA-Z0-9-]+$/.test(value)
    value = isValidClassName ? value : `css-${hash(value)}`
    return `${prefix}${value}`
  }

  /**
   * get component classNames
   */
  getClassNames(extraClassName: string = ''): string[] {
    const classNames = this.atoms.map((i) => i.className)
    if (extraClassName) classNames.push(extraClassName)
    if (this.hasResponsive) classNames.unshift(this.uniqueClassName)
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

    // sort responsive style
    this.atoms = this.atoms.sort((a, b) => {
      return parseInt(b.meta.breakpoint || '0') - parseInt(a.meta.breakpoint || '0')
    })

    // console.log('this.atoms', this.atoms)

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
      const uniqueSelector = this.hasResponsive ? '.' + this.uniqueClassName : ''

      let selector = `${uniqueSelector}.${className}`
      if (pseudo) selector = selector + pseudo
      if (mode) selector = `.${mode} ${selector}`
      if (childSelector) selector = `${selector} ${childSelector}`
      rule = `${selector} { ${this.cssObjToStr(style, atom.meta)} }`
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
        return [atom.propKey, atom.key, atom.id, 'css'].includes(key)
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
