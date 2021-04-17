import { StyliPlugin } from '@styli/types'
import * as CSS from 'csstype'

declare const _default: () => StyliPlugin
export default _default

declare module '@styli/types' {
  export interface AtomicProps {
    /**
     * Set visibility
     *
     * @example
     * ```tsx
     * <Box visibility="hidden">Hello world</View>
     * ```
     */
    visibility?: CSS.Property.Visibility | boolean

    /**
     * Set visibility visible
     *
     * @example
     * ```tsx
     * <Box visible>Hello world</View>
     * ```
     */
    visible?: boolean

    /**
     * Set visibility hidden
     *
     * @example
     * ```tsx
     * <Box invisible>Hello world</View>
     * ```
     */
    invisible?: boolean
  }
}
