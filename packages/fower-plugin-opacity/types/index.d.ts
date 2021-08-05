import { FowerPlugin, ResponsiveValue } from '@fower/core'

declare const _default: () => FowerPlugin
export default _default

declare module '@fower/atomic-props' {
  export interface AtomicProps {
    /**
     * Set opacity to some value
     *
     * opacity-20 is `opacity: 0.2`
     *
     * ```css
     * { opacity: 0.2; }
     * ```
     *
     * @example
     * ```tsx
     * <Box opacity></Box>
     * <Box opacity-20></Box>
     * <Box opacity="20"></Box>
     * <Box opacity={20}></Box>
     * ```
     * @see https://fower.vercel.app/docs/opacity
     * https://developer.mozilla.org/en-US/docs/Web/CSS/opacity
     */
    opacity?: ResponsiveValue<string | number>
  }
}
