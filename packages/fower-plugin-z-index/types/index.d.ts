import { FowerPlugin, ResponsiveValue } from '@fower/core'

declare const _default: () => FowerPlugin
export default _default

declare module '@fower/atomic-props' {
  export interface AtomicProps {
    /**
     * Set z-index
     * ```css
     * { z-index: $value; }
     * ```
     *
     * @example
     * ```tsx
     * <Box zIndex-10></Box>
     * <Box zIndex--10></Box>
     * <Box zIndex={10}></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/z-index
     */
    zIndex?: ResponsiveValue<string | number>
  }
}
