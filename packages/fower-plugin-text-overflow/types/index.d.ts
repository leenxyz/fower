import { FowerPlugin, ResponsiveBoolean } from '@fower/core'

declare const _default: () => FowerPlugin
export default _default

declare module '@fower/atomic-props' {
  export interface AtomicProps {
    /**
     * text trancate
     *
     * @example
     * ```css
     * {
     *   overflow: hidden;
     *   text-overflow: ellipsis;
     *   white-space: nowrap;
     * }
     * ```
     *
     * ```tsx
     * <Box truncate></Box>
     * ```
     */
    truncate?: ResponsiveBoolean

    /**
     * set text-overflow to ellipsis
     *
     * ```css
     * {
     *   text-overflow: ellipsis;
     * }
     * ```
     *
     * @example
     * ```tsx
     * <Box overflowEllipsis></Box>
     * ```
     */
    overflowEllipsis?: ResponsiveBoolean

    /**
     * set text-overflow to clip
     *
     * ```css
     * {
     *   text-overflow: clip;
     * }
     * ```
     * @example
     * ```tsx
     * <Box overflowClip></Box>
     * ```
     */
    overflowClip?: ResponsiveBoolean
  }
}
