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
     * <Box shadow></Box>
     * <Box shadow="0 0 0 1px rgba(0, 0, 0, 0.05)"></Box>
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
     * <Box shadowSM></Box>
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
     * <Box shadowMD></Box>
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
     * <Box shadowLG></Box>
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
     * <Box shadowXL></Box>
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
     * <Box shadow2XL></Box>
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
     * <Box shadowInner></Box>
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
     * <Box shadowOutline></Box>
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
     * <Box shadowNone></Box>
     * ```
     */
    shadowNone?: PropValue
  }
}
