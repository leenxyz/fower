import { FowerPlugin, ResponsiveValue } from '@fower/core'

declare const _default: () => FowerPlugin
export default _default

declare module '@fower/atomic-props' {
  export interface AtomicProps {
    /**
     * Set gridTemplateColumns
     *
     * @example
     * ```tsx
     * <Box gridTemplateColumns-4></Box>
     * ```
     */
    gridTemplateColumns?: ResponsiveValue<number>
  }
}
