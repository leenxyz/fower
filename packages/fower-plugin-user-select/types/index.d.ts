import { FowerPlugin, ResponsiveValue, ResponsiveBoolean } from "@fower/core"
declare const _default: () => FowerPlugin
export default _default

declare module '@fower/atomic-props' {
  export interface AtomicProps {
    /**
     * Set user-select to none
     * ```css
     * { use-select: none; }
     * ```
     * @example
     * ```tsx
     * <Box selectNone></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/user-select
     */
    selectNone?: ResponsiveBoolean
    /**
     * Set user-select to all
     * ```css
     * { use-select: all; }
     * ```
     * @example
     * ```tsx
     * <Box selectAll></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/user-select
     */
    selectAll?: ResponsiveBoolean
    /**
     * Set user-select to text
     * ```css
     * { use-select: text; }
     * ```
     * @example
     * ```tsx
     * <Box selectText></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/user-select
     */
    selectText?: ResponsiveBoolean
    /**
     * Set user-select to auto
     * ```css
     * { use-select: auto; }
     * ```
     * @example
     * ```tsx
     * <Box selectAuto></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/user-select
     */
    selectAuto?: ResponsiveBoolean
  }
}
