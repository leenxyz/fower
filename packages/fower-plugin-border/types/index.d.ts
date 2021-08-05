import { FowerPlugin, FowerColor, ResponsiveValue, ResponsiveBoolean } from "@fower/core"
import * as CSS from 'csstype'
declare const _default: () => FowerPlugin
export default _default

declare module '@fower/atomic-props' {
  export interface AtomicProps {
    /**
     * Set border style to some value
     * ```css
     * { border-style: $value }
     * ```
     * @example
     * ```
     * <Box borderStyle="none"></Box>
     * <Box borderStyle="solid"></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-style
     */
    borderStyle?: ResponsiveValue<CSS.Property.BorderStyle>
    /**
     * Set border color to some value
     * ```css
     * { border-color: $value }
     * ```
     * @example
     * ```
     * <Box borderColor="gray200"></Box>
     * <Box borderColor="#fc0"></Box>
     * <Box borderColor="#000"></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderColor?: ResponsiveValue<FowerColor>
    /**
     * Set border width 
     * ```css
     * { border-width: $value; }
     * ```
     * @example
     * ```tsx
     * <Box border></Box>
     * <Box border-2></Box>
     * <Box border-4px></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-width
     */
    border?: ResponsiveValue<boolean | number | string>
    /**
     * Set border width to Top
     * ```css
     * { border-top-width: $value; }
     * ```
     * @example
     * ```tsx
     * <Box borderTop></Box>
     * <Box borderTop-2></Box>
     * <Box borderTop-4px></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-width
     */
    borderTop?: ResponsiveValue<boolean | number | string>
    /**
     * Set border width to Right
     * ```css
     * { border-right-width: $value; }
     * ```
     * @example
     * ```tsx
     * <Box borderRight></Box>
     * <Box borderRight-2></Box>
     * <Box borderRight-4px></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-width
     */
    borderRight?: ResponsiveValue<boolean | number | string>
    /**
     * Set border width to Bottom
     * ```css
     * { border-bottom-width: $value; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottom></Box>
     * <Box borderBottom-2></Box>
     * <Box borderBottom-4px></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-width
     */
    borderBottom?: ResponsiveValue<boolean | number | string>
    /**
     * Set border width to Left
     * ```css
     * { border-left-width: $value; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeft></Box>
     * <Box borderLeft-2></Box>
     * <Box borderLeft-4px></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-width
     */
    borderLeft?: ResponsiveValue<boolean | number | string>
    /**
     * Set border style to solid
     * ```css
     * { border-style: solid; }
     * ```
     * @example
     * ```tsx
     * <Box borderSolid></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-style
     */
    borderSolid?: ResponsiveBoolean
    /**
     * Set border style to dashed
     * ```css
     * { border-style: dashed; }
     * ```
     * @example
     * ```tsx
     * <Box borderDashed></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-style
     */
    borderDashed?: ResponsiveBoolean
    /**
     * Set border style to dotted
     * ```css
     * { border-style: dotted; }
     * ```
     * @example
     * ```tsx
     * <Box borderDotted></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-style
     */
    borderDotted?: ResponsiveBoolean
    /**
     * Set border style to double
     * ```css
     * { border-style: double; }
     * ```
     * @example
     * ```tsx
     * <Box borderDouble></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-style
     */
    borderDouble?: ResponsiveBoolean
    /**
     * Set border style to none
     * ```css
     * { border-style: none; }
     * ```
     * @example
     * ```tsx
     * <Box borderNone></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-style
     */
    borderNone?: ResponsiveBoolean
    /**
     * Set border color to transparent
     * ```css
     * { border-color: transparent; }
     * ```
     * @example
     * ```tsx
     * <Box borderTransparent></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTransparent?: ResponsiveBoolean
    /**
     * Set border color to white
     * ```css
     * { border-color: #ffffff; }
     * ```
     * @example
     * ```tsx
     * <Box borderWhite></Box>
     * <Box borderWhite--T20></Box> // transparentize color
     * <Box borderWhite--O20></Box> // opacify color
     * <Box borderWhite--L20></Box> // lighten color
     * <Box borderWhite--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderWhite?: ResponsiveBoolean
    /**
     * Set border color to black
     * ```css
     * { border-color: #000; }
     * ```
     * @example
     * ```tsx
     * <Box borderBlack></Box>
     * <Box borderBlack--T20></Box> // transparentize color
     * <Box borderBlack--O20></Box> // opacify color
     * <Box borderBlack--L20></Box> // lighten color
     * <Box borderBlack--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBlack?: ResponsiveBoolean
    /**
     * Set border color to brand
     * ```css
     * { border-color: #20c997; }
     * ```
     * @example
     * ```tsx
     * <Box borderBrand></Box>
     * <Box borderBrand--T20></Box> // transparentize color
     * <Box borderBrand--O20></Box> // opacify color
     * <Box borderBrand--L20></Box> // lighten color
     * <Box borderBrand--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBrand?: ResponsiveBoolean
    /**
     * Set border color to brand50
     * ```css
     * { border-color: #e6fcf5; }
     * ```
     * @example
     * ```tsx
     * <Box borderBrand50></Box>
     * <Box borderBrand50--T20></Box> // transparentize color
     * <Box borderBrand50--O20></Box> // opacify color
     * <Box borderBrand50--L20></Box> // lighten color
     * <Box borderBrand50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBrand50?: ResponsiveBoolean
    /**
     * Set border color to brand100
     * ```css
     * { border-color: #c3fae8; }
     * ```
     * @example
     * ```tsx
     * <Box borderBrand100></Box>
     * <Box borderBrand100--T20></Box> // transparentize color
     * <Box borderBrand100--O20></Box> // opacify color
     * <Box borderBrand100--L20></Box> // lighten color
     * <Box borderBrand100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBrand100?: ResponsiveBoolean
    /**
     * Set border color to brand200
     * ```css
     * { border-color: #96f2d7; }
     * ```
     * @example
     * ```tsx
     * <Box borderBrand200></Box>
     * <Box borderBrand200--T20></Box> // transparentize color
     * <Box borderBrand200--O20></Box> // opacify color
     * <Box borderBrand200--L20></Box> // lighten color
     * <Box borderBrand200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBrand200?: ResponsiveBoolean
    /**
     * Set border color to brand300
     * ```css
     * { border-color: #63e6be; }
     * ```
     * @example
     * ```tsx
     * <Box borderBrand300></Box>
     * <Box borderBrand300--T20></Box> // transparentize color
     * <Box borderBrand300--O20></Box> // opacify color
     * <Box borderBrand300--L20></Box> // lighten color
     * <Box borderBrand300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBrand300?: ResponsiveBoolean
    /**
     * Set border color to brand400
     * ```css
     * { border-color: #38d9a9; }
     * ```
     * @example
     * ```tsx
     * <Box borderBrand400></Box>
     * <Box borderBrand400--T20></Box> // transparentize color
     * <Box borderBrand400--O20></Box> // opacify color
     * <Box borderBrand400--L20></Box> // lighten color
     * <Box borderBrand400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBrand400?: ResponsiveBoolean
    /**
     * Set border color to brand500
     * ```css
     * { border-color: #20c997; }
     * ```
     * @example
     * ```tsx
     * <Box borderBrand500></Box>
     * <Box borderBrand500--T20></Box> // transparentize color
     * <Box borderBrand500--O20></Box> // opacify color
     * <Box borderBrand500--L20></Box> // lighten color
     * <Box borderBrand500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBrand500?: ResponsiveBoolean
    /**
     * Set border color to brand600
     * ```css
     * { border-color: #12b886; }
     * ```
     * @example
     * ```tsx
     * <Box borderBrand600></Box>
     * <Box borderBrand600--T20></Box> // transparentize color
     * <Box borderBrand600--O20></Box> // opacify color
     * <Box borderBrand600--L20></Box> // lighten color
     * <Box borderBrand600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBrand600?: ResponsiveBoolean
    /**
     * Set border color to brand700
     * ```css
     * { border-color: #0ca678; }
     * ```
     * @example
     * ```tsx
     * <Box borderBrand700></Box>
     * <Box borderBrand700--T20></Box> // transparentize color
     * <Box borderBrand700--O20></Box> // opacify color
     * <Box borderBrand700--L20></Box> // lighten color
     * <Box borderBrand700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBrand700?: ResponsiveBoolean
    /**
     * Set border color to brand800
     * ```css
     * { border-color: #099268; }
     * ```
     * @example
     * ```tsx
     * <Box borderBrand800></Box>
     * <Box borderBrand800--T20></Box> // transparentize color
     * <Box borderBrand800--O20></Box> // opacify color
     * <Box borderBrand800--L20></Box> // lighten color
     * <Box borderBrand800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBrand800?: ResponsiveBoolean
    /**
     * Set border color to brand900
     * ```css
     * { border-color: #087f5b; }
     * ```
     * @example
     * ```tsx
     * <Box borderBrand900></Box>
     * <Box borderBrand900--T20></Box> // transparentize color
     * <Box borderBrand900--O20></Box> // opacify color
     * <Box borderBrand900--L20></Box> // lighten color
     * <Box borderBrand900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBrand900?: ResponsiveBoolean
    /**
     * Set border color to pink50
     * ```css
     * { border-color: #fff0f6; }
     * ```
     * @example
     * ```tsx
     * <Box borderPink50></Box>
     * <Box borderPink50--T20></Box> // transparentize color
     * <Box borderPink50--O20></Box> // opacify color
     * <Box borderPink50--L20></Box> // lighten color
     * <Box borderPink50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderPink50?: ResponsiveBoolean
    /**
     * Set border color to pink100
     * ```css
     * { border-color: #ffdeeb; }
     * ```
     * @example
     * ```tsx
     * <Box borderPink100></Box>
     * <Box borderPink100--T20></Box> // transparentize color
     * <Box borderPink100--O20></Box> // opacify color
     * <Box borderPink100--L20></Box> // lighten color
     * <Box borderPink100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderPink100?: ResponsiveBoolean
    /**
     * Set border color to pink200
     * ```css
     * { border-color: #fcc2d7; }
     * ```
     * @example
     * ```tsx
     * <Box borderPink200></Box>
     * <Box borderPink200--T20></Box> // transparentize color
     * <Box borderPink200--O20></Box> // opacify color
     * <Box borderPink200--L20></Box> // lighten color
     * <Box borderPink200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderPink200?: ResponsiveBoolean
    /**
     * Set border color to pink300
     * ```css
     * { border-color: #faa2c1; }
     * ```
     * @example
     * ```tsx
     * <Box borderPink300></Box>
     * <Box borderPink300--T20></Box> // transparentize color
     * <Box borderPink300--O20></Box> // opacify color
     * <Box borderPink300--L20></Box> // lighten color
     * <Box borderPink300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderPink300?: ResponsiveBoolean
    /**
     * Set border color to pink400
     * ```css
     * { border-color: #f783ac; }
     * ```
     * @example
     * ```tsx
     * <Box borderPink400></Box>
     * <Box borderPink400--T20></Box> // transparentize color
     * <Box borderPink400--O20></Box> // opacify color
     * <Box borderPink400--L20></Box> // lighten color
     * <Box borderPink400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderPink400?: ResponsiveBoolean
    /**
     * Set border color to pink500
     * ```css
     * { border-color: #f06595; }
     * ```
     * @example
     * ```tsx
     * <Box borderPink500></Box>
     * <Box borderPink500--T20></Box> // transparentize color
     * <Box borderPink500--O20></Box> // opacify color
     * <Box borderPink500--L20></Box> // lighten color
     * <Box borderPink500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderPink500?: ResponsiveBoolean
    /**
     * Set border color to pink600
     * ```css
     * { border-color: #e64980; }
     * ```
     * @example
     * ```tsx
     * <Box borderPink600></Box>
     * <Box borderPink600--T20></Box> // transparentize color
     * <Box borderPink600--O20></Box> // opacify color
     * <Box borderPink600--L20></Box> // lighten color
     * <Box borderPink600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderPink600?: ResponsiveBoolean
    /**
     * Set border color to pink700
     * ```css
     * { border-color: #d6336c; }
     * ```
     * @example
     * ```tsx
     * <Box borderPink700></Box>
     * <Box borderPink700--T20></Box> // transparentize color
     * <Box borderPink700--O20></Box> // opacify color
     * <Box borderPink700--L20></Box> // lighten color
     * <Box borderPink700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderPink700?: ResponsiveBoolean
    /**
     * Set border color to pink800
     * ```css
     * { border-color: #c2255c; }
     * ```
     * @example
     * ```tsx
     * <Box borderPink800></Box>
     * <Box borderPink800--T20></Box> // transparentize color
     * <Box borderPink800--O20></Box> // opacify color
     * <Box borderPink800--L20></Box> // lighten color
     * <Box borderPink800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderPink800?: ResponsiveBoolean
    /**
     * Set border color to pink900
     * ```css
     * { border-color: #a61e4d; }
     * ```
     * @example
     * ```tsx
     * <Box borderPink900></Box>
     * <Box borderPink900--T20></Box> // transparentize color
     * <Box borderPink900--O20></Box> // opacify color
     * <Box borderPink900--L20></Box> // lighten color
     * <Box borderPink900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderPink900?: ResponsiveBoolean
    /**
     * Set border color to fuchsia50
     * ```css
     * { border-color: #f8f0fc; }
     * ```
     * @example
     * ```tsx
     * <Box borderFuchsia50></Box>
     * <Box borderFuchsia50--T20></Box> // transparentize color
     * <Box borderFuchsia50--O20></Box> // opacify color
     * <Box borderFuchsia50--L20></Box> // lighten color
     * <Box borderFuchsia50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderFuchsia50?: ResponsiveBoolean
    /**
     * Set border color to fuchsia100
     * ```css
     * { border-color: #f3d9fa; }
     * ```
     * @example
     * ```tsx
     * <Box borderFuchsia100></Box>
     * <Box borderFuchsia100--T20></Box> // transparentize color
     * <Box borderFuchsia100--O20></Box> // opacify color
     * <Box borderFuchsia100--L20></Box> // lighten color
     * <Box borderFuchsia100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderFuchsia100?: ResponsiveBoolean
    /**
     * Set border color to fuchsia200
     * ```css
     * { border-color: #eebefa; }
     * ```
     * @example
     * ```tsx
     * <Box borderFuchsia200></Box>
     * <Box borderFuchsia200--T20></Box> // transparentize color
     * <Box borderFuchsia200--O20></Box> // opacify color
     * <Box borderFuchsia200--L20></Box> // lighten color
     * <Box borderFuchsia200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderFuchsia200?: ResponsiveBoolean
    /**
     * Set border color to fuchsia300
     * ```css
     * { border-color: #e599f7; }
     * ```
     * @example
     * ```tsx
     * <Box borderFuchsia300></Box>
     * <Box borderFuchsia300--T20></Box> // transparentize color
     * <Box borderFuchsia300--O20></Box> // opacify color
     * <Box borderFuchsia300--L20></Box> // lighten color
     * <Box borderFuchsia300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderFuchsia300?: ResponsiveBoolean
    /**
     * Set border color to fuchsia400
     * ```css
     * { border-color: #da77f2; }
     * ```
     * @example
     * ```tsx
     * <Box borderFuchsia400></Box>
     * <Box borderFuchsia400--T20></Box> // transparentize color
     * <Box borderFuchsia400--O20></Box> // opacify color
     * <Box borderFuchsia400--L20></Box> // lighten color
     * <Box borderFuchsia400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderFuchsia400?: ResponsiveBoolean
    /**
     * Set border color to fuchsia500
     * ```css
     * { border-color: #cc5de8; }
     * ```
     * @example
     * ```tsx
     * <Box borderFuchsia500></Box>
     * <Box borderFuchsia500--T20></Box> // transparentize color
     * <Box borderFuchsia500--O20></Box> // opacify color
     * <Box borderFuchsia500--L20></Box> // lighten color
     * <Box borderFuchsia500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderFuchsia500?: ResponsiveBoolean
    /**
     * Set border color to fuchsia600
     * ```css
     * { border-color: #be4bdb; }
     * ```
     * @example
     * ```tsx
     * <Box borderFuchsia600></Box>
     * <Box borderFuchsia600--T20></Box> // transparentize color
     * <Box borderFuchsia600--O20></Box> // opacify color
     * <Box borderFuchsia600--L20></Box> // lighten color
     * <Box borderFuchsia600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderFuchsia600?: ResponsiveBoolean
    /**
     * Set border color to fuchsia700
     * ```css
     * { border-color: #ae3ec9; }
     * ```
     * @example
     * ```tsx
     * <Box borderFuchsia700></Box>
     * <Box borderFuchsia700--T20></Box> // transparentize color
     * <Box borderFuchsia700--O20></Box> // opacify color
     * <Box borderFuchsia700--L20></Box> // lighten color
     * <Box borderFuchsia700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderFuchsia700?: ResponsiveBoolean
    /**
     * Set border color to fuchsia800
     * ```css
     * { border-color: #9c36b5; }
     * ```
     * @example
     * ```tsx
     * <Box borderFuchsia800></Box>
     * <Box borderFuchsia800--T20></Box> // transparentize color
     * <Box borderFuchsia800--O20></Box> // opacify color
     * <Box borderFuchsia800--L20></Box> // lighten color
     * <Box borderFuchsia800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderFuchsia800?: ResponsiveBoolean
    /**
     * Set border color to fuchsia900
     * ```css
     * { border-color: #862e9c; }
     * ```
     * @example
     * ```tsx
     * <Box borderFuchsia900></Box>
     * <Box borderFuchsia900--T20></Box> // transparentize color
     * <Box borderFuchsia900--O20></Box> // opacify color
     * <Box borderFuchsia900--L20></Box> // lighten color
     * <Box borderFuchsia900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderFuchsia900?: ResponsiveBoolean
    /**
     * Set border color to purple50
     * ```css
     * { border-color: #faf5ff; }
     * ```
     * @example
     * ```tsx
     * <Box borderPurple50></Box>
     * <Box borderPurple50--T20></Box> // transparentize color
     * <Box borderPurple50--O20></Box> // opacify color
     * <Box borderPurple50--L20></Box> // lighten color
     * <Box borderPurple50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderPurple50?: ResponsiveBoolean
    /**
     * Set border color to purple100
     * ```css
     * { border-color: #f3e8ff; }
     * ```
     * @example
     * ```tsx
     * <Box borderPurple100></Box>
     * <Box borderPurple100--T20></Box> // transparentize color
     * <Box borderPurple100--O20></Box> // opacify color
     * <Box borderPurple100--L20></Box> // lighten color
     * <Box borderPurple100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderPurple100?: ResponsiveBoolean
    /**
     * Set border color to purple200
     * ```css
     * { border-color: #e9d5ff; }
     * ```
     * @example
     * ```tsx
     * <Box borderPurple200></Box>
     * <Box borderPurple200--T20></Box> // transparentize color
     * <Box borderPurple200--O20></Box> // opacify color
     * <Box borderPurple200--L20></Box> // lighten color
     * <Box borderPurple200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderPurple200?: ResponsiveBoolean
    /**
     * Set border color to purple300
     * ```css
     * { border-color: #d8b4fe; }
     * ```
     * @example
     * ```tsx
     * <Box borderPurple300></Box>
     * <Box borderPurple300--T20></Box> // transparentize color
     * <Box borderPurple300--O20></Box> // opacify color
     * <Box borderPurple300--L20></Box> // lighten color
     * <Box borderPurple300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderPurple300?: ResponsiveBoolean
    /**
     * Set border color to purple400
     * ```css
     * { border-color: #c084fc; }
     * ```
     * @example
     * ```tsx
     * <Box borderPurple400></Box>
     * <Box borderPurple400--T20></Box> // transparentize color
     * <Box borderPurple400--O20></Box> // opacify color
     * <Box borderPurple400--L20></Box> // lighten color
     * <Box borderPurple400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderPurple400?: ResponsiveBoolean
    /**
     * Set border color to purple500
     * ```css
     * { border-color: #a855f7; }
     * ```
     * @example
     * ```tsx
     * <Box borderPurple500></Box>
     * <Box borderPurple500--T20></Box> // transparentize color
     * <Box borderPurple500--O20></Box> // opacify color
     * <Box borderPurple500--L20></Box> // lighten color
     * <Box borderPurple500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderPurple500?: ResponsiveBoolean
    /**
     * Set border color to purple600
     * ```css
     * { border-color: #9333ea; }
     * ```
     * @example
     * ```tsx
     * <Box borderPurple600></Box>
     * <Box borderPurple600--T20></Box> // transparentize color
     * <Box borderPurple600--O20></Box> // opacify color
     * <Box borderPurple600--L20></Box> // lighten color
     * <Box borderPurple600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderPurple600?: ResponsiveBoolean
    /**
     * Set border color to purple700
     * ```css
     * { border-color: #7e22ce; }
     * ```
     * @example
     * ```tsx
     * <Box borderPurple700></Box>
     * <Box borderPurple700--T20></Box> // transparentize color
     * <Box borderPurple700--O20></Box> // opacify color
     * <Box borderPurple700--L20></Box> // lighten color
     * <Box borderPurple700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderPurple700?: ResponsiveBoolean
    /**
     * Set border color to purple800
     * ```css
     * { border-color: #6b21a8; }
     * ```
     * @example
     * ```tsx
     * <Box borderPurple800></Box>
     * <Box borderPurple800--T20></Box> // transparentize color
     * <Box borderPurple800--O20></Box> // opacify color
     * <Box borderPurple800--L20></Box> // lighten color
     * <Box borderPurple800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderPurple800?: ResponsiveBoolean
    /**
     * Set border color to purple900
     * ```css
     * { border-color: #581c87; }
     * ```
     * @example
     * ```tsx
     * <Box borderPurple900></Box>
     * <Box borderPurple900--T20></Box> // transparentize color
     * <Box borderPurple900--O20></Box> // opacify color
     * <Box borderPurple900--L20></Box> // lighten color
     * <Box borderPurple900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderPurple900?: ResponsiveBoolean
    /**
     * Set border color to violet50
     * ```css
     * { border-color: #f3f0ff; }
     * ```
     * @example
     * ```tsx
     * <Box borderViolet50></Box>
     * <Box borderViolet50--T20></Box> // transparentize color
     * <Box borderViolet50--O20></Box> // opacify color
     * <Box borderViolet50--L20></Box> // lighten color
     * <Box borderViolet50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderViolet50?: ResponsiveBoolean
    /**
     * Set border color to violet100
     * ```css
     * { border-color: #e5dbff; }
     * ```
     * @example
     * ```tsx
     * <Box borderViolet100></Box>
     * <Box borderViolet100--T20></Box> // transparentize color
     * <Box borderViolet100--O20></Box> // opacify color
     * <Box borderViolet100--L20></Box> // lighten color
     * <Box borderViolet100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderViolet100?: ResponsiveBoolean
    /**
     * Set border color to violet200
     * ```css
     * { border-color: #d0bfff; }
     * ```
     * @example
     * ```tsx
     * <Box borderViolet200></Box>
     * <Box borderViolet200--T20></Box> // transparentize color
     * <Box borderViolet200--O20></Box> // opacify color
     * <Box borderViolet200--L20></Box> // lighten color
     * <Box borderViolet200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderViolet200?: ResponsiveBoolean
    /**
     * Set border color to violet300
     * ```css
     * { border-color: #b197fc; }
     * ```
     * @example
     * ```tsx
     * <Box borderViolet300></Box>
     * <Box borderViolet300--T20></Box> // transparentize color
     * <Box borderViolet300--O20></Box> // opacify color
     * <Box borderViolet300--L20></Box> // lighten color
     * <Box borderViolet300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderViolet300?: ResponsiveBoolean
    /**
     * Set border color to violet400
     * ```css
     * { border-color: #9775fa; }
     * ```
     * @example
     * ```tsx
     * <Box borderViolet400></Box>
     * <Box borderViolet400--T20></Box> // transparentize color
     * <Box borderViolet400--O20></Box> // opacify color
     * <Box borderViolet400--L20></Box> // lighten color
     * <Box borderViolet400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderViolet400?: ResponsiveBoolean
    /**
     * Set border color to violet500
     * ```css
     * { border-color: #845ef7; }
     * ```
     * @example
     * ```tsx
     * <Box borderViolet500></Box>
     * <Box borderViolet500--T20></Box> // transparentize color
     * <Box borderViolet500--O20></Box> // opacify color
     * <Box borderViolet500--L20></Box> // lighten color
     * <Box borderViolet500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderViolet500?: ResponsiveBoolean
    /**
     * Set border color to violet600
     * ```css
     * { border-color: #7950f2; }
     * ```
     * @example
     * ```tsx
     * <Box borderViolet600></Box>
     * <Box borderViolet600--T20></Box> // transparentize color
     * <Box borderViolet600--O20></Box> // opacify color
     * <Box borderViolet600--L20></Box> // lighten color
     * <Box borderViolet600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderViolet600?: ResponsiveBoolean
    /**
     * Set border color to violet700
     * ```css
     * { border-color: #7048e8; }
     * ```
     * @example
     * ```tsx
     * <Box borderViolet700></Box>
     * <Box borderViolet700--T20></Box> // transparentize color
     * <Box borderViolet700--O20></Box> // opacify color
     * <Box borderViolet700--L20></Box> // lighten color
     * <Box borderViolet700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderViolet700?: ResponsiveBoolean
    /**
     * Set border color to violet800
     * ```css
     * { border-color: #6741d9; }
     * ```
     * @example
     * ```tsx
     * <Box borderViolet800></Box>
     * <Box borderViolet800--T20></Box> // transparentize color
     * <Box borderViolet800--O20></Box> // opacify color
     * <Box borderViolet800--L20></Box> // lighten color
     * <Box borderViolet800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderViolet800?: ResponsiveBoolean
    /**
     * Set border color to violet900
     * ```css
     * { border-color: #5f3dc4; }
     * ```
     * @example
     * ```tsx
     * <Box borderViolet900></Box>
     * <Box borderViolet900--T20></Box> // transparentize color
     * <Box borderViolet900--O20></Box> // opacify color
     * <Box borderViolet900--L20></Box> // lighten color
     * <Box borderViolet900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderViolet900?: ResponsiveBoolean
    /**
     * Set border color to indigo50
     * ```css
     * { border-color: #edf2ff; }
     * ```
     * @example
     * ```tsx
     * <Box borderIndigo50></Box>
     * <Box borderIndigo50--T20></Box> // transparentize color
     * <Box borderIndigo50--O20></Box> // opacify color
     * <Box borderIndigo50--L20></Box> // lighten color
     * <Box borderIndigo50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderIndigo50?: ResponsiveBoolean
    /**
     * Set border color to indigo100
     * ```css
     * { border-color: #dbe4ff; }
     * ```
     * @example
     * ```tsx
     * <Box borderIndigo100></Box>
     * <Box borderIndigo100--T20></Box> // transparentize color
     * <Box borderIndigo100--O20></Box> // opacify color
     * <Box borderIndigo100--L20></Box> // lighten color
     * <Box borderIndigo100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderIndigo100?: ResponsiveBoolean
    /**
     * Set border color to indigo200
     * ```css
     * { border-color: #bac8ff; }
     * ```
     * @example
     * ```tsx
     * <Box borderIndigo200></Box>
     * <Box borderIndigo200--T20></Box> // transparentize color
     * <Box borderIndigo200--O20></Box> // opacify color
     * <Box borderIndigo200--L20></Box> // lighten color
     * <Box borderIndigo200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderIndigo200?: ResponsiveBoolean
    /**
     * Set border color to indigo300
     * ```css
     * { border-color: #91a7ff; }
     * ```
     * @example
     * ```tsx
     * <Box borderIndigo300></Box>
     * <Box borderIndigo300--T20></Box> // transparentize color
     * <Box borderIndigo300--O20></Box> // opacify color
     * <Box borderIndigo300--L20></Box> // lighten color
     * <Box borderIndigo300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderIndigo300?: ResponsiveBoolean
    /**
     * Set border color to indigo400
     * ```css
     * { border-color: #748ffc; }
     * ```
     * @example
     * ```tsx
     * <Box borderIndigo400></Box>
     * <Box borderIndigo400--T20></Box> // transparentize color
     * <Box borderIndigo400--O20></Box> // opacify color
     * <Box borderIndigo400--L20></Box> // lighten color
     * <Box borderIndigo400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderIndigo400?: ResponsiveBoolean
    /**
     * Set border color to indigo500
     * ```css
     * { border-color: #5c7cfa; }
     * ```
     * @example
     * ```tsx
     * <Box borderIndigo500></Box>
     * <Box borderIndigo500--T20></Box> // transparentize color
     * <Box borderIndigo500--O20></Box> // opacify color
     * <Box borderIndigo500--L20></Box> // lighten color
     * <Box borderIndigo500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderIndigo500?: ResponsiveBoolean
    /**
     * Set border color to indigo600
     * ```css
     * { border-color: #4c6ef5; }
     * ```
     * @example
     * ```tsx
     * <Box borderIndigo600></Box>
     * <Box borderIndigo600--T20></Box> // transparentize color
     * <Box borderIndigo600--O20></Box> // opacify color
     * <Box borderIndigo600--L20></Box> // lighten color
     * <Box borderIndigo600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderIndigo600?: ResponsiveBoolean
    /**
     * Set border color to indigo700
     * ```css
     * { border-color: #4263eb; }
     * ```
     * @example
     * ```tsx
     * <Box borderIndigo700></Box>
     * <Box borderIndigo700--T20></Box> // transparentize color
     * <Box borderIndigo700--O20></Box> // opacify color
     * <Box borderIndigo700--L20></Box> // lighten color
     * <Box borderIndigo700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderIndigo700?: ResponsiveBoolean
    /**
     * Set border color to indigo800
     * ```css
     * { border-color: #3b5bdb; }
     * ```
     * @example
     * ```tsx
     * <Box borderIndigo800></Box>
     * <Box borderIndigo800--T20></Box> // transparentize color
     * <Box borderIndigo800--O20></Box> // opacify color
     * <Box borderIndigo800--L20></Box> // lighten color
     * <Box borderIndigo800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderIndigo800?: ResponsiveBoolean
    /**
     * Set border color to indigo900
     * ```css
     * { border-color: #364fc7; }
     * ```
     * @example
     * ```tsx
     * <Box borderIndigo900></Box>
     * <Box borderIndigo900--T20></Box> // transparentize color
     * <Box borderIndigo900--O20></Box> // opacify color
     * <Box borderIndigo900--L20></Box> // lighten color
     * <Box borderIndigo900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderIndigo900?: ResponsiveBoolean
    /**
     * Set border color to blue50
     * ```css
     * { border-color: #e7f5ff; }
     * ```
     * @example
     * ```tsx
     * <Box borderBlue50></Box>
     * <Box borderBlue50--T20></Box> // transparentize color
     * <Box borderBlue50--O20></Box> // opacify color
     * <Box borderBlue50--L20></Box> // lighten color
     * <Box borderBlue50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBlue50?: ResponsiveBoolean
    /**
     * Set border color to blue100
     * ```css
     * { border-color: #d0ebff; }
     * ```
     * @example
     * ```tsx
     * <Box borderBlue100></Box>
     * <Box borderBlue100--T20></Box> // transparentize color
     * <Box borderBlue100--O20></Box> // opacify color
     * <Box borderBlue100--L20></Box> // lighten color
     * <Box borderBlue100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBlue100?: ResponsiveBoolean
    /**
     * Set border color to blue200
     * ```css
     * { border-color: #a5d8ff; }
     * ```
     * @example
     * ```tsx
     * <Box borderBlue200></Box>
     * <Box borderBlue200--T20></Box> // transparentize color
     * <Box borderBlue200--O20></Box> // opacify color
     * <Box borderBlue200--L20></Box> // lighten color
     * <Box borderBlue200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBlue200?: ResponsiveBoolean
    /**
     * Set border color to blue300
     * ```css
     * { border-color: #74c0fc; }
     * ```
     * @example
     * ```tsx
     * <Box borderBlue300></Box>
     * <Box borderBlue300--T20></Box> // transparentize color
     * <Box borderBlue300--O20></Box> // opacify color
     * <Box borderBlue300--L20></Box> // lighten color
     * <Box borderBlue300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBlue300?: ResponsiveBoolean
    /**
     * Set border color to blue400
     * ```css
     * { border-color: #4dabf7; }
     * ```
     * @example
     * ```tsx
     * <Box borderBlue400></Box>
     * <Box borderBlue400--T20></Box> // transparentize color
     * <Box borderBlue400--O20></Box> // opacify color
     * <Box borderBlue400--L20></Box> // lighten color
     * <Box borderBlue400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBlue400?: ResponsiveBoolean
    /**
     * Set border color to blue500
     * ```css
     * { border-color: #339af0; }
     * ```
     * @example
     * ```tsx
     * <Box borderBlue500></Box>
     * <Box borderBlue500--T20></Box> // transparentize color
     * <Box borderBlue500--O20></Box> // opacify color
     * <Box borderBlue500--L20></Box> // lighten color
     * <Box borderBlue500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBlue500?: ResponsiveBoolean
    /**
     * Set border color to blue600
     * ```css
     * { border-color: #228be6; }
     * ```
     * @example
     * ```tsx
     * <Box borderBlue600></Box>
     * <Box borderBlue600--T20></Box> // transparentize color
     * <Box borderBlue600--O20></Box> // opacify color
     * <Box borderBlue600--L20></Box> // lighten color
     * <Box borderBlue600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBlue600?: ResponsiveBoolean
    /**
     * Set border color to blue700
     * ```css
     * { border-color: #1c7ed6; }
     * ```
     * @example
     * ```tsx
     * <Box borderBlue700></Box>
     * <Box borderBlue700--T20></Box> // transparentize color
     * <Box borderBlue700--O20></Box> // opacify color
     * <Box borderBlue700--L20></Box> // lighten color
     * <Box borderBlue700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBlue700?: ResponsiveBoolean
    /**
     * Set border color to blue800
     * ```css
     * { border-color: #1971c2; }
     * ```
     * @example
     * ```tsx
     * <Box borderBlue800></Box>
     * <Box borderBlue800--T20></Box> // transparentize color
     * <Box borderBlue800--O20></Box> // opacify color
     * <Box borderBlue800--L20></Box> // lighten color
     * <Box borderBlue800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBlue800?: ResponsiveBoolean
    /**
     * Set border color to blue900
     * ```css
     * { border-color: #1864ab; }
     * ```
     * @example
     * ```tsx
     * <Box borderBlue900></Box>
     * <Box borderBlue900--T20></Box> // transparentize color
     * <Box borderBlue900--O20></Box> // opacify color
     * <Box borderBlue900--L20></Box> // lighten color
     * <Box borderBlue900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBlue900?: ResponsiveBoolean
    /**
     * Set border color to cyan50
     * ```css
     * { border-color: #e3fafc; }
     * ```
     * @example
     * ```tsx
     * <Box borderCyan50></Box>
     * <Box borderCyan50--T20></Box> // transparentize color
     * <Box borderCyan50--O20></Box> // opacify color
     * <Box borderCyan50--L20></Box> // lighten color
     * <Box borderCyan50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderCyan50?: ResponsiveBoolean
    /**
     * Set border color to cyan100
     * ```css
     * { border-color: #c5f6fa; }
     * ```
     * @example
     * ```tsx
     * <Box borderCyan100></Box>
     * <Box borderCyan100--T20></Box> // transparentize color
     * <Box borderCyan100--O20></Box> // opacify color
     * <Box borderCyan100--L20></Box> // lighten color
     * <Box borderCyan100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderCyan100?: ResponsiveBoolean
    /**
     * Set border color to cyan200
     * ```css
     * { border-color: #99e9f2; }
     * ```
     * @example
     * ```tsx
     * <Box borderCyan200></Box>
     * <Box borderCyan200--T20></Box> // transparentize color
     * <Box borderCyan200--O20></Box> // opacify color
     * <Box borderCyan200--L20></Box> // lighten color
     * <Box borderCyan200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderCyan200?: ResponsiveBoolean
    /**
     * Set border color to cyan300
     * ```css
     * { border-color: #66d9e8; }
     * ```
     * @example
     * ```tsx
     * <Box borderCyan300></Box>
     * <Box borderCyan300--T20></Box> // transparentize color
     * <Box borderCyan300--O20></Box> // opacify color
     * <Box borderCyan300--L20></Box> // lighten color
     * <Box borderCyan300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderCyan300?: ResponsiveBoolean
    /**
     * Set border color to cyan400
     * ```css
     * { border-color: #3bc9db; }
     * ```
     * @example
     * ```tsx
     * <Box borderCyan400></Box>
     * <Box borderCyan400--T20></Box> // transparentize color
     * <Box borderCyan400--O20></Box> // opacify color
     * <Box borderCyan400--L20></Box> // lighten color
     * <Box borderCyan400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderCyan400?: ResponsiveBoolean
    /**
     * Set border color to cyan500
     * ```css
     * { border-color: #22b8cf; }
     * ```
     * @example
     * ```tsx
     * <Box borderCyan500></Box>
     * <Box borderCyan500--T20></Box> // transparentize color
     * <Box borderCyan500--O20></Box> // opacify color
     * <Box borderCyan500--L20></Box> // lighten color
     * <Box borderCyan500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderCyan500?: ResponsiveBoolean
    /**
     * Set border color to cyan600
     * ```css
     * { border-color: #15aabf; }
     * ```
     * @example
     * ```tsx
     * <Box borderCyan600></Box>
     * <Box borderCyan600--T20></Box> // transparentize color
     * <Box borderCyan600--O20></Box> // opacify color
     * <Box borderCyan600--L20></Box> // lighten color
     * <Box borderCyan600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderCyan600?: ResponsiveBoolean
    /**
     * Set border color to cyan700
     * ```css
     * { border-color: #1098ad; }
     * ```
     * @example
     * ```tsx
     * <Box borderCyan700></Box>
     * <Box borderCyan700--T20></Box> // transparentize color
     * <Box borderCyan700--O20></Box> // opacify color
     * <Box borderCyan700--L20></Box> // lighten color
     * <Box borderCyan700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderCyan700?: ResponsiveBoolean
    /**
     * Set border color to cyan800
     * ```css
     * { border-color: #0c8599; }
     * ```
     * @example
     * ```tsx
     * <Box borderCyan800></Box>
     * <Box borderCyan800--T20></Box> // transparentize color
     * <Box borderCyan800--O20></Box> // opacify color
     * <Box borderCyan800--L20></Box> // lighten color
     * <Box borderCyan800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderCyan800?: ResponsiveBoolean
    /**
     * Set border color to cyan900
     * ```css
     * { border-color: #0b7285; }
     * ```
     * @example
     * ```tsx
     * <Box borderCyan900></Box>
     * <Box borderCyan900--T20></Box> // transparentize color
     * <Box borderCyan900--O20></Box> // opacify color
     * <Box borderCyan900--L20></Box> // lighten color
     * <Box borderCyan900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderCyan900?: ResponsiveBoolean
    /**
     * Set border color to teal50
     * ```css
     * { border-color: #e6fcf5; }
     * ```
     * @example
     * ```tsx
     * <Box borderTeal50></Box>
     * <Box borderTeal50--T20></Box> // transparentize color
     * <Box borderTeal50--O20></Box> // opacify color
     * <Box borderTeal50--L20></Box> // lighten color
     * <Box borderTeal50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTeal50?: ResponsiveBoolean
    /**
     * Set border color to teal100
     * ```css
     * { border-color: #c3fae8; }
     * ```
     * @example
     * ```tsx
     * <Box borderTeal100></Box>
     * <Box borderTeal100--T20></Box> // transparentize color
     * <Box borderTeal100--O20></Box> // opacify color
     * <Box borderTeal100--L20></Box> // lighten color
     * <Box borderTeal100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTeal100?: ResponsiveBoolean
    /**
     * Set border color to teal200
     * ```css
     * { border-color: #96f2d7; }
     * ```
     * @example
     * ```tsx
     * <Box borderTeal200></Box>
     * <Box borderTeal200--T20></Box> // transparentize color
     * <Box borderTeal200--O20></Box> // opacify color
     * <Box borderTeal200--L20></Box> // lighten color
     * <Box borderTeal200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTeal200?: ResponsiveBoolean
    /**
     * Set border color to teal300
     * ```css
     * { border-color: #63e6be; }
     * ```
     * @example
     * ```tsx
     * <Box borderTeal300></Box>
     * <Box borderTeal300--T20></Box> // transparentize color
     * <Box borderTeal300--O20></Box> // opacify color
     * <Box borderTeal300--L20></Box> // lighten color
     * <Box borderTeal300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTeal300?: ResponsiveBoolean
    /**
     * Set border color to teal400
     * ```css
     * { border-color: #38d9a9; }
     * ```
     * @example
     * ```tsx
     * <Box borderTeal400></Box>
     * <Box borderTeal400--T20></Box> // transparentize color
     * <Box borderTeal400--O20></Box> // opacify color
     * <Box borderTeal400--L20></Box> // lighten color
     * <Box borderTeal400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTeal400?: ResponsiveBoolean
    /**
     * Set border color to teal500
     * ```css
     * { border-color: #20c997; }
     * ```
     * @example
     * ```tsx
     * <Box borderTeal500></Box>
     * <Box borderTeal500--T20></Box> // transparentize color
     * <Box borderTeal500--O20></Box> // opacify color
     * <Box borderTeal500--L20></Box> // lighten color
     * <Box borderTeal500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTeal500?: ResponsiveBoolean
    /**
     * Set border color to teal600
     * ```css
     * { border-color: #12b886; }
     * ```
     * @example
     * ```tsx
     * <Box borderTeal600></Box>
     * <Box borderTeal600--T20></Box> // transparentize color
     * <Box borderTeal600--O20></Box> // opacify color
     * <Box borderTeal600--L20></Box> // lighten color
     * <Box borderTeal600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTeal600?: ResponsiveBoolean
    /**
     * Set border color to teal700
     * ```css
     * { border-color: #0ca678; }
     * ```
     * @example
     * ```tsx
     * <Box borderTeal700></Box>
     * <Box borderTeal700--T20></Box> // transparentize color
     * <Box borderTeal700--O20></Box> // opacify color
     * <Box borderTeal700--L20></Box> // lighten color
     * <Box borderTeal700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTeal700?: ResponsiveBoolean
    /**
     * Set border color to teal800
     * ```css
     * { border-color: #099268; }
     * ```
     * @example
     * ```tsx
     * <Box borderTeal800></Box>
     * <Box borderTeal800--T20></Box> // transparentize color
     * <Box borderTeal800--O20></Box> // opacify color
     * <Box borderTeal800--L20></Box> // lighten color
     * <Box borderTeal800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTeal800?: ResponsiveBoolean
    /**
     * Set border color to teal900
     * ```css
     * { border-color: #087f5b; }
     * ```
     * @example
     * ```tsx
     * <Box borderTeal900></Box>
     * <Box borderTeal900--T20></Box> // transparentize color
     * <Box borderTeal900--O20></Box> // opacify color
     * <Box borderTeal900--L20></Box> // lighten color
     * <Box borderTeal900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTeal900?: ResponsiveBoolean
    /**
     * Set border color to green50
     * ```css
     * { border-color: #ebfbee; }
     * ```
     * @example
     * ```tsx
     * <Box borderGreen50></Box>
     * <Box borderGreen50--T20></Box> // transparentize color
     * <Box borderGreen50--O20></Box> // opacify color
     * <Box borderGreen50--L20></Box> // lighten color
     * <Box borderGreen50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderGreen50?: ResponsiveBoolean
    /**
     * Set border color to green100
     * ```css
     * { border-color: #d3f9d8; }
     * ```
     * @example
     * ```tsx
     * <Box borderGreen100></Box>
     * <Box borderGreen100--T20></Box> // transparentize color
     * <Box borderGreen100--O20></Box> // opacify color
     * <Box borderGreen100--L20></Box> // lighten color
     * <Box borderGreen100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderGreen100?: ResponsiveBoolean
    /**
     * Set border color to green200
     * ```css
     * { border-color: #b2f2bb; }
     * ```
     * @example
     * ```tsx
     * <Box borderGreen200></Box>
     * <Box borderGreen200--T20></Box> // transparentize color
     * <Box borderGreen200--O20></Box> // opacify color
     * <Box borderGreen200--L20></Box> // lighten color
     * <Box borderGreen200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderGreen200?: ResponsiveBoolean
    /**
     * Set border color to green300
     * ```css
     * { border-color: #8ce99a; }
     * ```
     * @example
     * ```tsx
     * <Box borderGreen300></Box>
     * <Box borderGreen300--T20></Box> // transparentize color
     * <Box borderGreen300--O20></Box> // opacify color
     * <Box borderGreen300--L20></Box> // lighten color
     * <Box borderGreen300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderGreen300?: ResponsiveBoolean
    /**
     * Set border color to green400
     * ```css
     * { border-color: #69db7c; }
     * ```
     * @example
     * ```tsx
     * <Box borderGreen400></Box>
     * <Box borderGreen400--T20></Box> // transparentize color
     * <Box borderGreen400--O20></Box> // opacify color
     * <Box borderGreen400--L20></Box> // lighten color
     * <Box borderGreen400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderGreen400?: ResponsiveBoolean
    /**
     * Set border color to green500
     * ```css
     * { border-color: #51cf66; }
     * ```
     * @example
     * ```tsx
     * <Box borderGreen500></Box>
     * <Box borderGreen500--T20></Box> // transparentize color
     * <Box borderGreen500--O20></Box> // opacify color
     * <Box borderGreen500--L20></Box> // lighten color
     * <Box borderGreen500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderGreen500?: ResponsiveBoolean
    /**
     * Set border color to green600
     * ```css
     * { border-color: #40c057; }
     * ```
     * @example
     * ```tsx
     * <Box borderGreen600></Box>
     * <Box borderGreen600--T20></Box> // transparentize color
     * <Box borderGreen600--O20></Box> // opacify color
     * <Box borderGreen600--L20></Box> // lighten color
     * <Box borderGreen600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderGreen600?: ResponsiveBoolean
    /**
     * Set border color to green700
     * ```css
     * { border-color: #37b24d; }
     * ```
     * @example
     * ```tsx
     * <Box borderGreen700></Box>
     * <Box borderGreen700--T20></Box> // transparentize color
     * <Box borderGreen700--O20></Box> // opacify color
     * <Box borderGreen700--L20></Box> // lighten color
     * <Box borderGreen700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderGreen700?: ResponsiveBoolean
    /**
     * Set border color to green800
     * ```css
     * { border-color: #2f9e44; }
     * ```
     * @example
     * ```tsx
     * <Box borderGreen800></Box>
     * <Box borderGreen800--T20></Box> // transparentize color
     * <Box borderGreen800--O20></Box> // opacify color
     * <Box borderGreen800--L20></Box> // lighten color
     * <Box borderGreen800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderGreen800?: ResponsiveBoolean
    /**
     * Set border color to green900
     * ```css
     * { border-color: #2b8a3e; }
     * ```
     * @example
     * ```tsx
     * <Box borderGreen900></Box>
     * <Box borderGreen900--T20></Box> // transparentize color
     * <Box borderGreen900--O20></Box> // opacify color
     * <Box borderGreen900--L20></Box> // lighten color
     * <Box borderGreen900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderGreen900?: ResponsiveBoolean
    /**
     * Set border color to lime50
     * ```css
     * { border-color: #f4fce3; }
     * ```
     * @example
     * ```tsx
     * <Box borderLime50></Box>
     * <Box borderLime50--T20></Box> // transparentize color
     * <Box borderLime50--O20></Box> // opacify color
     * <Box borderLime50--L20></Box> // lighten color
     * <Box borderLime50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLime50?: ResponsiveBoolean
    /**
     * Set border color to lime100
     * ```css
     * { border-color: #e9fac8; }
     * ```
     * @example
     * ```tsx
     * <Box borderLime100></Box>
     * <Box borderLime100--T20></Box> // transparentize color
     * <Box borderLime100--O20></Box> // opacify color
     * <Box borderLime100--L20></Box> // lighten color
     * <Box borderLime100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLime100?: ResponsiveBoolean
    /**
     * Set border color to lime200
     * ```css
     * { border-color: #d8f5a2; }
     * ```
     * @example
     * ```tsx
     * <Box borderLime200></Box>
     * <Box borderLime200--T20></Box> // transparentize color
     * <Box borderLime200--O20></Box> // opacify color
     * <Box borderLime200--L20></Box> // lighten color
     * <Box borderLime200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLime200?: ResponsiveBoolean
    /**
     * Set border color to lime300
     * ```css
     * { border-color: #c0eb75; }
     * ```
     * @example
     * ```tsx
     * <Box borderLime300></Box>
     * <Box borderLime300--T20></Box> // transparentize color
     * <Box borderLime300--O20></Box> // opacify color
     * <Box borderLime300--L20></Box> // lighten color
     * <Box borderLime300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLime300?: ResponsiveBoolean
    /**
     * Set border color to lime400
     * ```css
     * { border-color: #a9e34b; }
     * ```
     * @example
     * ```tsx
     * <Box borderLime400></Box>
     * <Box borderLime400--T20></Box> // transparentize color
     * <Box borderLime400--O20></Box> // opacify color
     * <Box borderLime400--L20></Box> // lighten color
     * <Box borderLime400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLime400?: ResponsiveBoolean
    /**
     * Set border color to lime500
     * ```css
     * { border-color: #94d82d; }
     * ```
     * @example
     * ```tsx
     * <Box borderLime500></Box>
     * <Box borderLime500--T20></Box> // transparentize color
     * <Box borderLime500--O20></Box> // opacify color
     * <Box borderLime500--L20></Box> // lighten color
     * <Box borderLime500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLime500?: ResponsiveBoolean
    /**
     * Set border color to lime600
     * ```css
     * { border-color: #82c91e; }
     * ```
     * @example
     * ```tsx
     * <Box borderLime600></Box>
     * <Box borderLime600--T20></Box> // transparentize color
     * <Box borderLime600--O20></Box> // opacify color
     * <Box borderLime600--L20></Box> // lighten color
     * <Box borderLime600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLime600?: ResponsiveBoolean
    /**
     * Set border color to lime700
     * ```css
     * { border-color: #74b816; }
     * ```
     * @example
     * ```tsx
     * <Box borderLime700></Box>
     * <Box borderLime700--T20></Box> // transparentize color
     * <Box borderLime700--O20></Box> // opacify color
     * <Box borderLime700--L20></Box> // lighten color
     * <Box borderLime700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLime700?: ResponsiveBoolean
    /**
     * Set border color to lime800
     * ```css
     * { border-color: #66a80f; }
     * ```
     * @example
     * ```tsx
     * <Box borderLime800></Box>
     * <Box borderLime800--T20></Box> // transparentize color
     * <Box borderLime800--O20></Box> // opacify color
     * <Box borderLime800--L20></Box> // lighten color
     * <Box borderLime800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLime800?: ResponsiveBoolean
    /**
     * Set border color to lime900
     * ```css
     * { border-color: #5c940d; }
     * ```
     * @example
     * ```tsx
     * <Box borderLime900></Box>
     * <Box borderLime900--T20></Box> // transparentize color
     * <Box borderLime900--O20></Box> // opacify color
     * <Box borderLime900--L20></Box> // lighten color
     * <Box borderLime900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLime900?: ResponsiveBoolean
    /**
     * Set border color to yellow50
     * ```css
     * { border-color: #fff9db; }
     * ```
     * @example
     * ```tsx
     * <Box borderYellow50></Box>
     * <Box borderYellow50--T20></Box> // transparentize color
     * <Box borderYellow50--O20></Box> // opacify color
     * <Box borderYellow50--L20></Box> // lighten color
     * <Box borderYellow50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderYellow50?: ResponsiveBoolean
    /**
     * Set border color to yellow100
     * ```css
     * { border-color: #fff3bf; }
     * ```
     * @example
     * ```tsx
     * <Box borderYellow100></Box>
     * <Box borderYellow100--T20></Box> // transparentize color
     * <Box borderYellow100--O20></Box> // opacify color
     * <Box borderYellow100--L20></Box> // lighten color
     * <Box borderYellow100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderYellow100?: ResponsiveBoolean
    /**
     * Set border color to yellow200
     * ```css
     * { border-color: #ffec99; }
     * ```
     * @example
     * ```tsx
     * <Box borderYellow200></Box>
     * <Box borderYellow200--T20></Box> // transparentize color
     * <Box borderYellow200--O20></Box> // opacify color
     * <Box borderYellow200--L20></Box> // lighten color
     * <Box borderYellow200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderYellow200?: ResponsiveBoolean
    /**
     * Set border color to yellow300
     * ```css
     * { border-color: #ffe066; }
     * ```
     * @example
     * ```tsx
     * <Box borderYellow300></Box>
     * <Box borderYellow300--T20></Box> // transparentize color
     * <Box borderYellow300--O20></Box> // opacify color
     * <Box borderYellow300--L20></Box> // lighten color
     * <Box borderYellow300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderYellow300?: ResponsiveBoolean
    /**
     * Set border color to yellow400
     * ```css
     * { border-color: #ffd43b; }
     * ```
     * @example
     * ```tsx
     * <Box borderYellow400></Box>
     * <Box borderYellow400--T20></Box> // transparentize color
     * <Box borderYellow400--O20></Box> // opacify color
     * <Box borderYellow400--L20></Box> // lighten color
     * <Box borderYellow400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderYellow400?: ResponsiveBoolean
    /**
     * Set border color to yellow500
     * ```css
     * { border-color: #fcc419; }
     * ```
     * @example
     * ```tsx
     * <Box borderYellow500></Box>
     * <Box borderYellow500--T20></Box> // transparentize color
     * <Box borderYellow500--O20></Box> // opacify color
     * <Box borderYellow500--L20></Box> // lighten color
     * <Box borderYellow500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderYellow500?: ResponsiveBoolean
    /**
     * Set border color to yellow600
     * ```css
     * { border-color: #fab005; }
     * ```
     * @example
     * ```tsx
     * <Box borderYellow600></Box>
     * <Box borderYellow600--T20></Box> // transparentize color
     * <Box borderYellow600--O20></Box> // opacify color
     * <Box borderYellow600--L20></Box> // lighten color
     * <Box borderYellow600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderYellow600?: ResponsiveBoolean
    /**
     * Set border color to yellow700
     * ```css
     * { border-color: #f59f00; }
     * ```
     * @example
     * ```tsx
     * <Box borderYellow700></Box>
     * <Box borderYellow700--T20></Box> // transparentize color
     * <Box borderYellow700--O20></Box> // opacify color
     * <Box borderYellow700--L20></Box> // lighten color
     * <Box borderYellow700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderYellow700?: ResponsiveBoolean
    /**
     * Set border color to yellow800
     * ```css
     * { border-color: #f08c00; }
     * ```
     * @example
     * ```tsx
     * <Box borderYellow800></Box>
     * <Box borderYellow800--T20></Box> // transparentize color
     * <Box borderYellow800--O20></Box> // opacify color
     * <Box borderYellow800--L20></Box> // lighten color
     * <Box borderYellow800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderYellow800?: ResponsiveBoolean
    /**
     * Set border color to yellow900
     * ```css
     * { border-color: #e67700; }
     * ```
     * @example
     * ```tsx
     * <Box borderYellow900></Box>
     * <Box borderYellow900--T20></Box> // transparentize color
     * <Box borderYellow900--O20></Box> // opacify color
     * <Box borderYellow900--L20></Box> // lighten color
     * <Box borderYellow900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderYellow900?: ResponsiveBoolean
    /**
     * Set border color to orange50
     * ```css
     * { border-color: #fff4e6; }
     * ```
     * @example
     * ```tsx
     * <Box borderOrange50></Box>
     * <Box borderOrange50--T20></Box> // transparentize color
     * <Box borderOrange50--O20></Box> // opacify color
     * <Box borderOrange50--L20></Box> // lighten color
     * <Box borderOrange50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderOrange50?: ResponsiveBoolean
    /**
     * Set border color to orange100
     * ```css
     * { border-color: #ffe8cc; }
     * ```
     * @example
     * ```tsx
     * <Box borderOrange100></Box>
     * <Box borderOrange100--T20></Box> // transparentize color
     * <Box borderOrange100--O20></Box> // opacify color
     * <Box borderOrange100--L20></Box> // lighten color
     * <Box borderOrange100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderOrange100?: ResponsiveBoolean
    /**
     * Set border color to orange200
     * ```css
     * { border-color: #ffd8a8; }
     * ```
     * @example
     * ```tsx
     * <Box borderOrange200></Box>
     * <Box borderOrange200--T20></Box> // transparentize color
     * <Box borderOrange200--O20></Box> // opacify color
     * <Box borderOrange200--L20></Box> // lighten color
     * <Box borderOrange200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderOrange200?: ResponsiveBoolean
    /**
     * Set border color to orange300
     * ```css
     * { border-color: #ffc078; }
     * ```
     * @example
     * ```tsx
     * <Box borderOrange300></Box>
     * <Box borderOrange300--T20></Box> // transparentize color
     * <Box borderOrange300--O20></Box> // opacify color
     * <Box borderOrange300--L20></Box> // lighten color
     * <Box borderOrange300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderOrange300?: ResponsiveBoolean
    /**
     * Set border color to orange400
     * ```css
     * { border-color: #ffa94d; }
     * ```
     * @example
     * ```tsx
     * <Box borderOrange400></Box>
     * <Box borderOrange400--T20></Box> // transparentize color
     * <Box borderOrange400--O20></Box> // opacify color
     * <Box borderOrange400--L20></Box> // lighten color
     * <Box borderOrange400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderOrange400?: ResponsiveBoolean
    /**
     * Set border color to orange500
     * ```css
     * { border-color: #ff922b; }
     * ```
     * @example
     * ```tsx
     * <Box borderOrange500></Box>
     * <Box borderOrange500--T20></Box> // transparentize color
     * <Box borderOrange500--O20></Box> // opacify color
     * <Box borderOrange500--L20></Box> // lighten color
     * <Box borderOrange500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderOrange500?: ResponsiveBoolean
    /**
     * Set border color to orange600
     * ```css
     * { border-color: #fd7e14; }
     * ```
     * @example
     * ```tsx
     * <Box borderOrange600></Box>
     * <Box borderOrange600--T20></Box> // transparentize color
     * <Box borderOrange600--O20></Box> // opacify color
     * <Box borderOrange600--L20></Box> // lighten color
     * <Box borderOrange600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderOrange600?: ResponsiveBoolean
    /**
     * Set border color to orange700
     * ```css
     * { border-color: #f76707; }
     * ```
     * @example
     * ```tsx
     * <Box borderOrange700></Box>
     * <Box borderOrange700--T20></Box> // transparentize color
     * <Box borderOrange700--O20></Box> // opacify color
     * <Box borderOrange700--L20></Box> // lighten color
     * <Box borderOrange700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderOrange700?: ResponsiveBoolean
    /**
     * Set border color to orange800
     * ```css
     * { border-color: #e8590c; }
     * ```
     * @example
     * ```tsx
     * <Box borderOrange800></Box>
     * <Box borderOrange800--T20></Box> // transparentize color
     * <Box borderOrange800--O20></Box> // opacify color
     * <Box borderOrange800--L20></Box> // lighten color
     * <Box borderOrange800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderOrange800?: ResponsiveBoolean
    /**
     * Set border color to orange900
     * ```css
     * { border-color: #d9480f; }
     * ```
     * @example
     * ```tsx
     * <Box borderOrange900></Box>
     * <Box borderOrange900--T20></Box> // transparentize color
     * <Box borderOrange900--O20></Box> // opacify color
     * <Box borderOrange900--L20></Box> // lighten color
     * <Box borderOrange900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderOrange900?: ResponsiveBoolean
    /**
     * Set border color to red50
     * ```css
     * { border-color: #fff5f5; }
     * ```
     * @example
     * ```tsx
     * <Box borderRed50></Box>
     * <Box borderRed50--T20></Box> // transparentize color
     * <Box borderRed50--O20></Box> // opacify color
     * <Box borderRed50--L20></Box> // lighten color
     * <Box borderRed50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRed50?: ResponsiveBoolean
    /**
     * Set border color to red100
     * ```css
     * { border-color: #ffe3e3; }
     * ```
     * @example
     * ```tsx
     * <Box borderRed100></Box>
     * <Box borderRed100--T20></Box> // transparentize color
     * <Box borderRed100--O20></Box> // opacify color
     * <Box borderRed100--L20></Box> // lighten color
     * <Box borderRed100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRed100?: ResponsiveBoolean
    /**
     * Set border color to red200
     * ```css
     * { border-color: #ffc9c9; }
     * ```
     * @example
     * ```tsx
     * <Box borderRed200></Box>
     * <Box borderRed200--T20></Box> // transparentize color
     * <Box borderRed200--O20></Box> // opacify color
     * <Box borderRed200--L20></Box> // lighten color
     * <Box borderRed200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRed200?: ResponsiveBoolean
    /**
     * Set border color to red300
     * ```css
     * { border-color: #ffa8a8; }
     * ```
     * @example
     * ```tsx
     * <Box borderRed300></Box>
     * <Box borderRed300--T20></Box> // transparentize color
     * <Box borderRed300--O20></Box> // opacify color
     * <Box borderRed300--L20></Box> // lighten color
     * <Box borderRed300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRed300?: ResponsiveBoolean
    /**
     * Set border color to red400
     * ```css
     * { border-color: #ff8787; }
     * ```
     * @example
     * ```tsx
     * <Box borderRed400></Box>
     * <Box borderRed400--T20></Box> // transparentize color
     * <Box borderRed400--O20></Box> // opacify color
     * <Box borderRed400--L20></Box> // lighten color
     * <Box borderRed400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRed400?: ResponsiveBoolean
    /**
     * Set border color to red500
     * ```css
     * { border-color: #ff6b6b; }
     * ```
     * @example
     * ```tsx
     * <Box borderRed500></Box>
     * <Box borderRed500--T20></Box> // transparentize color
     * <Box borderRed500--O20></Box> // opacify color
     * <Box borderRed500--L20></Box> // lighten color
     * <Box borderRed500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRed500?: ResponsiveBoolean
    /**
     * Set border color to red600
     * ```css
     * { border-color: #fa5252; }
     * ```
     * @example
     * ```tsx
     * <Box borderRed600></Box>
     * <Box borderRed600--T20></Box> // transparentize color
     * <Box borderRed600--O20></Box> // opacify color
     * <Box borderRed600--L20></Box> // lighten color
     * <Box borderRed600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRed600?: ResponsiveBoolean
    /**
     * Set border color to red700
     * ```css
     * { border-color: #f03e3e; }
     * ```
     * @example
     * ```tsx
     * <Box borderRed700></Box>
     * <Box borderRed700--T20></Box> // transparentize color
     * <Box borderRed700--O20></Box> // opacify color
     * <Box borderRed700--L20></Box> // lighten color
     * <Box borderRed700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRed700?: ResponsiveBoolean
    /**
     * Set border color to red800
     * ```css
     * { border-color: #e03131; }
     * ```
     * @example
     * ```tsx
     * <Box borderRed800></Box>
     * <Box borderRed800--T20></Box> // transparentize color
     * <Box borderRed800--O20></Box> // opacify color
     * <Box borderRed800--L20></Box> // lighten color
     * <Box borderRed800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRed800?: ResponsiveBoolean
    /**
     * Set border color to red900
     * ```css
     * { border-color: #c92a2a; }
     * ```
     * @example
     * ```tsx
     * <Box borderRed900></Box>
     * <Box borderRed900--T20></Box> // transparentize color
     * <Box borderRed900--O20></Box> // opacify color
     * <Box borderRed900--L20></Box> // lighten color
     * <Box borderRed900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRed900?: ResponsiveBoolean
    /**
     * Set border color to trueGray50
     * ```css
     * { border-color: #fafafa; }
     * ```
     * @example
     * ```tsx
     * <Box borderTrueGray50></Box>
     * <Box borderTrueGray50--T20></Box> // transparentize color
     * <Box borderTrueGray50--O20></Box> // opacify color
     * <Box borderTrueGray50--L20></Box> // lighten color
     * <Box borderTrueGray50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTrueGray50?: ResponsiveBoolean
    /**
     * Set border color to trueGray100
     * ```css
     * { border-color: #f5f5f5; }
     * ```
     * @example
     * ```tsx
     * <Box borderTrueGray100></Box>
     * <Box borderTrueGray100--T20></Box> // transparentize color
     * <Box borderTrueGray100--O20></Box> // opacify color
     * <Box borderTrueGray100--L20></Box> // lighten color
     * <Box borderTrueGray100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTrueGray100?: ResponsiveBoolean
    /**
     * Set border color to trueGray200
     * ```css
     * { border-color: #e5e5e5; }
     * ```
     * @example
     * ```tsx
     * <Box borderTrueGray200></Box>
     * <Box borderTrueGray200--T20></Box> // transparentize color
     * <Box borderTrueGray200--O20></Box> // opacify color
     * <Box borderTrueGray200--L20></Box> // lighten color
     * <Box borderTrueGray200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTrueGray200?: ResponsiveBoolean
    /**
     * Set border color to trueGray300
     * ```css
     * { border-color: #d4d4d4; }
     * ```
     * @example
     * ```tsx
     * <Box borderTrueGray300></Box>
     * <Box borderTrueGray300--T20></Box> // transparentize color
     * <Box borderTrueGray300--O20></Box> // opacify color
     * <Box borderTrueGray300--L20></Box> // lighten color
     * <Box borderTrueGray300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTrueGray300?: ResponsiveBoolean
    /**
     * Set border color to trueGray400
     * ```css
     * { border-color: #a3a3a3; }
     * ```
     * @example
     * ```tsx
     * <Box borderTrueGray400></Box>
     * <Box borderTrueGray400--T20></Box> // transparentize color
     * <Box borderTrueGray400--O20></Box> // opacify color
     * <Box borderTrueGray400--L20></Box> // lighten color
     * <Box borderTrueGray400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTrueGray400?: ResponsiveBoolean
    /**
     * Set border color to trueGray500
     * ```css
     * { border-color: #737373; }
     * ```
     * @example
     * ```tsx
     * <Box borderTrueGray500></Box>
     * <Box borderTrueGray500--T20></Box> // transparentize color
     * <Box borderTrueGray500--O20></Box> // opacify color
     * <Box borderTrueGray500--L20></Box> // lighten color
     * <Box borderTrueGray500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTrueGray500?: ResponsiveBoolean
    /**
     * Set border color to trueGray600
     * ```css
     * { border-color: #525252; }
     * ```
     * @example
     * ```tsx
     * <Box borderTrueGray600></Box>
     * <Box borderTrueGray600--T20></Box> // transparentize color
     * <Box borderTrueGray600--O20></Box> // opacify color
     * <Box borderTrueGray600--L20></Box> // lighten color
     * <Box borderTrueGray600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTrueGray600?: ResponsiveBoolean
    /**
     * Set border color to trueGray700
     * ```css
     * { border-color: #404040; }
     * ```
     * @example
     * ```tsx
     * <Box borderTrueGray700></Box>
     * <Box borderTrueGray700--T20></Box> // transparentize color
     * <Box borderTrueGray700--O20></Box> // opacify color
     * <Box borderTrueGray700--L20></Box> // lighten color
     * <Box borderTrueGray700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTrueGray700?: ResponsiveBoolean
    /**
     * Set border color to trueGray800
     * ```css
     * { border-color: #262626; }
     * ```
     * @example
     * ```tsx
     * <Box borderTrueGray800></Box>
     * <Box borderTrueGray800--T20></Box> // transparentize color
     * <Box borderTrueGray800--O20></Box> // opacify color
     * <Box borderTrueGray800--L20></Box> // lighten color
     * <Box borderTrueGray800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTrueGray800?: ResponsiveBoolean
    /**
     * Set border color to trueGray900
     * ```css
     * { border-color: #171717; }
     * ```
     * @example
     * ```tsx
     * <Box borderTrueGray900></Box>
     * <Box borderTrueGray900--T20></Box> // transparentize color
     * <Box borderTrueGray900--O20></Box> // opacify color
     * <Box borderTrueGray900--L20></Box> // lighten color
     * <Box borderTrueGray900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTrueGray900?: ResponsiveBoolean
    /**
     * Set border color to gray50
     * ```css
     * { border-color: #fafafa; }
     * ```
     * @example
     * ```tsx
     * <Box borderGray50></Box>
     * <Box borderGray50--T20></Box> // transparentize color
     * <Box borderGray50--O20></Box> // opacify color
     * <Box borderGray50--L20></Box> // lighten color
     * <Box borderGray50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderGray50?: ResponsiveBoolean
    /**
     * Set border color to gray100
     * ```css
     * { border-color: #f4f4f5; }
     * ```
     * @example
     * ```tsx
     * <Box borderGray100></Box>
     * <Box borderGray100--T20></Box> // transparentize color
     * <Box borderGray100--O20></Box> // opacify color
     * <Box borderGray100--L20></Box> // lighten color
     * <Box borderGray100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderGray100?: ResponsiveBoolean
    /**
     * Set border color to gray200
     * ```css
     * { border-color: #e4e4e7; }
     * ```
     * @example
     * ```tsx
     * <Box borderGray200></Box>
     * <Box borderGray200--T20></Box> // transparentize color
     * <Box borderGray200--O20></Box> // opacify color
     * <Box borderGray200--L20></Box> // lighten color
     * <Box borderGray200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderGray200?: ResponsiveBoolean
    /**
     * Set border color to gray300
     * ```css
     * { border-color: #d4d4d8; }
     * ```
     * @example
     * ```tsx
     * <Box borderGray300></Box>
     * <Box borderGray300--T20></Box> // transparentize color
     * <Box borderGray300--O20></Box> // opacify color
     * <Box borderGray300--L20></Box> // lighten color
     * <Box borderGray300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderGray300?: ResponsiveBoolean
    /**
     * Set border color to gray400
     * ```css
     * { border-color: #a1a1aa; }
     * ```
     * @example
     * ```tsx
     * <Box borderGray400></Box>
     * <Box borderGray400--T20></Box> // transparentize color
     * <Box borderGray400--O20></Box> // opacify color
     * <Box borderGray400--L20></Box> // lighten color
     * <Box borderGray400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderGray400?: ResponsiveBoolean
    /**
     * Set border color to gray500
     * ```css
     * { border-color: #71717a; }
     * ```
     * @example
     * ```tsx
     * <Box borderGray500></Box>
     * <Box borderGray500--T20></Box> // transparentize color
     * <Box borderGray500--O20></Box> // opacify color
     * <Box borderGray500--L20></Box> // lighten color
     * <Box borderGray500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderGray500?: ResponsiveBoolean
    /**
     * Set border color to gray600
     * ```css
     * { border-color: #52525b; }
     * ```
     * @example
     * ```tsx
     * <Box borderGray600></Box>
     * <Box borderGray600--T20></Box> // transparentize color
     * <Box borderGray600--O20></Box> // opacify color
     * <Box borderGray600--L20></Box> // lighten color
     * <Box borderGray600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderGray600?: ResponsiveBoolean
    /**
     * Set border color to gray700
     * ```css
     * { border-color: #3f3f46; }
     * ```
     * @example
     * ```tsx
     * <Box borderGray700></Box>
     * <Box borderGray700--T20></Box> // transparentize color
     * <Box borderGray700--O20></Box> // opacify color
     * <Box borderGray700--L20></Box> // lighten color
     * <Box borderGray700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderGray700?: ResponsiveBoolean
    /**
     * Set border color to gray800
     * ```css
     * { border-color: #27272a; }
     * ```
     * @example
     * ```tsx
     * <Box borderGray800></Box>
     * <Box borderGray800--T20></Box> // transparentize color
     * <Box borderGray800--O20></Box> // opacify color
     * <Box borderGray800--L20></Box> // lighten color
     * <Box borderGray800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderGray800?: ResponsiveBoolean
    /**
     * Set border color to gray900
     * ```css
     * { border-color: #18181b; }
     * ```
     * @example
     * ```tsx
     * <Box borderGray900></Box>
     * <Box borderGray900--T20></Box> // transparentize color
     * <Box borderGray900--O20></Box> // opacify color
     * <Box borderGray900--L20></Box> // lighten color
     * <Box borderGray900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderGray900?: ResponsiveBoolean
  }
}
