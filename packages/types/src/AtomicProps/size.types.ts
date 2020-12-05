import { PropValue } from './common.types'
export interface Sizes {
  /**
   * Set width
   *
   * @example
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

  /**
   * Set width
   *
   * NOTE: Theme restrict. You must config spacing
   *
   * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
   *
   * w0 is `width: 10px`
   */
  w0?: boolean

  /**
   * Set width
   *
   * NOTE: Theme restrict. You must config spacing
   *
   * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
   *
   * w1 is `width: 20px`
   */
  w1?: boolean

  /**
   * Set width
   *
   * NOTE: Theme restrict. You must config spacing
   *
   * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
   *
   * w2 is `width: 30px`
   */
  w2?: boolean

  /**
   * Set width
   *
   * NOTE: Theme restrict. You must config spacing
   *
   * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
   *
   * w3 is `width: 40px`
   */
  w3?: boolean

  /**
   * Set width
   *
   * NOTE: Theme restrict. You must config spacing
   *
   * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
   *
   * w4 is `width: 50px`
   */
  w4?: boolean

  /**
   * Set width
   *
   * NOTE: Theme restrict. You must config spacing
   *
   * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
   *
   * w5 is `width: 60px`
   */
  w5?: boolean

  /**
   * Set width
   *
   * NOTE: Theme restrict. You must config spacing
   *
   * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
   *
   * w6 is `width: 70px`
   */
  w6?: boolean

  /**
   * Set width
   *
   * NOTE: Theme restrict. You must config spacing
   *
   * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
   *
   * w7 is `width: 80px`
   */
  w7?: boolean

  /**
   * Set width
   *
   * NOTE: Theme restrict. You must config spacing
   *
   * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
   *
   * w8 is `width: 90px`
   */
  w8?: boolean

  /**
   * Set width
   *
   * NOTE: Theme restrict. You must config spacing
   *
   * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
   *
   * w9 is `width: 100px`
   */
  w9?: boolean

  /**
   * Set height
   *
   * @example
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

  /**
   * Set height
   *
   * NOTE: Theme restrict. You must config spacing
   *
   * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
   *
   * h0 is `height: 10px`
   */
  h0?: boolean

  /**
   * Set height
   *
   * NOTE: Theme restrict. You must config spacing
   *
   * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
   *
   * h1 is `height: 20px`
   */
  h1?: boolean

  /**
   * Set height
   *
   * NOTE: Theme restrict. You must config spacing
   *
   * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
   *
   * h2 is `height: 30px`
   */
  h2?: boolean

  /**
   * Set height
   *
   * NOTE: Theme restrict. You must config spacing
   *
   * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
   *
   * h3 is `height: 40px`
   */
  h3?: boolean

  /**
   * Set height
   *
   * NOTE: Theme restrict. You must config spacing
   *
   * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
   *
   * h4 is `height: 50px`
   */
  h4?: boolean

  /**
   * Set height
   *
   * NOTE: Theme restrict. You must config spacing
   *
   * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
   *
   * h5 is `height: 60px`
   */
  h5?: boolean

  /**
   * Set height
   *
   * NOTE: Theme restrict. You must config spacing
   *
   * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
   *
   * h6 is `height: 70px`
   */
  h6?: boolean

  /**
   * Set height
   *
   * NOTE: Theme restrict. You must config spacing
   *
   * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
   *
   * h7 is `height: 80px`
   */
  h7?: boolean

  /**
   * Set height
   *
   * NOTE: Theme restrict. You must config spacing
   *
   * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
   *
   * h8 is `height: 90px`
   */
  h8?: boolean

  /**
   * Set height
   *
   * NOTE: Theme restrict. You must config spacing
   *
   * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
   *
   * h9 is `height: 100px`
   */
  h9?: boolean

  /**
   * Set size
   *
   * s-10 is `width: 10px; height: 10px;`
   *
   * s-10-20 is `width: 10px; height: 20px`
   *
   * @example
   * ```tsx
   * <View s-10></View>
   * <View s-1rem></View>
   * <View s-10p></View>
   * <View s={a + b}></View>
   * ```
   */
  s?: PropValue

  /**
   * Set size
   *
   * NOTE: Theme restrict. You must config spacing
   *
   * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
   *
   * s0 is `width:10px; height: 10px`
   */
  s0?: boolean

  /**
   * Set size
   *
   * NOTE: Theme restrict. You must config spacing
   *
   * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
   *
   * s1 is `width:20px; height: 20px`
   */
  s1?: boolean

  /**
   * Set size
   *
   * NOTE: Theme restrict. You must config spacing
   *
   * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
   *
   * s2 is `width:30px; height: 30px`
   */
  s2?: boolean

  /**
   * Set size
   *
   * NOTE: Theme restrict. You must config spacing
   *
   * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
   *
   * s3 is `width:40px; height: 40px`
   */
  s3?: boolean

  /**
   * Set size
   *
   * NOTE: Theme restrict. You must config spacing
   *
   * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
   *
   * s4 is `width:50px; height: 50px`
   */
  s4?: boolean

  /**
   * Set size
   *
   * NOTE: Theme restrict. You must config spacing
   *
   * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
   *
   * s5 is `width:60px; height: 60px`
   */
  s5?: boolean

  /**
   * Set size
   *
   * NOTE: Theme restrict. You must config spacing
   *
   * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
   *
   * s6 is `width:70px; height: 70px`
   */
  s6?: boolean

  /**
   * Set size
   *
   * NOTE: Theme restrict. You must config spacing
   *
   * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
   *
   * s7 is `width:80px; height: 80px`
   */
  s7?: boolean

  /**
   * Set size
   *
   * NOTE: Theme restrict. You must config spacing
   *
   * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
   *
   * s8 is `width:90px; height: 90px`
   */
  s8?: boolean

  /**
   * Set size
   *
   * NOTE: Theme restrict. You must config spacing
   *
   * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
   *
   * s9 is `width:100px; height: 100px`
   */
  s9?: boolean

  /**
   * Set circle
   *
   * circle-10 is `width: 10px; height: 10px; border-radius: 10px`
   *
   * @example
   * ```tsx
   * <View circle-10></View>
   * <View circle-1rem></View>
   * <View circle-10p></View>
   * <View circle={a + b}></View>
   * ```
   */
  circle?: PropValue

  /**
   * Set circle
   *
   * NOTE: Theme restrict. You must config spacing
   *
   * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
   *
   * circle0 is `width:10px; height: 10px; border-radius: 10px`
   */
  circle0?: boolean

  /**
   * Set circle
   *
   * NOTE: Theme restrict. You must config spacing
   *
   * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
   *
   * circle1 is `width:20px; height: 20px; border-radius: 20px`
   */
  circle1?: boolean

  /**
   * Set circle
   *
   * NOTE: Theme restrict. You must config spacing
   *
   * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
   *
   * circle2 is `width:30px; height: 30px; border-radius: 30px`
   */
  circle2?: boolean

  /**
   * Set circle
   *
   * NOTE: Theme restrict. You must config spacing
   *
   * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
   *
   * circle3 is `width:40px; height: 40px; border-radius: 40px`
   */
  circle3?: boolean

  /**
   * Set circle
   *
   * NOTE: Theme restrict. You must config spacing
   *
   * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
   *
   * circle4 is `width:50px; height: 50px; border-radius: 50px`
   */
  circle4?: boolean

  /**
   * Set circle
   *
   * NOTE: Theme restrict. You must config spacing
   *
   * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
   *
   * circle5 is `width:60px; height: 60px; border-radius: 60px`
   */
  circle5?: boolean
  /**
   * Set circle
   *
   * NOTE: Theme restrict. You must config spacing
   *
   * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
   *
   * circle6 is `width:70px; height: 70px; border-radius: 70px`
   */
  circle6?: boolean

  /**
   * Set circle
   *
   * NOTE: Theme restrict. You must config spacing
   *
   * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
   *
   * circle7 is `width:80px; height: 80px; border-radius: 80px`
   */
  circle7?: boolean

  /**
   * Set circle
   *
   * NOTE: Theme restrict. You must config spacing
   *
   * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
   *
   * circle8 is `width:90px; height: 90px; border-radius: 90px`
   */
  circle8?: boolean

  /**
   * Set circle
   *
   * NOTE: Theme restrict. You must config spacing
   *
   * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
   *
   * circle9 is `width:100px; height: 100px; border-radius: 100px`
   */
  circle9?: boolean

  /**
   * Set minWidth
   *
   * @example
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

  /**
   * Set minWidth
   *
   * NOTE: Theme restrict. You must config spacing
   *
   * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
   *
   * minW0 is `min-width:10px`
   */
  minW0?: boolean

  /**
   * Set minWidth
   *
   * NOTE: Theme restrict. You must config spacing
   *
   * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
   *
   * minW1 is `min-width:20px`
   */
  minW1?: boolean

  /**
   * Set minWidth
   *
   * NOTE: Theme restrict. You must config spacing
   *
   * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
   *
   * minW2 is `min-width:30px`
   */
  minW2?: boolean

  /**
   * Set minWidth
   *
   * NOTE: Theme restrict. You must config spacing
   *
   * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
   *
   * minW3 is `min-width:40px`
   */
  minW3?: boolean

  /**
   * Set minWidth
   *
   * NOTE: Theme restrict. You must config spacing
   *
   * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
   *
   * minW4 is `min-width:50px`
   */
  minW4?: boolean

  /**
   * Set minWidth
   *
   * NOTE: Theme restrict. You must config spacing
   *
   * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
   *
   * minW5 is `min-width:60px`
   */
  minW5?: boolean

  /**
   * Set minWidth
   *
   * NOTE: Theme restrict. You must config spacing
   *
   * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
   *
   * minW6 is `min-width:70px`
   */
  minW6?: boolean

  /**
   * Set minWidth
   *
   * NOTE: Theme restrict. You must config spacing
   *
   * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
   *
   * minW7 is `min-width:80px`
   */
  minW7?: boolean

  /**
   * Set minWidth
   *
   * NOTE: Theme restrict. You must config spacing
   *
   * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
   *
   * minW8 is `min-width:90px`
   */
  minW8?: boolean

  /**
   * Set minWidth
   *
   * NOTE: Theme restrict. You must config spacing
   *
   * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
   *
   * minW9 is `min-width:100px`
   */
  minW9?: boolean

  /**
   * Set maxHeight
   *
   * @example
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

  /**
   * Set maxWidth
   *
   * NOTE: Theme restrict. You must config spacing
   *
   * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
   *
   * maxW0 is `max-width: 10px`
   */
  maxW0?: boolean

  /**
   * Set maxWidth
   *
   * NOTE: Theme restrict. You must config spacing
   *
   * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
   *
   * maxW1 is `max-width: 20px`
   */
  maxW1?: boolean

  /**
   * Set maxWidth
   *
   * NOTE: Theme restrict. You must config spacing
   *
   * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
   *
   * maxW2 is `max-width: 30px`
   */
  maxW2?: boolean

  /**
   * Set maxWidth
   *
   * NOTE: Theme restrict. You must config spacing
   *
   * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
   *
   * maxW3 is `max-width: 40px`
   */
  maxW3?: boolean

  /**
   * Set maxWidth
   *
   * NOTE: Theme restrict. You must config spacing
   *
   * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
   *
   * maxW4 is `max-width: 50px`
   */
  maxW4?: boolean

  /**
   * Set maxWidth
   *
   * NOTE: Theme restrict. You must config spacing
   *
   * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
   *
   * maxW5 is `max-width: 60px`
   */
  maxW5?: boolean

  /**
   * Set maxWidth
   *
   * NOTE: Theme restrict. You must config spacing
   *
   * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
   *
   * maxW6 is `max-width: 70px`
   */
  maxW6?: boolean

  /**
   * Set maxWidth
   *
   * NOTE: Theme restrict. You must config spacing
   *
   * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
   *
   * maxW7 is `max-width: 80px`
   */
  maxW7?: boolean

  /**
   * Set maxWidth
   *
   * NOTE: Theme restrict. You must config spacing
   *
   * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
   *
   * maxW8 is `max-width: 90px`
   */
  maxW8?: boolean

  /**
   * Set maxWidth
   *
   * NOTE: Theme restrict. You must config spacing
   *
   * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
   *
   * maxW9 is `max-width: 100px`
   */
  maxW9?: boolean

  /**
   * Set min-height
   *
   * @example
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

  /**
   * Set min-height
   *
   * NOTE: Theme restrict. You must config spacing
   *
   * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
   *
   * minH0 is `min-height: 10px`
   */
  minH0?: boolean

  /**
   * Set min-height
   *
   * NOTE: Theme restrict. You must config spacing
   *
   * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
   *
   * minH1 is `min-height: 20px`
   */
  minH1?: boolean

  /**
   * Set min-height
   *
   * NOTE: Theme restrict. You must config spacing
   *
   * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
   *
   * minH2 is `min-height: 30px`
   */
  minH2?: boolean

  /**
   * Set min-height
   *
   * NOTE: Theme restrict. You must config spacing
   *
   * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
   *
   * minH3 is `min-height: 40px`
   */
  minH3?: boolean

  /**
   * Set min-height
   *
   * NOTE: Theme restrict. You must config spacing
   *
   * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
   *
   * minH4 is `min-height: 50px`
   */
  minH4?: boolean

  /**
   * Set min-height
   *
   * NOTE: Theme restrict. You must config spacing
   *
   * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
   *
   * minH5 is `min-height: 60px`
   */
  minH5?: boolean

  /**
   * Set min-height
   *
   * NOTE: Theme restrict. You must config spacing
   *
   * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
   *
   * minH6 is `min-height: 70px`
   */
  minH6?: boolean

  /**
   * Set min-height
   *
   * NOTE: Theme restrict. You must config spacing
   *
   * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
   *
   * minH7 is `min-height: 80px`
   */
  minH7?: boolean

  /**
   * Set min-height
   *
   * NOTE: Theme restrict. You must config spacing
   *
   * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
   *
   * minH8 is `min-height: 90px`
   */
  minH8?: boolean

  /**
   * Set min-height
   *
   * NOTE: Theme restrict. You must config spacing
   *
   * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
   *
   * minH9 is `min-height: 100px`
   */
  minH9?: boolean

  /**
   * Set max-height
   *
   * @example
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

  /**
   * Set max-height
   *
   * NOTE: Theme restrict. You must config spacing
   *
   * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
   *
   * maxH0 is `max-height: 10px`
   */
  maxH0?: boolean

  /**
   * Set max-height
   *
   * NOTE: Theme restrict. You must config spacing
   *
   * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
   *
   * maxH1 is `max-height: 20px`
   */
  maxH1?: boolean

  /**
   * Set max-height
   *
   * NOTE: Theme restrict. You must config spacing
   *
   * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
   *
   * maxH2 is `max-height: 30px`
   */
  maxH2?: boolean

  /**
   * Set max-height
   *
   * NOTE: Theme restrict. You must config spacing
   *
   * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
   *
   * maxH3 is `max-height: 40px`
   */
  maxH3?: boolean

  /**
   * Set max-height
   *
   * NOTE: Theme restrict. You must config spacing
   *
   * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
   *
   * maxH4 is `max-height: 50px`
   */
  maxH4?: boolean

  /**
   * Set max-height
   *
   * NOTE: Theme restrict. You must config spacing
   *
   * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
   *
   * maxH5 is `max-height: 60px`
   */
  maxH5?: boolean

  /**
   * Set max-height
   *
   * NOTE: Theme restrict. You must config spacing
   *
   * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
   *
   * maxH6 is `max-height: 70px`
   */
  maxH6?: boolean

  /**
   * Set max-height
   *
   * NOTE: Theme restrict. You must config spacing
   *
   * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
   *
   * maxH7 is `max-height: 80px`
   */
  maxH7?: boolean

  /**
   * Set max-height
   *
   * NOTE: Theme restrict. You must config spacing
   *
   * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
   *
   * maxH8 is `max-height: 90px`
   */
  maxH8?: boolean

  /**
   * Set max-height
   *
   * NOTE: Theme restrict. You must config spacing
   *
   * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
   *
   * maxH9 is `max-height: 100px`
   */
  maxH9?: boolean
}
