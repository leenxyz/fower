import { FowerPlugin } from '@fower/core'

declare const _default: () => FowerPlugin
export default _default

declare module '@fower/atomic-props' {
  export interface AtomicProps {
    /**
     * Set textDecoration to underline
     *
     * @example
     * ```tsx
     * <Box underline></Box>
     * ```
     */
    underline?: boolean

    /**
     * Set textDecoration to lineThrough
     *
     * @example
     * ```tsx
     * <Box lineThrough></Box>
     * ```
     */
    lineThrough?: boolean

    /**
     * Set textDecoration to none
     *
     * @example
     * ```tsx
     * <Box noUnderline></Box>
     * ```
     */
    noUnderline?: boolean

    /**
     * Set textDecoration to capitalize
     *
     * @example
     * ```tsx
     * <Box textDecoration="overline"></Box>
     * ```
     */
    textDecoration?: boolean
  }
}
