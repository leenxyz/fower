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
     * <Box opacity></View>
     * <Box opacity-20></View>
     * <Box opacity="20"></View>
     * <Box opacity={20}></View>
     * ```
     */
    opacity?: PropValue
  }
}
