export interface Shadows {
  /**
   * Set shadow
   *
   * 用 View 作为示例:
   * ```tsx
   * <View shadow></View>
   * <View shadow="0 0 0 1px rgba(0, 0, 0, 0.05)"></View>
   * ```
   */

  shadow?: boolean | string | string[]

  /**
   * Set shadow
   *
   * 用 View 作为示例:
   * ```tsx
   * <View shadowXXS></View>
   * ```
   */
  shadowXXS?: boolean | string

  /**
   * Set shadow
   *
   * 用 View 作为示例:
   * ```tsx
   * <View shadowXS></View>
   * ```
   */
  shadowXS?: boolean | string

  /**
   * Set shadow
   *
   * 用 View 作为示例:
   * ```tsx
   * <View shadowS></View>
   * ```
   */
  shadowS?: boolean | string

  /**
   * Set shadow
   *
   * 用 View 作为示例:
   * ```tsx
   * <View shadowM></View>
   * ```
   */
  shadowM?: boolean | string

  /**
   * Set shadow
   *
   * 用 View 作为示例:
   * ```tsx
   * <View shadowL></View>
   * ```
   */
  shadowL?: boolean | string

  /**
   * Set shadow
   *
   * 用 View 作为示例:
   * ```tsx
   * <View shadowXL></View>
   * ```
   */
  shadowXL?: boolean | string

  /**
   * Set shadow
   *
   * 用 View 作为示例:
   * ```tsx
   * <View shadowXXL></View>
   * ```
   */
  shadowXXL?: boolean | string

  /**
   * Set shadow
   *
   * 用 View 作为示例:
   * ```tsx
   * <View shadowInner></View>
   * ```
   */
  shadowInner?: boolean | string

  /**
   * Set shadow
   *
   * 用 View 作为示例:
   * ```tsx
   * <View shadowOutline></View>
   * ```
   */
  shadowOutline?: boolean | string

  /**
   * Set shadow
   *
   * 用 View 作为示例:
   * ```tsx
   * <View shadowNone></View>
   * ```
   */
  shadowshadowNone?: boolean | string
}
