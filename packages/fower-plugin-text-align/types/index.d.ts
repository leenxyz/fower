import { FowerPlugin, ResponsiveValue, ResponsiveBoolean } from "@fower/core"
import * as CSS from 'csstype'
declare const _default: () => FowerPlugin
export default _default

declare module '@fower/atomic-props' {
  export interface AtomicProps {
    /**
     * Set text-align to some value
     * ```css
     * { text-align: $value; }
     * ```
     * @example
     * ```tsx
     * <Box textAlign="center"></Box>
     * <Box textAlign="right"></Box>
     * ```
     * @see https://fower.vercel.app/docs/text-alignment
     * https://developer.mozilla.org/en-US/docs/Web/CSS/text-align
     */
    textAlign?: ResponsiveValue<CSS.Property.TextAlign>
    /**
     * Set text-align to left
     * ```css
     * { text-align: left; }
     * ```
     * @example
     * ```tsx
     * <Box textLeft></Box>
     * ```
     * @see https://fower.vercel.app/docs/text-alignment
     * https://developer.mozilla.org/en-US/docs/Web/CSS/text-align
     */
    textLeft?: ResponsiveBoolean
    /**
     * Set text-align to center
     * ```css
     * { text-align: center; }
     * ```
     * @example
     * ```tsx
     * <Box textCenter></Box>
     * ```
     * @see https://fower.vercel.app/docs/text-alignment
     * https://developer.mozilla.org/en-US/docs/Web/CSS/text-align
     */
    textCenter?: ResponsiveBoolean
    /**
     * Set text-align to right
     * ```css
     * { text-align: right; }
     * ```
     * @example
     * ```tsx
     * <Box textRight></Box>
     * ```
     * @see https://fower.vercel.app/docs/text-alignment
     * https://developer.mozilla.org/en-US/docs/Web/CSS/text-align
     */
    textRight?: ResponsiveBoolean
    /**
     * Set text-align to justify
     * ```css
     * { text-align: justify; }
     * ```
     * @example
     * ```tsx
     * <Box textJustify></Box>
     * ```
     * @see https://fower.vercel.app/docs/text-alignment
     * https://developer.mozilla.org/en-US/docs/Web/CSS/text-align
     */
    textJustify?: ResponsiveBoolean
  }
}
