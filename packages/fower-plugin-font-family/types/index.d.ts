import { FowerPlugin, ResponsiveValue, ResponsiveBoolean } from "@fower/core"
declare const _default: () => FowerPlugin
export default _default

declare module '@fower/atomic-props' {
  export interface AtomicProps {
    /**
     * Set font-family to sans type
     * @example
     * ```tsx
     * <Box fontSans></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/font-family
     */
    fontSans?: ResponsiveBoolean
    /**
     * Set font-family to serif type
     * @example
     * ```tsx
     * <Box fontSerif></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/font-family
     */
    fontSerif?: ResponsiveBoolean
    /**
     * Set font-family to mono type
     * @example
     * ```tsx
     * <Box fontMono></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/font-family
     */
    fontMono?: ResponsiveBoolean
  }
}
