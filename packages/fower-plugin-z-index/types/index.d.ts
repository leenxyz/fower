import { FowerPlugin, PropValue } from '@fower/core'

declare const _default: () => FowerPlugin
export default _default

declare module '@fower/atomic-props' {
  export interface AtomicProps {
    /**
     * Set z-index
     *
     * @example
     * ```tsx
     * <Box zIndex-10></Box>
     * <Box zIndex--10></Box>
     * <Box zIndex={10}></Box>
     * ```
     */
    zIndex?: PropValue
  }
}
