export interface Sizes {
  /**
   * Set width, w is width
   *
   * 用 View 作为示例:
   * ```tsx
   * <View w-10></View>
   * <View w-1rem></View>
   * <View w-10p></View>
   * <View w={10}></View>
   * <View w="10px 20px"></View>
   * <View w={a + b}></View>
   * ```
   */
  w?: boolean | number | string

  /**
   * Set height, h is height
   *
   * 用 View 作为示例:
   * ```tsx
   * <View h-10></View>
   * <View h-1rem></View>
   * <View h-10p></View>
   * <View h={10}></View>
   * <View h="10px 20px"></View>
   * <View h={a + b}></View>
   * ```
   */
  h?: boolean | number | string

  /**
   * Set square size
   *
   * s-10 相当于下面：
   *
   * ```css
   * {
   *   width: 10px;
   *   height: 10px;
   * }
   * ```
   *
   * 用 View 作为示例:
   * ```tsx
   * <View s-10></View>
   * <View s-1rem></View>
   * <View s-10p></View>
   * <View s={a + b}></View>
   * ```
   */
  s?: boolean | number | string

  /**
   * Set min-width
   *
   * 用 View 作为示例:
   * ```tsx
   * <View minW-10></View>
   * <View minW-1rem></View>
   * <View minW-10p></View>
   * <View minW={10}></View>
   * <View minW="10px 20px"></View>
   * <View minW={a + b}></View>
   * ```
   */
  minW?: boolean | number | string

  /**
   * Set max-height
   *
   * 用 View 作为示例:
   * ```tsx
   * <View maxW-10></View>
   * <View maxW-1rem></View>
   * <View maxW-10p></View>
   * <View maxW={10}></View>
   * <View maxW="10px 20px"></View>
   * <View maxW={a + b}></View>
   * ```
   */
  maxW?: boolean | number | string

  /**
   * Set min-height
   *
   * 用 View 作为示例:
   * ```tsx
   * <View minH-10></View>
   * <View minH-1rem></View>
   * <View minH-10p></View>
   * <View minH={10}></View>
   * <View minH="10px 20px"></View>
   * <View minH={a + b}></View>
   * ```
   */
  minH?: boolean | number | string

  /**
   * Set max-height
   *
   * 用 View 作为示例:
   * ```tsx
   * <View maxH-10></View>
   * <View maxH-1rem></View>
   * <View maxH-10p></View>
   * <View maxH={10}></View>
   * <View maxH="10px 20px"></View>
   * <View maxH={a + b}></View>
   * ```
   */
  maxH?: boolean | number | string
}
