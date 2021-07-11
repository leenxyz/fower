import { FowerPlugin } from '@fower/core'
import * as CSS from 'csstype'

declare const _default: () => FowerPlugin
export default _default

declare module '@fower/atomic-props' {
  export interface AtomicProps {
    /**
     * Set boxSizing
     *
     * ```css
     * { boxSizing: 'content-box' }
     * ```
     *
     * @example
     * ```tsx
     * <Box boxSizing="content-box">Hello world</Box>
     * ```
     */
    boxSizing?: CSS.Property.BoxSizing | boolean

    /**
     * Set boxSizing to content-box
     *
     * ```css
     * { boxSizing: 'content-box' }
     * ```
     *
     * @example
     * ```tsx
     * <Box boxContent>Hello world</Box>
     * ```
     */
    boxContent?: boolean

    /**
     * Set boxSizing to border-box
     *
     * ```css
     * { boxSizing: 'border-box' }
     * ```
     *
     * @example
     * ```tsx
     * <Box boxBorder>Hello world</Box>
     * ```
     */
    boxBorder?: boolean
  }
}
