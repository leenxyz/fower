/**
 * type style. convert result can be used in inline style directly
 * @example
 * ```
 * <View p-10px></View>
 *
 * p-10px => padding: 10px
 * ```
 *
 * type prefix. convert result must add a className and it can not be used in inline style
 * @example
 * ```
 * <View css={{ ':hover': { color: 'red' } }}></View>
 *
 * { ':hover': { color: 'red' } } => .className:hover{ color: 'red' }
 * the className will auto add by styli core
 * ```
 *
 *
 * type responsive. convert result should add a className and it can not be used in inline style
 * @example
 * ```
 * <View p={[10, 20, 30, 40]}></View>
 *
 * p={[10, 20, 30, 40] => @media(min-width: 100px) { .className { padding: 10px }}   *   4
 * the className will auto add by styli core
 * ```
 *
 * type invalid. propValue is falsy. styli core will collect and remove it from origin attr or prop
 * @example
 * ```
 * <View p={false} ></View>
 * ```
 */
type AtomType = 'style' | 'prefix' | 'responsive' | 'invalid'

interface Options {
  key: 'css' | 'debug' | ({} & string)
  propKey: 'css' | 'debug' | ({} & string)
  propValue: any
  style: any
  type: AtomType
  classNames: string[]
  matchedPlugin: string
}

export class Atom {
  constructor(options: Partial<Options> = {}) {
    this.key = options.key || options.propKey || ''
    this.propKey = options.propKey ?? ''
    this.propValue = options.propValue
    this.style = options.style
    this.type = options.type ?? 'style'
    this.classNames = options.classNames ?? []
    this.matchedPlugin = options.matchedPlugin ?? ''
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
   * className list of atom
   */
  classNames: string[] = []

  /**
   * plugin name matched for this atom
   */
  matchedPlugin: string = ''

  /**
   * if handled, this atom is ready to push to parser.atoms
   */
  handled: boolean = false

  /**
   * atom can be cached
   * TODO: 命名有歧义，需解释什么时候可以被 cached
   */
  cache?: boolean
}
