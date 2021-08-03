import { FowerPlugin } from '@fower/core'

declare const _default: () => FowerPlugin
export default _default

declare module '@fower/atomic-props' {
  export interface AtomicProps {
    /**
     * set animation to none
     *
     * ```css
     * {
     *   animation: none;
     * }
     * ```
     * @example
     * ```tsx
     * <Box animateNone></Box>
     * ```
     */
    animateNone?: boolean

    /**
     * animate spin
     *
     * ```css
     * {
     *   animation: spin 1s linear infinite;
     * }
     * ```
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
     * ```css
     * {
     *   animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
     * }
     * ```
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
