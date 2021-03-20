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
     * <View visibility="hidden">Hello world</View>
     * ```
     */
    visibility: CSS.Property.Visibility | CSS.Property.Visibility[] | boolean
  }
}
