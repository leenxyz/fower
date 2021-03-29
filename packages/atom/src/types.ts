export interface Options {
  propKey: 'css' | 'debug' | ({} & string)
  propValue?: any
  key?: 'css' | 'debug' | ({} & string)
  style?: any
  type?: AtomType
  className?: string
  matchedPlugin?: string
  handled?: boolean
}

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
export type AtomType = 'style' | 'invalid'
