import { FowerPlugin, ResponsiveBoolean } from "@fower/core"
declare const _default: () => FowerPlugin
export default _default

declare module '@fower/atomic-props' {
  export interface AtomicProps {
    /**
     * Set placeholder color to transparent
     * @example
     * ```tsx
     * <Box placeholderTransparent></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderTransparent?: ResponsiveBoolean
    /**
     * Set placeholder color to white
     * @example
     * ```tsx
     * <Box placeholderWhite></Box>
     * <Box placeholderWhite--T20></Box> // transparentize color
     * <Box placeholderWhite--O20></Box> // opacify color
     * <Box placeholderWhite--L20></Box> // lighten color
     * <Box placeholderWhite--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderWhite?: ResponsiveBoolean
    /**
     * Set placeholder color to black
     * @example
     * ```tsx
     * <Box placeholderBlack></Box>
     * <Box placeholderBlack--T20></Box> // transparentize color
     * <Box placeholderBlack--O20></Box> // opacify color
     * <Box placeholderBlack--L20></Box> // lighten color
     * <Box placeholderBlack--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderBlack?: ResponsiveBoolean
    /**
     * Set placeholder color to brand
     * @example
     * ```tsx
     * <Box placeholderBrand></Box>
     * <Box placeholderBrand--T20></Box> // transparentize color
     * <Box placeholderBrand--O20></Box> // opacify color
     * <Box placeholderBrand--L20></Box> // lighten color
     * <Box placeholderBrand--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderBrand?: ResponsiveBoolean
    /**
     * Set placeholder color to brand50
     * @example
     * ```tsx
     * <Box placeholderBrand50></Box>
     * <Box placeholderBrand50--T20></Box> // transparentize color
     * <Box placeholderBrand50--O20></Box> // opacify color
     * <Box placeholderBrand50--L20></Box> // lighten color
     * <Box placeholderBrand50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderBrand50?: ResponsiveBoolean
    /**
     * Set placeholder color to brand100
     * @example
     * ```tsx
     * <Box placeholderBrand100></Box>
     * <Box placeholderBrand100--T20></Box> // transparentize color
     * <Box placeholderBrand100--O20></Box> // opacify color
     * <Box placeholderBrand100--L20></Box> // lighten color
     * <Box placeholderBrand100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderBrand100?: ResponsiveBoolean
    /**
     * Set placeholder color to brand200
     * @example
     * ```tsx
     * <Box placeholderBrand200></Box>
     * <Box placeholderBrand200--T20></Box> // transparentize color
     * <Box placeholderBrand200--O20></Box> // opacify color
     * <Box placeholderBrand200--L20></Box> // lighten color
     * <Box placeholderBrand200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderBrand200?: ResponsiveBoolean
    /**
     * Set placeholder color to brand300
     * @example
     * ```tsx
     * <Box placeholderBrand300></Box>
     * <Box placeholderBrand300--T20></Box> // transparentize color
     * <Box placeholderBrand300--O20></Box> // opacify color
     * <Box placeholderBrand300--L20></Box> // lighten color
     * <Box placeholderBrand300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderBrand300?: ResponsiveBoolean
    /**
     * Set placeholder color to brand400
     * @example
     * ```tsx
     * <Box placeholderBrand400></Box>
     * <Box placeholderBrand400--T20></Box> // transparentize color
     * <Box placeholderBrand400--O20></Box> // opacify color
     * <Box placeholderBrand400--L20></Box> // lighten color
     * <Box placeholderBrand400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderBrand400?: ResponsiveBoolean
    /**
     * Set placeholder color to brand500
     * @example
     * ```tsx
     * <Box placeholderBrand500></Box>
     * <Box placeholderBrand500--T20></Box> // transparentize color
     * <Box placeholderBrand500--O20></Box> // opacify color
     * <Box placeholderBrand500--L20></Box> // lighten color
     * <Box placeholderBrand500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderBrand500?: ResponsiveBoolean
    /**
     * Set placeholder color to brand600
     * @example
     * ```tsx
     * <Box placeholderBrand600></Box>
     * <Box placeholderBrand600--T20></Box> // transparentize color
     * <Box placeholderBrand600--O20></Box> // opacify color
     * <Box placeholderBrand600--L20></Box> // lighten color
     * <Box placeholderBrand600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderBrand600?: ResponsiveBoolean
    /**
     * Set placeholder color to brand700
     * @example
     * ```tsx
     * <Box placeholderBrand700></Box>
     * <Box placeholderBrand700--T20></Box> // transparentize color
     * <Box placeholderBrand700--O20></Box> // opacify color
     * <Box placeholderBrand700--L20></Box> // lighten color
     * <Box placeholderBrand700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderBrand700?: ResponsiveBoolean
    /**
     * Set placeholder color to brand800
     * @example
     * ```tsx
     * <Box placeholderBrand800></Box>
     * <Box placeholderBrand800--T20></Box> // transparentize color
     * <Box placeholderBrand800--O20></Box> // opacify color
     * <Box placeholderBrand800--L20></Box> // lighten color
     * <Box placeholderBrand800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderBrand800?: ResponsiveBoolean
    /**
     * Set placeholder color to brand900
     * @example
     * ```tsx
     * <Box placeholderBrand900></Box>
     * <Box placeholderBrand900--T20></Box> // transparentize color
     * <Box placeholderBrand900--O20></Box> // opacify color
     * <Box placeholderBrand900--L20></Box> // lighten color
     * <Box placeholderBrand900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderBrand900?: ResponsiveBoolean
    /**
     * Set placeholder color to pink50
     * @example
     * ```tsx
     * <Box placeholderPink50></Box>
     * <Box placeholderPink50--T20></Box> // transparentize color
     * <Box placeholderPink50--O20></Box> // opacify color
     * <Box placeholderPink50--L20></Box> // lighten color
     * <Box placeholderPink50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderPink50?: ResponsiveBoolean
    /**
     * Set placeholder color to pink100
     * @example
     * ```tsx
     * <Box placeholderPink100></Box>
     * <Box placeholderPink100--T20></Box> // transparentize color
     * <Box placeholderPink100--O20></Box> // opacify color
     * <Box placeholderPink100--L20></Box> // lighten color
     * <Box placeholderPink100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderPink100?: ResponsiveBoolean
    /**
     * Set placeholder color to pink200
     * @example
     * ```tsx
     * <Box placeholderPink200></Box>
     * <Box placeholderPink200--T20></Box> // transparentize color
     * <Box placeholderPink200--O20></Box> // opacify color
     * <Box placeholderPink200--L20></Box> // lighten color
     * <Box placeholderPink200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderPink200?: ResponsiveBoolean
    /**
     * Set placeholder color to pink300
     * @example
     * ```tsx
     * <Box placeholderPink300></Box>
     * <Box placeholderPink300--T20></Box> // transparentize color
     * <Box placeholderPink300--O20></Box> // opacify color
     * <Box placeholderPink300--L20></Box> // lighten color
     * <Box placeholderPink300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderPink300?: ResponsiveBoolean
    /**
     * Set placeholder color to pink400
     * @example
     * ```tsx
     * <Box placeholderPink400></Box>
     * <Box placeholderPink400--T20></Box> // transparentize color
     * <Box placeholderPink400--O20></Box> // opacify color
     * <Box placeholderPink400--L20></Box> // lighten color
     * <Box placeholderPink400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderPink400?: ResponsiveBoolean
    /**
     * Set placeholder color to pink500
     * @example
     * ```tsx
     * <Box placeholderPink500></Box>
     * <Box placeholderPink500--T20></Box> // transparentize color
     * <Box placeholderPink500--O20></Box> // opacify color
     * <Box placeholderPink500--L20></Box> // lighten color
     * <Box placeholderPink500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderPink500?: ResponsiveBoolean
    /**
     * Set placeholder color to pink600
     * @example
     * ```tsx
     * <Box placeholderPink600></Box>
     * <Box placeholderPink600--T20></Box> // transparentize color
     * <Box placeholderPink600--O20></Box> // opacify color
     * <Box placeholderPink600--L20></Box> // lighten color
     * <Box placeholderPink600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderPink600?: ResponsiveBoolean
    /**
     * Set placeholder color to pink700
     * @example
     * ```tsx
     * <Box placeholderPink700></Box>
     * <Box placeholderPink700--T20></Box> // transparentize color
     * <Box placeholderPink700--O20></Box> // opacify color
     * <Box placeholderPink700--L20></Box> // lighten color
     * <Box placeholderPink700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderPink700?: ResponsiveBoolean
    /**
     * Set placeholder color to pink800
     * @example
     * ```tsx
     * <Box placeholderPink800></Box>
     * <Box placeholderPink800--T20></Box> // transparentize color
     * <Box placeholderPink800--O20></Box> // opacify color
     * <Box placeholderPink800--L20></Box> // lighten color
     * <Box placeholderPink800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderPink800?: ResponsiveBoolean
    /**
     * Set placeholder color to pink900
     * @example
     * ```tsx
     * <Box placeholderPink900></Box>
     * <Box placeholderPink900--T20></Box> // transparentize color
     * <Box placeholderPink900--O20></Box> // opacify color
     * <Box placeholderPink900--L20></Box> // lighten color
     * <Box placeholderPink900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderPink900?: ResponsiveBoolean
    /**
     * Set placeholder color to fuchsia50
     * @example
     * ```tsx
     * <Box placeholderFuchsia50></Box>
     * <Box placeholderFuchsia50--T20></Box> // transparentize color
     * <Box placeholderFuchsia50--O20></Box> // opacify color
     * <Box placeholderFuchsia50--L20></Box> // lighten color
     * <Box placeholderFuchsia50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderFuchsia50?: ResponsiveBoolean
    /**
     * Set placeholder color to fuchsia100
     * @example
     * ```tsx
     * <Box placeholderFuchsia100></Box>
     * <Box placeholderFuchsia100--T20></Box> // transparentize color
     * <Box placeholderFuchsia100--O20></Box> // opacify color
     * <Box placeholderFuchsia100--L20></Box> // lighten color
     * <Box placeholderFuchsia100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderFuchsia100?: ResponsiveBoolean
    /**
     * Set placeholder color to fuchsia200
     * @example
     * ```tsx
     * <Box placeholderFuchsia200></Box>
     * <Box placeholderFuchsia200--T20></Box> // transparentize color
     * <Box placeholderFuchsia200--O20></Box> // opacify color
     * <Box placeholderFuchsia200--L20></Box> // lighten color
     * <Box placeholderFuchsia200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderFuchsia200?: ResponsiveBoolean
    /**
     * Set placeholder color to fuchsia300
     * @example
     * ```tsx
     * <Box placeholderFuchsia300></Box>
     * <Box placeholderFuchsia300--T20></Box> // transparentize color
     * <Box placeholderFuchsia300--O20></Box> // opacify color
     * <Box placeholderFuchsia300--L20></Box> // lighten color
     * <Box placeholderFuchsia300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderFuchsia300?: ResponsiveBoolean
    /**
     * Set placeholder color to fuchsia400
     * @example
     * ```tsx
     * <Box placeholderFuchsia400></Box>
     * <Box placeholderFuchsia400--T20></Box> // transparentize color
     * <Box placeholderFuchsia400--O20></Box> // opacify color
     * <Box placeholderFuchsia400--L20></Box> // lighten color
     * <Box placeholderFuchsia400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderFuchsia400?: ResponsiveBoolean
    /**
     * Set placeholder color to fuchsia500
     * @example
     * ```tsx
     * <Box placeholderFuchsia500></Box>
     * <Box placeholderFuchsia500--T20></Box> // transparentize color
     * <Box placeholderFuchsia500--O20></Box> // opacify color
     * <Box placeholderFuchsia500--L20></Box> // lighten color
     * <Box placeholderFuchsia500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderFuchsia500?: ResponsiveBoolean
    /**
     * Set placeholder color to fuchsia600
     * @example
     * ```tsx
     * <Box placeholderFuchsia600></Box>
     * <Box placeholderFuchsia600--T20></Box> // transparentize color
     * <Box placeholderFuchsia600--O20></Box> // opacify color
     * <Box placeholderFuchsia600--L20></Box> // lighten color
     * <Box placeholderFuchsia600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderFuchsia600?: ResponsiveBoolean
    /**
     * Set placeholder color to fuchsia700
     * @example
     * ```tsx
     * <Box placeholderFuchsia700></Box>
     * <Box placeholderFuchsia700--T20></Box> // transparentize color
     * <Box placeholderFuchsia700--O20></Box> // opacify color
     * <Box placeholderFuchsia700--L20></Box> // lighten color
     * <Box placeholderFuchsia700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderFuchsia700?: ResponsiveBoolean
    /**
     * Set placeholder color to fuchsia800
     * @example
     * ```tsx
     * <Box placeholderFuchsia800></Box>
     * <Box placeholderFuchsia800--T20></Box> // transparentize color
     * <Box placeholderFuchsia800--O20></Box> // opacify color
     * <Box placeholderFuchsia800--L20></Box> // lighten color
     * <Box placeholderFuchsia800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderFuchsia800?: ResponsiveBoolean
    /**
     * Set placeholder color to fuchsia900
     * @example
     * ```tsx
     * <Box placeholderFuchsia900></Box>
     * <Box placeholderFuchsia900--T20></Box> // transparentize color
     * <Box placeholderFuchsia900--O20></Box> // opacify color
     * <Box placeholderFuchsia900--L20></Box> // lighten color
     * <Box placeholderFuchsia900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderFuchsia900?: ResponsiveBoolean
    /**
     * Set placeholder color to purple50
     * @example
     * ```tsx
     * <Box placeholderPurple50></Box>
     * <Box placeholderPurple50--T20></Box> // transparentize color
     * <Box placeholderPurple50--O20></Box> // opacify color
     * <Box placeholderPurple50--L20></Box> // lighten color
     * <Box placeholderPurple50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderPurple50?: ResponsiveBoolean
    /**
     * Set placeholder color to purple100
     * @example
     * ```tsx
     * <Box placeholderPurple100></Box>
     * <Box placeholderPurple100--T20></Box> // transparentize color
     * <Box placeholderPurple100--O20></Box> // opacify color
     * <Box placeholderPurple100--L20></Box> // lighten color
     * <Box placeholderPurple100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderPurple100?: ResponsiveBoolean
    /**
     * Set placeholder color to purple200
     * @example
     * ```tsx
     * <Box placeholderPurple200></Box>
     * <Box placeholderPurple200--T20></Box> // transparentize color
     * <Box placeholderPurple200--O20></Box> // opacify color
     * <Box placeholderPurple200--L20></Box> // lighten color
     * <Box placeholderPurple200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderPurple200?: ResponsiveBoolean
    /**
     * Set placeholder color to purple300
     * @example
     * ```tsx
     * <Box placeholderPurple300></Box>
     * <Box placeholderPurple300--T20></Box> // transparentize color
     * <Box placeholderPurple300--O20></Box> // opacify color
     * <Box placeholderPurple300--L20></Box> // lighten color
     * <Box placeholderPurple300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderPurple300?: ResponsiveBoolean
    /**
     * Set placeholder color to purple400
     * @example
     * ```tsx
     * <Box placeholderPurple400></Box>
     * <Box placeholderPurple400--T20></Box> // transparentize color
     * <Box placeholderPurple400--O20></Box> // opacify color
     * <Box placeholderPurple400--L20></Box> // lighten color
     * <Box placeholderPurple400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderPurple400?: ResponsiveBoolean
    /**
     * Set placeholder color to purple500
     * @example
     * ```tsx
     * <Box placeholderPurple500></Box>
     * <Box placeholderPurple500--T20></Box> // transparentize color
     * <Box placeholderPurple500--O20></Box> // opacify color
     * <Box placeholderPurple500--L20></Box> // lighten color
     * <Box placeholderPurple500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderPurple500?: ResponsiveBoolean
    /**
     * Set placeholder color to purple600
     * @example
     * ```tsx
     * <Box placeholderPurple600></Box>
     * <Box placeholderPurple600--T20></Box> // transparentize color
     * <Box placeholderPurple600--O20></Box> // opacify color
     * <Box placeholderPurple600--L20></Box> // lighten color
     * <Box placeholderPurple600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderPurple600?: ResponsiveBoolean
    /**
     * Set placeholder color to purple700
     * @example
     * ```tsx
     * <Box placeholderPurple700></Box>
     * <Box placeholderPurple700--T20></Box> // transparentize color
     * <Box placeholderPurple700--O20></Box> // opacify color
     * <Box placeholderPurple700--L20></Box> // lighten color
     * <Box placeholderPurple700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderPurple700?: ResponsiveBoolean
    /**
     * Set placeholder color to purple800
     * @example
     * ```tsx
     * <Box placeholderPurple800></Box>
     * <Box placeholderPurple800--T20></Box> // transparentize color
     * <Box placeholderPurple800--O20></Box> // opacify color
     * <Box placeholderPurple800--L20></Box> // lighten color
     * <Box placeholderPurple800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderPurple800?: ResponsiveBoolean
    /**
     * Set placeholder color to purple900
     * @example
     * ```tsx
     * <Box placeholderPurple900></Box>
     * <Box placeholderPurple900--T20></Box> // transparentize color
     * <Box placeholderPurple900--O20></Box> // opacify color
     * <Box placeholderPurple900--L20></Box> // lighten color
     * <Box placeholderPurple900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderPurple900?: ResponsiveBoolean
    /**
     * Set placeholder color to violet50
     * @example
     * ```tsx
     * <Box placeholderViolet50></Box>
     * <Box placeholderViolet50--T20></Box> // transparentize color
     * <Box placeholderViolet50--O20></Box> // opacify color
     * <Box placeholderViolet50--L20></Box> // lighten color
     * <Box placeholderViolet50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderViolet50?: ResponsiveBoolean
    /**
     * Set placeholder color to violet100
     * @example
     * ```tsx
     * <Box placeholderViolet100></Box>
     * <Box placeholderViolet100--T20></Box> // transparentize color
     * <Box placeholderViolet100--O20></Box> // opacify color
     * <Box placeholderViolet100--L20></Box> // lighten color
     * <Box placeholderViolet100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderViolet100?: ResponsiveBoolean
    /**
     * Set placeholder color to violet200
     * @example
     * ```tsx
     * <Box placeholderViolet200></Box>
     * <Box placeholderViolet200--T20></Box> // transparentize color
     * <Box placeholderViolet200--O20></Box> // opacify color
     * <Box placeholderViolet200--L20></Box> // lighten color
     * <Box placeholderViolet200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderViolet200?: ResponsiveBoolean
    /**
     * Set placeholder color to violet300
     * @example
     * ```tsx
     * <Box placeholderViolet300></Box>
     * <Box placeholderViolet300--T20></Box> // transparentize color
     * <Box placeholderViolet300--O20></Box> // opacify color
     * <Box placeholderViolet300--L20></Box> // lighten color
     * <Box placeholderViolet300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderViolet300?: ResponsiveBoolean
    /**
     * Set placeholder color to violet400
     * @example
     * ```tsx
     * <Box placeholderViolet400></Box>
     * <Box placeholderViolet400--T20></Box> // transparentize color
     * <Box placeholderViolet400--O20></Box> // opacify color
     * <Box placeholderViolet400--L20></Box> // lighten color
     * <Box placeholderViolet400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderViolet400?: ResponsiveBoolean
    /**
     * Set placeholder color to violet500
     * @example
     * ```tsx
     * <Box placeholderViolet500></Box>
     * <Box placeholderViolet500--T20></Box> // transparentize color
     * <Box placeholderViolet500--O20></Box> // opacify color
     * <Box placeholderViolet500--L20></Box> // lighten color
     * <Box placeholderViolet500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderViolet500?: ResponsiveBoolean
    /**
     * Set placeholder color to violet600
     * @example
     * ```tsx
     * <Box placeholderViolet600></Box>
     * <Box placeholderViolet600--T20></Box> // transparentize color
     * <Box placeholderViolet600--O20></Box> // opacify color
     * <Box placeholderViolet600--L20></Box> // lighten color
     * <Box placeholderViolet600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderViolet600?: ResponsiveBoolean
    /**
     * Set placeholder color to violet700
     * @example
     * ```tsx
     * <Box placeholderViolet700></Box>
     * <Box placeholderViolet700--T20></Box> // transparentize color
     * <Box placeholderViolet700--O20></Box> // opacify color
     * <Box placeholderViolet700--L20></Box> // lighten color
     * <Box placeholderViolet700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderViolet700?: ResponsiveBoolean
    /**
     * Set placeholder color to violet800
     * @example
     * ```tsx
     * <Box placeholderViolet800></Box>
     * <Box placeholderViolet800--T20></Box> // transparentize color
     * <Box placeholderViolet800--O20></Box> // opacify color
     * <Box placeholderViolet800--L20></Box> // lighten color
     * <Box placeholderViolet800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderViolet800?: ResponsiveBoolean
    /**
     * Set placeholder color to violet900
     * @example
     * ```tsx
     * <Box placeholderViolet900></Box>
     * <Box placeholderViolet900--T20></Box> // transparentize color
     * <Box placeholderViolet900--O20></Box> // opacify color
     * <Box placeholderViolet900--L20></Box> // lighten color
     * <Box placeholderViolet900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderViolet900?: ResponsiveBoolean
    /**
     * Set placeholder color to indigo50
     * @example
     * ```tsx
     * <Box placeholderIndigo50></Box>
     * <Box placeholderIndigo50--T20></Box> // transparentize color
     * <Box placeholderIndigo50--O20></Box> // opacify color
     * <Box placeholderIndigo50--L20></Box> // lighten color
     * <Box placeholderIndigo50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderIndigo50?: ResponsiveBoolean
    /**
     * Set placeholder color to indigo100
     * @example
     * ```tsx
     * <Box placeholderIndigo100></Box>
     * <Box placeholderIndigo100--T20></Box> // transparentize color
     * <Box placeholderIndigo100--O20></Box> // opacify color
     * <Box placeholderIndigo100--L20></Box> // lighten color
     * <Box placeholderIndigo100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderIndigo100?: ResponsiveBoolean
    /**
     * Set placeholder color to indigo200
     * @example
     * ```tsx
     * <Box placeholderIndigo200></Box>
     * <Box placeholderIndigo200--T20></Box> // transparentize color
     * <Box placeholderIndigo200--O20></Box> // opacify color
     * <Box placeholderIndigo200--L20></Box> // lighten color
     * <Box placeholderIndigo200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderIndigo200?: ResponsiveBoolean
    /**
     * Set placeholder color to indigo300
     * @example
     * ```tsx
     * <Box placeholderIndigo300></Box>
     * <Box placeholderIndigo300--T20></Box> // transparentize color
     * <Box placeholderIndigo300--O20></Box> // opacify color
     * <Box placeholderIndigo300--L20></Box> // lighten color
     * <Box placeholderIndigo300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderIndigo300?: ResponsiveBoolean
    /**
     * Set placeholder color to indigo400
     * @example
     * ```tsx
     * <Box placeholderIndigo400></Box>
     * <Box placeholderIndigo400--T20></Box> // transparentize color
     * <Box placeholderIndigo400--O20></Box> // opacify color
     * <Box placeholderIndigo400--L20></Box> // lighten color
     * <Box placeholderIndigo400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderIndigo400?: ResponsiveBoolean
    /**
     * Set placeholder color to indigo500
     * @example
     * ```tsx
     * <Box placeholderIndigo500></Box>
     * <Box placeholderIndigo500--T20></Box> // transparentize color
     * <Box placeholderIndigo500--O20></Box> // opacify color
     * <Box placeholderIndigo500--L20></Box> // lighten color
     * <Box placeholderIndigo500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderIndigo500?: ResponsiveBoolean
    /**
     * Set placeholder color to indigo600
     * @example
     * ```tsx
     * <Box placeholderIndigo600></Box>
     * <Box placeholderIndigo600--T20></Box> // transparentize color
     * <Box placeholderIndigo600--O20></Box> // opacify color
     * <Box placeholderIndigo600--L20></Box> // lighten color
     * <Box placeholderIndigo600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderIndigo600?: ResponsiveBoolean
    /**
     * Set placeholder color to indigo700
     * @example
     * ```tsx
     * <Box placeholderIndigo700></Box>
     * <Box placeholderIndigo700--T20></Box> // transparentize color
     * <Box placeholderIndigo700--O20></Box> // opacify color
     * <Box placeholderIndigo700--L20></Box> // lighten color
     * <Box placeholderIndigo700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderIndigo700?: ResponsiveBoolean
    /**
     * Set placeholder color to indigo800
     * @example
     * ```tsx
     * <Box placeholderIndigo800></Box>
     * <Box placeholderIndigo800--T20></Box> // transparentize color
     * <Box placeholderIndigo800--O20></Box> // opacify color
     * <Box placeholderIndigo800--L20></Box> // lighten color
     * <Box placeholderIndigo800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderIndigo800?: ResponsiveBoolean
    /**
     * Set placeholder color to indigo900
     * @example
     * ```tsx
     * <Box placeholderIndigo900></Box>
     * <Box placeholderIndigo900--T20></Box> // transparentize color
     * <Box placeholderIndigo900--O20></Box> // opacify color
     * <Box placeholderIndigo900--L20></Box> // lighten color
     * <Box placeholderIndigo900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderIndigo900?: ResponsiveBoolean
    /**
     * Set placeholder color to blue50
     * @example
     * ```tsx
     * <Box placeholderBlue50></Box>
     * <Box placeholderBlue50--T20></Box> // transparentize color
     * <Box placeholderBlue50--O20></Box> // opacify color
     * <Box placeholderBlue50--L20></Box> // lighten color
     * <Box placeholderBlue50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderBlue50?: ResponsiveBoolean
    /**
     * Set placeholder color to blue100
     * @example
     * ```tsx
     * <Box placeholderBlue100></Box>
     * <Box placeholderBlue100--T20></Box> // transparentize color
     * <Box placeholderBlue100--O20></Box> // opacify color
     * <Box placeholderBlue100--L20></Box> // lighten color
     * <Box placeholderBlue100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderBlue100?: ResponsiveBoolean
    /**
     * Set placeholder color to blue200
     * @example
     * ```tsx
     * <Box placeholderBlue200></Box>
     * <Box placeholderBlue200--T20></Box> // transparentize color
     * <Box placeholderBlue200--O20></Box> // opacify color
     * <Box placeholderBlue200--L20></Box> // lighten color
     * <Box placeholderBlue200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderBlue200?: ResponsiveBoolean
    /**
     * Set placeholder color to blue300
     * @example
     * ```tsx
     * <Box placeholderBlue300></Box>
     * <Box placeholderBlue300--T20></Box> // transparentize color
     * <Box placeholderBlue300--O20></Box> // opacify color
     * <Box placeholderBlue300--L20></Box> // lighten color
     * <Box placeholderBlue300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderBlue300?: ResponsiveBoolean
    /**
     * Set placeholder color to blue400
     * @example
     * ```tsx
     * <Box placeholderBlue400></Box>
     * <Box placeholderBlue400--T20></Box> // transparentize color
     * <Box placeholderBlue400--O20></Box> // opacify color
     * <Box placeholderBlue400--L20></Box> // lighten color
     * <Box placeholderBlue400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderBlue400?: ResponsiveBoolean
    /**
     * Set placeholder color to blue500
     * @example
     * ```tsx
     * <Box placeholderBlue500></Box>
     * <Box placeholderBlue500--T20></Box> // transparentize color
     * <Box placeholderBlue500--O20></Box> // opacify color
     * <Box placeholderBlue500--L20></Box> // lighten color
     * <Box placeholderBlue500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderBlue500?: ResponsiveBoolean
    /**
     * Set placeholder color to blue600
     * @example
     * ```tsx
     * <Box placeholderBlue600></Box>
     * <Box placeholderBlue600--T20></Box> // transparentize color
     * <Box placeholderBlue600--O20></Box> // opacify color
     * <Box placeholderBlue600--L20></Box> // lighten color
     * <Box placeholderBlue600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderBlue600?: ResponsiveBoolean
    /**
     * Set placeholder color to blue700
     * @example
     * ```tsx
     * <Box placeholderBlue700></Box>
     * <Box placeholderBlue700--T20></Box> // transparentize color
     * <Box placeholderBlue700--O20></Box> // opacify color
     * <Box placeholderBlue700--L20></Box> // lighten color
     * <Box placeholderBlue700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderBlue700?: ResponsiveBoolean
    /**
     * Set placeholder color to blue800
     * @example
     * ```tsx
     * <Box placeholderBlue800></Box>
     * <Box placeholderBlue800--T20></Box> // transparentize color
     * <Box placeholderBlue800--O20></Box> // opacify color
     * <Box placeholderBlue800--L20></Box> // lighten color
     * <Box placeholderBlue800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderBlue800?: ResponsiveBoolean
    /**
     * Set placeholder color to blue900
     * @example
     * ```tsx
     * <Box placeholderBlue900></Box>
     * <Box placeholderBlue900--T20></Box> // transparentize color
     * <Box placeholderBlue900--O20></Box> // opacify color
     * <Box placeholderBlue900--L20></Box> // lighten color
     * <Box placeholderBlue900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderBlue900?: ResponsiveBoolean
    /**
     * Set placeholder color to cyan50
     * @example
     * ```tsx
     * <Box placeholderCyan50></Box>
     * <Box placeholderCyan50--T20></Box> // transparentize color
     * <Box placeholderCyan50--O20></Box> // opacify color
     * <Box placeholderCyan50--L20></Box> // lighten color
     * <Box placeholderCyan50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderCyan50?: ResponsiveBoolean
    /**
     * Set placeholder color to cyan100
     * @example
     * ```tsx
     * <Box placeholderCyan100></Box>
     * <Box placeholderCyan100--T20></Box> // transparentize color
     * <Box placeholderCyan100--O20></Box> // opacify color
     * <Box placeholderCyan100--L20></Box> // lighten color
     * <Box placeholderCyan100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderCyan100?: ResponsiveBoolean
    /**
     * Set placeholder color to cyan200
     * @example
     * ```tsx
     * <Box placeholderCyan200></Box>
     * <Box placeholderCyan200--T20></Box> // transparentize color
     * <Box placeholderCyan200--O20></Box> // opacify color
     * <Box placeholderCyan200--L20></Box> // lighten color
     * <Box placeholderCyan200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderCyan200?: ResponsiveBoolean
    /**
     * Set placeholder color to cyan300
     * @example
     * ```tsx
     * <Box placeholderCyan300></Box>
     * <Box placeholderCyan300--T20></Box> // transparentize color
     * <Box placeholderCyan300--O20></Box> // opacify color
     * <Box placeholderCyan300--L20></Box> // lighten color
     * <Box placeholderCyan300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderCyan300?: ResponsiveBoolean
    /**
     * Set placeholder color to cyan400
     * @example
     * ```tsx
     * <Box placeholderCyan400></Box>
     * <Box placeholderCyan400--T20></Box> // transparentize color
     * <Box placeholderCyan400--O20></Box> // opacify color
     * <Box placeholderCyan400--L20></Box> // lighten color
     * <Box placeholderCyan400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderCyan400?: ResponsiveBoolean
    /**
     * Set placeholder color to cyan500
     * @example
     * ```tsx
     * <Box placeholderCyan500></Box>
     * <Box placeholderCyan500--T20></Box> // transparentize color
     * <Box placeholderCyan500--O20></Box> // opacify color
     * <Box placeholderCyan500--L20></Box> // lighten color
     * <Box placeholderCyan500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderCyan500?: ResponsiveBoolean
    /**
     * Set placeholder color to cyan600
     * @example
     * ```tsx
     * <Box placeholderCyan600></Box>
     * <Box placeholderCyan600--T20></Box> // transparentize color
     * <Box placeholderCyan600--O20></Box> // opacify color
     * <Box placeholderCyan600--L20></Box> // lighten color
     * <Box placeholderCyan600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderCyan600?: ResponsiveBoolean
    /**
     * Set placeholder color to cyan700
     * @example
     * ```tsx
     * <Box placeholderCyan700></Box>
     * <Box placeholderCyan700--T20></Box> // transparentize color
     * <Box placeholderCyan700--O20></Box> // opacify color
     * <Box placeholderCyan700--L20></Box> // lighten color
     * <Box placeholderCyan700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderCyan700?: ResponsiveBoolean
    /**
     * Set placeholder color to cyan800
     * @example
     * ```tsx
     * <Box placeholderCyan800></Box>
     * <Box placeholderCyan800--T20></Box> // transparentize color
     * <Box placeholderCyan800--O20></Box> // opacify color
     * <Box placeholderCyan800--L20></Box> // lighten color
     * <Box placeholderCyan800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderCyan800?: ResponsiveBoolean
    /**
     * Set placeholder color to cyan900
     * @example
     * ```tsx
     * <Box placeholderCyan900></Box>
     * <Box placeholderCyan900--T20></Box> // transparentize color
     * <Box placeholderCyan900--O20></Box> // opacify color
     * <Box placeholderCyan900--L20></Box> // lighten color
     * <Box placeholderCyan900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderCyan900?: ResponsiveBoolean
    /**
     * Set placeholder color to teal50
     * @example
     * ```tsx
     * <Box placeholderTeal50></Box>
     * <Box placeholderTeal50--T20></Box> // transparentize color
     * <Box placeholderTeal50--O20></Box> // opacify color
     * <Box placeholderTeal50--L20></Box> // lighten color
     * <Box placeholderTeal50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderTeal50?: ResponsiveBoolean
    /**
     * Set placeholder color to teal100
     * @example
     * ```tsx
     * <Box placeholderTeal100></Box>
     * <Box placeholderTeal100--T20></Box> // transparentize color
     * <Box placeholderTeal100--O20></Box> // opacify color
     * <Box placeholderTeal100--L20></Box> // lighten color
     * <Box placeholderTeal100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderTeal100?: ResponsiveBoolean
    /**
     * Set placeholder color to teal200
     * @example
     * ```tsx
     * <Box placeholderTeal200></Box>
     * <Box placeholderTeal200--T20></Box> // transparentize color
     * <Box placeholderTeal200--O20></Box> // opacify color
     * <Box placeholderTeal200--L20></Box> // lighten color
     * <Box placeholderTeal200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderTeal200?: ResponsiveBoolean
    /**
     * Set placeholder color to teal300
     * @example
     * ```tsx
     * <Box placeholderTeal300></Box>
     * <Box placeholderTeal300--T20></Box> // transparentize color
     * <Box placeholderTeal300--O20></Box> // opacify color
     * <Box placeholderTeal300--L20></Box> // lighten color
     * <Box placeholderTeal300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderTeal300?: ResponsiveBoolean
    /**
     * Set placeholder color to teal400
     * @example
     * ```tsx
     * <Box placeholderTeal400></Box>
     * <Box placeholderTeal400--T20></Box> // transparentize color
     * <Box placeholderTeal400--O20></Box> // opacify color
     * <Box placeholderTeal400--L20></Box> // lighten color
     * <Box placeholderTeal400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderTeal400?: ResponsiveBoolean
    /**
     * Set placeholder color to teal500
     * @example
     * ```tsx
     * <Box placeholderTeal500></Box>
     * <Box placeholderTeal500--T20></Box> // transparentize color
     * <Box placeholderTeal500--O20></Box> // opacify color
     * <Box placeholderTeal500--L20></Box> // lighten color
     * <Box placeholderTeal500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderTeal500?: ResponsiveBoolean
    /**
     * Set placeholder color to teal600
     * @example
     * ```tsx
     * <Box placeholderTeal600></Box>
     * <Box placeholderTeal600--T20></Box> // transparentize color
     * <Box placeholderTeal600--O20></Box> // opacify color
     * <Box placeholderTeal600--L20></Box> // lighten color
     * <Box placeholderTeal600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderTeal600?: ResponsiveBoolean
    /**
     * Set placeholder color to teal700
     * @example
     * ```tsx
     * <Box placeholderTeal700></Box>
     * <Box placeholderTeal700--T20></Box> // transparentize color
     * <Box placeholderTeal700--O20></Box> // opacify color
     * <Box placeholderTeal700--L20></Box> // lighten color
     * <Box placeholderTeal700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderTeal700?: ResponsiveBoolean
    /**
     * Set placeholder color to teal800
     * @example
     * ```tsx
     * <Box placeholderTeal800></Box>
     * <Box placeholderTeal800--T20></Box> // transparentize color
     * <Box placeholderTeal800--O20></Box> // opacify color
     * <Box placeholderTeal800--L20></Box> // lighten color
     * <Box placeholderTeal800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderTeal800?: ResponsiveBoolean
    /**
     * Set placeholder color to teal900
     * @example
     * ```tsx
     * <Box placeholderTeal900></Box>
     * <Box placeholderTeal900--T20></Box> // transparentize color
     * <Box placeholderTeal900--O20></Box> // opacify color
     * <Box placeholderTeal900--L20></Box> // lighten color
     * <Box placeholderTeal900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderTeal900?: ResponsiveBoolean
    /**
     * Set placeholder color to green50
     * @example
     * ```tsx
     * <Box placeholderGreen50></Box>
     * <Box placeholderGreen50--T20></Box> // transparentize color
     * <Box placeholderGreen50--O20></Box> // opacify color
     * <Box placeholderGreen50--L20></Box> // lighten color
     * <Box placeholderGreen50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderGreen50?: ResponsiveBoolean
    /**
     * Set placeholder color to green100
     * @example
     * ```tsx
     * <Box placeholderGreen100></Box>
     * <Box placeholderGreen100--T20></Box> // transparentize color
     * <Box placeholderGreen100--O20></Box> // opacify color
     * <Box placeholderGreen100--L20></Box> // lighten color
     * <Box placeholderGreen100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderGreen100?: ResponsiveBoolean
    /**
     * Set placeholder color to green200
     * @example
     * ```tsx
     * <Box placeholderGreen200></Box>
     * <Box placeholderGreen200--T20></Box> // transparentize color
     * <Box placeholderGreen200--O20></Box> // opacify color
     * <Box placeholderGreen200--L20></Box> // lighten color
     * <Box placeholderGreen200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderGreen200?: ResponsiveBoolean
    /**
     * Set placeholder color to green300
     * @example
     * ```tsx
     * <Box placeholderGreen300></Box>
     * <Box placeholderGreen300--T20></Box> // transparentize color
     * <Box placeholderGreen300--O20></Box> // opacify color
     * <Box placeholderGreen300--L20></Box> // lighten color
     * <Box placeholderGreen300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderGreen300?: ResponsiveBoolean
    /**
     * Set placeholder color to green400
     * @example
     * ```tsx
     * <Box placeholderGreen400></Box>
     * <Box placeholderGreen400--T20></Box> // transparentize color
     * <Box placeholderGreen400--O20></Box> // opacify color
     * <Box placeholderGreen400--L20></Box> // lighten color
     * <Box placeholderGreen400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderGreen400?: ResponsiveBoolean
    /**
     * Set placeholder color to green500
     * @example
     * ```tsx
     * <Box placeholderGreen500></Box>
     * <Box placeholderGreen500--T20></Box> // transparentize color
     * <Box placeholderGreen500--O20></Box> // opacify color
     * <Box placeholderGreen500--L20></Box> // lighten color
     * <Box placeholderGreen500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderGreen500?: ResponsiveBoolean
    /**
     * Set placeholder color to green600
     * @example
     * ```tsx
     * <Box placeholderGreen600></Box>
     * <Box placeholderGreen600--T20></Box> // transparentize color
     * <Box placeholderGreen600--O20></Box> // opacify color
     * <Box placeholderGreen600--L20></Box> // lighten color
     * <Box placeholderGreen600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderGreen600?: ResponsiveBoolean
    /**
     * Set placeholder color to green700
     * @example
     * ```tsx
     * <Box placeholderGreen700></Box>
     * <Box placeholderGreen700--T20></Box> // transparentize color
     * <Box placeholderGreen700--O20></Box> // opacify color
     * <Box placeholderGreen700--L20></Box> // lighten color
     * <Box placeholderGreen700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderGreen700?: ResponsiveBoolean
    /**
     * Set placeholder color to green800
     * @example
     * ```tsx
     * <Box placeholderGreen800></Box>
     * <Box placeholderGreen800--T20></Box> // transparentize color
     * <Box placeholderGreen800--O20></Box> // opacify color
     * <Box placeholderGreen800--L20></Box> // lighten color
     * <Box placeholderGreen800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderGreen800?: ResponsiveBoolean
    /**
     * Set placeholder color to green900
     * @example
     * ```tsx
     * <Box placeholderGreen900></Box>
     * <Box placeholderGreen900--T20></Box> // transparentize color
     * <Box placeholderGreen900--O20></Box> // opacify color
     * <Box placeholderGreen900--L20></Box> // lighten color
     * <Box placeholderGreen900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderGreen900?: ResponsiveBoolean
    /**
     * Set placeholder color to lime50
     * @example
     * ```tsx
     * <Box placeholderLime50></Box>
     * <Box placeholderLime50--T20></Box> // transparentize color
     * <Box placeholderLime50--O20></Box> // opacify color
     * <Box placeholderLime50--L20></Box> // lighten color
     * <Box placeholderLime50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderLime50?: ResponsiveBoolean
    /**
     * Set placeholder color to lime100
     * @example
     * ```tsx
     * <Box placeholderLime100></Box>
     * <Box placeholderLime100--T20></Box> // transparentize color
     * <Box placeholderLime100--O20></Box> // opacify color
     * <Box placeholderLime100--L20></Box> // lighten color
     * <Box placeholderLime100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderLime100?: ResponsiveBoolean
    /**
     * Set placeholder color to lime200
     * @example
     * ```tsx
     * <Box placeholderLime200></Box>
     * <Box placeholderLime200--T20></Box> // transparentize color
     * <Box placeholderLime200--O20></Box> // opacify color
     * <Box placeholderLime200--L20></Box> // lighten color
     * <Box placeholderLime200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderLime200?: ResponsiveBoolean
    /**
     * Set placeholder color to lime300
     * @example
     * ```tsx
     * <Box placeholderLime300></Box>
     * <Box placeholderLime300--T20></Box> // transparentize color
     * <Box placeholderLime300--O20></Box> // opacify color
     * <Box placeholderLime300--L20></Box> // lighten color
     * <Box placeholderLime300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderLime300?: ResponsiveBoolean
    /**
     * Set placeholder color to lime400
     * @example
     * ```tsx
     * <Box placeholderLime400></Box>
     * <Box placeholderLime400--T20></Box> // transparentize color
     * <Box placeholderLime400--O20></Box> // opacify color
     * <Box placeholderLime400--L20></Box> // lighten color
     * <Box placeholderLime400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderLime400?: ResponsiveBoolean
    /**
     * Set placeholder color to lime500
     * @example
     * ```tsx
     * <Box placeholderLime500></Box>
     * <Box placeholderLime500--T20></Box> // transparentize color
     * <Box placeholderLime500--O20></Box> // opacify color
     * <Box placeholderLime500--L20></Box> // lighten color
     * <Box placeholderLime500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderLime500?: ResponsiveBoolean
    /**
     * Set placeholder color to lime600
     * @example
     * ```tsx
     * <Box placeholderLime600></Box>
     * <Box placeholderLime600--T20></Box> // transparentize color
     * <Box placeholderLime600--O20></Box> // opacify color
     * <Box placeholderLime600--L20></Box> // lighten color
     * <Box placeholderLime600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderLime600?: ResponsiveBoolean
    /**
     * Set placeholder color to lime700
     * @example
     * ```tsx
     * <Box placeholderLime700></Box>
     * <Box placeholderLime700--T20></Box> // transparentize color
     * <Box placeholderLime700--O20></Box> // opacify color
     * <Box placeholderLime700--L20></Box> // lighten color
     * <Box placeholderLime700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderLime700?: ResponsiveBoolean
    /**
     * Set placeholder color to lime800
     * @example
     * ```tsx
     * <Box placeholderLime800></Box>
     * <Box placeholderLime800--T20></Box> // transparentize color
     * <Box placeholderLime800--O20></Box> // opacify color
     * <Box placeholderLime800--L20></Box> // lighten color
     * <Box placeholderLime800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderLime800?: ResponsiveBoolean
    /**
     * Set placeholder color to lime900
     * @example
     * ```tsx
     * <Box placeholderLime900></Box>
     * <Box placeholderLime900--T20></Box> // transparentize color
     * <Box placeholderLime900--O20></Box> // opacify color
     * <Box placeholderLime900--L20></Box> // lighten color
     * <Box placeholderLime900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderLime900?: ResponsiveBoolean
    /**
     * Set placeholder color to yellow50
     * @example
     * ```tsx
     * <Box placeholderYellow50></Box>
     * <Box placeholderYellow50--T20></Box> // transparentize color
     * <Box placeholderYellow50--O20></Box> // opacify color
     * <Box placeholderYellow50--L20></Box> // lighten color
     * <Box placeholderYellow50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderYellow50?: ResponsiveBoolean
    /**
     * Set placeholder color to yellow100
     * @example
     * ```tsx
     * <Box placeholderYellow100></Box>
     * <Box placeholderYellow100--T20></Box> // transparentize color
     * <Box placeholderYellow100--O20></Box> // opacify color
     * <Box placeholderYellow100--L20></Box> // lighten color
     * <Box placeholderYellow100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderYellow100?: ResponsiveBoolean
    /**
     * Set placeholder color to yellow200
     * @example
     * ```tsx
     * <Box placeholderYellow200></Box>
     * <Box placeholderYellow200--T20></Box> // transparentize color
     * <Box placeholderYellow200--O20></Box> // opacify color
     * <Box placeholderYellow200--L20></Box> // lighten color
     * <Box placeholderYellow200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderYellow200?: ResponsiveBoolean
    /**
     * Set placeholder color to yellow300
     * @example
     * ```tsx
     * <Box placeholderYellow300></Box>
     * <Box placeholderYellow300--T20></Box> // transparentize color
     * <Box placeholderYellow300--O20></Box> // opacify color
     * <Box placeholderYellow300--L20></Box> // lighten color
     * <Box placeholderYellow300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderYellow300?: ResponsiveBoolean
    /**
     * Set placeholder color to yellow400
     * @example
     * ```tsx
     * <Box placeholderYellow400></Box>
     * <Box placeholderYellow400--T20></Box> // transparentize color
     * <Box placeholderYellow400--O20></Box> // opacify color
     * <Box placeholderYellow400--L20></Box> // lighten color
     * <Box placeholderYellow400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderYellow400?: ResponsiveBoolean
    /**
     * Set placeholder color to yellow500
     * @example
     * ```tsx
     * <Box placeholderYellow500></Box>
     * <Box placeholderYellow500--T20></Box> // transparentize color
     * <Box placeholderYellow500--O20></Box> // opacify color
     * <Box placeholderYellow500--L20></Box> // lighten color
     * <Box placeholderYellow500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderYellow500?: ResponsiveBoolean
    /**
     * Set placeholder color to yellow600
     * @example
     * ```tsx
     * <Box placeholderYellow600></Box>
     * <Box placeholderYellow600--T20></Box> // transparentize color
     * <Box placeholderYellow600--O20></Box> // opacify color
     * <Box placeholderYellow600--L20></Box> // lighten color
     * <Box placeholderYellow600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderYellow600?: ResponsiveBoolean
    /**
     * Set placeholder color to yellow700
     * @example
     * ```tsx
     * <Box placeholderYellow700></Box>
     * <Box placeholderYellow700--T20></Box> // transparentize color
     * <Box placeholderYellow700--O20></Box> // opacify color
     * <Box placeholderYellow700--L20></Box> // lighten color
     * <Box placeholderYellow700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderYellow700?: ResponsiveBoolean
    /**
     * Set placeholder color to yellow800
     * @example
     * ```tsx
     * <Box placeholderYellow800></Box>
     * <Box placeholderYellow800--T20></Box> // transparentize color
     * <Box placeholderYellow800--O20></Box> // opacify color
     * <Box placeholderYellow800--L20></Box> // lighten color
     * <Box placeholderYellow800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderYellow800?: ResponsiveBoolean
    /**
     * Set placeholder color to yellow900
     * @example
     * ```tsx
     * <Box placeholderYellow900></Box>
     * <Box placeholderYellow900--T20></Box> // transparentize color
     * <Box placeholderYellow900--O20></Box> // opacify color
     * <Box placeholderYellow900--L20></Box> // lighten color
     * <Box placeholderYellow900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderYellow900?: ResponsiveBoolean
    /**
     * Set placeholder color to orange50
     * @example
     * ```tsx
     * <Box placeholderOrange50></Box>
     * <Box placeholderOrange50--T20></Box> // transparentize color
     * <Box placeholderOrange50--O20></Box> // opacify color
     * <Box placeholderOrange50--L20></Box> // lighten color
     * <Box placeholderOrange50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderOrange50?: ResponsiveBoolean
    /**
     * Set placeholder color to orange100
     * @example
     * ```tsx
     * <Box placeholderOrange100></Box>
     * <Box placeholderOrange100--T20></Box> // transparentize color
     * <Box placeholderOrange100--O20></Box> // opacify color
     * <Box placeholderOrange100--L20></Box> // lighten color
     * <Box placeholderOrange100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderOrange100?: ResponsiveBoolean
    /**
     * Set placeholder color to orange200
     * @example
     * ```tsx
     * <Box placeholderOrange200></Box>
     * <Box placeholderOrange200--T20></Box> // transparentize color
     * <Box placeholderOrange200--O20></Box> // opacify color
     * <Box placeholderOrange200--L20></Box> // lighten color
     * <Box placeholderOrange200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderOrange200?: ResponsiveBoolean
    /**
     * Set placeholder color to orange300
     * @example
     * ```tsx
     * <Box placeholderOrange300></Box>
     * <Box placeholderOrange300--T20></Box> // transparentize color
     * <Box placeholderOrange300--O20></Box> // opacify color
     * <Box placeholderOrange300--L20></Box> // lighten color
     * <Box placeholderOrange300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderOrange300?: ResponsiveBoolean
    /**
     * Set placeholder color to orange400
     * @example
     * ```tsx
     * <Box placeholderOrange400></Box>
     * <Box placeholderOrange400--T20></Box> // transparentize color
     * <Box placeholderOrange400--O20></Box> // opacify color
     * <Box placeholderOrange400--L20></Box> // lighten color
     * <Box placeholderOrange400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderOrange400?: ResponsiveBoolean
    /**
     * Set placeholder color to orange500
     * @example
     * ```tsx
     * <Box placeholderOrange500></Box>
     * <Box placeholderOrange500--T20></Box> // transparentize color
     * <Box placeholderOrange500--O20></Box> // opacify color
     * <Box placeholderOrange500--L20></Box> // lighten color
     * <Box placeholderOrange500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderOrange500?: ResponsiveBoolean
    /**
     * Set placeholder color to orange600
     * @example
     * ```tsx
     * <Box placeholderOrange600></Box>
     * <Box placeholderOrange600--T20></Box> // transparentize color
     * <Box placeholderOrange600--O20></Box> // opacify color
     * <Box placeholderOrange600--L20></Box> // lighten color
     * <Box placeholderOrange600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderOrange600?: ResponsiveBoolean
    /**
     * Set placeholder color to orange700
     * @example
     * ```tsx
     * <Box placeholderOrange700></Box>
     * <Box placeholderOrange700--T20></Box> // transparentize color
     * <Box placeholderOrange700--O20></Box> // opacify color
     * <Box placeholderOrange700--L20></Box> // lighten color
     * <Box placeholderOrange700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderOrange700?: ResponsiveBoolean
    /**
     * Set placeholder color to orange800
     * @example
     * ```tsx
     * <Box placeholderOrange800></Box>
     * <Box placeholderOrange800--T20></Box> // transparentize color
     * <Box placeholderOrange800--O20></Box> // opacify color
     * <Box placeholderOrange800--L20></Box> // lighten color
     * <Box placeholderOrange800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderOrange800?: ResponsiveBoolean
    /**
     * Set placeholder color to orange900
     * @example
     * ```tsx
     * <Box placeholderOrange900></Box>
     * <Box placeholderOrange900--T20></Box> // transparentize color
     * <Box placeholderOrange900--O20></Box> // opacify color
     * <Box placeholderOrange900--L20></Box> // lighten color
     * <Box placeholderOrange900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderOrange900?: ResponsiveBoolean
    /**
     * Set placeholder color to red50
     * @example
     * ```tsx
     * <Box placeholderRed50></Box>
     * <Box placeholderRed50--T20></Box> // transparentize color
     * <Box placeholderRed50--O20></Box> // opacify color
     * <Box placeholderRed50--L20></Box> // lighten color
     * <Box placeholderRed50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderRed50?: ResponsiveBoolean
    /**
     * Set placeholder color to red100
     * @example
     * ```tsx
     * <Box placeholderRed100></Box>
     * <Box placeholderRed100--T20></Box> // transparentize color
     * <Box placeholderRed100--O20></Box> // opacify color
     * <Box placeholderRed100--L20></Box> // lighten color
     * <Box placeholderRed100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderRed100?: ResponsiveBoolean
    /**
     * Set placeholder color to red200
     * @example
     * ```tsx
     * <Box placeholderRed200></Box>
     * <Box placeholderRed200--T20></Box> // transparentize color
     * <Box placeholderRed200--O20></Box> // opacify color
     * <Box placeholderRed200--L20></Box> // lighten color
     * <Box placeholderRed200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderRed200?: ResponsiveBoolean
    /**
     * Set placeholder color to red300
     * @example
     * ```tsx
     * <Box placeholderRed300></Box>
     * <Box placeholderRed300--T20></Box> // transparentize color
     * <Box placeholderRed300--O20></Box> // opacify color
     * <Box placeholderRed300--L20></Box> // lighten color
     * <Box placeholderRed300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderRed300?: ResponsiveBoolean
    /**
     * Set placeholder color to red400
     * @example
     * ```tsx
     * <Box placeholderRed400></Box>
     * <Box placeholderRed400--T20></Box> // transparentize color
     * <Box placeholderRed400--O20></Box> // opacify color
     * <Box placeholderRed400--L20></Box> // lighten color
     * <Box placeholderRed400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderRed400?: ResponsiveBoolean
    /**
     * Set placeholder color to red500
     * @example
     * ```tsx
     * <Box placeholderRed500></Box>
     * <Box placeholderRed500--T20></Box> // transparentize color
     * <Box placeholderRed500--O20></Box> // opacify color
     * <Box placeholderRed500--L20></Box> // lighten color
     * <Box placeholderRed500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderRed500?: ResponsiveBoolean
    /**
     * Set placeholder color to red600
     * @example
     * ```tsx
     * <Box placeholderRed600></Box>
     * <Box placeholderRed600--T20></Box> // transparentize color
     * <Box placeholderRed600--O20></Box> // opacify color
     * <Box placeholderRed600--L20></Box> // lighten color
     * <Box placeholderRed600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderRed600?: ResponsiveBoolean
    /**
     * Set placeholder color to red700
     * @example
     * ```tsx
     * <Box placeholderRed700></Box>
     * <Box placeholderRed700--T20></Box> // transparentize color
     * <Box placeholderRed700--O20></Box> // opacify color
     * <Box placeholderRed700--L20></Box> // lighten color
     * <Box placeholderRed700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderRed700?: ResponsiveBoolean
    /**
     * Set placeholder color to red800
     * @example
     * ```tsx
     * <Box placeholderRed800></Box>
     * <Box placeholderRed800--T20></Box> // transparentize color
     * <Box placeholderRed800--O20></Box> // opacify color
     * <Box placeholderRed800--L20></Box> // lighten color
     * <Box placeholderRed800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderRed800?: ResponsiveBoolean
    /**
     * Set placeholder color to red900
     * @example
     * ```tsx
     * <Box placeholderRed900></Box>
     * <Box placeholderRed900--T20></Box> // transparentize color
     * <Box placeholderRed900--O20></Box> // opacify color
     * <Box placeholderRed900--L20></Box> // lighten color
     * <Box placeholderRed900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderRed900?: ResponsiveBoolean
    /**
     * Set placeholder color to trueGray50
     * @example
     * ```tsx
     * <Box placeholderTrueGray50></Box>
     * <Box placeholderTrueGray50--T20></Box> // transparentize color
     * <Box placeholderTrueGray50--O20></Box> // opacify color
     * <Box placeholderTrueGray50--L20></Box> // lighten color
     * <Box placeholderTrueGray50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderTrueGray50?: ResponsiveBoolean
    /**
     * Set placeholder color to trueGray100
     * @example
     * ```tsx
     * <Box placeholderTrueGray100></Box>
     * <Box placeholderTrueGray100--T20></Box> // transparentize color
     * <Box placeholderTrueGray100--O20></Box> // opacify color
     * <Box placeholderTrueGray100--L20></Box> // lighten color
     * <Box placeholderTrueGray100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderTrueGray100?: ResponsiveBoolean
    /**
     * Set placeholder color to trueGray200
     * @example
     * ```tsx
     * <Box placeholderTrueGray200></Box>
     * <Box placeholderTrueGray200--T20></Box> // transparentize color
     * <Box placeholderTrueGray200--O20></Box> // opacify color
     * <Box placeholderTrueGray200--L20></Box> // lighten color
     * <Box placeholderTrueGray200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderTrueGray200?: ResponsiveBoolean
    /**
     * Set placeholder color to trueGray300
     * @example
     * ```tsx
     * <Box placeholderTrueGray300></Box>
     * <Box placeholderTrueGray300--T20></Box> // transparentize color
     * <Box placeholderTrueGray300--O20></Box> // opacify color
     * <Box placeholderTrueGray300--L20></Box> // lighten color
     * <Box placeholderTrueGray300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderTrueGray300?: ResponsiveBoolean
    /**
     * Set placeholder color to trueGray400
     * @example
     * ```tsx
     * <Box placeholderTrueGray400></Box>
     * <Box placeholderTrueGray400--T20></Box> // transparentize color
     * <Box placeholderTrueGray400--O20></Box> // opacify color
     * <Box placeholderTrueGray400--L20></Box> // lighten color
     * <Box placeholderTrueGray400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderTrueGray400?: ResponsiveBoolean
    /**
     * Set placeholder color to trueGray500
     * @example
     * ```tsx
     * <Box placeholderTrueGray500></Box>
     * <Box placeholderTrueGray500--T20></Box> // transparentize color
     * <Box placeholderTrueGray500--O20></Box> // opacify color
     * <Box placeholderTrueGray500--L20></Box> // lighten color
     * <Box placeholderTrueGray500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderTrueGray500?: ResponsiveBoolean
    /**
     * Set placeholder color to trueGray600
     * @example
     * ```tsx
     * <Box placeholderTrueGray600></Box>
     * <Box placeholderTrueGray600--T20></Box> // transparentize color
     * <Box placeholderTrueGray600--O20></Box> // opacify color
     * <Box placeholderTrueGray600--L20></Box> // lighten color
     * <Box placeholderTrueGray600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderTrueGray600?: ResponsiveBoolean
    /**
     * Set placeholder color to trueGray700
     * @example
     * ```tsx
     * <Box placeholderTrueGray700></Box>
     * <Box placeholderTrueGray700--T20></Box> // transparentize color
     * <Box placeholderTrueGray700--O20></Box> // opacify color
     * <Box placeholderTrueGray700--L20></Box> // lighten color
     * <Box placeholderTrueGray700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderTrueGray700?: ResponsiveBoolean
    /**
     * Set placeholder color to trueGray800
     * @example
     * ```tsx
     * <Box placeholderTrueGray800></Box>
     * <Box placeholderTrueGray800--T20></Box> // transparentize color
     * <Box placeholderTrueGray800--O20></Box> // opacify color
     * <Box placeholderTrueGray800--L20></Box> // lighten color
     * <Box placeholderTrueGray800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderTrueGray800?: ResponsiveBoolean
    /**
     * Set placeholder color to trueGray900
     * @example
     * ```tsx
     * <Box placeholderTrueGray900></Box>
     * <Box placeholderTrueGray900--T20></Box> // transparentize color
     * <Box placeholderTrueGray900--O20></Box> // opacify color
     * <Box placeholderTrueGray900--L20></Box> // lighten color
     * <Box placeholderTrueGray900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderTrueGray900?: ResponsiveBoolean
    /**
     * Set placeholder color to gray50
     * @example
     * ```tsx
     * <Box placeholderGray50></Box>
     * <Box placeholderGray50--T20></Box> // transparentize color
     * <Box placeholderGray50--O20></Box> // opacify color
     * <Box placeholderGray50--L20></Box> // lighten color
     * <Box placeholderGray50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderGray50?: ResponsiveBoolean
    /**
     * Set placeholder color to gray100
     * @example
     * ```tsx
     * <Box placeholderGray100></Box>
     * <Box placeholderGray100--T20></Box> // transparentize color
     * <Box placeholderGray100--O20></Box> // opacify color
     * <Box placeholderGray100--L20></Box> // lighten color
     * <Box placeholderGray100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderGray100?: ResponsiveBoolean
    /**
     * Set placeholder color to gray200
     * @example
     * ```tsx
     * <Box placeholderGray200></Box>
     * <Box placeholderGray200--T20></Box> // transparentize color
     * <Box placeholderGray200--O20></Box> // opacify color
     * <Box placeholderGray200--L20></Box> // lighten color
     * <Box placeholderGray200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderGray200?: ResponsiveBoolean
    /**
     * Set placeholder color to gray300
     * @example
     * ```tsx
     * <Box placeholderGray300></Box>
     * <Box placeholderGray300--T20></Box> // transparentize color
     * <Box placeholderGray300--O20></Box> // opacify color
     * <Box placeholderGray300--L20></Box> // lighten color
     * <Box placeholderGray300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderGray300?: ResponsiveBoolean
    /**
     * Set placeholder color to gray400
     * @example
     * ```tsx
     * <Box placeholderGray400></Box>
     * <Box placeholderGray400--T20></Box> // transparentize color
     * <Box placeholderGray400--O20></Box> // opacify color
     * <Box placeholderGray400--L20></Box> // lighten color
     * <Box placeholderGray400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderGray400?: ResponsiveBoolean
    /**
     * Set placeholder color to gray500
     * @example
     * ```tsx
     * <Box placeholderGray500></Box>
     * <Box placeholderGray500--T20></Box> // transparentize color
     * <Box placeholderGray500--O20></Box> // opacify color
     * <Box placeholderGray500--L20></Box> // lighten color
     * <Box placeholderGray500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderGray500?: ResponsiveBoolean
    /**
     * Set placeholder color to gray600
     * @example
     * ```tsx
     * <Box placeholderGray600></Box>
     * <Box placeholderGray600--T20></Box> // transparentize color
     * <Box placeholderGray600--O20></Box> // opacify color
     * <Box placeholderGray600--L20></Box> // lighten color
     * <Box placeholderGray600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderGray600?: ResponsiveBoolean
    /**
     * Set placeholder color to gray700
     * @example
     * ```tsx
     * <Box placeholderGray700></Box>
     * <Box placeholderGray700--T20></Box> // transparentize color
     * <Box placeholderGray700--O20></Box> // opacify color
     * <Box placeholderGray700--L20></Box> // lighten color
     * <Box placeholderGray700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderGray700?: ResponsiveBoolean
    /**
     * Set placeholder color to gray800
     * @example
     * ```tsx
     * <Box placeholderGray800></Box>
     * <Box placeholderGray800--T20></Box> // transparentize color
     * <Box placeholderGray800--O20></Box> // opacify color
     * <Box placeholderGray800--L20></Box> // lighten color
     * <Box placeholderGray800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderGray800?: ResponsiveBoolean
    /**
     * Set placeholder color to gray900
     * @example
     * ```tsx
     * <Box placeholderGray900></Box>
     * <Box placeholderGray900--T20></Box> // transparentize color
     * <Box placeholderGray900--O20></Box> // opacify color
     * <Box placeholderGray900--L20></Box> // lighten color
     * <Box placeholderGray900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderGray900?: ResponsiveBoolean
  }
}
