import { FowerPlugin } from '@fower/core'

declare const _default: () => FowerPlugin
export default _default

declare module '@fower/atomic-props' {
  export interface AtomicProps {
    /**
     * Set Box as a container
     *
     * @example
     * ```tsx
     * <Box container></Box>
     * ```
     */
    container?: boolean
  }
}
