import { PropValue } from './common.types'
export interface Paddings {
  /**
   * Set padding, p is padding
   *
   * 用 View 作为示例:
   * ```tsx
   * <View p-10></View>
   * <View p-1rem></View>
   * <View p-10p></View>
   * <View p={10}></View>
   * <View p="10px 20px"></View>
   * <View p={a + b}></View>
   * ```
   */
  p?: PropValue

  /**
   * Set padding horizontal
   *
   * px-10 相当于下面：
   *
   * ```css
   * {
   *   padding-left: 10px;
   *   padding-right: 10px;
   * }
   * ```
   *
   * 用 View 作为示例:
   * ```tsx
   * <View px-10></View>
   * <View px-1rem></View>
   * <View px-10p></View>
   * <View px={a + b}></View>
   * ```
   */
  px?: PropValue

  /**
   * Set padding vertical
   *
   * py-10 相当于下面：
   *
   * ```css
   * {
   *   padding-top: 10px;
   *   padding-bottom: 10px;
   * }
   * ```
   *
   * 用 View 作为示例:
   * ```tsx
   * <View py-10></View>
   * <View py-1rem></View>
   * <View py-10p></View>
   * <View py={a + b}></View>
   * ```
   */
  py?: PropValue

  /**
   * Set padding top, pt is padding-top
   *
   * 用 View 作为示例:
   * ```tsx
   * <View pt-10></View>
   * <View pt-1rem></View>
   * <View pt-10p></View>
   * <View pt={10}></View>
   * <View pt="10px 20px"></View>
   * <View pt={a + b}></View>
   * ```
   */
  pt?: PropValue

  /**
   * Set padding bottom, pb is padding-bottom
   *
   * 用 View 作为示例:
   * ```tsx
   * <View pb-10></View>
   * <View pb-1rem></View>
   * <View pb-10p></View>
   * <View pb={10}></View>
   * <View pb="10px 20px"></View>
   * <View pb={a + b}></View>
   * ```
   */
  pb?: PropValue

  /**
   * Set padding right, pr is padding-right
   *
   * 用 View 作为示例:
   * ```tsx
   * <View pr-10></View>
   * <View pr-1rem></View>
   * <View pr-10p></View>
   * <View pr={10}></View>
   * <View pr="10px 20px"></View>
   * <View pr={a + b}></View>
   * ```
   */
  pr?: PropValue

  /**
   * Set padding left, pl is padding-left
   *
   * 用 View 作为示例:
   * ```tsx
   * <View pl-10></View>
   * <View pl-1rem></View>
   * <View pl-10p></View>
   * <View pl={10}></View>
   * <View pl="10px 20px"></View>
   * <View pl={a + b}></View>
   * ```
   */
  pl?: PropValue
}
