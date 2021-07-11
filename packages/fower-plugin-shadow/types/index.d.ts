import { FowerPlugin, PropValue } from '@fower/core'

declare const _default: () => FowerPlugin
export default _default

declare module '@fower/atomic-props' {
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
     * <Box shadowTiny></Box>
     * ```
     */
    shadowTiny?: PropValue

    /**
     * Set shadow
     *
     * NOTE: Theme restrict.
     *
     * @example
     * ```tsx
     * <Box shadowMedium></Box>
     * ```
     */
    shadowMedium?: PropValue

    /**
     * Set shadow
     *
     * NOTE: Theme restrict.
     *
     * @example
     * ```tsx
     * <Box shadowLarge></Box>
     * ```
     */
    shadowLarge?: PropValue

    /**
     * Set shadow
     *
     * NOTE: Theme restrict.
     *
     * @example
     * ```tsx
     * <Box shadowHuge></Box>
     * ```
     */
    shadowHuge?: PropValue

    /**
     * Set shadow
     *
     * NOTE: Theme restrict.
     *
     * @example
     * ```tsx
     * <Box shadowGigantic></Box>
     * ```
     */
    shadowGigantic?: PropValue

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
