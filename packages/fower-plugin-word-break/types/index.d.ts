import { FowerPlugin, ResponsiveBoolean } from '@fower/core'

declare const _default: () => FowerPlugin
export default _default

declare module '@fower/atomic-props' {
  export interface AtomicProps {
    /**
     * Set line breaks to normal
     *
     * @example
     * ```css
     * {
     *   overflow-wrap: normal;
     *   word-break: normal;
     * }
     * ```
     *
     * ```tsx
     * <Box breakNormal></Box>
     * ```
     */
    breakNormal?: ResponsiveBoolean

    /**
     * set overflow-wrap to break-word
     *
     * ```css
     * {
     *   overflow-wrap: break-word;
     * }
     * ```
     *
     * @example
     * ```tsx
     * <Box breakWords></Box>
     * ```
     */
    breakWords?: ResponsiveBoolean

    /**
     * set word-break to break-all
     *
     * ```css
     * {
     *   word-break: break-all;
     * }
     * ```
     * @example
     * ```tsx
     * <Box breakAll></Box>
     * ```
     */
    breakAll?: ResponsiveBoolean
  }
}
