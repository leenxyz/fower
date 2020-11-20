import { CSSObject } from './CSSObject'
import { Theme } from './Theme'
export interface Atom {
  propKey: 'css' | 'debug' | 'reset' | ({} & string)

  propValue: string | number | boolean | CSSObject | ((theme: Theme) => any)

  /**
   * if propKey is designSystem key like
   * @example w1,w2,p2,m4...
   */
  designSystemKey?: string

  /**
   * Is propValue falsy
   * @example <View bg={false}></View>
   */
  falsy?: boolean

  style: CSSObject

  type?: 'style' | 'prefix' | 'no-prefix' | 'media-queries' | 'invalid'

  className?: string
}
