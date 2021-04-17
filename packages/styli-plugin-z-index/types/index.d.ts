import { StyliPlugin } from '@styli/types'

declare const _default: () => StyliPlugin
export default _default

declare module '@styli/types' {
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
