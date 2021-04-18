import { Atom, Options } from '@styli/atom'
import { store } from '@styli/store'
import { formatColor } from '@styli/color-helper'
import { styleSheet } from '@styli/sheet'
import { parse } from '@styli/css-object-processor'
import {
  isEmptyObj,
  objectToClassName,
  jsKeyToCssKey,
  isPercentNumber,
  isNumber,
} from '@styli/utils'
import { atomCache } from './cache'
import { isUnitProp } from './is-unit-prop'

type Dict = Record<string, any>
interface Props {
  className?: string
  [key: string]: any
}

//  high-frequency used props in react
const reactProps = ['children', 'onClick', 'onChange', 'onBlur', 'className']

/**
 * An Abstract tool to handle atomic props
 */
export class Parser {
  constructor(readonly props = {} as Props) {
    this.traverseProps(props)
  }

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

  get config(): any {
    return store.config
  }

  get plugins(): any[] {
    return store.config.plugins
  }

  /**
   * traverse Props to init atoms
   */
  traverseProps(props: Props): void {
    if (isEmptyObj(props)) return

    const { excludedProps = [] } = props
    const entries = Object.entries<any>(props)

    if (props.className) {
      for (const item of props.className.split(/\s+/)) {
        entries.push([item, true])
      }
    }

    // traverse Props
    for (let [propKey, propValue] of entries) {
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

        if (atom.handled) this.addAtom(atom)
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

  /**
   * Get final css value
   * @param key css key, eg: font-szie, padding-top
   * @param value css value
   * @returns
   */
  formatCssValue(key: string, value: any) {
    // no need unit
    if (!isUnitProp(key)) return value

    let numValue = value

    // 80p -> 80%, 50p-> -50%
    if (isPercentNumber(String(value))) {
      return String(value).replace('p', '%')
    }

    if (!isNumber(value)) return value

    numValue = Number(value)

    // if num is between 0 and 1, convert it to percent number.
    if (numValue < 1 && numValue > 0) {
      return numValue * 100 + '%'
    }

    const { config } = store

    if (config.unit !== 'none') {
      if (config.transformUnit) {
        return config.transformUnit(numValue)
      } else {
        return value + store.config.unit
      }
    }

    return numValue
  }

  /**
   * convert style object to string
   * @param style
   * @param meta
   * @example
   * { width: 10 } -> "width: 10px;"
   * { paddingTop: 10, paddingBottom: 10 } -> "padding-top: 10px;padding-bottom: 10px;"
   * @returns
   */
  styleToString(style: Dict, meta: Atom['meta']) {
    const { important, colorPostfix } = meta
    return Object.entries(style).reduce<string>((r, [key, value]) => {
      const cssKey = jsKeyToCssKey(key)
      const posfix = important ? ' !important' : ''
      const colors: any = store.theme.colors
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

    const { modes = {} } = this.config.theme.colors
    const entries = Object.entries<any>(modes)

    /** for color mode */
    for (const [mode, colors] of entries) {
      if (!atom.style) continue
      const [styleKey, styleValue] = Object.entries(atom.style)[0]
      const colorValue = colors[styleValue]
      if (colorValue) {
        const postfix = '--' + mode

        // TODO: improve clone
        const modeAtom: Atom = JSON.parse(JSON.stringify(atom))

        modeAtom.className = atom.className + postfix
        modeAtom.key = atom.key + postfix
        modeAtom.id = atom.id + postfix
        modeAtom.meta = { mode, ...atom.meta }
        modeAtom.style[styleKey as 'color'] = colorValue

        this.atoms.push(modeAtom)
      }
    }
    this.atoms.push(atom)
  }

  /**
   * prop that can to handle, only primitive value type is valid
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

    atom = atom.preprocessAtom(store.config)

    // if handled, push to this.atoms and skip it
    if (atom.handled) {
      this.addAtom(atom)
      throw new Error('atom is handled, add to this.atoms derectly ,no need to mutate')
    }

    for (const plugin of this.plugins) {
      if (!plugin.isMatch?.(atom.key)) continue

      if (plugin.beforeAtomStyleCreate) {
        atom = plugin.beforeAtomStyleCreate(atom, this as any)
      }

      if (plugin.handleAtom) {
        atom = plugin.handleAtom?.(atom, this as any)
      }

      atom.createClassName(store.config.prefix)

      atom.handled = true

      break // break from this plugin
    }
  }

  parseCSSProp(propValue: any) {
    const parsed = parse(propValue)

    const prefixClassName = objectToClassName(propValue)

    for (const { selector, selectorType, style } of parsed) {
      const [propKey, propValue] = Object.entries(style)[0]

      let option: Options = { propKey, propValue, meta: {} }

      if (selectorType === 'pseudo' && option.meta) {
        option.meta.pseudo = selector
      }

      if (selectorType === 'child' && option.meta) {
        option.meta.childSelector = selector
      }

      const atom = new Atom(option)

      const isVoid = selectorType === 'void'

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

  makeResponsiveStyle(breakpoint: string, rule: string) {
    return `@media (min-width: ${breakpoint}) {${rule}}`
  }

  /**
   * get component classNames
   */
  getClassNames(): string[] {
    /**
     * handle override style
     * @example
     * <Box class="red200 blue200"></Box> will get <div class="blue200"></div>
     * <Box class="px2 px4"></Box> will get <div class="px4"></div>
     */
    let classNames: string[] = []

    this.atoms.reduce<Atom[]>((result, cur) => {
      const index = result.findIndex((i) => i.styleKeysHash === cur.styleKeysHash)

      if (!cur.isValid) return result

      if (index === -1) {
        classNames.push(cur.className)
        result = [...result, cur]
      } else {
        result.splice(index, 1, cur)
        classNames.splice(index, 1, cur.className)
      }

      return result
    }, [])

    const { className = '' } = this.props
    const filteredClassNames = className.split(/\s+/).filter((i) => !classNames.includes(i) && !!i)

    classNames = classNames.concat(filteredClassNames)

    if (this.hasResponsive) classNames.unshift(this.uniqueClassName)
    return classNames
  }

  /**
   * get style object
   */
  toStyle() {
    return this.atoms.reduce<any>((result, atom) => {
      if (!atom.isValid) return result // not style type
      const style = Object.entries(atom.style).reduce<any>((c, [key, value]) => {
        return {
          ...c,
          [key]: this.formatCssValue(jsKeyToCssKey(key), value),
        }
      }, {})
      return { ...result, ...style }
    }, {})
  }

  /**
   * get rules for parser.insertRule
   * @returns
   */
  toRules(enableInserted = false): string[] {
    const { modePrefix = '' } = this.config.theme
    const rules: string[] = []

    // sort responsive style
    this.atoms = this.atoms.sort((a, b) => {
      return parseInt(b.meta.breakpoint || '0') - parseInt(a.meta.breakpoint || '0')
    })

    // console.log('this.atoms:', this.atoms)

    for (const atom of this.atoms) {
      let rule: string = ''
      const { className, isValid, style = {} } = atom

      // no style in falsy prop
      if (!isValid) continue

      // empty style
      if (isEmptyObj(style)) continue

      if (!enableInserted) {
        if (atom.inserted) continue
      }

      atom.inserted = true

      const { pseudo, mode, breakpoint = '', childSelector } = atom.meta
      const uniqueSelector = this.hasResponsive ? '.' + this.uniqueClassName : ''

      let selector = `${uniqueSelector}.${className}`
      if (pseudo) selector = selector + pseudo
      if (mode) selector = `.${modePrefix}${mode} ${selector}`
      if (childSelector) selector = `${selector} ${childSelector}`
      rule = `${selector} { ${this.styleToString(style, atom.meta)} }`
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
      const find = atoms.find((atom) => [atom.propKey, atom.key, atom.id, 'css'].includes(key))
      if (!find) result[key] = value
      return result
    }, {})

    return parsedProps
  }

  insertRule() {
    const rules = this.toRules()
    styleSheet.insertStyles(rules)
  }
}
