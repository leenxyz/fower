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
     * <View flexAuto></View> // flex: 1 1 auto;
     * <View flexInitial></View> // flex: 0 1 auto;
     * <View flexNone></View> // flex: none;
     * ```
     */
    flex?: PropValue

    /**
     * set flex-flow、flex-shrink、flex-basic
     *
     * @example
     * ```tsx
     * <View flexAuto></View> // flex: 1 1 auto;
     * ```
     */
    flexAuto?: boolean

    /**
     * set flex-flow、flex-shrink、flex-basic
     *
     * @example
     * ```tsx
     * <View flexInitial></View> // flex: 0 1 auto;
     * ```
     */
    flexInitial?: boolean

    /**
     * set flex-flow、flex-shrink、flex-basic
     *
     * @example
     * ```tsx
     * <View flexNone></View> // flex: none;
     * ```
     */
    flexNone?: boolean

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
