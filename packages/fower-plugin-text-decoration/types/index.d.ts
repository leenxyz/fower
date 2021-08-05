import { FowerPlugin, ResponsiveBoolean, ResponsiveValue } from '@fower/core'
import * as CSS from 'csstype'

declare const _default: () => FowerPlugin
export default _default

declare module '@fower/atomic-props' {
  export interface AtomicProps {
    /**
     * Set textDecoration to underline
     * ```css
     * { text-decoration: underline; }
     * ```
     *
     * @example
     * ```tsx
     * <Box underline></Box>
     * ```
     * @see https://fower.vercel.app/docs/text-decoration
     * https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration
     */
    underline?: ResponsiveBoolean

    /**
     * Set textDecoration to lineThrough
     *
     * ```css
     * { text-decoration: line-through; }
     * ```
     *
     * @example
     * ```tsx
     * <Box lineThrough></Box>
     * ```
     * @see https://fower.vercel.app/docs/text-decoration
     * https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration
     */
    lineThrough?: ResponsiveBoolean

    /**
     * Set textDecoration to none
     *
     * ```css
     * { text-decoration: none; }
     * ```
     *
     * @example
     * ```tsx
     * <Box noUnderline></Box>
     * ```
     * @see https://fower.vercel.app/docs/text-decoration
     * https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration
     */
    noUnderline?: ResponsiveBoolean

    /**
     * Set textDecoration to some value
     *
     * ```css
     * { text-decoration: $value; }
     * ```
     *
     * @example
     * ```tsx
     * <Box textDecoration="overline"></Box>
     * ```
     * @see https://fower.vercel.app/docs/text-decoration
     * https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration
     */
    textDecoration?: ResponsiveValue<CSS.Property.TextDecoration>
  }
}
