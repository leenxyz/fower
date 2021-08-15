import { FowerPlugin, ResponsiveBoolean, ResponsiveValue } from '@fower/core'
import * as CSS from 'csstype'

declare const _default: () => FowerPlugin
export default _default

declare module '@fower/atomic-props' {
  export interface AtomicProps {
    /**
     * set flex-flow、flex-shrink、flex-basis
     * flex={true} is special, it equal: { display: flex }
     *
     * @See https://developer.mozilla.org/en-US/docs/Web/CSS/flex
     * @example
     * ```tsx
     * <Box flex></Box> //  display: flex;
     * <Box flex={1}></Box> // flex: 1 1 0%;
     * <Box flex={1}></Box> // flex: 1 1 0%;
     * <Box flexAuto></Box> // flex: 1 1 auto;
     * <Box flexInitial></Box> // flex: 0 1 auto;
     * <Box flexNone></Box> // flex: none;
     * ```
     */
    flex?: ResponsiveValue<CSS.Property.Flex | boolean>

    /**
     * set flex: 1 1 auto;
     *
     * @example
     * ```tsx
     * <Box flexAuto></Box> // flex: 1 1 auto;
     * ```
     */
    flexAuto?: ResponsiveBoolean

    /**
     * set flex: 0 1 auto;
     *
     * @example
     * ```tsx
     * <Box flexInitial></Box> // flex: 0 1 auto;
     * ```
     */
    flexInitial?: ResponsiveBoolean

    /**
     * set flex="none" // flex: 0 0 auto;
     *
     * @example
     * ```tsx
     * <Box flexNone></Box> // flex: none;
     * ```
     */
    flexNone?: ResponsiveBoolean

    /**
     * set order
     *
     * @example
     * ```tsx
     * <Box order-1></Box> // order: 1;
     * <Box order="1"></Box> // order: 1;
     * ```
     */
    order?: ResponsiveValue<CSS.Property.Order>

    /**
     * Set flex-wrap to wrap
     * @See https://developer.mozilla.org/en-US/docs/Web/CSS/flex-wrap
     * @example
     * ```tsx
     * <Box flexWrap></Box>
     * ```
     */
    flexWrap?: ResponsiveValue<CSS.Property.FlexWrap | boolean>

    /**
     * Set flex-wrap to nowrap
     * @See https://developer.mozilla.org/en-US/docs/Web/CSS/flex-wrap
     * @example
     * ```tsx
     * <Box flexWrap></Box>
     * ```
     */
    flexNowrap?: ResponsiveBoolean

    /**
     * Set flex-wrap to wrap-reverse
     * @See https://developer.mozilla.org/en-US/docs/Web/CSS/flex-wrap
     * @example
     * ```tsx
     * <Box flexWrap></Box>
     * ```
     */
    flexWrapReverse?: ResponsiveBoolean

    /**
     * Set flex-grow, Defaults to 0
     * @See https://developer.mozilla.org/en-US/docs/Web/CSS/flex-grow
     * @example
     * ```tsx
     * <Box flexGrow={1}></Box>
     * ```
     */
    flexGrow?: ResponsiveValue<CSS.Property.FlexGrow>

    /**
     * Set flex-shrink, Defaults to 1
     * @example
     * ```tsx
     * <Box flexShrink={2}></Box>
     * ```
     * @See https://developer.mozilla.org/en-US/docs/Web/CSS/flex-shrink
     */
    flexShrink?: ResponsiveValue<CSS.Property.FlexShrink>

    /**
     * Set flex-basis, Defaults to auto
     * @See https://developer.mozilla.org/en-US/docs/Web/CSS/flex-basis
     * @example
     * ```tsx
     * <Box flexBasis="10px"></Box>
     * ```
     */
    flexBasis?: ResponsiveValue<CSS.Property.FlexBasis>
  }
}
