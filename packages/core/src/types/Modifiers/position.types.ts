export interface Positions {
  static?: boolean

  fixed?: boolean

  absolute?: boolean

  relative?: boolean

  sticky?: boolean

  T?: boolean | number | string
  R?: boolean | number | string
  B?: boolean | number | string
  L?: boolean | number | string
}

export interface ZIndex {
  /**
   * Set z-index
   *
   * 用 View 作为示例:
   * ```tsx
   * <View zIndex-10></View>
   * <View zIndex={10}></View>
   * ```
   */
  zIndex?: boolean | number
}
