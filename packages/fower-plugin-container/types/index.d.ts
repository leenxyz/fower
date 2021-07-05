import { FowerPlugin } from '@fower/types'

declare const _default: () => FowerPlugin
export default _default

declare module '@fower/types' {
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
