import { StyliPlugin } from '@styli/types'

declare const _default: () => StyliPlugin
export default _default

declare module '@styli/types' {
  export interface AtomicProps {
    /**
     * Set width
     *
     * @example
     * ```tsx
     * <Box w-10></View>
     * <Box w-1rem></View>
     * <Box w-10p></View>
     * <Box w={10}></View>
     * <Box w="10px 4px"></View>
     * <Box w={a + b}></View>
     * ```
     */
    w?: PropValue

    /**
     * Set width
     *
     * NOTE: Theme restrict.

     *
     * w0 is `width: 0px`
     */
    w0?: boolean

    /**
     * Set width
     *
     * NOTE: Theme restrict.
     *
     * w1 is `width: 4px`
     */
    w1?: boolean

    /**
     * Set width
     *
     * NOTE: Theme restrict.
     *
     * w2 is `width: 8px`
     */
    w2?: boolean

    /**
     * Set width
     *
     * NOTE: Theme restrict.

     *
     * w3 is `width: 12px`
     */
    w3?: boolean

    /**
     * Set width
     *
     * NOTE: Theme restrict.

     *
     * w4 is `width: 16px`
     */
    w4?: boolean

    /**
     * Set width
     *
     * NOTE: Theme restrict.

     *
     * w5 is `width: 20px`
     */
    w5?: boolean

    /**
     * Set width
     *
     * NOTE: Theme restrict.

     *
     * w6 is `width: 24px`
     */
    w6?: boolean

    /**
     * Set width
     *
     * NOTE: Theme restrict.

     *
     * w7 is `width: 28px`
     */
    w7?: boolean

    /**
     * Set width
     *
     * NOTE: Theme restrict.

     *
     * w8 is `width: 32px`
     */
    w8?: boolean

    /**
     * Set width
     *
     * NOTE: Theme restrict.

     *
     * w9 is `width: 36px`
     */
    w9?: boolean
    w10?: boolean
    w11?: boolean
    w12?: boolean
    w14?: boolean
    w16?: boolean
    w20?: boolean
    w24?: boolean
    w28?: boolean
    w32?: boolean
    w36?: boolean
    w40?: boolean
    w44?: boolean
    w48?: boolean
    w52?: boolean
    w56?: boolean
    w60?: boolean
    w64?: boolean
    w72?: boolean
    w80?: boolean
    w96?: boolean

    /**
     * Set height
     *
     * @example
     * ```tsx
     * <Box h-10></View>
     * <Box h-1rem></View>
     * <Box h-10p></View>
     * <Box h={10}></View>
     * <Box h="10px 4px"></View>
     * <Box h={a + b}></View>
     * ```
     */
    h?: PropValue

    /**
     * Set height
     *
     * NOTE: Theme restrict.

     *
     * h0 is `height: 0px`
     */
    h0?: boolean

    /**
     * Set height
     *
     * NOTE: Theme restrict.

     *
     * h1 is `height: 4px`
     */
    h1?: boolean

    /**
     * Set height
     *
     * NOTE: Theme restrict.

     *
     * h2 is `height: 8px`
     */
    h2?: boolean

    /**
     * Set height
     *
     * NOTE: Theme restrict.

     *
     * h3 is `height: 12px`
     */
    h3?: boolean

    /**
     * Set height
     *
     * NOTE: Theme restrict.

     *
     * h4 is `height: 16px`
     */
    h4?: boolean

    /**
     * Set height
     *
     * NOTE: Theme restrict.

     *
     * h5 is `height: 20px`
     */
    h5?: boolean

    /**
     * Set height
     *
     * NOTE: Theme restrict.

     *
     * h6 is `height: 24px`
     */
    h6?: boolean

    /**
     * Set height
     *
     * NOTE: Theme restrict.

     *
     * h7 is `height: 28px`
     */
    h7?: boolean

    /**
     * Set height
     *
     * NOTE: Theme restrict.

     *
     * h8 is `height: 32px`
     */
    h8?: boolean

    /**
     * Set height
     *
     * NOTE: Theme restrict.

     *
     * h9 is `height: 36px`
     */
    h9?: boolean
    h10?: boolean
    h11?: boolean
    h12?: boolean
    h14?: boolean
    h16?: boolean
    h20?: boolean
    h24?: boolean
    h28?: boolean
    h32?: boolean
    h36?: boolean
    h40?: boolean
    h44?: boolean
    h48?: boolean
    h52?: boolean
    h56?: boolean
    h60?: boolean
    h64?: boolean
    h72?: boolean
    h80?: boolean
    h96?: boolean

    /**
     * Set square size
     *
     * square-10 is `width: 10px; height: 10px;`
     *
     * @example
     * ```tsx
     * <Box square-10></View>
     * <Box square-1rem></View>
     * <Box square-10p></View>
     * <Box square={a + b}></View>
     * ```
     */
    square?: PropValue

    /**
     * Set size
     *
     * NOTE: Theme restrict.

     *
     * s0 is `width: 0px; height: 0px`
     */
    square0?: boolean

    /**
     * Set size
     *
     * NOTE: Theme restrict.

     *
     * s1 is `width:4px; height: 4px`
     */
    square1?: boolean

    /**
     * Set size
     *
     * NOTE: Theme restrict.

     *
     * s2 is `width:8px; height: 8px`
     */
    square2?: boolean

    /**
     * Set size
     *
     * NOTE: Theme restrict.

     *
     * s3 is `width:12px; height: 12px`
     */
    square3?: boolean

    /**
     * Set size
     *
     * NOTE: Theme restrict.

     *
     * s4 is `width:16px; height: 16px`
     */
    square4?: boolean

    /**
     * Set size
     *
     * NOTE: Theme restrict.

     *
     * s5 is `width:20px; height: 20px`
     */
    square5?: boolean

    /**
     * Set size
     *
     * NOTE: Theme restrict.

     *
     * s6 is `width:24px; height: 24px`
     */
    square6?: boolean

    /**
     * Set size
     *
     * NOTE: Theme restrict.

     *
     * s7 is `width:28px; height: 28px`
     */
    square7?: boolean

    /**
     * Set size
     *
     * NOTE: Theme restrict.

     *
     * s8 is `width:32px; height: 32px`
     */
    square8?: boolean

    /**
     * Set size
     *
     * NOTE: Theme restrict.

     *
     * s9 is `width:36px; height: 36px`
     */
    square9?: boolean
    square10?: boolean
    square11?: boolean
    square12?: boolean
    square14?: boolean
    square16?: boolean
    square20?: boolean
    square24?: boolean
    square28?: boolean
    square32?: boolean
    square36?: boolean
    square40?: boolean
    square44?: boolean
    square48?: boolean
    square52?: boolean
    square56?: boolean
    square60?: boolean
    square64?: boolean
    square72?: boolean
    square80?: boolean
    square96?: boolean

    /**
     * Set circle
     *
     * circle-10 is `width: 10px; height: 10px; border-radius: 10px`
     *
     * @example
     * ```tsx
     * <Box circle-10></View>
     * <Box circle-1rem></View>
     * <Box circle-10p></View>
     * <Box circle={a + b}></View>
     * ```
     */
    circle?: PropValue

    /**
     * Set circle
     *
     * NOTE: Theme restrict.

     *
     * circle0 is `width: 0px; height: 0px; border-radius: 0px`
     */
    circle0?: boolean

    /**
     * Set circle
     *
     * NOTE: Theme restrict.

     *
     * circle1 is `width:4px; height: 4px; border-radius: 4px`
     */
    circle1?: boolean

    /**
     * Set circle
     *
     * NOTE: Theme restrict.

     *
     * circle2 is `width:8px; height: 8px; border-radius: 8px`
     */
    circle2?: boolean

    /**
     * Set circle
     *
     * NOTE: Theme restrict.

     *
     * circle3 is `width:12px; height: 12px; border-radius: 12px`
     */
    circle3?: boolean

    /**
     * Set circle
     *
     * NOTE: Theme restrict.

     *
     * circle4 is `width:16px; height: 16px; border-radius: 16px`
     */
    circle4?: boolean

    /**
     * Set circle
     *
     * NOTE: Theme restrict.

     *
     * circle5 is `width:20px; height: 20px; border-radius: 20px`
     */
    circle5?: boolean
    /**
     * Set circle
     *
     * NOTE: Theme restrict.

     *
     * circle6 is `width:24px; height: 24px; border-radius: 24px`
     */
    circle6?: boolean

    /**
     * Set circle
     *
     * NOTE: Theme restrict.

     *
     * circle7 is `width:28px; height: 28px; border-radius: 28px`
     */
    circle7?: boolean

    /**
     * Set circle
     *
     * NOTE: Theme restrict.

     *
     * circle8 is `width:32px; height: 32px; border-radius: 32px`
     */
    circle8?: boolean

    /**
     * Set circle
     *
     * NOTE: Theme restrict.

     *
     * circle9 is `width:36px; height: 36px; border-radius: 36px`
     */
    circle9?: boolean

    circle10?: boolean
    circle11?: boolean
    circle12?: boolean
    circle14?: boolean
    circle16?: boolean
    circle20?: boolean
    circle24?: boolean
    circle28?: boolean
    circle32?: boolean
    circle36?: boolean
    circle40?: boolean
    circle44?: boolean
    circle48?: boolean
    circle52?: boolean
    circle56?: boolean
    circle60?: boolean
    circle64?: boolean
    circle72?: boolean
    circle80?: boolean
    circle96?: boolean

    /**
     * Set minWidth
     *
     * @example
     * ```tsx
     * <Box minW-10></View>
     * <Box minW-1rem></View>
     * <Box minW-10p></View>
     * <Box minW={10}></View>
     * <Box minW="10px 4px"></View>
     * <Box minW={a + b}></View>
     * ```
     */
    minW?: PropValue

    /**
     * Set minWidth
     *
     * NOTE: Theme restrict.

     *
     * minW0 is `min-width: 0px`
     */
    minW0?: boolean

    /**
     * Set minWidth
     *
     * NOTE: Theme restrict.

     *
     * minW1 is `min-width:4px`
     */
    minW1?: boolean

    /**
     * Set minWidth
     *
     * NOTE: Theme restrict.

     *
     * minW2 is `min-width:8px`
     */
    minW2?: boolean

    /**
     * Set minWidth
     *
     * NOTE: Theme restrict.

     *
     * minW3 is `min-width:12px`
     */
    minW3?: boolean

    /**
     * Set minWidth
     *
     * NOTE: Theme restrict.

     *
     * minW4 is `min-width:16px`
     */
    minW4?: boolean

    /**
     * Set minWidth
     *
     * NOTE: Theme restrict.

     *
     * minW5 is `min-width:20px`
     */
    minW5?: boolean

    /**
     * Set minWidth
     *
     * NOTE: Theme restrict.

     *
     * minW6 is `min-width:24px`
     */
    minW6?: boolean

    /**
     * Set minWidth
     *
     * NOTE: Theme restrict.

     *
     * minW7 is `min-width:28px`
     */
    minW7?: boolean

    /**
     * Set minWidth
     *
     * NOTE: Theme restrict.

     *
     * minW8 is `min-width:32px`
     */
    minW8?: boolean

    /**
     * Set minWidth
     *
     * NOTE: Theme restrict.

     *
     * minW9 is `min-width:36px`
     */
    minW9?: boolean
    minW10?: boolean
    minW11?: boolean
    minW12?: boolean
    minW14?: boolean
    minW16?: boolean
    minW20?: boolean
    minW24?: boolean
    minW28?: boolean
    minW32?: boolean
    minW36?: boolean
    minW40?: boolean
    minW44?: boolean
    minW48?: boolean
    minW52?: boolean
    minW56?: boolean
    minW60?: boolean
    minW64?: boolean
    minW72?: boolean
    minW80?: boolean
    minW96?: boolean

    /**
     * Set maxHeight
     *
     * @example
     * ```tsx
     * <Box maxW-10></View>
     * <Box maxW-1rem></View>
     * <Box maxW-10p></View>
     * <Box maxW={10}></View>
     * <Box maxW="10px 4px"></View>
     * <Box maxW={a + b}></View>
     * ```
     */
    maxW?: PropValue

    /**
     * Set maxWidth
     *
     * NOTE: Theme restrict.

     *
     * maxW0 is `max-width: 0px`
     */
    maxW0?: boolean

    /**
     * Set maxWidth
     *
     * NOTE: Theme restrict.

     *
     * maxW1 is `max-width: 4px`
     */
    maxW1?: boolean

    /**
     * Set maxWidth
     *
     * NOTE: Theme restrict.

     *
     * maxW2 is `max-width: 8px`
     */
    maxW2?: boolean

    /**
     * Set maxWidth
     *
     * NOTE: Theme restrict.

     *
     * maxW3 is `max-width: 12px`
     */
    maxW3?: boolean

    /**
     * Set maxWidth
     *
     * NOTE: Theme restrict.

     *
     * maxW4 is `max-width: 16px`
     */
    maxW4?: boolean

    /**
     * Set maxWidth
     *
     * NOTE: Theme restrict.

     *
     * maxW5 is `max-width: 20px`
     */
    maxW5?: boolean

    /**
     * Set maxWidth
     *
     * NOTE: Theme restrict.

     *
     * maxW6 is `max-width: 24px`
     */
    maxW6?: boolean

    /**
     * Set maxWidth
     *
     * NOTE: Theme restrict.

     *
     * maxW7 is `max-width: 28px`
     */
    maxW7?: boolean

    /**
     * Set maxWidth
     *
     * NOTE: Theme restrict.

     *
     * maxW8 is `max-width: 32px`
     */
    maxW8?: boolean

    /**
     * Set maxWidth
     *
     * NOTE: Theme restrict.

     *
     * maxW9 is `max-width: 36px`
     */
    maxW9?: boolean
    maxW10?: boolean
    maxW11?: boolean
    maxW12?: boolean
    maxW14?: boolean
    maxW16?: boolean
    maxW20?: boolean
    maxW24?: boolean
    maxW28?: boolean
    maxW32?: boolean
    maxW36?: boolean
    maxW40?: boolean
    maxW44?: boolean
    maxW48?: boolean
    maxW52?: boolean
    maxW56?: boolean
    maxW60?: boolean
    maxW64?: boolean
    maxW72?: boolean
    maxW80?: boolean
    maxW96?: boolean

    /**
     * Set min-height
     *
     * @example
     * ```tsx
     * <Box minH-10></View>
     * <Box minH-1rem></View>
     * <Box minH-10p></View>
     * <Box minH={10}></View>
     * <Box minH="10px 4px"></View>
     * <Box minH={a + b}></View>
     * ```
     */
    minH?: PropValue

    /**
     * Set min-height
     *
     * NOTE: Theme restrict.

     *
     * minH0 is `min-height: 0px`
     */
    minH0?: boolean

    /**
     * Set min-height
     *
     * NOTE: Theme restrict.

     *
     * minH1 is `min-height: 4px`
     */
    minH1?: boolean

    /**
     * Set min-height
     *
     * NOTE: Theme restrict.

     *
     * minH2 is `min-height: 8px`
     */
    minH2?: boolean

    /**
     * Set min-height
     *
     * NOTE: Theme restrict.

     *
     * minH3 is `min-height: 12px`
     */
    minH3?: boolean

    /**
     * Set min-height
     *
     * NOTE: Theme restrict.

     *
     * minH4 is `min-height: 16px`
     */
    minH4?: boolean

    /**
     * Set min-height
     *
     * NOTE: Theme restrict.

     *
     * minH5 is `min-height: 20px`
     */
    minH5?: boolean

    /**
     * Set min-height
     *
     * NOTE: Theme restrict.

     *
     * minH6 is `min-height: 24px`
     */
    minH6?: boolean

    /**
     * Set min-height
     *
     * NOTE: Theme restrict.

     *
     * minH7 is `min-height: 28px`
     */
    minH7?: boolean

    /**
     * Set min-height
     *
     * NOTE: Theme restrict.

     *
     * minH8 is `min-height: 32px`
     */
    minH8?: boolean

    /**
     * Set min-height
     *
     * NOTE: Theme restrict.

     *
     * minH9 is `min-height: 36px`
     */
    minH9?: boolean
    minH10?: boolean
    minH11?: boolean
    minH12?: boolean
    minH14?: boolean
    minH16?: boolean
    minH20?: boolean
    minH24?: boolean
    minH28?: boolean
    minH32?: boolean
    minH36?: boolean
    minH40?: boolean
    minH44?: boolean
    minH48?: boolean
    minH52?: boolean
    minH56?: boolean
    minH60?: boolean
    minH64?: boolean
    minH72?: boolean
    minH80?: boolean
    minH96?: boolean

    /**
     * Set max-height
     *
     * @example
     * ```tsx
     * <Box maxH-10></View>
     * <Box maxH-1rem></View>
     * <Box maxH-10p></View>
     * <Box maxH={10}></View>
     * <Box maxH="10px 4px"></View>
     * <Box maxH={a + b}></View>
     * ```
     */
    maxH?: PropValue

    /**
     * Set max-height
     *
     * NOTE: Theme restrict.

     *
     * maxH0 is `max-height: 0px`
     */
    maxH0?: boolean

    /**
     * Set max-height
     *
     * NOTE: Theme restrict.

     *
     * maxH1 is `max-height: 4px`
     */
    maxH1?: boolean

    /**
     * Set max-height
     *
     * NOTE: Theme restrict.

     *
     * maxH2 is `max-height: 8px`
     */
    maxH2?: boolean

    /**
     * Set max-height
     *
     * NOTE: Theme restrict.

     *
     * maxH3 is `max-height: 12px`
     */
    maxH3?: boolean

    /**
     * Set max-height
     *
     * NOTE: Theme restrict.

     *
     * maxH4 is `max-height: 16px`
     */
    maxH4?: boolean

    /**
     * Set max-height
     *
     * NOTE: Theme restrict.

     *
     * maxH5 is `max-height: 20px`
     */
    maxH5?: boolean

    /**
     * Set max-height
     *
     * NOTE: Theme restrict.

     *
     * maxH6 is `max-height: 24px`
     */
    maxH6?: boolean

    /**
     * Set max-height
     *
     * NOTE: Theme restrict.

     *
     * maxH7 is `max-height: 28px`
     */
    maxH7?: boolean

    /**
     * Set max-height
     *
     * NOTE: Theme restrict.

     *
     * maxH8 is `max-height: 32px`
     */
    maxH8?: boolean

    /**
     * Set max-height
     *
     * NOTE: Theme restrict.

     *
     * maxH9 is `max-height: 36px`
     */
    maxH9?: boolean
    maxH10?: boolean
    maxH11?: boolean
    maxH12?: boolean
    maxH14?: boolean
    maxH16?: boolean
    maxH20?: boolean
    maxH24?: boolean
    maxH28?: boolean
    maxH32?: boolean
    maxH36?: boolean
    maxH40?: boolean
    maxH44?: boolean
    maxH48?: boolean
    maxH52?: boolean
    maxH56?: boolean
    maxH60?: boolean
    maxH64?: boolean
    maxH72?: boolean
    maxH80?: boolean
    maxH96?: boolean
  }
}
