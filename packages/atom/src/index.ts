import { Options, AtomType } from './types'
export class Atom {
  constructor(options: Partial<Options> = {}) {
    this.key = options.key || options.propKey || ''
    this.propKey = options.propKey ?? ''
    this.propValue = options.propValue
    this.style = options.style
    this.type = options.type ?? 'style'
    this.className = options.className ?? ''
    this.matchedPlugin = options.matchedPlugin ?? ''
    this.handled = options.handled ?? false
  }

  /**
   * propKey may changed by plugin, so use key record origin propKey
   */
  key: 'css' | 'debug' | ({} & string) = ''

  /**
   * original propKey, 原始的propkey
   * @example
   * <Box red200></Box> propKey is red200
   * <Box red200--hover></Box> propKey is red200--hover
   */
  propKey: 'css' | 'debug' | ({} & string) = ''

  propValue: any

  style: any

  type: AtomType = 'style'

  /**
   * className of this atom
   */
  className: string = ''

  /**
   * plugin name matched for this atom
   */
  matchedPlugin: string = ''

  /**
   * if handled, this atom is ready to push to parser.atoms
   */
  handled: boolean = false
}
