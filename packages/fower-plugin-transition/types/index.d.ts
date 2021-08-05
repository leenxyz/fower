import { FowerPlugin, ResponsiveValue, ResponsiveBoolean } from "@fower/core"
declare const _default: () => FowerPlugin
export default _default

declare module '@fower/atomic-props' {
  export interface AtomicProps {
    /**
     * set transition-duration to some value
     * ```css
     * { transition-duration: 400ms;}
     * ```
     * @example
     * ```tsx
     * <Box duration-{200}></Box>
     * <Box duration={400}></Box>
     * ```
     * @see https://fower.vercel.app/docs/transition-duration
     * https://developer.mozilla.org/en-US/docs/Web/CSS/transition-duration
     */
    duration?: ResponsiveValue<number>
    /**
     * set transition-delay to some value
     * ```css
     * { transition-delay: 400ms;}
     * ```
     * @example
     * ```tsx
     * <Box delay-{200}></Box>
     * <Box delay={400}></Box>
     * ```
     * @see https://fower.vercel.app/docs/transition-delay
     * https://developer.mozilla.org/en-US/docs/Web/CSS/transition-delay
     */
    delay?: ResponsiveValue<number>
    /**
     * set transition to some value
     * ```css
     * { transition: $value;}
     * ```
     * @example
     * ```tsx
     * <Box transition="all 1s ease-out;"></Box>
     * ```
     * @see https://fower.vercel.app/docs/transition-property
     * https://developer.mozilla.org/en-US/docs/Web/CSS/transition
     */
    transition?: ResponsiveValue<string>
    /**
     * set transition-property to none
     * ```css
     * { transition-property: none; }
     * ```
     * @example
     * ```tsx
     * <Box transitionNone></Box>
     * ```
     * @see https://fower.vercel.app/docs/transition-property
     * https://developer.mozilla.org/en-US/docs/Web/CSS/transition-property
     */
    transitionNone?: ResponsiveBoolean
    /**
     * set transition-property to all
     * ```css
     * { transition-property: all; }
     * ```
     * @example
     * ```tsx
     * <Box transitionAll></Box>
     * ```
     * @see https://fower.vercel.app/docs/transition-property
     * https://developer.mozilla.org/en-US/docs/Web/CSS/transition-property
     */
    transitionAll?: ResponsiveBoolean
    /**
     * set transition-property to common
     * ```css
     * { transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter; }
     * ```
     * @example
     * ```tsx
     * <Box transitionCommon></Box>
     * ```
     * @see https://fower.vercel.app/docs/transition-property
     * https://developer.mozilla.org/en-US/docs/Web/CSS/transition-property
     */
    transitionCommon?: ResponsiveBoolean
    /**
     * set transition-property to colors
     * ```css
     * { transition-property: background-color, border-color, color, fill, stroke; }
     * ```
     * @example
     * ```tsx
     * <Box transitionColors></Box>
     * ```
     * @see https://fower.vercel.app/docs/transition-property
     * https://developer.mozilla.org/en-US/docs/Web/CSS/transition-property
     */
    transitionColors?: ResponsiveBoolean
    /**
     * set transition-property to opacity
     * ```css
     * { transition-property: opacity; }
     * ```
     * @example
     * ```tsx
     * <Box transitionOpacity></Box>
     * ```
     * @see https://fower.vercel.app/docs/transition-property
     * https://developer.mozilla.org/en-US/docs/Web/CSS/transition-property
     */
    transitionOpacity?: ResponsiveBoolean
    /**
     * set transition-property to shadow
     * ```css
     * { transition-property: box-shadow; }
     * ```
     * @example
     * ```tsx
     * <Box transitionShadow></Box>
     * ```
     * @see https://fower.vercel.app/docs/transition-property
     * https://developer.mozilla.org/en-US/docs/Web/CSS/transition-property
     */
    transitionShadow?: ResponsiveBoolean
    /**
     * set transition-property to transform
     * ```css
     * { transition-property: transform; }
     * ```
     * @example
     * ```tsx
     * <Box transitionTransform></Box>
     * ```
     * @see https://fower.vercel.app/docs/transition-property
     * https://developer.mozilla.org/en-US/docs/Web/CSS/transition-property
     */
    transitionTransform?: ResponsiveBoolean
    /**
     * set transition-timing-function to easeLinear
     * ```css
     * { transition-timing-function: linear; }
     * ```
     * @example
     * ```tsx
     * <Box easeLinear></Box>
     * ```
     * @see https://fower.vercel.app/docs/transition-timing-function
     * https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function
     */
    easeLinear?: ResponsiveBoolean
    /**
     * set transition-timing-function to easeIn
     * ```css
     * { transition-timing-function: cubic-bezier(0.4, 0, 1, 1); }
     * ```
     * @example
     * ```tsx
     * <Box easeIn></Box>
     * ```
     * @see https://fower.vercel.app/docs/transition-timing-function
     * https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function
     */
    easeIn?: ResponsiveBoolean
    /**
     * set transition-timing-function to easeOut
     * ```css
     * { transition-timing-function: cubic-bezier(0, 0, 0.2, 1); }
     * ```
     * @example
     * ```tsx
     * <Box easeOut></Box>
     * ```
     * @see https://fower.vercel.app/docs/transition-timing-function
     * https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function
     */
    easeOut?: ResponsiveBoolean
    /**
     * set transition-timing-function to easeInOut
     * ```css
     * { transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); }
     * ```
     * @example
     * ```tsx
     * <Box easeInOut></Box>
     * ```
     * @see https://fower.vercel.app/docs/transition-timing-function
     * https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function
     */
    easeInOut?: ResponsiveBoolean
  }
}
