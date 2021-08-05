import { FowerPlugin, ResponsiveBoolean } from '@fower/core'

declare const _default: () => FowerPlugin
export default _default

declare module '@fower/atomic-props' {
  export interface AtomicProps {
    /**
     * Set appearance to none
     * ```css
     * {
     *   appearance: none;
     * }
     * ```
     *
     * @example
     * ```tsx
     * <Box appearanceNone></Box>
     * ```
     */
    appearanceNone?: ResponsiveBoolean
  }
}
