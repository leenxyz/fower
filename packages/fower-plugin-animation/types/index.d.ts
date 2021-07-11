import { FowerPlugin } from '@fower/core'

declare const _default: () => FowerPlugin
export default _default

declare module '@fower/atomic-props' {
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

    /**
     * animate spin
     *
     * @example
     * ```tsx
     * <Box animateSpin></Box>
     * ```
     */
    animateSpin?: boolean

    /**
     * animate ping
     *
     * @example
     * ```tsx
     * <Box animatePing></Box>
     * ```
     */
    animatePing?: boolean

    /**
     * animate Pulse
     *
     * @example
     * ```tsx
     * <Box animatePulse></Box>
     * ```
     */
    animatePulse?: boolean

    /**
     * animate Bounce
     *
     * @example
     * ```tsx
     * <Box animateBounce></Box>
     * ```
     */
    animateBounce?: boolean
  }
}
