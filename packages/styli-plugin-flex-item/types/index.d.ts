import { StyliPlugin } from '@styli/types'

declare const _default: () => StyliPlugin
export default _default

declare module '@styli/types' {
  export interface AtomicProps {
    /**
     * set flex-flow、flex-shrink、flex-basic
     *
     * @example
     * ```tsx
     * <View flex-1></View> // flex: 1 1 0%;
     * <View flex-auto></View> // flex: 1 1 auto;
     * <View flex-initial></View> // flex: 0 1 auto;
     * <View flex-none></View> // flex: none;
     * ```
     */
    flex?: PropValue

    /**
     * set order
     *
     * @example
     * ```tsx
     * <View order-1></View> // order: 1;
     * <View order="1"></View> // order: 1;
     * ```
     */
    order?: PropValue
  }
}
