import { CSSObject } from './CSSObject'
import { Theme } from './Theme'

export interface Atom {
  /**
   * propKey may changed by plugin, so use key record origin propKey
   */
  key: 'css' | 'debug' | 'reset' | ({} & string)

  propKey: 'css' | 'debug' | 'reset' | ({} & string)

  propValue: string | number | boolean | CSSObject | ((theme: Theme, props: any) => any)

  style: CSSObject

  type: AtomType

  className?: string

  /**
   * atom can be cached
   */
  cache?: boolean
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
 * type no-prefix. convert result should not add a className and it can not be used in inline style
 * @example
 * ```
 * <View clear></View>
 *
 * clear => *{ padding: 0; margin: 0 }
 * ```
 *
 * type media-queries. convert result should add a className and it can not be used in inline style
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
 * <View p={false} w={() => false}></View>
 * ```
 */
type AtomType = 'style' | 'prefix' | 'no-prefix' | 'media-queries' | 'invalid'
