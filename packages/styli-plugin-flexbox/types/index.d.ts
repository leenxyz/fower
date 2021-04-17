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
     * <Box flexDirection="row"></View>
     * <Box flexDirection="row-reverse"></View>
     * <Box flexDirection="column"></View>
     * <Box flexDirection="column-reverse"></View>
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
     * <Box flex></View> //  display: flex;
     * <Box flex={1}></View> // flex: 1 1 0%;
     * <Box flex={1}></View> // flex: 1 1 0%;
     * <Box flexAuto></View> // flex: 1 1 auto;
     * <Box flexInitial></View> // flex: 0 1 auto;
     * <Box flexNone></View> // flex: none;
     * ```
     */
    flex?: CSS.Property.Flex | boolean

    /**
     * set flex: 1 1 auto;
     *
     * @example
     * ```tsx
     * <Box flexAuto></View> // flex: 1 1 auto;
     * ```
     */
    flexAuto?: boolean

    /**
     * set flex: 0 1 auto;
     *
     * @example
     * ```tsx
     * <Box flexInitial></View> // flex: 0 1 auto;
     * ```
     */
    flexInitial?: boolean

    /**
     * set flex="none" // flex: 0 0 auto;
     *
     * @example
     * ```tsx
     * <Box flexNone></View> // flex: none;
     * ```
     */
    flexNone?: boolean

    /**
     * set order
     *
     * @example
     * ```tsx
     * <Box order-1></View> // order: 1;
     * <Box order="1"></View> // order: 1;
     * ```
     */
    order?: CSS.Property.Order

    /**
     * Set flex-basis, Defaults to auto
     * @See https://developer.mozilla.org/en-US/docs/Web/CSS/flex-basis
     * @example
     * ```tsx
     * <Box flexWrap="wrap"></View>
     * ```
     */
    flexWrap?: CSS.Property.FlexWrap | boolean

    /**
     * Set flex-grow, Defaults to 0
     * @See https://developer.mozilla.org/en-US/docs/Web/CSS/flex-grow
     * @example
     * ```tsx
     * <Box flexGrow={1}></View>
     * ```
     */
    flexGrow?: CSS.Property.FlexGrow | boolean

    /**
     * Set flex-shrink, Defaults to 1
     * @See https://developer.mozilla.org/en-US/docs/Web/CSS/flex-shrink
     * @example
     * ```tsx
     * <Box flexShrink={2}></View>
     * ```
     */
    flexShrink?: CSS.Property.FlexShrink | boolean

    /**
     * Set flex-basis, Defaults to auto
     * @See https://developer.mozilla.org/en-US/docs/Web/CSS/flex-basis
     * @example
     * ```tsx
     * <Box flexBasis="10px"></View>
     * ```
     */
    flexBasis?: CSS.Property.FlexBasis | boolean
  }
}
