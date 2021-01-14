import { StyliPlugin } from '@styli/types'

declare const _default: () => StyliPlugin
export default _default

declare module '@styli/types' {
  export interface AtomicProps {
    /**
     * Set shadow
     *
     * NOTE: If you are not provide shadow theme. You must set shadow value.
     *
     * @example
     * ```tsx
     * <View shadow></View>
     * <View shadow="0 0 0 1px rgba(0, 0, 0, 0.05)"></View>
     * ```
     */
    shadow?: PropValue

    /**
     * Set shadow
     *
     * NOTE: Theme restrict. You must config shadow
     *
     * @example
     * ```tsx
     * <View shadowXS></View>
     * ```
     */
    shadowXS?: PropValue

    /**
     * Set shadow
     *
     * NOTE: Theme restrict. You must config shadow
     *
     * @example
     * ```tsx
     * <View shadowSM></View>
     * ```
     */
    shadowSM?: PropValue

    /**
     * Set shadow
     *
     * NOTE: Theme restrict. You must config shadow
     *
     * @example
     * ```tsx
     * <View shadowBase></View>
     * ```
     */
    shadowBase?: PropValue

    /**
     * Set shadow
     *
     * NOTE: Theme restrict. You must config shadow
     *
     * @example
     * ```tsx
     * <View shadowMD></View>
     * ```
     */
    shadowMD?: PropValue

    /**
     * Set shadow
     *
     * NOTE: Theme restrict. You must config shadow
     *
     * @example
     * ```tsx
     * <View shadowLG></View>
     * ```
     */
    shadowLG?: PropValue

    /**
     * Set shadow
     *
     * NOTE: Theme restrict. You must config shadow
     *
     * @example
     * ```tsx
     * <View shadowXL></View>
     * ```
     */
    shadowXL?: PropValue

    /**
     * Set shadow
     *
     * NOTE: Theme restrict. You must config shadow
     *
     * @example
     * ```tsx
     * <View shadowXXL></View>
     * ```
     */
    shadowXXL?: PropValue

    /**
     * Set shadow
     *
     * NOTE: Theme restrict. You must config shadow
     *
     * @example
     * ```tsx
     * <View shadowInner></View>
     * ```
     */
    shadowInner?: PropValue

    /**
     * Set shadow
     *
     * NOTE: Theme restrict. You must config shadow
     *
     * @example
     * ```tsx
     * <View shadowOutline></View>
     * ```
     */
    shadowOutline?: PropValue

    /**
     * Set shadow
     *
     * NOTE: Theme restrict. You must config shadow
     *
     * @example
     * ```tsx
     * <View shadowNone></View>
     * ```
     */
    shadowNone?: PropValue
  }
}
