export interface Shadows {
  /**
   * Set shadow
   *
   * 用 View 作为示例:
   * ```tsx
   * <View shadow></View>
   * <View shadow-xs></View>
   * <View shadow-sm></View>
   * <View shadow-base></View>
   * <View shadow-md></View>
   * <View shadow-lg></View>
   * <View shadow-xl></View>
   * <View shadow-2xl></View>
   * <View shadow-inner></View>
   * <View shadow-outline></View>
   * <View shadow-none></View>
   * <View shadow="0 0 0 1px rgba(0, 0, 0, 0.05)"></View>
   * ```
   */

  shadow?: boolean | string
}
