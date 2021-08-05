import { FowerPlugin, ResponsiveValue, ResponsiveBoolean } from "@fower/core"
import * as CSS from 'csstype'
declare const _default: () => FowerPlugin
export default _default

declare module '@fower/atomic-props' {
  export interface AtomicProps {
    /**
     * Set box-sizing to some value
     * ```css
     * { box-sizing: $value; }
     * ```
     * @example
     * ```tsx
     * <Box boxSizing="content-box"></Box>
     * <Box boxSizing="border-box"></Box>
     * ```
     * @see https://fower.vercel.app/docs/box-sizing
     * https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing
     */
    boxSizing?: ResponsiveValue<CSS.Property.BoxSizing>
    /**
     * Set box-sizing to content-box
     * ```css
     * { box-sizing: content-box; }
     * ```
     * @example
     * ```tsx
     * <Box boxContent></Box>
     * ```
     * @see https://fower.vercel.app/docs/box-sizing
     * https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing
     */
    boxContent?: ResponsiveBoolean
    /**
     * Set box-sizing to border-box
     * ```css
     * { box-sizing: border-box; }
     * ```
     * @example
     * ```tsx
     * <Box boxBorder></Box>
     * ```
     * @see https://fower.vercel.app/docs/box-sizing
     * https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing
     */
    boxBorder?: ResponsiveBoolean
  }
}
