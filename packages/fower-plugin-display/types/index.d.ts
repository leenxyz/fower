import { FowerPlugin, ResponsiveValue, ResponsiveBoolean } from "@fower/core"
import * as CSS from 'csstype'
declare const _default: () => FowerPlugin
export default _default

declare module '@fower/atomic-props' {
  export interface AtomicProps {
    /**
     * Set display to some value
     * ```css
     * { display: $value }
     * ```
     * @example
     * ```
     * <Box display="block"></Box>
     * <Box display="flex"></Box>
     * <Box display="inline-block"></Box>
     * ```
     * @see https://fower.vercel.app/docs/display
     * https://developer.mozilla.org/en-US/docs/Web/CSS/display
     */
    display?: ResponsiveValue<CSS.Property.Display>
    /**
     * Set display to inline
     * ```css
     * { display: inline; }
     * ```
     * @example
     * ```tsx
     * <Box inline></Box>
     * ```
     * @see https://fower.vercel.app/docs/display
     * https://developer.mozilla.org/en-US/docs/Web/CSS/display
     */
    inline?: ResponsiveBoolean
    /**
     * Set display to inline-block
     * ```css
     * { display: inline-block; }
     * ```
     * @example
     * ```tsx
     * <Box inlineBlock></Box>
     * ```
     * @see https://fower.vercel.app/docs/display
     * https://developer.mozilla.org/en-US/docs/Web/CSS/display
     */
    inlineBlock?: ResponsiveBoolean
    /**
     * Set display to inline-flex
     * ```css
     * { display: inline-flex; }
     * ```
     * @example
     * ```tsx
     * <Box inlineFlex></Box>
     * ```
     * @see https://fower.vercel.app/docs/display
     * https://developer.mozilla.org/en-US/docs/Web/CSS/display
     */
    inlineFlex?: ResponsiveBoolean
    /**
     * Set display to inline-grid
     * ```css
     * { display: inline-grid; }
     * ```
     * @example
     * ```tsx
     * <Box inlineGrid></Box>
     * ```
     * @see https://fower.vercel.app/docs/display
     * https://developer.mozilla.org/en-US/docs/Web/CSS/display
     */
    inlineGrid?: ResponsiveBoolean
    /**
     * Set display to block
     * ```css
     * { display: block; }
     * ```
     * @example
     * ```tsx
     * <Box block></Box>
     * ```
     * @see https://fower.vercel.app/docs/display
     * https://developer.mozilla.org/en-US/docs/Web/CSS/display
     */
    block?: ResponsiveBoolean
    /**
     * Set display to grid
     * ```css
     * { display: grid; }
     * ```
     * @example
     * ```tsx
     * <Box grid></Box>
     * ```
     * @see https://fower.vercel.app/docs/display
     * https://developer.mozilla.org/en-US/docs/Web/CSS/display
     */
    grid?: ResponsiveBoolean
    /**
     * Set display to table
     * ```css
     * { display: table; }
     * ```
     * @example
     * ```tsx
     * <Box table></Box>
     * ```
     * @see https://fower.vercel.app/docs/display
     * https://developer.mozilla.org/en-US/docs/Web/CSS/display
     */
    table?: ResponsiveBoolean
    /**
     * Set display to none
     * ```css
     * { display: none; }
     * ```
     * @example
     * ```tsx
     * <Box hidden></Box>
     * ```
     * @see https://fower.vercel.app/docs/display
     * https://developer.mozilla.org/en-US/docs/Web/CSS/display
     */
    hidden?: ResponsiveBoolean
  }
}
