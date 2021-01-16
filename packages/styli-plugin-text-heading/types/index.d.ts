import { StyliPlugin } from '@styli/types'

declare const _default: () => StyliPlugin
export default _default

declare module '@styli/types' {
  export interface AtomicProps {
    /**
     * Set heading
     *
     * NOTE: Theme restrict.
     *
     * heading1 is `display: block; font-weight: bold; font-size: {theme}px`
     *
     * @example
     * ```tsx
     * <View heading1></View>
     * ```
     */
    heading1?: boolean

    /**
     * Set heading
     *
     * NOTE: Theme restrict.
     *
     * heading2 is `display: block; font-weight: bold; font-size: {theme}px`
     *
     * @example
     * ```tsx
     * <View heading1></View>
     * ```
     */
    heading2?: boolean

    /**
     * Set heading
     *
     * NOTE: Theme restrict.
     *
     * heading3 is `display: block; font-weight: bold; font-size: {theme}px`
     *
     * @example
     * ```tsx
     * <View heading1></View>
     * ```
     */
    heading3?: boolean

    /**
     * Set heading
     *
     * NOTE: Theme restrict.
     *
     * heading4 is `display: block; font-weight: bold; font-size: {theme}px`
     *
     * @example
     * ```tsx
     * <View heading1></View>
     * ```
     */
    heading4?: boolean

    /**
     * Set heading
     *
     * NOTE: Theme restrict.
     *
     * heading5 is `display: block; font-weight: bold; font-size: {theme}px`
     *
     * @example
     * ```tsx
     * <View heading1></View>
     * ```
     */
    heading5?: boolean

    /**
     * Set heading
     *
     * NOTE: Theme restrict.
     *
     * heading6 is `display: block; font-weight: bold; font-size: {theme}px`
     *
     * @example
     * ```tsx
     * <View heading1></View>
     * ```
     */
    heading6?: boolean
  }
}
