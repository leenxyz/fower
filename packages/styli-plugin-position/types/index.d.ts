import { StyliPlugin } from '@styli/types'

declare const _default: () => StyliPlugin
export default _default

declare module '@styli/types' {
  export interface AtomicProps {
    /**
     * Set position to static
     *
     * @example
     * ```tsx
     * <View static></View>
     * ```
     */
    static?: boolean

    /**
     * Set position to fixed
     *
     * @example
     * ```tsx
     * <View fixed></View>
     * ```
     */
    fixed?: boolean

    /**
     * Set position to absolute
     *
     * @example
     * ```tsx
     * <View absolute></View>
     * ```
     */
    absolute?: boolean

    /**
     * Set position to relative
     *
     * @example
     * ```tsx
     * <View relative></View>
     * ```
     */
    relative?: boolean

    /**
     * Set position to sticky
     *
     * @example
     * ```tsx
     * <View sticky></View>
     * ```
     */
    sticky?: boolean

    /**
     * Set top
     *
     * T-10 is `top: 10px`
     *
     * @example
     * ```tsx
     * <View T-0></View>
     * <View T-10px></View>
     * <View T--10rem></View>
     * ```
     */
    T?: boolean | number | string

    /**
     * Set right
     *
     * R-10 is `right: 10px`
     *
     * @example
     * ```tsx
     * <View R-0></View>
     * <View R-10px></View>
     * <View R--10rem></View>
     * ```
     */
    R?: boolean | number | string

    /**
     * Set bottom
     *
     * B-10 is `bottom: 10px`
     *
     * @example
     * ```tsx
     * <View B-0></View>
     * <View B-10px></View>
     * <View B--10rem></View>
     * ```
     */
    B?: boolean | number | string

    /**
     * Set left
     *
     * L-10 is `left: 10px`
     *
     * @example
     * ```tsx
     * <View L-0></View>
     * <View L-10px></View>
     * <View L--10rem></View>
     * ```
     */
    L?: boolean | number | string
  }
}
