import { upFirst } from '@fower/utils'
import {
  isEmptyObj,
  objectToClassName,
  jsKeyToCssKey,
  isPercentNumber,
  isNumber,
} from '@fower/utils'
import { parse } from '@fower/css-object-processor'
import { formatColor } from '@fower/color-helper'
import { store } from './store'
import { Atom, Options } from './atom'
import { styleSheet } from './sheet'
import { Props } from './typings'
import { isUnitProp } from './isUnitProp'

type Dict = Record<string, any>

const colorKeys = ['color', 'backgroundColor', 'borderColor']

/**
 * @example p2,mx4,left10,spaceX4...
 * @example p-20,opacity-80
 */
export const digitReg =
  /^([mp][xytrbl]?|space[xy]?|top|right|bottom|left|[wh]|square|circle|min[hw]|max[hw]|opacity|delay|duration|translate[xyz]|scale[xy]?|rotate[xy]?|skew[xy]?|text|zIndex|leading|stroke|fontWeight|outlineOffset|order|flex(Grow|Shrink|Basis)?|(row|column)?Gap|gridTemplateColumns|border[trbl]?|rounded(Top(Left|Right)?|Right|Bottom(Left|Right)?|Left)?)(-?-?\d+[a-z]*?|-auto)$/i

//  high-frequency used props in react
const reactProps = [
  'children',
  'onClick',
  'onChange',
  'onBlur',
  'id',
  'className',
  'style',
  'title',
  'tabIndex',
  'placeholder',
  'href',
  'src',
  'contentEditable',
  'defaultChecked',
  'defaultValue',
]

/**
 * An Abstract tool to handle atomic props
 */
export class Parser {
  constructor(public props = {} as Props) {
    this.traverseProps(props)

    if (store.config.mode?.autoDarkMode?.enabled) {
      this.createAutoDarkModeAtom()
    }
  }

  /**
   * atom parsed from props
   */
  atoms: Atom[] = []

  /**
   * For extensibility
   */
  data: Record<string, any> = {}

  get uniqueClassName() {
    return objectToClassName(Object.keys(this.props))
  }

  get hasResponsive() {
    return this.atoms.some((i) => !!i.meta.breakpoint)
  }

  get store() {
    return store
  }

  get config() {
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

    const { excludedProps = [] } = props
    const entries = Object.entries<any>(props)

    for (const plugin of this.plugins) {
      if (plugin.init) {
        plugin.init(props)
      }
    }

    // traverse Props
    for (let [propKey, propValue] of entries) {
      // the prop should be excluded by user setting
      if (excludedProps.includes(propKey)) continue

      if (reactProps.includes(propKey)) continue

      if (!this.isValidProp(propKey, propValue)) continue

      // parse object prop
      if (this.config.objectPropKeys?.includes(propKey)) {
        this.parseObjectProp(propValue, {})
        continue
      }

      if (Array.isArray(propValue)) {
        // TODO: hack for bgGradientX, bgGradientY
        if (/^bgGradient[XY].*/i.test(propKey) && !Array.isArray(propValue[0])) {
          // do nothing
        } else {
          this.parseResponsiveValue(propKey, propValue)
          continue
        }
      }

      const composition = store.compositions.get(propKey)

      if (composition) {
        this.parseObjectProp(composition, {})

        const atom = new Atom({ propKey, propValue, props: this.props })
        atom.handled = true
        atom.style = {}
        this.addAtom(atom)
        continue
      }

      // common props
      let atom = new Atom({ propKey, propValue, props: this.props }, false)

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

  getAutoDarkModeAtom(atom: Atom): Atom | null {
    if (atom.meta.mode) return null
    if (!atom.style) return null

    const entries = Object.entries(atom.style)
    if (!entries?.length) return null

    let options = {} as Options
    let darkColor = ''

    const { config } = store
    const mappings: any = config.mode.autoDarkMode.mappings
    const colors: any = config.theme.colors

    const [colorKey, colorName] = entries[0] as [string, string]

    // check is valid color key
    if (!colorKeys.includes(colorKey)) return null

    // only color in theme is valid
    if (!colors[colorName]) return null

    // if scale is existed, scale should be 100,200,300,400...
    let [, , scale] = colorName.match(/^([a-z]+)(\d+)$/i) || []

    // is disable, eg: { red200: false}
    if (mappings[colorName] === false) return null

    if (mappings[atom.propKey]) {
      darkColor = mappings[atom.propKey]
    } else if (mappings[colorName]) {
      darkColor = mappings[colorName]
    } else {
      darkColor = colorName.replace(scale, mappings[scale])
    }
    const isColor = colorKey === 'color'
    const isBgColor = colorKey === 'backgroundColor'
    const isBorderColor = colorKey === 'borderColor'

    if (colors[darkColor]) {
      if (isColor) {
        options.propKey = darkColor
        options.type = 'color'
      } else if (isBgColor) {
        options.propKey = `bg${upFirst(darkColor)}`
        options.type = 'backgroundColor'
      } else if (isBorderColor) {
        options.propKey = `border${upFirst(darkColor)}`
        options.type = 'borderColor'
      }
      options.propValue = true
    } else {
      if (isColor) {
        options.propKey = 'color'
        options.propValue = darkColor
      } else if (isBgColor) {
        options.propKey = 'bg'
        options.propValue = darkColor
      } else if (isBorderColor) {
        options.propKey = 'borderColor'
        options.propValue = darkColor
      }
    }

    options.style = { [colorKey]: darkColor }

    return new Atom({
      ...options,
      props: this.props,
      meta: { ...atom.meta, mode: 'dark' },
    })
  }

  createAutoDarkModeAtom() {
    for (const atom of this.atoms) {
      // no need auto dark mode
      if (!atom.isValid || atom.meta?.mode === 'dark' || !colorKeys.includes(atom.type)) continue

      // 已经存在 dark mode 的样式，不需要自动生成
      const find = this.atoms.find(
        (i) =>
          atom.type === i.type &&
          i.meta.mode === 'dark' &&
          !Reflect.has(i.meta, 'pseudo') &&
          !Reflect.has(i.meta, 'childSelector'),
      )

      if (find) continue

      const darkAtom = this.getAutoDarkModeAtom(atom)

      if (!darkAtom) continue

      const cachedAtom = store.atomCache.get(darkAtom.id)

      if (cachedAtom) {
        this.addAtom(cachedAtom)
      } else {
        this.addAtom(darkAtom)
      }
    }
  }

  /**
   * Get final css value
   * @param key css key, eg: font-size, padding-top
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
      // remove --sm,--md,--lg,--xl postfix
      key = key.replace(/\-\-.+/, '')

      const cssKey = jsKeyToCssKey(key)
      const postfix = important ? ' !important' : ''
      const colors: any = store.theme.colors

      try {
        if (colorPostfix) {
          value = formatColor(colors?.[value] || value, colorPostfix)
        } else {
          value = this.formatCssValue(cssKey, colors?.[value] || value)
        }
        return r + `${cssKey}: ${value}${postfix};`
      } catch (error) {
        return ''
      }
    }, '')
  }

  addAtom(atom: Atom) {
    atom.props = this.props

    if (!atom.id) atom.setId()

    // if not cached, let's cache it
    if (!store.atomCache.get(atom.id)) {
      store.atomCache.set(atom.id, atom)
    }

    const ssrAtomIds = styleSheet.getSsrAtomIds()
    const { modes = {} } = this.config.theme?.colors || {}
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

    /**
     * handle color overwrite
     * 1. <Box red500 green500/>
     * 2. <Box red500 green500--hover/>
     */
    if (store.config.mode?.autoDarkMode?.enabled) {
      if (
        atom.type === 'color' &&
        atom.meta?.mode !== 'dark' &&
        !Reflect.has(atom.meta, 'pseudo')
      ) {
        const index = this.atoms.findIndex(
          (i) =>
            i.type === 'color' &&
            i.meta?.mode !== 'dark' &&
            !Reflect.has(atom.meta, 'childSelector') &&
            !Reflect.has(atom.meta, 'pseudo'),
        )

        // 被覆盖的颜色设置为 isValid=false, 并且使用 copy 为新的 atom
        if (index > -1) {
          this.atoms[index] = {
            ...this.atoms[index],
            isValid: false,
          } as Atom
        }
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
    const validTypes = ['string', 'boolean', 'number', 'undefined', 'function']
    if (this.config.objectPropKeys?.includes(propKey)) return true

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
      if (!plugin.isMatch?.(atom.key, this)) continue

      // why set id here? because of function prop Value
      if (!atom.id) atom.setId()

      // handle function type props
      if (typeof atom.value === 'function') atom.value = atom.value(this.props)

      if (plugin.beforeHandleAtom) {
        atom = plugin.beforeHandleAtom(atom, this)
      }
    }

    // for nested style, like css props
    if (Object.values(atom.meta || {}).length || Object.values(atom.style || {}).length) {
      if (!atom.id) atom.setId()
    }

    const cachedAtom = store.atomCache.get(atom.id)

    if (cachedAtom) {
      if (!cachedAtom.propKeys.includes(atom.propKey)) {
        cachedAtom.propKeys.push(atom.propKey)
      }

      this.addAtom(cachedAtom)
      throw new Error('atom is cached, add to this.atoms directly, no need to mutate')
    }

    // if handled, push to this.atoms and skip it
    if (atom.handled) {
      this.addAtom(atom)
      throw new Error('atom is handled, add to this.atoms directly ,no need to mutate')
    }

    for (const plugin of this.plugins) {
      if (!plugin.isMatch?.(atom.key, this)) continue

      if (plugin.handleAtom) {
        atom = plugin.handleAtom?.(atom, this)
      }

      atom.handled = true

      break // break from this plugin
    }
  }

  parseResponsiveValue(propKey: string, propValue: any[]) {
    const { breakpoints } = this.config.theme
    const keys = Object.keys(breakpoints)
    const obj = propValue.reduce<any>((result, cur, i) => {
      const prop = `${propKey}${i === 0 ? '' : '--' + keys[i - 1]}`
      return { ...result, [prop]: cur }
    }, {})

    this.parseObjectProp(obj)
  }

  parseObjectProp(propValue: any, meta = {}) {
    propValue = typeof propValue === 'function' ? propValue(this.props) : propValue
    const { breakpoints } = this.config.theme
    const parsed = parse(propValue, breakpoints)

    for (const { selector, selectorType, style } of parsed) {
      const entries = Object.entries(style)
      if (!entries.length) continue

      // entries.length is 1
      const [propKey, propValue] = entries[0]

      const option: Options = {
        propKey,
        propValue,
        props: this.props,
        meta: { ...meta },
      }

      // for style props
      if (style && Object.keys(style).length) {
        option.style = style
      }

      if (selectorType === 'pseudo' && option.meta) {
        const [, pseudoPrefix, pseudo] = selector.match(/(:+)(.+)/) || []
        option.meta.pseudoPrefix = pseudoPrefix
        option.meta.pseudo = pseudo
      }

      if (selectorType === 'child' && option.meta) {
        option.meta.childSelector = selector
      }

      if (selectorType === 'sibling' && option.meta) {
        option.meta.siblingSelector = selector
      }

      const atom = new Atom(option, false)

      try {
        this.mutateAtom(atom)
      } catch (error) {
        continue
      }

      // not match atomic props rule
      if (!atom.style || !Object.keys(atom.style).length) {
        atom.handled = true
      }

      const cachedAtom = store.atomCache.get(atom.id)

      if (cachedAtom) {
        this.addAtom(cachedAtom)
      } else {
        this.addAtom(atom)
      }
    }
  }

  makeResponsiveStyle(breakpoint: string, rule: string) {
    const breakpoints: any = this.config.theme.breakpoints
    return `@media (min-width: ${breakpoints[breakpoint]}) {${rule}}`
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

    if (this.hasResponsive) {
      const breakpoints: any = this.config.theme.breakpoints
      classNames.push(...Object.keys(breakpoints).map((i) => `r-${i}`))
    }

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
   * get rules for parser.insertRules
   * @returns
   */
  toRules(enableInserted = false): string[] {
    const { classPrefix = '' } = this.config.mode
    const rules: string[] = []
    const breakpoints: any = this.config.theme.breakpoints

    const breakpointKeys = Object.keys(breakpoints)

    for (const atom of this.atoms) {
      let rule: string = ''
      const { id, isValid, style = {}, meta } = atom

      // no style in falsy prop
      if (!isValid) continue

      // empty style
      if (isEmptyObj(style)) continue

      const {
        pseudo,
        pseudoPrefix,
        mode,
        breakpoint = '',
        childSelector,
        siblingSelector,
        parentClass,
      } = meta

      if (!enableInserted) {
        if (atom.inserted) continue
      }

      atom.inserted = true

      const className = this.getClassNameById(id)

      let selector = meta.global ? meta.global : `.${className}`

      if (mode) selector = `.${classPrefix}${mode} ${selector}`

      if (siblingSelector) {
        selector = `${selector}${siblingSelector}`
      }

      if (pseudo) {
        const pseudoSelector = pseudoPrefix + pseudo
        if (parentClass) {
          selector = `.${parentClass}${pseudoSelector} ${selector}`
        } else {
          selector = selector + pseudoSelector
        }
      }

      // TODO: need refactor
      if (childSelector) {
        if (breakpoint) {
          const keys = breakpointKeys.slice(0, breakpointKeys.indexOf(breakpoint) + 1)

          selector = selector + '.' + keys.map((i) => `r-${i}`).join('.') + ` ${childSelector}`
        } else {
          selector = `${selector} ${childSelector}`
        }
      } else {
        if (breakpoint) {
          const keys = breakpointKeys.slice(0, breakpointKeys.indexOf(breakpoint) + 1)

          selector = selector + '.' + keys.map((i) => `r-${i}`).join('.')
        }
      }

      rule = `${selector} { ${this.styleToString(style, atom.meta)} }`

      if (breakpoint) {
        rule = this.makeResponsiveStyle(breakpoint, rule)
      }

      rules.push(rule)
    }

    // console.log('this.atoms:', this.atoms)
    return rules
  }

  getParsedProps(): any {
    const { props, atoms } = this
    if (isEmptyObj(props)) return {}

    const entries = Object.entries<any>(props)

    /** ignore atomic prop */
    const parsedProps = entries.reduce<any>((result, [key, value]) => {
      // ignore prop with  postfix
      if (/.*--(\d+)?[a-z]+$/i.test(key)) return result

      const find = atoms.find(
        (atom) =>
          [atom.propKey, atom.key, atom.id, ...(this.config.objectPropKeys || [])].includes(key) ||
          atom.propKeys.includes(key),
      )

      if (!find) result[key] = value
      return result
    }, {})

    return parsedProps
  }

  insertRules() {
    const rules = this.toRules()

    styleSheet.insertStyles(rules)
  }
}
