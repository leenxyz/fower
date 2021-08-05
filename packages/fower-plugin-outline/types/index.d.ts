import { FowerPlugin, ResponsiveBoolean, ResponsiveValue } from '@fower/core'

declare const _default: () => FowerPlugin
export default _default

declare module '@fower/atomic-props' {
  export interface AtomicProps {
    /**
     * Set outline
     *
     * @example
     * ```tsx
     * <Box outline></Box>
     * <Box outline="1px dashed red;"></Box>
     * ```
     */
    outline?: ResponsiveValue<string | number>

    /**
     * Set outline to none
     *
     * @example
     * ```tsx
     * <Box outlineNone></Box>
     * ```
     */
    outlineNone?: ResponsiveBoolean

    /**
     * Set outlineOffset
     *
     * @example
     * ```tsx
     * <Box outlineOffset="0.2em"></Box>
     * ```
     */
    outlineOffset?: ResponsiveValue<string | number>
  }
}
