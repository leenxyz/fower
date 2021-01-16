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
     * <View lh-10></View>
     * <View lh="10px"></View>
     * ```
     */
    lh?: PropValue

    /**
     * Set lineHeight
     *
     * NOTE: Theme restrict.
     *
     * @example
     * ```tsx
     * <View lhNone></View>
     * ```
     */
    lhNone?: boolean

    /**
     * Set lineHeight
     *
     * NOTE: Theme restrict.
     *
     * @example
     * ```tsx
     * <View lhTight></View>
     * ```
     */
    lhTight?: boolean

    /**
     * Set lineHeight
     *
     * NOTE: Theme restrict.
     *
     * @example
     * ```tsx
     * <View lhSnug></View>
     * ```
     */
    lhSnug?: boolean

    /**
     * Set lineHeight
     *
     * NOTE: Theme restrict.
     *
     * @example
     * ```tsx
     * <View lhNormal></View>
     * ```
     */
    lhNormal?: boolean

    /**
     * Set lineHeight
     *
     * NOTE: Theme restrict.
     *
     * @example
     * ```tsx
     * <View lhRelaxed></View>
     * ```
     */
    lhRelaxed?: boolean

    /**
     * Set lineHeight
     *
     * NOTE: Theme restrict.
     *
     * @example
     * ```tsx
     * <View lhLoose></View>
     * ```
     */
    lhLoose?: boolean
  }
}
