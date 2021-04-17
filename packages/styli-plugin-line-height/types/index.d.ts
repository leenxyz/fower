import { StyliPlugin } from '@styli/types'

declare const _default: () => StyliPlugin
export default _default

declare module '@styli/types' {
  export interface AtomicProps {
    /**
     * Set lineHeight
     *
     * @example
     * ```tsx
     * <Box leading-10></View>
     * <Box leading="10px"></View>
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
     * <Box leadingNone></View>
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
     * <Box leadingTight></View>
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
     * <Box leadingSnug></View>
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
     * <Box leadingNormal></View>
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
     * <Box leadingRelaxed></View>
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
     * <Box leadingLoose></View>
     * ```
     */
    leadingLoose?: boolean
  }
}
