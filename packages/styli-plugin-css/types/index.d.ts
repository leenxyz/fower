import { StyliPlugin, CSSObject } from '@styli/types'

declare const _default: () => StyliPlugin
export default _default

declare module '@styli/types' {
  export interface AtomicProps {
    /**
     * CSS
     *
     * Like style prop, but you can do more.
     *
     * Styli will auto add a className to element and parse css prop`s value to a css string, then add it to style element.
     *
     * @example
     * ```tsx
     * <View css={
     *  {
     *     transition: 'all 0.3s',
     *     '::after': {
     *        content: '""',
     *        display: 'block',
     *      },
     *     '>span': {
     *        color: 'red',
     *     },
     *     '.dot': {
     *        '.text': {
     *           color: 'yellow',
     *           fontSize: '12px',
     *        },
     *     }
     *  }
     * }></View>
     * ```
     */
    css?: CSSObject
  }
}
