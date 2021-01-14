import { StyliPlugin, CSSObject } from '@styli/types'

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
     * [NOTE]: development mode only. auto remove in production mode
     *
     * @example
     * ```tsx
     * styli.configure({
     *   dev: process.env.NODE_ENV === 'develop'
     * })
     *
     * <View debug></View>
     * ```
     */
    debug?: boolean | CSSObject

    /**
     * debugChildren
     *
     * Styli will auto add border to self and children element
     *
     * debugChildren is `.autoClassName{ border: 1px solid gold, '> *': { border: 1px solid gold } }`
     *
     * [NOTE]: development mode only. auto remove in production mode
     *
     * @example
     * ```tsx
     * styli.configure({
     *   dev: process.env.NODE_ENV === 'develop'
     * })
     *
     * <View debugChildren></View>
     * ```
     */
    debugChildren?: boolean | CSSObject

    /**
     * debugAll
     *
     * Styli will auto add border to all element.
     *
     * debugAll is `*{ border: 1px solid gold }`
     *
     * [NOTE]: development mode only. auto remove in production mode
     *
     * @example
     * ```tsx
     * styli.configure({
     *   dev: process.env.NODE_ENV === 'develop'
     * })
     *
     * <View debugAll></View>
     * ```
     */
    debugAll?: boolean | CSSObject
  }
}
