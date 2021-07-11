import { FowerPlugin } from '@fower/core'

declare const _default: () => FowerPlugin
export default _default

declare module '@fower/atomic-props' {
  export interface AtomicProps {
    /**
     * Set font style to italic
     *
     * @example
     * ```tsx
     * <Box italic></Box>
     * ```
     */
    italic?: boolean

    /**
     * Set font style to normal
     *
     * @example
     * ```tsx
     * <Box notItalic></Box>
     * ```
     */
    notItalic?: boolean
  }
}
