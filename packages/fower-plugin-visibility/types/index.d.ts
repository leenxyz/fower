import { FowerPlugin } from '@fower/types'
import * as CSS from 'csstype'

declare const _default: () => FowerPlugin
export default _default

declare module '@fower/types' {
  export interface AtomicProps {
    /**
     * Set visibility
     *
     * @example
     * ```tsx
     * <Box visibility="hidden">Hello world</Box>
     * ```
     */
    visibility?: CSS.Property.Visibility | boolean

    /**
     * Set visibility visible
     *
     * @example
     * ```tsx
     * <Box visible>Hello world</Box>
     * ```
     */
    visible?: boolean

    /**
     * Set visibility hidden
     *
     * @example
     * ```tsx
     * <Box invisible>Hello world</Box>
     * ```
     */
    invisible?: boolean
  }
}
