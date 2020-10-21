export interface Opacity {
  /**
   * Set opacity
   *
   * 用 View 作为示例:
   * ```tsx
   * <View opacity></View>
   * <View opacity-20></View>
   * <View opacity="20"></View>
   * <View opacity={20}></View>
   * ```
   */

  opacity?: boolean | string | number | number[] | string[]
}
