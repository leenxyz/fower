import { FowerPlugin } from '@fower/types'
import * as CSS from 'csstype'

declare const _default: () => FowerPlugin
export default _default

declare module '@fower/types' {
  export interface AtomicProps {
    /**
     * set flex-direction
     *
     * @example
     * ```tsx
     * <Box flexDirection="row"></Box>
     * <Box flexDirection="row-reverse"></Box>
     * <Box flexDirection="column"></Box>
     * <Box flexDirection="column-reverse"></Box>
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
     * <Box flex></Box> //  display: flex;
     * <Box flex={1}></Box> // flex: 1 1 0%;
     * <Box flex={1}></Box> // flex: 1 1 0%;
     * <Box flexAuto></Box> // flex: 1 1 auto;
     * <Box flexInitial></Box> // flex: 0 1 auto;
     * <Box flexNone></Box> // flex: none;
     * ```
     */
    flex?: CSS.Property.Flex | boolean

    /**
     * set flex: 1 1 auto;
     *
     * @example
     * ```tsx
     * <Box flexAuto></Box> // flex: 1 1 auto;
     * ```
     */
    flexAuto?: boolean

    /**
     * set flex: 0 1 auto;
     *
     * @example
     * ```tsx
     * <Box flexInitial></Box> // flex: 0 1 auto;
     * ```
     */
    flexInitial?: boolean

    /**
     * set flex="none" // flex: 0 0 auto;
     *
     * @example
     * ```tsx
     * <Box flexNone></Box> // flex: none;
     * ```
     */
    flexNone?: boolean

    /**
     * set order
     *
     * @example
     * ```tsx
     * <Box order-1></Box> // order: 1;
     * <Box order="1"></Box> // order: 1;
     * ```
     */
    order?: CSS.Property.Order

    /**
     * Set flex-basis, Defaults to auto
     * @See https://developer.mozilla.org/en-US/docs/Web/CSS/flex-basis
     * @example
     * ```tsx
     * <Box flexWrap="wrap"></Box>
     * ```
     */
    flexWrap?: CSS.Property.FlexWrap | boolean

    flexNowrap?: boolean

    flexWrapReverse?: boolean

    /**
     * Set flex-grow, Defaults to 0
     * @See https://developer.mozilla.org/en-US/docs/Web/CSS/flex-grow
     * @example
     * ```tsx
     * <Box flexGrow={1}></Box>
     * ```
     */
    flexGrow?: CSS.Property.FlexGrow | boolean

    /**
     * Set flex-shrink, Defaults to 1
     * @See https://developer.mozilla.org/en-US/docs/Web/CSS/flex-shrink
     * @example
     * ```tsx
     * <Box flexShrink={2}></Box>
     * ```
     */
    flexShrink?: CSS.Property.FlexShrink | boolean

    /**
     * Set flex-basis, Defaults to auto
     * @See https://developer.mozilla.org/en-US/docs/Web/CSS/flex-basis
     * @example
     * ```tsx
     * <Box flexBasis="10px"></Box>
     * ```
     */
    flexBasis?: CSS.Property.FlexBasis | boolean
  }
}
