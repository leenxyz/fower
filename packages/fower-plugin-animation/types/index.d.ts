import { FowerPlugin, ResponsiveBoolean } from '@fower/core'

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
    animateNone?: ResponsiveBoolean

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
    animateSpin?: ResponsiveBoolean

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
    animatePing?: ResponsiveBoolean

    /**
     * animate Pulse
     *
     * ```css
     * {
     *   animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
     * }
     * ```
     *
     * @example
     * ```tsx
     * <Box animatePulse></Box>
     * ```
     */
    animatePulse?: ResponsiveBoolean

    /**
     * animate Bounce
     *
     * ```css
     * {
     *   animation: bounce 1s infinite;
     * }
     * ```
     *
     * @example
     * ```tsx
     * <Box animateBounce></Box>
     * ```
     */
    animateBounce?: ResponsiveBoolean
  }
}
