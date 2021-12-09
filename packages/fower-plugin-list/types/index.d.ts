import { FowerPlugin, ResponsiveValue, ResponsiveBoolean } from "@fower/core"
import * as CSS from 'csstype'
declare const _default: () => FowerPlugin
export default _default

declare module '@fower/atomic-props' {
  export interface AtomicProps {
    /**
     * Set list-style-type to none
     * ```css
     * { list-style-type: none; }
     * ```
     * @example
     * ```tsx
     * <Box listNone></Box>
     * ```
     * @see https://fower.vercel.app/docs/list-type
     * https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-type
     */
    listNone?: ResponsiveBoolean
    /**
     * Set list-style-type to disc
     * ```css
     * { list-style-type: disc; }
     * ```
     * @example
     * ```tsx
     * <Box listDisc></Box>
     * ```
     * @see https://fower.vercel.app/docs/list-type
     * https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-type
     */
    listDisc?: ResponsiveBoolean
    /**
     * Set list-style-type to decimal
     * ```css
     * { list-style-type: decimal; }
     * ```
     * @example
     * ```tsx
     * <Box listDecimal></Box>
     * ```
     * @see https://fower.vercel.app/docs/list-type
     * https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-type
     */
    listDecimal?: ResponsiveBoolean
    /**
     * Set list-style-type to circle
     * ```css
     * { list-style-type: circle; }
     * ```
     * @example
     * ```tsx
     * <Box listCircle></Box>
     * ```
     * @see https://fower.vercel.app/docs/list-type
     * https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-type
     */
    listCircle?: ResponsiveBoolean
    /**
     * Set list-style-type to square
     * ```css
     * { list-style-type: square; }
     * ```
     * @example
     * ```tsx
     * <Box listSquare></Box>
     * ```
     * @see https://fower.vercel.app/docs/list-type
     * https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-type
     */
    listSquare?: ResponsiveBoolean
    /**
     * Set list-style-type to trad-chinese-informal
     * ```css
     * { list-style-type: trad-chinese-informal; }
     * ```
     * @example
     * ```tsx
     * <Box listTradChineseInformal></Box>
     * ```
     * @see https://fower.vercel.app/docs/list-type
     * https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-type
     */
    listTradChineseInformal?: ResponsiveBoolean
    /**
     * Set list-style-type to lower-roman
     * ```css
     * { list-style-type: lower-roman; }
     * ```
     * @example
     * ```tsx
     * <Box listLowerRoman></Box>
     * ```
     * @see https://fower.vercel.app/docs/list-type
     * https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-type
     */
    listLowerRoman?: ResponsiveBoolean
    /**
     * Set list-style-type to lower-alpha
     * ```css
     * { list-style-type: lower-alpha; }
     * ```
     * @example
     * ```tsx
     * <Box listLowerAlpha></Box>
     * ```
     * @see https://fower.vercel.app/docs/list-type
     * https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-type
     */
    listLowerAlpha?: ResponsiveBoolean
    /**
     * Set list-style-type to upper-alpha
     * ```css
     * { list-style-type: upper-alpha; }
     * ```
     * @example
     * ```tsx
     * <Box listUpperAlpha></Box>
     * ```
     * @see https://fower.vercel.app/docs/list-type
     * https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-type
     */
    listUpperAlpha?: ResponsiveBoolean
    /**
     * Set list-style-type to upper-roman
     * ```css
     * { list-style-type: upper-roman; }
     * ```
     * @example
     * ```tsx
     * <Box listUpperRoman></Box>
     * ```
     * @see https://fower.vercel.app/docs/list-type
     * https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-type
     */
    listUpperRoman?: ResponsiveBoolean
  }
}
