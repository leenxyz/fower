import { FowerPlugin } from '@fower/core'

declare const _default: () => FowerPlugin
export default _default

declare module '@fower/atomic-props' {
  export interface AtomicProps {
    /**
     * Set list-style-type to none
     *
     * @example
     * ```tsx
     * <Box listNone></Box>
     * ```
     */
    listNone?: boolean

    /**
     * Set list-style-type to disc
     *
     * @example
     * ```tsx
     * <Box listDisc></Box>
     * ```
     */
    listDisc?: boolean

    /**
     * Set list-style-type to decimal
     *
     * @example
     * ```tsx
     * <Box listDecimal></Box>
     * ```
     */
    listDecimal?: boolean
  }
}
