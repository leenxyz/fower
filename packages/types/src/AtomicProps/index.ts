import { Backgrounds } from './background.types'
import { Borders } from './border.types'
import { Flex } from './flex.types'
import { Margins } from './margin.types'
import { Paddings } from './padding.types'
import { Sizes } from './size.types'
import { Texts } from './text.types'
import { Positions, ZIndex } from './position.types'
import { Shadows } from './shadow.types'
import { Opacity } from './opacity.types'
import { Colors } from './color.types'
import { Displays } from './display.types'
import { OverFlows } from './overflow.types'
import { OutLine } from './outline.types'
import { CSSObject } from '../CSSObject'
import { Cursor } from './cursor.types'
import { Spaces } from './space.types'
export interface AtomicProps
  extends Sizes,
    Paddings,
    Margins,
    Flex,
    Borders,
    Positions,
    Colors,
    Backgrounds,
    Texts,
    ZIndex,
    Shadows,
    Displays,
    OverFlows,
    OutLine,
    Cursor,
    Opacity,
    Spaces {
  /**
   * CSS
   *
   * Like style prop, but you can do more.
   *
   * Styli will auto add a className to element and parse css prop`s value to a css string, then add it to style element.
   *
   * @example
   * ```tsx
   * <View css={
   *  {
   *     transition: 'all 0.3s',
   *     '::after': {
   *        content: '""',
   *        display: 'block',
   *      },
   *     '>span': {
   *        color: 'red',
   *     },
   *     '.dot': {
   *        '.text': {
   *           color: 'yellow',
   *           fontSize: '12px',
   *        },
   *     }
   *  }
   * }></View>
   * ```
   */
  css?: CSSObject

  /**
   * debug
   *
   * Styli will auto add border to self element.
   *
   * debug is `.autoClassName{ border: 1px solid gold }`
   * 
   * [NOTE]: development mode only. auto remove in production mode
   * 
   * @example
   * ```tsx
   * styli.configure({
   *   dev: process.env.NODE_ENV === 'develop'
   * })
   * 
   * <View debug></View>
   * ```
   */
  debug?: boolean | CSSObject

  /**
   * debugChildren
   *
   * Styli will auto add border to self and children element
   *
   * debugChildren is `.autoClassName{ border: 1px solid gold, '> *': { border: 1px solid gold } }`
   * 
   * [NOTE]: development mode only. auto remove in production mode
   *
   * @example
   * ```tsx
   * styli.configure({
   *   dev: process.env.NODE_ENV === 'develop'
   * })
   * 
   * <View debugChildren></View>
   * ```
   */
  debugChildren?: boolean | CSSObject

  /**
   * debugAll
   *
   * Styli will auto add border to all element.
   *
   * debugAll is `*{ border: 1px solid gold }`
   *
   * [NOTE]: development mode only. auto remove in production mode
   * 
   * @example
   * ```tsx
   * styli.configure({
   *   dev: process.env.NODE_ENV === 'develop'
   * })
   * 
   * <View debugAll></View>
   * ```
   */
  debugAll?: boolean | CSSObject

  /**
   * Reset
   *
   * this prop can block browser default style differences. And it integrate with [normalize.css](https://github.com/necolas/normalize.css)
   *
   * [NOTE] It is better to use this in root element.
   *
   * @example
   * ```tsx
   * <View reset></View>
   * ```
   */
  reset?: boolean | CSSObject
}
