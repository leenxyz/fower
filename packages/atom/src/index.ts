import hash from 'string-hash'
import { store } from '@fower/store'
import * as CSS from 'csstype'
import { Options, Meta } from './types'

const invalidProps = ['excludedProps']

export { Options, Meta }

/**
 * @example p2,mx4,left10,spaceX4...
 * @example p-20,opacity-80
 */
export const digitReg =
  /^(m[xytrbl]?-?|p[xytrbl]?|space[xy]?|top-?|right-?|bottom-?|left-?|[wh]|square|circle|min[hw]|max[hw]|opacity|delay|duration|translate[xyz]|scale[xy]?|rotate[xy]?|skew[xy]?|text|zIndex-?|leading|stroke|fontWeight|outlineOffset|order|flex(Grow|Shrink|Basis)?|(row|column)?Gap|gridTemplateColumns|border[trbl]?|rounded(Top(Left|Right)?|Right|Bottom(Left|Right)?|Left)?)(-?\d+[a-z]*?|-auto)$/i

export class Atom {
  constructor(private readonly options: Options) {
    this.propKey = options.propKey
    this.propValue = options.propValue

    this.key = options.key || this.propKey
    this.value = options.value || this.propValue

    this.style = options.style

    this.handled = this.getInitialHandled()
    this.isValid = this.getIsValid()

    this.inserted = false

    // shallow clone it
    this.meta = { ...options.meta } || {}

    this.preprocessAtom()
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
    const { colorPostfix, ...rest } = this.meta // omit colorPostfix
    return Object.keys(this.style || {}).join('-') + JSON.stringify(rest)
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
  value: any = ''

  meta: Meta

  /**
   * unique id for cache
   */
  id: string = ''

  style: CSS.Properties<number | string>

  type: 'color' | 'backgroundColor' | 'borderColor' | 'padding' | 'margin' | ({} & string) = ''

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

  setId = (): string => {
    const { meta, key, value } = this
    const { pseudoPrefix, childSelector, important, ...rest } = meta
    const values = Object.values(rest).sort()
    if (important) values.push('i')
    let id: string

    // is global style
    if (meta.global) {
      id = hash(JSON.stringify(value)).toString()
      this.id = id
      return id
    }

    if (typeof value === 'boolean' && value === true) {
      id = key
    } else if (Array.isArray(value)) {
      const valueStr = value.join('-')
      id = `${key}-${valueStr}`
    } else {
      id = `${key}-${String(value)}`
    }

    if (values.length) id = id + '--' + values.join('--')

    // handle special charactor
    id = id.replace(/[#()]/g, '').replace(/\%/g, 'p').replace(/\s+/g, '-').replace(/\.+/g, 'dot-')

    const isValid = /^[a-zA-Z0-9-]+$/.test(id)
    id = isValid ? id : `css-${hash(id)}`

    if (this.isFalsePropValue) id = id + '--false'

    this.id = id

    return id
  }

  /**
   *
   * @param config fower config
   * @returns
   */
  preprocessAtom() {
    const newAtom = this.postfixPreprocessor()
    this.setId()

    return newAtom
  }

  postfixPreprocessor() {
    const connector = '--'
    const specialPseudos = ['after', 'before', 'placeholder', 'selection']
    const { pseudos = [], theme, mode } = store.config
    const { modeList } = mode
    const { breakpoints } = theme

    const { propKey, propValue } = this

    const breakpointKeys = Object.keys(breakpoints)
    const modeKeys: string[] = modeList || []
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

    if (!hasPostfix) return this.digitPreprocessor()

    const result = propKey.split(connector)

    this.key = result[0] // key that already removed postfix

    if (isMode) {
      this.meta.mode = result.find((i) => modeKeys.includes(i))
    }

    if (isPseudo) {
      const pseudo = result.find((i) => pseudoKeys.includes(i)) as string
      this.meta.pseudoPrefix = specialPseudos.includes(pseudo) ? '::' : ':'
      this.meta.pseudo = pseudo
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
    this.digitPreprocessor()

    return this
  }

  digitPreprocessor() {
    if (!digitReg.test(this.key)) return this

    const spacings: any = store.config.theme.spacings

    // is theme space key
    const isSpace = /^([a-z]+)(\d+)$/i.test(this.key)

    /**
     *  match props link: m4,mx2,mt9, spaceX4...
     *  to m4 -> [ key: m, value: 4 ]
     *  to m-20 -> [ key: m, value: 20 ]
     *  to m-20px -> [ key: m, value: '20px' ]
     */

    const keyStr = this.key.toString()
    const result =
      keyStr.match(/^([a-z]+)(\d+)$/i) ||
      keyStr.match(/^([a-z]*)-(-?\d+[a-z]*?)$/i) ||
      keyStr.match(/^([a-z]+)-(auto)$/i)

    if (!result) return this

    const [, newKey, newPropValue] = result

    this.key = newKey
    this.value = isSpace ? spacings[`${newPropValue.toLowerCase()}`] : newPropValue

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
