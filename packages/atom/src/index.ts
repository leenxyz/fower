import { Options, AtomType } from './types'

interface Meta {
  mode?: string
  breakpoint?: string
  pseudo?: string
  childSelector?: string
}
export class Atom {
  constructor(options = {} as Options) {
    this.propKey = options.propKey ?? ''
    this.propValue = options.propValue
    this.key = options.key || this.propKey
    this.style = options.style
    this.type = options.type ?? 'style'
    this.className = options.className ?? ''
    this.matchedPlugin = options.matchedPlugin ?? ''
    this.handled = options.handled ?? false
    this.inserted = false
    this.meta = {}
    this.id =
      typeof this.propValue === 'boolean' ? this.propKey : `${this.propKey}-${this.propValue}`
  }

  meta: Meta

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

  type: AtomType

  /**
   * className of this atom
   */
  className: string

  /**
   * plugin name matched for this atom
   */
  matchedPlugin: string

  /**
   * if handled, this atom is ready to push to parser.atoms
   */
  handled: boolean

  /**
   * already inserted to stylesheet
   */
  inserted: boolean
}
