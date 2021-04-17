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
     * debug is `.autoClassName{ border: 1px solid gold }`
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
     * Styli will auto add border to self and children elements
     *
     * debugChildren is `.autoClassName{ border: 1px solid gold, '*': { border: 1px solid gold } }`
     *
     * @example
     * ```tsx
     * <Box debugChildren></Box>
     * ```
     */
    debugChildren?: boolean
  }
}
