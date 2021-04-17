import { StyliPlugin } from '@styli/types'

declare const _default: () => StyliPlugin
export default _default

declare module '@styli/types' {
  export interface AtomicProps {
    /**
     * Set opacity
     *
     * opacity-20 is `opacity: 0.2`
     *
     * @example
     * ```tsx
     * <Box opacity></Box>
     * <Box opacity-20></Box>
     * <Box opacity="20"></Box>
     * <Box opacity={20}></Box>
     * ```
     */
    opacity?: PropValue
  }
}
