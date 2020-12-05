import { PropValue } from './common.types'

export interface OutLine {
  /**
   * Set outline
   *
   * @example
   * ```tsx
   * <View outline></View>
   * <View outline="dashed red;"></View>
   * ```
   */
  outline?: PropValue

  /**
   * Set outline to none
   *
   * @example
   * ```tsx
   * <View outlineNone></View>
   * ```
   */
  outlineNone?: boolean

  /**
   * Set outlineOffset
   *
   * @example
   * ```tsx
   * <View outlineOffset="0.2em"></View>
   * ```
   */
  outlineOffset?: PropValue
}
