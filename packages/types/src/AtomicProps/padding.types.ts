import { PropValue } from './common.types'
export interface Paddings {
  /**
   * Set padding
   *
   * @example
   * ```tsx
   * <View p-10></View>
   * <View p-1rem></View>
   * <View p-10p></View>
   * <View p={10}></View>
   * <View p="10px 20px"></View>
   * <View p={a + b}></View>
   * ```
   */
  m?: PropValue

  /**
   * Set padding
   *
   * NOTE: Theme restrict. You must config spacing
   *
   * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
   *
   * p0 is `padding: 10px`
   */
  p0?: boolean

  /**
   * Set padding
   *
   * NOTE: Theme restrict. You must config spacing
   *
   * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
   *
   * p1 is `padding: 20px`
   */
  p1?: boolean

  /**
   * Set padding
   *
   * NOTE: Theme restrict. You must config spacing
   *
   * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
   *
   * p2 is `padding: 30px`
   */
  p2?: boolean

  /**
   * Set padding
   *
   * NOTE: Theme restrict. You must config spacing
   *
   * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
   *
   * p3 is `padding: 40px`
   */
  p3?: boolean

  /**
   * Set padding
   *
   * NOTE: Theme restrict. You must config spacing
   *
   * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
   *
   * p4 is `padding: 50px`
   */
  p4?: boolean

  /**
   * Set padding
   *
   * NOTE: Theme restrict. You must config spacing
   *
   * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
   *
   * p5 is `padding: 60px`
   */
  p5?: boolean

  /**
   * Set padding
   *
   * NOTE: Theme restrict. You must config spacing
   *
   * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
   *
   * p6 is `padding: 70px`
   */
  p6?: boolean

  /**
   * Set padding
   *
   * NOTE: Theme restrict. You must config spacing
   *
   * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
   *
   * p7 is `padding: 80px`
   */
  p7?: boolean

  /**
   * Set padding
   *
   * NOTE: Theme restrict. You must config spacing
   *
   * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
   *
   * p8 is `padding: 90px`
   */
  p8?: boolean

  /**
   * Set padding
   *
   * NOTE: Theme restrict. You must config spacing
   *
   * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
   *
   * p9 is `padding: 100px`
   */
  p9?: boolean

  /**
   * Set padding horizontal
   *
   * px-10 is `padding-left: 10px; padding-right: 10px;`
   *
   * @example
   * ```tsx
   * <View px-10></View>
   * <View px-1rem></View>
   * <View px-10p></View>
   * <View px={a + b}></View>
   * ```
   */
  px?: PropValue

  /**
   * Set paddingLeft and paddingRight
   *
   * NOTE: Theme restrict. You must config spacing
   *
   * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
   *
   * px0 is `padding-left: 10px; padding-right: 10px`
   */
  px0?: boolean

  /**
   * Set paddingLeft and paddingRight
   *
   * NOTE: Theme restrict. You must config spacing
   *
   * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
   *
   * px1 is `padding-left: 20px; padding-right: 20px`
   */
  px1?: boolean

  /**
   * Set paddingLeft and paddingRight
   *
   * NOTE: Theme restrict. You must config spacing
   *
   * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
   *
   * px2 is `padding-left: 30px; padding-right: 30px`
   */
  px2?: boolean

  /**
   * Set paddingLeft and paddingRight
   *
   * NOTE: Theme restrict. You must config spacing
   *
   * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
   *
   * px3 is `padding-left: 40px; padding-right: 40px`
   */
  px3?: boolean

  /**
   * Set paddingLeft and paddingRight
   *
   * NOTE: Theme restrict. You must config spacing
   *
   * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
   *
   * px4 is `padding-left: 50px; padding-right: 50px`
   */
  px4?: boolean

  /**
   * Set paddingLeft and paddingRight
   *
   * NOTE: Theme restrict. You must config spacing
   *
   * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
   *
   * px5 is `padding-left: 60px; padding-right: 60px`
   */
  px5?: boolean

  /**
   * Set paddingLeft and paddingRight
   *
   * NOTE: Theme restrict. You must config spacing
   *
   * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
   *
   * px6 is `padding-left: 70px; padding-right: 70px`
   */
  px6?: boolean

  /**
   * Set paddingLeft and paddingRight
   *
   * NOTE: Theme restrict. You must config spacing
   *
   * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
   *
   * px7 is `padding-left: 80px; padding-right: 80px`
   */
  px7?: boolean

  /**
   * Set paddingLeft and paddingRight
   *
   * NOTE: Theme restrict. You must config spacing
   *
   * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
   *
   * px8 is `padding-left: 90px; padding-right: 90px`
   */
  px8?: boolean

  /**
   * Set paddingLeft and paddingRight
   *
   * NOTE: Theme restrict. You must config spacing
   *
   * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
   *
   * px9 is `padding-left: 100px; padding-right: 100px`
   */
  px9?: boolean

  /**
   * Set padding vertical
   *
   * py-10 is `padding-top: 10px; padding-bottom: 10px;`
   *
   * @example
   * ```tsx
   * <View py-10></View>
   * <View py-1rem></View>
   * <View py-10p></View>
   * <View py={a + b}></View>
   * ```
   */
  py?: PropValue

  /**
   * Set paddingTop and paddingBottom
   *
   * NOTE: Theme restrict. You must config spacing
   *
   * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
   *
   * py0 is `padding-left: 10px; padding-right: 10px`
   */
  py0?: boolean

  /**
   * Set paddingTop and paddingBottom
   *
   * NOTE: Theme restrict. You must config spacing
   *
   * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
   *
   * py1 is `padding-left: 20px; padding-right: 20px`
   */
  py1?: boolean

  /**
   * Set paddingTop and paddingBottom
   *
   * NOTE: Theme restrict. You must config spacing
   *
   * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
   *
   * py2 is `padding-left: 30px; padding-right: 30px`
   */
  py2?: boolean

  /**
   * Set paddingTop and paddingBottom
   *
   * NOTE: Theme restrict. You must config spacing
   *
   * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
   *
   * py3 is `padding-left: 40px; padding-right: 40px`
   */
  py3?: boolean

  /**
   * Set paddingTop and paddingBottom
   *
   * NOTE: Theme restrict. You must config spacing
   *
   * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
   *
   * py4 is `padding-left: 50px; padding-right: 50px`
   */
  py4?: boolean

  /**
   * Set paddingTop and paddingBottom
   *
   * NOTE: Theme restrict. You must config spacing
   *
   * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
   *
   * py5 is `padding-left: 60px; padding-right: 60px`
   */
  py5?: boolean

  /**
   * Set paddingTop and paddingBottom
   *
   * NOTE: Theme restrict. You must config spacing
   *
   * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
   *
   * py6 is `padding-left: 70px; padding-right: 70px`
   */
  py6?: boolean

  /**
   * Set paddingTop and paddingBottom
   *
   * NOTE: Theme restrict. You must config spacing
   *
   * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
   *
   * py7 is `padding-left: 80px; padding-right: 80px`
   */
  py7?: boolean

  /**
   * Set paddingTop and paddingBottom
   *
   * NOTE: Theme restrict. You must config spacing
   *
   * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
   *
   * py8 is `padding-left: 90px; padding-right: 90px`
   */
  py8?: boolean

  /**
   * Set paddingTop and paddingBottom
   *
   * NOTE: Theme restrict. You must config spacing
   *
   * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
   *
   * py9 is `padding-left: 100px; padding-right: 100px`
   */
  py9?: boolean

  /**
   * Set paddingTop
   *
   * @example
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
   * Set paddingTop
   *
   * NOTE: Theme restrict. You must config spacing
   *
   * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
   *
   * pt0 is `padding-top: 10px`
   */
  pt0?: boolean

  /**
   * Set paddingTop
   *
   * NOTE: Theme restrict. You must config spacing
   *
   * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
   *
   * pt1 is `padding-top: 20px`
   */
  pt1?: boolean

  /**
   * Set paddingTop
   *
   * NOTE: Theme restrict. You must config spacing
   *
   * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
   *
   * pt2 is `padding-top: 30px`
   */
  pt2?: boolean

  /**
   * Set paddingTop
   *
   * NOTE: Theme restrict. You must config spacing
   *
   * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
   *
   * pt3 is `padding-top: 40px`
   */
  pt3?: boolean

  /**
   * Set paddingTop
   *
   * NOTE: Theme restrict. You must config spacing
   *
   * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
   *
   * pt4 is `padding-top: 50px`
   */
  pt4?: boolean

  /**
   * Set paddingTop
   *
   * NOTE: Theme restrict. You must config spacing
   *
   * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
   *
   * pt5 is `padding-top: 60px`
   */
  pt5?: boolean

  /**
   * Set paddingTop
   *
   * NOTE: Theme restrict. You must config spacing
   *
   * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
   *
   * pt6 is `padding-top: 70px`
   */
  pt6?: boolean

  /**
   * Set paddingTop
   *
   * NOTE: Theme restrict. You must config spacing
   *
   * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
   *
   * pt7 is `padding-top: 80px`
   */
  pt7?: boolean

  /**
   * Set paddingTop
   *
   * NOTE: Theme restrict. You must config spacing
   *
   * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
   *
   * pt8 is `padding-top: 90px`
   */
  pt8?: boolean

  /**
   * Set paddingTop
   *
   * NOTE: Theme restrict. You must config spacing
   *
   * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
   *
   * pt9 is `padding-top: 100px`
   */
  pt9?: boolean

  /**
   * Set padding bottom, pb is padding-bottom
   *
   * @example
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
   * Set paddingBottom
   *
   * NOTE: Theme restrict. You must config spacing
   *
   * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
   *
   * pb0 is `padding-bottom: 10px`
   */
  pb0?: boolean

  /**
   * Set paddingBottom
   *
   * NOTE: Theme restrict. You must config spacing
   *
   * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
   *
   * pb1 is `padding-bottom: 20px`
   */
  pb1?: boolean

  /**
   * Set paddingBottom
   *
   * NOTE: Theme restrict. You must config spacing
   *
   * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
   *
   * pb2 is `padding-bottom: 30px`
   */
  pb2?: boolean

  /**
   * Set paddingBottom
   *
   * NOTE: Theme restrict. You must config spacing
   *
   * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
   *
   * pb3 is `padding-bottom: 40px`
   */
  pb3?: boolean

  /**
   * Set paddingBottom
   *
   * NOTE: Theme restrict. You must config spacing
   *
   * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
   *
   * pb4 is `padding-bottom: 50px`
   */
  pb4?: boolean

  /**
   * Set paddingBottom
   *
   * NOTE: Theme restrict. You must config spacing
   *
   * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
   *
   * pb5 is `padding-bottom: 60px`
   */
  pb5?: boolean

  /**
   * Set paddingBottom
   *
   * NOTE: Theme restrict. You must config spacing
   *
   * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
   *
   * pb6 is `padding-bottom: 70px`
   */
  pb6?: boolean

  /**
   * Set paddingBottom
   *
   * NOTE: Theme restrict. You must config spacing
   *
   * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
   *
   * pb7 is `padding-bottom: 80px`
   */
  pb7?: boolean

  /**
   * Set paddingBottom
   *
   * NOTE: Theme restrict. You must config spacing
   *
   * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
   *
   * pb8 is `padding-bottom: 90px`
   */
  pb8?: boolean

  /**
   * Set paddingBottom
   *
   * NOTE: Theme restrict. You must config spacing
   *
   * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
   *
   * pb9 is `padding-bottom: 100px`
   */
  pb9?: boolean

  /**
   * Set paddingRight
   *
   * @example
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
   * Set paddingRight
   *
   * NOTE: Theme restrict. You must config spacing
   *
   * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
   *
   * pr0 is `padding-right: 10px`
   */
  pr0?: boolean

  /**
   * Set paddingRight
   *
   * NOTE: Theme restrict. You must config spacing
   *
   * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
   *
   * pr1 is `padding-right: 20px`
   */
  pr1?: boolean

  /**
   * Set paddingRight
   *
   * NOTE: Theme restrict. You must config spacing
   *
   * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
   *
   * pr2 is `padding-right: 30px`
   */
  pr2?: boolean

  /**
   * Set paddingRight
   *
   * NOTE: Theme restrict. You must config spacing
   *
   * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
   *
   * pr3 is `padding-right: 40px`
   */
  pr3?: boolean

  /**
   * Set paddingRight
   *
   * NOTE: Theme restrict. You must config spacing
   *
   * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
   *
   * pr4 is `padding-right: 40px`
   */
  pr4?: boolean

  /**
   * Set paddingRight
   *
   * NOTE: Theme restrict. You must config spacing
   *
   * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
   *
   * pr5 is `padding-right: 50px`
   */
  pr5?: boolean

  /**
   * Set paddingRight
   *
   * NOTE: Theme restrict. You must config spacing
   *
   * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
   *
   * pr6 is `padding-right: 70px`
   */
  pr6?: boolean

  /**
   * Set paddingRight
   *
   * NOTE: Theme restrict. You must config spacing
   *
   * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
   *
   * pr7 is `padding-right: 80px`
   */
  pr7?: boolean

  /**
   * Set paddingRight
   *
   * NOTE: Theme restrict. You must config spacing
   *
   * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
   *
   * pr8 is `padding-right: 90px`
   */
  pr8?: boolean

  /**
   * Set paddingRight
   *
   * NOTE: Theme restrict. You must config spacing
   *
   * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
   *
   * pr9 is `padding-right: 100px`
   */
  pr9?: boolean

  /**
   * Set paddingLeft
   *
   * @example
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

  /**
   * Set paddingLeft
   *
   * NOTE: Theme restrict. You must config spacing
   *
   * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
   *
   * pl0 is `padding-left: 10px`
   */
  pl0?: boolean

  /**
   * Set paddingLeft
   *
   * NOTE: Theme restrict. You must config spacing
   *
   * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
   *
   * pl1 is `padding-left: 20px`
   */
  pl1?: boolean

  /**
   * Set paddingLeft
   *
   * NOTE: Theme restrict. You must config spacing
   *
   * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
   *
   * pl2 is `padding-left: 30px`
   */
  pl2?: boolean

  /**
   * Set paddingLeft
   *
   * NOTE: Theme restrict. You must config spacing
   *
   * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
   *
   * pl3 is `padding-left: 40px`
   */
  pl3?: boolean

  /**
   * Set paddingLeft
   *
   * NOTE: Theme restrict. You must config spacing
   *
   * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
   *
   * pl4 is `padding-left: 50px`
   */
  pl4?: boolean

  /**
   * Set paddingLeft
   *
   * NOTE: Theme restrict. You must config spacing
   *
   * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
   *
   * pl5 is `padding-left: 60px`
   */
  pl5?: boolean

  /**
   * Set paddingLeft
   *
   * NOTE: Theme restrict. You must config spacing
   *
   * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
   *
   * pl6 is `padding-left: 70px`
   */
  pl6?: boolean

  /**
   * Set paddingLeft
   *
   * NOTE: Theme restrict. You must config spacing
   *
   * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
   *
   * pl7 is `padding-left: 80px`
   */
  pl7?: boolean

  /**
   * Set paddingLeft
   *
   * NOTE: Theme restrict. You must config spacing
   *
   * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
   *
   * pl8 is `padding-left: 90px`
   */
  pl8?: boolean

  /**
   * Set paddingLeft
   *
   * NOTE: Theme restrict. You must config spacing
   *
   * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
   *
   * pl9 is `padding-left: 100px`
   */
  pl9?: boolean
}
