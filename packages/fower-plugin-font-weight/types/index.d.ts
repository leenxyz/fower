import { FowerPlugin, ResponsiveValue, ResponsiveBoolean } from "@fower/core"
import * as CSS from 'csstype'
declare const _default: () => FowerPlugin
export default _default

declare module '@fower/atomic-props' {
  export interface AtomicProps {
    /**
     * set font-weight to some value
     * ```css
     * { font-weight: $value;}
     * ```
     * @example
     * ```tsx
     * <Box fontWeight="bold"></Box>
     * <Box fontWeight={600}></Box>
     * ```
     * @see https://fower.vercel.app/docs/font-weight
     * https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight
     */
    fontWeight?: ResponsiveValue<CSS.Property.FontWeight>
    /**
     * set font-weight to hairline
     * ```css
     * { font-weight: 100;}
     * ```
     * @example
     * ```tsx
     * <Box fontHairline></Box>
     * ```
     * @see https://fower.vercel.app/docs/font-weight
     * https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight
     */
    fontHairline?: ResponsiveBoolean
    /**
     * set font-weight to thin
     * ```css
     * { font-weight: 200;}
     * ```
     * @example
     * ```tsx
     * <Box fontThin></Box>
     * ```
     * @see https://fower.vercel.app/docs/font-weight
     * https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight
     */
    fontThin?: ResponsiveBoolean
    /**
     * set font-weight to light
     * ```css
     * { font-weight: 300;}
     * ```
     * @example
     * ```tsx
     * <Box fontLight></Box>
     * ```
     * @see https://fower.vercel.app/docs/font-weight
     * https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight
     */
    fontLight?: ResponsiveBoolean
    /**
     * set font-weight to normal
     * ```css
     * { font-weight: 400;}
     * ```
     * @example
     * ```tsx
     * <Box fontNormal></Box>
     * ```
     * @see https://fower.vercel.app/docs/font-weight
     * https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight
     */
    fontNormal?: ResponsiveBoolean
    /**
     * set font-weight to medium
     * ```css
     * { font-weight: 500;}
     * ```
     * @example
     * ```tsx
     * <Box fontMedium></Box>
     * ```
     * @see https://fower.vercel.app/docs/font-weight
     * https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight
     */
    fontMedium?: ResponsiveBoolean
    /**
     * set font-weight to semibold
     * ```css
     * { font-weight: 600;}
     * ```
     * @example
     * ```tsx
     * <Box fontSemibold></Box>
     * ```
     * @see https://fower.vercel.app/docs/font-weight
     * https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight
     */
    fontSemibold?: ResponsiveBoolean
    /**
     * set font-weight to bold
     * ```css
     * { font-weight: 700;}
     * ```
     * @example
     * ```tsx
     * <Box fontBold></Box>
     * ```
     * @see https://fower.vercel.app/docs/font-weight
     * https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight
     */
    fontBold?: ResponsiveBoolean
    /**
     * set font-weight to extrabold
     * ```css
     * { font-weight: 800;}
     * ```
     * @example
     * ```tsx
     * <Box fontExtrabold></Box>
     * ```
     * @see https://fower.vercel.app/docs/font-weight
     * https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight
     */
    fontExtrabold?: ResponsiveBoolean
    /**
     * set font-weight to black
     * ```css
     * { font-weight: 900;}
     * ```
     * @example
     * ```tsx
     * <Box fontBlack></Box>
     * ```
     * @see https://fower.vercel.app/docs/font-weight
     * https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight
     */
    fontBlack?: ResponsiveBoolean
  }
}
