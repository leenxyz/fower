import { FowerPlugin, PropValue } from '@fower/core'

declare const _default: () => FowerPlugin
export default _default

declare module '@fower/atomic-props' {
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
