import { FowerPlugin } from '@fower/types'

declare const _default: () => FowerPlugin
export default _default

declare module '@fower/types' {
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
