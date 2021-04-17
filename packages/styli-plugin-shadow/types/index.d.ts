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
     * <Box shadow></View>
     * <Box shadow="0 0 0 1px rgba(0, 0, 0, 0.05)"></View>
     * ```
     */
    shadow?: PropValue

    /**
     * Set shadow
     *
     * NOTE: Theme restrict.
     *
     * @example
     * ```tsx
     * <Box shadowSM></View>
     * ```
     */
    shadowSM?: PropValue

    /**
     * Set shadow
     *
     * NOTE: Theme restrict.
     *
     * @example
     * ```tsx
     * <Box shadowMD></View>
     * ```
     */
    shadowMD?: PropValue

    /**
     * Set shadow
     *
     * NOTE: Theme restrict.
     *
     * @example
     * ```tsx
     * <Box shadowLG></View>
     * ```
     */
    shadowLG?: PropValue

    /**
     * Set shadow
     *
     * NOTE: Theme restrict.
     *
     * @example
     * ```tsx
     * <Box shadowXL></View>
     * ```
     */
    shadowXL?: PropValue

    /**
     * Set shadow
     *
     * NOTE: Theme restrict.
     *
     * @example
     * ```tsx
     * <Box shadow2XL></View>
     * ```
     */
    shadow2XL?: PropValue

    /**
     * Set shadow
     *
     * NOTE: Theme restrict.
     *
     * @example
     * ```tsx
     * <Box shadowInner></View>
     * ```
     */
    shadowInner?: PropValue

    /**
     * Set shadow
     *
     * NOTE: Theme restrict.
     *
     * @example
     * ```tsx
     * <Box shadowOutline></View>
     * ```
     */
    shadowOutline?: PropValue

    /**
     * Set shadow
     *
     * NOTE: Theme restrict.
     *
     * @example
     * ```tsx
     * <Box shadowNone></View>
     * ```
     */
    shadowNone?: PropValue
  }
}
