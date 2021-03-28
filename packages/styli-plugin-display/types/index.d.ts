import { StyliPlugin } from '@styli/types'
import * as CSS from 'csstype'

declare const _default: () => StyliPlugin
export default _default

declare module '@styli/types' {
  export interface AtomicProps {
    /**
     * Set display
     *
     * @example
     * ```tsx
     * <View display="block"></View>
     * <View display="flex"></View>
     * <View display="inline-block"></View>
     * ```
     */
    display?: CSS.Property.Display

    /**
     * Set display to inline
     *
     * @example
     * ```tsx
     * <View inline></View>
     * ```
     */
    inline?: boolean

    /**
     * Set display to inline-block
     *
     * @example
     * ```tsx
     * <View inlineBlock></View>
     * ```
     */
    inlineBlock?: boolean

    /**
     * Set display to inline-flex
     *
     * @example
     * ```tsx
     * <View inlineFlex></View>
     * ```
     */
    inlineFlex?: boolean

    /**
     * Set display to block
     *
     * @example
     * ```tsx
     * <View block></View>
     * ```
     */
    block?: boolean

    /**
     * Set display to flex
     *
     * @example
     * ```tsx
     * <View displayFlex></View>
     * ```
     */
    displayFlex?: boolean

    /**
     * Set display to grid
     *
     * @example
     * ```tsx
     * <View grid></View>
     * ```
     */
    grid?: boolean

    /**
     * Set display to none
     *
     * @example
     * ```tsx
     * <View hidden></View>
     * ```
     */
    hidden?: boolean

    /**
     * Set display to table
     *
     * @example
     * ```tsx
     * <View table></View>
     * ```
     */
    table?: boolean
  }
}
