import hash from 'string-hash'
import * as CSS from 'csstype'
import { Options, Meta } from './types'

const invalidProps = ['excludedProps']

export { Options, Meta }

export class Atom {
  constructor(private readonly options: Options) {
    this.propKey = options.propKey
    this.propValue = options.propValue

    this.key = options.key || this.propKey
    this.value = options.value || this.propValue

    this.style = options.style
    this.className = options.className || ''

    this.handled = this.getInitialHandled()
    this.isValid = this.getIsValid()

    this.inserted = false

    // shallow clone it
    this.meta = { ...options.meta } || {}

    const { propKey, propValue } = this

    let id: string
    if (typeof propValue === 'boolean' && propValue === true) {
      id = propKey
    } else if (Array.isArray(propValue)) {
      const valueStr = propValue.join('-')
      id = `${propKey}-${valueStr}`
    } else {
      id = `${propKey}-${String(propValue).replace(/\s/g, '-')}`
    }

    this.id = id
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

  private getInitialHandled() {
    if (this.options.handled) return this.options.handled
    if (this.isFalsePropValue) return true
    if (invalidProps.includes(this.propKey)) return true
    return false
  }

  private getIsValid() {
    if (this.isFalsePropValue) return false
    if (this.propValue === undefined || this.propValue === null) return false
    if (invalidProps.includes(this.propKey)) return false
    return true
  }
}
