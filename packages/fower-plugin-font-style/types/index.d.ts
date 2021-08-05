import { FowerPlugin, ResponsiveBoolean } from '@fower/core'

declare const _default: () => FowerPlugin
export default _default

declare module '@fower/atomic-props' {
  export interface AtomicProps {
    /**
     * Set font style to italic
     * ```css
     * { font-style: italic; }
     * ```
     * @example
     * ```tsx
     * <Box italic></Box>
     * ```
     */
    italic?: ResponsiveBoolean

    /**
     * Set font style to normal
     * ```css
     * { font-style: normal; }
     * ```
     * @example
     * ```tsx
     * <Box notItalic></Box>
     * ```
     */
    notItalic?: ResponsiveBoolean
  }
}
