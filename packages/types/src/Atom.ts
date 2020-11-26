import { CSSObject } from './CSSObject'
import { Theme } from './Theme'

type AtomType = 'style' | 'prefix' | 'global' | 'media-queries' | 'invalid'

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
   * plugin name matched for this atom
   */
  matchedPlugin?: string

  /**
   * atom can be cached
   * TODO: 命名有歧义，需解释什么时候可以被 cached
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
 * type global. convert result should not add a className and it can not be used in inline style
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
