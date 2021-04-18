import { FowerPlugin } from '@fower/types'
import * as CSS from 'csstype'

declare const _default: () => FowerPlugin
export default _default

declare module '@fower/types' {
  export interface AtomicProps {
    /**
     * Set display
     *
     * @example
     * ```tsx
     * <Box display="block"></Box>
     * <Box display="flex"></Box>
     * <Box display="inline-block"></Box>
     * ```
     */
    display?: CSS.Property.Display

    /**
     * Set display to inline
     *
     * @example
     * ```tsx
     * <Box inline></Box>
     * ```
     */
    inline?: boolean

    /**
     * Set display to inline-block
     *
     * @example
     * ```tsx
     * <Box inlineBlock></Box>
     * ```
     */
    inlineBlock?: boolean

    /**
     * Set display to inline-flex
     *
     * @example
     * ```tsx
     * <Box inlineFlex></Box>
     * ```
     */
    inlineFlex?: boolean

    /**
     * Set display to block
     *
     * @example
     * ```tsx
     * <Box block></Box>
     * ```
     */
    block?: boolean

    /**
     * Set display to grid
     *
     * @example
     * ```tsx
     * <Box grid></Box>
     * ```
     */
    grid?: boolean

    /**
     * Set display to none
     *
     * @example
     * ```tsx
     * <Box hidden></Box>
     * ```
     */
    hidden?: boolean

    /**
     * Set display to table
     *
     * @example
     * ```tsx
     * <Box table></Box>
     * ```
     */
    table?: boolean
  }
}
