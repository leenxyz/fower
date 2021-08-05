import { FowerPlugin, ResponsiveValue, ResponsiveBoolean } from "@fower/core"
import * as CSS from 'csstype'
declare const _default: () => FowerPlugin
export default _default

declare module '@fower/atomic-props' {
  export interface AtomicProps {
    /**
     * Set text-transform to none
     * ```css
     * { display: none; }
     * ```
     * @example
     * ```tsx
     * <Box normalcase></Box>
     * ```
     * @see https://fower.vercel.app/docs/text-transform
     * https://developer.mozilla.org/en-US/docs/Web/CSS/text-transform
     */
    normalcase?: ResponsiveBoolean
    /**
     * Set text-transform to uppercase
     * ```css
     * { display: uppercase; }
     * ```
     * @example
     * ```tsx
     * <Box uppercase></Box>
     * ```
     * @see https://fower.vercel.app/docs/text-transform
     * https://developer.mozilla.org/en-US/docs/Web/CSS/text-transform
     */
    uppercase?: ResponsiveBoolean
    /**
     * Set text-transform to lowercase
     * ```css
     * { display: lowercase; }
     * ```
     * @example
     * ```tsx
     * <Box lowercase></Box>
     * ```
     * @see https://fower.vercel.app/docs/text-transform
     * https://developer.mozilla.org/en-US/docs/Web/CSS/text-transform
     */
    lowercase?: ResponsiveBoolean
    /**
     * Set text-transform to capitalize
     * ```css
     * { display: capitalize; }
     * ```
     * @example
     * ```tsx
     * <Box capitalize></Box>
     * ```
     * @see https://fower.vercel.app/docs/text-transform
     * https://developer.mozilla.org/en-US/docs/Web/CSS/text-transform
     */
    capitalize?: ResponsiveBoolean
  }
}
