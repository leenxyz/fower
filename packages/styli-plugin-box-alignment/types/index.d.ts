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
     * <Box justifyContent="flex-start"></Box>
     * ```
     */
    justifyContent?: CSS.Property.JustifyContent | false

    /**
     * Set justify-items
     * @See https://developer.mozilla.org/en-US/docs/Web/CSS/justify-items
     * @example
     * ```tsx
     * <Box justifyItems="start"></Box>
     * ```
     */
    justifyItems?: CSS.Property.JustifyItems | false

    /**
     * Set justify-self
     * @See https://developer.mozilla.org/en-US/docs/Web/CSS/justify-self
     * @example
     * ```tsx
     * <Box justifySelf="start"></Box>
     * ```
     */
    justifySelf?: CSS.Property.JustifySelf | false

    /**
     * Set align-items
     * @See https://developer.mozilla.org/en-US/docs/Web/CSS/align-items
     * @example
     * ```tsx
     * <Box alignItems="stretch"></Box>
     * ```
     */
    alignItems?: CSS.Property.AlignItems | false

    /**
     * Set align-content
     *
     * @See https://developer.mozilla.org/en-US/docs/Web/CSS/align-content
     * @example
     * ```tsx
     * <Box alignContent="flex-start"></Box>
     * ```
     */
    alignContent?: CSS.Property.AlignContent | false

    /**
     * Set align-self
     * @See https://developer.mozilla.org/en-US/docs/Web/CSS/align-self
     * @example
     * ```tsx
     * <Box alignSelf="auto"></Box>
     * ```
     */
    alignSelf?: CSS.Property.AlignSelf | false
  }
}
