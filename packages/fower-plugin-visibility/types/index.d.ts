import { FowerPlugin, ResponsiveBoolean, ResponsiveValue } from '@fower/core'
import * as CSS from 'csstype'

declare const _default: () => FowerPlugin
export default _default

declare module '@fower/atomic-props' {
  export interface AtomicProps {
    /**
     * Set visibility to some value
     *
     * ```css
     * { visibility: $value; }
     * ```
     *
     * @example
     * ```tsx
     * <Box visibility="hidden">Hello world</Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/visibility
     */
    visibility?: ResponsiveValue<CSS.Property.Visibility>

    /**
     * Set visibility to visible
     * ```css
     * { visibility: visible; }
     * ```
     *
     * @example
     * ```tsx
     * <Box visible>Hello world</Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/visibility
     */
    visible?: ResponsiveBoolean

    /**
     * Set visibility to hidden
     * ```css
     * { visibility: hidden; }
     * ```
     *
     * @example
     * ```tsx
     * <Box invisible>Hello world</Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/visibility
     */
    invisible?: ResponsiveBoolean
  }
}
