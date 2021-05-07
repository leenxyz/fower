import { FowerPlugin } from '@fower/types'

declare const _default: () => FowerPlugin
export default _default

declare module '@fower/types' {
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
