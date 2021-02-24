import { StyliPlugin, Theme } from '@styli/types'
import * as CSS from 'csstype'

declare const _default: () => StyliPlugin
export default _default

type Overflow = CSS.Property.Overflow | CSS.Property.Overflow[] | boolean

declare module '@styli/types' {
  export interface AtomicProps {
    /**
     * Set overflow
     *
     * @example
     * ```tsx
     * <View overflow="hidden"></View>
     * ```
     */
    overflow?: Overflow

    /**
     * Set overflowX
     *
     * @example
     * ```tsx
     * <View overflowX="hidden"></View>
     * ```
     */
    overflowX?: Overflow

    /**
     * Set overflowY
     *
     * @example
     * ```tsx
     * <View overflowY="hidden"></View>
     * ```
     */
    overflowY?: Overflow
  }
}
