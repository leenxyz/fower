import { FowerPlugin, ResponsiveBoolean, ResponsiveValue } from "@fower/core"
declare const _default: () => FowerPlugin
export default _default

declare module '@fower/atomic-props' {
  export interface AtomicProps {
    /**
     * Set svg fill to none
     * ```css
     * { fill: none }
     * ```
     * @example
     * ```
     * <Box as="svg" fillNone></Box>
     * ```
     * @see https://fower.vercel.app/docs/fill
     */
    fillNone?: ResponsiveBoolean
    /**
     * Set svg fill to currentColor
     * ```css
     * { fill: currentColor }
     * ```
     * @example
     * ```
     * <Box as="svg" fillCurrent></Box>
     * ```
     * @see https://fower.vercel.app/docs/fill
     */
    fillCurrent?: ResponsiveBoolean
    /**
     * Set svg stroke to currentColor
     * ```css
     * { stroke: currentColor }
     * ```
     * @example
     * ```
     * <Box as="svg" strokeCurrent></Box>
     * ```
     * @see https://fower.vercel.app/docs/stroke
     */
    strokeCurrent?: ResponsiveBoolean
    /**
     * Set stroke to some value
     * ```css
     * { stroke: $value }
     * ```
     * @example
     * ```
     * <Box as="svg" stroke={2}></Box>
     * ```
     * @see
     */
    stroke?: ResponsiveValue<string | number>
    /**
     * Set fill to transparent
     * @example
     * ```tsx
     * <Box as="svg" fillTransparent></Box>
     * ```
     * @see https://fower.vercel.app/docs/fill
     * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
     */
    fillTransparent?: ResponsiveBoolean
    /**
     * Set fill to white
     * @example
     * ```tsx
     * <Box as="svg" fillWhite></Box>
     * <Box as="svg" fillWhite--T20></Box> // transparentize color
     * <Box as="svg" fillWhite--O20></Box> // opacify color
     * <Box as="svg" fillWhite--L20></Box> // lighten color
     * <Box as="svg" fillWhite--D20></Box> // darken color
     * ```
     * @see https://fower.vercel.app/docs/fill
     * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
     */
    fillWhite?: ResponsiveBoolean
    /**
     * Set fill to black
     * @example
     * ```tsx
     * <Box as="svg" fillBlack></Box>
     * <Box as="svg" fillBlack--T20></Box> // transparentize color
     * <Box as="svg" fillBlack--O20></Box> // opacify color
     * <Box as="svg" fillBlack--L20></Box> // lighten color
     * <Box as="svg" fillBlack--D20></Box> // darken color
     * ```
     * @see https://fower.vercel.app/docs/fill
     * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
     */
    fillBlack?: ResponsiveBoolean
    /**
     * Set fill to brand
     * @example
     * ```tsx
     * <Box as="svg" fillBrand></Box>
     * <Box as="svg" fillBrand--T20></Box> // transparentize color
     * <Box as="svg" fillBrand--O20></Box> // opacify color
     * <Box as="svg" fillBrand--L20></Box> // lighten color
     * <Box as="svg" fillBrand--D20></Box> // darken color
     * ```
     * @see https://fower.vercel.app/docs/fill
     * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
     */
    fillBrand?: ResponsiveBoolean
    /**
     * Set fill to brand50
     * @example
     * ```tsx
     * <Box as="svg" fillBrand50></Box>
     * <Box as="svg" fillBrand50--T20></Box> // transparentize color
     * <Box as="svg" fillBrand50--O20></Box> // opacify color
     * <Box as="svg" fillBrand50--L20></Box> // lighten color
     * <Box as="svg" fillBrand50--D20></Box> // darken color
     * ```
     * @see https://fower.vercel.app/docs/fill
     * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
     */
    fillBrand50?: ResponsiveBoolean
    /**
     * Set fill to brand100
     * @example
     * ```tsx
     * <Box as="svg" fillBrand100></Box>
     * <Box as="svg" fillBrand100--T20></Box> // transparentize color
     * <Box as="svg" fillBrand100--O20></Box> // opacify color
     * <Box as="svg" fillBrand100--L20></Box> // lighten color
     * <Box as="svg" fillBrand100--D20></Box> // darken color
     * ```
     * @see https://fower.vercel.app/docs/fill
     * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
     */
    fillBrand100?: ResponsiveBoolean
    /**
     * Set fill to brand200
     * @example
     * ```tsx
     * <Box as="svg" fillBrand200></Box>
     * <Box as="svg" fillBrand200--T20></Box> // transparentize color
     * <Box as="svg" fillBrand200--O20></Box> // opacify color
     * <Box as="svg" fillBrand200--L20></Box> // lighten color
     * <Box as="svg" fillBrand200--D20></Box> // darken color
     * ```
     * @see https://fower.vercel.app/docs/fill
     * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
     */
    fillBrand200?: ResponsiveBoolean
    /**
     * Set fill to brand300
     * @example
     * ```tsx
     * <Box as="svg" fillBrand300></Box>
     * <Box as="svg" fillBrand300--T20></Box> // transparentize color
     * <Box as="svg" fillBrand300--O20></Box> // opacify color
     * <Box as="svg" fillBrand300--L20></Box> // lighten color
     * <Box as="svg" fillBrand300--D20></Box> // darken color
     * ```
     * @see https://fower.vercel.app/docs/fill
     * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
     */
    fillBrand300?: ResponsiveBoolean
    /**
     * Set fill to brand400
     * @example
     * ```tsx
     * <Box as="svg" fillBrand400></Box>
     * <Box as="svg" fillBrand400--T20></Box> // transparentize color
     * <Box as="svg" fillBrand400--O20></Box> // opacify color
     * <Box as="svg" fillBrand400--L20></Box> // lighten color
     * <Box as="svg" fillBrand400--D20></Box> // darken color
     * ```
     * @see https://fower.vercel.app/docs/fill
     * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
     */
    fillBrand400?: ResponsiveBoolean
    /**
     * Set fill to brand500
     * @example
     * ```tsx
     * <Box as="svg" fillBrand500></Box>
     * <Box as="svg" fillBrand500--T20></Box> // transparentize color
     * <Box as="svg" fillBrand500--O20></Box> // opacify color
     * <Box as="svg" fillBrand500--L20></Box> // lighten color
     * <Box as="svg" fillBrand500--D20></Box> // darken color
     * ```
     * @see https://fower.vercel.app/docs/fill
     * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
     */
    fillBrand500?: ResponsiveBoolean
    /**
     * Set fill to brand600
     * @example
     * ```tsx
     * <Box as="svg" fillBrand600></Box>
     * <Box as="svg" fillBrand600--T20></Box> // transparentize color
     * <Box as="svg" fillBrand600--O20></Box> // opacify color
     * <Box as="svg" fillBrand600--L20></Box> // lighten color
     * <Box as="svg" fillBrand600--D20></Box> // darken color
     * ```
     * @see https://fower.vercel.app/docs/fill
     * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
     */
    fillBrand600?: ResponsiveBoolean
    /**
     * Set fill to brand700
     * @example
     * ```tsx
     * <Box as="svg" fillBrand700></Box>
     * <Box as="svg" fillBrand700--T20></Box> // transparentize color
     * <Box as="svg" fillBrand700--O20></Box> // opacify color
     * <Box as="svg" fillBrand700--L20></Box> // lighten color
     * <Box as="svg" fillBrand700--D20></Box> // darken color
     * ```
     * @see https://fower.vercel.app/docs/fill
     * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
     */
    fillBrand700?: ResponsiveBoolean
    /**
     * Set fill to brand800
     * @example
     * ```tsx
     * <Box as="svg" fillBrand800></Box>
     * <Box as="svg" fillBrand800--T20></Box> // transparentize color
     * <Box as="svg" fillBrand800--O20></Box> // opacify color
     * <Box as="svg" fillBrand800--L20></Box> // lighten color
     * <Box as="svg" fillBrand800--D20></Box> // darken color
     * ```
     * @see https://fower.vercel.app/docs/fill
     * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
     */
    fillBrand800?: ResponsiveBoolean
    /**
     * Set fill to brand900
     * @example
     * ```tsx
     * <Box as="svg" fillBrand900></Box>
     * <Box as="svg" fillBrand900--T20></Box> // transparentize color
     * <Box as="svg" fillBrand900--O20></Box> // opacify color
     * <Box as="svg" fillBrand900--L20></Box> // lighten color
     * <Box as="svg" fillBrand900--D20></Box> // darken color
     * ```
     * @see https://fower.vercel.app/docs/fill
     * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
     */
    fillBrand900?: ResponsiveBoolean
    /**
     * Set fill to pink50
     * @example
     * ```tsx
     * <Box as="svg" fillPink50></Box>
     * <Box as="svg" fillPink50--T20></Box> // transparentize color
     * <Box as="svg" fillPink50--O20></Box> // opacify color
     * <Box as="svg" fillPink50--L20></Box> // lighten color
     * <Box as="svg" fillPink50--D20></Box> // darken color
     * ```
     * @see https://fower.vercel.app/docs/fill
     * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
     */
    fillPink50?: ResponsiveBoolean
    /**
     * Set fill to pink100
     * @example
     * ```tsx
     * <Box as="svg" fillPink100></Box>
     * <Box as="svg" fillPink100--T20></Box> // transparentize color
     * <Box as="svg" fillPink100--O20></Box> // opacify color
     * <Box as="svg" fillPink100--L20></Box> // lighten color
     * <Box as="svg" fillPink100--D20></Box> // darken color
     * ```
     * @see https://fower.vercel.app/docs/fill
     * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
     */
    fillPink100?: ResponsiveBoolean
    /**
     * Set fill to pink200
     * @example
     * ```tsx
     * <Box as="svg" fillPink200></Box>
     * <Box as="svg" fillPink200--T20></Box> // transparentize color
     * <Box as="svg" fillPink200--O20></Box> // opacify color
     * <Box as="svg" fillPink200--L20></Box> // lighten color
     * <Box as="svg" fillPink200--D20></Box> // darken color
     * ```
     * @see https://fower.vercel.app/docs/fill
     * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
     */
    fillPink200?: ResponsiveBoolean
    /**
     * Set fill to pink300
     * @example
     * ```tsx
     * <Box as="svg" fillPink300></Box>
     * <Box as="svg" fillPink300--T20></Box> // transparentize color
     * <Box as="svg" fillPink300--O20></Box> // opacify color
     * <Box as="svg" fillPink300--L20></Box> // lighten color
     * <Box as="svg" fillPink300--D20></Box> // darken color
     * ```
     * @see https://fower.vercel.app/docs/fill
     * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
     */
    fillPink300?: ResponsiveBoolean
    /**
     * Set fill to pink400
     * @example
     * ```tsx
     * <Box as="svg" fillPink400></Box>
     * <Box as="svg" fillPink400--T20></Box> // transparentize color
     * <Box as="svg" fillPink400--O20></Box> // opacify color
     * <Box as="svg" fillPink400--L20></Box> // lighten color
     * <Box as="svg" fillPink400--D20></Box> // darken color
     * ```
     * @see https://fower.vercel.app/docs/fill
     * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
     */
    fillPink400?: ResponsiveBoolean
    /**
     * Set fill to pink500
     * @example
     * ```tsx
     * <Box as="svg" fillPink500></Box>
     * <Box as="svg" fillPink500--T20></Box> // transparentize color
     * <Box as="svg" fillPink500--O20></Box> // opacify color
     * <Box as="svg" fillPink500--L20></Box> // lighten color
     * <Box as="svg" fillPink500--D20></Box> // darken color
     * ```
     * @see https://fower.vercel.app/docs/fill
     * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
     */
    fillPink500?: ResponsiveBoolean
    /**
     * Set fill to pink600
     * @example
     * ```tsx
     * <Box as="svg" fillPink600></Box>
     * <Box as="svg" fillPink600--T20></Box> // transparentize color
     * <Box as="svg" fillPink600--O20></Box> // opacify color
     * <Box as="svg" fillPink600--L20></Box> // lighten color
     * <Box as="svg" fillPink600--D20></Box> // darken color
     * ```
     * @see https://fower.vercel.app/docs/fill
     * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
     */
    fillPink600?: ResponsiveBoolean
    /**
     * Set fill to pink700
     * @example
     * ```tsx
     * <Box as="svg" fillPink700></Box>
     * <Box as="svg" fillPink700--T20></Box> // transparentize color
     * <Box as="svg" fillPink700--O20></Box> // opacify color
     * <Box as="svg" fillPink700--L20></Box> // lighten color
     * <Box as="svg" fillPink700--D20></Box> // darken color
     * ```
     * @see https://fower.vercel.app/docs/fill
     * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
     */
    fillPink700?: ResponsiveBoolean
    /**
     * Set fill to pink800
     * @example
     * ```tsx
     * <Box as="svg" fillPink800></Box>
     * <Box as="svg" fillPink800--T20></Box> // transparentize color
     * <Box as="svg" fillPink800--O20></Box> // opacify color
     * <Box as="svg" fillPink800--L20></Box> // lighten color
     * <Box as="svg" fillPink800--D20></Box> // darken color
     * ```
     * @see https://fower.vercel.app/docs/fill
     * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
     */
    fillPink800?: ResponsiveBoolean
    /**
     * Set fill to pink900
     * @example
     * ```tsx
     * <Box as="svg" fillPink900></Box>
     * <Box as="svg" fillPink900--T20></Box> // transparentize color
     * <Box as="svg" fillPink900--O20></Box> // opacify color
     * <Box as="svg" fillPink900--L20></Box> // lighten color
     * <Box as="svg" fillPink900--D20></Box> // darken color
     * ```
     * @see https://fower.vercel.app/docs/fill
     * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
     */
    fillPink900?: ResponsiveBoolean
    /**
     * Set fill to fuchsia50
     * @example
     * ```tsx
     * <Box as="svg" fillFuchsia50></Box>
     * <Box as="svg" fillFuchsia50--T20></Box> // transparentize color
     * <Box as="svg" fillFuchsia50--O20></Box> // opacify color
     * <Box as="svg" fillFuchsia50--L20></Box> // lighten color
     * <Box as="svg" fillFuchsia50--D20></Box> // darken color
     * ```
     * @see https://fower.vercel.app/docs/fill
     * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
     */
    fillFuchsia50?: ResponsiveBoolean
    /**
     * Set fill to fuchsia100
     * @example
     * ```tsx
     * <Box as="svg" fillFuchsia100></Box>
     * <Box as="svg" fillFuchsia100--T20></Box> // transparentize color
     * <Box as="svg" fillFuchsia100--O20></Box> // opacify color
     * <Box as="svg" fillFuchsia100--L20></Box> // lighten color
     * <Box as="svg" fillFuchsia100--D20></Box> // darken color
     * ```
     * @see https://fower.vercel.app/docs/fill
     * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
     */
    fillFuchsia100?: ResponsiveBoolean
    /**
     * Set fill to fuchsia200
     * @example
     * ```tsx
     * <Box as="svg" fillFuchsia200></Box>
     * <Box as="svg" fillFuchsia200--T20></Box> // transparentize color
     * <Box as="svg" fillFuchsia200--O20></Box> // opacify color
     * <Box as="svg" fillFuchsia200--L20></Box> // lighten color
     * <Box as="svg" fillFuchsia200--D20></Box> // darken color
     * ```
     * @see https://fower.vercel.app/docs/fill
     * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
     */
    fillFuchsia200?: ResponsiveBoolean
    /**
     * Set fill to fuchsia300
     * @example
     * ```tsx
     * <Box as="svg" fillFuchsia300></Box>
     * <Box as="svg" fillFuchsia300--T20></Box> // transparentize color
     * <Box as="svg" fillFuchsia300--O20></Box> // opacify color
     * <Box as="svg" fillFuchsia300--L20></Box> // lighten color
     * <Box as="svg" fillFuchsia300--D20></Box> // darken color
     * ```
     * @see https://fower.vercel.app/docs/fill
     * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
     */
    fillFuchsia300?: ResponsiveBoolean
    /**
     * Set fill to fuchsia400
     * @example
     * ```tsx
     * <Box as="svg" fillFuchsia400></Box>
     * <Box as="svg" fillFuchsia400--T20></Box> // transparentize color
     * <Box as="svg" fillFuchsia400--O20></Box> // opacify color
     * <Box as="svg" fillFuchsia400--L20></Box> // lighten color
     * <Box as="svg" fillFuchsia400--D20></Box> // darken color
     * ```
     * @see https://fower.vercel.app/docs/fill
     * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
     */
    fillFuchsia400?: ResponsiveBoolean
    /**
     * Set fill to fuchsia500
     * @example
     * ```tsx
     * <Box as="svg" fillFuchsia500></Box>
     * <Box as="svg" fillFuchsia500--T20></Box> // transparentize color
     * <Box as="svg" fillFuchsia500--O20></Box> // opacify color
     * <Box as="svg" fillFuchsia500--L20></Box> // lighten color
     * <Box as="svg" fillFuchsia500--D20></Box> // darken color
     * ```
     * @see https://fower.vercel.app/docs/fill
     * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
     */
    fillFuchsia500?: ResponsiveBoolean
    /**
     * Set fill to fuchsia600
     * @example
     * ```tsx
     * <Box as="svg" fillFuchsia600></Box>
     * <Box as="svg" fillFuchsia600--T20></Box> // transparentize color
     * <Box as="svg" fillFuchsia600--O20></Box> // opacify color
     * <Box as="svg" fillFuchsia600--L20></Box> // lighten color
     * <Box as="svg" fillFuchsia600--D20></Box> // darken color
     * ```
     * @see https://fower.vercel.app/docs/fill
     * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
     */
    fillFuchsia600?: ResponsiveBoolean
    /**
     * Set fill to fuchsia700
     * @example
     * ```tsx
     * <Box as="svg" fillFuchsia700></Box>
     * <Box as="svg" fillFuchsia700--T20></Box> // transparentize color
     * <Box as="svg" fillFuchsia700--O20></Box> // opacify color
     * <Box as="svg" fillFuchsia700--L20></Box> // lighten color
     * <Box as="svg" fillFuchsia700--D20></Box> // darken color
     * ```
     * @see https://fower.vercel.app/docs/fill
     * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
     */
    fillFuchsia700?: ResponsiveBoolean
    /**
     * Set fill to fuchsia800
     * @example
     * ```tsx
     * <Box as="svg" fillFuchsia800></Box>
     * <Box as="svg" fillFuchsia800--T20></Box> // transparentize color
     * <Box as="svg" fillFuchsia800--O20></Box> // opacify color
     * <Box as="svg" fillFuchsia800--L20></Box> // lighten color
     * <Box as="svg" fillFuchsia800--D20></Box> // darken color
     * ```
     * @see https://fower.vercel.app/docs/fill
     * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
     */
    fillFuchsia800?: ResponsiveBoolean
    /**
     * Set fill to fuchsia900
     * @example
     * ```tsx
     * <Box as="svg" fillFuchsia900></Box>
     * <Box as="svg" fillFuchsia900--T20></Box> // transparentize color
     * <Box as="svg" fillFuchsia900--O20></Box> // opacify color
     * <Box as="svg" fillFuchsia900--L20></Box> // lighten color
     * <Box as="svg" fillFuchsia900--D20></Box> // darken color
     * ```
     * @see https://fower.vercel.app/docs/fill
     * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
     */
    fillFuchsia900?: ResponsiveBoolean
    /**
     * Set fill to purple50
     * @example
     * ```tsx
     * <Box as="svg" fillPurple50></Box>
     * <Box as="svg" fillPurple50--T20></Box> // transparentize color
     * <Box as="svg" fillPurple50--O20></Box> // opacify color
     * <Box as="svg" fillPurple50--L20></Box> // lighten color
     * <Box as="svg" fillPurple50--D20></Box> // darken color
     * ```
     * @see https://fower.vercel.app/docs/fill
     * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
     */
    fillPurple50?: ResponsiveBoolean
    /**
     * Set fill to purple100
     * @example
     * ```tsx
     * <Box as="svg" fillPurple100></Box>
     * <Box as="svg" fillPurple100--T20></Box> // transparentize color
     * <Box as="svg" fillPurple100--O20></Box> // opacify color
     * <Box as="svg" fillPurple100--L20></Box> // lighten color
     * <Box as="svg" fillPurple100--D20></Box> // darken color
     * ```
     * @see https://fower.vercel.app/docs/fill
     * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
     */
    fillPurple100?: ResponsiveBoolean
    /**
     * Set fill to purple200
     * @example
     * ```tsx
     * <Box as="svg" fillPurple200></Box>
     * <Box as="svg" fillPurple200--T20></Box> // transparentize color
     * <Box as="svg" fillPurple200--O20></Box> // opacify color
     * <Box as="svg" fillPurple200--L20></Box> // lighten color
     * <Box as="svg" fillPurple200--D20></Box> // darken color
     * ```
     * @see https://fower.vercel.app/docs/fill
     * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
     */
    fillPurple200?: ResponsiveBoolean
    /**
     * Set fill to purple300
     * @example
     * ```tsx
     * <Box as="svg" fillPurple300></Box>
     * <Box as="svg" fillPurple300--T20></Box> // transparentize color
     * <Box as="svg" fillPurple300--O20></Box> // opacify color
     * <Box as="svg" fillPurple300--L20></Box> // lighten color
     * <Box as="svg" fillPurple300--D20></Box> // darken color
     * ```
     * @see https://fower.vercel.app/docs/fill
     * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
     */
    fillPurple300?: ResponsiveBoolean
    /**
     * Set fill to purple400
     * @example
     * ```tsx
     * <Box as="svg" fillPurple400></Box>
     * <Box as="svg" fillPurple400--T20></Box> // transparentize color
     * <Box as="svg" fillPurple400--O20></Box> // opacify color
     * <Box as="svg" fillPurple400--L20></Box> // lighten color
     * <Box as="svg" fillPurple400--D20></Box> // darken color
     * ```
     * @see https://fower.vercel.app/docs/fill
     * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
     */
    fillPurple400?: ResponsiveBoolean
    /**
     * Set fill to purple500
     * @example
     * ```tsx
     * <Box as="svg" fillPurple500></Box>
     * <Box as="svg" fillPurple500--T20></Box> // transparentize color
     * <Box as="svg" fillPurple500--O20></Box> // opacify color
     * <Box as="svg" fillPurple500--L20></Box> // lighten color
     * <Box as="svg" fillPurple500--D20></Box> // darken color
     * ```
     * @see https://fower.vercel.app/docs/fill
     * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
     */
    fillPurple500?: ResponsiveBoolean
    /**
     * Set fill to purple600
     * @example
     * ```tsx
     * <Box as="svg" fillPurple600></Box>
     * <Box as="svg" fillPurple600--T20></Box> // transparentize color
     * <Box as="svg" fillPurple600--O20></Box> // opacify color
     * <Box as="svg" fillPurple600--L20></Box> // lighten color
     * <Box as="svg" fillPurple600--D20></Box> // darken color
     * ```
     * @see https://fower.vercel.app/docs/fill
     * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
     */
    fillPurple600?: ResponsiveBoolean
    /**
     * Set fill to purple700
     * @example
     * ```tsx
     * <Box as="svg" fillPurple700></Box>
     * <Box as="svg" fillPurple700--T20></Box> // transparentize color
     * <Box as="svg" fillPurple700--O20></Box> // opacify color
     * <Box as="svg" fillPurple700--L20></Box> // lighten color
     * <Box as="svg" fillPurple700--D20></Box> // darken color
     * ```
     * @see https://fower.vercel.app/docs/fill
     * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
     */
    fillPurple700?: ResponsiveBoolean
    /**
     * Set fill to purple800
     * @example
     * ```tsx
     * <Box as="svg" fillPurple800></Box>
     * <Box as="svg" fillPurple800--T20></Box> // transparentize color
     * <Box as="svg" fillPurple800--O20></Box> // opacify color
     * <Box as="svg" fillPurple800--L20></Box> // lighten color
     * <Box as="svg" fillPurple800--D20></Box> // darken color
     * ```
     * @see https://fower.vercel.app/docs/fill
     * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
     */
    fillPurple800?: ResponsiveBoolean
    /**
     * Set fill to purple900
     * @example
     * ```tsx
     * <Box as="svg" fillPurple900></Box>
     * <Box as="svg" fillPurple900--T20></Box> // transparentize color
     * <Box as="svg" fillPurple900--O20></Box> // opacify color
     * <Box as="svg" fillPurple900--L20></Box> // lighten color
     * <Box as="svg" fillPurple900--D20></Box> // darken color
     * ```
     * @see https://fower.vercel.app/docs/fill
     * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
     */
    fillPurple900?: ResponsiveBoolean
    /**
     * Set fill to violet50
     * @example
     * ```tsx
     * <Box as="svg" fillViolet50></Box>
     * <Box as="svg" fillViolet50--T20></Box> // transparentize color
     * <Box as="svg" fillViolet50--O20></Box> // opacify color
     * <Box as="svg" fillViolet50--L20></Box> // lighten color
     * <Box as="svg" fillViolet50--D20></Box> // darken color
     * ```
     * @see https://fower.vercel.app/docs/fill
     * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
     */
    fillViolet50?: ResponsiveBoolean
    /**
     * Set fill to violet100
     * @example
     * ```tsx
     * <Box as="svg" fillViolet100></Box>
     * <Box as="svg" fillViolet100--T20></Box> // transparentize color
     * <Box as="svg" fillViolet100--O20></Box> // opacify color
     * <Box as="svg" fillViolet100--L20></Box> // lighten color
     * <Box as="svg" fillViolet100--D20></Box> // darken color
     * ```
     * @see https://fower.vercel.app/docs/fill
     * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
     */
    fillViolet100?: ResponsiveBoolean
    /**
     * Set fill to violet200
     * @example
     * ```tsx
     * <Box as="svg" fillViolet200></Box>
     * <Box as="svg" fillViolet200--T20></Box> // transparentize color
     * <Box as="svg" fillViolet200--O20></Box> // opacify color
     * <Box as="svg" fillViolet200--L20></Box> // lighten color
     * <Box as="svg" fillViolet200--D20></Box> // darken color
     * ```
     * @see https://fower.vercel.app/docs/fill
     * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
     */
    fillViolet200?: ResponsiveBoolean
    /**
     * Set fill to violet300
     * @example
     * ```tsx
     * <Box as="svg" fillViolet300></Box>
     * <Box as="svg" fillViolet300--T20></Box> // transparentize color
     * <Box as="svg" fillViolet300--O20></Box> // opacify color
     * <Box as="svg" fillViolet300--L20></Box> // lighten color
     * <Box as="svg" fillViolet300--D20></Box> // darken color
     * ```
     * @see https://fower.vercel.app/docs/fill
     * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
     */
    fillViolet300?: ResponsiveBoolean
    /**
     * Set fill to violet400
     * @example
     * ```tsx
     * <Box as="svg" fillViolet400></Box>
     * <Box as="svg" fillViolet400--T20></Box> // transparentize color
     * <Box as="svg" fillViolet400--O20></Box> // opacify color
     * <Box as="svg" fillViolet400--L20></Box> // lighten color
     * <Box as="svg" fillViolet400--D20></Box> // darken color
     * ```
     * @see https://fower.vercel.app/docs/fill
     * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
     */
    fillViolet400?: ResponsiveBoolean
    /**
     * Set fill to violet500
     * @example
     * ```tsx
     * <Box as="svg" fillViolet500></Box>
     * <Box as="svg" fillViolet500--T20></Box> // transparentize color
     * <Box as="svg" fillViolet500--O20></Box> // opacify color
     * <Box as="svg" fillViolet500--L20></Box> // lighten color
     * <Box as="svg" fillViolet500--D20></Box> // darken color
     * ```
     * @see https://fower.vercel.app/docs/fill
     * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
     */
    fillViolet500?: ResponsiveBoolean
    /**
     * Set fill to violet600
     * @example
     * ```tsx
     * <Box as="svg" fillViolet600></Box>
     * <Box as="svg" fillViolet600--T20></Box> // transparentize color
     * <Box as="svg" fillViolet600--O20></Box> // opacify color
     * <Box as="svg" fillViolet600--L20></Box> // lighten color
     * <Box as="svg" fillViolet600--D20></Box> // darken color
     * ```
     * @see https://fower.vercel.app/docs/fill
     * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
     */
    fillViolet600?: ResponsiveBoolean
    /**
     * Set fill to violet700
     * @example
     * ```tsx
     * <Box as="svg" fillViolet700></Box>
     * <Box as="svg" fillViolet700--T20></Box> // transparentize color
     * <Box as="svg" fillViolet700--O20></Box> // opacify color
     * <Box as="svg" fillViolet700--L20></Box> // lighten color
     * <Box as="svg" fillViolet700--D20></Box> // darken color
     * ```
     * @see https://fower.vercel.app/docs/fill
     * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
     */
    fillViolet700?: ResponsiveBoolean
    /**
     * Set fill to violet800
     * @example
     * ```tsx
     * <Box as="svg" fillViolet800></Box>
     * <Box as="svg" fillViolet800--T20></Box> // transparentize color
     * <Box as="svg" fillViolet800--O20></Box> // opacify color
     * <Box as="svg" fillViolet800--L20></Box> // lighten color
     * <Box as="svg" fillViolet800--D20></Box> // darken color
     * ```
     * @see https://fower.vercel.app/docs/fill
     * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
     */
    fillViolet800?: ResponsiveBoolean
    /**
     * Set fill to violet900
     * @example
     * ```tsx
     * <Box as="svg" fillViolet900></Box>
     * <Box as="svg" fillViolet900--T20></Box> // transparentize color
     * <Box as="svg" fillViolet900--O20></Box> // opacify color
     * <Box as="svg" fillViolet900--L20></Box> // lighten color
     * <Box as="svg" fillViolet900--D20></Box> // darken color
     * ```
     * @see https://fower.vercel.app/docs/fill
     * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
     */
    fillViolet900?: ResponsiveBoolean
    /**
     * Set fill to indigo50
     * @example
     * ```tsx
     * <Box as="svg" fillIndigo50></Box>
     * <Box as="svg" fillIndigo50--T20></Box> // transparentize color
     * <Box as="svg" fillIndigo50--O20></Box> // opacify color
     * <Box as="svg" fillIndigo50--L20></Box> // lighten color
     * <Box as="svg" fillIndigo50--D20></Box> // darken color
     * ```
     * @see https://fower.vercel.app/docs/fill
     * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
     */
    fillIndigo50?: ResponsiveBoolean
    /**
     * Set fill to indigo100
     * @example
     * ```tsx
     * <Box as="svg" fillIndigo100></Box>
     * <Box as="svg" fillIndigo100--T20></Box> // transparentize color
     * <Box as="svg" fillIndigo100--O20></Box> // opacify color
     * <Box as="svg" fillIndigo100--L20></Box> // lighten color
     * <Box as="svg" fillIndigo100--D20></Box> // darken color
     * ```
     * @see https://fower.vercel.app/docs/fill
     * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
     */
    fillIndigo100?: ResponsiveBoolean
    /**
     * Set fill to indigo200
     * @example
     * ```tsx
     * <Box as="svg" fillIndigo200></Box>
     * <Box as="svg" fillIndigo200--T20></Box> // transparentize color
     * <Box as="svg" fillIndigo200--O20></Box> // opacify color
     * <Box as="svg" fillIndigo200--L20></Box> // lighten color
     * <Box as="svg" fillIndigo200--D20></Box> // darken color
     * ```
     * @see https://fower.vercel.app/docs/fill
     * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
     */
    fillIndigo200?: ResponsiveBoolean
    /**
     * Set fill to indigo300
     * @example
     * ```tsx
     * <Box as="svg" fillIndigo300></Box>
     * <Box as="svg" fillIndigo300--T20></Box> // transparentize color
     * <Box as="svg" fillIndigo300--O20></Box> // opacify color
     * <Box as="svg" fillIndigo300--L20></Box> // lighten color
     * <Box as="svg" fillIndigo300--D20></Box> // darken color
     * ```
     * @see https://fower.vercel.app/docs/fill
     * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
     */
    fillIndigo300?: ResponsiveBoolean
    /**
     * Set fill to indigo400
     * @example
     * ```tsx
     * <Box as="svg" fillIndigo400></Box>
     * <Box as="svg" fillIndigo400--T20></Box> // transparentize color
     * <Box as="svg" fillIndigo400--O20></Box> // opacify color
     * <Box as="svg" fillIndigo400--L20></Box> // lighten color
     * <Box as="svg" fillIndigo400--D20></Box> // darken color
     * ```
     * @see https://fower.vercel.app/docs/fill
     * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
     */
    fillIndigo400?: ResponsiveBoolean
    /**
     * Set fill to indigo500
     * @example
     * ```tsx
     * <Box as="svg" fillIndigo500></Box>
     * <Box as="svg" fillIndigo500--T20></Box> // transparentize color
     * <Box as="svg" fillIndigo500--O20></Box> // opacify color
     * <Box as="svg" fillIndigo500--L20></Box> // lighten color
     * <Box as="svg" fillIndigo500--D20></Box> // darken color
     * ```
     * @see https://fower.vercel.app/docs/fill
     * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
     */
    fillIndigo500?: ResponsiveBoolean
    /**
     * Set fill to indigo600
     * @example
     * ```tsx
     * <Box as="svg" fillIndigo600></Box>
     * <Box as="svg" fillIndigo600--T20></Box> // transparentize color
     * <Box as="svg" fillIndigo600--O20></Box> // opacify color
     * <Box as="svg" fillIndigo600--L20></Box> // lighten color
     * <Box as="svg" fillIndigo600--D20></Box> // darken color
     * ```
     * @see https://fower.vercel.app/docs/fill
     * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
     */
    fillIndigo600?: ResponsiveBoolean
    /**
     * Set fill to indigo700
     * @example
     * ```tsx
     * <Box as="svg" fillIndigo700></Box>
     * <Box as="svg" fillIndigo700--T20></Box> // transparentize color
     * <Box as="svg" fillIndigo700--O20></Box> // opacify color
     * <Box as="svg" fillIndigo700--L20></Box> // lighten color
     * <Box as="svg" fillIndigo700--D20></Box> // darken color
     * ```
     * @see https://fower.vercel.app/docs/fill
     * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
     */
    fillIndigo700?: ResponsiveBoolean
    /**
     * Set fill to indigo800
     * @example
     * ```tsx
     * <Box as="svg" fillIndigo800></Box>
     * <Box as="svg" fillIndigo800--T20></Box> // transparentize color
     * <Box as="svg" fillIndigo800--O20></Box> // opacify color
     * <Box as="svg" fillIndigo800--L20></Box> // lighten color
     * <Box as="svg" fillIndigo800--D20></Box> // darken color
     * ```
     * @see https://fower.vercel.app/docs/fill
     * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
     */
    fillIndigo800?: ResponsiveBoolean
    /**
     * Set fill to indigo900
     * @example
     * ```tsx
     * <Box as="svg" fillIndigo900></Box>
     * <Box as="svg" fillIndigo900--T20></Box> // transparentize color
     * <Box as="svg" fillIndigo900--O20></Box> // opacify color
     * <Box as="svg" fillIndigo900--L20></Box> // lighten color
     * <Box as="svg" fillIndigo900--D20></Box> // darken color
     * ```
     * @see https://fower.vercel.app/docs/fill
     * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
     */
    fillIndigo900?: ResponsiveBoolean
    /**
     * Set fill to blue50
     * @example
     * ```tsx
     * <Box as="svg" fillBlue50></Box>
     * <Box as="svg" fillBlue50--T20></Box> // transparentize color
     * <Box as="svg" fillBlue50--O20></Box> // opacify color
     * <Box as="svg" fillBlue50--L20></Box> // lighten color
     * <Box as="svg" fillBlue50--D20></Box> // darken color
     * ```
     * @see https://fower.vercel.app/docs/fill
     * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
     */
    fillBlue50?: ResponsiveBoolean
    /**
     * Set fill to blue100
     * @example
     * ```tsx
     * <Box as="svg" fillBlue100></Box>
     * <Box as="svg" fillBlue100--T20></Box> // transparentize color
     * <Box as="svg" fillBlue100--O20></Box> // opacify color
     * <Box as="svg" fillBlue100--L20></Box> // lighten color
     * <Box as="svg" fillBlue100--D20></Box> // darken color
     * ```
     * @see https://fower.vercel.app/docs/fill
     * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
     */
    fillBlue100?: ResponsiveBoolean
    /**
     * Set fill to blue200
     * @example
     * ```tsx
     * <Box as="svg" fillBlue200></Box>
     * <Box as="svg" fillBlue200--T20></Box> // transparentize color
     * <Box as="svg" fillBlue200--O20></Box> // opacify color
     * <Box as="svg" fillBlue200--L20></Box> // lighten color
     * <Box as="svg" fillBlue200--D20></Box> // darken color
     * ```
     * @see https://fower.vercel.app/docs/fill
     * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
     */
    fillBlue200?: ResponsiveBoolean
    /**
     * Set fill to blue300
     * @example
     * ```tsx
     * <Box as="svg" fillBlue300></Box>
     * <Box as="svg" fillBlue300--T20></Box> // transparentize color
     * <Box as="svg" fillBlue300--O20></Box> // opacify color
     * <Box as="svg" fillBlue300--L20></Box> // lighten color
     * <Box as="svg" fillBlue300--D20></Box> // darken color
     * ```
     * @see https://fower.vercel.app/docs/fill
     * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
     */
    fillBlue300?: ResponsiveBoolean
    /**
     * Set fill to blue400
     * @example
     * ```tsx
     * <Box as="svg" fillBlue400></Box>
     * <Box as="svg" fillBlue400--T20></Box> // transparentize color
     * <Box as="svg" fillBlue400--O20></Box> // opacify color
     * <Box as="svg" fillBlue400--L20></Box> // lighten color
     * <Box as="svg" fillBlue400--D20></Box> // darken color
     * ```
     * @see https://fower.vercel.app/docs/fill
     * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
     */
    fillBlue400?: ResponsiveBoolean
    /**
     * Set fill to blue500
     * @example
     * ```tsx
     * <Box as="svg" fillBlue500></Box>
     * <Box as="svg" fillBlue500--T20></Box> // transparentize color
     * <Box as="svg" fillBlue500--O20></Box> // opacify color
     * <Box as="svg" fillBlue500--L20></Box> // lighten color
     * <Box as="svg" fillBlue500--D20></Box> // darken color
     * ```
     * @see https://fower.vercel.app/docs/fill
     * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
     */
    fillBlue500?: ResponsiveBoolean
    /**
     * Set fill to blue600
     * @example
     * ```tsx
     * <Box as="svg" fillBlue600></Box>
     * <Box as="svg" fillBlue600--T20></Box> // transparentize color
     * <Box as="svg" fillBlue600--O20></Box> // opacify color
     * <Box as="svg" fillBlue600--L20></Box> // lighten color
     * <Box as="svg" fillBlue600--D20></Box> // darken color
     * ```
     * @see https://fower.vercel.app/docs/fill
     * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
     */
    fillBlue600?: ResponsiveBoolean
    /**
     * Set fill to blue700
     * @example
     * ```tsx
     * <Box as="svg" fillBlue700></Box>
     * <Box as="svg" fillBlue700--T20></Box> // transparentize color
     * <Box as="svg" fillBlue700--O20></Box> // opacify color
     * <Box as="svg" fillBlue700--L20></Box> // lighten color
     * <Box as="svg" fillBlue700--D20></Box> // darken color
     * ```
     * @see https://fower.vercel.app/docs/fill
     * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
     */
    fillBlue700?: ResponsiveBoolean
    /**
     * Set fill to blue800
     * @example
     * ```tsx
     * <Box as="svg" fillBlue800></Box>
     * <Box as="svg" fillBlue800--T20></Box> // transparentize color
     * <Box as="svg" fillBlue800--O20></Box> // opacify color
     * <Box as="svg" fillBlue800--L20></Box> // lighten color
     * <Box as="svg" fillBlue800--D20></Box> // darken color
     * ```
     * @see https://fower.vercel.app/docs/fill
     * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
     */
    fillBlue800?: ResponsiveBoolean
    /**
     * Set fill to blue900
     * @example
     * ```tsx
     * <Box as="svg" fillBlue900></Box>
     * <Box as="svg" fillBlue900--T20></Box> // transparentize color
     * <Box as="svg" fillBlue900--O20></Box> // opacify color
     * <Box as="svg" fillBlue900--L20></Box> // lighten color
     * <Box as="svg" fillBlue900--D20></Box> // darken color
     * ```
     * @see https://fower.vercel.app/docs/fill
     * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
     */
    fillBlue900?: ResponsiveBoolean
    /**
     * Set fill to cyan50
     * @example
     * ```tsx
     * <Box as="svg" fillCyan50></Box>
     * <Box as="svg" fillCyan50--T20></Box> // transparentize color
     * <Box as="svg" fillCyan50--O20></Box> // opacify color
     * <Box as="svg" fillCyan50--L20></Box> // lighten color
     * <Box as="svg" fillCyan50--D20></Box> // darken color
     * ```
     * @see https://fower.vercel.app/docs/fill
     * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
     */
    fillCyan50?: ResponsiveBoolean
    /**
     * Set fill to cyan100
     * @example
     * ```tsx
     * <Box as="svg" fillCyan100></Box>
     * <Box as="svg" fillCyan100--T20></Box> // transparentize color
     * <Box as="svg" fillCyan100--O20></Box> // opacify color
     * <Box as="svg" fillCyan100--L20></Box> // lighten color
     * <Box as="svg" fillCyan100--D20></Box> // darken color
     * ```
     * @see https://fower.vercel.app/docs/fill
     * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
     */
    fillCyan100?: ResponsiveBoolean
    /**
     * Set fill to cyan200
     * @example
     * ```tsx
     * <Box as="svg" fillCyan200></Box>
     * <Box as="svg" fillCyan200--T20></Box> // transparentize color
     * <Box as="svg" fillCyan200--O20></Box> // opacify color
     * <Box as="svg" fillCyan200--L20></Box> // lighten color
     * <Box as="svg" fillCyan200--D20></Box> // darken color
     * ```
     * @see https://fower.vercel.app/docs/fill
     * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
     */
    fillCyan200?: ResponsiveBoolean
    /**
     * Set fill to cyan300
     * @example
     * ```tsx
     * <Box as="svg" fillCyan300></Box>
     * <Box as="svg" fillCyan300--T20></Box> // transparentize color
     * <Box as="svg" fillCyan300--O20></Box> // opacify color
     * <Box as="svg" fillCyan300--L20></Box> // lighten color
     * <Box as="svg" fillCyan300--D20></Box> // darken color
     * ```
     * @see https://fower.vercel.app/docs/fill
     * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
     */
    fillCyan300?: ResponsiveBoolean
    /**
     * Set fill to cyan400
     * @example
     * ```tsx
     * <Box as="svg" fillCyan400></Box>
     * <Box as="svg" fillCyan400--T20></Box> // transparentize color
     * <Box as="svg" fillCyan400--O20></Box> // opacify color
     * <Box as="svg" fillCyan400--L20></Box> // lighten color
     * <Box as="svg" fillCyan400--D20></Box> // darken color
     * ```
     * @see https://fower.vercel.app/docs/fill
     * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
     */
    fillCyan400?: ResponsiveBoolean
    /**
     * Set fill to cyan500
     * @example
     * ```tsx
     * <Box as="svg" fillCyan500></Box>
     * <Box as="svg" fillCyan500--T20></Box> // transparentize color
     * <Box as="svg" fillCyan500--O20></Box> // opacify color
     * <Box as="svg" fillCyan500--L20></Box> // lighten color
     * <Box as="svg" fillCyan500--D20></Box> // darken color
     * ```
     * @see https://fower.vercel.app/docs/fill
     * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
     */
    fillCyan500?: ResponsiveBoolean
    /**
     * Set fill to cyan600
     * @example
     * ```tsx
     * <Box as="svg" fillCyan600></Box>
     * <Box as="svg" fillCyan600--T20></Box> // transparentize color
     * <Box as="svg" fillCyan600--O20></Box> // opacify color
     * <Box as="svg" fillCyan600--L20></Box> // lighten color
     * <Box as="svg" fillCyan600--D20></Box> // darken color
     * ```
     * @see https://fower.vercel.app/docs/fill
     * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
     */
    fillCyan600?: ResponsiveBoolean
    /**
     * Set fill to cyan700
     * @example
     * ```tsx
     * <Box as="svg" fillCyan700></Box>
     * <Box as="svg" fillCyan700--T20></Box> // transparentize color
     * <Box as="svg" fillCyan700--O20></Box> // opacify color
     * <Box as="svg" fillCyan700--L20></Box> // lighten color
     * <Box as="svg" fillCyan700--D20></Box> // darken color
     * ```
     * @see https://fower.vercel.app/docs/fill
     * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
     */
    fillCyan700?: ResponsiveBoolean
    /**
     * Set fill to cyan800
     * @example
     * ```tsx
     * <Box as="svg" fillCyan800></Box>
     * <Box as="svg" fillCyan800--T20></Box> // transparentize color
     * <Box as="svg" fillCyan800--O20></Box> // opacify color
     * <Box as="svg" fillCyan800--L20></Box> // lighten color
     * <Box as="svg" fillCyan800--D20></Box> // darken color
     * ```
     * @see https://fower.vercel.app/docs/fill
     * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
     */
    fillCyan800?: ResponsiveBoolean
    /**
     * Set fill to cyan900
     * @example
     * ```tsx
     * <Box as="svg" fillCyan900></Box>
     * <Box as="svg" fillCyan900--T20></Box> // transparentize color
     * <Box as="svg" fillCyan900--O20></Box> // opacify color
     * <Box as="svg" fillCyan900--L20></Box> // lighten color
     * <Box as="svg" fillCyan900--D20></Box> // darken color
     * ```
     * @see https://fower.vercel.app/docs/fill
     * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
     */
    fillCyan900?: ResponsiveBoolean
    /**
     * Set fill to teal50
     * @example
     * ```tsx
     * <Box as="svg" fillTeal50></Box>
     * <Box as="svg" fillTeal50--T20></Box> // transparentize color
     * <Box as="svg" fillTeal50--O20></Box> // opacify color
     * <Box as="svg" fillTeal50--L20></Box> // lighten color
     * <Box as="svg" fillTeal50--D20></Box> // darken color
     * ```
     * @see https://fower.vercel.app/docs/fill
     * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
     */
    fillTeal50?: ResponsiveBoolean
    /**
     * Set fill to teal100
     * @example
     * ```tsx
     * <Box as="svg" fillTeal100></Box>
     * <Box as="svg" fillTeal100--T20></Box> // transparentize color
     * <Box as="svg" fillTeal100--O20></Box> // opacify color
     * <Box as="svg" fillTeal100--L20></Box> // lighten color
     * <Box as="svg" fillTeal100--D20></Box> // darken color
     * ```
     * @see https://fower.vercel.app/docs/fill
     * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
     */
    fillTeal100?: ResponsiveBoolean
    /**
     * Set fill to teal200
     * @example
     * ```tsx
     * <Box as="svg" fillTeal200></Box>
     * <Box as="svg" fillTeal200--T20></Box> // transparentize color
     * <Box as="svg" fillTeal200--O20></Box> // opacify color
     * <Box as="svg" fillTeal200--L20></Box> // lighten color
     * <Box as="svg" fillTeal200--D20></Box> // darken color
     * ```
     * @see https://fower.vercel.app/docs/fill
     * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
     */
    fillTeal200?: ResponsiveBoolean
    /**
     * Set fill to teal300
     * @example
     * ```tsx
     * <Box as="svg" fillTeal300></Box>
     * <Box as="svg" fillTeal300--T20></Box> // transparentize color
     * <Box as="svg" fillTeal300--O20></Box> // opacify color
     * <Box as="svg" fillTeal300--L20></Box> // lighten color
     * <Box as="svg" fillTeal300--D20></Box> // darken color
     * ```
     * @see https://fower.vercel.app/docs/fill
     * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
     */
    fillTeal300?: ResponsiveBoolean
    /**
     * Set fill to teal400
     * @example
     * ```tsx
     * <Box as="svg" fillTeal400></Box>
     * <Box as="svg" fillTeal400--T20></Box> // transparentize color
     * <Box as="svg" fillTeal400--O20></Box> // opacify color
     * <Box as="svg" fillTeal400--L20></Box> // lighten color
     * <Box as="svg" fillTeal400--D20></Box> // darken color
     * ```
     * @see https://fower.vercel.app/docs/fill
     * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
     */
    fillTeal400?: ResponsiveBoolean
    /**
     * Set fill to teal500
     * @example
     * ```tsx
     * <Box as="svg" fillTeal500></Box>
     * <Box as="svg" fillTeal500--T20></Box> // transparentize color
     * <Box as="svg" fillTeal500--O20></Box> // opacify color
     * <Box as="svg" fillTeal500--L20></Box> // lighten color
     * <Box as="svg" fillTeal500--D20></Box> // darken color
     * ```
     * @see https://fower.vercel.app/docs/fill
     * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
     */
    fillTeal500?: ResponsiveBoolean
    /**
     * Set fill to teal600
     * @example
     * ```tsx
     * <Box as="svg" fillTeal600></Box>
     * <Box as="svg" fillTeal600--T20></Box> // transparentize color
     * <Box as="svg" fillTeal600--O20></Box> // opacify color
     * <Box as="svg" fillTeal600--L20></Box> // lighten color
     * <Box as="svg" fillTeal600--D20></Box> // darken color
     * ```
     * @see https://fower.vercel.app/docs/fill
     * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
     */
    fillTeal600?: ResponsiveBoolean
    /**
     * Set fill to teal700
     * @example
     * ```tsx
     * <Box as="svg" fillTeal700></Box>
     * <Box as="svg" fillTeal700--T20></Box> // transparentize color
     * <Box as="svg" fillTeal700--O20></Box> // opacify color
     * <Box as="svg" fillTeal700--L20></Box> // lighten color
     * <Box as="svg" fillTeal700--D20></Box> // darken color
     * ```
     * @see https://fower.vercel.app/docs/fill
     * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
     */
    fillTeal700?: ResponsiveBoolean
    /**
     * Set fill to teal800
     * @example
     * ```tsx
     * <Box as="svg" fillTeal800></Box>
     * <Box as="svg" fillTeal800--T20></Box> // transparentize color
     * <Box as="svg" fillTeal800--O20></Box> // opacify color
     * <Box as="svg" fillTeal800--L20></Box> // lighten color
     * <Box as="svg" fillTeal800--D20></Box> // darken color
     * ```
     * @see https://fower.vercel.app/docs/fill
     * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
     */
    fillTeal800?: ResponsiveBoolean
    /**
     * Set fill to teal900
     * @example
     * ```tsx
     * <Box as="svg" fillTeal900></Box>
     * <Box as="svg" fillTeal900--T20></Box> // transparentize color
     * <Box as="svg" fillTeal900--O20></Box> // opacify color
     * <Box as="svg" fillTeal900--L20></Box> // lighten color
     * <Box as="svg" fillTeal900--D20></Box> // darken color
     * ```
     * @see https://fower.vercel.app/docs/fill
     * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
     */
    fillTeal900?: ResponsiveBoolean
    /**
     * Set fill to green50
     * @example
     * ```tsx
     * <Box as="svg" fillGreen50></Box>
     * <Box as="svg" fillGreen50--T20></Box> // transparentize color
     * <Box as="svg" fillGreen50--O20></Box> // opacify color
     * <Box as="svg" fillGreen50--L20></Box> // lighten color
     * <Box as="svg" fillGreen50--D20></Box> // darken color
     * ```
     * @see https://fower.vercel.app/docs/fill
     * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
     */
    fillGreen50?: ResponsiveBoolean
    /**
     * Set fill to green100
     * @example
     * ```tsx
     * <Box as="svg" fillGreen100></Box>
     * <Box as="svg" fillGreen100--T20></Box> // transparentize color
     * <Box as="svg" fillGreen100--O20></Box> // opacify color
     * <Box as="svg" fillGreen100--L20></Box> // lighten color
     * <Box as="svg" fillGreen100--D20></Box> // darken color
     * ```
     * @see https://fower.vercel.app/docs/fill
     * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
     */
    fillGreen100?: ResponsiveBoolean
    /**
     * Set fill to green200
     * @example
     * ```tsx
     * <Box as="svg" fillGreen200></Box>
     * <Box as="svg" fillGreen200--T20></Box> // transparentize color
     * <Box as="svg" fillGreen200--O20></Box> // opacify color
     * <Box as="svg" fillGreen200--L20></Box> // lighten color
     * <Box as="svg" fillGreen200--D20></Box> // darken color
     * ```
     * @see https://fower.vercel.app/docs/fill
     * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
     */
    fillGreen200?: ResponsiveBoolean
    /**
     * Set fill to green300
     * @example
     * ```tsx
     * <Box as="svg" fillGreen300></Box>
     * <Box as="svg" fillGreen300--T20></Box> // transparentize color
     * <Box as="svg" fillGreen300--O20></Box> // opacify color
     * <Box as="svg" fillGreen300--L20></Box> // lighten color
     * <Box as="svg" fillGreen300--D20></Box> // darken color
     * ```
     * @see https://fower.vercel.app/docs/fill
     * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
     */
    fillGreen300?: ResponsiveBoolean
    /**
     * Set fill to green400
     * @example
     * ```tsx
     * <Box as="svg" fillGreen400></Box>
     * <Box as="svg" fillGreen400--T20></Box> // transparentize color
     * <Box as="svg" fillGreen400--O20></Box> // opacify color
     * <Box as="svg" fillGreen400--L20></Box> // lighten color
     * <Box as="svg" fillGreen400--D20></Box> // darken color
     * ```
     * @see https://fower.vercel.app/docs/fill
     * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
     */
    fillGreen400?: ResponsiveBoolean
    /**
     * Set fill to green500
     * @example
     * ```tsx
     * <Box as="svg" fillGreen500></Box>
     * <Box as="svg" fillGreen500--T20></Box> // transparentize color
     * <Box as="svg" fillGreen500--O20></Box> // opacify color
     * <Box as="svg" fillGreen500--L20></Box> // lighten color
     * <Box as="svg" fillGreen500--D20></Box> // darken color
     * ```
     * @see https://fower.vercel.app/docs/fill
     * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
     */
    fillGreen500?: ResponsiveBoolean
    /**
     * Set fill to green600
     * @example
     * ```tsx
     * <Box as="svg" fillGreen600></Box>
     * <Box as="svg" fillGreen600--T20></Box> // transparentize color
     * <Box as="svg" fillGreen600--O20></Box> // opacify color
     * <Box as="svg" fillGreen600--L20></Box> // lighten color
     * <Box as="svg" fillGreen600--D20></Box> // darken color
     * ```
     * @see https://fower.vercel.app/docs/fill
     * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
     */
    fillGreen600?: ResponsiveBoolean
    /**
     * Set fill to green700
     * @example
     * ```tsx
     * <Box as="svg" fillGreen700></Box>
     * <Box as="svg" fillGreen700--T20></Box> // transparentize color
     * <Box as="svg" fillGreen700--O20></Box> // opacify color
     * <Box as="svg" fillGreen700--L20></Box> // lighten color
     * <Box as="svg" fillGreen700--D20></Box> // darken color
     * ```
     * @see https://fower.vercel.app/docs/fill
     * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
     */
    fillGreen700?: ResponsiveBoolean
    /**
     * Set fill to green800
     * @example
     * ```tsx
     * <Box as="svg" fillGreen800></Box>
     * <Box as="svg" fillGreen800--T20></Box> // transparentize color
     * <Box as="svg" fillGreen800--O20></Box> // opacify color
     * <Box as="svg" fillGreen800--L20></Box> // lighten color
     * <Box as="svg" fillGreen800--D20></Box> // darken color
     * ```
     * @see https://fower.vercel.app/docs/fill
     * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
     */
    fillGreen800?: ResponsiveBoolean
    /**
     * Set fill to green900
     * @example
     * ```tsx
     * <Box as="svg" fillGreen900></Box>
     * <Box as="svg" fillGreen900--T20></Box> // transparentize color
     * <Box as="svg" fillGreen900--O20></Box> // opacify color
     * <Box as="svg" fillGreen900--L20></Box> // lighten color
     * <Box as="svg" fillGreen900--D20></Box> // darken color
     * ```
     * @see https://fower.vercel.app/docs/fill
     * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
     */
    fillGreen900?: ResponsiveBoolean
    /**
     * Set fill to lime50
     * @example
     * ```tsx
     * <Box as="svg" fillLime50></Box>
     * <Box as="svg" fillLime50--T20></Box> // transparentize color
     * <Box as="svg" fillLime50--O20></Box> // opacify color
     * <Box as="svg" fillLime50--L20></Box> // lighten color
     * <Box as="svg" fillLime50--D20></Box> // darken color
     * ```
     * @see https://fower.vercel.app/docs/fill
     * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
     */
    fillLime50?: ResponsiveBoolean
    /**
     * Set fill to lime100
     * @example
     * ```tsx
     * <Box as="svg" fillLime100></Box>
     * <Box as="svg" fillLime100--T20></Box> // transparentize color
     * <Box as="svg" fillLime100--O20></Box> // opacify color
     * <Box as="svg" fillLime100--L20></Box> // lighten color
     * <Box as="svg" fillLime100--D20></Box> // darken color
     * ```
     * @see https://fower.vercel.app/docs/fill
     * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
     */
    fillLime100?: ResponsiveBoolean
    /**
     * Set fill to lime200
     * @example
     * ```tsx
     * <Box as="svg" fillLime200></Box>
     * <Box as="svg" fillLime200--T20></Box> // transparentize color
     * <Box as="svg" fillLime200--O20></Box> // opacify color
     * <Box as="svg" fillLime200--L20></Box> // lighten color
     * <Box as="svg" fillLime200--D20></Box> // darken color
     * ```
     * @see https://fower.vercel.app/docs/fill
     * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
     */
    fillLime200?: ResponsiveBoolean
    /**
     * Set fill to lime300
     * @example
     * ```tsx
     * <Box as="svg" fillLime300></Box>
     * <Box as="svg" fillLime300--T20></Box> // transparentize color
     * <Box as="svg" fillLime300--O20></Box> // opacify color
     * <Box as="svg" fillLime300--L20></Box> // lighten color
     * <Box as="svg" fillLime300--D20></Box> // darken color
     * ```
     * @see https://fower.vercel.app/docs/fill
     * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
     */
    fillLime300?: ResponsiveBoolean
    /**
     * Set fill to lime400
     * @example
     * ```tsx
     * <Box as="svg" fillLime400></Box>
     * <Box as="svg" fillLime400--T20></Box> // transparentize color
     * <Box as="svg" fillLime400--O20></Box> // opacify color
     * <Box as="svg" fillLime400--L20></Box> // lighten color
     * <Box as="svg" fillLime400--D20></Box> // darken color
     * ```
     * @see https://fower.vercel.app/docs/fill
     * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
     */
    fillLime400?: ResponsiveBoolean
    /**
     * Set fill to lime500
     * @example
     * ```tsx
     * <Box as="svg" fillLime500></Box>
     * <Box as="svg" fillLime500--T20></Box> // transparentize color
     * <Box as="svg" fillLime500--O20></Box> // opacify color
     * <Box as="svg" fillLime500--L20></Box> // lighten color
     * <Box as="svg" fillLime500--D20></Box> // darken color
     * ```
     * @see https://fower.vercel.app/docs/fill
     * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
     */
    fillLime500?: ResponsiveBoolean
    /**
     * Set fill to lime600
     * @example
     * ```tsx
     * <Box as="svg" fillLime600></Box>
     * <Box as="svg" fillLime600--T20></Box> // transparentize color
     * <Box as="svg" fillLime600--O20></Box> // opacify color
     * <Box as="svg" fillLime600--L20></Box> // lighten color
     * <Box as="svg" fillLime600--D20></Box> // darken color
     * ```
     * @see https://fower.vercel.app/docs/fill
     * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
     */
    fillLime600?: ResponsiveBoolean
    /**
     * Set fill to lime700
     * @example
     * ```tsx
     * <Box as="svg" fillLime700></Box>
     * <Box as="svg" fillLime700--T20></Box> // transparentize color
     * <Box as="svg" fillLime700--O20></Box> // opacify color
     * <Box as="svg" fillLime700--L20></Box> // lighten color
     * <Box as="svg" fillLime700--D20></Box> // darken color
     * ```
     * @see https://fower.vercel.app/docs/fill
     * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
     */
    fillLime700?: ResponsiveBoolean
    /**
     * Set fill to lime800
     * @example
     * ```tsx
     * <Box as="svg" fillLime800></Box>
     * <Box as="svg" fillLime800--T20></Box> // transparentize color
     * <Box as="svg" fillLime800--O20></Box> // opacify color
     * <Box as="svg" fillLime800--L20></Box> // lighten color
     * <Box as="svg" fillLime800--D20></Box> // darken color
     * ```
     * @see https://fower.vercel.app/docs/fill
     * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
     */
    fillLime800?: ResponsiveBoolean
    /**
     * Set fill to lime900
     * @example
     * ```tsx
     * <Box as="svg" fillLime900></Box>
     * <Box as="svg" fillLime900--T20></Box> // transparentize color
     * <Box as="svg" fillLime900--O20></Box> // opacify color
     * <Box as="svg" fillLime900--L20></Box> // lighten color
     * <Box as="svg" fillLime900--D20></Box> // darken color
     * ```
     * @see https://fower.vercel.app/docs/fill
     * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
     */
    fillLime900?: ResponsiveBoolean
    /**
     * Set fill to yellow50
     * @example
     * ```tsx
     * <Box as="svg" fillYellow50></Box>
     * <Box as="svg" fillYellow50--T20></Box> // transparentize color
     * <Box as="svg" fillYellow50--O20></Box> // opacify color
     * <Box as="svg" fillYellow50--L20></Box> // lighten color
     * <Box as="svg" fillYellow50--D20></Box> // darken color
     * ```
     * @see https://fower.vercel.app/docs/fill
     * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
     */
    fillYellow50?: ResponsiveBoolean
    /**
     * Set fill to yellow100
     * @example
     * ```tsx
     * <Box as="svg" fillYellow100></Box>
     * <Box as="svg" fillYellow100--T20></Box> // transparentize color
     * <Box as="svg" fillYellow100--O20></Box> // opacify color
     * <Box as="svg" fillYellow100--L20></Box> // lighten color
     * <Box as="svg" fillYellow100--D20></Box> // darken color
     * ```
     * @see https://fower.vercel.app/docs/fill
     * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
     */
    fillYellow100?: ResponsiveBoolean
    /**
     * Set fill to yellow200
     * @example
     * ```tsx
     * <Box as="svg" fillYellow200></Box>
     * <Box as="svg" fillYellow200--T20></Box> // transparentize color
     * <Box as="svg" fillYellow200--O20></Box> // opacify color
     * <Box as="svg" fillYellow200--L20></Box> // lighten color
     * <Box as="svg" fillYellow200--D20></Box> // darken color
     * ```
     * @see https://fower.vercel.app/docs/fill
     * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
     */
    fillYellow200?: ResponsiveBoolean
    /**
     * Set fill to yellow300
     * @example
     * ```tsx
     * <Box as="svg" fillYellow300></Box>
     * <Box as="svg" fillYellow300--T20></Box> // transparentize color
     * <Box as="svg" fillYellow300--O20></Box> // opacify color
     * <Box as="svg" fillYellow300--L20></Box> // lighten color
     * <Box as="svg" fillYellow300--D20></Box> // darken color
     * ```
     * @see https://fower.vercel.app/docs/fill
     * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
     */
    fillYellow300?: ResponsiveBoolean
    /**
     * Set fill to yellow400
     * @example
     * ```tsx
     * <Box as="svg" fillYellow400></Box>
     * <Box as="svg" fillYellow400--T20></Box> // transparentize color
     * <Box as="svg" fillYellow400--O20></Box> // opacify color
     * <Box as="svg" fillYellow400--L20></Box> // lighten color
     * <Box as="svg" fillYellow400--D20></Box> // darken color
     * ```
     * @see https://fower.vercel.app/docs/fill
     * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
     */
    fillYellow400?: ResponsiveBoolean
    /**
     * Set fill to yellow500
     * @example
     * ```tsx
     * <Box as="svg" fillYellow500></Box>
     * <Box as="svg" fillYellow500--T20></Box> // transparentize color
     * <Box as="svg" fillYellow500--O20></Box> // opacify color
     * <Box as="svg" fillYellow500--L20></Box> // lighten color
     * <Box as="svg" fillYellow500--D20></Box> // darken color
     * ```
     * @see https://fower.vercel.app/docs/fill
     * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
     */
    fillYellow500?: ResponsiveBoolean
    /**
     * Set fill to yellow600
     * @example
     * ```tsx
     * <Box as="svg" fillYellow600></Box>
     * <Box as="svg" fillYellow600--T20></Box> // transparentize color
     * <Box as="svg" fillYellow600--O20></Box> // opacify color
     * <Box as="svg" fillYellow600--L20></Box> // lighten color
     * <Box as="svg" fillYellow600--D20></Box> // darken color
     * ```
     * @see https://fower.vercel.app/docs/fill
     * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
     */
    fillYellow600?: ResponsiveBoolean
    /**
     * Set fill to yellow700
     * @example
     * ```tsx
     * <Box as="svg" fillYellow700></Box>
     * <Box as="svg" fillYellow700--T20></Box> // transparentize color
     * <Box as="svg" fillYellow700--O20></Box> // opacify color
     * <Box as="svg" fillYellow700--L20></Box> // lighten color
     * <Box as="svg" fillYellow700--D20></Box> // darken color
     * ```
     * @see https://fower.vercel.app/docs/fill
     * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
     */
    fillYellow700?: ResponsiveBoolean
    /**
     * Set fill to yellow800
     * @example
     * ```tsx
     * <Box as="svg" fillYellow800></Box>
     * <Box as="svg" fillYellow800--T20></Box> // transparentize color
     * <Box as="svg" fillYellow800--O20></Box> // opacify color
     * <Box as="svg" fillYellow800--L20></Box> // lighten color
     * <Box as="svg" fillYellow800--D20></Box> // darken color
     * ```
     * @see https://fower.vercel.app/docs/fill
     * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
     */
    fillYellow800?: ResponsiveBoolean
    /**
     * Set fill to yellow900
     * @example
     * ```tsx
     * <Box as="svg" fillYellow900></Box>
     * <Box as="svg" fillYellow900--T20></Box> // transparentize color
     * <Box as="svg" fillYellow900--O20></Box> // opacify color
     * <Box as="svg" fillYellow900--L20></Box> // lighten color
     * <Box as="svg" fillYellow900--D20></Box> // darken color
     * ```
     * @see https://fower.vercel.app/docs/fill
     * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
     */
    fillYellow900?: ResponsiveBoolean
    /**
     * Set fill to orange50
     * @example
     * ```tsx
     * <Box as="svg" fillOrange50></Box>
     * <Box as="svg" fillOrange50--T20></Box> // transparentize color
     * <Box as="svg" fillOrange50--O20></Box> // opacify color
     * <Box as="svg" fillOrange50--L20></Box> // lighten color
     * <Box as="svg" fillOrange50--D20></Box> // darken color
     * ```
     * @see https://fower.vercel.app/docs/fill
     * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
     */
    fillOrange50?: ResponsiveBoolean
    /**
     * Set fill to orange100
     * @example
     * ```tsx
     * <Box as="svg" fillOrange100></Box>
     * <Box as="svg" fillOrange100--T20></Box> // transparentize color
     * <Box as="svg" fillOrange100--O20></Box> // opacify color
     * <Box as="svg" fillOrange100--L20></Box> // lighten color
     * <Box as="svg" fillOrange100--D20></Box> // darken color
     * ```
     * @see https://fower.vercel.app/docs/fill
     * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
     */
    fillOrange100?: ResponsiveBoolean
    /**
     * Set fill to orange200
     * @example
     * ```tsx
     * <Box as="svg" fillOrange200></Box>
     * <Box as="svg" fillOrange200--T20></Box> // transparentize color
     * <Box as="svg" fillOrange200--O20></Box> // opacify color
     * <Box as="svg" fillOrange200--L20></Box> // lighten color
     * <Box as="svg" fillOrange200--D20></Box> // darken color
     * ```
     * @see https://fower.vercel.app/docs/fill
     * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
     */
    fillOrange200?: ResponsiveBoolean
    /**
     * Set fill to orange300
     * @example
     * ```tsx
     * <Box as="svg" fillOrange300></Box>
     * <Box as="svg" fillOrange300--T20></Box> // transparentize color
     * <Box as="svg" fillOrange300--O20></Box> // opacify color
     * <Box as="svg" fillOrange300--L20></Box> // lighten color
     * <Box as="svg" fillOrange300--D20></Box> // darken color
     * ```
     * @see https://fower.vercel.app/docs/fill
     * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
     */
    fillOrange300?: ResponsiveBoolean
    /**
     * Set fill to orange400
     * @example
     * ```tsx
     * <Box as="svg" fillOrange400></Box>
     * <Box as="svg" fillOrange400--T20></Box> // transparentize color
     * <Box as="svg" fillOrange400--O20></Box> // opacify color
     * <Box as="svg" fillOrange400--L20></Box> // lighten color
     * <Box as="svg" fillOrange400--D20></Box> // darken color
     * ```
     * @see https://fower.vercel.app/docs/fill
     * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
     */
    fillOrange400?: ResponsiveBoolean
    /**
     * Set fill to orange500
     * @example
     * ```tsx
     * <Box as="svg" fillOrange500></Box>
     * <Box as="svg" fillOrange500--T20></Box> // transparentize color
     * <Box as="svg" fillOrange500--O20></Box> // opacify color
     * <Box as="svg" fillOrange500--L20></Box> // lighten color
     * <Box as="svg" fillOrange500--D20></Box> // darken color
     * ```
     * @see https://fower.vercel.app/docs/fill
     * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
     */
    fillOrange500?: ResponsiveBoolean
    /**
     * Set fill to orange600
     * @example
     * ```tsx
     * <Box as="svg" fillOrange600></Box>
     * <Box as="svg" fillOrange600--T20></Box> // transparentize color
     * <Box as="svg" fillOrange600--O20></Box> // opacify color
     * <Box as="svg" fillOrange600--L20></Box> // lighten color
     * <Box as="svg" fillOrange600--D20></Box> // darken color
     * ```
     * @see https://fower.vercel.app/docs/fill
     * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
     */
    fillOrange600?: ResponsiveBoolean
    /**
     * Set fill to orange700
     * @example
     * ```tsx
     * <Box as="svg" fillOrange700></Box>
     * <Box as="svg" fillOrange700--T20></Box> // transparentize color
     * <Box as="svg" fillOrange700--O20></Box> // opacify color
     * <Box as="svg" fillOrange700--L20></Box> // lighten color
     * <Box as="svg" fillOrange700--D20></Box> // darken color
     * ```
     * @see https://fower.vercel.app/docs/fill
     * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
     */
    fillOrange700?: ResponsiveBoolean
    /**
     * Set fill to orange800
     * @example
     * ```tsx
     * <Box as="svg" fillOrange800></Box>
     * <Box as="svg" fillOrange800--T20></Box> // transparentize color
     * <Box as="svg" fillOrange800--O20></Box> // opacify color
     * <Box as="svg" fillOrange800--L20></Box> // lighten color
     * <Box as="svg" fillOrange800--D20></Box> // darken color
     * ```
     * @see https://fower.vercel.app/docs/fill
     * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
     */
    fillOrange800?: ResponsiveBoolean
    /**
     * Set fill to orange900
     * @example
     * ```tsx
     * <Box as="svg" fillOrange900></Box>
     * <Box as="svg" fillOrange900--T20></Box> // transparentize color
     * <Box as="svg" fillOrange900--O20></Box> // opacify color
     * <Box as="svg" fillOrange900--L20></Box> // lighten color
     * <Box as="svg" fillOrange900--D20></Box> // darken color
     * ```
     * @see https://fower.vercel.app/docs/fill
     * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
     */
    fillOrange900?: ResponsiveBoolean
    /**
     * Set fill to red50
     * @example
     * ```tsx
     * <Box as="svg" fillRed50></Box>
     * <Box as="svg" fillRed50--T20></Box> // transparentize color
     * <Box as="svg" fillRed50--O20></Box> // opacify color
     * <Box as="svg" fillRed50--L20></Box> // lighten color
     * <Box as="svg" fillRed50--D20></Box> // darken color
     * ```
     * @see https://fower.vercel.app/docs/fill
     * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
     */
    fillRed50?: ResponsiveBoolean
    /**
     * Set fill to red100
     * @example
     * ```tsx
     * <Box as="svg" fillRed100></Box>
     * <Box as="svg" fillRed100--T20></Box> // transparentize color
     * <Box as="svg" fillRed100--O20></Box> // opacify color
     * <Box as="svg" fillRed100--L20></Box> // lighten color
     * <Box as="svg" fillRed100--D20></Box> // darken color
     * ```
     * @see https://fower.vercel.app/docs/fill
     * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
     */
    fillRed100?: ResponsiveBoolean
    /**
     * Set fill to red200
     * @example
     * ```tsx
     * <Box as="svg" fillRed200></Box>
     * <Box as="svg" fillRed200--T20></Box> // transparentize color
     * <Box as="svg" fillRed200--O20></Box> // opacify color
     * <Box as="svg" fillRed200--L20></Box> // lighten color
     * <Box as="svg" fillRed200--D20></Box> // darken color
     * ```
     * @see https://fower.vercel.app/docs/fill
     * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
     */
    fillRed200?: ResponsiveBoolean
    /**
     * Set fill to red300
     * @example
     * ```tsx
     * <Box as="svg" fillRed300></Box>
     * <Box as="svg" fillRed300--T20></Box> // transparentize color
     * <Box as="svg" fillRed300--O20></Box> // opacify color
     * <Box as="svg" fillRed300--L20></Box> // lighten color
     * <Box as="svg" fillRed300--D20></Box> // darken color
     * ```
     * @see https://fower.vercel.app/docs/fill
     * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
     */
    fillRed300?: ResponsiveBoolean
    /**
     * Set fill to red400
     * @example
     * ```tsx
     * <Box as="svg" fillRed400></Box>
     * <Box as="svg" fillRed400--T20></Box> // transparentize color
     * <Box as="svg" fillRed400--O20></Box> // opacify color
     * <Box as="svg" fillRed400--L20></Box> // lighten color
     * <Box as="svg" fillRed400--D20></Box> // darken color
     * ```
     * @see https://fower.vercel.app/docs/fill
     * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
     */
    fillRed400?: ResponsiveBoolean
    /**
     * Set fill to red500
     * @example
     * ```tsx
     * <Box as="svg" fillRed500></Box>
     * <Box as="svg" fillRed500--T20></Box> // transparentize color
     * <Box as="svg" fillRed500--O20></Box> // opacify color
     * <Box as="svg" fillRed500--L20></Box> // lighten color
     * <Box as="svg" fillRed500--D20></Box> // darken color
     * ```
     * @see https://fower.vercel.app/docs/fill
     * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
     */
    fillRed500?: ResponsiveBoolean
    /**
     * Set fill to red600
     * @example
     * ```tsx
     * <Box as="svg" fillRed600></Box>
     * <Box as="svg" fillRed600--T20></Box> // transparentize color
     * <Box as="svg" fillRed600--O20></Box> // opacify color
     * <Box as="svg" fillRed600--L20></Box> // lighten color
     * <Box as="svg" fillRed600--D20></Box> // darken color
     * ```
     * @see https://fower.vercel.app/docs/fill
     * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
     */
    fillRed600?: ResponsiveBoolean
    /**
     * Set fill to red700
     * @example
     * ```tsx
     * <Box as="svg" fillRed700></Box>
     * <Box as="svg" fillRed700--T20></Box> // transparentize color
     * <Box as="svg" fillRed700--O20></Box> // opacify color
     * <Box as="svg" fillRed700--L20></Box> // lighten color
     * <Box as="svg" fillRed700--D20></Box> // darken color
     * ```
     * @see https://fower.vercel.app/docs/fill
     * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
     */
    fillRed700?: ResponsiveBoolean
    /**
     * Set fill to red800
     * @example
     * ```tsx
     * <Box as="svg" fillRed800></Box>
     * <Box as="svg" fillRed800--T20></Box> // transparentize color
     * <Box as="svg" fillRed800--O20></Box> // opacify color
     * <Box as="svg" fillRed800--L20></Box> // lighten color
     * <Box as="svg" fillRed800--D20></Box> // darken color
     * ```
     * @see https://fower.vercel.app/docs/fill
     * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
     */
    fillRed800?: ResponsiveBoolean
    /**
     * Set fill to red900
     * @example
     * ```tsx
     * <Box as="svg" fillRed900></Box>
     * <Box as="svg" fillRed900--T20></Box> // transparentize color
     * <Box as="svg" fillRed900--O20></Box> // opacify color
     * <Box as="svg" fillRed900--L20></Box> // lighten color
     * <Box as="svg" fillRed900--D20></Box> // darken color
     * ```
     * @see https://fower.vercel.app/docs/fill
     * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
     */
    fillRed900?: ResponsiveBoolean
    /**
     * Set fill to trueGray50
     * @example
     * ```tsx
     * <Box as="svg" fillTrueGray50></Box>
     * <Box as="svg" fillTrueGray50--T20></Box> // transparentize color
     * <Box as="svg" fillTrueGray50--O20></Box> // opacify color
     * <Box as="svg" fillTrueGray50--L20></Box> // lighten color
     * <Box as="svg" fillTrueGray50--D20></Box> // darken color
     * ```
     * @see https://fower.vercel.app/docs/fill
     * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
     */
    fillTrueGray50?: ResponsiveBoolean
    /**
     * Set fill to trueGray100
     * @example
     * ```tsx
     * <Box as="svg" fillTrueGray100></Box>
     * <Box as="svg" fillTrueGray100--T20></Box> // transparentize color
     * <Box as="svg" fillTrueGray100--O20></Box> // opacify color
     * <Box as="svg" fillTrueGray100--L20></Box> // lighten color
     * <Box as="svg" fillTrueGray100--D20></Box> // darken color
     * ```
     * @see https://fower.vercel.app/docs/fill
     * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
     */
    fillTrueGray100?: ResponsiveBoolean
    /**
     * Set fill to trueGray200
     * @example
     * ```tsx
     * <Box as="svg" fillTrueGray200></Box>
     * <Box as="svg" fillTrueGray200--T20></Box> // transparentize color
     * <Box as="svg" fillTrueGray200--O20></Box> // opacify color
     * <Box as="svg" fillTrueGray200--L20></Box> // lighten color
     * <Box as="svg" fillTrueGray200--D20></Box> // darken color
     * ```
     * @see https://fower.vercel.app/docs/fill
     * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
     */
    fillTrueGray200?: ResponsiveBoolean
    /**
     * Set fill to trueGray300
     * @example
     * ```tsx
     * <Box as="svg" fillTrueGray300></Box>
     * <Box as="svg" fillTrueGray300--T20></Box> // transparentize color
     * <Box as="svg" fillTrueGray300--O20></Box> // opacify color
     * <Box as="svg" fillTrueGray300--L20></Box> // lighten color
     * <Box as="svg" fillTrueGray300--D20></Box> // darken color
     * ```
     * @see https://fower.vercel.app/docs/fill
     * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
     */
    fillTrueGray300?: ResponsiveBoolean
    /**
     * Set fill to trueGray400
     * @example
     * ```tsx
     * <Box as="svg" fillTrueGray400></Box>
     * <Box as="svg" fillTrueGray400--T20></Box> // transparentize color
     * <Box as="svg" fillTrueGray400--O20></Box> // opacify color
     * <Box as="svg" fillTrueGray400--L20></Box> // lighten color
     * <Box as="svg" fillTrueGray400--D20></Box> // darken color
     * ```
     * @see https://fower.vercel.app/docs/fill
     * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
     */
    fillTrueGray400?: ResponsiveBoolean
    /**
     * Set fill to trueGray500
     * @example
     * ```tsx
     * <Box as="svg" fillTrueGray500></Box>
     * <Box as="svg" fillTrueGray500--T20></Box> // transparentize color
     * <Box as="svg" fillTrueGray500--O20></Box> // opacify color
     * <Box as="svg" fillTrueGray500--L20></Box> // lighten color
     * <Box as="svg" fillTrueGray500--D20></Box> // darken color
     * ```
     * @see https://fower.vercel.app/docs/fill
     * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
     */
    fillTrueGray500?: ResponsiveBoolean
    /**
     * Set fill to trueGray600
     * @example
     * ```tsx
     * <Box as="svg" fillTrueGray600></Box>
     * <Box as="svg" fillTrueGray600--T20></Box> // transparentize color
     * <Box as="svg" fillTrueGray600--O20></Box> // opacify color
     * <Box as="svg" fillTrueGray600--L20></Box> // lighten color
     * <Box as="svg" fillTrueGray600--D20></Box> // darken color
     * ```
     * @see https://fower.vercel.app/docs/fill
     * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
     */
    fillTrueGray600?: ResponsiveBoolean
    /**
     * Set fill to trueGray700
     * @example
     * ```tsx
     * <Box as="svg" fillTrueGray700></Box>
     * <Box as="svg" fillTrueGray700--T20></Box> // transparentize color
     * <Box as="svg" fillTrueGray700--O20></Box> // opacify color
     * <Box as="svg" fillTrueGray700--L20></Box> // lighten color
     * <Box as="svg" fillTrueGray700--D20></Box> // darken color
     * ```
     * @see https://fower.vercel.app/docs/fill
     * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
     */
    fillTrueGray700?: ResponsiveBoolean
    /**
     * Set fill to trueGray800
     * @example
     * ```tsx
     * <Box as="svg" fillTrueGray800></Box>
     * <Box as="svg" fillTrueGray800--T20></Box> // transparentize color
     * <Box as="svg" fillTrueGray800--O20></Box> // opacify color
     * <Box as="svg" fillTrueGray800--L20></Box> // lighten color
     * <Box as="svg" fillTrueGray800--D20></Box> // darken color
     * ```
     * @see https://fower.vercel.app/docs/fill
     * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
     */
    fillTrueGray800?: ResponsiveBoolean
    /**
     * Set fill to trueGray900
     * @example
     * ```tsx
     * <Box as="svg" fillTrueGray900></Box>
     * <Box as="svg" fillTrueGray900--T20></Box> // transparentize color
     * <Box as="svg" fillTrueGray900--O20></Box> // opacify color
     * <Box as="svg" fillTrueGray900--L20></Box> // lighten color
     * <Box as="svg" fillTrueGray900--D20></Box> // darken color
     * ```
     * @see https://fower.vercel.app/docs/fill
     * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
     */
    fillTrueGray900?: ResponsiveBoolean
    /**
     * Set fill to gray50
     * @example
     * ```tsx
     * <Box as="svg" fillGray50></Box>
     * <Box as="svg" fillGray50--T20></Box> // transparentize color
     * <Box as="svg" fillGray50--O20></Box> // opacify color
     * <Box as="svg" fillGray50--L20></Box> // lighten color
     * <Box as="svg" fillGray50--D20></Box> // darken color
     * ```
     * @see https://fower.vercel.app/docs/fill
     * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
     */
    fillGray50?: ResponsiveBoolean
    /**
     * Set fill to gray100
     * @example
     * ```tsx
     * <Box as="svg" fillGray100></Box>
     * <Box as="svg" fillGray100--T20></Box> // transparentize color
     * <Box as="svg" fillGray100--O20></Box> // opacify color
     * <Box as="svg" fillGray100--L20></Box> // lighten color
     * <Box as="svg" fillGray100--D20></Box> // darken color
     * ```
     * @see https://fower.vercel.app/docs/fill
     * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
     */
    fillGray100?: ResponsiveBoolean
    /**
     * Set fill to gray200
     * @example
     * ```tsx
     * <Box as="svg" fillGray200></Box>
     * <Box as="svg" fillGray200--T20></Box> // transparentize color
     * <Box as="svg" fillGray200--O20></Box> // opacify color
     * <Box as="svg" fillGray200--L20></Box> // lighten color
     * <Box as="svg" fillGray200--D20></Box> // darken color
     * ```
     * @see https://fower.vercel.app/docs/fill
     * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
     */
    fillGray200?: ResponsiveBoolean
    /**
     * Set fill to gray300
     * @example
     * ```tsx
     * <Box as="svg" fillGray300></Box>
     * <Box as="svg" fillGray300--T20></Box> // transparentize color
     * <Box as="svg" fillGray300--O20></Box> // opacify color
     * <Box as="svg" fillGray300--L20></Box> // lighten color
     * <Box as="svg" fillGray300--D20></Box> // darken color
     * ```
     * @see https://fower.vercel.app/docs/fill
     * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
     */
    fillGray300?: ResponsiveBoolean
    /**
     * Set fill to gray400
     * @example
     * ```tsx
     * <Box as="svg" fillGray400></Box>
     * <Box as="svg" fillGray400--T20></Box> // transparentize color
     * <Box as="svg" fillGray400--O20></Box> // opacify color
     * <Box as="svg" fillGray400--L20></Box> // lighten color
     * <Box as="svg" fillGray400--D20></Box> // darken color
     * ```
     * @see https://fower.vercel.app/docs/fill
     * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
     */
    fillGray400?: ResponsiveBoolean
    /**
     * Set fill to gray500
     * @example
     * ```tsx
     * <Box as="svg" fillGray500></Box>
     * <Box as="svg" fillGray500--T20></Box> // transparentize color
     * <Box as="svg" fillGray500--O20></Box> // opacify color
     * <Box as="svg" fillGray500--L20></Box> // lighten color
     * <Box as="svg" fillGray500--D20></Box> // darken color
     * ```
     * @see https://fower.vercel.app/docs/fill
     * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
     */
    fillGray500?: ResponsiveBoolean
    /**
     * Set fill to gray600
     * @example
     * ```tsx
     * <Box as="svg" fillGray600></Box>
     * <Box as="svg" fillGray600--T20></Box> // transparentize color
     * <Box as="svg" fillGray600--O20></Box> // opacify color
     * <Box as="svg" fillGray600--L20></Box> // lighten color
     * <Box as="svg" fillGray600--D20></Box> // darken color
     * ```
     * @see https://fower.vercel.app/docs/fill
     * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
     */
    fillGray600?: ResponsiveBoolean
    /**
     * Set fill to gray700
     * @example
     * ```tsx
     * <Box as="svg" fillGray700></Box>
     * <Box as="svg" fillGray700--T20></Box> // transparentize color
     * <Box as="svg" fillGray700--O20></Box> // opacify color
     * <Box as="svg" fillGray700--L20></Box> // lighten color
     * <Box as="svg" fillGray700--D20></Box> // darken color
     * ```
     * @see https://fower.vercel.app/docs/fill
     * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
     */
    fillGray700?: ResponsiveBoolean
    /**
     * Set fill to gray800
     * @example
     * ```tsx
     * <Box as="svg" fillGray800></Box>
     * <Box as="svg" fillGray800--T20></Box> // transparentize color
     * <Box as="svg" fillGray800--O20></Box> // opacify color
     * <Box as="svg" fillGray800--L20></Box> // lighten color
     * <Box as="svg" fillGray800--D20></Box> // darken color
     * ```
     * @see https://fower.vercel.app/docs/fill
     * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
     */
    fillGray800?: ResponsiveBoolean
    /**
     * Set fill to gray900
     * @example
     * ```tsx
     * <Box as="svg" fillGray900></Box>
     * <Box as="svg" fillGray900--T20></Box> // transparentize color
     * <Box as="svg" fillGray900--O20></Box> // opacify color
     * <Box as="svg" fillGray900--L20></Box> // lighten color
     * <Box as="svg" fillGray900--D20></Box> // darken color
     * ```
     * @see https://fower.vercel.app/docs/fill
     * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
     */
    fillGray900?: ResponsiveBoolean
  }
}
