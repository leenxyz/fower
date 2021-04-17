import { StyliPlugin } from '@styli/types'

declare const _default: () => StyliPlugin
export default _default

declare module '@styli/types' {
  export interface AtomicProps {
    /**
     * debug
     *
     * Styli will auto add border to self element.
     *
     * @example
     * ```tsx
     * <Box debug></Box>
     * ```
     */
    debug?: boolean

    /**
     * debugChildren
     *
     * Styli will auto add border to children elements
     *
     * @example
     * ```tsx
     * <Box debugChildren></Box>
     * ```
     */
    debugChildren?: boolean
  }
}
