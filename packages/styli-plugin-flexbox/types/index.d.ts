import { StyliPlugin } from '@styli/types'
import * as CSS from 'csstype'

declare const _default: () => StyliPlugin
export default _default

declare module '@styli/types' {
  export interface AtomicProps {
    /**
     * set flex-direction
     *
     * @example
     * ```tsx
     * <View flexDirection="row"></View>
     * <View flexDirection="row-reverse"></View>
     * <View flexDirection="column"></View>
     * <View flexDirection="column-reverse"></View>
     * ```
     */
    flexDirection?: CSS.Property.FlexDirection

    /**
     * set flex-flow、flex-shrink、flex-basis
     * flex={true} is special, it equal: { display: flex }
     *
     * @See https://developer.mozilla.org/en-US/docs/Web/CSS/flex
     * @example
     * ```tsx
     * <View flex></View> //  display: flex;
     * <View flex={1}></View> // flex: 1 1 0%;
     * <View flex={1}></View> // flex: 1 1 0%;
     * <View flexAuto></View> // flex: 1 1 auto;
     * <View flexInitial></View> // flex: 0 1 auto;
     * <View flexNone></View> // flex: none;
     * ```
     */
    flex?: CSS.Property.Flex | boolean

    /**
     * set flex: 1 1 auto;
     *
     * @example
     * ```tsx
     * <View flexAuto></View> // flex: 1 1 auto;
     * ```
     */
    flexAuto?: boolean

    /**
     * set flex: 0 1 auto;
     *
     * @example
     * ```tsx
     * <View flexInitial></View> // flex: 0 1 auto;
     * ```
     */
    flexInitial?: boolean

    /**
     * set flex="none" // flex: 0 0 auto;
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
    order?: CSS.Property.Order

    /**
     * Set flex-basis, Defaults to auto
     * @See https://developer.mozilla.org/en-US/docs/Web/CSS/flex-basis
     * @example
     * ```tsx
     * <View flexWrap="wrap"></View>
     * ```
     */
    flexWrap?: CSS.Property.FlexWrap | boolean

    /**
     * Set flex-grow, Defaults to 0
     * @See https://developer.mozilla.org/en-US/docs/Web/CSS/flex-grow
     * @example
     * ```tsx
     * <View flexGrow={1}></View>
     * ```
     */
    flexGrow?: CSS.Property.FlexGrow | boolean

    /**
     * Set flex-shrink, Defaults to 1
     * @See https://developer.mozilla.org/en-US/docs/Web/CSS/flex-shrink
     * @example
     * ```tsx
     * <View flexShrink={2}></View>
     * ```
     */
    flexShrink?: CSS.Property.FlexShrink | boolean

    /**
     * Set flex-basis, Defaults to auto
     * @See https://developer.mozilla.org/en-US/docs/Web/CSS/flex-basis
     * @example
     * ```tsx
     * <View flexBasis="10px"></View>
     * ```
     */
    flexBasis?: CSS.Property.FlexBasis | boolean
  }
}
