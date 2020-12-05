import { Property } from 'csstype'
import { PropValue } from './common.types'

export interface Flex {
  /**
   * Set flex-direction: row;
   *
   * 相当于下面 (自动 display: flex)：
   *
   * ```css
   * {
   *   flex-direction: row;
   *   display: flex;
   * }
   * ```
   *
   * @example
   * ```tsx
   * <View row></View>
   * ```
   */
  row?: boolean

  /**
   * Set flex-direction: column;
   *
   * 相当于下面 (自动 display: flex)：
   *
   * ```css
   * {
   *   flex-direction: column;
   *   display: flex;
   * }
   * ```
   *
   * @example
   * ```tsx
   * <View column></View>
   * ```
   */
  column?: boolean

  /**
   * set flex-flow、flex-shrink、flex-basic
   *
   * @example
   * ```tsx
   * <View flex-1></View> // flex: 1 1 0%;
   * <View flex-auto></View> // flex: 1 1 auto;
   * <View flex-initial></View> // flex: 0 1 auto;
   * <View flex-none></View> // flex: none;
   * ```
   */
  flex?: PropValue

  /**
   * set flex-direction
   *
   * @example
   * ```tsx
   * <View direction="row"></View>
   * <View direction="row-reverse"></View>
   * <View direction="column"></View>
   * <View direction="column-reverse"></View>
   * ```
   */
  direction?: Property.FlexDirection | Property.FlexDirection[]

  /**
   * Flex items nowrap
   * ```css
   * { flex-wrap: nowrap }
   * ```
   * @example
   * ```tsx
   * <View nowrap></View>
   * ```
   */
  nowrap?: boolean

  /**
   * Flex items wrap
   * ```css
   * { flex-wrap: wrap }
   * ```
   * @example
   * ```tsx
   * <View wrap></View>
   * ```
   */
  wrap?: boolean

  /**
   * Set justify-content
   * ```css
   * { justify-content: flex-start }
   * ```
   * @example
   * ```tsx
   * <View justifyStart></View>
   * ```
   */
  justifyStart?: boolean

  /**
   * Set justify-content
   * ```css
   * { justify-content: flex-end }
   * ```
   * @example
   * ```tsx
   * <View justifyEnd></View>
   * ```
   */
  justifyEnd?: boolean

  /**
   * Set justify-content
   * ```css
   * { justify-content: center }
   * ```
   * @example
   * ```tsx
   * <View justifyCenter></View>
   * ```
   */
  justifyCenter?: boolean

  /**
   * Set justify-content
   * ```css
   * { justify-content: space-between }
   * ```
   * @example
   * ```tsx
   * <View justifyBetween></View>
   * ```
   */
  justifyBetween?: boolean

  /**
   * Set justify-content
   * ```css
   * { justify-content: space-around }
   * ```
   * @example
   * ```tsx
   * <View justifyAround></View>
   * ```
   */
  justifyAround?: boolean

  /**
   * Set justify-content
   * ```css
   * { justify-content: space-around }
   * ```
   * @example
   * ```tsx
   * <View justifyAround></View>
   * ```
   */
  justifyEvenly?: boolean

  /**
   * Set align-items
   * ```css
   * { align-items: flex-start }
   * ```
   * @example
   * ```tsx
   * <View itemsStart></View>
   * ```
   */
  itemsStart?: boolean

  /**
   * Set align-items
   * ```css
   * { align-items: flex-end }
   * ```
   * @example
   * ```tsx
   * <View itemsEnd></View>
   * ```
   */
  itemsEnd?: boolean

  /**
   * Set align-items
   * ```css
   * { align-items: center }
   * ```
   * @example
   * ```tsx
   * <View itemsCenter></View>
   * ```
   */
  itemsCenter?: boolean

  /**
   * Set align-items
   * ```css
   * { align-items: baseline }
   * ```
   * @example
   * ```tsx
   * <View itemsBaseline></View>
   * ```
   */
  itemsBaseline?: boolean

  /**
   * Set align-items
   * ```css
   * { align-items: stretch }
   * ```
   * @example
   * ```tsx
   * <View itemsStretch></View>
   * ```
   */
  itemsStretch?: boolean

  selfAuto?: boolean
  selfStart?: boolean
  selfEnd?: boolean
  selfCenter?: boolean
  selfStretch?: boolean

  contentStart?: boolean
  contentEnd?: boolean
  contentCenter?: boolean
  contentBetween?: boolean
  contentAround?: boolean
  contentStretch?: boolean

  /**
   * Set flex item center in x y  (水平垂直对齐), 默认flex: row
   * ```css
   * {
   *   display: flex;
   *   justify-content: center;
   *   justify-items: center;
   * }
   * ```
   * @example
   * ```tsx
   * <View center></View>
   * ```
   */
  center?: boolean

  /**
   * Set center in x axis，不管改容器是 row 还是 column, 只会在 x 轴生效
   *
   * @example
   *
   * ```tsx
   * <View centerX></View>
   * ```
   */
  centerX?: boolean

  /**
   * Set center in y axis，不管改容器是 row 还是 column, 只会在 y 轴生效
   *
   * @example
   *
   * ```tsx
   * <View centerY></View>
   * ```
   */
  centerY?: boolean

  left?: boolean

  right?: boolean

  top?: boolean

  bottom?: boolean

  between?: boolean

  around?: boolean

  evenly?: boolean
}
