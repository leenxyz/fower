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
    const id = typeof propValue === 'boolean' ? propKey : `${propKey}-${propValue}`
    this.id = options.id || id
  }

  meta: Meta

  /**
   * unique id for cache
   */
  id: string = ''

  /**
   * propKey may changed by plugin, so use key record origin propKey
   */
  key: 'css' | 'debug' | ({} & string)

  /**
   * original propKey, 原始的propkey
   * @example
   * <Box red200></Box> propKey is red200
   * <Box red200--hover></Box> propKey is red200--hover
   */
  propKey: 'css' | 'debug' | ({} & string)

  propValue: any

  style: any

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
