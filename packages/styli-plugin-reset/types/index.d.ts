import { StyliPlugin, CSSObject } from '@styli/types'

declare const _default: () => StyliPlugin
export default _default

declare module '@styli/types' {
  export interface AtomicProps {
    /**
     * Reset
     *
     * this prop can block browser default style differences. And it integrate with [normalize.css](https://github.com/necolas/normalize.css)
     *
     * [NOTE] It is better to use this in root element.
     *
     * @example
     * ```tsx
     * <View reset></View>
     * ```
     */
    reset?: boolean | CSSObject
  }
}
