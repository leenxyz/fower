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
     * <View leading-10></View>
     * <View leading="10px"></View>
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
     * <View leadingNone></View>
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
     * <View leadingTight></View>
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
     * <View leadingSnug></View>
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
     * <View leadingNormal></View>
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
     * <View leadingRelaxed></View>
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
     * <View leadingLoose></View>
     * ```
     */
    leadingLoose?: boolean
  }
}
