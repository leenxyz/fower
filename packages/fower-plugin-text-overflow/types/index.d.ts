import { FowerPlugin } from '@fower/core'

declare const _default: () => FowerPlugin
export default _default

declare module '@fower/atomic-props' {
  export interface AtomicProps {
    /**
     * @example
     * ```tsx
     * <Box truncate></Box>
     * ```
     */
    truncate?: boolean

    /**
     * @example
     * ```tsx
     * <Box overflowEllipsis></Box>
     * ```
     */
    overflowEllipsis?: boolean

    /**
     * @example
     * ```tsx
     * <Box overflowClip></Box>
     * ```
     */
    overflowClip?: boolean
  }
}
