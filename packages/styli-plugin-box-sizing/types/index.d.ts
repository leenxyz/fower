import { StyliPlugin } from '@styli/types'
import * as CSS from 'csstype'

declare const _default: () => StyliPlugin
export default _default

declare module '@styli/types' {
  export interface AtomicProps {
    /**
     * Set boxSizing
     *
     * ```css
     * { boxSizing: 'content-box' }
     * ```
     *
     * @example
     * ```tsx
     * <View boxSizing="content-box">Hello world</View>
     * ```
     */
    boxSizing: CSS.Property.BoxSizing | CSS.Property.BoxSizing[] | boolean

    /**
     * Set boxSizing to contentBox
     *
     * ```css
     * { boxSizing: 'content-box' }
     * ```
     *
     * @example
     * ```tsx
     * <View contentBox>Hello world</View>
     * ```
     */
    contentBox: boolean

    /**
     * Set boxSizing to borderBox
     *
     * ```css
     * { boxSizing: 'border-box' }
     * ```
     *
     * @example
     * ```tsx
     * <View borderBox>Hello world</View>
     * ```
     */
    borderBox: boolean
  }
}
