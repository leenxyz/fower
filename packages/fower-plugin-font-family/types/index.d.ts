import { FowerPlugin } from '@fower/core'

declare const _default: () => FowerPlugin
export default _default

declare module '@fower/atomic-props' {
  export interface AtomicProps {
    /**
     * Set font family to sans
     *
     * @example
     * ```tsx
     * <Box fontSans></Box>
     * ```
     */
    fontSans?: boolean

    /**
     * Set font family to serif
     *
     * @example
     * ```tsx
     * <Box fontSerif></Box>
     * ```
     */
    fontSerif?: boolean

    /**
     * Set font family to mono
     *
     * @example
     * ```tsx
     * <Box fontMono></Box>
     * ```
     */
    fontMono?: boolean
  }
}
