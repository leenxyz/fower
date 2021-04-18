import { FowerPlugin } from '@fower/types'

declare const _default: () => FowerPlugin
export default _default

declare module '@fower/types' {
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
