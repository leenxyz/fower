import { FowerPlugin } from '@fower/types'

declare const _default: () => FowerPlugin
export default _default

declare module '@fower/types' {
  export interface AtomicProps {
    /**
     * Set lineHeight
     *
     * @example
     * ```tsx
     * <Box leading-10></Box>
     * <Box leading="10px"></Box>
     * ```
     */
    leading?: PropValue

    /**
     * Set lineHeight
     *
     * NOTE: Theme restrict.
     *
     * @example
     * ```tsx
     * <Box leadingNone></Box>
     * ```
     */
    leadingNone?: boolean

    /**
     * Set lineHeight
     *
     * NOTE: Theme restrict.
     *
     * @example
     * ```tsx
     * <Box leadingTight></Box>
     * ```
     */
    leadingTight?: boolean

    /**
     * Set lineHeight
     *
     * NOTE: Theme restrict.
     *
     * @example
     * ```tsx
     * <Box leadingSnug></Box>
     * ```
     */
    leadingSnug?: boolean

    /**
     * Set lineHeight
     *
     * NOTE: Theme restrict.
     *
     * @example
     * ```tsx
     * <Box leadingNormal></Box>
     * ```
     */
    leadingNormal?: boolean

    /**
     * Set lineHeight
     *
     * NOTE: Theme restrict.
     *
     * @example
     * ```tsx
     * <Box leadingRelaxed></Box>
     * ```
     */
    leadingRelaxed?: boolean

    /**
     * Set lineHeight
     *
     * NOTE: Theme restrict.
     *
     * @example
     * ```tsx
     * <Box leadingLoose></Box>
     * ```
     */
    leadingLoose?: boolean
  }
}
