import { FowerPlugin, FowerColor, ResponsiveValue } from '@fower/core'
import * as CSS from 'csstype'
declare const _default: () => FowerPlugin
export default _default

declare module '@fower/atomic-props' {
  export interface AtomicProps {
    /**
     * Set justify-content to some value
     * ```css
     * { justify-content: $value; }
     * ```
     * @example
     * ```tsx
     * <Box justifyContent="start"></Box>
     * <Box justifyContent="center"></Box>
     * <Box justifyContent="space-between"></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content
     */
    justifyContent?: ResponsiveValue<CSS.Property.justifyContent>
    /**
     * Set justify-items to some value
     * ```css
     * { justify-items: $value; }
     * ```
     * @example
     * ```tsx
     * <Box justifyItems="start"></Box>
     * <Box justifyItems="center"></Box>
     * <Box justifyItems="stretch"></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/justify-items
     */
    justifyItems?: ResponsiveValue<CSS.Property.justifyItems>
    /**
     * Set justify-self to some value
     * ```css
     * { justify-self: $value; }
     * ```
     * @example
     * ```tsx
     * <Box justifySelf="start"></Box>
     * <Box justifySelf="center"></Box>
     * <Box justifySelf="stretch"></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/justify-self
     */
    justifySelf?: ResponsiveValue<CSS.Property.justifySelf>
    /**
     * Set align-items to some value
     * ```css
     * { align-items: $value; }
     * ```
     * @example
     * ```tsx
     * <Box alignItems="start"></Box>
     * <Box alignItems="center"></Box>
     * <Box alignItems="stretch"></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/align-items
     */
    alignItems?: ResponsiveValue<CSS.Property.alignItems>
    /**
     * Set align-content to some value
     * ```css
     * { align-content: $value; }
     * ```
     * @example
     * ```tsx
     * <Box alignContent="start"></Box>
     * <Box alignContent="center"></Box>
     * <Box alignContent="space-between"></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/align-content
     */
    alignContent?: ResponsiveValue<CSS.Property.alignContent>
    /**
     * Set align-self to some value
     * ```css
     * { align-self: $value; }
     * ```
     * @example
     * ```tsx
     * <Box alignSelf="start"></Box>
     * <Box alignSelf="center"></Box>
     * <Box alignSelf="stretch"></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/align-self
     */
    alignSelf?: ResponsiveValue<CSS.Property.alignSelf>
  }
}
