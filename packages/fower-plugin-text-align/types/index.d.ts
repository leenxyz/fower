import { FowerPlugin } from '@fower/types'
import * as CSS from 'csstype'

declare const _default: () => FowerPlugin
export default _default

declare module '@fower/types' {
  export interface AtomicProps {
    /**
     * Set textAlign
     *
     * @example
     * ```tsx
     * <Box textAlign="center"></Box>
     * ```
     */
    textAlign?: CSS.Property.TextAlign 

    /**
     * Set textAlign to left
     *
     * textLeft is `text-align: left`
     *
     * @example
     * ```tsx
     * <Box textLeft></Box>
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
     * <Box textCenter></Box>
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
     * <Box textRight></Box>
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
     * <Box textJustify></Box>
     * ```
     */
    textJustify?: boolean
  }
}
