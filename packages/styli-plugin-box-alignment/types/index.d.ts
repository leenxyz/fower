import { StyliPlugin } from '@styli/types'
import * as CSS from 'csstype'

declare const _default: () => StyliPlugin
export default _default

declare module '@styli/types' {
  export interface AtomicProps {
    /**
     * Set justify-content
     * @See https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content
     * @example
     * ```tsx
     * <View justifyContent="flex-start"></View>
     * ```
     */
    justifyContent?: CSS.Property.JustifyContent | CSS.Property.JustifyContent[] | boolean

    /**
     * Set justify-items
     * @See https://developer.mozilla.org/en-US/docs/Web/CSS/justify-items
     * @example
     * ```tsx
     * <View justifyItems="start"></View>
     * ```
     */
    justifyItems?: CSS.Property.JustifyItems | CSS.Property.JustifyItems[] | boolean

    /**
     * Set justify-self
     * @See https://developer.mozilla.org/en-US/docs/Web/CSS/justify-self
     * @example
     * ```tsx
     * <View justifySelf="start"></View>
     * ```
     */
    justifySelf?: CSS.Property.JustifySelf | CSS.Property.JustifySelf[] | boolean

    /**
     * Set align-items
     * @See https://developer.mozilla.org/en-US/docs/Web/CSS/align-items
     * @example
     * ```tsx
     * <View alignItems="stretch"></View>
     * ```
     */
    alignItems?: CSS.Property.AlignItems | CSS.Property.AlignItems[] | boolean

    /**
     * Set align-content
     *
     * @See https://developer.mozilla.org/en-US/docs/Web/CSS/align-content
     * @example
     * ```tsx
     * <View alignContent="flex-start"></View>
     * ```
     */
    alignContent?: CSS.Property.AlignContent | CSS.Property.AlignContent[] | boolean

    /**
     * Set align-self
     * @See https://developer.mozilla.org/en-US/docs/Web/CSS/align-self
     * @example
     * ```tsx
     * <View alignSelf="auto"></View>
     * ```
     */
    alignSelf?: CSS.Property.AlignSelf | CSS.Property.AlignSelf[] | boolean
  }
}
