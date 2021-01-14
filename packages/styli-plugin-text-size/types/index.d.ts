import { StyliPlugin } from '@styli/types'

declare const _default: () => StyliPlugin
export default _default

declare module '@styli/types' {
  export interface AtomicProps {
    /**
     * Set fontSize
     *
     * @example
     * ```tsx
     * <View f-10></View>
     * <View f={10}></View>
     * <View f-10rem></View>
     * <View f="10rem"></View>
     * ```
     */
    f?: PropValue

    /**
     * Set fontSize
     *
     * NOTE: Theme restrict. You must config fontSizes
     *
     * if fontSizes is [10, 20, 30, 40, 50, 60, 70, 80]
     *
     * f1 is `font-size: 10px`
     */
    f1?: boolean

    /**
     * Set fontSize
     *
     * NOTE: Theme restrict. You must config fontSizes
     *
     * if fontSizes is [10, 20, 30, 40, 50, 60, 70, 80]
     *
     * f2 is `font-size: 20px`
     */
    f2?: boolean

    /**
     * Set fontSize
     *
     * NOTE: Theme restrict. You must config fontSizes
     *
     * if fontSizes is [10, 20, 30, 40, 50, 60, 70, 80]
     *
     * f3 is `font-size: 30px`
     */
    f3?: boolean

    /**
     * Set fontSize
     *
     * NOTE: Theme restrict. You must config fontSizes
     *
     * if fontSizes is [10, 20, 30, 40, 50, 60, 70, 80]
     *
     * f4 is `font-size: 40px`
     */
    f4?: boolean

    /**
     * Set fontSize
     *
     * NOTE: Theme restrict. You must config fontSizes
     *
     * if fontSizes is [10, 20, 30, 40, 50, 60, 70, 80]
     *
     * f5 is `font-size: 50px`
     */
    f5?: boolean

    /**
     * Set fontSize
     *
     * NOTE: Theme restrict. You must config fontSizes
     *
     * if fontSizes is [10, 20, 30, 40, 50, 60, 70, 80]
     *
     * f6 is `font-size: 60px`
     */
    f6?: boolean

    /**
     * Set fontSize
     *
     * NOTE: Theme restrict. You must config fontSizes
     *
     * if fontSizes is [10, 20, 30, 40, 50, 60, 70, 80]
     *
     * f7 is `font-size: 70px`
     */
    f7?: boolean

    /**
     * Set fontSize
     *
     * NOTE: Theme restrict. You must config fontSizes
     *
     * if fontSizes is [10, 20, 30, 40, 50, 60, 70, 80]
     *
     * f8 is `font-size: 80px`
     */
    f8?: boolean
  }
}
