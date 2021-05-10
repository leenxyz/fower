import { FowerPlugin } from '@fower/types'

declare const _default: () => FowerPlugin
export default _default

declare module '@fower/types' {
  export interface AtomicProps {
    /**
     * Set useSelect to none
     *
     * @example
     * ```tsx
     * <Box selectNone></Box>
     * ```
     */
    selectNone?: boolean

    /**
     * Set useSelect to all
     *
     * @example
     * ```tsx
     * <Box selectAll></Box>
     * ```
     */
    selectAll?: boolean

    /**
     * Set useSelect to text
     *
     * @example
     * ```tsx
     * <Box selectText></Box>
     * ```
     */
    selectText?: boolean

    /**
     * Set useSelect to auto
     *
     * @example
     * ```tsx
     * <Box selectAuto></Box>
     * ```
     */
    selectAuto?: boolean
  }
}
