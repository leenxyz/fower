import { StyliPlugin } from '@styli/types'

declare const _default: () => StyliPlugin
export default _default

declare module '@styli/types' {
  export interface AtomicProps {
    /**
     * Set textTransform to none
     *
     * normalcase is `text-transform: none`
     *
     * @example
     * ```tsx
     * <Box normalcase></View>
     * ```
     */
    normalcase?: boolean

    /**
     * Set textTransform to uppercase
     *
     * uppercase is `text-transform: uppercase`
     *
     * @example
     * ```tsx
     * <Box uppercase></View>
     * ```
     */
    uppercase?: boolean

    /**
     * Set textTransform to lowercase
     *
     * lowercase is `text-transform: lowercase`
     *
     * @example
     * ```tsx
     * <Box lowercase></View>
     * ```
     */
    lowercase?: boolean

    /**
     * Set textTransform to capitalize
     *
     * capitalize is `text-transform: capitalize`
     *
     * @example
     * ```tsx
     * <Box capitalize></View>
     * ```
     */
    capitalize?: boolean
  }
}
