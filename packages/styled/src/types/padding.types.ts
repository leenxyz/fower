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
  p0?: boolean
  p1?: boolean
  p2?: boolean
  p3?: boolean
  p4?: boolean
  p5?: boolean
  p6?: boolean
  p7?: boolean
  p8?: boolean
  p9?: boolean

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
  px0?: boolean
  px1?: boolean
  px2?: boolean
  px3?: boolean
  px4?: boolean
  px5?: boolean
  px6?: boolean
  px7?: boolean
  px8?: boolean
  px9?: boolean

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
  py0?: boolean
  py1?: boolean
  py2?: boolean
  py3?: boolean
  py4?: boolean
  py5?: boolean
  py6?: boolean
  py7?: boolean
  py8?: boolean
  py9?: boolean

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
  pt0?: boolean
  pt1?: boolean
  pt2?: boolean
  pt3?: boolean
  pt4?: boolean
  pt5?: boolean
  pt6?: boolean
  pt7?: boolean
  pt8?: boolean
  pt9?: boolean

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
  pb0?: boolean
  pb1?: boolean
  pb2?: boolean
  pb3?: boolean
  pb4?: boolean
  pb5?: boolean
  pb6?: boolean
  pb7?: boolean
  pb8?: boolean
  pb9?: boolean

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
  pr0?: boolean
  pr1?: boolean
  pr2?: boolean
  pr3?: boolean
  pr4?: boolean
  pr5?: boolean
  pr6?: boolean
  pr7?: boolean
  pr8?: boolean
  pr9?: boolean

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
  pl0?: boolean
  pl1?: boolean
  pl2?: boolean
  pl3?: boolean
  pl4?: boolean
  pl5?: boolean
  pl6?: boolean
  pl7?: boolean
  pl8?: boolean
  pl9?: boolean
}
