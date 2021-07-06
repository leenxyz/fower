import { FowerPlugin } from '@fower/types'

declare const _default: () => FowerPlugin
export default _default

declare module '@fower/types' {
  export interface AtomicProps {
    /**
     * animate none
     *
     * @example
     * ```tsx
     * <Box animateNone></Box>
     * ```
     */
    animateNone?: boolean

    animateSpin?: boolean
    animatePing?: boolean
    animatePulse?: boolean
    animateBounce?: boolean
  }
}
