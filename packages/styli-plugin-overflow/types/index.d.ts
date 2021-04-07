import { StyliPlugin } from '@styli/types'
import * as CSS from 'csstype'

declare const _default: () => StyliPlugin
export default _default

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
    overflow?: CSS.Property.Overflow | boolean

    /**
     * Set overflowX
     *
     * @example
     * ```tsx
     * <View overflowX="hidden"></View>
     * ```
     */
    overflowX?: CSS.Property.OverflowX | boolean

    /**
     * Set overflowY
     *
     * @example
     * ```tsx
     * <View overflowY="hidden"></View>
     * ```
     */
    overflowY?: CSS.Property.OverflowY | boolean

    overflowAuto?: boolean

    overflowHidden?: boolean

    overflowVisible?: boolean

    overflowScroll?: boolean

    overflowXAuto?: boolean

    overflowYAuto?: boolean

    overflowXHidden?: boolean

    overflowYHidden?: boolean

    overflowXVisible?: boolean

    overflowYVisible?: boolean

    overflowXScroll?: boolean

    overflowYScroll?: boolean
  }
}
