import { StyliPlugin } from '@styli/types'

declare const _default: () => StyliPlugin
export default _default

declare module '@styli/types' {
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
