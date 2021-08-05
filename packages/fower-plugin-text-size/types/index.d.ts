import { FowerPlugin, ResponsiveValue, ResponsiveBoolean } from "@fower/core"
declare const _default: () => FowerPlugin
export default _default

declare module '@fower/atomic-props' {
  export interface AtomicProps {
    /**
     * set font-size to some value
     * ```css
     * { font-size: $value;}
     * ```
     * @example
     * ```tsx
     * <Box text={16}></Box>
     * <Box text={20}></Box>
     * ```
     * @see https://fower.vercel.app/docs/font-size
     * https://developer.mozilla.org/en-US/docs/Web/CSS/font-size
     */
    text?: ResponsiveValue<string | number>
    /**
     * set font-size to xs, default is 12px
     * ```css
     * { font-size: 12px;}
     * ```
     * @example
     * ```tsx
     * <Box textXS></Box>
     * ```
     * @see https://fower.vercel.app/docs/font-size
     * https://developer.mozilla.org/en-US/docs/Web/CSS/font-size
     */
    textXS?: ResponsiveBoolean
    /**
     * set font-size to sm, default is 14px
     * ```css
     * { font-size: 14px;}
     * ```
     * @example
     * ```tsx
     * <Box textSM></Box>
     * ```
     * @see https://fower.vercel.app/docs/font-size
     * https://developer.mozilla.org/en-US/docs/Web/CSS/font-size
     */
    textSM?: ResponsiveBoolean
    /**
     * set font-size to base, default is 16px
     * ```css
     * { font-size: 16px;}
     * ```
     * @example
     * ```tsx
     * <Box textBase></Box>
     * ```
     * @see https://fower.vercel.app/docs/font-size
     * https://developer.mozilla.org/en-US/docs/Web/CSS/font-size
     */
    textBase?: ResponsiveBoolean
    /**
     * set font-size to lg, default is 18px
     * ```css
     * { font-size: 18px;}
     * ```
     * @example
     * ```tsx
     * <Box textLG></Box>
     * ```
     * @see https://fower.vercel.app/docs/font-size
     * https://developer.mozilla.org/en-US/docs/Web/CSS/font-size
     */
    textLG?: ResponsiveBoolean
    /**
     * set font-size to xl, default is 20px
     * ```css
     * { font-size: 20px;}
     * ```
     * @example
     * ```tsx
     * <Box textXL></Box>
     * ```
     * @see https://fower.vercel.app/docs/font-size
     * https://developer.mozilla.org/en-US/docs/Web/CSS/font-size
     */
    textXL?: ResponsiveBoolean
    /**
     * set font-size to 2xl, default is 24px
     * ```css
     * { font-size: 24px;}
     * ```
     * @example
     * ```tsx
     * <Box text2XL></Box>
     * ```
     * @see https://fower.vercel.app/docs/font-size
     * https://developer.mozilla.org/en-US/docs/Web/CSS/font-size
     */
    text2XL?: ResponsiveBoolean
    /**
     * set font-size to 3xl, default is 30px
     * ```css
     * { font-size: 30px;}
     * ```
     * @example
     * ```tsx
     * <Box text3XL></Box>
     * ```
     * @see https://fower.vercel.app/docs/font-size
     * https://developer.mozilla.org/en-US/docs/Web/CSS/font-size
     */
    text3XL?: ResponsiveBoolean
    /**
     * set font-size to 4xl, default is 36px
     * ```css
     * { font-size: 36px;}
     * ```
     * @example
     * ```tsx
     * <Box text4XL></Box>
     * ```
     * @see https://fower.vercel.app/docs/font-size
     * https://developer.mozilla.org/en-US/docs/Web/CSS/font-size
     */
    text4XL?: ResponsiveBoolean
    /**
     * set font-size to 5xl, default is 48px
     * ```css
     * { font-size: 48px;}
     * ```
     * @example
     * ```tsx
     * <Box text5XL></Box>
     * ```
     * @see https://fower.vercel.app/docs/font-size
     * https://developer.mozilla.org/en-US/docs/Web/CSS/font-size
     */
    text5XL?: ResponsiveBoolean
    /**
     * set font-size to 6xl, default is 60px
     * ```css
     * { font-size: 60px;}
     * ```
     * @example
     * ```tsx
     * <Box text6XL></Box>
     * ```
     * @see https://fower.vercel.app/docs/font-size
     * https://developer.mozilla.org/en-US/docs/Web/CSS/font-size
     */
    text6XL?: ResponsiveBoolean
    /**
     * set font-size to 7xl, default is 72px
     * ```css
     * { font-size: 72px;}
     * ```
     * @example
     * ```tsx
     * <Box text7XL></Box>
     * ```
     * @see https://fower.vercel.app/docs/font-size
     * https://developer.mozilla.org/en-US/docs/Web/CSS/font-size
     */
    text7XL?: ResponsiveBoolean
    /**
     * set font-size to 8xl, default is 96px
     * ```css
     * { font-size: 96px;}
     * ```
     * @example
     * ```tsx
     * <Box text8XL></Box>
     * ```
     * @see https://fower.vercel.app/docs/font-size
     * https://developer.mozilla.org/en-US/docs/Web/CSS/font-size
     */
    text8XL?: ResponsiveBoolean
    /**
     * set font-size to 9xl, default is 128px
     * ```css
     * { font-size: 128px;}
     * ```
     * @example
     * ```tsx
     * <Box text9XL></Box>
     * ```
     * @see https://fower.vercel.app/docs/font-size
     * https://developer.mozilla.org/en-US/docs/Web/CSS/font-size
     */
    text9XL?: ResponsiveBoolean
  }
}
