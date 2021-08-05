import { FowerPlugin, ResponsiveValue, ResponsiveBoolean } from "@fower/core"
import * as CSS from 'csstype'
declare const _default: () => FowerPlugin
export default _default

declare module '@fower/atomic-props' {
  export interface AtomicProps {
    /**
     * set line-height to some value
     * ```css
     * { line-height: $value;}
     * ```
     * @example
     * ```tsx
     * <Box leading={1.5}></Box>
     * <Box leading={2}></Box>
     * ```
     * @see https://fower.vercel.app/docs/line-height
     * https://developer.mozilla.org/en-US/docs/Web/CSS/line-height
     */
    leading?: ResponsiveValue<CSS.Property.LineHeight>
    /**
     * set line-height to none
     * ```css
     * { line-height: 1;}
     * ```
     * @example
     * ```tsx
     * <Box leadingNone></Box>
     * ```
     * @see https://fower.vercel.app/docs/line-height
     * https://developer.mozilla.org/en-US/docs/Web/CSS/line-height
     */
    leadingNone?: ResponsiveBoolean
    /**
     * set line-height to tight
     * ```css
     * { line-height: 1.25;}
     * ```
     * @example
     * ```tsx
     * <Box leadingTight></Box>
     * ```
     * @see https://fower.vercel.app/docs/line-height
     * https://developer.mozilla.org/en-US/docs/Web/CSS/line-height
     */
    leadingTight?: ResponsiveBoolean
    /**
     * set line-height to snug
     * ```css
     * { line-height: 1.375;}
     * ```
     * @example
     * ```tsx
     * <Box leadingSnug></Box>
     * ```
     * @see https://fower.vercel.app/docs/line-height
     * https://developer.mozilla.org/en-US/docs/Web/CSS/line-height
     */
    leadingSnug?: ResponsiveBoolean
    /**
     * set line-height to normal
     * ```css
     * { line-height: 1.5;}
     * ```
     * @example
     * ```tsx
     * <Box leadingNormal></Box>
     * ```
     * @see https://fower.vercel.app/docs/line-height
     * https://developer.mozilla.org/en-US/docs/Web/CSS/line-height
     */
    leadingNormal?: ResponsiveBoolean
    /**
     * set line-height to relaxed
     * ```css
     * { line-height: 1.625;}
     * ```
     * @example
     * ```tsx
     * <Box leadingRelaxed></Box>
     * ```
     * @see https://fower.vercel.app/docs/line-height
     * https://developer.mozilla.org/en-US/docs/Web/CSS/line-height
     */
    leadingRelaxed?: ResponsiveBoolean
    /**
     * set line-height to loose
     * ```css
     * { line-height: 2;}
     * ```
     * @example
     * ```tsx
     * <Box leadingLoose></Box>
     * ```
     * @see https://fower.vercel.app/docs/line-height
     * https://developer.mozilla.org/en-US/docs/Web/CSS/line-height
     */
    leadingLoose?: ResponsiveBoolean
  }
}
