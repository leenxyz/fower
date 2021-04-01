import * as CSS from 'csstype'
import { Options } from './types'

interface Meta {
  /**
   * color mode
   * @exmple
   * mode: 'dark'
   */
  mode?: string

  /**
   * @exmple
   * breakpoint: '640px'
   */
  breakpoint?: string

  /**
   * @exmple
   * pseudo: ':hover'
   */
  pseudo?: string

  /**
   * child selector for atom.className
   * @exmple
   * childSelector: '.child'
   */
  childSelector?: string

  /**
   * is !important style
   */
  important?: boolean

  /**
   * color postfix for opacify,transparent,darken,lighten
   * @example
   * gray200--O20 -> O20
   * gray200--T20 -> T20
   * #666--D40 -> D40
   * #999--L40 -> L40
   */
  colorPostfix?: string

  /**
   * color name or value
   * @example
   * gray200--O20 -> gray200
   * gray200--T20 -> gray200
   * #666--D40 -> #666
   * #999--L40 -> #999
   */
  color?: string
}

export class Atom {
  constructor(options = {} as Options) {
    this.propKey = options.propKey ?? ''
    this.propValue = options.propValue
    this.key = options.key || this.propKey
    this.style = options.style
    this.className = options.className ?? ''
    this.handled = options.handled ?? false
    this.inserted = false
    this.isValid = true
    this.meta = {}

    const { propKey, propValue } = this
    const id =
      typeof propValue === 'boolean'
        ? propKey
        : `${propKey}-${String(propValue).replace(/\s/g, '-')}`
    this.id = options.id || id
  }

  meta: Meta

  /**
   * unique id for cache
   */
  id: string = ''

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
   * original propKey, 原始的propkey
   * @example
   * <Box red200></Box> propKey is red200
   * <Box red200--hover></Box> propKey is red200--hover
   */
  propKey: 'css' | 'debug' | ({} & string)

  propValue: any

  style: CSS.Properties<number | string>

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
}
