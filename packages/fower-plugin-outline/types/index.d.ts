import { FowerPlugin } from '@fower/types'

declare const _default: () => FowerPlugin
export default _default

declare module '@fower/types' {
  export interface AtomicProps {
    /**
     * Set outline
     *
     * @example
     * ```tsx
     * <Box outline></Box>
     * <Box outline="dashed red;"></Box>
     * ```
     */
    outline?: PropValue

    /**
     * Set outline to none
     *
     * @example
     * ```tsx
     * <Box outlineNone></Box>
     * ```
     */
    outlineNone?: boolean

    /**
     * Set outlineOffset
     *
     * @example
     * ```tsx
     * <Box outlineOffset="0.2em"></Box>
     * ```
     */
    outlineOffset?: PropValue
  }
}
