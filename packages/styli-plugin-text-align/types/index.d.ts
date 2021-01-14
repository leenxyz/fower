import { StyliPlugin } from '@styli/types'

declare const _default: () => StyliPlugin
export default _default

declare module '@styli/types' {
  export interface AtomicProps {
    /**
     * Set textAlign
     *
     * @example
     * ```tsx
     * <View textAlign="center"></View>
     * ```
     */
    textAlign?: string | string[]

    /**
     * Set textAlign to left
     *
     * textLeft is `text-align: left`
     *
     * @example
     * ```tsx
     * <View textLeft></View>
     * ```
     */
    textLeft?: boolean

    /**
     * Set textAlign to center
     *
     * textCenter is `text-align: center`
     *
     * @example
     * ```tsx
     * <View textCenter></View>
     * ```
     */
    textCenter?: boolean

    /**
     * Set textAlign to right
     *
     * textRight is `text-align: right`
     *
     * @example
     * ```tsx
     * <View textRight></View>
     * ```
     */
    textRight?: boolean

    /**
     * Set textAlign to justify
     *
     * textJustify is `text-align: justify`
     *
     * @example
     * ```tsx
     * <View textJustify></View>
     * ```
     */
    textJustify?: boolean
  }
}
