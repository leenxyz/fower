import { FowerPlugin, ResponsiveValue, ResponsiveBoolean } from "@fower/core"
declare const _default: () => FowerPlugin
export default _default

declare module '@fower/atomic-props' {
  export interface AtomicProps {
    /**
     * Set text-transform to none
     * ```css
     * { text-transform: none; }
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
     * { text-transform: uppercase; }
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
     * { text-transform: lowercase; }
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
     * { text-transform: capitalize; }
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
