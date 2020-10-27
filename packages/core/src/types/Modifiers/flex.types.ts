export interface Flexs {
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
   * 用 View 作为示例:
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
   * 用 View 作为示例:
   * ```tsx
   * <View column></View>
   * ```
   */
  column?: boolean

  /**
   * set flex-flow、flex-shrink、flex-basic
   *
   * 用 View 作为示例:
   * ```tsx
   * <View flex-1></View> // flex: 1 1 0%;
   * <View flex-auto></View> // flex: 1 1 auto;
   * <View flex-initial></View> // flex: 0 1 auto;
   * <View flex-none></View> // flex: none;
   * ```
   */
  flex?: boolean | number | string | number[] | string[]

  /**
   * Flex items nowrap
   * ```css
   * { flex-wrap: nowrap }
   * ```
   * 用 View 作为示例:
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
   * 用 View 作为示例:
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
   * 用 View 作为示例:
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
   * 用 View 作为示例:
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
   * 用 View 作为示例:
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
   * 用 View 作为示例:
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
   * 用 View 作为示例:
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
   * 用 View 作为示例:
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
   * 用 View 作为示例:
   * ```tsx
   * <View alignStart></View>
   * ```
   */
  alignStart?: boolean

  /**
   * Set align-items
   * ```css
   * { align-items: flex-end }
   * ```
   * 用 View 作为示例:
   * ```tsx
   * <View alignEnd></View>
   * ```
   */
  alignEnd?: boolean

  /**
   * Set align-items
   * ```css
   * { align-items: center }
   * ```
   * 用 View 作为示例:
   * ```tsx
   * <View alignCenter></View>
   * ```
   */
  alignCenter?: boolean

  /**
   * Set align-items
   * ```css
   * { align-items: baseline }
   * ```
   * 用 View 作为示例:
   * ```tsx
   * <View alignBaseline></View>
   * ```
   */
  alignBaseline?: boolean

  /**
   * Set align-items
   * ```css
   * { align-items: stretch }
   * ```
   * 用 View 作为示例:
   * ```tsx
   * <View alignStretch></View>
   * ```
   */
  alignStretch?: boolean

  /**
   * Set flex item center in x y  (水平垂直对齐), 默认flex: row
   * ```css
   * {
   *   display: flex;
   *   justify-content: center;
   *   justify-items: center;
   * }
   * ```
   * 用 View 作为示例:
   * ```tsx
   * <View center></View>
   * ```
   */
  center?: boolean

  /**
   * Set center in x axis，不管改容器是 row 还是 column, 只会在 x 轴生效
   *
   * 用 View 作为示例:
   *
   * ```tsx
   * <View centerX></View>
   * ```
   */
  centerX?: boolean

  /**
   * Set center in y axis，不管改容器是 row 还是 column, 只会在 y 轴生效
   *
   * 用 View 作为示例:
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
