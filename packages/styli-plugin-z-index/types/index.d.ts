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
     * <View zIndex-10></View>
     * <View zIndex--10></View>
     * <View zIndex={10}></View>
     * ```
     */
    zIndex?: PropValue
  }
}
