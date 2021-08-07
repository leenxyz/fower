import { FowerPlugin, ResponsiveValue, ResponsiveBoolean } from "@fower/core"
import * as CSS from 'csstype'
declare const _default: () => FowerPlugin
export default _default

declare module '@fower/atomic-props' {
  export interface AtomicProps {
    /**
     * Set overflow to some value
     * ```css
     * { overflow: $value; }
     * ```
     * @example
     * ```tsx
     * <Box overflow="auto"></Box>
     * ```
     * @see https://fower.vercel.app/docs/overflow
     * https://developer.mozilla.org/en-US/docs/Web/CSS/overflow
     */
    overflow?: ResponsiveValue<CSS.Property.Overflow>
    /**
     * Set overflow-x to some value
     * ```css
     * { overflow-x: $value; }
     * ```
     * @example
     * ```tsx
     * <Box overflowX="auto"></Box>
     * ```
     * @see https://fower.vercel.app/docs/overflow
     * https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-x
     */
    overflowX?: ResponsiveValue<CSS.Property.OverflowX>
    /**
     * Set overflow-y to some value
     * ```css
     * { overflow-y: $value; }
     * ```
     * @example
     * ```tsx
     * <Box overflowY="auto"></Box>
     * ```
     * @see https://fower.vercel.app/docs/overflow
     * https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-y
     */
    overflowY?: ResponsiveValue<CSS.Property.OverflowY>
    /**
     * Set overflow to auto
     * ```css
     * { overflow: auto; }
     * ```
     * @example
     * ```tsx
     * <Box overflowAuto></Box>
     * ```
     * @see https://fower.vercel.app/docs/overflow
     * https://developer.mozilla.org/en-US/docs/Web/CSS/overflow
     */
    overflowAuto?: ResponsiveBoolean
    /**
     * Set overflow to hidden
     * ```css
     * { overflow: hidden; }
     * ```
     * @example
     * ```tsx
     * <Box overflowHidden></Box>
     * ```
     * @see https://fower.vercel.app/docs/overflow
     * https://developer.mozilla.org/en-US/docs/Web/CSS/overflow
     */
    overflowHidden?: ResponsiveBoolean
    /**
     * Set overflow to visible
     * ```css
     * { overflow: visible; }
     * ```
     * @example
     * ```tsx
     * <Box overflowVisible></Box>
     * ```
     * @see https://fower.vercel.app/docs/overflow
     * https://developer.mozilla.org/en-US/docs/Web/CSS/overflow
     */
    overflowVisible?: ResponsiveBoolean
    /**
     * Set overflow to scroll
     * ```css
     * { overflow: scroll; }
     * ```
     * @example
     * ```tsx
     * <Box overflowScroll></Box>
     * ```
     * @see https://fower.vercel.app/docs/overflow
     * https://developer.mozilla.org/en-US/docs/Web/CSS/overflow
     */
    overflowScroll?: ResponsiveBoolean
    /**
     * Set overflow-x to auto
     * ```css
     * { overflow-x: auto; }
     * ```
     * @example
     * ```tsx
     * <Box overflowXAuto></Box>
     * ```
     * @see https://fower.vercel.app/docs/overflow
     * https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-x
     */
    overflowXAuto?: ResponsiveBoolean
    /**
     * Set overflow-x to hidden
     * ```css
     * { overflow-x: hidden; }
     * ```
     * @example
     * ```tsx
     * <Box overflowXHidden></Box>
     * ```
     * @see https://fower.vercel.app/docs/overflow
     * https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-x
     */
    overflowXHidden?: ResponsiveBoolean
    /**
     * Set overflow-x to visible
     * ```css
     * { overflow-x: visible; }
     * ```
     * @example
     * ```tsx
     * <Box overflowXVisible></Box>
     * ```
     * @see https://fower.vercel.app/docs/overflow
     * https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-x
     */
    overflowXVisible?: ResponsiveBoolean
    /**
     * Set overflow-x to scroll
     * ```css
     * { overflow-x: scroll; }
     * ```
     * @example
     * ```tsx
     * <Box overflowXScroll></Box>
     * ```
     * @see https://fower.vercel.app/docs/overflow
     * https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-x
     */
    overflowXScroll?: ResponsiveBoolean
    /**
     * Set overflow-y to auto
     * ```css
     * { overflow-y: auto; }
     * ```
     * @example
     * ```tsx
     * <Box overflowYAuto></Box>
     * ```
     * @see https://fower.vercel.app/docs/overflow
     * https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-y
     */
    overflowYAuto?: ResponsiveBoolean
    /**
     * Set overflow-y to hidden
     * ```css
     * { overflow-y: hidden; }
     * ```
     * @example
     * ```tsx
     * <Box overflowYHidden></Box>
     * ```
     * @see https://fower.vercel.app/docs/overflow
     * https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-y
     */
    overflowYHidden?: ResponsiveBoolean
    /**
     * Set overflow-y to visible
     * ```css
     * { overflow-y: visible; }
     * ```
     * @example
     * ```tsx
     * <Box overflowYVisible></Box>
     * ```
     * @see https://fower.vercel.app/docs/overflow
     * https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-y
     */
    overflowYVisible?: ResponsiveBoolean
    /**
     * Set overflow-y to scroll
     * ```css
     * { overflow-y: scroll; }
     * ```
     * @example
     * ```tsx
     * <Box overflowYScroll></Box>
     * ```
     * @see https://fower.vercel.app/docs/overflow
     * https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-y
     */
    overflowYScroll?: ResponsiveBoolean
  }
}
