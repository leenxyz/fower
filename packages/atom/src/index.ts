import hash from 'string-hash'
import * as CSS from 'csstype'
import { Options, Meta } from './types'

const invalidProps = ['excludedProps']

export { Options, Meta }

/**
 * @example p2,mx4,left10,spaceX4...
 * @example p-20,opacity-80
 * @example pMD,mSM,mtXL
 */
export const digitReg = /^([mp][xytrbl]?|space[xy]?|top|right|bottom|left|[wh]|square|circle|min[hw]|max[hw]|opacity|text|zIndex|leading|fontWeight|outlineOffset|order|flex(Grow|Shrink|Basis)?|(row|column)?Gap|gridTemplateColumns|border[trbl]?|rounded([tlrb]|t[lr]|b[lr])?)(-?-?\d+[a-z]*?|xs|sm|md|lg|xl)$/i

export class Atom {
  constructor(private readonly options: Options) {
    this.propKey = options.propKey
    this.propValue = options.propValue

    this.key = options.key || this.propKey
    this.value = options.propValue || this.propValue

    this.style = options.style
    this.className = options.className || ''

    this.handled = this.getInitialHandled()
    this.isValid = this.getIsValid()

    this.inserted = false

    // shallow clone it
    this.meta = { ...options.meta } || {}

    const { propKey, propValue } = this

    this.id =
      typeof propValue === 'boolean' && propValue === true
        ? propKey
        : `${propKey}-${String(propValue).replace(/\s/g, '-')}`
  }

  /**
   * string or number prop
   * @readonly
   * @memberof Atom
   */
  get isValueProp(): boolean {
    return typeof this.propValue === 'string' || typeof this.propValue == 'number'
  }

  /**
   * get style keys string
   * @readonlyReactElement
   * @memberof Atom
   * @example
   * { color: "#999"} -> color
   * { paddingTop: 10, paddingBottom: 10} -> paddingTop-paddingTop
   */
  get styleKeys() {
    return Object.keys(this.style || {}).join('-')
  }

  /**
   * get style key hash
   * @readonly
   * @memberof Atom
   * @example
   * { color: "#999"} -> color + hashed meta
   * { paddingTop: 10, paddingBottom: 10} -> paddingTop-paddingTop  + hashed meta
   */
  get styleKeysHash() {
    return Object.keys(this.style || {}).join('-') + JSON.stringify(this.meta)
  }

  get isFalsePropValue() {
    return typeof this.propValue === 'boolean' && !this.propValue
  }

  get isTruePropValue() {
    return typeof this.propValue === 'boolean' && this.propValue
  }

  /**
   * original propKey, 原始的propkey
   * @example
   * <Box red200></Box> propKey is red200
   * <Box red200--hover></Box> propKey is red200--hover
   */
  readonly propKey: 'css' | 'debug' | ({} & string)

  /**
   * original propValue
   * @example
   * <Box red200></Box>  -> true
   * <Box p={10}></Box>  -> 10
   * <Box color="red"></Box>  -> red
   */
  readonly propValue: any

  /**
   * get the primitive atomic key, exclude value or posfix
   * @example
   * m-4 -> m
   * m={4} -> m
   * m4 -> m
   * m4--hover -> m
   * m4--sm -> m
   * m4--dark--sm-i -> m
   */
  key: string

  /**
   * atom value, get it from PropValue or propKey
   * @example
   * <Box toCenter></Box> -> true
   * <Box m={4}></Box> -> 4
   * <Box m-4></Box> -> 4
   * <Box m4></Box> -> 16
   */
  value: string = ''

  meta: Meta

  /**
   * unique id for cache
   */
  id: string = ''

  style: CSS.Properties<number | string>

  type: 'color' | 'backgroundColor' | 'borderColor' | 'padding' | 'margin' | ({} & string) = ''

  /**
   * className of this atom
   */
  className: string

  /**
   * if handled, this atom is ready to push to parser.atoms
   */
  handled: boolean

  /**
   * already inserted to stylesheet
   */
  inserted: boolean

  /** if not valid, do not generate style */
  isValid: boolean

  createClassName(prefix = '') {
    let value = this.id.replace(/#/g, '').replace(/\%/g, 'p').replace(/\./g, 'd')

    const isValid = /^[a-zA-Z0-9-]+$/.test(value)
    value = isValid ? value : `css-${hash(value)}`
    const className = `${prefix}${value}`

    // set to atom.className
    this.className = className

    return className
  }

  /**
   *
   * @param config fower config
   * @returns
   */
  preprocessAtom(config: any) {
    return this.postfixPreprocessor(config)
  }

  postfixPreprocessor(config: any) {
    const connector = '--'
    const specialPseudos = ['after', 'before', 'placeholder', 'selection']
    const { pseudos = [], theme } = config
    const { breakpoints, modes, spacings } = theme || {}

    const { propKey, propValue } = this

    const breakpointKeys = Object.keys(breakpoints)
    const modeKeys: string[] = modes || []
    const pseudoKeys: string[] = pseudos

    const regResponsiveStr = `${connector}(${breakpointKeys.join('|')})`
    const regModeStr = `${connector}(${modeKeys.join('|')})`
    const regPseudoStr = `${connector}(${pseudoKeys.join('|')})`

    const regMode = new RegExp(regModeStr)
    const regPseudo = new RegExp(regPseudoStr)
    const regResponsive = new RegExp(regResponsiveStr)
    const regImportant = /--i/i
    const regColorPostfix = /--[told](\d{1,2}|100)($|--)/i

    /** handle value like: red500--T40, #666--O30 */
    if (regColorPostfix.test(propValue)) {
      const [colorName, postfix] = propValue.split('--')
      this.value = colorName
      this.meta.colorPostfix = postfix
    }

    const isMode = regMode.test(propKey)
    const isPseudo = regPseudo.test(propKey)
    const isResponsive = regResponsive.test(propKey)
    const isImportant = regImportant.test(propKey)
    const isColorPostfix = regColorPostfix.test(propKey)

    const hasPostfix = isMode || isPseudo || isResponsive || isImportant || isColorPostfix

    if (!hasPostfix) return this.digitPreprocessor(spacings)

    const result = propKey.split(connector)

    this.key = result[0] // key that already removed postfix

    if (isMode) {
      this.meta.mode = result.find((i) => modeKeys.includes(i))
    }

    if (isPseudo) {
      const pseudo = result.find((i) => pseudoKeys.includes(i)) as string
      const pseudoPrefix = specialPseudos.includes(pseudo) ? '::' : ':'
      this.meta.pseudo = pseudoPrefix + pseudo
    }

    if (isResponsive) {
      const breakpointType = result.find((i) => breakpointKeys.includes(i)) as string
      this.meta.breakpoint = (breakpoints as any)[breakpointType]
    }

    if (isImportant) {
      this.meta.important = !!result.find((i) => i === 'i')
    }

    if (isColorPostfix) {
      this.meta.colorPostfix = result.find((i) => regColorPostfix.test(`--${i}`))
    }

    // check is theme space key, if yes, preprocess it
    this.digitPreprocessor(spacings)

    return this
  }

  digitPreprocessor(spacings: any) {
    if (!digitReg.test(this.key)) return this

    // is theme space key
    const isSpace = /^([a-z]+)(\d+|xs|sm|md|lg|xl)$/i.test(this.key)

    /**
     *  match props link: m4,mx2,mt9, spaceX4...
     *  to m4 -> [ key: m, value: 4 ]
     *  to m-20 -> [ key: m, value: 20 ]
     *  to m-20px -> [ key: m, value: '20px' ]
     */

    const keyStr = this.key.toString()
    const result =
      keyStr.match(/^([a-z]+)(\d+)$/i) ||
      keyStr.match(/^([a-z]*)--?(\d+[a-z]*?)$/i) ||
      keyStr.match(/^([a-z]+)(xs|sm|md|lg|xl)$/i)

    if (!result) return this

    const [, newKey, newPropValue] = result

    this.key = newKey
    this.value = isSpace ? spacings[newPropValue.toLowerCase()] : newPropValue

    return this
  }

  private getInitialHandled() {
    if (this.options.handled) return this.options.handled
    if (this.isFalsePropValue) return true
    if (invalidProps.includes(this.propKey)) return true
    return false
  }

  private getIsValid() {
    if (this.isFalsePropValue) return false
    if (invalidProps.includes(this.propKey)) return false
    return true
  }
}
