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
     * <Box display="block"></View>
     * <Box display="flex"></View>
     * <Box display="inline-block"></View>
     * ```
     */
    display?: CSS.Property.Display

    /**
     * Set display to inline
     *
     * @example
     * ```tsx
     * <Box inline></View>
     * ```
     */
    inline?: boolean

    /**
     * Set display to inline-block
     *
     * @example
     * ```tsx
     * <Box inlineBlock></View>
     * ```
     */
    inlineBlock?: boolean

    /**
     * Set display to inline-flex
     *
     * @example
     * ```tsx
     * <Box inlineFlex></View>
     * ```
     */
    inlineFlex?: boolean

    /**
     * Set display to block
     *
     * @example
     * ```tsx
     * <Box block></View>
     * ```
     */
    block?: boolean

    /**
     * Set display to grid
     *
     * @example
     * ```tsx
     * <Box grid></View>
     * ```
     */
    grid?: boolean

    /**
     * Set display to none
     *
     * @example
     * ```tsx
     * <Box hidden></View>
     * ```
     */
    hidden?: boolean

    /**
     * Set display to table
     *
     * @example
     * ```tsx
     * <Box table></View>
     * ```
     */
    table?: boolean
  }
}
