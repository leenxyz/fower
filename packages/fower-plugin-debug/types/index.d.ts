import { FowerPlugin, ResponsiveBoolean } from '@fower/core'

declare const _default: () => FowerPlugin
export default _default

declare module '@fower/atomic-props' {
  export interface AtomicProps {
    /**
     * debug self
     *
     * Fower will auto add border to self element.
     *
     * @example
     * ```tsx
     * <Box debug></Box>
     * ```
     */
    debug?: ResponsiveBoolean

    /**
     * debugChildren
     *
     * Fower will auto add border to children elements
     *
     * @example
     * ```tsx
     * <Box debugChildren></Box>
     * ```
     */
    debugChildren?: ResponsiveBoolean
  }
}
