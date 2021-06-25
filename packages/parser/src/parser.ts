import { Atom, Options } from '@fower/atom'
import { store } from '@fower/store'
import { atomCache } from '@fower/cache'
import { formatColor } from '@fower/color-helper'
import { styleSheet } from '@fower/sheet'
import { Props, PropItem } from '@fower/types'
import { parse } from '@fower/css-object-processor'
import {
  isEmptyObj,
  objectToClassName,
  jsKeyToCssKey,
  isPercentNumber,
  isNumber,
} from '@fower/utils'
import { isUnitProp } from './is-unit-prop'

type Dict = Record<string, any>

/**
 * @example p2,mx4,left10,spaceX4...
 * @example p-20,opacity-80
 */
export const digitReg =
  /^([mp][xytrbl]?|space[xy]?|top|right|bottom|left|[wh]|square|circle|min[hw]|max[hw]|opacity|delay|duration|translate[xyz]|scale[xy]?|rotate[xy]?|skew[xy]?|text|zIndex|leading|stroke|fontWeight|outlineOffset|order|flex(Grow|Shrink|Basis)?|(row|column)?Gap|gridTemplateColumns|border[trbl]?|rounded(Top(Left|Right)?|Right|Bottom(Left|Right)?|Left)?)(-?-?\d+[a-z]*?|-auto)$/i

//  high-frequency used props in react
const reactProps = ['children', 'onClick', 'onChange', 'onBlur', 'className', 'placeholder']

/**
 * An Abstract tool to handle atomic props
 */
export class Parser {
  constructor(public props = {} as Props) {
    this.traverseProps(props)

    if (store.config.autoDarkMode) {
      this.autoDarkMode()
    }
  }

  /**
   * atom parsed from props
   */
  atoms: Atom[] = []

  propList: PropItem[] = []

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

  getClassNameById = (id: string) => store.config.prefix + id

  /**
   * traverse Props to init atoms
   */
  traverseProps(props: Props): void {
    if (isEmptyObj(props)) return

    const { pseudos = [], theme } = this.config
    const { breakpoints, modes } = theme || {}
    const breakpointKeys = Object.keys(breakpoints)
    const modeKeys: string[] = modes || []
    const pseudoKeys: string[] = pseudos

    const { excludedProps = [] } = props
    const entries = Object.entries<any>(props)

    if (props?.className) {
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
        this.parseCSSObject(propValue, {})
        continue
      }

      /** handle _hover, _sm, _dark... */
      if (propKey.startsWith('_')) {
        const postfix = propKey.replace(/^_/, '')
        const obj = Array.isArray(propValue)
          ? propValue.reduce<any>((r, cur) => ({ ...r, [cur]: true }), {})
          : propValue

        if (modeKeys.includes(postfix)) {
          this.parseCSSObject(obj, { mode: postfix })
          continue
        }
        if (breakpointKeys.includes(postfix)) {
          this.parseCSSObject(obj, { breakpoint: breakpoints[postfix] })
          continue
        }
        if (pseudoKeys.includes(postfix)) {
          this.parseCSSObject(obj, { pseudo: ':' + postfix })
          continue
        }
      }

      const composition = store.compositions.get(propKey)

      if (composition) {
        this.parseCSSObject(composition, {})

        const atom = new Atom({ propKey, propValue })
        atom.handled = true
        atom.style = {}
        this.addAtom(atom)
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

  autoDarkMode() {
    const colorMap: any = {
      white: 'black',
      black: 'white',
      '50': '900',
      '100': '800',
      '200': '700',
      '300': '600',
      '400': '500',
      '500': '400',
      '600': '300',
      '700': '200',
      '800': '100',
      '900': '50',
    }

    const colorKeys = ['color', 'backgroundColor', 'borderColor']
    const darkAtoms: Atom[] = []

    /** TODO: hack for auto dark mode, need to refactor */
    for (const atom of this.atoms) {
      if (colorKeys.includes(atom.type) && !atom.meta.mode) {
        const find = this.atoms.find((i) => colorKeys.includes(i.type) && i.meta.mode === 'dark')
        if (find) continue

        const entries = Object.entries(atom.style)
        if (!entries?.length) continue

        const [, colorValue] = entries[0]

        if (!colorValue) continue

        let [, , mapKey] = colorValue.match(/^([a-z]+)(\d+)$/i) || []
        if (['white', 'black'].includes(colorValue)) mapKey = colorValue
        colorMap

        let str = JSON.stringify(atom).replace(new RegExp(`${mapKey}`, 'g'), colorMap[mapKey])

        if (mapKey === 'white') str = str.replace(/White/g, 'Black')
        if (mapKey === 'black') str = str.replace(/Black/g, 'White')

        const cloned: Atom = JSON.parse(str)

        const darkAtom = new Atom({
          ...cloned,
          propKey: cloned.propKey + '--dark',
          meta: { ...cloned.meta, mode: 'dark' },
        })

        const cachedAtom = atomCache.get(darkAtom.id)

        if (cachedAtom) {
          darkAtoms.push(cachedAtom)
        } else {
          darkAtoms.push(darkAtom)
        }
      }
    }

    for (const darkAtom of darkAtoms) {
      this.addAtom(darkAtom)
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
    if (!atomCache.get(atom.id)) {
      atomCache.set(atom.id, atom)
    }

    const ssrAtomIds = styleSheet.getSsrAtomIds()
    const { modes = {} } = this.config.theme.colors
    const entries = Object.entries<any>(modes)

    /** for color mode */
    for (const [mode, colors] of entries) {
      if (!atom.style) continue
      const entries = Object.entries(atom.style)
      if (!entries.length) continue
      const [styleKey, styleValue] = entries[0]
      const colorValue = colors[styleValue]
      if (colorValue) {
        const postfix = '--' + mode

        // TODO: improve clone
        const modeAtom: Atom = JSON.parse(JSON.stringify(atom))

        modeAtom.key = atom.key + postfix
        modeAtom.id = atom.id + postfix
        modeAtom.meta = { mode, ...atom.meta }
        modeAtom.style[styleKey as 'color'] = colorValue

        if (ssrAtomIds.includes(modeAtom.id)) modeAtom.inserted = true
        this.atoms.push(modeAtom)
      }
    }

    if (ssrAtomIds.includes(atom.id)) atom.inserted = true
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

    // for _hover,_sm,_dark...
    if (propKey.startsWith('_')) return true

    if (Array.isArray(propValue)) return true

    const type = typeof propValue
    if (validTypes.includes(type)) return true

    return false
  }

  /**
   * to mutate atom attribute, and add atom to this.atoms
   * @param atom
   */
  mutateAtom(atom: Atom): void {
    for (const plugin of this.plugins) {
      if (!plugin.isMatch?.(atom.key)) continue

      if (plugin.beforeHandleAtom) {
        atom = plugin.beforeHandleAtom(atom, this as any)
      }
    }

    const cachedAtom = atomCache.get(atom.id)

    if (cachedAtom) {
      this.addAtom(cachedAtom)
      throw new Error('atom is cached, add to this.atoms derectly, no need to mutate')
    }

    // if handled, push to this.atoms and skip it
    if (atom.handled) {
      this.addAtom(atom)
      throw new Error('atom is handled, add to this.atoms derectly ,no need to mutate')
    }

    for (const plugin of this.plugins) {
      if (!plugin.isMatch?.(atom.key)) continue

      if (plugin.beforeHandleAtom) {
        atom = plugin.beforeHandleAtom(atom, this as any)
      }

      if (plugin.handleAtom) {
        atom = plugin.handleAtom?.(atom, this as any)
      }

      atom.handled = true

      break // break from this plugin
    }
  }

  parseCSSObject(propValue: any, meta = {}) {
    const parsed = parse(propValue)

    for (const { selector, selectorType, style } of parsed) {
      const entries = Object.entries(style)
      if (!entries.length) continue

      // entries.length is 1
      const [propKey, propValue] = entries[0]

      const option: Options = {
        propKey,
        propValue,
        meta: { ...meta },
      }

      if (selectorType === 'pseudo' && option.meta) {
        const [, pseudoPrefix, pseudo] = selector.match(/(:+)(.+)/) || []
        option.meta.pseudoPrefix = pseudoPrefix
        option.meta.pseudo = pseudo
      }

      if (selectorType === 'child' && option.meta) {
        option.meta.childSelector = selector
      }

      const atom = new Atom(option)

      try {
        this.mutateAtom(atom)
      } catch (error) {
        continue
      }

      // not match atomic props rule
      if (!atom.style) {
        atom.style = style

        atom.handled = true
      }

      const cachedAtom = atomCache.get(atom.id)

      if (cachedAtom) {
        this.addAtom(cachedAtom)
      } else {
        this.addAtom(atom)
      }
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
      if (!cur.style || !Object.keys(cur.style).length) return result

      const index = result.findIndex((i) => {
        return i.styleKeysHash === cur.styleKeysHash
      })

      if (!cur.isValid) return result
      const className = this.getClassNameById(cur.id)

      if (index === -1) {
        classNames.push(className)
        result = [...result, cur]
      } else {
        result.splice(index, 1, cur)
        classNames.splice(index, 1, className)
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
    const style = this.atoms.reduce<any>((result, atom) => {
      if (!atom.isValid) return result // not style type

      const colors: any = store.theme.colors

      const style = Object.entries(atom.style).reduce<any>((c, [key, value]) => {
        const cssValue = this.formatCssValue(jsKeyToCssKey(key), colors[value] || value)
        return { ...c, [key]: cssValue }
      }, {})
      return { ...result, ...style }
    }, {})
    return style
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

    for (const atom of this.atoms) {
      let rule: string = ''
      const { id, isValid, style = {} } = atom

      // no style in falsy prop
      if (!isValid) continue

      // empty style
      if (isEmptyObj(style)) continue

      if (!enableInserted) {
        if (atom.inserted) continue
      }

      atom.inserted = true

      const { pseudo, pseudoPrefix, mode, breakpoint = '', childSelector } = atom.meta

      // TODO: need refactor
      const shouldUseUniqueClassName = !!this.atoms.find(
        (i) => i.styleKeys === atom.styleKeys && (atom.meta.breakpoint || i.meta.breakpoint),
      )
      const uniqueSelector =
        shouldUseUniqueClassName || atom.meta.breakpoint ? '.' + this.uniqueClassName : ''

      const className = this.getClassNameById(id)
      let selector = `${uniqueSelector}.${className}`
      if (pseudo) selector = selector + pseudoPrefix + pseudo
      if (mode) selector = `.${modePrefix}${mode} ${selector}`
      if (childSelector) selector = `${selector} ${childSelector}`
      rule = `${selector} { ${this.styleToString(style, atom.meta)} }`
      if (breakpoint) rule = this.makeResponsiveStyle(breakpoint, rule)

      rules.push(rule)
    }

    console.log('this.atoms-----:', this.atoms)

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
