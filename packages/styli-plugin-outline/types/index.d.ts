import { StyliPlugin } from '@styli/types'

declare const _default: () => StyliPlugin
export default _default

declare module '@styli/types' {
  export interface AtomicProps {
    /**
     * Set outline
     *
     * @example
     * ```tsx
     * <View outline></View>
     * <View outline="dashed red;"></View>
     * ```
     */
    outline?: PropValue

    /**
     * Set outline to none
     *
     * @example
     * ```tsx
     * <View outlineNone></View>
     * ```
     */
    outlineNone?: boolean

    /**
     * Set outlineOffset
     *
     * @example
     * ```tsx
     * <View outlineOffset="0.2em"></View>
     * ```
     */
    outlineOffset?: PropValue
  }
}
