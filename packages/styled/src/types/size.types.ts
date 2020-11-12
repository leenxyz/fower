import { PropValue } from './common.types'
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
  w?: PropValue
  w0?: boolean
  w1?: boolean
  w2?: boolean
  w3?: boolean
  w4?: boolean
  w5?: boolean
  w6?: boolean
  w7?: boolean
  w8?: boolean
  w9?: boolean

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
  h?: PropValue
  h0?: boolean
  h1?: boolean
  h2?: boolean
  h3?: boolean
  h4?: boolean
  h5?: boolean
  h6?: boolean
  h7?: boolean
  h8?: boolean
  h9?: boolean

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
  s?: PropValue
  s0?: boolean
  s1?: boolean
  s2?: boolean
  s3?: boolean
  s4?: boolean
  s5?: boolean
  s6?: boolean
  s7?: boolean
  s8?: boolean
  s9?: boolean

  /**
   * Set circle size
   *
   * c-10 相当于下面：
   *
   * ```css
   * {
   *   width: 10px;
   *   height: 10px;
   *   border-radius: 10px;
   * }
   * ```
   *
   * 用 View 作为示例:
   * ```tsx
   * <View circle-10></View>
   * <View circle-1rem></View>
   * <View circle-10p></View>
   * <View circle={a + b}></View>
   * ```
   */
  circle?: PropValue
  circle0?: boolean
  circle1?: boolean
  circle2?: boolean
  circle3?: boolean
  circle4?: boolean
  circle5?: boolean
  circle6?: boolean
  circle7?: boolean
  circle8?: boolean
  circle9?: boolean

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
  minW?: PropValue
  minW0?: boolean
  minW1?: boolean
  minW2?: boolean
  minW3?: boolean
  minW4?: boolean
  minW5?: boolean
  minW6?: boolean
  minW7?: boolean
  minW8?: boolean
  minW9?: boolean

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
  maxW?: PropValue
  maxW0?: boolean
  maxW1?: boolean
  maxW2?: boolean
  maxW3?: boolean
  maxW4?: boolean
  maxW5?: boolean
  maxW6?: boolean
  maxW7?: boolean
  maxW8?: boolean
  maxW9?: boolean

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
  minH?: PropValue
  minH0?: boolean
  minH1?: boolean
  minH2?: boolean
  minH3?: boolean
  minH4?: boolean
  minH5?: boolean
  minH6?: boolean
  minH7?: boolean
  minH8?: boolean
  minH9?: boolean

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
  maxH?: PropValue
  maxH0?: boolean
  maxH1?: boolean
  maxH2?: boolean
  maxH3?: boolean
  maxH4?: boolean
  maxH5?: boolean
  maxH6?: boolean
  maxH7?: boolean
  maxH8?: boolean
  maxH9?: boolean
}
