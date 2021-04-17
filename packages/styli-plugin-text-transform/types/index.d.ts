import { StyliPlugin } from '@styli/types'

declare const _default: () => StyliPlugin
export default _default

declare module '@styli/types' {
  export interface AtomicProps {
    /**
     * Set textTransform to none
     *
     * @example
     * ```tsx
     * <Box normalcase></Box>
     * ```
     */
    normalcase?: boolean

    /**
     * Set textTransform to uppercase
     *
     * @example
     * ```tsx
     * <Box uppercase></Box>
     * ```
     */
    uppercase?: boolean

    /**
     * Set textTransform to lowercase
     *
     * @example
     * ```tsx
     * <Box lowercase></Box>
     * ```
     */
    lowercase?: boolean

    /**
     * Set textTransform to capitalize
     *
     * @example
     * ```tsx
     * <Box capitalize></Box>
     * ```
     */
    capitalize?: boolean
  }
}
