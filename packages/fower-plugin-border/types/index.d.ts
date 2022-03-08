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
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: transparent; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopTransparent></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopTransparent?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: transparent; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightTransparent></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightTransparent?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: transparent; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomTransparent></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomTransparent?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: transparent; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftTransparent></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftTransparent?: ResponsiveBoolean
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
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #ffffff; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopWhite></Box>
     * <Box borderTopWhite--T20></Box> // transparentize color
     * <Box borderTopWhite--O20></Box> // opacify color
     * <Box borderTopWhite--L20></Box> // lighten color
     * <Box borderTopWhite--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopWhite?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #ffffff; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightWhite></Box>
     * <Box borderRightWhite--T20></Box> // transparentize color
     * <Box borderRightWhite--O20></Box> // opacify color
     * <Box borderRightWhite--L20></Box> // lighten color
     * <Box borderRightWhite--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightWhite?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #ffffff; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomWhite></Box>
     * <Box borderBottomWhite--T20></Box> // transparentize color
     * <Box borderBottomWhite--O20></Box> // opacify color
     * <Box borderBottomWhite--L20></Box> // lighten color
     * <Box borderBottomWhite--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomWhite?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #ffffff; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftWhite></Box>
     * <Box borderLeftWhite--T20></Box> // transparentize color
     * <Box borderLeftWhite--O20></Box> // opacify color
     * <Box borderLeftWhite--L20></Box> // lighten color
     * <Box borderLeftWhite--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftWhite?: ResponsiveBoolean
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
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #000; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopBlack></Box>
     * <Box borderTopBlack--T20></Box> // transparentize color
     * <Box borderTopBlack--O20></Box> // opacify color
     * <Box borderTopBlack--L20></Box> // lighten color
     * <Box borderTopBlack--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopBlack?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #000; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightBlack></Box>
     * <Box borderRightBlack--T20></Box> // transparentize color
     * <Box borderRightBlack--O20></Box> // opacify color
     * <Box borderRightBlack--L20></Box> // lighten color
     * <Box borderRightBlack--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightBlack?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #000; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomBlack></Box>
     * <Box borderBottomBlack--T20></Box> // transparentize color
     * <Box borderBottomBlack--O20></Box> // opacify color
     * <Box borderBottomBlack--L20></Box> // lighten color
     * <Box borderBottomBlack--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomBlack?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #000; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftBlack></Box>
     * <Box borderLeftBlack--T20></Box> // transparentize color
     * <Box borderLeftBlack--O20></Box> // opacify color
     * <Box borderLeftBlack--L20></Box> // lighten color
     * <Box borderLeftBlack--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftBlack?: ResponsiveBoolean
    /**
     * Set border color to brand50
     * ```css
     * { border-color: #eff6ff; }
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
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #eff6ff; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopBrand50></Box>
     * <Box borderTopBrand50--T20></Box> // transparentize color
     * <Box borderTopBrand50--O20></Box> // opacify color
     * <Box borderTopBrand50--L20></Box> // lighten color
     * <Box borderTopBrand50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopBrand50?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #eff6ff; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightBrand50></Box>
     * <Box borderRightBrand50--T20></Box> // transparentize color
     * <Box borderRightBrand50--O20></Box> // opacify color
     * <Box borderRightBrand50--L20></Box> // lighten color
     * <Box borderRightBrand50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightBrand50?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #eff6ff; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomBrand50></Box>
     * <Box borderBottomBrand50--T20></Box> // transparentize color
     * <Box borderBottomBrand50--O20></Box> // opacify color
     * <Box borderBottomBrand50--L20></Box> // lighten color
     * <Box borderBottomBrand50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomBrand50?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #eff6ff; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftBrand50></Box>
     * <Box borderLeftBrand50--T20></Box> // transparentize color
     * <Box borderLeftBrand50--O20></Box> // opacify color
     * <Box borderLeftBrand50--L20></Box> // lighten color
     * <Box borderLeftBrand50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftBrand50?: ResponsiveBoolean
    /**
     * Set border color to brand100
     * ```css
     * { border-color: #dbeafe; }
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
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #dbeafe; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopBrand100></Box>
     * <Box borderTopBrand100--T20></Box> // transparentize color
     * <Box borderTopBrand100--O20></Box> // opacify color
     * <Box borderTopBrand100--L20></Box> // lighten color
     * <Box borderTopBrand100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopBrand100?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #dbeafe; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightBrand100></Box>
     * <Box borderRightBrand100--T20></Box> // transparentize color
     * <Box borderRightBrand100--O20></Box> // opacify color
     * <Box borderRightBrand100--L20></Box> // lighten color
     * <Box borderRightBrand100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightBrand100?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #dbeafe; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomBrand100></Box>
     * <Box borderBottomBrand100--T20></Box> // transparentize color
     * <Box borderBottomBrand100--O20></Box> // opacify color
     * <Box borderBottomBrand100--L20></Box> // lighten color
     * <Box borderBottomBrand100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomBrand100?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #dbeafe; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftBrand100></Box>
     * <Box borderLeftBrand100--T20></Box> // transparentize color
     * <Box borderLeftBrand100--O20></Box> // opacify color
     * <Box borderLeftBrand100--L20></Box> // lighten color
     * <Box borderLeftBrand100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftBrand100?: ResponsiveBoolean
    /**
     * Set border color to brand200
     * ```css
     * { border-color: #bfdbfe; }
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
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #bfdbfe; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopBrand200></Box>
     * <Box borderTopBrand200--T20></Box> // transparentize color
     * <Box borderTopBrand200--O20></Box> // opacify color
     * <Box borderTopBrand200--L20></Box> // lighten color
     * <Box borderTopBrand200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopBrand200?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #bfdbfe; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightBrand200></Box>
     * <Box borderRightBrand200--T20></Box> // transparentize color
     * <Box borderRightBrand200--O20></Box> // opacify color
     * <Box borderRightBrand200--L20></Box> // lighten color
     * <Box borderRightBrand200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightBrand200?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #bfdbfe; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomBrand200></Box>
     * <Box borderBottomBrand200--T20></Box> // transparentize color
     * <Box borderBottomBrand200--O20></Box> // opacify color
     * <Box borderBottomBrand200--L20></Box> // lighten color
     * <Box borderBottomBrand200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomBrand200?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #bfdbfe; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftBrand200></Box>
     * <Box borderLeftBrand200--T20></Box> // transparentize color
     * <Box borderLeftBrand200--O20></Box> // opacify color
     * <Box borderLeftBrand200--L20></Box> // lighten color
     * <Box borderLeftBrand200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftBrand200?: ResponsiveBoolean
    /**
     * Set border color to brand300
     * ```css
     * { border-color: #93c5fd; }
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
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #93c5fd; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopBrand300></Box>
     * <Box borderTopBrand300--T20></Box> // transparentize color
     * <Box borderTopBrand300--O20></Box> // opacify color
     * <Box borderTopBrand300--L20></Box> // lighten color
     * <Box borderTopBrand300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopBrand300?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #93c5fd; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightBrand300></Box>
     * <Box borderRightBrand300--T20></Box> // transparentize color
     * <Box borderRightBrand300--O20></Box> // opacify color
     * <Box borderRightBrand300--L20></Box> // lighten color
     * <Box borderRightBrand300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightBrand300?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #93c5fd; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomBrand300></Box>
     * <Box borderBottomBrand300--T20></Box> // transparentize color
     * <Box borderBottomBrand300--O20></Box> // opacify color
     * <Box borderBottomBrand300--L20></Box> // lighten color
     * <Box borderBottomBrand300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomBrand300?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #93c5fd; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftBrand300></Box>
     * <Box borderLeftBrand300--T20></Box> // transparentize color
     * <Box borderLeftBrand300--O20></Box> // opacify color
     * <Box borderLeftBrand300--L20></Box> // lighten color
     * <Box borderLeftBrand300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftBrand300?: ResponsiveBoolean
    /**
     * Set border color to brand400
     * ```css
     * { border-color: #60a5fa; }
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
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #60a5fa; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopBrand400></Box>
     * <Box borderTopBrand400--T20></Box> // transparentize color
     * <Box borderTopBrand400--O20></Box> // opacify color
     * <Box borderTopBrand400--L20></Box> // lighten color
     * <Box borderTopBrand400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopBrand400?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #60a5fa; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightBrand400></Box>
     * <Box borderRightBrand400--T20></Box> // transparentize color
     * <Box borderRightBrand400--O20></Box> // opacify color
     * <Box borderRightBrand400--L20></Box> // lighten color
     * <Box borderRightBrand400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightBrand400?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #60a5fa; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomBrand400></Box>
     * <Box borderBottomBrand400--T20></Box> // transparentize color
     * <Box borderBottomBrand400--O20></Box> // opacify color
     * <Box borderBottomBrand400--L20></Box> // lighten color
     * <Box borderBottomBrand400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomBrand400?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #60a5fa; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftBrand400></Box>
     * <Box borderLeftBrand400--T20></Box> // transparentize color
     * <Box borderLeftBrand400--O20></Box> // opacify color
     * <Box borderLeftBrand400--L20></Box> // lighten color
     * <Box borderLeftBrand400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftBrand400?: ResponsiveBoolean
    /**
     * Set border color to brand500
     * ```css
     * { border-color: #3b82f6; }
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
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #3b82f6; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopBrand500></Box>
     * <Box borderTopBrand500--T20></Box> // transparentize color
     * <Box borderTopBrand500--O20></Box> // opacify color
     * <Box borderTopBrand500--L20></Box> // lighten color
     * <Box borderTopBrand500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopBrand500?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #3b82f6; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightBrand500></Box>
     * <Box borderRightBrand500--T20></Box> // transparentize color
     * <Box borderRightBrand500--O20></Box> // opacify color
     * <Box borderRightBrand500--L20></Box> // lighten color
     * <Box borderRightBrand500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightBrand500?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #3b82f6; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomBrand500></Box>
     * <Box borderBottomBrand500--T20></Box> // transparentize color
     * <Box borderBottomBrand500--O20></Box> // opacify color
     * <Box borderBottomBrand500--L20></Box> // lighten color
     * <Box borderBottomBrand500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomBrand500?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #3b82f6; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftBrand500></Box>
     * <Box borderLeftBrand500--T20></Box> // transparentize color
     * <Box borderLeftBrand500--O20></Box> // opacify color
     * <Box borderLeftBrand500--L20></Box> // lighten color
     * <Box borderLeftBrand500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftBrand500?: ResponsiveBoolean
    /**
     * Set border color to brand600
     * ```css
     * { border-color: #2563eb; }
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
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #2563eb; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopBrand600></Box>
     * <Box borderTopBrand600--T20></Box> // transparentize color
     * <Box borderTopBrand600--O20></Box> // opacify color
     * <Box borderTopBrand600--L20></Box> // lighten color
     * <Box borderTopBrand600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopBrand600?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #2563eb; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightBrand600></Box>
     * <Box borderRightBrand600--T20></Box> // transparentize color
     * <Box borderRightBrand600--O20></Box> // opacify color
     * <Box borderRightBrand600--L20></Box> // lighten color
     * <Box borderRightBrand600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightBrand600?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #2563eb; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomBrand600></Box>
     * <Box borderBottomBrand600--T20></Box> // transparentize color
     * <Box borderBottomBrand600--O20></Box> // opacify color
     * <Box borderBottomBrand600--L20></Box> // lighten color
     * <Box borderBottomBrand600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomBrand600?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #2563eb; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftBrand600></Box>
     * <Box borderLeftBrand600--T20></Box> // transparentize color
     * <Box borderLeftBrand600--O20></Box> // opacify color
     * <Box borderLeftBrand600--L20></Box> // lighten color
     * <Box borderLeftBrand600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftBrand600?: ResponsiveBoolean
    /**
     * Set border color to brand700
     * ```css
     * { border-color: #1d4ed8; }
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
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #1d4ed8; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopBrand700></Box>
     * <Box borderTopBrand700--T20></Box> // transparentize color
     * <Box borderTopBrand700--O20></Box> // opacify color
     * <Box borderTopBrand700--L20></Box> // lighten color
     * <Box borderTopBrand700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopBrand700?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #1d4ed8; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightBrand700></Box>
     * <Box borderRightBrand700--T20></Box> // transparentize color
     * <Box borderRightBrand700--O20></Box> // opacify color
     * <Box borderRightBrand700--L20></Box> // lighten color
     * <Box borderRightBrand700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightBrand700?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #1d4ed8; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomBrand700></Box>
     * <Box borderBottomBrand700--T20></Box> // transparentize color
     * <Box borderBottomBrand700--O20></Box> // opacify color
     * <Box borderBottomBrand700--L20></Box> // lighten color
     * <Box borderBottomBrand700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomBrand700?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #1d4ed8; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftBrand700></Box>
     * <Box borderLeftBrand700--T20></Box> // transparentize color
     * <Box borderLeftBrand700--O20></Box> // opacify color
     * <Box borderLeftBrand700--L20></Box> // lighten color
     * <Box borderLeftBrand700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftBrand700?: ResponsiveBoolean
    /**
     * Set border color to brand800
     * ```css
     * { border-color: #1e40af; }
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
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #1e40af; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopBrand800></Box>
     * <Box borderTopBrand800--T20></Box> // transparentize color
     * <Box borderTopBrand800--O20></Box> // opacify color
     * <Box borderTopBrand800--L20></Box> // lighten color
     * <Box borderTopBrand800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopBrand800?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #1e40af; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightBrand800></Box>
     * <Box borderRightBrand800--T20></Box> // transparentize color
     * <Box borderRightBrand800--O20></Box> // opacify color
     * <Box borderRightBrand800--L20></Box> // lighten color
     * <Box borderRightBrand800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightBrand800?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #1e40af; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomBrand800></Box>
     * <Box borderBottomBrand800--T20></Box> // transparentize color
     * <Box borderBottomBrand800--O20></Box> // opacify color
     * <Box borderBottomBrand800--L20></Box> // lighten color
     * <Box borderBottomBrand800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomBrand800?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #1e40af; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftBrand800></Box>
     * <Box borderLeftBrand800--T20></Box> // transparentize color
     * <Box borderLeftBrand800--O20></Box> // opacify color
     * <Box borderLeftBrand800--L20></Box> // lighten color
     * <Box borderLeftBrand800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftBrand800?: ResponsiveBoolean
    /**
     * Set border color to brand900
     * ```css
     * { border-color: #1e3a8a; }
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
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #1e3a8a; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopBrand900></Box>
     * <Box borderTopBrand900--T20></Box> // transparentize color
     * <Box borderTopBrand900--O20></Box> // opacify color
     * <Box borderTopBrand900--L20></Box> // lighten color
     * <Box borderTopBrand900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopBrand900?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #1e3a8a; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightBrand900></Box>
     * <Box borderRightBrand900--T20></Box> // transparentize color
     * <Box borderRightBrand900--O20></Box> // opacify color
     * <Box borderRightBrand900--L20></Box> // lighten color
     * <Box borderRightBrand900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightBrand900?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #1e3a8a; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomBrand900></Box>
     * <Box borderBottomBrand900--T20></Box> // transparentize color
     * <Box borderBottomBrand900--O20></Box> // opacify color
     * <Box borderBottomBrand900--L20></Box> // lighten color
     * <Box borderBottomBrand900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomBrand900?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #1e3a8a; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftBrand900></Box>
     * <Box borderLeftBrand900--T20></Box> // transparentize color
     * <Box borderLeftBrand900--O20></Box> // opacify color
     * <Box borderLeftBrand900--L20></Box> // lighten color
     * <Box borderLeftBrand900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftBrand900?: ResponsiveBoolean
    /**
     * Set border color to rose50
     * ```css
     * { border-color: #fff1f2; }
     * ```
     * @example
     * ```tsx
     * <Box borderRose50></Box>
     * <Box borderRose50--T20></Box> // transparentize color
     * <Box borderRose50--O20></Box> // opacify color
     * <Box borderRose50--L20></Box> // lighten color
     * <Box borderRose50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRose50?: ResponsiveBoolean
    /**
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #fff1f2; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopRose50></Box>
     * <Box borderTopRose50--T20></Box> // transparentize color
     * <Box borderTopRose50--O20></Box> // opacify color
     * <Box borderTopRose50--L20></Box> // lighten color
     * <Box borderTopRose50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopRose50?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #fff1f2; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightRose50></Box>
     * <Box borderRightRose50--T20></Box> // transparentize color
     * <Box borderRightRose50--O20></Box> // opacify color
     * <Box borderRightRose50--L20></Box> // lighten color
     * <Box borderRightRose50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightRose50?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #fff1f2; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomRose50></Box>
     * <Box borderBottomRose50--T20></Box> // transparentize color
     * <Box borderBottomRose50--O20></Box> // opacify color
     * <Box borderBottomRose50--L20></Box> // lighten color
     * <Box borderBottomRose50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomRose50?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #fff1f2; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftRose50></Box>
     * <Box borderLeftRose50--T20></Box> // transparentize color
     * <Box borderLeftRose50--O20></Box> // opacify color
     * <Box borderLeftRose50--L20></Box> // lighten color
     * <Box borderLeftRose50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftRose50?: ResponsiveBoolean
    /**
     * Set border color to rose100
     * ```css
     * { border-color: #ffe4e6; }
     * ```
     * @example
     * ```tsx
     * <Box borderRose100></Box>
     * <Box borderRose100--T20></Box> // transparentize color
     * <Box borderRose100--O20></Box> // opacify color
     * <Box borderRose100--L20></Box> // lighten color
     * <Box borderRose100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRose100?: ResponsiveBoolean
    /**
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #ffe4e6; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopRose100></Box>
     * <Box borderTopRose100--T20></Box> // transparentize color
     * <Box borderTopRose100--O20></Box> // opacify color
     * <Box borderTopRose100--L20></Box> // lighten color
     * <Box borderTopRose100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopRose100?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #ffe4e6; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightRose100></Box>
     * <Box borderRightRose100--T20></Box> // transparentize color
     * <Box borderRightRose100--O20></Box> // opacify color
     * <Box borderRightRose100--L20></Box> // lighten color
     * <Box borderRightRose100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightRose100?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #ffe4e6; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomRose100></Box>
     * <Box borderBottomRose100--T20></Box> // transparentize color
     * <Box borderBottomRose100--O20></Box> // opacify color
     * <Box borderBottomRose100--L20></Box> // lighten color
     * <Box borderBottomRose100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomRose100?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #ffe4e6; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftRose100></Box>
     * <Box borderLeftRose100--T20></Box> // transparentize color
     * <Box borderLeftRose100--O20></Box> // opacify color
     * <Box borderLeftRose100--L20></Box> // lighten color
     * <Box borderLeftRose100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftRose100?: ResponsiveBoolean
    /**
     * Set border color to rose200
     * ```css
     * { border-color: #fecdd3; }
     * ```
     * @example
     * ```tsx
     * <Box borderRose200></Box>
     * <Box borderRose200--T20></Box> // transparentize color
     * <Box borderRose200--O20></Box> // opacify color
     * <Box borderRose200--L20></Box> // lighten color
     * <Box borderRose200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRose200?: ResponsiveBoolean
    /**
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #fecdd3; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopRose200></Box>
     * <Box borderTopRose200--T20></Box> // transparentize color
     * <Box borderTopRose200--O20></Box> // opacify color
     * <Box borderTopRose200--L20></Box> // lighten color
     * <Box borderTopRose200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopRose200?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #fecdd3; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightRose200></Box>
     * <Box borderRightRose200--T20></Box> // transparentize color
     * <Box borderRightRose200--O20></Box> // opacify color
     * <Box borderRightRose200--L20></Box> // lighten color
     * <Box borderRightRose200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightRose200?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #fecdd3; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomRose200></Box>
     * <Box borderBottomRose200--T20></Box> // transparentize color
     * <Box borderBottomRose200--O20></Box> // opacify color
     * <Box borderBottomRose200--L20></Box> // lighten color
     * <Box borderBottomRose200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomRose200?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #fecdd3; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftRose200></Box>
     * <Box borderLeftRose200--T20></Box> // transparentize color
     * <Box borderLeftRose200--O20></Box> // opacify color
     * <Box borderLeftRose200--L20></Box> // lighten color
     * <Box borderLeftRose200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftRose200?: ResponsiveBoolean
    /**
     * Set border color to rose300
     * ```css
     * { border-color: #fda4af; }
     * ```
     * @example
     * ```tsx
     * <Box borderRose300></Box>
     * <Box borderRose300--T20></Box> // transparentize color
     * <Box borderRose300--O20></Box> // opacify color
     * <Box borderRose300--L20></Box> // lighten color
     * <Box borderRose300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRose300?: ResponsiveBoolean
    /**
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #fda4af; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopRose300></Box>
     * <Box borderTopRose300--T20></Box> // transparentize color
     * <Box borderTopRose300--O20></Box> // opacify color
     * <Box borderTopRose300--L20></Box> // lighten color
     * <Box borderTopRose300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopRose300?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #fda4af; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightRose300></Box>
     * <Box borderRightRose300--T20></Box> // transparentize color
     * <Box borderRightRose300--O20></Box> // opacify color
     * <Box borderRightRose300--L20></Box> // lighten color
     * <Box borderRightRose300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightRose300?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #fda4af; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomRose300></Box>
     * <Box borderBottomRose300--T20></Box> // transparentize color
     * <Box borderBottomRose300--O20></Box> // opacify color
     * <Box borderBottomRose300--L20></Box> // lighten color
     * <Box borderBottomRose300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomRose300?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #fda4af; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftRose300></Box>
     * <Box borderLeftRose300--T20></Box> // transparentize color
     * <Box borderLeftRose300--O20></Box> // opacify color
     * <Box borderLeftRose300--L20></Box> // lighten color
     * <Box borderLeftRose300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftRose300?: ResponsiveBoolean
    /**
     * Set border color to rose400
     * ```css
     * { border-color: #fb7185; }
     * ```
     * @example
     * ```tsx
     * <Box borderRose400></Box>
     * <Box borderRose400--T20></Box> // transparentize color
     * <Box borderRose400--O20></Box> // opacify color
     * <Box borderRose400--L20></Box> // lighten color
     * <Box borderRose400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRose400?: ResponsiveBoolean
    /**
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #fb7185; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopRose400></Box>
     * <Box borderTopRose400--T20></Box> // transparentize color
     * <Box borderTopRose400--O20></Box> // opacify color
     * <Box borderTopRose400--L20></Box> // lighten color
     * <Box borderTopRose400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopRose400?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #fb7185; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightRose400></Box>
     * <Box borderRightRose400--T20></Box> // transparentize color
     * <Box borderRightRose400--O20></Box> // opacify color
     * <Box borderRightRose400--L20></Box> // lighten color
     * <Box borderRightRose400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightRose400?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #fb7185; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomRose400></Box>
     * <Box borderBottomRose400--T20></Box> // transparentize color
     * <Box borderBottomRose400--O20></Box> // opacify color
     * <Box borderBottomRose400--L20></Box> // lighten color
     * <Box borderBottomRose400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomRose400?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #fb7185; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftRose400></Box>
     * <Box borderLeftRose400--T20></Box> // transparentize color
     * <Box borderLeftRose400--O20></Box> // opacify color
     * <Box borderLeftRose400--L20></Box> // lighten color
     * <Box borderLeftRose400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftRose400?: ResponsiveBoolean
    /**
     * Set border color to rose500
     * ```css
     * { border-color: #f43f5e; }
     * ```
     * @example
     * ```tsx
     * <Box borderRose500></Box>
     * <Box borderRose500--T20></Box> // transparentize color
     * <Box borderRose500--O20></Box> // opacify color
     * <Box borderRose500--L20></Box> // lighten color
     * <Box borderRose500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRose500?: ResponsiveBoolean
    /**
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #f43f5e; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopRose500></Box>
     * <Box borderTopRose500--T20></Box> // transparentize color
     * <Box borderTopRose500--O20></Box> // opacify color
     * <Box borderTopRose500--L20></Box> // lighten color
     * <Box borderTopRose500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopRose500?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #f43f5e; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightRose500></Box>
     * <Box borderRightRose500--T20></Box> // transparentize color
     * <Box borderRightRose500--O20></Box> // opacify color
     * <Box borderRightRose500--L20></Box> // lighten color
     * <Box borderRightRose500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightRose500?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #f43f5e; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomRose500></Box>
     * <Box borderBottomRose500--T20></Box> // transparentize color
     * <Box borderBottomRose500--O20></Box> // opacify color
     * <Box borderBottomRose500--L20></Box> // lighten color
     * <Box borderBottomRose500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomRose500?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #f43f5e; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftRose500></Box>
     * <Box borderLeftRose500--T20></Box> // transparentize color
     * <Box borderLeftRose500--O20></Box> // opacify color
     * <Box borderLeftRose500--L20></Box> // lighten color
     * <Box borderLeftRose500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftRose500?: ResponsiveBoolean
    /**
     * Set border color to rose600
     * ```css
     * { border-color: #e11d48; }
     * ```
     * @example
     * ```tsx
     * <Box borderRose600></Box>
     * <Box borderRose600--T20></Box> // transparentize color
     * <Box borderRose600--O20></Box> // opacify color
     * <Box borderRose600--L20></Box> // lighten color
     * <Box borderRose600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRose600?: ResponsiveBoolean
    /**
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #e11d48; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopRose600></Box>
     * <Box borderTopRose600--T20></Box> // transparentize color
     * <Box borderTopRose600--O20></Box> // opacify color
     * <Box borderTopRose600--L20></Box> // lighten color
     * <Box borderTopRose600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopRose600?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #e11d48; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightRose600></Box>
     * <Box borderRightRose600--T20></Box> // transparentize color
     * <Box borderRightRose600--O20></Box> // opacify color
     * <Box borderRightRose600--L20></Box> // lighten color
     * <Box borderRightRose600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightRose600?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #e11d48; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomRose600></Box>
     * <Box borderBottomRose600--T20></Box> // transparentize color
     * <Box borderBottomRose600--O20></Box> // opacify color
     * <Box borderBottomRose600--L20></Box> // lighten color
     * <Box borderBottomRose600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomRose600?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #e11d48; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftRose600></Box>
     * <Box borderLeftRose600--T20></Box> // transparentize color
     * <Box borderLeftRose600--O20></Box> // opacify color
     * <Box borderLeftRose600--L20></Box> // lighten color
     * <Box borderLeftRose600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftRose600?: ResponsiveBoolean
    /**
     * Set border color to rose700
     * ```css
     * { border-color: #be123c; }
     * ```
     * @example
     * ```tsx
     * <Box borderRose700></Box>
     * <Box borderRose700--T20></Box> // transparentize color
     * <Box borderRose700--O20></Box> // opacify color
     * <Box borderRose700--L20></Box> // lighten color
     * <Box borderRose700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRose700?: ResponsiveBoolean
    /**
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #be123c; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopRose700></Box>
     * <Box borderTopRose700--T20></Box> // transparentize color
     * <Box borderTopRose700--O20></Box> // opacify color
     * <Box borderTopRose700--L20></Box> // lighten color
     * <Box borderTopRose700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopRose700?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #be123c; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightRose700></Box>
     * <Box borderRightRose700--T20></Box> // transparentize color
     * <Box borderRightRose700--O20></Box> // opacify color
     * <Box borderRightRose700--L20></Box> // lighten color
     * <Box borderRightRose700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightRose700?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #be123c; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomRose700></Box>
     * <Box borderBottomRose700--T20></Box> // transparentize color
     * <Box borderBottomRose700--O20></Box> // opacify color
     * <Box borderBottomRose700--L20></Box> // lighten color
     * <Box borderBottomRose700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomRose700?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #be123c; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftRose700></Box>
     * <Box borderLeftRose700--T20></Box> // transparentize color
     * <Box borderLeftRose700--O20></Box> // opacify color
     * <Box borderLeftRose700--L20></Box> // lighten color
     * <Box borderLeftRose700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftRose700?: ResponsiveBoolean
    /**
     * Set border color to rose800
     * ```css
     * { border-color: #9f1239; }
     * ```
     * @example
     * ```tsx
     * <Box borderRose800></Box>
     * <Box borderRose800--T20></Box> // transparentize color
     * <Box borderRose800--O20></Box> // opacify color
     * <Box borderRose800--L20></Box> // lighten color
     * <Box borderRose800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRose800?: ResponsiveBoolean
    /**
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #9f1239; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopRose800></Box>
     * <Box borderTopRose800--T20></Box> // transparentize color
     * <Box borderTopRose800--O20></Box> // opacify color
     * <Box borderTopRose800--L20></Box> // lighten color
     * <Box borderTopRose800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopRose800?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #9f1239; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightRose800></Box>
     * <Box borderRightRose800--T20></Box> // transparentize color
     * <Box borderRightRose800--O20></Box> // opacify color
     * <Box borderRightRose800--L20></Box> // lighten color
     * <Box borderRightRose800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightRose800?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #9f1239; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomRose800></Box>
     * <Box borderBottomRose800--T20></Box> // transparentize color
     * <Box borderBottomRose800--O20></Box> // opacify color
     * <Box borderBottomRose800--L20></Box> // lighten color
     * <Box borderBottomRose800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomRose800?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #9f1239; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftRose800></Box>
     * <Box borderLeftRose800--T20></Box> // transparentize color
     * <Box borderLeftRose800--O20></Box> // opacify color
     * <Box borderLeftRose800--L20></Box> // lighten color
     * <Box borderLeftRose800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftRose800?: ResponsiveBoolean
    /**
     * Set border color to rose900
     * ```css
     * { border-color: #881337; }
     * ```
     * @example
     * ```tsx
     * <Box borderRose900></Box>
     * <Box borderRose900--T20></Box> // transparentize color
     * <Box borderRose900--O20></Box> // opacify color
     * <Box borderRose900--L20></Box> // lighten color
     * <Box borderRose900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRose900?: ResponsiveBoolean
    /**
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #881337; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopRose900></Box>
     * <Box borderTopRose900--T20></Box> // transparentize color
     * <Box borderTopRose900--O20></Box> // opacify color
     * <Box borderTopRose900--L20></Box> // lighten color
     * <Box borderTopRose900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopRose900?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #881337; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightRose900></Box>
     * <Box borderRightRose900--T20></Box> // transparentize color
     * <Box borderRightRose900--O20></Box> // opacify color
     * <Box borderRightRose900--L20></Box> // lighten color
     * <Box borderRightRose900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightRose900?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #881337; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomRose900></Box>
     * <Box borderBottomRose900--T20></Box> // transparentize color
     * <Box borderBottomRose900--O20></Box> // opacify color
     * <Box borderBottomRose900--L20></Box> // lighten color
     * <Box borderBottomRose900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomRose900?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #881337; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftRose900></Box>
     * <Box borderLeftRose900--T20></Box> // transparentize color
     * <Box borderLeftRose900--O20></Box> // opacify color
     * <Box borderLeftRose900--L20></Box> // lighten color
     * <Box borderLeftRose900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftRose900?: ResponsiveBoolean
    /**
     * Set border color to pink50
     * ```css
     * { border-color: #fdf2f8; }
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
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #fdf2f8; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopPink50></Box>
     * <Box borderTopPink50--T20></Box> // transparentize color
     * <Box borderTopPink50--O20></Box> // opacify color
     * <Box borderTopPink50--L20></Box> // lighten color
     * <Box borderTopPink50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopPink50?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #fdf2f8; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightPink50></Box>
     * <Box borderRightPink50--T20></Box> // transparentize color
     * <Box borderRightPink50--O20></Box> // opacify color
     * <Box borderRightPink50--L20></Box> // lighten color
     * <Box borderRightPink50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightPink50?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #fdf2f8; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomPink50></Box>
     * <Box borderBottomPink50--T20></Box> // transparentize color
     * <Box borderBottomPink50--O20></Box> // opacify color
     * <Box borderBottomPink50--L20></Box> // lighten color
     * <Box borderBottomPink50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomPink50?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #fdf2f8; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftPink50></Box>
     * <Box borderLeftPink50--T20></Box> // transparentize color
     * <Box borderLeftPink50--O20></Box> // opacify color
     * <Box borderLeftPink50--L20></Box> // lighten color
     * <Box borderLeftPink50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftPink50?: ResponsiveBoolean
    /**
     * Set border color to pink100
     * ```css
     * { border-color: #fce7f3; }
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
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #fce7f3; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopPink100></Box>
     * <Box borderTopPink100--T20></Box> // transparentize color
     * <Box borderTopPink100--O20></Box> // opacify color
     * <Box borderTopPink100--L20></Box> // lighten color
     * <Box borderTopPink100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopPink100?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #fce7f3; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightPink100></Box>
     * <Box borderRightPink100--T20></Box> // transparentize color
     * <Box borderRightPink100--O20></Box> // opacify color
     * <Box borderRightPink100--L20></Box> // lighten color
     * <Box borderRightPink100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightPink100?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #fce7f3; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomPink100></Box>
     * <Box borderBottomPink100--T20></Box> // transparentize color
     * <Box borderBottomPink100--O20></Box> // opacify color
     * <Box borderBottomPink100--L20></Box> // lighten color
     * <Box borderBottomPink100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomPink100?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #fce7f3; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftPink100></Box>
     * <Box borderLeftPink100--T20></Box> // transparentize color
     * <Box borderLeftPink100--O20></Box> // opacify color
     * <Box borderLeftPink100--L20></Box> // lighten color
     * <Box borderLeftPink100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftPink100?: ResponsiveBoolean
    /**
     * Set border color to pink200
     * ```css
     * { border-color: #fbcfe8; }
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
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #fbcfe8; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopPink200></Box>
     * <Box borderTopPink200--T20></Box> // transparentize color
     * <Box borderTopPink200--O20></Box> // opacify color
     * <Box borderTopPink200--L20></Box> // lighten color
     * <Box borderTopPink200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopPink200?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #fbcfe8; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightPink200></Box>
     * <Box borderRightPink200--T20></Box> // transparentize color
     * <Box borderRightPink200--O20></Box> // opacify color
     * <Box borderRightPink200--L20></Box> // lighten color
     * <Box borderRightPink200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightPink200?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #fbcfe8; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomPink200></Box>
     * <Box borderBottomPink200--T20></Box> // transparentize color
     * <Box borderBottomPink200--O20></Box> // opacify color
     * <Box borderBottomPink200--L20></Box> // lighten color
     * <Box borderBottomPink200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomPink200?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #fbcfe8; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftPink200></Box>
     * <Box borderLeftPink200--T20></Box> // transparentize color
     * <Box borderLeftPink200--O20></Box> // opacify color
     * <Box borderLeftPink200--L20></Box> // lighten color
     * <Box borderLeftPink200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftPink200?: ResponsiveBoolean
    /**
     * Set border color to pink300
     * ```css
     * { border-color: #f9a8d4; }
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
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #f9a8d4; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopPink300></Box>
     * <Box borderTopPink300--T20></Box> // transparentize color
     * <Box borderTopPink300--O20></Box> // opacify color
     * <Box borderTopPink300--L20></Box> // lighten color
     * <Box borderTopPink300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopPink300?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #f9a8d4; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightPink300></Box>
     * <Box borderRightPink300--T20></Box> // transparentize color
     * <Box borderRightPink300--O20></Box> // opacify color
     * <Box borderRightPink300--L20></Box> // lighten color
     * <Box borderRightPink300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightPink300?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #f9a8d4; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomPink300></Box>
     * <Box borderBottomPink300--T20></Box> // transparentize color
     * <Box borderBottomPink300--O20></Box> // opacify color
     * <Box borderBottomPink300--L20></Box> // lighten color
     * <Box borderBottomPink300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomPink300?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #f9a8d4; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftPink300></Box>
     * <Box borderLeftPink300--T20></Box> // transparentize color
     * <Box borderLeftPink300--O20></Box> // opacify color
     * <Box borderLeftPink300--L20></Box> // lighten color
     * <Box borderLeftPink300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftPink300?: ResponsiveBoolean
    /**
     * Set border color to pink400
     * ```css
     * { border-color: #f472b6; }
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
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #f472b6; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopPink400></Box>
     * <Box borderTopPink400--T20></Box> // transparentize color
     * <Box borderTopPink400--O20></Box> // opacify color
     * <Box borderTopPink400--L20></Box> // lighten color
     * <Box borderTopPink400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopPink400?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #f472b6; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightPink400></Box>
     * <Box borderRightPink400--T20></Box> // transparentize color
     * <Box borderRightPink400--O20></Box> // opacify color
     * <Box borderRightPink400--L20></Box> // lighten color
     * <Box borderRightPink400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightPink400?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #f472b6; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomPink400></Box>
     * <Box borderBottomPink400--T20></Box> // transparentize color
     * <Box borderBottomPink400--O20></Box> // opacify color
     * <Box borderBottomPink400--L20></Box> // lighten color
     * <Box borderBottomPink400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomPink400?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #f472b6; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftPink400></Box>
     * <Box borderLeftPink400--T20></Box> // transparentize color
     * <Box borderLeftPink400--O20></Box> // opacify color
     * <Box borderLeftPink400--L20></Box> // lighten color
     * <Box borderLeftPink400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftPink400?: ResponsiveBoolean
    /**
     * Set border color to pink500
     * ```css
     * { border-color: #ec4899; }
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
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #ec4899; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopPink500></Box>
     * <Box borderTopPink500--T20></Box> // transparentize color
     * <Box borderTopPink500--O20></Box> // opacify color
     * <Box borderTopPink500--L20></Box> // lighten color
     * <Box borderTopPink500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopPink500?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #ec4899; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightPink500></Box>
     * <Box borderRightPink500--T20></Box> // transparentize color
     * <Box borderRightPink500--O20></Box> // opacify color
     * <Box borderRightPink500--L20></Box> // lighten color
     * <Box borderRightPink500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightPink500?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #ec4899; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomPink500></Box>
     * <Box borderBottomPink500--T20></Box> // transparentize color
     * <Box borderBottomPink500--O20></Box> // opacify color
     * <Box borderBottomPink500--L20></Box> // lighten color
     * <Box borderBottomPink500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomPink500?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #ec4899; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftPink500></Box>
     * <Box borderLeftPink500--T20></Box> // transparentize color
     * <Box borderLeftPink500--O20></Box> // opacify color
     * <Box borderLeftPink500--L20></Box> // lighten color
     * <Box borderLeftPink500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftPink500?: ResponsiveBoolean
    /**
     * Set border color to pink600
     * ```css
     * { border-color: #db2777; }
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
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #db2777; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopPink600></Box>
     * <Box borderTopPink600--T20></Box> // transparentize color
     * <Box borderTopPink600--O20></Box> // opacify color
     * <Box borderTopPink600--L20></Box> // lighten color
     * <Box borderTopPink600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopPink600?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #db2777; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightPink600></Box>
     * <Box borderRightPink600--T20></Box> // transparentize color
     * <Box borderRightPink600--O20></Box> // opacify color
     * <Box borderRightPink600--L20></Box> // lighten color
     * <Box borderRightPink600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightPink600?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #db2777; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomPink600></Box>
     * <Box borderBottomPink600--T20></Box> // transparentize color
     * <Box borderBottomPink600--O20></Box> // opacify color
     * <Box borderBottomPink600--L20></Box> // lighten color
     * <Box borderBottomPink600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomPink600?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #db2777; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftPink600></Box>
     * <Box borderLeftPink600--T20></Box> // transparentize color
     * <Box borderLeftPink600--O20></Box> // opacify color
     * <Box borderLeftPink600--L20></Box> // lighten color
     * <Box borderLeftPink600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftPink600?: ResponsiveBoolean
    /**
     * Set border color to pink700
     * ```css
     * { border-color: #be185d; }
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
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #be185d; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopPink700></Box>
     * <Box borderTopPink700--T20></Box> // transparentize color
     * <Box borderTopPink700--O20></Box> // opacify color
     * <Box borderTopPink700--L20></Box> // lighten color
     * <Box borderTopPink700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopPink700?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #be185d; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightPink700></Box>
     * <Box borderRightPink700--T20></Box> // transparentize color
     * <Box borderRightPink700--O20></Box> // opacify color
     * <Box borderRightPink700--L20></Box> // lighten color
     * <Box borderRightPink700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightPink700?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #be185d; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomPink700></Box>
     * <Box borderBottomPink700--T20></Box> // transparentize color
     * <Box borderBottomPink700--O20></Box> // opacify color
     * <Box borderBottomPink700--L20></Box> // lighten color
     * <Box borderBottomPink700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomPink700?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #be185d; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftPink700></Box>
     * <Box borderLeftPink700--T20></Box> // transparentize color
     * <Box borderLeftPink700--O20></Box> // opacify color
     * <Box borderLeftPink700--L20></Box> // lighten color
     * <Box borderLeftPink700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftPink700?: ResponsiveBoolean
    /**
     * Set border color to pink800
     * ```css
     * { border-color: #9d174d; }
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
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #9d174d; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopPink800></Box>
     * <Box borderTopPink800--T20></Box> // transparentize color
     * <Box borderTopPink800--O20></Box> // opacify color
     * <Box borderTopPink800--L20></Box> // lighten color
     * <Box borderTopPink800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopPink800?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #9d174d; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightPink800></Box>
     * <Box borderRightPink800--T20></Box> // transparentize color
     * <Box borderRightPink800--O20></Box> // opacify color
     * <Box borderRightPink800--L20></Box> // lighten color
     * <Box borderRightPink800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightPink800?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #9d174d; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomPink800></Box>
     * <Box borderBottomPink800--T20></Box> // transparentize color
     * <Box borderBottomPink800--O20></Box> // opacify color
     * <Box borderBottomPink800--L20></Box> // lighten color
     * <Box borderBottomPink800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomPink800?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #9d174d; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftPink800></Box>
     * <Box borderLeftPink800--T20></Box> // transparentize color
     * <Box borderLeftPink800--O20></Box> // opacify color
     * <Box borderLeftPink800--L20></Box> // lighten color
     * <Box borderLeftPink800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftPink800?: ResponsiveBoolean
    /**
     * Set border color to pink900
     * ```css
     * { border-color: #831843; }
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
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #831843; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopPink900></Box>
     * <Box borderTopPink900--T20></Box> // transparentize color
     * <Box borderTopPink900--O20></Box> // opacify color
     * <Box borderTopPink900--L20></Box> // lighten color
     * <Box borderTopPink900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopPink900?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #831843; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightPink900></Box>
     * <Box borderRightPink900--T20></Box> // transparentize color
     * <Box borderRightPink900--O20></Box> // opacify color
     * <Box borderRightPink900--L20></Box> // lighten color
     * <Box borderRightPink900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightPink900?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #831843; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomPink900></Box>
     * <Box borderBottomPink900--T20></Box> // transparentize color
     * <Box borderBottomPink900--O20></Box> // opacify color
     * <Box borderBottomPink900--L20></Box> // lighten color
     * <Box borderBottomPink900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomPink900?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #831843; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftPink900></Box>
     * <Box borderLeftPink900--T20></Box> // transparentize color
     * <Box borderLeftPink900--O20></Box> // opacify color
     * <Box borderLeftPink900--L20></Box> // lighten color
     * <Box borderLeftPink900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftPink900?: ResponsiveBoolean
    /**
     * Set border color to fuchsia50
     * ```css
     * { border-color: #fdf4ff; }
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
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #fdf4ff; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopFuchsia50></Box>
     * <Box borderTopFuchsia50--T20></Box> // transparentize color
     * <Box borderTopFuchsia50--O20></Box> // opacify color
     * <Box borderTopFuchsia50--L20></Box> // lighten color
     * <Box borderTopFuchsia50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopFuchsia50?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #fdf4ff; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightFuchsia50></Box>
     * <Box borderRightFuchsia50--T20></Box> // transparentize color
     * <Box borderRightFuchsia50--O20></Box> // opacify color
     * <Box borderRightFuchsia50--L20></Box> // lighten color
     * <Box borderRightFuchsia50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightFuchsia50?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #fdf4ff; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomFuchsia50></Box>
     * <Box borderBottomFuchsia50--T20></Box> // transparentize color
     * <Box borderBottomFuchsia50--O20></Box> // opacify color
     * <Box borderBottomFuchsia50--L20></Box> // lighten color
     * <Box borderBottomFuchsia50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomFuchsia50?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #fdf4ff; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftFuchsia50></Box>
     * <Box borderLeftFuchsia50--T20></Box> // transparentize color
     * <Box borderLeftFuchsia50--O20></Box> // opacify color
     * <Box borderLeftFuchsia50--L20></Box> // lighten color
     * <Box borderLeftFuchsia50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftFuchsia50?: ResponsiveBoolean
    /**
     * Set border color to fuchsia100
     * ```css
     * { border-color: #fae8ff; }
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
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #fae8ff; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopFuchsia100></Box>
     * <Box borderTopFuchsia100--T20></Box> // transparentize color
     * <Box borderTopFuchsia100--O20></Box> // opacify color
     * <Box borderTopFuchsia100--L20></Box> // lighten color
     * <Box borderTopFuchsia100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopFuchsia100?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #fae8ff; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightFuchsia100></Box>
     * <Box borderRightFuchsia100--T20></Box> // transparentize color
     * <Box borderRightFuchsia100--O20></Box> // opacify color
     * <Box borderRightFuchsia100--L20></Box> // lighten color
     * <Box borderRightFuchsia100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightFuchsia100?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #fae8ff; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomFuchsia100></Box>
     * <Box borderBottomFuchsia100--T20></Box> // transparentize color
     * <Box borderBottomFuchsia100--O20></Box> // opacify color
     * <Box borderBottomFuchsia100--L20></Box> // lighten color
     * <Box borderBottomFuchsia100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomFuchsia100?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #fae8ff; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftFuchsia100></Box>
     * <Box borderLeftFuchsia100--T20></Box> // transparentize color
     * <Box borderLeftFuchsia100--O20></Box> // opacify color
     * <Box borderLeftFuchsia100--L20></Box> // lighten color
     * <Box borderLeftFuchsia100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftFuchsia100?: ResponsiveBoolean
    /**
     * Set border color to fuchsia200
     * ```css
     * { border-color: #f5d0fe; }
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
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #f5d0fe; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopFuchsia200></Box>
     * <Box borderTopFuchsia200--T20></Box> // transparentize color
     * <Box borderTopFuchsia200--O20></Box> // opacify color
     * <Box borderTopFuchsia200--L20></Box> // lighten color
     * <Box borderTopFuchsia200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopFuchsia200?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #f5d0fe; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightFuchsia200></Box>
     * <Box borderRightFuchsia200--T20></Box> // transparentize color
     * <Box borderRightFuchsia200--O20></Box> // opacify color
     * <Box borderRightFuchsia200--L20></Box> // lighten color
     * <Box borderRightFuchsia200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightFuchsia200?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #f5d0fe; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomFuchsia200></Box>
     * <Box borderBottomFuchsia200--T20></Box> // transparentize color
     * <Box borderBottomFuchsia200--O20></Box> // opacify color
     * <Box borderBottomFuchsia200--L20></Box> // lighten color
     * <Box borderBottomFuchsia200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomFuchsia200?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #f5d0fe; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftFuchsia200></Box>
     * <Box borderLeftFuchsia200--T20></Box> // transparentize color
     * <Box borderLeftFuchsia200--O20></Box> // opacify color
     * <Box borderLeftFuchsia200--L20></Box> // lighten color
     * <Box borderLeftFuchsia200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftFuchsia200?: ResponsiveBoolean
    /**
     * Set border color to fuchsia300
     * ```css
     * { border-color: #f0abfc; }
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
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #f0abfc; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopFuchsia300></Box>
     * <Box borderTopFuchsia300--T20></Box> // transparentize color
     * <Box borderTopFuchsia300--O20></Box> // opacify color
     * <Box borderTopFuchsia300--L20></Box> // lighten color
     * <Box borderTopFuchsia300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopFuchsia300?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #f0abfc; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightFuchsia300></Box>
     * <Box borderRightFuchsia300--T20></Box> // transparentize color
     * <Box borderRightFuchsia300--O20></Box> // opacify color
     * <Box borderRightFuchsia300--L20></Box> // lighten color
     * <Box borderRightFuchsia300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightFuchsia300?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #f0abfc; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomFuchsia300></Box>
     * <Box borderBottomFuchsia300--T20></Box> // transparentize color
     * <Box borderBottomFuchsia300--O20></Box> // opacify color
     * <Box borderBottomFuchsia300--L20></Box> // lighten color
     * <Box borderBottomFuchsia300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomFuchsia300?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #f0abfc; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftFuchsia300></Box>
     * <Box borderLeftFuchsia300--T20></Box> // transparentize color
     * <Box borderLeftFuchsia300--O20></Box> // opacify color
     * <Box borderLeftFuchsia300--L20></Box> // lighten color
     * <Box borderLeftFuchsia300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftFuchsia300?: ResponsiveBoolean
    /**
     * Set border color to fuchsia400
     * ```css
     * { border-color: #e879f9; }
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
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #e879f9; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopFuchsia400></Box>
     * <Box borderTopFuchsia400--T20></Box> // transparentize color
     * <Box borderTopFuchsia400--O20></Box> // opacify color
     * <Box borderTopFuchsia400--L20></Box> // lighten color
     * <Box borderTopFuchsia400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopFuchsia400?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #e879f9; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightFuchsia400></Box>
     * <Box borderRightFuchsia400--T20></Box> // transparentize color
     * <Box borderRightFuchsia400--O20></Box> // opacify color
     * <Box borderRightFuchsia400--L20></Box> // lighten color
     * <Box borderRightFuchsia400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightFuchsia400?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #e879f9; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomFuchsia400></Box>
     * <Box borderBottomFuchsia400--T20></Box> // transparentize color
     * <Box borderBottomFuchsia400--O20></Box> // opacify color
     * <Box borderBottomFuchsia400--L20></Box> // lighten color
     * <Box borderBottomFuchsia400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomFuchsia400?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #e879f9; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftFuchsia400></Box>
     * <Box borderLeftFuchsia400--T20></Box> // transparentize color
     * <Box borderLeftFuchsia400--O20></Box> // opacify color
     * <Box borderLeftFuchsia400--L20></Box> // lighten color
     * <Box borderLeftFuchsia400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftFuchsia400?: ResponsiveBoolean
    /**
     * Set border color to fuchsia500
     * ```css
     * { border-color: #d946ef; }
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
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #d946ef; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopFuchsia500></Box>
     * <Box borderTopFuchsia500--T20></Box> // transparentize color
     * <Box borderTopFuchsia500--O20></Box> // opacify color
     * <Box borderTopFuchsia500--L20></Box> // lighten color
     * <Box borderTopFuchsia500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopFuchsia500?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #d946ef; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightFuchsia500></Box>
     * <Box borderRightFuchsia500--T20></Box> // transparentize color
     * <Box borderRightFuchsia500--O20></Box> // opacify color
     * <Box borderRightFuchsia500--L20></Box> // lighten color
     * <Box borderRightFuchsia500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightFuchsia500?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #d946ef; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomFuchsia500></Box>
     * <Box borderBottomFuchsia500--T20></Box> // transparentize color
     * <Box borderBottomFuchsia500--O20></Box> // opacify color
     * <Box borderBottomFuchsia500--L20></Box> // lighten color
     * <Box borderBottomFuchsia500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomFuchsia500?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #d946ef; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftFuchsia500></Box>
     * <Box borderLeftFuchsia500--T20></Box> // transparentize color
     * <Box borderLeftFuchsia500--O20></Box> // opacify color
     * <Box borderLeftFuchsia500--L20></Box> // lighten color
     * <Box borderLeftFuchsia500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftFuchsia500?: ResponsiveBoolean
    /**
     * Set border color to fuchsia600
     * ```css
     * { border-color: #c026d3; }
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
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #c026d3; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopFuchsia600></Box>
     * <Box borderTopFuchsia600--T20></Box> // transparentize color
     * <Box borderTopFuchsia600--O20></Box> // opacify color
     * <Box borderTopFuchsia600--L20></Box> // lighten color
     * <Box borderTopFuchsia600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopFuchsia600?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #c026d3; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightFuchsia600></Box>
     * <Box borderRightFuchsia600--T20></Box> // transparentize color
     * <Box borderRightFuchsia600--O20></Box> // opacify color
     * <Box borderRightFuchsia600--L20></Box> // lighten color
     * <Box borderRightFuchsia600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightFuchsia600?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #c026d3; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomFuchsia600></Box>
     * <Box borderBottomFuchsia600--T20></Box> // transparentize color
     * <Box borderBottomFuchsia600--O20></Box> // opacify color
     * <Box borderBottomFuchsia600--L20></Box> // lighten color
     * <Box borderBottomFuchsia600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomFuchsia600?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #c026d3; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftFuchsia600></Box>
     * <Box borderLeftFuchsia600--T20></Box> // transparentize color
     * <Box borderLeftFuchsia600--O20></Box> // opacify color
     * <Box borderLeftFuchsia600--L20></Box> // lighten color
     * <Box borderLeftFuchsia600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftFuchsia600?: ResponsiveBoolean
    /**
     * Set border color to fuchsia700
     * ```css
     * { border-color: #a21caf; }
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
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #a21caf; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopFuchsia700></Box>
     * <Box borderTopFuchsia700--T20></Box> // transparentize color
     * <Box borderTopFuchsia700--O20></Box> // opacify color
     * <Box borderTopFuchsia700--L20></Box> // lighten color
     * <Box borderTopFuchsia700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopFuchsia700?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #a21caf; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightFuchsia700></Box>
     * <Box borderRightFuchsia700--T20></Box> // transparentize color
     * <Box borderRightFuchsia700--O20></Box> // opacify color
     * <Box borderRightFuchsia700--L20></Box> // lighten color
     * <Box borderRightFuchsia700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightFuchsia700?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #a21caf; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomFuchsia700></Box>
     * <Box borderBottomFuchsia700--T20></Box> // transparentize color
     * <Box borderBottomFuchsia700--O20></Box> // opacify color
     * <Box borderBottomFuchsia700--L20></Box> // lighten color
     * <Box borderBottomFuchsia700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomFuchsia700?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #a21caf; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftFuchsia700></Box>
     * <Box borderLeftFuchsia700--T20></Box> // transparentize color
     * <Box borderLeftFuchsia700--O20></Box> // opacify color
     * <Box borderLeftFuchsia700--L20></Box> // lighten color
     * <Box borderLeftFuchsia700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftFuchsia700?: ResponsiveBoolean
    /**
     * Set border color to fuchsia800
     * ```css
     * { border-color: #86198f; }
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
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #86198f; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopFuchsia800></Box>
     * <Box borderTopFuchsia800--T20></Box> // transparentize color
     * <Box borderTopFuchsia800--O20></Box> // opacify color
     * <Box borderTopFuchsia800--L20></Box> // lighten color
     * <Box borderTopFuchsia800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopFuchsia800?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #86198f; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightFuchsia800></Box>
     * <Box borderRightFuchsia800--T20></Box> // transparentize color
     * <Box borderRightFuchsia800--O20></Box> // opacify color
     * <Box borderRightFuchsia800--L20></Box> // lighten color
     * <Box borderRightFuchsia800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightFuchsia800?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #86198f; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomFuchsia800></Box>
     * <Box borderBottomFuchsia800--T20></Box> // transparentize color
     * <Box borderBottomFuchsia800--O20></Box> // opacify color
     * <Box borderBottomFuchsia800--L20></Box> // lighten color
     * <Box borderBottomFuchsia800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomFuchsia800?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #86198f; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftFuchsia800></Box>
     * <Box borderLeftFuchsia800--T20></Box> // transparentize color
     * <Box borderLeftFuchsia800--O20></Box> // opacify color
     * <Box borderLeftFuchsia800--L20></Box> // lighten color
     * <Box borderLeftFuchsia800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftFuchsia800?: ResponsiveBoolean
    /**
     * Set border color to fuchsia900
     * ```css
     * { border-color: #701a75; }
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
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #701a75; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopFuchsia900></Box>
     * <Box borderTopFuchsia900--T20></Box> // transparentize color
     * <Box borderTopFuchsia900--O20></Box> // opacify color
     * <Box borderTopFuchsia900--L20></Box> // lighten color
     * <Box borderTopFuchsia900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopFuchsia900?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #701a75; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightFuchsia900></Box>
     * <Box borderRightFuchsia900--T20></Box> // transparentize color
     * <Box borderRightFuchsia900--O20></Box> // opacify color
     * <Box borderRightFuchsia900--L20></Box> // lighten color
     * <Box borderRightFuchsia900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightFuchsia900?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #701a75; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomFuchsia900></Box>
     * <Box borderBottomFuchsia900--T20></Box> // transparentize color
     * <Box borderBottomFuchsia900--O20></Box> // opacify color
     * <Box borderBottomFuchsia900--L20></Box> // lighten color
     * <Box borderBottomFuchsia900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomFuchsia900?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #701a75; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftFuchsia900></Box>
     * <Box borderLeftFuchsia900--T20></Box> // transparentize color
     * <Box borderLeftFuchsia900--O20></Box> // opacify color
     * <Box borderLeftFuchsia900--L20></Box> // lighten color
     * <Box borderLeftFuchsia900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftFuchsia900?: ResponsiveBoolean
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
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #faf5ff; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopPurple50></Box>
     * <Box borderTopPurple50--T20></Box> // transparentize color
     * <Box borderTopPurple50--O20></Box> // opacify color
     * <Box borderTopPurple50--L20></Box> // lighten color
     * <Box borderTopPurple50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopPurple50?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #faf5ff; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightPurple50></Box>
     * <Box borderRightPurple50--T20></Box> // transparentize color
     * <Box borderRightPurple50--O20></Box> // opacify color
     * <Box borderRightPurple50--L20></Box> // lighten color
     * <Box borderRightPurple50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightPurple50?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #faf5ff; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomPurple50></Box>
     * <Box borderBottomPurple50--T20></Box> // transparentize color
     * <Box borderBottomPurple50--O20></Box> // opacify color
     * <Box borderBottomPurple50--L20></Box> // lighten color
     * <Box borderBottomPurple50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomPurple50?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #faf5ff; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftPurple50></Box>
     * <Box borderLeftPurple50--T20></Box> // transparentize color
     * <Box borderLeftPurple50--O20></Box> // opacify color
     * <Box borderLeftPurple50--L20></Box> // lighten color
     * <Box borderLeftPurple50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftPurple50?: ResponsiveBoolean
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
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #f3e8ff; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopPurple100></Box>
     * <Box borderTopPurple100--T20></Box> // transparentize color
     * <Box borderTopPurple100--O20></Box> // opacify color
     * <Box borderTopPurple100--L20></Box> // lighten color
     * <Box borderTopPurple100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopPurple100?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #f3e8ff; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightPurple100></Box>
     * <Box borderRightPurple100--T20></Box> // transparentize color
     * <Box borderRightPurple100--O20></Box> // opacify color
     * <Box borderRightPurple100--L20></Box> // lighten color
     * <Box borderRightPurple100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightPurple100?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #f3e8ff; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomPurple100></Box>
     * <Box borderBottomPurple100--T20></Box> // transparentize color
     * <Box borderBottomPurple100--O20></Box> // opacify color
     * <Box borderBottomPurple100--L20></Box> // lighten color
     * <Box borderBottomPurple100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomPurple100?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #f3e8ff; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftPurple100></Box>
     * <Box borderLeftPurple100--T20></Box> // transparentize color
     * <Box borderLeftPurple100--O20></Box> // opacify color
     * <Box borderLeftPurple100--L20></Box> // lighten color
     * <Box borderLeftPurple100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftPurple100?: ResponsiveBoolean
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
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #e9d5ff; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopPurple200></Box>
     * <Box borderTopPurple200--T20></Box> // transparentize color
     * <Box borderTopPurple200--O20></Box> // opacify color
     * <Box borderTopPurple200--L20></Box> // lighten color
     * <Box borderTopPurple200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopPurple200?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #e9d5ff; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightPurple200></Box>
     * <Box borderRightPurple200--T20></Box> // transparentize color
     * <Box borderRightPurple200--O20></Box> // opacify color
     * <Box borderRightPurple200--L20></Box> // lighten color
     * <Box borderRightPurple200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightPurple200?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #e9d5ff; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomPurple200></Box>
     * <Box borderBottomPurple200--T20></Box> // transparentize color
     * <Box borderBottomPurple200--O20></Box> // opacify color
     * <Box borderBottomPurple200--L20></Box> // lighten color
     * <Box borderBottomPurple200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomPurple200?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #e9d5ff; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftPurple200></Box>
     * <Box borderLeftPurple200--T20></Box> // transparentize color
     * <Box borderLeftPurple200--O20></Box> // opacify color
     * <Box borderLeftPurple200--L20></Box> // lighten color
     * <Box borderLeftPurple200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftPurple200?: ResponsiveBoolean
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
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #d8b4fe; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopPurple300></Box>
     * <Box borderTopPurple300--T20></Box> // transparentize color
     * <Box borderTopPurple300--O20></Box> // opacify color
     * <Box borderTopPurple300--L20></Box> // lighten color
     * <Box borderTopPurple300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopPurple300?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #d8b4fe; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightPurple300></Box>
     * <Box borderRightPurple300--T20></Box> // transparentize color
     * <Box borderRightPurple300--O20></Box> // opacify color
     * <Box borderRightPurple300--L20></Box> // lighten color
     * <Box borderRightPurple300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightPurple300?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #d8b4fe; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomPurple300></Box>
     * <Box borderBottomPurple300--T20></Box> // transparentize color
     * <Box borderBottomPurple300--O20></Box> // opacify color
     * <Box borderBottomPurple300--L20></Box> // lighten color
     * <Box borderBottomPurple300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomPurple300?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #d8b4fe; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftPurple300></Box>
     * <Box borderLeftPurple300--T20></Box> // transparentize color
     * <Box borderLeftPurple300--O20></Box> // opacify color
     * <Box borderLeftPurple300--L20></Box> // lighten color
     * <Box borderLeftPurple300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftPurple300?: ResponsiveBoolean
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
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #c084fc; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopPurple400></Box>
     * <Box borderTopPurple400--T20></Box> // transparentize color
     * <Box borderTopPurple400--O20></Box> // opacify color
     * <Box borderTopPurple400--L20></Box> // lighten color
     * <Box borderTopPurple400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopPurple400?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #c084fc; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightPurple400></Box>
     * <Box borderRightPurple400--T20></Box> // transparentize color
     * <Box borderRightPurple400--O20></Box> // opacify color
     * <Box borderRightPurple400--L20></Box> // lighten color
     * <Box borderRightPurple400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightPurple400?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #c084fc; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomPurple400></Box>
     * <Box borderBottomPurple400--T20></Box> // transparentize color
     * <Box borderBottomPurple400--O20></Box> // opacify color
     * <Box borderBottomPurple400--L20></Box> // lighten color
     * <Box borderBottomPurple400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomPurple400?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #c084fc; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftPurple400></Box>
     * <Box borderLeftPurple400--T20></Box> // transparentize color
     * <Box borderLeftPurple400--O20></Box> // opacify color
     * <Box borderLeftPurple400--L20></Box> // lighten color
     * <Box borderLeftPurple400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftPurple400?: ResponsiveBoolean
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
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #a855f7; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopPurple500></Box>
     * <Box borderTopPurple500--T20></Box> // transparentize color
     * <Box borderTopPurple500--O20></Box> // opacify color
     * <Box borderTopPurple500--L20></Box> // lighten color
     * <Box borderTopPurple500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopPurple500?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #a855f7; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightPurple500></Box>
     * <Box borderRightPurple500--T20></Box> // transparentize color
     * <Box borderRightPurple500--O20></Box> // opacify color
     * <Box borderRightPurple500--L20></Box> // lighten color
     * <Box borderRightPurple500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightPurple500?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #a855f7; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomPurple500></Box>
     * <Box borderBottomPurple500--T20></Box> // transparentize color
     * <Box borderBottomPurple500--O20></Box> // opacify color
     * <Box borderBottomPurple500--L20></Box> // lighten color
     * <Box borderBottomPurple500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomPurple500?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #a855f7; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftPurple500></Box>
     * <Box borderLeftPurple500--T20></Box> // transparentize color
     * <Box borderLeftPurple500--O20></Box> // opacify color
     * <Box borderLeftPurple500--L20></Box> // lighten color
     * <Box borderLeftPurple500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftPurple500?: ResponsiveBoolean
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
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #9333ea; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopPurple600></Box>
     * <Box borderTopPurple600--T20></Box> // transparentize color
     * <Box borderTopPurple600--O20></Box> // opacify color
     * <Box borderTopPurple600--L20></Box> // lighten color
     * <Box borderTopPurple600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopPurple600?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #9333ea; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightPurple600></Box>
     * <Box borderRightPurple600--T20></Box> // transparentize color
     * <Box borderRightPurple600--O20></Box> // opacify color
     * <Box borderRightPurple600--L20></Box> // lighten color
     * <Box borderRightPurple600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightPurple600?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #9333ea; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomPurple600></Box>
     * <Box borderBottomPurple600--T20></Box> // transparentize color
     * <Box borderBottomPurple600--O20></Box> // opacify color
     * <Box borderBottomPurple600--L20></Box> // lighten color
     * <Box borderBottomPurple600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomPurple600?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #9333ea; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftPurple600></Box>
     * <Box borderLeftPurple600--T20></Box> // transparentize color
     * <Box borderLeftPurple600--O20></Box> // opacify color
     * <Box borderLeftPurple600--L20></Box> // lighten color
     * <Box borderLeftPurple600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftPurple600?: ResponsiveBoolean
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
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #7e22ce; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopPurple700></Box>
     * <Box borderTopPurple700--T20></Box> // transparentize color
     * <Box borderTopPurple700--O20></Box> // opacify color
     * <Box borderTopPurple700--L20></Box> // lighten color
     * <Box borderTopPurple700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopPurple700?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #7e22ce; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightPurple700></Box>
     * <Box borderRightPurple700--T20></Box> // transparentize color
     * <Box borderRightPurple700--O20></Box> // opacify color
     * <Box borderRightPurple700--L20></Box> // lighten color
     * <Box borderRightPurple700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightPurple700?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #7e22ce; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomPurple700></Box>
     * <Box borderBottomPurple700--T20></Box> // transparentize color
     * <Box borderBottomPurple700--O20></Box> // opacify color
     * <Box borderBottomPurple700--L20></Box> // lighten color
     * <Box borderBottomPurple700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomPurple700?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #7e22ce; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftPurple700></Box>
     * <Box borderLeftPurple700--T20></Box> // transparentize color
     * <Box borderLeftPurple700--O20></Box> // opacify color
     * <Box borderLeftPurple700--L20></Box> // lighten color
     * <Box borderLeftPurple700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftPurple700?: ResponsiveBoolean
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
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #6b21a8; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopPurple800></Box>
     * <Box borderTopPurple800--T20></Box> // transparentize color
     * <Box borderTopPurple800--O20></Box> // opacify color
     * <Box borderTopPurple800--L20></Box> // lighten color
     * <Box borderTopPurple800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopPurple800?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #6b21a8; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightPurple800></Box>
     * <Box borderRightPurple800--T20></Box> // transparentize color
     * <Box borderRightPurple800--O20></Box> // opacify color
     * <Box borderRightPurple800--L20></Box> // lighten color
     * <Box borderRightPurple800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightPurple800?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #6b21a8; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomPurple800></Box>
     * <Box borderBottomPurple800--T20></Box> // transparentize color
     * <Box borderBottomPurple800--O20></Box> // opacify color
     * <Box borderBottomPurple800--L20></Box> // lighten color
     * <Box borderBottomPurple800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomPurple800?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #6b21a8; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftPurple800></Box>
     * <Box borderLeftPurple800--T20></Box> // transparentize color
     * <Box borderLeftPurple800--O20></Box> // opacify color
     * <Box borderLeftPurple800--L20></Box> // lighten color
     * <Box borderLeftPurple800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftPurple800?: ResponsiveBoolean
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
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #581c87; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopPurple900></Box>
     * <Box borderTopPurple900--T20></Box> // transparentize color
     * <Box borderTopPurple900--O20></Box> // opacify color
     * <Box borderTopPurple900--L20></Box> // lighten color
     * <Box borderTopPurple900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopPurple900?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #581c87; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightPurple900></Box>
     * <Box borderRightPurple900--T20></Box> // transparentize color
     * <Box borderRightPurple900--O20></Box> // opacify color
     * <Box borderRightPurple900--L20></Box> // lighten color
     * <Box borderRightPurple900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightPurple900?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #581c87; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomPurple900></Box>
     * <Box borderBottomPurple900--T20></Box> // transparentize color
     * <Box borderBottomPurple900--O20></Box> // opacify color
     * <Box borderBottomPurple900--L20></Box> // lighten color
     * <Box borderBottomPurple900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomPurple900?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #581c87; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftPurple900></Box>
     * <Box borderLeftPurple900--T20></Box> // transparentize color
     * <Box borderLeftPurple900--O20></Box> // opacify color
     * <Box borderLeftPurple900--L20></Box> // lighten color
     * <Box borderLeftPurple900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftPurple900?: ResponsiveBoolean
    /**
     * Set border color to violet50
     * ```css
     * { border-color: #f5f3ff; }
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
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #f5f3ff; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopViolet50></Box>
     * <Box borderTopViolet50--T20></Box> // transparentize color
     * <Box borderTopViolet50--O20></Box> // opacify color
     * <Box borderTopViolet50--L20></Box> // lighten color
     * <Box borderTopViolet50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopViolet50?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #f5f3ff; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightViolet50></Box>
     * <Box borderRightViolet50--T20></Box> // transparentize color
     * <Box borderRightViolet50--O20></Box> // opacify color
     * <Box borderRightViolet50--L20></Box> // lighten color
     * <Box borderRightViolet50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightViolet50?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #f5f3ff; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomViolet50></Box>
     * <Box borderBottomViolet50--T20></Box> // transparentize color
     * <Box borderBottomViolet50--O20></Box> // opacify color
     * <Box borderBottomViolet50--L20></Box> // lighten color
     * <Box borderBottomViolet50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomViolet50?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #f5f3ff; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftViolet50></Box>
     * <Box borderLeftViolet50--T20></Box> // transparentize color
     * <Box borderLeftViolet50--O20></Box> // opacify color
     * <Box borderLeftViolet50--L20></Box> // lighten color
     * <Box borderLeftViolet50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftViolet50?: ResponsiveBoolean
    /**
     * Set border color to violet100
     * ```css
     * { border-color: #ede9fe; }
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
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #ede9fe; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopViolet100></Box>
     * <Box borderTopViolet100--T20></Box> // transparentize color
     * <Box borderTopViolet100--O20></Box> // opacify color
     * <Box borderTopViolet100--L20></Box> // lighten color
     * <Box borderTopViolet100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopViolet100?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #ede9fe; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightViolet100></Box>
     * <Box borderRightViolet100--T20></Box> // transparentize color
     * <Box borderRightViolet100--O20></Box> // opacify color
     * <Box borderRightViolet100--L20></Box> // lighten color
     * <Box borderRightViolet100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightViolet100?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #ede9fe; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomViolet100></Box>
     * <Box borderBottomViolet100--T20></Box> // transparentize color
     * <Box borderBottomViolet100--O20></Box> // opacify color
     * <Box borderBottomViolet100--L20></Box> // lighten color
     * <Box borderBottomViolet100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomViolet100?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #ede9fe; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftViolet100></Box>
     * <Box borderLeftViolet100--T20></Box> // transparentize color
     * <Box borderLeftViolet100--O20></Box> // opacify color
     * <Box borderLeftViolet100--L20></Box> // lighten color
     * <Box borderLeftViolet100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftViolet100?: ResponsiveBoolean
    /**
     * Set border color to violet200
     * ```css
     * { border-color: #ddd6fe; }
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
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #ddd6fe; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopViolet200></Box>
     * <Box borderTopViolet200--T20></Box> // transparentize color
     * <Box borderTopViolet200--O20></Box> // opacify color
     * <Box borderTopViolet200--L20></Box> // lighten color
     * <Box borderTopViolet200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopViolet200?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #ddd6fe; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightViolet200></Box>
     * <Box borderRightViolet200--T20></Box> // transparentize color
     * <Box borderRightViolet200--O20></Box> // opacify color
     * <Box borderRightViolet200--L20></Box> // lighten color
     * <Box borderRightViolet200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightViolet200?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #ddd6fe; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomViolet200></Box>
     * <Box borderBottomViolet200--T20></Box> // transparentize color
     * <Box borderBottomViolet200--O20></Box> // opacify color
     * <Box borderBottomViolet200--L20></Box> // lighten color
     * <Box borderBottomViolet200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomViolet200?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #ddd6fe; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftViolet200></Box>
     * <Box borderLeftViolet200--T20></Box> // transparentize color
     * <Box borderLeftViolet200--O20></Box> // opacify color
     * <Box borderLeftViolet200--L20></Box> // lighten color
     * <Box borderLeftViolet200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftViolet200?: ResponsiveBoolean
    /**
     * Set border color to violet300
     * ```css
     * { border-color: #c4b5fd; }
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
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #c4b5fd; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopViolet300></Box>
     * <Box borderTopViolet300--T20></Box> // transparentize color
     * <Box borderTopViolet300--O20></Box> // opacify color
     * <Box borderTopViolet300--L20></Box> // lighten color
     * <Box borderTopViolet300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopViolet300?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #c4b5fd; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightViolet300></Box>
     * <Box borderRightViolet300--T20></Box> // transparentize color
     * <Box borderRightViolet300--O20></Box> // opacify color
     * <Box borderRightViolet300--L20></Box> // lighten color
     * <Box borderRightViolet300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightViolet300?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #c4b5fd; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomViolet300></Box>
     * <Box borderBottomViolet300--T20></Box> // transparentize color
     * <Box borderBottomViolet300--O20></Box> // opacify color
     * <Box borderBottomViolet300--L20></Box> // lighten color
     * <Box borderBottomViolet300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomViolet300?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #c4b5fd; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftViolet300></Box>
     * <Box borderLeftViolet300--T20></Box> // transparentize color
     * <Box borderLeftViolet300--O20></Box> // opacify color
     * <Box borderLeftViolet300--L20></Box> // lighten color
     * <Box borderLeftViolet300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftViolet300?: ResponsiveBoolean
    /**
     * Set border color to violet400
     * ```css
     * { border-color: #a78bfa; }
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
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #a78bfa; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopViolet400></Box>
     * <Box borderTopViolet400--T20></Box> // transparentize color
     * <Box borderTopViolet400--O20></Box> // opacify color
     * <Box borderTopViolet400--L20></Box> // lighten color
     * <Box borderTopViolet400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopViolet400?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #a78bfa; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightViolet400></Box>
     * <Box borderRightViolet400--T20></Box> // transparentize color
     * <Box borderRightViolet400--O20></Box> // opacify color
     * <Box borderRightViolet400--L20></Box> // lighten color
     * <Box borderRightViolet400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightViolet400?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #a78bfa; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomViolet400></Box>
     * <Box borderBottomViolet400--T20></Box> // transparentize color
     * <Box borderBottomViolet400--O20></Box> // opacify color
     * <Box borderBottomViolet400--L20></Box> // lighten color
     * <Box borderBottomViolet400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomViolet400?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #a78bfa; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftViolet400></Box>
     * <Box borderLeftViolet400--T20></Box> // transparentize color
     * <Box borderLeftViolet400--O20></Box> // opacify color
     * <Box borderLeftViolet400--L20></Box> // lighten color
     * <Box borderLeftViolet400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftViolet400?: ResponsiveBoolean
    /**
     * Set border color to violet500
     * ```css
     * { border-color: #8b5cf6; }
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
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #8b5cf6; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopViolet500></Box>
     * <Box borderTopViolet500--T20></Box> // transparentize color
     * <Box borderTopViolet500--O20></Box> // opacify color
     * <Box borderTopViolet500--L20></Box> // lighten color
     * <Box borderTopViolet500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopViolet500?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #8b5cf6; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightViolet500></Box>
     * <Box borderRightViolet500--T20></Box> // transparentize color
     * <Box borderRightViolet500--O20></Box> // opacify color
     * <Box borderRightViolet500--L20></Box> // lighten color
     * <Box borderRightViolet500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightViolet500?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #8b5cf6; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomViolet500></Box>
     * <Box borderBottomViolet500--T20></Box> // transparentize color
     * <Box borderBottomViolet500--O20></Box> // opacify color
     * <Box borderBottomViolet500--L20></Box> // lighten color
     * <Box borderBottomViolet500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomViolet500?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #8b5cf6; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftViolet500></Box>
     * <Box borderLeftViolet500--T20></Box> // transparentize color
     * <Box borderLeftViolet500--O20></Box> // opacify color
     * <Box borderLeftViolet500--L20></Box> // lighten color
     * <Box borderLeftViolet500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftViolet500?: ResponsiveBoolean
    /**
     * Set border color to violet600
     * ```css
     * { border-color: #7c3aed; }
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
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #7c3aed; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopViolet600></Box>
     * <Box borderTopViolet600--T20></Box> // transparentize color
     * <Box borderTopViolet600--O20></Box> // opacify color
     * <Box borderTopViolet600--L20></Box> // lighten color
     * <Box borderTopViolet600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopViolet600?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #7c3aed; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightViolet600></Box>
     * <Box borderRightViolet600--T20></Box> // transparentize color
     * <Box borderRightViolet600--O20></Box> // opacify color
     * <Box borderRightViolet600--L20></Box> // lighten color
     * <Box borderRightViolet600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightViolet600?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #7c3aed; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomViolet600></Box>
     * <Box borderBottomViolet600--T20></Box> // transparentize color
     * <Box borderBottomViolet600--O20></Box> // opacify color
     * <Box borderBottomViolet600--L20></Box> // lighten color
     * <Box borderBottomViolet600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomViolet600?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #7c3aed; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftViolet600></Box>
     * <Box borderLeftViolet600--T20></Box> // transparentize color
     * <Box borderLeftViolet600--O20></Box> // opacify color
     * <Box borderLeftViolet600--L20></Box> // lighten color
     * <Box borderLeftViolet600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftViolet600?: ResponsiveBoolean
    /**
     * Set border color to violet700
     * ```css
     * { border-color: #6d28d9; }
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
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #6d28d9; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopViolet700></Box>
     * <Box borderTopViolet700--T20></Box> // transparentize color
     * <Box borderTopViolet700--O20></Box> // opacify color
     * <Box borderTopViolet700--L20></Box> // lighten color
     * <Box borderTopViolet700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopViolet700?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #6d28d9; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightViolet700></Box>
     * <Box borderRightViolet700--T20></Box> // transparentize color
     * <Box borderRightViolet700--O20></Box> // opacify color
     * <Box borderRightViolet700--L20></Box> // lighten color
     * <Box borderRightViolet700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightViolet700?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #6d28d9; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomViolet700></Box>
     * <Box borderBottomViolet700--T20></Box> // transparentize color
     * <Box borderBottomViolet700--O20></Box> // opacify color
     * <Box borderBottomViolet700--L20></Box> // lighten color
     * <Box borderBottomViolet700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomViolet700?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #6d28d9; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftViolet700></Box>
     * <Box borderLeftViolet700--T20></Box> // transparentize color
     * <Box borderLeftViolet700--O20></Box> // opacify color
     * <Box borderLeftViolet700--L20></Box> // lighten color
     * <Box borderLeftViolet700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftViolet700?: ResponsiveBoolean
    /**
     * Set border color to violet800
     * ```css
     * { border-color: #5b21b6; }
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
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #5b21b6; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopViolet800></Box>
     * <Box borderTopViolet800--T20></Box> // transparentize color
     * <Box borderTopViolet800--O20></Box> // opacify color
     * <Box borderTopViolet800--L20></Box> // lighten color
     * <Box borderTopViolet800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopViolet800?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #5b21b6; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightViolet800></Box>
     * <Box borderRightViolet800--T20></Box> // transparentize color
     * <Box borderRightViolet800--O20></Box> // opacify color
     * <Box borderRightViolet800--L20></Box> // lighten color
     * <Box borderRightViolet800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightViolet800?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #5b21b6; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomViolet800></Box>
     * <Box borderBottomViolet800--T20></Box> // transparentize color
     * <Box borderBottomViolet800--O20></Box> // opacify color
     * <Box borderBottomViolet800--L20></Box> // lighten color
     * <Box borderBottomViolet800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomViolet800?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #5b21b6; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftViolet800></Box>
     * <Box borderLeftViolet800--T20></Box> // transparentize color
     * <Box borderLeftViolet800--O20></Box> // opacify color
     * <Box borderLeftViolet800--L20></Box> // lighten color
     * <Box borderLeftViolet800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftViolet800?: ResponsiveBoolean
    /**
     * Set border color to violet900
     * ```css
     * { border-color: #4c1d95; }
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
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #4c1d95; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopViolet900></Box>
     * <Box borderTopViolet900--T20></Box> // transparentize color
     * <Box borderTopViolet900--O20></Box> // opacify color
     * <Box borderTopViolet900--L20></Box> // lighten color
     * <Box borderTopViolet900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopViolet900?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #4c1d95; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightViolet900></Box>
     * <Box borderRightViolet900--T20></Box> // transparentize color
     * <Box borderRightViolet900--O20></Box> // opacify color
     * <Box borderRightViolet900--L20></Box> // lighten color
     * <Box borderRightViolet900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightViolet900?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #4c1d95; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomViolet900></Box>
     * <Box borderBottomViolet900--T20></Box> // transparentize color
     * <Box borderBottomViolet900--O20></Box> // opacify color
     * <Box borderBottomViolet900--L20></Box> // lighten color
     * <Box borderBottomViolet900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomViolet900?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #4c1d95; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftViolet900></Box>
     * <Box borderLeftViolet900--T20></Box> // transparentize color
     * <Box borderLeftViolet900--O20></Box> // opacify color
     * <Box borderLeftViolet900--L20></Box> // lighten color
     * <Box borderLeftViolet900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftViolet900?: ResponsiveBoolean
    /**
     * Set border color to indigo50
     * ```css
     * { border-color: #eef2ff; }
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
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #eef2ff; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopIndigo50></Box>
     * <Box borderTopIndigo50--T20></Box> // transparentize color
     * <Box borderTopIndigo50--O20></Box> // opacify color
     * <Box borderTopIndigo50--L20></Box> // lighten color
     * <Box borderTopIndigo50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopIndigo50?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #eef2ff; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightIndigo50></Box>
     * <Box borderRightIndigo50--T20></Box> // transparentize color
     * <Box borderRightIndigo50--O20></Box> // opacify color
     * <Box borderRightIndigo50--L20></Box> // lighten color
     * <Box borderRightIndigo50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightIndigo50?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #eef2ff; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomIndigo50></Box>
     * <Box borderBottomIndigo50--T20></Box> // transparentize color
     * <Box borderBottomIndigo50--O20></Box> // opacify color
     * <Box borderBottomIndigo50--L20></Box> // lighten color
     * <Box borderBottomIndigo50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomIndigo50?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #eef2ff; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftIndigo50></Box>
     * <Box borderLeftIndigo50--T20></Box> // transparentize color
     * <Box borderLeftIndigo50--O20></Box> // opacify color
     * <Box borderLeftIndigo50--L20></Box> // lighten color
     * <Box borderLeftIndigo50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftIndigo50?: ResponsiveBoolean
    /**
     * Set border color to indigo100
     * ```css
     * { border-color: #e0e7ff; }
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
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #e0e7ff; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopIndigo100></Box>
     * <Box borderTopIndigo100--T20></Box> // transparentize color
     * <Box borderTopIndigo100--O20></Box> // opacify color
     * <Box borderTopIndigo100--L20></Box> // lighten color
     * <Box borderTopIndigo100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopIndigo100?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #e0e7ff; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightIndigo100></Box>
     * <Box borderRightIndigo100--T20></Box> // transparentize color
     * <Box borderRightIndigo100--O20></Box> // opacify color
     * <Box borderRightIndigo100--L20></Box> // lighten color
     * <Box borderRightIndigo100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightIndigo100?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #e0e7ff; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomIndigo100></Box>
     * <Box borderBottomIndigo100--T20></Box> // transparentize color
     * <Box borderBottomIndigo100--O20></Box> // opacify color
     * <Box borderBottomIndigo100--L20></Box> // lighten color
     * <Box borderBottomIndigo100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomIndigo100?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #e0e7ff; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftIndigo100></Box>
     * <Box borderLeftIndigo100--T20></Box> // transparentize color
     * <Box borderLeftIndigo100--O20></Box> // opacify color
     * <Box borderLeftIndigo100--L20></Box> // lighten color
     * <Box borderLeftIndigo100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftIndigo100?: ResponsiveBoolean
    /**
     * Set border color to indigo200
     * ```css
     * { border-color: #c7d2fe; }
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
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #c7d2fe; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopIndigo200></Box>
     * <Box borderTopIndigo200--T20></Box> // transparentize color
     * <Box borderTopIndigo200--O20></Box> // opacify color
     * <Box borderTopIndigo200--L20></Box> // lighten color
     * <Box borderTopIndigo200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopIndigo200?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #c7d2fe; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightIndigo200></Box>
     * <Box borderRightIndigo200--T20></Box> // transparentize color
     * <Box borderRightIndigo200--O20></Box> // opacify color
     * <Box borderRightIndigo200--L20></Box> // lighten color
     * <Box borderRightIndigo200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightIndigo200?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #c7d2fe; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomIndigo200></Box>
     * <Box borderBottomIndigo200--T20></Box> // transparentize color
     * <Box borderBottomIndigo200--O20></Box> // opacify color
     * <Box borderBottomIndigo200--L20></Box> // lighten color
     * <Box borderBottomIndigo200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomIndigo200?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #c7d2fe; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftIndigo200></Box>
     * <Box borderLeftIndigo200--T20></Box> // transparentize color
     * <Box borderLeftIndigo200--O20></Box> // opacify color
     * <Box borderLeftIndigo200--L20></Box> // lighten color
     * <Box borderLeftIndigo200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftIndigo200?: ResponsiveBoolean
    /**
     * Set border color to indigo300
     * ```css
     * { border-color: #a5b4fc; }
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
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #a5b4fc; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopIndigo300></Box>
     * <Box borderTopIndigo300--T20></Box> // transparentize color
     * <Box borderTopIndigo300--O20></Box> // opacify color
     * <Box borderTopIndigo300--L20></Box> // lighten color
     * <Box borderTopIndigo300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopIndigo300?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #a5b4fc; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightIndigo300></Box>
     * <Box borderRightIndigo300--T20></Box> // transparentize color
     * <Box borderRightIndigo300--O20></Box> // opacify color
     * <Box borderRightIndigo300--L20></Box> // lighten color
     * <Box borderRightIndigo300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightIndigo300?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #a5b4fc; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomIndigo300></Box>
     * <Box borderBottomIndigo300--T20></Box> // transparentize color
     * <Box borderBottomIndigo300--O20></Box> // opacify color
     * <Box borderBottomIndigo300--L20></Box> // lighten color
     * <Box borderBottomIndigo300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomIndigo300?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #a5b4fc; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftIndigo300></Box>
     * <Box borderLeftIndigo300--T20></Box> // transparentize color
     * <Box borderLeftIndigo300--O20></Box> // opacify color
     * <Box borderLeftIndigo300--L20></Box> // lighten color
     * <Box borderLeftIndigo300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftIndigo300?: ResponsiveBoolean
    /**
     * Set border color to indigo400
     * ```css
     * { border-color: #818cf8; }
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
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #818cf8; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopIndigo400></Box>
     * <Box borderTopIndigo400--T20></Box> // transparentize color
     * <Box borderTopIndigo400--O20></Box> // opacify color
     * <Box borderTopIndigo400--L20></Box> // lighten color
     * <Box borderTopIndigo400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopIndigo400?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #818cf8; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightIndigo400></Box>
     * <Box borderRightIndigo400--T20></Box> // transparentize color
     * <Box borderRightIndigo400--O20></Box> // opacify color
     * <Box borderRightIndigo400--L20></Box> // lighten color
     * <Box borderRightIndigo400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightIndigo400?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #818cf8; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomIndigo400></Box>
     * <Box borderBottomIndigo400--T20></Box> // transparentize color
     * <Box borderBottomIndigo400--O20></Box> // opacify color
     * <Box borderBottomIndigo400--L20></Box> // lighten color
     * <Box borderBottomIndigo400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomIndigo400?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #818cf8; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftIndigo400></Box>
     * <Box borderLeftIndigo400--T20></Box> // transparentize color
     * <Box borderLeftIndigo400--O20></Box> // opacify color
     * <Box borderLeftIndigo400--L20></Box> // lighten color
     * <Box borderLeftIndigo400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftIndigo400?: ResponsiveBoolean
    /**
     * Set border color to indigo500
     * ```css
     * { border-color: #6366f1; }
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
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #6366f1; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopIndigo500></Box>
     * <Box borderTopIndigo500--T20></Box> // transparentize color
     * <Box borderTopIndigo500--O20></Box> // opacify color
     * <Box borderTopIndigo500--L20></Box> // lighten color
     * <Box borderTopIndigo500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopIndigo500?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #6366f1; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightIndigo500></Box>
     * <Box borderRightIndigo500--T20></Box> // transparentize color
     * <Box borderRightIndigo500--O20></Box> // opacify color
     * <Box borderRightIndigo500--L20></Box> // lighten color
     * <Box borderRightIndigo500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightIndigo500?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #6366f1; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomIndigo500></Box>
     * <Box borderBottomIndigo500--T20></Box> // transparentize color
     * <Box borderBottomIndigo500--O20></Box> // opacify color
     * <Box borderBottomIndigo500--L20></Box> // lighten color
     * <Box borderBottomIndigo500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomIndigo500?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #6366f1; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftIndigo500></Box>
     * <Box borderLeftIndigo500--T20></Box> // transparentize color
     * <Box borderLeftIndigo500--O20></Box> // opacify color
     * <Box borderLeftIndigo500--L20></Box> // lighten color
     * <Box borderLeftIndigo500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftIndigo500?: ResponsiveBoolean
    /**
     * Set border color to indigo600
     * ```css
     * { border-color: #4f46e5; }
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
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #4f46e5; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopIndigo600></Box>
     * <Box borderTopIndigo600--T20></Box> // transparentize color
     * <Box borderTopIndigo600--O20></Box> // opacify color
     * <Box borderTopIndigo600--L20></Box> // lighten color
     * <Box borderTopIndigo600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopIndigo600?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #4f46e5; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightIndigo600></Box>
     * <Box borderRightIndigo600--T20></Box> // transparentize color
     * <Box borderRightIndigo600--O20></Box> // opacify color
     * <Box borderRightIndigo600--L20></Box> // lighten color
     * <Box borderRightIndigo600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightIndigo600?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #4f46e5; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomIndigo600></Box>
     * <Box borderBottomIndigo600--T20></Box> // transparentize color
     * <Box borderBottomIndigo600--O20></Box> // opacify color
     * <Box borderBottomIndigo600--L20></Box> // lighten color
     * <Box borderBottomIndigo600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomIndigo600?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #4f46e5; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftIndigo600></Box>
     * <Box borderLeftIndigo600--T20></Box> // transparentize color
     * <Box borderLeftIndigo600--O20></Box> // opacify color
     * <Box borderLeftIndigo600--L20></Box> // lighten color
     * <Box borderLeftIndigo600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftIndigo600?: ResponsiveBoolean
    /**
     * Set border color to indigo700
     * ```css
     * { border-color: #4338ca; }
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
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #4338ca; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopIndigo700></Box>
     * <Box borderTopIndigo700--T20></Box> // transparentize color
     * <Box borderTopIndigo700--O20></Box> // opacify color
     * <Box borderTopIndigo700--L20></Box> // lighten color
     * <Box borderTopIndigo700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopIndigo700?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #4338ca; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightIndigo700></Box>
     * <Box borderRightIndigo700--T20></Box> // transparentize color
     * <Box borderRightIndigo700--O20></Box> // opacify color
     * <Box borderRightIndigo700--L20></Box> // lighten color
     * <Box borderRightIndigo700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightIndigo700?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #4338ca; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomIndigo700></Box>
     * <Box borderBottomIndigo700--T20></Box> // transparentize color
     * <Box borderBottomIndigo700--O20></Box> // opacify color
     * <Box borderBottomIndigo700--L20></Box> // lighten color
     * <Box borderBottomIndigo700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomIndigo700?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #4338ca; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftIndigo700></Box>
     * <Box borderLeftIndigo700--T20></Box> // transparentize color
     * <Box borderLeftIndigo700--O20></Box> // opacify color
     * <Box borderLeftIndigo700--L20></Box> // lighten color
     * <Box borderLeftIndigo700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftIndigo700?: ResponsiveBoolean
    /**
     * Set border color to indigo800
     * ```css
     * { border-color: #3730a3; }
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
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #3730a3; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopIndigo800></Box>
     * <Box borderTopIndigo800--T20></Box> // transparentize color
     * <Box borderTopIndigo800--O20></Box> // opacify color
     * <Box borderTopIndigo800--L20></Box> // lighten color
     * <Box borderTopIndigo800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopIndigo800?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #3730a3; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightIndigo800></Box>
     * <Box borderRightIndigo800--T20></Box> // transparentize color
     * <Box borderRightIndigo800--O20></Box> // opacify color
     * <Box borderRightIndigo800--L20></Box> // lighten color
     * <Box borderRightIndigo800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightIndigo800?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #3730a3; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomIndigo800></Box>
     * <Box borderBottomIndigo800--T20></Box> // transparentize color
     * <Box borderBottomIndigo800--O20></Box> // opacify color
     * <Box borderBottomIndigo800--L20></Box> // lighten color
     * <Box borderBottomIndigo800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomIndigo800?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #3730a3; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftIndigo800></Box>
     * <Box borderLeftIndigo800--T20></Box> // transparentize color
     * <Box borderLeftIndigo800--O20></Box> // opacify color
     * <Box borderLeftIndigo800--L20></Box> // lighten color
     * <Box borderLeftIndigo800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftIndigo800?: ResponsiveBoolean
    /**
     * Set border color to indigo900
     * ```css
     * { border-color: #312e81; }
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
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #312e81; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopIndigo900></Box>
     * <Box borderTopIndigo900--T20></Box> // transparentize color
     * <Box borderTopIndigo900--O20></Box> // opacify color
     * <Box borderTopIndigo900--L20></Box> // lighten color
     * <Box borderTopIndigo900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopIndigo900?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #312e81; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightIndigo900></Box>
     * <Box borderRightIndigo900--T20></Box> // transparentize color
     * <Box borderRightIndigo900--O20></Box> // opacify color
     * <Box borderRightIndigo900--L20></Box> // lighten color
     * <Box borderRightIndigo900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightIndigo900?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #312e81; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomIndigo900></Box>
     * <Box borderBottomIndigo900--T20></Box> // transparentize color
     * <Box borderBottomIndigo900--O20></Box> // opacify color
     * <Box borderBottomIndigo900--L20></Box> // lighten color
     * <Box borderBottomIndigo900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomIndigo900?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #312e81; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftIndigo900></Box>
     * <Box borderLeftIndigo900--T20></Box> // transparentize color
     * <Box borderLeftIndigo900--O20></Box> // opacify color
     * <Box borderLeftIndigo900--L20></Box> // lighten color
     * <Box borderLeftIndigo900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftIndigo900?: ResponsiveBoolean
    /**
     * Set border color to blue50
     * ```css
     * { border-color: #eff6ff; }
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
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #eff6ff; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopBlue50></Box>
     * <Box borderTopBlue50--T20></Box> // transparentize color
     * <Box borderTopBlue50--O20></Box> // opacify color
     * <Box borderTopBlue50--L20></Box> // lighten color
     * <Box borderTopBlue50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopBlue50?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #eff6ff; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightBlue50></Box>
     * <Box borderRightBlue50--T20></Box> // transparentize color
     * <Box borderRightBlue50--O20></Box> // opacify color
     * <Box borderRightBlue50--L20></Box> // lighten color
     * <Box borderRightBlue50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightBlue50?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #eff6ff; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomBlue50></Box>
     * <Box borderBottomBlue50--T20></Box> // transparentize color
     * <Box borderBottomBlue50--O20></Box> // opacify color
     * <Box borderBottomBlue50--L20></Box> // lighten color
     * <Box borderBottomBlue50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomBlue50?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #eff6ff; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftBlue50></Box>
     * <Box borderLeftBlue50--T20></Box> // transparentize color
     * <Box borderLeftBlue50--O20></Box> // opacify color
     * <Box borderLeftBlue50--L20></Box> // lighten color
     * <Box borderLeftBlue50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftBlue50?: ResponsiveBoolean
    /**
     * Set border color to blue100
     * ```css
     * { border-color: #dbeafe; }
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
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #dbeafe; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopBlue100></Box>
     * <Box borderTopBlue100--T20></Box> // transparentize color
     * <Box borderTopBlue100--O20></Box> // opacify color
     * <Box borderTopBlue100--L20></Box> // lighten color
     * <Box borderTopBlue100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopBlue100?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #dbeafe; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightBlue100></Box>
     * <Box borderRightBlue100--T20></Box> // transparentize color
     * <Box borderRightBlue100--O20></Box> // opacify color
     * <Box borderRightBlue100--L20></Box> // lighten color
     * <Box borderRightBlue100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightBlue100?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #dbeafe; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomBlue100></Box>
     * <Box borderBottomBlue100--T20></Box> // transparentize color
     * <Box borderBottomBlue100--O20></Box> // opacify color
     * <Box borderBottomBlue100--L20></Box> // lighten color
     * <Box borderBottomBlue100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomBlue100?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #dbeafe; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftBlue100></Box>
     * <Box borderLeftBlue100--T20></Box> // transparentize color
     * <Box borderLeftBlue100--O20></Box> // opacify color
     * <Box borderLeftBlue100--L20></Box> // lighten color
     * <Box borderLeftBlue100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftBlue100?: ResponsiveBoolean
    /**
     * Set border color to blue200
     * ```css
     * { border-color: #bfdbfe; }
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
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #bfdbfe; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopBlue200></Box>
     * <Box borderTopBlue200--T20></Box> // transparentize color
     * <Box borderTopBlue200--O20></Box> // opacify color
     * <Box borderTopBlue200--L20></Box> // lighten color
     * <Box borderTopBlue200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopBlue200?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #bfdbfe; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightBlue200></Box>
     * <Box borderRightBlue200--T20></Box> // transparentize color
     * <Box borderRightBlue200--O20></Box> // opacify color
     * <Box borderRightBlue200--L20></Box> // lighten color
     * <Box borderRightBlue200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightBlue200?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #bfdbfe; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomBlue200></Box>
     * <Box borderBottomBlue200--T20></Box> // transparentize color
     * <Box borderBottomBlue200--O20></Box> // opacify color
     * <Box borderBottomBlue200--L20></Box> // lighten color
     * <Box borderBottomBlue200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomBlue200?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #bfdbfe; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftBlue200></Box>
     * <Box borderLeftBlue200--T20></Box> // transparentize color
     * <Box borderLeftBlue200--O20></Box> // opacify color
     * <Box borderLeftBlue200--L20></Box> // lighten color
     * <Box borderLeftBlue200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftBlue200?: ResponsiveBoolean
    /**
     * Set border color to blue300
     * ```css
     * { border-color: #93c5fd; }
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
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #93c5fd; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopBlue300></Box>
     * <Box borderTopBlue300--T20></Box> // transparentize color
     * <Box borderTopBlue300--O20></Box> // opacify color
     * <Box borderTopBlue300--L20></Box> // lighten color
     * <Box borderTopBlue300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopBlue300?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #93c5fd; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightBlue300></Box>
     * <Box borderRightBlue300--T20></Box> // transparentize color
     * <Box borderRightBlue300--O20></Box> // opacify color
     * <Box borderRightBlue300--L20></Box> // lighten color
     * <Box borderRightBlue300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightBlue300?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #93c5fd; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomBlue300></Box>
     * <Box borderBottomBlue300--T20></Box> // transparentize color
     * <Box borderBottomBlue300--O20></Box> // opacify color
     * <Box borderBottomBlue300--L20></Box> // lighten color
     * <Box borderBottomBlue300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomBlue300?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #93c5fd; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftBlue300></Box>
     * <Box borderLeftBlue300--T20></Box> // transparentize color
     * <Box borderLeftBlue300--O20></Box> // opacify color
     * <Box borderLeftBlue300--L20></Box> // lighten color
     * <Box borderLeftBlue300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftBlue300?: ResponsiveBoolean
    /**
     * Set border color to blue400
     * ```css
     * { border-color: #60a5fa; }
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
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #60a5fa; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopBlue400></Box>
     * <Box borderTopBlue400--T20></Box> // transparentize color
     * <Box borderTopBlue400--O20></Box> // opacify color
     * <Box borderTopBlue400--L20></Box> // lighten color
     * <Box borderTopBlue400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopBlue400?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #60a5fa; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightBlue400></Box>
     * <Box borderRightBlue400--T20></Box> // transparentize color
     * <Box borderRightBlue400--O20></Box> // opacify color
     * <Box borderRightBlue400--L20></Box> // lighten color
     * <Box borderRightBlue400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightBlue400?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #60a5fa; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomBlue400></Box>
     * <Box borderBottomBlue400--T20></Box> // transparentize color
     * <Box borderBottomBlue400--O20></Box> // opacify color
     * <Box borderBottomBlue400--L20></Box> // lighten color
     * <Box borderBottomBlue400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomBlue400?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #60a5fa; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftBlue400></Box>
     * <Box borderLeftBlue400--T20></Box> // transparentize color
     * <Box borderLeftBlue400--O20></Box> // opacify color
     * <Box borderLeftBlue400--L20></Box> // lighten color
     * <Box borderLeftBlue400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftBlue400?: ResponsiveBoolean
    /**
     * Set border color to blue500
     * ```css
     * { border-color: #3b82f6; }
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
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #3b82f6; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopBlue500></Box>
     * <Box borderTopBlue500--T20></Box> // transparentize color
     * <Box borderTopBlue500--O20></Box> // opacify color
     * <Box borderTopBlue500--L20></Box> // lighten color
     * <Box borderTopBlue500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopBlue500?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #3b82f6; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightBlue500></Box>
     * <Box borderRightBlue500--T20></Box> // transparentize color
     * <Box borderRightBlue500--O20></Box> // opacify color
     * <Box borderRightBlue500--L20></Box> // lighten color
     * <Box borderRightBlue500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightBlue500?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #3b82f6; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomBlue500></Box>
     * <Box borderBottomBlue500--T20></Box> // transparentize color
     * <Box borderBottomBlue500--O20></Box> // opacify color
     * <Box borderBottomBlue500--L20></Box> // lighten color
     * <Box borderBottomBlue500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomBlue500?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #3b82f6; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftBlue500></Box>
     * <Box borderLeftBlue500--T20></Box> // transparentize color
     * <Box borderLeftBlue500--O20></Box> // opacify color
     * <Box borderLeftBlue500--L20></Box> // lighten color
     * <Box borderLeftBlue500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftBlue500?: ResponsiveBoolean
    /**
     * Set border color to blue600
     * ```css
     * { border-color: #2563eb; }
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
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #2563eb; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopBlue600></Box>
     * <Box borderTopBlue600--T20></Box> // transparentize color
     * <Box borderTopBlue600--O20></Box> // opacify color
     * <Box borderTopBlue600--L20></Box> // lighten color
     * <Box borderTopBlue600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopBlue600?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #2563eb; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightBlue600></Box>
     * <Box borderRightBlue600--T20></Box> // transparentize color
     * <Box borderRightBlue600--O20></Box> // opacify color
     * <Box borderRightBlue600--L20></Box> // lighten color
     * <Box borderRightBlue600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightBlue600?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #2563eb; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomBlue600></Box>
     * <Box borderBottomBlue600--T20></Box> // transparentize color
     * <Box borderBottomBlue600--O20></Box> // opacify color
     * <Box borderBottomBlue600--L20></Box> // lighten color
     * <Box borderBottomBlue600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomBlue600?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #2563eb; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftBlue600></Box>
     * <Box borderLeftBlue600--T20></Box> // transparentize color
     * <Box borderLeftBlue600--O20></Box> // opacify color
     * <Box borderLeftBlue600--L20></Box> // lighten color
     * <Box borderLeftBlue600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftBlue600?: ResponsiveBoolean
    /**
     * Set border color to blue700
     * ```css
     * { border-color: #1d4ed8; }
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
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #1d4ed8; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopBlue700></Box>
     * <Box borderTopBlue700--T20></Box> // transparentize color
     * <Box borderTopBlue700--O20></Box> // opacify color
     * <Box borderTopBlue700--L20></Box> // lighten color
     * <Box borderTopBlue700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopBlue700?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #1d4ed8; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightBlue700></Box>
     * <Box borderRightBlue700--T20></Box> // transparentize color
     * <Box borderRightBlue700--O20></Box> // opacify color
     * <Box borderRightBlue700--L20></Box> // lighten color
     * <Box borderRightBlue700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightBlue700?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #1d4ed8; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomBlue700></Box>
     * <Box borderBottomBlue700--T20></Box> // transparentize color
     * <Box borderBottomBlue700--O20></Box> // opacify color
     * <Box borderBottomBlue700--L20></Box> // lighten color
     * <Box borderBottomBlue700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomBlue700?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #1d4ed8; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftBlue700></Box>
     * <Box borderLeftBlue700--T20></Box> // transparentize color
     * <Box borderLeftBlue700--O20></Box> // opacify color
     * <Box borderLeftBlue700--L20></Box> // lighten color
     * <Box borderLeftBlue700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftBlue700?: ResponsiveBoolean
    /**
     * Set border color to blue800
     * ```css
     * { border-color: #1e40af; }
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
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #1e40af; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopBlue800></Box>
     * <Box borderTopBlue800--T20></Box> // transparentize color
     * <Box borderTopBlue800--O20></Box> // opacify color
     * <Box borderTopBlue800--L20></Box> // lighten color
     * <Box borderTopBlue800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopBlue800?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #1e40af; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightBlue800></Box>
     * <Box borderRightBlue800--T20></Box> // transparentize color
     * <Box borderRightBlue800--O20></Box> // opacify color
     * <Box borderRightBlue800--L20></Box> // lighten color
     * <Box borderRightBlue800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightBlue800?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #1e40af; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomBlue800></Box>
     * <Box borderBottomBlue800--T20></Box> // transparentize color
     * <Box borderBottomBlue800--O20></Box> // opacify color
     * <Box borderBottomBlue800--L20></Box> // lighten color
     * <Box borderBottomBlue800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomBlue800?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #1e40af; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftBlue800></Box>
     * <Box borderLeftBlue800--T20></Box> // transparentize color
     * <Box borderLeftBlue800--O20></Box> // opacify color
     * <Box borderLeftBlue800--L20></Box> // lighten color
     * <Box borderLeftBlue800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftBlue800?: ResponsiveBoolean
    /**
     * Set border color to blue900
     * ```css
     * { border-color: #1e3a8a; }
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
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #1e3a8a; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopBlue900></Box>
     * <Box borderTopBlue900--T20></Box> // transparentize color
     * <Box borderTopBlue900--O20></Box> // opacify color
     * <Box borderTopBlue900--L20></Box> // lighten color
     * <Box borderTopBlue900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopBlue900?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #1e3a8a; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightBlue900></Box>
     * <Box borderRightBlue900--T20></Box> // transparentize color
     * <Box borderRightBlue900--O20></Box> // opacify color
     * <Box borderRightBlue900--L20></Box> // lighten color
     * <Box borderRightBlue900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightBlue900?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #1e3a8a; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomBlue900></Box>
     * <Box borderBottomBlue900--T20></Box> // transparentize color
     * <Box borderBottomBlue900--O20></Box> // opacify color
     * <Box borderBottomBlue900--L20></Box> // lighten color
     * <Box borderBottomBlue900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomBlue900?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #1e3a8a; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftBlue900></Box>
     * <Box borderLeftBlue900--T20></Box> // transparentize color
     * <Box borderLeftBlue900--O20></Box> // opacify color
     * <Box borderLeftBlue900--L20></Box> // lighten color
     * <Box borderLeftBlue900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftBlue900?: ResponsiveBoolean
    /**
     * Set border color to lightBlue50
     * ```css
     * { border-color: #f0f9ff; }
     * ```
     * @example
     * ```tsx
     * <Box borderLightBlue50></Box>
     * <Box borderLightBlue50--T20></Box> // transparentize color
     * <Box borderLightBlue50--O20></Box> // opacify color
     * <Box borderLightBlue50--L20></Box> // lighten color
     * <Box borderLightBlue50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLightBlue50?: ResponsiveBoolean
    /**
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #f0f9ff; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopLightBlue50></Box>
     * <Box borderTopLightBlue50--T20></Box> // transparentize color
     * <Box borderTopLightBlue50--O20></Box> // opacify color
     * <Box borderTopLightBlue50--L20></Box> // lighten color
     * <Box borderTopLightBlue50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopLightBlue50?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #f0f9ff; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightLightBlue50></Box>
     * <Box borderRightLightBlue50--T20></Box> // transparentize color
     * <Box borderRightLightBlue50--O20></Box> // opacify color
     * <Box borderRightLightBlue50--L20></Box> // lighten color
     * <Box borderRightLightBlue50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightLightBlue50?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #f0f9ff; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomLightBlue50></Box>
     * <Box borderBottomLightBlue50--T20></Box> // transparentize color
     * <Box borderBottomLightBlue50--O20></Box> // opacify color
     * <Box borderBottomLightBlue50--L20></Box> // lighten color
     * <Box borderBottomLightBlue50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomLightBlue50?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #f0f9ff; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftLightBlue50></Box>
     * <Box borderLeftLightBlue50--T20></Box> // transparentize color
     * <Box borderLeftLightBlue50--O20></Box> // opacify color
     * <Box borderLeftLightBlue50--L20></Box> // lighten color
     * <Box borderLeftLightBlue50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftLightBlue50?: ResponsiveBoolean
    /**
     * Set border color to lightBlue100
     * ```css
     * { border-color: #e0f2fe; }
     * ```
     * @example
     * ```tsx
     * <Box borderLightBlue100></Box>
     * <Box borderLightBlue100--T20></Box> // transparentize color
     * <Box borderLightBlue100--O20></Box> // opacify color
     * <Box borderLightBlue100--L20></Box> // lighten color
     * <Box borderLightBlue100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLightBlue100?: ResponsiveBoolean
    /**
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #e0f2fe; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopLightBlue100></Box>
     * <Box borderTopLightBlue100--T20></Box> // transparentize color
     * <Box borderTopLightBlue100--O20></Box> // opacify color
     * <Box borderTopLightBlue100--L20></Box> // lighten color
     * <Box borderTopLightBlue100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopLightBlue100?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #e0f2fe; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightLightBlue100></Box>
     * <Box borderRightLightBlue100--T20></Box> // transparentize color
     * <Box borderRightLightBlue100--O20></Box> // opacify color
     * <Box borderRightLightBlue100--L20></Box> // lighten color
     * <Box borderRightLightBlue100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightLightBlue100?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #e0f2fe; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomLightBlue100></Box>
     * <Box borderBottomLightBlue100--T20></Box> // transparentize color
     * <Box borderBottomLightBlue100--O20></Box> // opacify color
     * <Box borderBottomLightBlue100--L20></Box> // lighten color
     * <Box borderBottomLightBlue100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomLightBlue100?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #e0f2fe; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftLightBlue100></Box>
     * <Box borderLeftLightBlue100--T20></Box> // transparentize color
     * <Box borderLeftLightBlue100--O20></Box> // opacify color
     * <Box borderLeftLightBlue100--L20></Box> // lighten color
     * <Box borderLeftLightBlue100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftLightBlue100?: ResponsiveBoolean
    /**
     * Set border color to lightBlue200
     * ```css
     * { border-color: #bae6fd; }
     * ```
     * @example
     * ```tsx
     * <Box borderLightBlue200></Box>
     * <Box borderLightBlue200--T20></Box> // transparentize color
     * <Box borderLightBlue200--O20></Box> // opacify color
     * <Box borderLightBlue200--L20></Box> // lighten color
     * <Box borderLightBlue200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLightBlue200?: ResponsiveBoolean
    /**
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #bae6fd; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopLightBlue200></Box>
     * <Box borderTopLightBlue200--T20></Box> // transparentize color
     * <Box borderTopLightBlue200--O20></Box> // opacify color
     * <Box borderTopLightBlue200--L20></Box> // lighten color
     * <Box borderTopLightBlue200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopLightBlue200?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #bae6fd; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightLightBlue200></Box>
     * <Box borderRightLightBlue200--T20></Box> // transparentize color
     * <Box borderRightLightBlue200--O20></Box> // opacify color
     * <Box borderRightLightBlue200--L20></Box> // lighten color
     * <Box borderRightLightBlue200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightLightBlue200?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #bae6fd; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomLightBlue200></Box>
     * <Box borderBottomLightBlue200--T20></Box> // transparentize color
     * <Box borderBottomLightBlue200--O20></Box> // opacify color
     * <Box borderBottomLightBlue200--L20></Box> // lighten color
     * <Box borderBottomLightBlue200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomLightBlue200?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #bae6fd; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftLightBlue200></Box>
     * <Box borderLeftLightBlue200--T20></Box> // transparentize color
     * <Box borderLeftLightBlue200--O20></Box> // opacify color
     * <Box borderLeftLightBlue200--L20></Box> // lighten color
     * <Box borderLeftLightBlue200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftLightBlue200?: ResponsiveBoolean
    /**
     * Set border color to lightBlue300
     * ```css
     * { border-color: #7dd3fc; }
     * ```
     * @example
     * ```tsx
     * <Box borderLightBlue300></Box>
     * <Box borderLightBlue300--T20></Box> // transparentize color
     * <Box borderLightBlue300--O20></Box> // opacify color
     * <Box borderLightBlue300--L20></Box> // lighten color
     * <Box borderLightBlue300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLightBlue300?: ResponsiveBoolean
    /**
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #7dd3fc; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopLightBlue300></Box>
     * <Box borderTopLightBlue300--T20></Box> // transparentize color
     * <Box borderTopLightBlue300--O20></Box> // opacify color
     * <Box borderTopLightBlue300--L20></Box> // lighten color
     * <Box borderTopLightBlue300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopLightBlue300?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #7dd3fc; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightLightBlue300></Box>
     * <Box borderRightLightBlue300--T20></Box> // transparentize color
     * <Box borderRightLightBlue300--O20></Box> // opacify color
     * <Box borderRightLightBlue300--L20></Box> // lighten color
     * <Box borderRightLightBlue300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightLightBlue300?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #7dd3fc; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomLightBlue300></Box>
     * <Box borderBottomLightBlue300--T20></Box> // transparentize color
     * <Box borderBottomLightBlue300--O20></Box> // opacify color
     * <Box borderBottomLightBlue300--L20></Box> // lighten color
     * <Box borderBottomLightBlue300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomLightBlue300?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #7dd3fc; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftLightBlue300></Box>
     * <Box borderLeftLightBlue300--T20></Box> // transparentize color
     * <Box borderLeftLightBlue300--O20></Box> // opacify color
     * <Box borderLeftLightBlue300--L20></Box> // lighten color
     * <Box borderLeftLightBlue300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftLightBlue300?: ResponsiveBoolean
    /**
     * Set border color to lightBlue400
     * ```css
     * { border-color: #38bdf8; }
     * ```
     * @example
     * ```tsx
     * <Box borderLightBlue400></Box>
     * <Box borderLightBlue400--T20></Box> // transparentize color
     * <Box borderLightBlue400--O20></Box> // opacify color
     * <Box borderLightBlue400--L20></Box> // lighten color
     * <Box borderLightBlue400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLightBlue400?: ResponsiveBoolean
    /**
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #38bdf8; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopLightBlue400></Box>
     * <Box borderTopLightBlue400--T20></Box> // transparentize color
     * <Box borderTopLightBlue400--O20></Box> // opacify color
     * <Box borderTopLightBlue400--L20></Box> // lighten color
     * <Box borderTopLightBlue400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopLightBlue400?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #38bdf8; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightLightBlue400></Box>
     * <Box borderRightLightBlue400--T20></Box> // transparentize color
     * <Box borderRightLightBlue400--O20></Box> // opacify color
     * <Box borderRightLightBlue400--L20></Box> // lighten color
     * <Box borderRightLightBlue400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightLightBlue400?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #38bdf8; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomLightBlue400></Box>
     * <Box borderBottomLightBlue400--T20></Box> // transparentize color
     * <Box borderBottomLightBlue400--O20></Box> // opacify color
     * <Box borderBottomLightBlue400--L20></Box> // lighten color
     * <Box borderBottomLightBlue400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomLightBlue400?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #38bdf8; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftLightBlue400></Box>
     * <Box borderLeftLightBlue400--T20></Box> // transparentize color
     * <Box borderLeftLightBlue400--O20></Box> // opacify color
     * <Box borderLeftLightBlue400--L20></Box> // lighten color
     * <Box borderLeftLightBlue400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftLightBlue400?: ResponsiveBoolean
    /**
     * Set border color to lightBlue500
     * ```css
     * { border-color: #0ea5e9; }
     * ```
     * @example
     * ```tsx
     * <Box borderLightBlue500></Box>
     * <Box borderLightBlue500--T20></Box> // transparentize color
     * <Box borderLightBlue500--O20></Box> // opacify color
     * <Box borderLightBlue500--L20></Box> // lighten color
     * <Box borderLightBlue500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLightBlue500?: ResponsiveBoolean
    /**
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #0ea5e9; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopLightBlue500></Box>
     * <Box borderTopLightBlue500--T20></Box> // transparentize color
     * <Box borderTopLightBlue500--O20></Box> // opacify color
     * <Box borderTopLightBlue500--L20></Box> // lighten color
     * <Box borderTopLightBlue500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopLightBlue500?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #0ea5e9; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightLightBlue500></Box>
     * <Box borderRightLightBlue500--T20></Box> // transparentize color
     * <Box borderRightLightBlue500--O20></Box> // opacify color
     * <Box borderRightLightBlue500--L20></Box> // lighten color
     * <Box borderRightLightBlue500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightLightBlue500?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #0ea5e9; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomLightBlue500></Box>
     * <Box borderBottomLightBlue500--T20></Box> // transparentize color
     * <Box borderBottomLightBlue500--O20></Box> // opacify color
     * <Box borderBottomLightBlue500--L20></Box> // lighten color
     * <Box borderBottomLightBlue500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomLightBlue500?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #0ea5e9; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftLightBlue500></Box>
     * <Box borderLeftLightBlue500--T20></Box> // transparentize color
     * <Box borderLeftLightBlue500--O20></Box> // opacify color
     * <Box borderLeftLightBlue500--L20></Box> // lighten color
     * <Box borderLeftLightBlue500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftLightBlue500?: ResponsiveBoolean
    /**
     * Set border color to lightBlue600
     * ```css
     * { border-color: #0284c7; }
     * ```
     * @example
     * ```tsx
     * <Box borderLightBlue600></Box>
     * <Box borderLightBlue600--T20></Box> // transparentize color
     * <Box borderLightBlue600--O20></Box> // opacify color
     * <Box borderLightBlue600--L20></Box> // lighten color
     * <Box borderLightBlue600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLightBlue600?: ResponsiveBoolean
    /**
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #0284c7; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopLightBlue600></Box>
     * <Box borderTopLightBlue600--T20></Box> // transparentize color
     * <Box borderTopLightBlue600--O20></Box> // opacify color
     * <Box borderTopLightBlue600--L20></Box> // lighten color
     * <Box borderTopLightBlue600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopLightBlue600?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #0284c7; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightLightBlue600></Box>
     * <Box borderRightLightBlue600--T20></Box> // transparentize color
     * <Box borderRightLightBlue600--O20></Box> // opacify color
     * <Box borderRightLightBlue600--L20></Box> // lighten color
     * <Box borderRightLightBlue600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightLightBlue600?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #0284c7; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomLightBlue600></Box>
     * <Box borderBottomLightBlue600--T20></Box> // transparentize color
     * <Box borderBottomLightBlue600--O20></Box> // opacify color
     * <Box borderBottomLightBlue600--L20></Box> // lighten color
     * <Box borderBottomLightBlue600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomLightBlue600?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #0284c7; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftLightBlue600></Box>
     * <Box borderLeftLightBlue600--T20></Box> // transparentize color
     * <Box borderLeftLightBlue600--O20></Box> // opacify color
     * <Box borderLeftLightBlue600--L20></Box> // lighten color
     * <Box borderLeftLightBlue600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftLightBlue600?: ResponsiveBoolean
    /**
     * Set border color to lightBlue700
     * ```css
     * { border-color: #0369a1; }
     * ```
     * @example
     * ```tsx
     * <Box borderLightBlue700></Box>
     * <Box borderLightBlue700--T20></Box> // transparentize color
     * <Box borderLightBlue700--O20></Box> // opacify color
     * <Box borderLightBlue700--L20></Box> // lighten color
     * <Box borderLightBlue700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLightBlue700?: ResponsiveBoolean
    /**
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #0369a1; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopLightBlue700></Box>
     * <Box borderTopLightBlue700--T20></Box> // transparentize color
     * <Box borderTopLightBlue700--O20></Box> // opacify color
     * <Box borderTopLightBlue700--L20></Box> // lighten color
     * <Box borderTopLightBlue700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopLightBlue700?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #0369a1; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightLightBlue700></Box>
     * <Box borderRightLightBlue700--T20></Box> // transparentize color
     * <Box borderRightLightBlue700--O20></Box> // opacify color
     * <Box borderRightLightBlue700--L20></Box> // lighten color
     * <Box borderRightLightBlue700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightLightBlue700?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #0369a1; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomLightBlue700></Box>
     * <Box borderBottomLightBlue700--T20></Box> // transparentize color
     * <Box borderBottomLightBlue700--O20></Box> // opacify color
     * <Box borderBottomLightBlue700--L20></Box> // lighten color
     * <Box borderBottomLightBlue700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomLightBlue700?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #0369a1; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftLightBlue700></Box>
     * <Box borderLeftLightBlue700--T20></Box> // transparentize color
     * <Box borderLeftLightBlue700--O20></Box> // opacify color
     * <Box borderLeftLightBlue700--L20></Box> // lighten color
     * <Box borderLeftLightBlue700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftLightBlue700?: ResponsiveBoolean
    /**
     * Set border color to lightBlue800
     * ```css
     * { border-color: #075985; }
     * ```
     * @example
     * ```tsx
     * <Box borderLightBlue800></Box>
     * <Box borderLightBlue800--T20></Box> // transparentize color
     * <Box borderLightBlue800--O20></Box> // opacify color
     * <Box borderLightBlue800--L20></Box> // lighten color
     * <Box borderLightBlue800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLightBlue800?: ResponsiveBoolean
    /**
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #075985; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopLightBlue800></Box>
     * <Box borderTopLightBlue800--T20></Box> // transparentize color
     * <Box borderTopLightBlue800--O20></Box> // opacify color
     * <Box borderTopLightBlue800--L20></Box> // lighten color
     * <Box borderTopLightBlue800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopLightBlue800?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #075985; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightLightBlue800></Box>
     * <Box borderRightLightBlue800--T20></Box> // transparentize color
     * <Box borderRightLightBlue800--O20></Box> // opacify color
     * <Box borderRightLightBlue800--L20></Box> // lighten color
     * <Box borderRightLightBlue800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightLightBlue800?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #075985; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomLightBlue800></Box>
     * <Box borderBottomLightBlue800--T20></Box> // transparentize color
     * <Box borderBottomLightBlue800--O20></Box> // opacify color
     * <Box borderBottomLightBlue800--L20></Box> // lighten color
     * <Box borderBottomLightBlue800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomLightBlue800?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #075985; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftLightBlue800></Box>
     * <Box borderLeftLightBlue800--T20></Box> // transparentize color
     * <Box borderLeftLightBlue800--O20></Box> // opacify color
     * <Box borderLeftLightBlue800--L20></Box> // lighten color
     * <Box borderLeftLightBlue800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftLightBlue800?: ResponsiveBoolean
    /**
     * Set border color to lightBlue900
     * ```css
     * { border-color: #0c4a6e; }
     * ```
     * @example
     * ```tsx
     * <Box borderLightBlue900></Box>
     * <Box borderLightBlue900--T20></Box> // transparentize color
     * <Box borderLightBlue900--O20></Box> // opacify color
     * <Box borderLightBlue900--L20></Box> // lighten color
     * <Box borderLightBlue900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLightBlue900?: ResponsiveBoolean
    /**
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #0c4a6e; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopLightBlue900></Box>
     * <Box borderTopLightBlue900--T20></Box> // transparentize color
     * <Box borderTopLightBlue900--O20></Box> // opacify color
     * <Box borderTopLightBlue900--L20></Box> // lighten color
     * <Box borderTopLightBlue900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopLightBlue900?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #0c4a6e; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightLightBlue900></Box>
     * <Box borderRightLightBlue900--T20></Box> // transparentize color
     * <Box borderRightLightBlue900--O20></Box> // opacify color
     * <Box borderRightLightBlue900--L20></Box> // lighten color
     * <Box borderRightLightBlue900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightLightBlue900?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #0c4a6e; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomLightBlue900></Box>
     * <Box borderBottomLightBlue900--T20></Box> // transparentize color
     * <Box borderBottomLightBlue900--O20></Box> // opacify color
     * <Box borderBottomLightBlue900--L20></Box> // lighten color
     * <Box borderBottomLightBlue900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomLightBlue900?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #0c4a6e; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftLightBlue900></Box>
     * <Box borderLeftLightBlue900--T20></Box> // transparentize color
     * <Box borderLeftLightBlue900--O20></Box> // opacify color
     * <Box borderLeftLightBlue900--L20></Box> // lighten color
     * <Box borderLeftLightBlue900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftLightBlue900?: ResponsiveBoolean
    /**
     * Set border color to cyan50
     * ```css
     * { border-color: #ecfeff; }
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
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #ecfeff; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopCyan50></Box>
     * <Box borderTopCyan50--T20></Box> // transparentize color
     * <Box borderTopCyan50--O20></Box> // opacify color
     * <Box borderTopCyan50--L20></Box> // lighten color
     * <Box borderTopCyan50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopCyan50?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #ecfeff; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightCyan50></Box>
     * <Box borderRightCyan50--T20></Box> // transparentize color
     * <Box borderRightCyan50--O20></Box> // opacify color
     * <Box borderRightCyan50--L20></Box> // lighten color
     * <Box borderRightCyan50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightCyan50?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #ecfeff; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomCyan50></Box>
     * <Box borderBottomCyan50--T20></Box> // transparentize color
     * <Box borderBottomCyan50--O20></Box> // opacify color
     * <Box borderBottomCyan50--L20></Box> // lighten color
     * <Box borderBottomCyan50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomCyan50?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #ecfeff; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftCyan50></Box>
     * <Box borderLeftCyan50--T20></Box> // transparentize color
     * <Box borderLeftCyan50--O20></Box> // opacify color
     * <Box borderLeftCyan50--L20></Box> // lighten color
     * <Box borderLeftCyan50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftCyan50?: ResponsiveBoolean
    /**
     * Set border color to cyan100
     * ```css
     * { border-color: #cffafe; }
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
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #cffafe; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopCyan100></Box>
     * <Box borderTopCyan100--T20></Box> // transparentize color
     * <Box borderTopCyan100--O20></Box> // opacify color
     * <Box borderTopCyan100--L20></Box> // lighten color
     * <Box borderTopCyan100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopCyan100?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #cffafe; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightCyan100></Box>
     * <Box borderRightCyan100--T20></Box> // transparentize color
     * <Box borderRightCyan100--O20></Box> // opacify color
     * <Box borderRightCyan100--L20></Box> // lighten color
     * <Box borderRightCyan100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightCyan100?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #cffafe; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomCyan100></Box>
     * <Box borderBottomCyan100--T20></Box> // transparentize color
     * <Box borderBottomCyan100--O20></Box> // opacify color
     * <Box borderBottomCyan100--L20></Box> // lighten color
     * <Box borderBottomCyan100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomCyan100?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #cffafe; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftCyan100></Box>
     * <Box borderLeftCyan100--T20></Box> // transparentize color
     * <Box borderLeftCyan100--O20></Box> // opacify color
     * <Box borderLeftCyan100--L20></Box> // lighten color
     * <Box borderLeftCyan100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftCyan100?: ResponsiveBoolean
    /**
     * Set border color to cyan200
     * ```css
     * { border-color: #a5f3fc; }
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
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #a5f3fc; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopCyan200></Box>
     * <Box borderTopCyan200--T20></Box> // transparentize color
     * <Box borderTopCyan200--O20></Box> // opacify color
     * <Box borderTopCyan200--L20></Box> // lighten color
     * <Box borderTopCyan200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopCyan200?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #a5f3fc; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightCyan200></Box>
     * <Box borderRightCyan200--T20></Box> // transparentize color
     * <Box borderRightCyan200--O20></Box> // opacify color
     * <Box borderRightCyan200--L20></Box> // lighten color
     * <Box borderRightCyan200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightCyan200?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #a5f3fc; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomCyan200></Box>
     * <Box borderBottomCyan200--T20></Box> // transparentize color
     * <Box borderBottomCyan200--O20></Box> // opacify color
     * <Box borderBottomCyan200--L20></Box> // lighten color
     * <Box borderBottomCyan200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomCyan200?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #a5f3fc; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftCyan200></Box>
     * <Box borderLeftCyan200--T20></Box> // transparentize color
     * <Box borderLeftCyan200--O20></Box> // opacify color
     * <Box borderLeftCyan200--L20></Box> // lighten color
     * <Box borderLeftCyan200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftCyan200?: ResponsiveBoolean
    /**
     * Set border color to cyan300
     * ```css
     * { border-color: #67e8f9; }
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
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #67e8f9; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopCyan300></Box>
     * <Box borderTopCyan300--T20></Box> // transparentize color
     * <Box borderTopCyan300--O20></Box> // opacify color
     * <Box borderTopCyan300--L20></Box> // lighten color
     * <Box borderTopCyan300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopCyan300?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #67e8f9; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightCyan300></Box>
     * <Box borderRightCyan300--T20></Box> // transparentize color
     * <Box borderRightCyan300--O20></Box> // opacify color
     * <Box borderRightCyan300--L20></Box> // lighten color
     * <Box borderRightCyan300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightCyan300?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #67e8f9; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomCyan300></Box>
     * <Box borderBottomCyan300--T20></Box> // transparentize color
     * <Box borderBottomCyan300--O20></Box> // opacify color
     * <Box borderBottomCyan300--L20></Box> // lighten color
     * <Box borderBottomCyan300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomCyan300?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #67e8f9; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftCyan300></Box>
     * <Box borderLeftCyan300--T20></Box> // transparentize color
     * <Box borderLeftCyan300--O20></Box> // opacify color
     * <Box borderLeftCyan300--L20></Box> // lighten color
     * <Box borderLeftCyan300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftCyan300?: ResponsiveBoolean
    /**
     * Set border color to cyan400
     * ```css
     * { border-color: #22d3ee; }
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
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #22d3ee; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopCyan400></Box>
     * <Box borderTopCyan400--T20></Box> // transparentize color
     * <Box borderTopCyan400--O20></Box> // opacify color
     * <Box borderTopCyan400--L20></Box> // lighten color
     * <Box borderTopCyan400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopCyan400?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #22d3ee; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightCyan400></Box>
     * <Box borderRightCyan400--T20></Box> // transparentize color
     * <Box borderRightCyan400--O20></Box> // opacify color
     * <Box borderRightCyan400--L20></Box> // lighten color
     * <Box borderRightCyan400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightCyan400?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #22d3ee; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomCyan400></Box>
     * <Box borderBottomCyan400--T20></Box> // transparentize color
     * <Box borderBottomCyan400--O20></Box> // opacify color
     * <Box borderBottomCyan400--L20></Box> // lighten color
     * <Box borderBottomCyan400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomCyan400?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #22d3ee; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftCyan400></Box>
     * <Box borderLeftCyan400--T20></Box> // transparentize color
     * <Box borderLeftCyan400--O20></Box> // opacify color
     * <Box borderLeftCyan400--L20></Box> // lighten color
     * <Box borderLeftCyan400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftCyan400?: ResponsiveBoolean
    /**
     * Set border color to cyan500
     * ```css
     * { border-color: #06b6d4; }
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
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #06b6d4; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopCyan500></Box>
     * <Box borderTopCyan500--T20></Box> // transparentize color
     * <Box borderTopCyan500--O20></Box> // opacify color
     * <Box borderTopCyan500--L20></Box> // lighten color
     * <Box borderTopCyan500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopCyan500?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #06b6d4; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightCyan500></Box>
     * <Box borderRightCyan500--T20></Box> // transparentize color
     * <Box borderRightCyan500--O20></Box> // opacify color
     * <Box borderRightCyan500--L20></Box> // lighten color
     * <Box borderRightCyan500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightCyan500?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #06b6d4; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomCyan500></Box>
     * <Box borderBottomCyan500--T20></Box> // transparentize color
     * <Box borderBottomCyan500--O20></Box> // opacify color
     * <Box borderBottomCyan500--L20></Box> // lighten color
     * <Box borderBottomCyan500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomCyan500?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #06b6d4; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftCyan500></Box>
     * <Box borderLeftCyan500--T20></Box> // transparentize color
     * <Box borderLeftCyan500--O20></Box> // opacify color
     * <Box borderLeftCyan500--L20></Box> // lighten color
     * <Box borderLeftCyan500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftCyan500?: ResponsiveBoolean
    /**
     * Set border color to cyan600
     * ```css
     * { border-color: #0891b2; }
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
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #0891b2; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopCyan600></Box>
     * <Box borderTopCyan600--T20></Box> // transparentize color
     * <Box borderTopCyan600--O20></Box> // opacify color
     * <Box borderTopCyan600--L20></Box> // lighten color
     * <Box borderTopCyan600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopCyan600?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #0891b2; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightCyan600></Box>
     * <Box borderRightCyan600--T20></Box> // transparentize color
     * <Box borderRightCyan600--O20></Box> // opacify color
     * <Box borderRightCyan600--L20></Box> // lighten color
     * <Box borderRightCyan600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightCyan600?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #0891b2; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomCyan600></Box>
     * <Box borderBottomCyan600--T20></Box> // transparentize color
     * <Box borderBottomCyan600--O20></Box> // opacify color
     * <Box borderBottomCyan600--L20></Box> // lighten color
     * <Box borderBottomCyan600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomCyan600?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #0891b2; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftCyan600></Box>
     * <Box borderLeftCyan600--T20></Box> // transparentize color
     * <Box borderLeftCyan600--O20></Box> // opacify color
     * <Box borderLeftCyan600--L20></Box> // lighten color
     * <Box borderLeftCyan600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftCyan600?: ResponsiveBoolean
    /**
     * Set border color to cyan700
     * ```css
     * { border-color: #0e7490; }
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
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #0e7490; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopCyan700></Box>
     * <Box borderTopCyan700--T20></Box> // transparentize color
     * <Box borderTopCyan700--O20></Box> // opacify color
     * <Box borderTopCyan700--L20></Box> // lighten color
     * <Box borderTopCyan700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopCyan700?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #0e7490; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightCyan700></Box>
     * <Box borderRightCyan700--T20></Box> // transparentize color
     * <Box borderRightCyan700--O20></Box> // opacify color
     * <Box borderRightCyan700--L20></Box> // lighten color
     * <Box borderRightCyan700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightCyan700?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #0e7490; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomCyan700></Box>
     * <Box borderBottomCyan700--T20></Box> // transparentize color
     * <Box borderBottomCyan700--O20></Box> // opacify color
     * <Box borderBottomCyan700--L20></Box> // lighten color
     * <Box borderBottomCyan700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomCyan700?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #0e7490; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftCyan700></Box>
     * <Box borderLeftCyan700--T20></Box> // transparentize color
     * <Box borderLeftCyan700--O20></Box> // opacify color
     * <Box borderLeftCyan700--L20></Box> // lighten color
     * <Box borderLeftCyan700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftCyan700?: ResponsiveBoolean
    /**
     * Set border color to cyan800
     * ```css
     * { border-color: #155e75; }
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
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #155e75; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopCyan800></Box>
     * <Box borderTopCyan800--T20></Box> // transparentize color
     * <Box borderTopCyan800--O20></Box> // opacify color
     * <Box borderTopCyan800--L20></Box> // lighten color
     * <Box borderTopCyan800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopCyan800?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #155e75; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightCyan800></Box>
     * <Box borderRightCyan800--T20></Box> // transparentize color
     * <Box borderRightCyan800--O20></Box> // opacify color
     * <Box borderRightCyan800--L20></Box> // lighten color
     * <Box borderRightCyan800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightCyan800?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #155e75; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomCyan800></Box>
     * <Box borderBottomCyan800--T20></Box> // transparentize color
     * <Box borderBottomCyan800--O20></Box> // opacify color
     * <Box borderBottomCyan800--L20></Box> // lighten color
     * <Box borderBottomCyan800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomCyan800?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #155e75; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftCyan800></Box>
     * <Box borderLeftCyan800--T20></Box> // transparentize color
     * <Box borderLeftCyan800--O20></Box> // opacify color
     * <Box borderLeftCyan800--L20></Box> // lighten color
     * <Box borderLeftCyan800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftCyan800?: ResponsiveBoolean
    /**
     * Set border color to cyan900
     * ```css
     * { border-color: #164e63; }
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
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #164e63; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopCyan900></Box>
     * <Box borderTopCyan900--T20></Box> // transparentize color
     * <Box borderTopCyan900--O20></Box> // opacify color
     * <Box borderTopCyan900--L20></Box> // lighten color
     * <Box borderTopCyan900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopCyan900?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #164e63; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightCyan900></Box>
     * <Box borderRightCyan900--T20></Box> // transparentize color
     * <Box borderRightCyan900--O20></Box> // opacify color
     * <Box borderRightCyan900--L20></Box> // lighten color
     * <Box borderRightCyan900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightCyan900?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #164e63; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomCyan900></Box>
     * <Box borderBottomCyan900--T20></Box> // transparentize color
     * <Box borderBottomCyan900--O20></Box> // opacify color
     * <Box borderBottomCyan900--L20></Box> // lighten color
     * <Box borderBottomCyan900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomCyan900?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #164e63; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftCyan900></Box>
     * <Box borderLeftCyan900--T20></Box> // transparentize color
     * <Box borderLeftCyan900--O20></Box> // opacify color
     * <Box borderLeftCyan900--L20></Box> // lighten color
     * <Box borderLeftCyan900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftCyan900?: ResponsiveBoolean
    /**
     * Set border color to teal50
     * ```css
     * { border-color: #f0fdfa; }
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
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #f0fdfa; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopTeal50></Box>
     * <Box borderTopTeal50--T20></Box> // transparentize color
     * <Box borderTopTeal50--O20></Box> // opacify color
     * <Box borderTopTeal50--L20></Box> // lighten color
     * <Box borderTopTeal50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopTeal50?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #f0fdfa; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightTeal50></Box>
     * <Box borderRightTeal50--T20></Box> // transparentize color
     * <Box borderRightTeal50--O20></Box> // opacify color
     * <Box borderRightTeal50--L20></Box> // lighten color
     * <Box borderRightTeal50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightTeal50?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #f0fdfa; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomTeal50></Box>
     * <Box borderBottomTeal50--T20></Box> // transparentize color
     * <Box borderBottomTeal50--O20></Box> // opacify color
     * <Box borderBottomTeal50--L20></Box> // lighten color
     * <Box borderBottomTeal50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomTeal50?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #f0fdfa; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftTeal50></Box>
     * <Box borderLeftTeal50--T20></Box> // transparentize color
     * <Box borderLeftTeal50--O20></Box> // opacify color
     * <Box borderLeftTeal50--L20></Box> // lighten color
     * <Box borderLeftTeal50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftTeal50?: ResponsiveBoolean
    /**
     * Set border color to teal100
     * ```css
     * { border-color: #ccfbf1; }
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
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #ccfbf1; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopTeal100></Box>
     * <Box borderTopTeal100--T20></Box> // transparentize color
     * <Box borderTopTeal100--O20></Box> // opacify color
     * <Box borderTopTeal100--L20></Box> // lighten color
     * <Box borderTopTeal100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopTeal100?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #ccfbf1; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightTeal100></Box>
     * <Box borderRightTeal100--T20></Box> // transparentize color
     * <Box borderRightTeal100--O20></Box> // opacify color
     * <Box borderRightTeal100--L20></Box> // lighten color
     * <Box borderRightTeal100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightTeal100?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #ccfbf1; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomTeal100></Box>
     * <Box borderBottomTeal100--T20></Box> // transparentize color
     * <Box borderBottomTeal100--O20></Box> // opacify color
     * <Box borderBottomTeal100--L20></Box> // lighten color
     * <Box borderBottomTeal100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomTeal100?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #ccfbf1; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftTeal100></Box>
     * <Box borderLeftTeal100--T20></Box> // transparentize color
     * <Box borderLeftTeal100--O20></Box> // opacify color
     * <Box borderLeftTeal100--L20></Box> // lighten color
     * <Box borderLeftTeal100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftTeal100?: ResponsiveBoolean
    /**
     * Set border color to teal200
     * ```css
     * { border-color: #99f6e4; }
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
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #99f6e4; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopTeal200></Box>
     * <Box borderTopTeal200--T20></Box> // transparentize color
     * <Box borderTopTeal200--O20></Box> // opacify color
     * <Box borderTopTeal200--L20></Box> // lighten color
     * <Box borderTopTeal200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopTeal200?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #99f6e4; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightTeal200></Box>
     * <Box borderRightTeal200--T20></Box> // transparentize color
     * <Box borderRightTeal200--O20></Box> // opacify color
     * <Box borderRightTeal200--L20></Box> // lighten color
     * <Box borderRightTeal200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightTeal200?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #99f6e4; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomTeal200></Box>
     * <Box borderBottomTeal200--T20></Box> // transparentize color
     * <Box borderBottomTeal200--O20></Box> // opacify color
     * <Box borderBottomTeal200--L20></Box> // lighten color
     * <Box borderBottomTeal200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomTeal200?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #99f6e4; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftTeal200></Box>
     * <Box borderLeftTeal200--T20></Box> // transparentize color
     * <Box borderLeftTeal200--O20></Box> // opacify color
     * <Box borderLeftTeal200--L20></Box> // lighten color
     * <Box borderLeftTeal200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftTeal200?: ResponsiveBoolean
    /**
     * Set border color to teal300
     * ```css
     * { border-color: #5eead4; }
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
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #5eead4; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopTeal300></Box>
     * <Box borderTopTeal300--T20></Box> // transparentize color
     * <Box borderTopTeal300--O20></Box> // opacify color
     * <Box borderTopTeal300--L20></Box> // lighten color
     * <Box borderTopTeal300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopTeal300?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #5eead4; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightTeal300></Box>
     * <Box borderRightTeal300--T20></Box> // transparentize color
     * <Box borderRightTeal300--O20></Box> // opacify color
     * <Box borderRightTeal300--L20></Box> // lighten color
     * <Box borderRightTeal300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightTeal300?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #5eead4; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomTeal300></Box>
     * <Box borderBottomTeal300--T20></Box> // transparentize color
     * <Box borderBottomTeal300--O20></Box> // opacify color
     * <Box borderBottomTeal300--L20></Box> // lighten color
     * <Box borderBottomTeal300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomTeal300?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #5eead4; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftTeal300></Box>
     * <Box borderLeftTeal300--T20></Box> // transparentize color
     * <Box borderLeftTeal300--O20></Box> // opacify color
     * <Box borderLeftTeal300--L20></Box> // lighten color
     * <Box borderLeftTeal300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftTeal300?: ResponsiveBoolean
    /**
     * Set border color to teal400
     * ```css
     * { border-color: #2dd4bf; }
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
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #2dd4bf; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopTeal400></Box>
     * <Box borderTopTeal400--T20></Box> // transparentize color
     * <Box borderTopTeal400--O20></Box> // opacify color
     * <Box borderTopTeal400--L20></Box> // lighten color
     * <Box borderTopTeal400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopTeal400?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #2dd4bf; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightTeal400></Box>
     * <Box borderRightTeal400--T20></Box> // transparentize color
     * <Box borderRightTeal400--O20></Box> // opacify color
     * <Box borderRightTeal400--L20></Box> // lighten color
     * <Box borderRightTeal400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightTeal400?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #2dd4bf; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomTeal400></Box>
     * <Box borderBottomTeal400--T20></Box> // transparentize color
     * <Box borderBottomTeal400--O20></Box> // opacify color
     * <Box borderBottomTeal400--L20></Box> // lighten color
     * <Box borderBottomTeal400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomTeal400?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #2dd4bf; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftTeal400></Box>
     * <Box borderLeftTeal400--T20></Box> // transparentize color
     * <Box borderLeftTeal400--O20></Box> // opacify color
     * <Box borderLeftTeal400--L20></Box> // lighten color
     * <Box borderLeftTeal400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftTeal400?: ResponsiveBoolean
    /**
     * Set border color to teal500
     * ```css
     * { border-color: #14b8a6; }
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
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #14b8a6; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopTeal500></Box>
     * <Box borderTopTeal500--T20></Box> // transparentize color
     * <Box borderTopTeal500--O20></Box> // opacify color
     * <Box borderTopTeal500--L20></Box> // lighten color
     * <Box borderTopTeal500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopTeal500?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #14b8a6; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightTeal500></Box>
     * <Box borderRightTeal500--T20></Box> // transparentize color
     * <Box borderRightTeal500--O20></Box> // opacify color
     * <Box borderRightTeal500--L20></Box> // lighten color
     * <Box borderRightTeal500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightTeal500?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #14b8a6; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomTeal500></Box>
     * <Box borderBottomTeal500--T20></Box> // transparentize color
     * <Box borderBottomTeal500--O20></Box> // opacify color
     * <Box borderBottomTeal500--L20></Box> // lighten color
     * <Box borderBottomTeal500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomTeal500?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #14b8a6; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftTeal500></Box>
     * <Box borderLeftTeal500--T20></Box> // transparentize color
     * <Box borderLeftTeal500--O20></Box> // opacify color
     * <Box borderLeftTeal500--L20></Box> // lighten color
     * <Box borderLeftTeal500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftTeal500?: ResponsiveBoolean
    /**
     * Set border color to teal600
     * ```css
     * { border-color: #0d9488; }
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
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #0d9488; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopTeal600></Box>
     * <Box borderTopTeal600--T20></Box> // transparentize color
     * <Box borderTopTeal600--O20></Box> // opacify color
     * <Box borderTopTeal600--L20></Box> // lighten color
     * <Box borderTopTeal600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopTeal600?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #0d9488; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightTeal600></Box>
     * <Box borderRightTeal600--T20></Box> // transparentize color
     * <Box borderRightTeal600--O20></Box> // opacify color
     * <Box borderRightTeal600--L20></Box> // lighten color
     * <Box borderRightTeal600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightTeal600?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #0d9488; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomTeal600></Box>
     * <Box borderBottomTeal600--T20></Box> // transparentize color
     * <Box borderBottomTeal600--O20></Box> // opacify color
     * <Box borderBottomTeal600--L20></Box> // lighten color
     * <Box borderBottomTeal600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomTeal600?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #0d9488; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftTeal600></Box>
     * <Box borderLeftTeal600--T20></Box> // transparentize color
     * <Box borderLeftTeal600--O20></Box> // opacify color
     * <Box borderLeftTeal600--L20></Box> // lighten color
     * <Box borderLeftTeal600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftTeal600?: ResponsiveBoolean
    /**
     * Set border color to teal700
     * ```css
     * { border-color: #0f766e; }
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
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #0f766e; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopTeal700></Box>
     * <Box borderTopTeal700--T20></Box> // transparentize color
     * <Box borderTopTeal700--O20></Box> // opacify color
     * <Box borderTopTeal700--L20></Box> // lighten color
     * <Box borderTopTeal700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopTeal700?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #0f766e; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightTeal700></Box>
     * <Box borderRightTeal700--T20></Box> // transparentize color
     * <Box borderRightTeal700--O20></Box> // opacify color
     * <Box borderRightTeal700--L20></Box> // lighten color
     * <Box borderRightTeal700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightTeal700?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #0f766e; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomTeal700></Box>
     * <Box borderBottomTeal700--T20></Box> // transparentize color
     * <Box borderBottomTeal700--O20></Box> // opacify color
     * <Box borderBottomTeal700--L20></Box> // lighten color
     * <Box borderBottomTeal700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomTeal700?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #0f766e; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftTeal700></Box>
     * <Box borderLeftTeal700--T20></Box> // transparentize color
     * <Box borderLeftTeal700--O20></Box> // opacify color
     * <Box borderLeftTeal700--L20></Box> // lighten color
     * <Box borderLeftTeal700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftTeal700?: ResponsiveBoolean
    /**
     * Set border color to teal800
     * ```css
     * { border-color: #115e59; }
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
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #115e59; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopTeal800></Box>
     * <Box borderTopTeal800--T20></Box> // transparentize color
     * <Box borderTopTeal800--O20></Box> // opacify color
     * <Box borderTopTeal800--L20></Box> // lighten color
     * <Box borderTopTeal800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopTeal800?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #115e59; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightTeal800></Box>
     * <Box borderRightTeal800--T20></Box> // transparentize color
     * <Box borderRightTeal800--O20></Box> // opacify color
     * <Box borderRightTeal800--L20></Box> // lighten color
     * <Box borderRightTeal800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightTeal800?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #115e59; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomTeal800></Box>
     * <Box borderBottomTeal800--T20></Box> // transparentize color
     * <Box borderBottomTeal800--O20></Box> // opacify color
     * <Box borderBottomTeal800--L20></Box> // lighten color
     * <Box borderBottomTeal800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomTeal800?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #115e59; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftTeal800></Box>
     * <Box borderLeftTeal800--T20></Box> // transparentize color
     * <Box borderLeftTeal800--O20></Box> // opacify color
     * <Box borderLeftTeal800--L20></Box> // lighten color
     * <Box borderLeftTeal800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftTeal800?: ResponsiveBoolean
    /**
     * Set border color to teal900
     * ```css
     * { border-color: #134e4a; }
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
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #134e4a; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopTeal900></Box>
     * <Box borderTopTeal900--T20></Box> // transparentize color
     * <Box borderTopTeal900--O20></Box> // opacify color
     * <Box borderTopTeal900--L20></Box> // lighten color
     * <Box borderTopTeal900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopTeal900?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #134e4a; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightTeal900></Box>
     * <Box borderRightTeal900--T20></Box> // transparentize color
     * <Box borderRightTeal900--O20></Box> // opacify color
     * <Box borderRightTeal900--L20></Box> // lighten color
     * <Box borderRightTeal900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightTeal900?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #134e4a; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomTeal900></Box>
     * <Box borderBottomTeal900--T20></Box> // transparentize color
     * <Box borderBottomTeal900--O20></Box> // opacify color
     * <Box borderBottomTeal900--L20></Box> // lighten color
     * <Box borderBottomTeal900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomTeal900?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #134e4a; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftTeal900></Box>
     * <Box borderLeftTeal900--T20></Box> // transparentize color
     * <Box borderLeftTeal900--O20></Box> // opacify color
     * <Box borderLeftTeal900--L20></Box> // lighten color
     * <Box borderLeftTeal900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftTeal900?: ResponsiveBoolean
    /**
     * Set border color to emerald50
     * ```css
     * { border-color: #ecfdf5; }
     * ```
     * @example
     * ```tsx
     * <Box borderEmerald50></Box>
     * <Box borderEmerald50--T20></Box> // transparentize color
     * <Box borderEmerald50--O20></Box> // opacify color
     * <Box borderEmerald50--L20></Box> // lighten color
     * <Box borderEmerald50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderEmerald50?: ResponsiveBoolean
    /**
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #ecfdf5; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopEmerald50></Box>
     * <Box borderTopEmerald50--T20></Box> // transparentize color
     * <Box borderTopEmerald50--O20></Box> // opacify color
     * <Box borderTopEmerald50--L20></Box> // lighten color
     * <Box borderTopEmerald50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopEmerald50?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #ecfdf5; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightEmerald50></Box>
     * <Box borderRightEmerald50--T20></Box> // transparentize color
     * <Box borderRightEmerald50--O20></Box> // opacify color
     * <Box borderRightEmerald50--L20></Box> // lighten color
     * <Box borderRightEmerald50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightEmerald50?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #ecfdf5; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomEmerald50></Box>
     * <Box borderBottomEmerald50--T20></Box> // transparentize color
     * <Box borderBottomEmerald50--O20></Box> // opacify color
     * <Box borderBottomEmerald50--L20></Box> // lighten color
     * <Box borderBottomEmerald50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomEmerald50?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #ecfdf5; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftEmerald50></Box>
     * <Box borderLeftEmerald50--T20></Box> // transparentize color
     * <Box borderLeftEmerald50--O20></Box> // opacify color
     * <Box borderLeftEmerald50--L20></Box> // lighten color
     * <Box borderLeftEmerald50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftEmerald50?: ResponsiveBoolean
    /**
     * Set border color to emerald100
     * ```css
     * { border-color: #d1fae5; }
     * ```
     * @example
     * ```tsx
     * <Box borderEmerald100></Box>
     * <Box borderEmerald100--T20></Box> // transparentize color
     * <Box borderEmerald100--O20></Box> // opacify color
     * <Box borderEmerald100--L20></Box> // lighten color
     * <Box borderEmerald100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderEmerald100?: ResponsiveBoolean
    /**
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #d1fae5; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopEmerald100></Box>
     * <Box borderTopEmerald100--T20></Box> // transparentize color
     * <Box borderTopEmerald100--O20></Box> // opacify color
     * <Box borderTopEmerald100--L20></Box> // lighten color
     * <Box borderTopEmerald100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopEmerald100?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #d1fae5; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightEmerald100></Box>
     * <Box borderRightEmerald100--T20></Box> // transparentize color
     * <Box borderRightEmerald100--O20></Box> // opacify color
     * <Box borderRightEmerald100--L20></Box> // lighten color
     * <Box borderRightEmerald100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightEmerald100?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #d1fae5; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomEmerald100></Box>
     * <Box borderBottomEmerald100--T20></Box> // transparentize color
     * <Box borderBottomEmerald100--O20></Box> // opacify color
     * <Box borderBottomEmerald100--L20></Box> // lighten color
     * <Box borderBottomEmerald100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomEmerald100?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #d1fae5; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftEmerald100></Box>
     * <Box borderLeftEmerald100--T20></Box> // transparentize color
     * <Box borderLeftEmerald100--O20></Box> // opacify color
     * <Box borderLeftEmerald100--L20></Box> // lighten color
     * <Box borderLeftEmerald100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftEmerald100?: ResponsiveBoolean
    /**
     * Set border color to emerald200
     * ```css
     * { border-color: #a7f3d0; }
     * ```
     * @example
     * ```tsx
     * <Box borderEmerald200></Box>
     * <Box borderEmerald200--T20></Box> // transparentize color
     * <Box borderEmerald200--O20></Box> // opacify color
     * <Box borderEmerald200--L20></Box> // lighten color
     * <Box borderEmerald200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderEmerald200?: ResponsiveBoolean
    /**
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #a7f3d0; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopEmerald200></Box>
     * <Box borderTopEmerald200--T20></Box> // transparentize color
     * <Box borderTopEmerald200--O20></Box> // opacify color
     * <Box borderTopEmerald200--L20></Box> // lighten color
     * <Box borderTopEmerald200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopEmerald200?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #a7f3d0; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightEmerald200></Box>
     * <Box borderRightEmerald200--T20></Box> // transparentize color
     * <Box borderRightEmerald200--O20></Box> // opacify color
     * <Box borderRightEmerald200--L20></Box> // lighten color
     * <Box borderRightEmerald200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightEmerald200?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #a7f3d0; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomEmerald200></Box>
     * <Box borderBottomEmerald200--T20></Box> // transparentize color
     * <Box borderBottomEmerald200--O20></Box> // opacify color
     * <Box borderBottomEmerald200--L20></Box> // lighten color
     * <Box borderBottomEmerald200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomEmerald200?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #a7f3d0; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftEmerald200></Box>
     * <Box borderLeftEmerald200--T20></Box> // transparentize color
     * <Box borderLeftEmerald200--O20></Box> // opacify color
     * <Box borderLeftEmerald200--L20></Box> // lighten color
     * <Box borderLeftEmerald200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftEmerald200?: ResponsiveBoolean
    /**
     * Set border color to emerald300
     * ```css
     * { border-color: #6ee7b7; }
     * ```
     * @example
     * ```tsx
     * <Box borderEmerald300></Box>
     * <Box borderEmerald300--T20></Box> // transparentize color
     * <Box borderEmerald300--O20></Box> // opacify color
     * <Box borderEmerald300--L20></Box> // lighten color
     * <Box borderEmerald300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderEmerald300?: ResponsiveBoolean
    /**
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #6ee7b7; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopEmerald300></Box>
     * <Box borderTopEmerald300--T20></Box> // transparentize color
     * <Box borderTopEmerald300--O20></Box> // opacify color
     * <Box borderTopEmerald300--L20></Box> // lighten color
     * <Box borderTopEmerald300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopEmerald300?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #6ee7b7; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightEmerald300></Box>
     * <Box borderRightEmerald300--T20></Box> // transparentize color
     * <Box borderRightEmerald300--O20></Box> // opacify color
     * <Box borderRightEmerald300--L20></Box> // lighten color
     * <Box borderRightEmerald300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightEmerald300?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #6ee7b7; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomEmerald300></Box>
     * <Box borderBottomEmerald300--T20></Box> // transparentize color
     * <Box borderBottomEmerald300--O20></Box> // opacify color
     * <Box borderBottomEmerald300--L20></Box> // lighten color
     * <Box borderBottomEmerald300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomEmerald300?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #6ee7b7; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftEmerald300></Box>
     * <Box borderLeftEmerald300--T20></Box> // transparentize color
     * <Box borderLeftEmerald300--O20></Box> // opacify color
     * <Box borderLeftEmerald300--L20></Box> // lighten color
     * <Box borderLeftEmerald300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftEmerald300?: ResponsiveBoolean
    /**
     * Set border color to emerald400
     * ```css
     * { border-color: #34d399; }
     * ```
     * @example
     * ```tsx
     * <Box borderEmerald400></Box>
     * <Box borderEmerald400--T20></Box> // transparentize color
     * <Box borderEmerald400--O20></Box> // opacify color
     * <Box borderEmerald400--L20></Box> // lighten color
     * <Box borderEmerald400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderEmerald400?: ResponsiveBoolean
    /**
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #34d399; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopEmerald400></Box>
     * <Box borderTopEmerald400--T20></Box> // transparentize color
     * <Box borderTopEmerald400--O20></Box> // opacify color
     * <Box borderTopEmerald400--L20></Box> // lighten color
     * <Box borderTopEmerald400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopEmerald400?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #34d399; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightEmerald400></Box>
     * <Box borderRightEmerald400--T20></Box> // transparentize color
     * <Box borderRightEmerald400--O20></Box> // opacify color
     * <Box borderRightEmerald400--L20></Box> // lighten color
     * <Box borderRightEmerald400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightEmerald400?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #34d399; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomEmerald400></Box>
     * <Box borderBottomEmerald400--T20></Box> // transparentize color
     * <Box borderBottomEmerald400--O20></Box> // opacify color
     * <Box borderBottomEmerald400--L20></Box> // lighten color
     * <Box borderBottomEmerald400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomEmerald400?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #34d399; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftEmerald400></Box>
     * <Box borderLeftEmerald400--T20></Box> // transparentize color
     * <Box borderLeftEmerald400--O20></Box> // opacify color
     * <Box borderLeftEmerald400--L20></Box> // lighten color
     * <Box borderLeftEmerald400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftEmerald400?: ResponsiveBoolean
    /**
     * Set border color to emerald500
     * ```css
     * { border-color: #10b981; }
     * ```
     * @example
     * ```tsx
     * <Box borderEmerald500></Box>
     * <Box borderEmerald500--T20></Box> // transparentize color
     * <Box borderEmerald500--O20></Box> // opacify color
     * <Box borderEmerald500--L20></Box> // lighten color
     * <Box borderEmerald500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderEmerald500?: ResponsiveBoolean
    /**
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #10b981; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopEmerald500></Box>
     * <Box borderTopEmerald500--T20></Box> // transparentize color
     * <Box borderTopEmerald500--O20></Box> // opacify color
     * <Box borderTopEmerald500--L20></Box> // lighten color
     * <Box borderTopEmerald500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopEmerald500?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #10b981; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightEmerald500></Box>
     * <Box borderRightEmerald500--T20></Box> // transparentize color
     * <Box borderRightEmerald500--O20></Box> // opacify color
     * <Box borderRightEmerald500--L20></Box> // lighten color
     * <Box borderRightEmerald500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightEmerald500?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #10b981; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomEmerald500></Box>
     * <Box borderBottomEmerald500--T20></Box> // transparentize color
     * <Box borderBottomEmerald500--O20></Box> // opacify color
     * <Box borderBottomEmerald500--L20></Box> // lighten color
     * <Box borderBottomEmerald500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomEmerald500?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #10b981; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftEmerald500></Box>
     * <Box borderLeftEmerald500--T20></Box> // transparentize color
     * <Box borderLeftEmerald500--O20></Box> // opacify color
     * <Box borderLeftEmerald500--L20></Box> // lighten color
     * <Box borderLeftEmerald500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftEmerald500?: ResponsiveBoolean
    /**
     * Set border color to emerald600
     * ```css
     * { border-color: #059669; }
     * ```
     * @example
     * ```tsx
     * <Box borderEmerald600></Box>
     * <Box borderEmerald600--T20></Box> // transparentize color
     * <Box borderEmerald600--O20></Box> // opacify color
     * <Box borderEmerald600--L20></Box> // lighten color
     * <Box borderEmerald600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderEmerald600?: ResponsiveBoolean
    /**
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #059669; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopEmerald600></Box>
     * <Box borderTopEmerald600--T20></Box> // transparentize color
     * <Box borderTopEmerald600--O20></Box> // opacify color
     * <Box borderTopEmerald600--L20></Box> // lighten color
     * <Box borderTopEmerald600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopEmerald600?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #059669; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightEmerald600></Box>
     * <Box borderRightEmerald600--T20></Box> // transparentize color
     * <Box borderRightEmerald600--O20></Box> // opacify color
     * <Box borderRightEmerald600--L20></Box> // lighten color
     * <Box borderRightEmerald600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightEmerald600?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #059669; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomEmerald600></Box>
     * <Box borderBottomEmerald600--T20></Box> // transparentize color
     * <Box borderBottomEmerald600--O20></Box> // opacify color
     * <Box borderBottomEmerald600--L20></Box> // lighten color
     * <Box borderBottomEmerald600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomEmerald600?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #059669; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftEmerald600></Box>
     * <Box borderLeftEmerald600--T20></Box> // transparentize color
     * <Box borderLeftEmerald600--O20></Box> // opacify color
     * <Box borderLeftEmerald600--L20></Box> // lighten color
     * <Box borderLeftEmerald600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftEmerald600?: ResponsiveBoolean
    /**
     * Set border color to emerald700
     * ```css
     * { border-color: #047857; }
     * ```
     * @example
     * ```tsx
     * <Box borderEmerald700></Box>
     * <Box borderEmerald700--T20></Box> // transparentize color
     * <Box borderEmerald700--O20></Box> // opacify color
     * <Box borderEmerald700--L20></Box> // lighten color
     * <Box borderEmerald700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderEmerald700?: ResponsiveBoolean
    /**
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #047857; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopEmerald700></Box>
     * <Box borderTopEmerald700--T20></Box> // transparentize color
     * <Box borderTopEmerald700--O20></Box> // opacify color
     * <Box borderTopEmerald700--L20></Box> // lighten color
     * <Box borderTopEmerald700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopEmerald700?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #047857; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightEmerald700></Box>
     * <Box borderRightEmerald700--T20></Box> // transparentize color
     * <Box borderRightEmerald700--O20></Box> // opacify color
     * <Box borderRightEmerald700--L20></Box> // lighten color
     * <Box borderRightEmerald700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightEmerald700?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #047857; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomEmerald700></Box>
     * <Box borderBottomEmerald700--T20></Box> // transparentize color
     * <Box borderBottomEmerald700--O20></Box> // opacify color
     * <Box borderBottomEmerald700--L20></Box> // lighten color
     * <Box borderBottomEmerald700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomEmerald700?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #047857; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftEmerald700></Box>
     * <Box borderLeftEmerald700--T20></Box> // transparentize color
     * <Box borderLeftEmerald700--O20></Box> // opacify color
     * <Box borderLeftEmerald700--L20></Box> // lighten color
     * <Box borderLeftEmerald700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftEmerald700?: ResponsiveBoolean
    /**
     * Set border color to emerald800
     * ```css
     * { border-color: #065f46; }
     * ```
     * @example
     * ```tsx
     * <Box borderEmerald800></Box>
     * <Box borderEmerald800--T20></Box> // transparentize color
     * <Box borderEmerald800--O20></Box> // opacify color
     * <Box borderEmerald800--L20></Box> // lighten color
     * <Box borderEmerald800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderEmerald800?: ResponsiveBoolean
    /**
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #065f46; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopEmerald800></Box>
     * <Box borderTopEmerald800--T20></Box> // transparentize color
     * <Box borderTopEmerald800--O20></Box> // opacify color
     * <Box borderTopEmerald800--L20></Box> // lighten color
     * <Box borderTopEmerald800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopEmerald800?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #065f46; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightEmerald800></Box>
     * <Box borderRightEmerald800--T20></Box> // transparentize color
     * <Box borderRightEmerald800--O20></Box> // opacify color
     * <Box borderRightEmerald800--L20></Box> // lighten color
     * <Box borderRightEmerald800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightEmerald800?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #065f46; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomEmerald800></Box>
     * <Box borderBottomEmerald800--T20></Box> // transparentize color
     * <Box borderBottomEmerald800--O20></Box> // opacify color
     * <Box borderBottomEmerald800--L20></Box> // lighten color
     * <Box borderBottomEmerald800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomEmerald800?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #065f46; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftEmerald800></Box>
     * <Box borderLeftEmerald800--T20></Box> // transparentize color
     * <Box borderLeftEmerald800--O20></Box> // opacify color
     * <Box borderLeftEmerald800--L20></Box> // lighten color
     * <Box borderLeftEmerald800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftEmerald800?: ResponsiveBoolean
    /**
     * Set border color to emerald900
     * ```css
     * { border-color: #064e3b; }
     * ```
     * @example
     * ```tsx
     * <Box borderEmerald900></Box>
     * <Box borderEmerald900--T20></Box> // transparentize color
     * <Box borderEmerald900--O20></Box> // opacify color
     * <Box borderEmerald900--L20></Box> // lighten color
     * <Box borderEmerald900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderEmerald900?: ResponsiveBoolean
    /**
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #064e3b; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopEmerald900></Box>
     * <Box borderTopEmerald900--T20></Box> // transparentize color
     * <Box borderTopEmerald900--O20></Box> // opacify color
     * <Box borderTopEmerald900--L20></Box> // lighten color
     * <Box borderTopEmerald900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopEmerald900?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #064e3b; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightEmerald900></Box>
     * <Box borderRightEmerald900--T20></Box> // transparentize color
     * <Box borderRightEmerald900--O20></Box> // opacify color
     * <Box borderRightEmerald900--L20></Box> // lighten color
     * <Box borderRightEmerald900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightEmerald900?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #064e3b; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomEmerald900></Box>
     * <Box borderBottomEmerald900--T20></Box> // transparentize color
     * <Box borderBottomEmerald900--O20></Box> // opacify color
     * <Box borderBottomEmerald900--L20></Box> // lighten color
     * <Box borderBottomEmerald900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomEmerald900?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #064e3b; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftEmerald900></Box>
     * <Box borderLeftEmerald900--T20></Box> // transparentize color
     * <Box borderLeftEmerald900--O20></Box> // opacify color
     * <Box borderLeftEmerald900--L20></Box> // lighten color
     * <Box borderLeftEmerald900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftEmerald900?: ResponsiveBoolean
    /**
     * Set border color to green50
     * ```css
     * { border-color: #f0fdf4; }
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
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #f0fdf4; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopGreen50></Box>
     * <Box borderTopGreen50--T20></Box> // transparentize color
     * <Box borderTopGreen50--O20></Box> // opacify color
     * <Box borderTopGreen50--L20></Box> // lighten color
     * <Box borderTopGreen50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopGreen50?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #f0fdf4; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightGreen50></Box>
     * <Box borderRightGreen50--T20></Box> // transparentize color
     * <Box borderRightGreen50--O20></Box> // opacify color
     * <Box borderRightGreen50--L20></Box> // lighten color
     * <Box borderRightGreen50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightGreen50?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #f0fdf4; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomGreen50></Box>
     * <Box borderBottomGreen50--T20></Box> // transparentize color
     * <Box borderBottomGreen50--O20></Box> // opacify color
     * <Box borderBottomGreen50--L20></Box> // lighten color
     * <Box borderBottomGreen50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomGreen50?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #f0fdf4; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftGreen50></Box>
     * <Box borderLeftGreen50--T20></Box> // transparentize color
     * <Box borderLeftGreen50--O20></Box> // opacify color
     * <Box borderLeftGreen50--L20></Box> // lighten color
     * <Box borderLeftGreen50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftGreen50?: ResponsiveBoolean
    /**
     * Set border color to green100
     * ```css
     * { border-color: #dcfce7; }
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
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #dcfce7; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopGreen100></Box>
     * <Box borderTopGreen100--T20></Box> // transparentize color
     * <Box borderTopGreen100--O20></Box> // opacify color
     * <Box borderTopGreen100--L20></Box> // lighten color
     * <Box borderTopGreen100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopGreen100?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #dcfce7; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightGreen100></Box>
     * <Box borderRightGreen100--T20></Box> // transparentize color
     * <Box borderRightGreen100--O20></Box> // opacify color
     * <Box borderRightGreen100--L20></Box> // lighten color
     * <Box borderRightGreen100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightGreen100?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #dcfce7; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomGreen100></Box>
     * <Box borderBottomGreen100--T20></Box> // transparentize color
     * <Box borderBottomGreen100--O20></Box> // opacify color
     * <Box borderBottomGreen100--L20></Box> // lighten color
     * <Box borderBottomGreen100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomGreen100?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #dcfce7; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftGreen100></Box>
     * <Box borderLeftGreen100--T20></Box> // transparentize color
     * <Box borderLeftGreen100--O20></Box> // opacify color
     * <Box borderLeftGreen100--L20></Box> // lighten color
     * <Box borderLeftGreen100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftGreen100?: ResponsiveBoolean
    /**
     * Set border color to green200
     * ```css
     * { border-color: #bbf7d0; }
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
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #bbf7d0; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopGreen200></Box>
     * <Box borderTopGreen200--T20></Box> // transparentize color
     * <Box borderTopGreen200--O20></Box> // opacify color
     * <Box borderTopGreen200--L20></Box> // lighten color
     * <Box borderTopGreen200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopGreen200?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #bbf7d0; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightGreen200></Box>
     * <Box borderRightGreen200--T20></Box> // transparentize color
     * <Box borderRightGreen200--O20></Box> // opacify color
     * <Box borderRightGreen200--L20></Box> // lighten color
     * <Box borderRightGreen200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightGreen200?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #bbf7d0; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomGreen200></Box>
     * <Box borderBottomGreen200--T20></Box> // transparentize color
     * <Box borderBottomGreen200--O20></Box> // opacify color
     * <Box borderBottomGreen200--L20></Box> // lighten color
     * <Box borderBottomGreen200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomGreen200?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #bbf7d0; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftGreen200></Box>
     * <Box borderLeftGreen200--T20></Box> // transparentize color
     * <Box borderLeftGreen200--O20></Box> // opacify color
     * <Box borderLeftGreen200--L20></Box> // lighten color
     * <Box borderLeftGreen200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftGreen200?: ResponsiveBoolean
    /**
     * Set border color to green300
     * ```css
     * { border-color: #86efac; }
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
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #86efac; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopGreen300></Box>
     * <Box borderTopGreen300--T20></Box> // transparentize color
     * <Box borderTopGreen300--O20></Box> // opacify color
     * <Box borderTopGreen300--L20></Box> // lighten color
     * <Box borderTopGreen300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopGreen300?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #86efac; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightGreen300></Box>
     * <Box borderRightGreen300--T20></Box> // transparentize color
     * <Box borderRightGreen300--O20></Box> // opacify color
     * <Box borderRightGreen300--L20></Box> // lighten color
     * <Box borderRightGreen300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightGreen300?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #86efac; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomGreen300></Box>
     * <Box borderBottomGreen300--T20></Box> // transparentize color
     * <Box borderBottomGreen300--O20></Box> // opacify color
     * <Box borderBottomGreen300--L20></Box> // lighten color
     * <Box borderBottomGreen300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomGreen300?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #86efac; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftGreen300></Box>
     * <Box borderLeftGreen300--T20></Box> // transparentize color
     * <Box borderLeftGreen300--O20></Box> // opacify color
     * <Box borderLeftGreen300--L20></Box> // lighten color
     * <Box borderLeftGreen300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftGreen300?: ResponsiveBoolean
    /**
     * Set border color to green400
     * ```css
     * { border-color: #4ade80; }
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
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #4ade80; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopGreen400></Box>
     * <Box borderTopGreen400--T20></Box> // transparentize color
     * <Box borderTopGreen400--O20></Box> // opacify color
     * <Box borderTopGreen400--L20></Box> // lighten color
     * <Box borderTopGreen400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopGreen400?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #4ade80; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightGreen400></Box>
     * <Box borderRightGreen400--T20></Box> // transparentize color
     * <Box borderRightGreen400--O20></Box> // opacify color
     * <Box borderRightGreen400--L20></Box> // lighten color
     * <Box borderRightGreen400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightGreen400?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #4ade80; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomGreen400></Box>
     * <Box borderBottomGreen400--T20></Box> // transparentize color
     * <Box borderBottomGreen400--O20></Box> // opacify color
     * <Box borderBottomGreen400--L20></Box> // lighten color
     * <Box borderBottomGreen400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomGreen400?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #4ade80; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftGreen400></Box>
     * <Box borderLeftGreen400--T20></Box> // transparentize color
     * <Box borderLeftGreen400--O20></Box> // opacify color
     * <Box borderLeftGreen400--L20></Box> // lighten color
     * <Box borderLeftGreen400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftGreen400?: ResponsiveBoolean
    /**
     * Set border color to green500
     * ```css
     * { border-color: #22c55e; }
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
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #22c55e; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopGreen500></Box>
     * <Box borderTopGreen500--T20></Box> // transparentize color
     * <Box borderTopGreen500--O20></Box> // opacify color
     * <Box borderTopGreen500--L20></Box> // lighten color
     * <Box borderTopGreen500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopGreen500?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #22c55e; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightGreen500></Box>
     * <Box borderRightGreen500--T20></Box> // transparentize color
     * <Box borderRightGreen500--O20></Box> // opacify color
     * <Box borderRightGreen500--L20></Box> // lighten color
     * <Box borderRightGreen500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightGreen500?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #22c55e; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomGreen500></Box>
     * <Box borderBottomGreen500--T20></Box> // transparentize color
     * <Box borderBottomGreen500--O20></Box> // opacify color
     * <Box borderBottomGreen500--L20></Box> // lighten color
     * <Box borderBottomGreen500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomGreen500?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #22c55e; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftGreen500></Box>
     * <Box borderLeftGreen500--T20></Box> // transparentize color
     * <Box borderLeftGreen500--O20></Box> // opacify color
     * <Box borderLeftGreen500--L20></Box> // lighten color
     * <Box borderLeftGreen500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftGreen500?: ResponsiveBoolean
    /**
     * Set border color to green600
     * ```css
     * { border-color: #16a34a; }
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
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #16a34a; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopGreen600></Box>
     * <Box borderTopGreen600--T20></Box> // transparentize color
     * <Box borderTopGreen600--O20></Box> // opacify color
     * <Box borderTopGreen600--L20></Box> // lighten color
     * <Box borderTopGreen600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopGreen600?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #16a34a; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightGreen600></Box>
     * <Box borderRightGreen600--T20></Box> // transparentize color
     * <Box borderRightGreen600--O20></Box> // opacify color
     * <Box borderRightGreen600--L20></Box> // lighten color
     * <Box borderRightGreen600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightGreen600?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #16a34a; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomGreen600></Box>
     * <Box borderBottomGreen600--T20></Box> // transparentize color
     * <Box borderBottomGreen600--O20></Box> // opacify color
     * <Box borderBottomGreen600--L20></Box> // lighten color
     * <Box borderBottomGreen600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomGreen600?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #16a34a; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftGreen600></Box>
     * <Box borderLeftGreen600--T20></Box> // transparentize color
     * <Box borderLeftGreen600--O20></Box> // opacify color
     * <Box borderLeftGreen600--L20></Box> // lighten color
     * <Box borderLeftGreen600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftGreen600?: ResponsiveBoolean
    /**
     * Set border color to green700
     * ```css
     * { border-color: #15803d; }
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
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #15803d; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopGreen700></Box>
     * <Box borderTopGreen700--T20></Box> // transparentize color
     * <Box borderTopGreen700--O20></Box> // opacify color
     * <Box borderTopGreen700--L20></Box> // lighten color
     * <Box borderTopGreen700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopGreen700?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #15803d; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightGreen700></Box>
     * <Box borderRightGreen700--T20></Box> // transparentize color
     * <Box borderRightGreen700--O20></Box> // opacify color
     * <Box borderRightGreen700--L20></Box> // lighten color
     * <Box borderRightGreen700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightGreen700?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #15803d; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomGreen700></Box>
     * <Box borderBottomGreen700--T20></Box> // transparentize color
     * <Box borderBottomGreen700--O20></Box> // opacify color
     * <Box borderBottomGreen700--L20></Box> // lighten color
     * <Box borderBottomGreen700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomGreen700?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #15803d; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftGreen700></Box>
     * <Box borderLeftGreen700--T20></Box> // transparentize color
     * <Box borderLeftGreen700--O20></Box> // opacify color
     * <Box borderLeftGreen700--L20></Box> // lighten color
     * <Box borderLeftGreen700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftGreen700?: ResponsiveBoolean
    /**
     * Set border color to green800
     * ```css
     * { border-color: #166534; }
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
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #166534; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopGreen800></Box>
     * <Box borderTopGreen800--T20></Box> // transparentize color
     * <Box borderTopGreen800--O20></Box> // opacify color
     * <Box borderTopGreen800--L20></Box> // lighten color
     * <Box borderTopGreen800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopGreen800?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #166534; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightGreen800></Box>
     * <Box borderRightGreen800--T20></Box> // transparentize color
     * <Box borderRightGreen800--O20></Box> // opacify color
     * <Box borderRightGreen800--L20></Box> // lighten color
     * <Box borderRightGreen800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightGreen800?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #166534; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomGreen800></Box>
     * <Box borderBottomGreen800--T20></Box> // transparentize color
     * <Box borderBottomGreen800--O20></Box> // opacify color
     * <Box borderBottomGreen800--L20></Box> // lighten color
     * <Box borderBottomGreen800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomGreen800?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #166534; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftGreen800></Box>
     * <Box borderLeftGreen800--T20></Box> // transparentize color
     * <Box borderLeftGreen800--O20></Box> // opacify color
     * <Box borderLeftGreen800--L20></Box> // lighten color
     * <Box borderLeftGreen800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftGreen800?: ResponsiveBoolean
    /**
     * Set border color to green900
     * ```css
     * { border-color: #14532d; }
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
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #14532d; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopGreen900></Box>
     * <Box borderTopGreen900--T20></Box> // transparentize color
     * <Box borderTopGreen900--O20></Box> // opacify color
     * <Box borderTopGreen900--L20></Box> // lighten color
     * <Box borderTopGreen900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopGreen900?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #14532d; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightGreen900></Box>
     * <Box borderRightGreen900--T20></Box> // transparentize color
     * <Box borderRightGreen900--O20></Box> // opacify color
     * <Box borderRightGreen900--L20></Box> // lighten color
     * <Box borderRightGreen900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightGreen900?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #14532d; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomGreen900></Box>
     * <Box borderBottomGreen900--T20></Box> // transparentize color
     * <Box borderBottomGreen900--O20></Box> // opacify color
     * <Box borderBottomGreen900--L20></Box> // lighten color
     * <Box borderBottomGreen900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomGreen900?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #14532d; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftGreen900></Box>
     * <Box borderLeftGreen900--T20></Box> // transparentize color
     * <Box borderLeftGreen900--O20></Box> // opacify color
     * <Box borderLeftGreen900--L20></Box> // lighten color
     * <Box borderLeftGreen900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftGreen900?: ResponsiveBoolean
    /**
     * Set border color to lime50
     * ```css
     * { border-color: #f7fee7; }
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
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #f7fee7; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopLime50></Box>
     * <Box borderTopLime50--T20></Box> // transparentize color
     * <Box borderTopLime50--O20></Box> // opacify color
     * <Box borderTopLime50--L20></Box> // lighten color
     * <Box borderTopLime50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopLime50?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #f7fee7; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightLime50></Box>
     * <Box borderRightLime50--T20></Box> // transparentize color
     * <Box borderRightLime50--O20></Box> // opacify color
     * <Box borderRightLime50--L20></Box> // lighten color
     * <Box borderRightLime50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightLime50?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #f7fee7; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomLime50></Box>
     * <Box borderBottomLime50--T20></Box> // transparentize color
     * <Box borderBottomLime50--O20></Box> // opacify color
     * <Box borderBottomLime50--L20></Box> // lighten color
     * <Box borderBottomLime50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomLime50?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #f7fee7; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftLime50></Box>
     * <Box borderLeftLime50--T20></Box> // transparentize color
     * <Box borderLeftLime50--O20></Box> // opacify color
     * <Box borderLeftLime50--L20></Box> // lighten color
     * <Box borderLeftLime50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftLime50?: ResponsiveBoolean
    /**
     * Set border color to lime100
     * ```css
     * { border-color: #ecfccb; }
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
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #ecfccb; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopLime100></Box>
     * <Box borderTopLime100--T20></Box> // transparentize color
     * <Box borderTopLime100--O20></Box> // opacify color
     * <Box borderTopLime100--L20></Box> // lighten color
     * <Box borderTopLime100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopLime100?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #ecfccb; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightLime100></Box>
     * <Box borderRightLime100--T20></Box> // transparentize color
     * <Box borderRightLime100--O20></Box> // opacify color
     * <Box borderRightLime100--L20></Box> // lighten color
     * <Box borderRightLime100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightLime100?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #ecfccb; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomLime100></Box>
     * <Box borderBottomLime100--T20></Box> // transparentize color
     * <Box borderBottomLime100--O20></Box> // opacify color
     * <Box borderBottomLime100--L20></Box> // lighten color
     * <Box borderBottomLime100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomLime100?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #ecfccb; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftLime100></Box>
     * <Box borderLeftLime100--T20></Box> // transparentize color
     * <Box borderLeftLime100--O20></Box> // opacify color
     * <Box borderLeftLime100--L20></Box> // lighten color
     * <Box borderLeftLime100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftLime100?: ResponsiveBoolean
    /**
     * Set border color to lime200
     * ```css
     * { border-color: #d9f99d; }
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
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #d9f99d; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopLime200></Box>
     * <Box borderTopLime200--T20></Box> // transparentize color
     * <Box borderTopLime200--O20></Box> // opacify color
     * <Box borderTopLime200--L20></Box> // lighten color
     * <Box borderTopLime200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopLime200?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #d9f99d; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightLime200></Box>
     * <Box borderRightLime200--T20></Box> // transparentize color
     * <Box borderRightLime200--O20></Box> // opacify color
     * <Box borderRightLime200--L20></Box> // lighten color
     * <Box borderRightLime200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightLime200?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #d9f99d; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomLime200></Box>
     * <Box borderBottomLime200--T20></Box> // transparentize color
     * <Box borderBottomLime200--O20></Box> // opacify color
     * <Box borderBottomLime200--L20></Box> // lighten color
     * <Box borderBottomLime200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomLime200?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #d9f99d; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftLime200></Box>
     * <Box borderLeftLime200--T20></Box> // transparentize color
     * <Box borderLeftLime200--O20></Box> // opacify color
     * <Box borderLeftLime200--L20></Box> // lighten color
     * <Box borderLeftLime200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftLime200?: ResponsiveBoolean
    /**
     * Set border color to lime300
     * ```css
     * { border-color: #bef264; }
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
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #bef264; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopLime300></Box>
     * <Box borderTopLime300--T20></Box> // transparentize color
     * <Box borderTopLime300--O20></Box> // opacify color
     * <Box borderTopLime300--L20></Box> // lighten color
     * <Box borderTopLime300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopLime300?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #bef264; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightLime300></Box>
     * <Box borderRightLime300--T20></Box> // transparentize color
     * <Box borderRightLime300--O20></Box> // opacify color
     * <Box borderRightLime300--L20></Box> // lighten color
     * <Box borderRightLime300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightLime300?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #bef264; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomLime300></Box>
     * <Box borderBottomLime300--T20></Box> // transparentize color
     * <Box borderBottomLime300--O20></Box> // opacify color
     * <Box borderBottomLime300--L20></Box> // lighten color
     * <Box borderBottomLime300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomLime300?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #bef264; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftLime300></Box>
     * <Box borderLeftLime300--T20></Box> // transparentize color
     * <Box borderLeftLime300--O20></Box> // opacify color
     * <Box borderLeftLime300--L20></Box> // lighten color
     * <Box borderLeftLime300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftLime300?: ResponsiveBoolean
    /**
     * Set border color to lime400
     * ```css
     * { border-color: #a3e635; }
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
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #a3e635; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopLime400></Box>
     * <Box borderTopLime400--T20></Box> // transparentize color
     * <Box borderTopLime400--O20></Box> // opacify color
     * <Box borderTopLime400--L20></Box> // lighten color
     * <Box borderTopLime400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopLime400?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #a3e635; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightLime400></Box>
     * <Box borderRightLime400--T20></Box> // transparentize color
     * <Box borderRightLime400--O20></Box> // opacify color
     * <Box borderRightLime400--L20></Box> // lighten color
     * <Box borderRightLime400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightLime400?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #a3e635; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomLime400></Box>
     * <Box borderBottomLime400--T20></Box> // transparentize color
     * <Box borderBottomLime400--O20></Box> // opacify color
     * <Box borderBottomLime400--L20></Box> // lighten color
     * <Box borderBottomLime400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomLime400?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #a3e635; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftLime400></Box>
     * <Box borderLeftLime400--T20></Box> // transparentize color
     * <Box borderLeftLime400--O20></Box> // opacify color
     * <Box borderLeftLime400--L20></Box> // lighten color
     * <Box borderLeftLime400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftLime400?: ResponsiveBoolean
    /**
     * Set border color to lime500
     * ```css
     * { border-color: #84cc16; }
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
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #84cc16; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopLime500></Box>
     * <Box borderTopLime500--T20></Box> // transparentize color
     * <Box borderTopLime500--O20></Box> // opacify color
     * <Box borderTopLime500--L20></Box> // lighten color
     * <Box borderTopLime500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopLime500?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #84cc16; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightLime500></Box>
     * <Box borderRightLime500--T20></Box> // transparentize color
     * <Box borderRightLime500--O20></Box> // opacify color
     * <Box borderRightLime500--L20></Box> // lighten color
     * <Box borderRightLime500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightLime500?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #84cc16; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomLime500></Box>
     * <Box borderBottomLime500--T20></Box> // transparentize color
     * <Box borderBottomLime500--O20></Box> // opacify color
     * <Box borderBottomLime500--L20></Box> // lighten color
     * <Box borderBottomLime500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomLime500?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #84cc16; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftLime500></Box>
     * <Box borderLeftLime500--T20></Box> // transparentize color
     * <Box borderLeftLime500--O20></Box> // opacify color
     * <Box borderLeftLime500--L20></Box> // lighten color
     * <Box borderLeftLime500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftLime500?: ResponsiveBoolean
    /**
     * Set border color to lime600
     * ```css
     * { border-color: #65a30d; }
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
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #65a30d; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopLime600></Box>
     * <Box borderTopLime600--T20></Box> // transparentize color
     * <Box borderTopLime600--O20></Box> // opacify color
     * <Box borderTopLime600--L20></Box> // lighten color
     * <Box borderTopLime600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopLime600?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #65a30d; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightLime600></Box>
     * <Box borderRightLime600--T20></Box> // transparentize color
     * <Box borderRightLime600--O20></Box> // opacify color
     * <Box borderRightLime600--L20></Box> // lighten color
     * <Box borderRightLime600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightLime600?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #65a30d; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomLime600></Box>
     * <Box borderBottomLime600--T20></Box> // transparentize color
     * <Box borderBottomLime600--O20></Box> // opacify color
     * <Box borderBottomLime600--L20></Box> // lighten color
     * <Box borderBottomLime600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomLime600?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #65a30d; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftLime600></Box>
     * <Box borderLeftLime600--T20></Box> // transparentize color
     * <Box borderLeftLime600--O20></Box> // opacify color
     * <Box borderLeftLime600--L20></Box> // lighten color
     * <Box borderLeftLime600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftLime600?: ResponsiveBoolean
    /**
     * Set border color to lime700
     * ```css
     * { border-color: #4d7c0f; }
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
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #4d7c0f; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopLime700></Box>
     * <Box borderTopLime700--T20></Box> // transparentize color
     * <Box borderTopLime700--O20></Box> // opacify color
     * <Box borderTopLime700--L20></Box> // lighten color
     * <Box borderTopLime700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopLime700?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #4d7c0f; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightLime700></Box>
     * <Box borderRightLime700--T20></Box> // transparentize color
     * <Box borderRightLime700--O20></Box> // opacify color
     * <Box borderRightLime700--L20></Box> // lighten color
     * <Box borderRightLime700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightLime700?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #4d7c0f; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomLime700></Box>
     * <Box borderBottomLime700--T20></Box> // transparentize color
     * <Box borderBottomLime700--O20></Box> // opacify color
     * <Box borderBottomLime700--L20></Box> // lighten color
     * <Box borderBottomLime700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomLime700?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #4d7c0f; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftLime700></Box>
     * <Box borderLeftLime700--T20></Box> // transparentize color
     * <Box borderLeftLime700--O20></Box> // opacify color
     * <Box borderLeftLime700--L20></Box> // lighten color
     * <Box borderLeftLime700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftLime700?: ResponsiveBoolean
    /**
     * Set border color to lime800
     * ```css
     * { border-color: #3f6212; }
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
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #3f6212; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopLime800></Box>
     * <Box borderTopLime800--T20></Box> // transparentize color
     * <Box borderTopLime800--O20></Box> // opacify color
     * <Box borderTopLime800--L20></Box> // lighten color
     * <Box borderTopLime800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopLime800?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #3f6212; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightLime800></Box>
     * <Box borderRightLime800--T20></Box> // transparentize color
     * <Box borderRightLime800--O20></Box> // opacify color
     * <Box borderRightLime800--L20></Box> // lighten color
     * <Box borderRightLime800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightLime800?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #3f6212; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomLime800></Box>
     * <Box borderBottomLime800--T20></Box> // transparentize color
     * <Box borderBottomLime800--O20></Box> // opacify color
     * <Box borderBottomLime800--L20></Box> // lighten color
     * <Box borderBottomLime800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomLime800?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #3f6212; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftLime800></Box>
     * <Box borderLeftLime800--T20></Box> // transparentize color
     * <Box borderLeftLime800--O20></Box> // opacify color
     * <Box borderLeftLime800--L20></Box> // lighten color
     * <Box borderLeftLime800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftLime800?: ResponsiveBoolean
    /**
     * Set border color to lime900
     * ```css
     * { border-color: #365314; }
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
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #365314; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopLime900></Box>
     * <Box borderTopLime900--T20></Box> // transparentize color
     * <Box borderTopLime900--O20></Box> // opacify color
     * <Box borderTopLime900--L20></Box> // lighten color
     * <Box borderTopLime900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopLime900?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #365314; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightLime900></Box>
     * <Box borderRightLime900--T20></Box> // transparentize color
     * <Box borderRightLime900--O20></Box> // opacify color
     * <Box borderRightLime900--L20></Box> // lighten color
     * <Box borderRightLime900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightLime900?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #365314; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomLime900></Box>
     * <Box borderBottomLime900--T20></Box> // transparentize color
     * <Box borderBottomLime900--O20></Box> // opacify color
     * <Box borderBottomLime900--L20></Box> // lighten color
     * <Box borderBottomLime900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomLime900?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #365314; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftLime900></Box>
     * <Box borderLeftLime900--T20></Box> // transparentize color
     * <Box borderLeftLime900--O20></Box> // opacify color
     * <Box borderLeftLime900--L20></Box> // lighten color
     * <Box borderLeftLime900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftLime900?: ResponsiveBoolean
    /**
     * Set border color to yellow50
     * ```css
     * { border-color: #fefce8; }
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
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #fefce8; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopYellow50></Box>
     * <Box borderTopYellow50--T20></Box> // transparentize color
     * <Box borderTopYellow50--O20></Box> // opacify color
     * <Box borderTopYellow50--L20></Box> // lighten color
     * <Box borderTopYellow50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopYellow50?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #fefce8; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightYellow50></Box>
     * <Box borderRightYellow50--T20></Box> // transparentize color
     * <Box borderRightYellow50--O20></Box> // opacify color
     * <Box borderRightYellow50--L20></Box> // lighten color
     * <Box borderRightYellow50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightYellow50?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #fefce8; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomYellow50></Box>
     * <Box borderBottomYellow50--T20></Box> // transparentize color
     * <Box borderBottomYellow50--O20></Box> // opacify color
     * <Box borderBottomYellow50--L20></Box> // lighten color
     * <Box borderBottomYellow50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomYellow50?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #fefce8; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftYellow50></Box>
     * <Box borderLeftYellow50--T20></Box> // transparentize color
     * <Box borderLeftYellow50--O20></Box> // opacify color
     * <Box borderLeftYellow50--L20></Box> // lighten color
     * <Box borderLeftYellow50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftYellow50?: ResponsiveBoolean
    /**
     * Set border color to yellow100
     * ```css
     * { border-color: #fef9c3; }
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
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #fef9c3; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopYellow100></Box>
     * <Box borderTopYellow100--T20></Box> // transparentize color
     * <Box borderTopYellow100--O20></Box> // opacify color
     * <Box borderTopYellow100--L20></Box> // lighten color
     * <Box borderTopYellow100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopYellow100?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #fef9c3; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightYellow100></Box>
     * <Box borderRightYellow100--T20></Box> // transparentize color
     * <Box borderRightYellow100--O20></Box> // opacify color
     * <Box borderRightYellow100--L20></Box> // lighten color
     * <Box borderRightYellow100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightYellow100?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #fef9c3; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomYellow100></Box>
     * <Box borderBottomYellow100--T20></Box> // transparentize color
     * <Box borderBottomYellow100--O20></Box> // opacify color
     * <Box borderBottomYellow100--L20></Box> // lighten color
     * <Box borderBottomYellow100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomYellow100?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #fef9c3; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftYellow100></Box>
     * <Box borderLeftYellow100--T20></Box> // transparentize color
     * <Box borderLeftYellow100--O20></Box> // opacify color
     * <Box borderLeftYellow100--L20></Box> // lighten color
     * <Box borderLeftYellow100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftYellow100?: ResponsiveBoolean
    /**
     * Set border color to yellow200
     * ```css
     * { border-color: #fef08a; }
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
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #fef08a; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopYellow200></Box>
     * <Box borderTopYellow200--T20></Box> // transparentize color
     * <Box borderTopYellow200--O20></Box> // opacify color
     * <Box borderTopYellow200--L20></Box> // lighten color
     * <Box borderTopYellow200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopYellow200?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #fef08a; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightYellow200></Box>
     * <Box borderRightYellow200--T20></Box> // transparentize color
     * <Box borderRightYellow200--O20></Box> // opacify color
     * <Box borderRightYellow200--L20></Box> // lighten color
     * <Box borderRightYellow200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightYellow200?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #fef08a; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomYellow200></Box>
     * <Box borderBottomYellow200--T20></Box> // transparentize color
     * <Box borderBottomYellow200--O20></Box> // opacify color
     * <Box borderBottomYellow200--L20></Box> // lighten color
     * <Box borderBottomYellow200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomYellow200?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #fef08a; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftYellow200></Box>
     * <Box borderLeftYellow200--T20></Box> // transparentize color
     * <Box borderLeftYellow200--O20></Box> // opacify color
     * <Box borderLeftYellow200--L20></Box> // lighten color
     * <Box borderLeftYellow200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftYellow200?: ResponsiveBoolean
    /**
     * Set border color to yellow300
     * ```css
     * { border-color: #fde047; }
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
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #fde047; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopYellow300></Box>
     * <Box borderTopYellow300--T20></Box> // transparentize color
     * <Box borderTopYellow300--O20></Box> // opacify color
     * <Box borderTopYellow300--L20></Box> // lighten color
     * <Box borderTopYellow300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopYellow300?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #fde047; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightYellow300></Box>
     * <Box borderRightYellow300--T20></Box> // transparentize color
     * <Box borderRightYellow300--O20></Box> // opacify color
     * <Box borderRightYellow300--L20></Box> // lighten color
     * <Box borderRightYellow300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightYellow300?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #fde047; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomYellow300></Box>
     * <Box borderBottomYellow300--T20></Box> // transparentize color
     * <Box borderBottomYellow300--O20></Box> // opacify color
     * <Box borderBottomYellow300--L20></Box> // lighten color
     * <Box borderBottomYellow300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomYellow300?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #fde047; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftYellow300></Box>
     * <Box borderLeftYellow300--T20></Box> // transparentize color
     * <Box borderLeftYellow300--O20></Box> // opacify color
     * <Box borderLeftYellow300--L20></Box> // lighten color
     * <Box borderLeftYellow300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftYellow300?: ResponsiveBoolean
    /**
     * Set border color to yellow400
     * ```css
     * { border-color: #facc15; }
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
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #facc15; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopYellow400></Box>
     * <Box borderTopYellow400--T20></Box> // transparentize color
     * <Box borderTopYellow400--O20></Box> // opacify color
     * <Box borderTopYellow400--L20></Box> // lighten color
     * <Box borderTopYellow400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopYellow400?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #facc15; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightYellow400></Box>
     * <Box borderRightYellow400--T20></Box> // transparentize color
     * <Box borderRightYellow400--O20></Box> // opacify color
     * <Box borderRightYellow400--L20></Box> // lighten color
     * <Box borderRightYellow400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightYellow400?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #facc15; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomYellow400></Box>
     * <Box borderBottomYellow400--T20></Box> // transparentize color
     * <Box borderBottomYellow400--O20></Box> // opacify color
     * <Box borderBottomYellow400--L20></Box> // lighten color
     * <Box borderBottomYellow400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomYellow400?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #facc15; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftYellow400></Box>
     * <Box borderLeftYellow400--T20></Box> // transparentize color
     * <Box borderLeftYellow400--O20></Box> // opacify color
     * <Box borderLeftYellow400--L20></Box> // lighten color
     * <Box borderLeftYellow400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftYellow400?: ResponsiveBoolean
    /**
     * Set border color to yellow500
     * ```css
     * { border-color: #eab308; }
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
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #eab308; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopYellow500></Box>
     * <Box borderTopYellow500--T20></Box> // transparentize color
     * <Box borderTopYellow500--O20></Box> // opacify color
     * <Box borderTopYellow500--L20></Box> // lighten color
     * <Box borderTopYellow500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopYellow500?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #eab308; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightYellow500></Box>
     * <Box borderRightYellow500--T20></Box> // transparentize color
     * <Box borderRightYellow500--O20></Box> // opacify color
     * <Box borderRightYellow500--L20></Box> // lighten color
     * <Box borderRightYellow500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightYellow500?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #eab308; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomYellow500></Box>
     * <Box borderBottomYellow500--T20></Box> // transparentize color
     * <Box borderBottomYellow500--O20></Box> // opacify color
     * <Box borderBottomYellow500--L20></Box> // lighten color
     * <Box borderBottomYellow500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomYellow500?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #eab308; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftYellow500></Box>
     * <Box borderLeftYellow500--T20></Box> // transparentize color
     * <Box borderLeftYellow500--O20></Box> // opacify color
     * <Box borderLeftYellow500--L20></Box> // lighten color
     * <Box borderLeftYellow500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftYellow500?: ResponsiveBoolean
    /**
     * Set border color to yellow600
     * ```css
     * { border-color: #ca8a04; }
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
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #ca8a04; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopYellow600></Box>
     * <Box borderTopYellow600--T20></Box> // transparentize color
     * <Box borderTopYellow600--O20></Box> // opacify color
     * <Box borderTopYellow600--L20></Box> // lighten color
     * <Box borderTopYellow600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopYellow600?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #ca8a04; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightYellow600></Box>
     * <Box borderRightYellow600--T20></Box> // transparentize color
     * <Box borderRightYellow600--O20></Box> // opacify color
     * <Box borderRightYellow600--L20></Box> // lighten color
     * <Box borderRightYellow600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightYellow600?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #ca8a04; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomYellow600></Box>
     * <Box borderBottomYellow600--T20></Box> // transparentize color
     * <Box borderBottomYellow600--O20></Box> // opacify color
     * <Box borderBottomYellow600--L20></Box> // lighten color
     * <Box borderBottomYellow600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomYellow600?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #ca8a04; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftYellow600></Box>
     * <Box borderLeftYellow600--T20></Box> // transparentize color
     * <Box borderLeftYellow600--O20></Box> // opacify color
     * <Box borderLeftYellow600--L20></Box> // lighten color
     * <Box borderLeftYellow600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftYellow600?: ResponsiveBoolean
    /**
     * Set border color to yellow700
     * ```css
     * { border-color: #a16207; }
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
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #a16207; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopYellow700></Box>
     * <Box borderTopYellow700--T20></Box> // transparentize color
     * <Box borderTopYellow700--O20></Box> // opacify color
     * <Box borderTopYellow700--L20></Box> // lighten color
     * <Box borderTopYellow700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopYellow700?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #a16207; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightYellow700></Box>
     * <Box borderRightYellow700--T20></Box> // transparentize color
     * <Box borderRightYellow700--O20></Box> // opacify color
     * <Box borderRightYellow700--L20></Box> // lighten color
     * <Box borderRightYellow700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightYellow700?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #a16207; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomYellow700></Box>
     * <Box borderBottomYellow700--T20></Box> // transparentize color
     * <Box borderBottomYellow700--O20></Box> // opacify color
     * <Box borderBottomYellow700--L20></Box> // lighten color
     * <Box borderBottomYellow700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomYellow700?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #a16207; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftYellow700></Box>
     * <Box borderLeftYellow700--T20></Box> // transparentize color
     * <Box borderLeftYellow700--O20></Box> // opacify color
     * <Box borderLeftYellow700--L20></Box> // lighten color
     * <Box borderLeftYellow700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftYellow700?: ResponsiveBoolean
    /**
     * Set border color to yellow800
     * ```css
     * { border-color: #854d0e; }
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
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #854d0e; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopYellow800></Box>
     * <Box borderTopYellow800--T20></Box> // transparentize color
     * <Box borderTopYellow800--O20></Box> // opacify color
     * <Box borderTopYellow800--L20></Box> // lighten color
     * <Box borderTopYellow800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopYellow800?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #854d0e; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightYellow800></Box>
     * <Box borderRightYellow800--T20></Box> // transparentize color
     * <Box borderRightYellow800--O20></Box> // opacify color
     * <Box borderRightYellow800--L20></Box> // lighten color
     * <Box borderRightYellow800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightYellow800?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #854d0e; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomYellow800></Box>
     * <Box borderBottomYellow800--T20></Box> // transparentize color
     * <Box borderBottomYellow800--O20></Box> // opacify color
     * <Box borderBottomYellow800--L20></Box> // lighten color
     * <Box borderBottomYellow800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomYellow800?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #854d0e; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftYellow800></Box>
     * <Box borderLeftYellow800--T20></Box> // transparentize color
     * <Box borderLeftYellow800--O20></Box> // opacify color
     * <Box borderLeftYellow800--L20></Box> // lighten color
     * <Box borderLeftYellow800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftYellow800?: ResponsiveBoolean
    /**
     * Set border color to yellow900
     * ```css
     * { border-color: #713f12; }
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
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #713f12; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopYellow900></Box>
     * <Box borderTopYellow900--T20></Box> // transparentize color
     * <Box borderTopYellow900--O20></Box> // opacify color
     * <Box borderTopYellow900--L20></Box> // lighten color
     * <Box borderTopYellow900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopYellow900?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #713f12; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightYellow900></Box>
     * <Box borderRightYellow900--T20></Box> // transparentize color
     * <Box borderRightYellow900--O20></Box> // opacify color
     * <Box borderRightYellow900--L20></Box> // lighten color
     * <Box borderRightYellow900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightYellow900?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #713f12; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomYellow900></Box>
     * <Box borderBottomYellow900--T20></Box> // transparentize color
     * <Box borderBottomYellow900--O20></Box> // opacify color
     * <Box borderBottomYellow900--L20></Box> // lighten color
     * <Box borderBottomYellow900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomYellow900?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #713f12; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftYellow900></Box>
     * <Box borderLeftYellow900--T20></Box> // transparentize color
     * <Box borderLeftYellow900--O20></Box> // opacify color
     * <Box borderLeftYellow900--L20></Box> // lighten color
     * <Box borderLeftYellow900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftYellow900?: ResponsiveBoolean
    /**
     * Set border color to amber50
     * ```css
     * { border-color: #fffbeb; }
     * ```
     * @example
     * ```tsx
     * <Box borderAmber50></Box>
     * <Box borderAmber50--T20></Box> // transparentize color
     * <Box borderAmber50--O20></Box> // opacify color
     * <Box borderAmber50--L20></Box> // lighten color
     * <Box borderAmber50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderAmber50?: ResponsiveBoolean
    /**
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #fffbeb; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopAmber50></Box>
     * <Box borderTopAmber50--T20></Box> // transparentize color
     * <Box borderTopAmber50--O20></Box> // opacify color
     * <Box borderTopAmber50--L20></Box> // lighten color
     * <Box borderTopAmber50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopAmber50?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #fffbeb; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightAmber50></Box>
     * <Box borderRightAmber50--T20></Box> // transparentize color
     * <Box borderRightAmber50--O20></Box> // opacify color
     * <Box borderRightAmber50--L20></Box> // lighten color
     * <Box borderRightAmber50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightAmber50?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #fffbeb; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomAmber50></Box>
     * <Box borderBottomAmber50--T20></Box> // transparentize color
     * <Box borderBottomAmber50--O20></Box> // opacify color
     * <Box borderBottomAmber50--L20></Box> // lighten color
     * <Box borderBottomAmber50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomAmber50?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #fffbeb; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftAmber50></Box>
     * <Box borderLeftAmber50--T20></Box> // transparentize color
     * <Box borderLeftAmber50--O20></Box> // opacify color
     * <Box borderLeftAmber50--L20></Box> // lighten color
     * <Box borderLeftAmber50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftAmber50?: ResponsiveBoolean
    /**
     * Set border color to amber100
     * ```css
     * { border-color: #fef3c7; }
     * ```
     * @example
     * ```tsx
     * <Box borderAmber100></Box>
     * <Box borderAmber100--T20></Box> // transparentize color
     * <Box borderAmber100--O20></Box> // opacify color
     * <Box borderAmber100--L20></Box> // lighten color
     * <Box borderAmber100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderAmber100?: ResponsiveBoolean
    /**
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #fef3c7; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopAmber100></Box>
     * <Box borderTopAmber100--T20></Box> // transparentize color
     * <Box borderTopAmber100--O20></Box> // opacify color
     * <Box borderTopAmber100--L20></Box> // lighten color
     * <Box borderTopAmber100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopAmber100?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #fef3c7; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightAmber100></Box>
     * <Box borderRightAmber100--T20></Box> // transparentize color
     * <Box borderRightAmber100--O20></Box> // opacify color
     * <Box borderRightAmber100--L20></Box> // lighten color
     * <Box borderRightAmber100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightAmber100?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #fef3c7; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomAmber100></Box>
     * <Box borderBottomAmber100--T20></Box> // transparentize color
     * <Box borderBottomAmber100--O20></Box> // opacify color
     * <Box borderBottomAmber100--L20></Box> // lighten color
     * <Box borderBottomAmber100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomAmber100?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #fef3c7; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftAmber100></Box>
     * <Box borderLeftAmber100--T20></Box> // transparentize color
     * <Box borderLeftAmber100--O20></Box> // opacify color
     * <Box borderLeftAmber100--L20></Box> // lighten color
     * <Box borderLeftAmber100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftAmber100?: ResponsiveBoolean
    /**
     * Set border color to amber200
     * ```css
     * { border-color: #fde68a; }
     * ```
     * @example
     * ```tsx
     * <Box borderAmber200></Box>
     * <Box borderAmber200--T20></Box> // transparentize color
     * <Box borderAmber200--O20></Box> // opacify color
     * <Box borderAmber200--L20></Box> // lighten color
     * <Box borderAmber200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderAmber200?: ResponsiveBoolean
    /**
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #fde68a; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopAmber200></Box>
     * <Box borderTopAmber200--T20></Box> // transparentize color
     * <Box borderTopAmber200--O20></Box> // opacify color
     * <Box borderTopAmber200--L20></Box> // lighten color
     * <Box borderTopAmber200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopAmber200?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #fde68a; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightAmber200></Box>
     * <Box borderRightAmber200--T20></Box> // transparentize color
     * <Box borderRightAmber200--O20></Box> // opacify color
     * <Box borderRightAmber200--L20></Box> // lighten color
     * <Box borderRightAmber200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightAmber200?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #fde68a; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomAmber200></Box>
     * <Box borderBottomAmber200--T20></Box> // transparentize color
     * <Box borderBottomAmber200--O20></Box> // opacify color
     * <Box borderBottomAmber200--L20></Box> // lighten color
     * <Box borderBottomAmber200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomAmber200?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #fde68a; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftAmber200></Box>
     * <Box borderLeftAmber200--T20></Box> // transparentize color
     * <Box borderLeftAmber200--O20></Box> // opacify color
     * <Box borderLeftAmber200--L20></Box> // lighten color
     * <Box borderLeftAmber200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftAmber200?: ResponsiveBoolean
    /**
     * Set border color to amber300
     * ```css
     * { border-color: #fcd34d; }
     * ```
     * @example
     * ```tsx
     * <Box borderAmber300></Box>
     * <Box borderAmber300--T20></Box> // transparentize color
     * <Box borderAmber300--O20></Box> // opacify color
     * <Box borderAmber300--L20></Box> // lighten color
     * <Box borderAmber300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderAmber300?: ResponsiveBoolean
    /**
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #fcd34d; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopAmber300></Box>
     * <Box borderTopAmber300--T20></Box> // transparentize color
     * <Box borderTopAmber300--O20></Box> // opacify color
     * <Box borderTopAmber300--L20></Box> // lighten color
     * <Box borderTopAmber300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopAmber300?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #fcd34d; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightAmber300></Box>
     * <Box borderRightAmber300--T20></Box> // transparentize color
     * <Box borderRightAmber300--O20></Box> // opacify color
     * <Box borderRightAmber300--L20></Box> // lighten color
     * <Box borderRightAmber300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightAmber300?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #fcd34d; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomAmber300></Box>
     * <Box borderBottomAmber300--T20></Box> // transparentize color
     * <Box borderBottomAmber300--O20></Box> // opacify color
     * <Box borderBottomAmber300--L20></Box> // lighten color
     * <Box borderBottomAmber300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomAmber300?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #fcd34d; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftAmber300></Box>
     * <Box borderLeftAmber300--T20></Box> // transparentize color
     * <Box borderLeftAmber300--O20></Box> // opacify color
     * <Box borderLeftAmber300--L20></Box> // lighten color
     * <Box borderLeftAmber300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftAmber300?: ResponsiveBoolean
    /**
     * Set border color to amber400
     * ```css
     * { border-color: #fbbf24; }
     * ```
     * @example
     * ```tsx
     * <Box borderAmber400></Box>
     * <Box borderAmber400--T20></Box> // transparentize color
     * <Box borderAmber400--O20></Box> // opacify color
     * <Box borderAmber400--L20></Box> // lighten color
     * <Box borderAmber400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderAmber400?: ResponsiveBoolean
    /**
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #fbbf24; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopAmber400></Box>
     * <Box borderTopAmber400--T20></Box> // transparentize color
     * <Box borderTopAmber400--O20></Box> // opacify color
     * <Box borderTopAmber400--L20></Box> // lighten color
     * <Box borderTopAmber400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopAmber400?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #fbbf24; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightAmber400></Box>
     * <Box borderRightAmber400--T20></Box> // transparentize color
     * <Box borderRightAmber400--O20></Box> // opacify color
     * <Box borderRightAmber400--L20></Box> // lighten color
     * <Box borderRightAmber400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightAmber400?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #fbbf24; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomAmber400></Box>
     * <Box borderBottomAmber400--T20></Box> // transparentize color
     * <Box borderBottomAmber400--O20></Box> // opacify color
     * <Box borderBottomAmber400--L20></Box> // lighten color
     * <Box borderBottomAmber400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomAmber400?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #fbbf24; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftAmber400></Box>
     * <Box borderLeftAmber400--T20></Box> // transparentize color
     * <Box borderLeftAmber400--O20></Box> // opacify color
     * <Box borderLeftAmber400--L20></Box> // lighten color
     * <Box borderLeftAmber400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftAmber400?: ResponsiveBoolean
    /**
     * Set border color to amber500
     * ```css
     * { border-color: #f59e0b; }
     * ```
     * @example
     * ```tsx
     * <Box borderAmber500></Box>
     * <Box borderAmber500--T20></Box> // transparentize color
     * <Box borderAmber500--O20></Box> // opacify color
     * <Box borderAmber500--L20></Box> // lighten color
     * <Box borderAmber500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderAmber500?: ResponsiveBoolean
    /**
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #f59e0b; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopAmber500></Box>
     * <Box borderTopAmber500--T20></Box> // transparentize color
     * <Box borderTopAmber500--O20></Box> // opacify color
     * <Box borderTopAmber500--L20></Box> // lighten color
     * <Box borderTopAmber500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopAmber500?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #f59e0b; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightAmber500></Box>
     * <Box borderRightAmber500--T20></Box> // transparentize color
     * <Box borderRightAmber500--O20></Box> // opacify color
     * <Box borderRightAmber500--L20></Box> // lighten color
     * <Box borderRightAmber500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightAmber500?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #f59e0b; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomAmber500></Box>
     * <Box borderBottomAmber500--T20></Box> // transparentize color
     * <Box borderBottomAmber500--O20></Box> // opacify color
     * <Box borderBottomAmber500--L20></Box> // lighten color
     * <Box borderBottomAmber500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomAmber500?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #f59e0b; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftAmber500></Box>
     * <Box borderLeftAmber500--T20></Box> // transparentize color
     * <Box borderLeftAmber500--O20></Box> // opacify color
     * <Box borderLeftAmber500--L20></Box> // lighten color
     * <Box borderLeftAmber500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftAmber500?: ResponsiveBoolean
    /**
     * Set border color to amber600
     * ```css
     * { border-color: #d97706; }
     * ```
     * @example
     * ```tsx
     * <Box borderAmber600></Box>
     * <Box borderAmber600--T20></Box> // transparentize color
     * <Box borderAmber600--O20></Box> // opacify color
     * <Box borderAmber600--L20></Box> // lighten color
     * <Box borderAmber600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderAmber600?: ResponsiveBoolean
    /**
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #d97706; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopAmber600></Box>
     * <Box borderTopAmber600--T20></Box> // transparentize color
     * <Box borderTopAmber600--O20></Box> // opacify color
     * <Box borderTopAmber600--L20></Box> // lighten color
     * <Box borderTopAmber600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopAmber600?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #d97706; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightAmber600></Box>
     * <Box borderRightAmber600--T20></Box> // transparentize color
     * <Box borderRightAmber600--O20></Box> // opacify color
     * <Box borderRightAmber600--L20></Box> // lighten color
     * <Box borderRightAmber600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightAmber600?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #d97706; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomAmber600></Box>
     * <Box borderBottomAmber600--T20></Box> // transparentize color
     * <Box borderBottomAmber600--O20></Box> // opacify color
     * <Box borderBottomAmber600--L20></Box> // lighten color
     * <Box borderBottomAmber600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomAmber600?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #d97706; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftAmber600></Box>
     * <Box borderLeftAmber600--T20></Box> // transparentize color
     * <Box borderLeftAmber600--O20></Box> // opacify color
     * <Box borderLeftAmber600--L20></Box> // lighten color
     * <Box borderLeftAmber600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftAmber600?: ResponsiveBoolean
    /**
     * Set border color to amber700
     * ```css
     * { border-color: #b45309; }
     * ```
     * @example
     * ```tsx
     * <Box borderAmber700></Box>
     * <Box borderAmber700--T20></Box> // transparentize color
     * <Box borderAmber700--O20></Box> // opacify color
     * <Box borderAmber700--L20></Box> // lighten color
     * <Box borderAmber700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderAmber700?: ResponsiveBoolean
    /**
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #b45309; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopAmber700></Box>
     * <Box borderTopAmber700--T20></Box> // transparentize color
     * <Box borderTopAmber700--O20></Box> // opacify color
     * <Box borderTopAmber700--L20></Box> // lighten color
     * <Box borderTopAmber700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopAmber700?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #b45309; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightAmber700></Box>
     * <Box borderRightAmber700--T20></Box> // transparentize color
     * <Box borderRightAmber700--O20></Box> // opacify color
     * <Box borderRightAmber700--L20></Box> // lighten color
     * <Box borderRightAmber700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightAmber700?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #b45309; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomAmber700></Box>
     * <Box borderBottomAmber700--T20></Box> // transparentize color
     * <Box borderBottomAmber700--O20></Box> // opacify color
     * <Box borderBottomAmber700--L20></Box> // lighten color
     * <Box borderBottomAmber700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomAmber700?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #b45309; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftAmber700></Box>
     * <Box borderLeftAmber700--T20></Box> // transparentize color
     * <Box borderLeftAmber700--O20></Box> // opacify color
     * <Box borderLeftAmber700--L20></Box> // lighten color
     * <Box borderLeftAmber700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftAmber700?: ResponsiveBoolean
    /**
     * Set border color to amber800
     * ```css
     * { border-color: #92400e; }
     * ```
     * @example
     * ```tsx
     * <Box borderAmber800></Box>
     * <Box borderAmber800--T20></Box> // transparentize color
     * <Box borderAmber800--O20></Box> // opacify color
     * <Box borderAmber800--L20></Box> // lighten color
     * <Box borderAmber800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderAmber800?: ResponsiveBoolean
    /**
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #92400e; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopAmber800></Box>
     * <Box borderTopAmber800--T20></Box> // transparentize color
     * <Box borderTopAmber800--O20></Box> // opacify color
     * <Box borderTopAmber800--L20></Box> // lighten color
     * <Box borderTopAmber800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopAmber800?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #92400e; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightAmber800></Box>
     * <Box borderRightAmber800--T20></Box> // transparentize color
     * <Box borderRightAmber800--O20></Box> // opacify color
     * <Box borderRightAmber800--L20></Box> // lighten color
     * <Box borderRightAmber800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightAmber800?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #92400e; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomAmber800></Box>
     * <Box borderBottomAmber800--T20></Box> // transparentize color
     * <Box borderBottomAmber800--O20></Box> // opacify color
     * <Box borderBottomAmber800--L20></Box> // lighten color
     * <Box borderBottomAmber800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomAmber800?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #92400e; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftAmber800></Box>
     * <Box borderLeftAmber800--T20></Box> // transparentize color
     * <Box borderLeftAmber800--O20></Box> // opacify color
     * <Box borderLeftAmber800--L20></Box> // lighten color
     * <Box borderLeftAmber800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftAmber800?: ResponsiveBoolean
    /**
     * Set border color to amber900
     * ```css
     * { border-color: #78350f; }
     * ```
     * @example
     * ```tsx
     * <Box borderAmber900></Box>
     * <Box borderAmber900--T20></Box> // transparentize color
     * <Box borderAmber900--O20></Box> // opacify color
     * <Box borderAmber900--L20></Box> // lighten color
     * <Box borderAmber900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderAmber900?: ResponsiveBoolean
    /**
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #78350f; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopAmber900></Box>
     * <Box borderTopAmber900--T20></Box> // transparentize color
     * <Box borderTopAmber900--O20></Box> // opacify color
     * <Box borderTopAmber900--L20></Box> // lighten color
     * <Box borderTopAmber900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopAmber900?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #78350f; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightAmber900></Box>
     * <Box borderRightAmber900--T20></Box> // transparentize color
     * <Box borderRightAmber900--O20></Box> // opacify color
     * <Box borderRightAmber900--L20></Box> // lighten color
     * <Box borderRightAmber900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightAmber900?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #78350f; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomAmber900></Box>
     * <Box borderBottomAmber900--T20></Box> // transparentize color
     * <Box borderBottomAmber900--O20></Box> // opacify color
     * <Box borderBottomAmber900--L20></Box> // lighten color
     * <Box borderBottomAmber900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomAmber900?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #78350f; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftAmber900></Box>
     * <Box borderLeftAmber900--T20></Box> // transparentize color
     * <Box borderLeftAmber900--O20></Box> // opacify color
     * <Box borderLeftAmber900--L20></Box> // lighten color
     * <Box borderLeftAmber900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftAmber900?: ResponsiveBoolean
    /**
     * Set border color to orange50
     * ```css
     * { border-color: #fff7ed; }
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
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #fff7ed; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopOrange50></Box>
     * <Box borderTopOrange50--T20></Box> // transparentize color
     * <Box borderTopOrange50--O20></Box> // opacify color
     * <Box borderTopOrange50--L20></Box> // lighten color
     * <Box borderTopOrange50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopOrange50?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #fff7ed; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightOrange50></Box>
     * <Box borderRightOrange50--T20></Box> // transparentize color
     * <Box borderRightOrange50--O20></Box> // opacify color
     * <Box borderRightOrange50--L20></Box> // lighten color
     * <Box borderRightOrange50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightOrange50?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #fff7ed; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomOrange50></Box>
     * <Box borderBottomOrange50--T20></Box> // transparentize color
     * <Box borderBottomOrange50--O20></Box> // opacify color
     * <Box borderBottomOrange50--L20></Box> // lighten color
     * <Box borderBottomOrange50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomOrange50?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #fff7ed; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftOrange50></Box>
     * <Box borderLeftOrange50--T20></Box> // transparentize color
     * <Box borderLeftOrange50--O20></Box> // opacify color
     * <Box borderLeftOrange50--L20></Box> // lighten color
     * <Box borderLeftOrange50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftOrange50?: ResponsiveBoolean
    /**
     * Set border color to orange100
     * ```css
     * { border-color: #ffedd5; }
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
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #ffedd5; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopOrange100></Box>
     * <Box borderTopOrange100--T20></Box> // transparentize color
     * <Box borderTopOrange100--O20></Box> // opacify color
     * <Box borderTopOrange100--L20></Box> // lighten color
     * <Box borderTopOrange100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopOrange100?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #ffedd5; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightOrange100></Box>
     * <Box borderRightOrange100--T20></Box> // transparentize color
     * <Box borderRightOrange100--O20></Box> // opacify color
     * <Box borderRightOrange100--L20></Box> // lighten color
     * <Box borderRightOrange100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightOrange100?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #ffedd5; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomOrange100></Box>
     * <Box borderBottomOrange100--T20></Box> // transparentize color
     * <Box borderBottomOrange100--O20></Box> // opacify color
     * <Box borderBottomOrange100--L20></Box> // lighten color
     * <Box borderBottomOrange100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomOrange100?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #ffedd5; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftOrange100></Box>
     * <Box borderLeftOrange100--T20></Box> // transparentize color
     * <Box borderLeftOrange100--O20></Box> // opacify color
     * <Box borderLeftOrange100--L20></Box> // lighten color
     * <Box borderLeftOrange100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftOrange100?: ResponsiveBoolean
    /**
     * Set border color to orange200
     * ```css
     * { border-color: #fed7aa; }
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
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #fed7aa; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopOrange200></Box>
     * <Box borderTopOrange200--T20></Box> // transparentize color
     * <Box borderTopOrange200--O20></Box> // opacify color
     * <Box borderTopOrange200--L20></Box> // lighten color
     * <Box borderTopOrange200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopOrange200?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #fed7aa; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightOrange200></Box>
     * <Box borderRightOrange200--T20></Box> // transparentize color
     * <Box borderRightOrange200--O20></Box> // opacify color
     * <Box borderRightOrange200--L20></Box> // lighten color
     * <Box borderRightOrange200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightOrange200?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #fed7aa; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomOrange200></Box>
     * <Box borderBottomOrange200--T20></Box> // transparentize color
     * <Box borderBottomOrange200--O20></Box> // opacify color
     * <Box borderBottomOrange200--L20></Box> // lighten color
     * <Box borderBottomOrange200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomOrange200?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #fed7aa; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftOrange200></Box>
     * <Box borderLeftOrange200--T20></Box> // transparentize color
     * <Box borderLeftOrange200--O20></Box> // opacify color
     * <Box borderLeftOrange200--L20></Box> // lighten color
     * <Box borderLeftOrange200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftOrange200?: ResponsiveBoolean
    /**
     * Set border color to orange300
     * ```css
     * { border-color: #fdba74; }
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
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #fdba74; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopOrange300></Box>
     * <Box borderTopOrange300--T20></Box> // transparentize color
     * <Box borderTopOrange300--O20></Box> // opacify color
     * <Box borderTopOrange300--L20></Box> // lighten color
     * <Box borderTopOrange300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopOrange300?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #fdba74; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightOrange300></Box>
     * <Box borderRightOrange300--T20></Box> // transparentize color
     * <Box borderRightOrange300--O20></Box> // opacify color
     * <Box borderRightOrange300--L20></Box> // lighten color
     * <Box borderRightOrange300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightOrange300?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #fdba74; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomOrange300></Box>
     * <Box borderBottomOrange300--T20></Box> // transparentize color
     * <Box borderBottomOrange300--O20></Box> // opacify color
     * <Box borderBottomOrange300--L20></Box> // lighten color
     * <Box borderBottomOrange300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomOrange300?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #fdba74; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftOrange300></Box>
     * <Box borderLeftOrange300--T20></Box> // transparentize color
     * <Box borderLeftOrange300--O20></Box> // opacify color
     * <Box borderLeftOrange300--L20></Box> // lighten color
     * <Box borderLeftOrange300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftOrange300?: ResponsiveBoolean
    /**
     * Set border color to orange400
     * ```css
     * { border-color: #fb923c; }
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
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #fb923c; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopOrange400></Box>
     * <Box borderTopOrange400--T20></Box> // transparentize color
     * <Box borderTopOrange400--O20></Box> // opacify color
     * <Box borderTopOrange400--L20></Box> // lighten color
     * <Box borderTopOrange400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopOrange400?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #fb923c; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightOrange400></Box>
     * <Box borderRightOrange400--T20></Box> // transparentize color
     * <Box borderRightOrange400--O20></Box> // opacify color
     * <Box borderRightOrange400--L20></Box> // lighten color
     * <Box borderRightOrange400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightOrange400?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #fb923c; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomOrange400></Box>
     * <Box borderBottomOrange400--T20></Box> // transparentize color
     * <Box borderBottomOrange400--O20></Box> // opacify color
     * <Box borderBottomOrange400--L20></Box> // lighten color
     * <Box borderBottomOrange400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomOrange400?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #fb923c; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftOrange400></Box>
     * <Box borderLeftOrange400--T20></Box> // transparentize color
     * <Box borderLeftOrange400--O20></Box> // opacify color
     * <Box borderLeftOrange400--L20></Box> // lighten color
     * <Box borderLeftOrange400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftOrange400?: ResponsiveBoolean
    /**
     * Set border color to orange500
     * ```css
     * { border-color: #f97316; }
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
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #f97316; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopOrange500></Box>
     * <Box borderTopOrange500--T20></Box> // transparentize color
     * <Box borderTopOrange500--O20></Box> // opacify color
     * <Box borderTopOrange500--L20></Box> // lighten color
     * <Box borderTopOrange500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopOrange500?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #f97316; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightOrange500></Box>
     * <Box borderRightOrange500--T20></Box> // transparentize color
     * <Box borderRightOrange500--O20></Box> // opacify color
     * <Box borderRightOrange500--L20></Box> // lighten color
     * <Box borderRightOrange500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightOrange500?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #f97316; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomOrange500></Box>
     * <Box borderBottomOrange500--T20></Box> // transparentize color
     * <Box borderBottomOrange500--O20></Box> // opacify color
     * <Box borderBottomOrange500--L20></Box> // lighten color
     * <Box borderBottomOrange500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomOrange500?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #f97316; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftOrange500></Box>
     * <Box borderLeftOrange500--T20></Box> // transparentize color
     * <Box borderLeftOrange500--O20></Box> // opacify color
     * <Box borderLeftOrange500--L20></Box> // lighten color
     * <Box borderLeftOrange500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftOrange500?: ResponsiveBoolean
    /**
     * Set border color to orange600
     * ```css
     * { border-color: #ea580c; }
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
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #ea580c; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopOrange600></Box>
     * <Box borderTopOrange600--T20></Box> // transparentize color
     * <Box borderTopOrange600--O20></Box> // opacify color
     * <Box borderTopOrange600--L20></Box> // lighten color
     * <Box borderTopOrange600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopOrange600?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #ea580c; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightOrange600></Box>
     * <Box borderRightOrange600--T20></Box> // transparentize color
     * <Box borderRightOrange600--O20></Box> // opacify color
     * <Box borderRightOrange600--L20></Box> // lighten color
     * <Box borderRightOrange600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightOrange600?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #ea580c; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomOrange600></Box>
     * <Box borderBottomOrange600--T20></Box> // transparentize color
     * <Box borderBottomOrange600--O20></Box> // opacify color
     * <Box borderBottomOrange600--L20></Box> // lighten color
     * <Box borderBottomOrange600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomOrange600?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #ea580c; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftOrange600></Box>
     * <Box borderLeftOrange600--T20></Box> // transparentize color
     * <Box borderLeftOrange600--O20></Box> // opacify color
     * <Box borderLeftOrange600--L20></Box> // lighten color
     * <Box borderLeftOrange600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftOrange600?: ResponsiveBoolean
    /**
     * Set border color to orange700
     * ```css
     * { border-color: #c2410c; }
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
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #c2410c; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopOrange700></Box>
     * <Box borderTopOrange700--T20></Box> // transparentize color
     * <Box borderTopOrange700--O20></Box> // opacify color
     * <Box borderTopOrange700--L20></Box> // lighten color
     * <Box borderTopOrange700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopOrange700?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #c2410c; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightOrange700></Box>
     * <Box borderRightOrange700--T20></Box> // transparentize color
     * <Box borderRightOrange700--O20></Box> // opacify color
     * <Box borderRightOrange700--L20></Box> // lighten color
     * <Box borderRightOrange700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightOrange700?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #c2410c; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomOrange700></Box>
     * <Box borderBottomOrange700--T20></Box> // transparentize color
     * <Box borderBottomOrange700--O20></Box> // opacify color
     * <Box borderBottomOrange700--L20></Box> // lighten color
     * <Box borderBottomOrange700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomOrange700?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #c2410c; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftOrange700></Box>
     * <Box borderLeftOrange700--T20></Box> // transparentize color
     * <Box borderLeftOrange700--O20></Box> // opacify color
     * <Box borderLeftOrange700--L20></Box> // lighten color
     * <Box borderLeftOrange700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftOrange700?: ResponsiveBoolean
    /**
     * Set border color to orange800
     * ```css
     * { border-color: #9a3412; }
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
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #9a3412; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopOrange800></Box>
     * <Box borderTopOrange800--T20></Box> // transparentize color
     * <Box borderTopOrange800--O20></Box> // opacify color
     * <Box borderTopOrange800--L20></Box> // lighten color
     * <Box borderTopOrange800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopOrange800?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #9a3412; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightOrange800></Box>
     * <Box borderRightOrange800--T20></Box> // transparentize color
     * <Box borderRightOrange800--O20></Box> // opacify color
     * <Box borderRightOrange800--L20></Box> // lighten color
     * <Box borderRightOrange800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightOrange800?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #9a3412; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomOrange800></Box>
     * <Box borderBottomOrange800--T20></Box> // transparentize color
     * <Box borderBottomOrange800--O20></Box> // opacify color
     * <Box borderBottomOrange800--L20></Box> // lighten color
     * <Box borderBottomOrange800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomOrange800?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #9a3412; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftOrange800></Box>
     * <Box borderLeftOrange800--T20></Box> // transparentize color
     * <Box borderLeftOrange800--O20></Box> // opacify color
     * <Box borderLeftOrange800--L20></Box> // lighten color
     * <Box borderLeftOrange800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftOrange800?: ResponsiveBoolean
    /**
     * Set border color to orange900
     * ```css
     * { border-color: #7c2d12; }
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
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #7c2d12; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopOrange900></Box>
     * <Box borderTopOrange900--T20></Box> // transparentize color
     * <Box borderTopOrange900--O20></Box> // opacify color
     * <Box borderTopOrange900--L20></Box> // lighten color
     * <Box borderTopOrange900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopOrange900?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #7c2d12; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightOrange900></Box>
     * <Box borderRightOrange900--T20></Box> // transparentize color
     * <Box borderRightOrange900--O20></Box> // opacify color
     * <Box borderRightOrange900--L20></Box> // lighten color
     * <Box borderRightOrange900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightOrange900?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #7c2d12; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomOrange900></Box>
     * <Box borderBottomOrange900--T20></Box> // transparentize color
     * <Box borderBottomOrange900--O20></Box> // opacify color
     * <Box borderBottomOrange900--L20></Box> // lighten color
     * <Box borderBottomOrange900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomOrange900?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #7c2d12; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftOrange900></Box>
     * <Box borderLeftOrange900--T20></Box> // transparentize color
     * <Box borderLeftOrange900--O20></Box> // opacify color
     * <Box borderLeftOrange900--L20></Box> // lighten color
     * <Box borderLeftOrange900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftOrange900?: ResponsiveBoolean
    /**
     * Set border color to red50
     * ```css
     * { border-color: #fef2f2; }
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
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #fef2f2; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopRed50></Box>
     * <Box borderTopRed50--T20></Box> // transparentize color
     * <Box borderTopRed50--O20></Box> // opacify color
     * <Box borderTopRed50--L20></Box> // lighten color
     * <Box borderTopRed50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopRed50?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #fef2f2; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightRed50></Box>
     * <Box borderRightRed50--T20></Box> // transparentize color
     * <Box borderRightRed50--O20></Box> // opacify color
     * <Box borderRightRed50--L20></Box> // lighten color
     * <Box borderRightRed50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightRed50?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #fef2f2; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomRed50></Box>
     * <Box borderBottomRed50--T20></Box> // transparentize color
     * <Box borderBottomRed50--O20></Box> // opacify color
     * <Box borderBottomRed50--L20></Box> // lighten color
     * <Box borderBottomRed50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomRed50?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #fef2f2; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftRed50></Box>
     * <Box borderLeftRed50--T20></Box> // transparentize color
     * <Box borderLeftRed50--O20></Box> // opacify color
     * <Box borderLeftRed50--L20></Box> // lighten color
     * <Box borderLeftRed50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftRed50?: ResponsiveBoolean
    /**
     * Set border color to red100
     * ```css
     * { border-color: #fee2e2; }
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
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #fee2e2; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopRed100></Box>
     * <Box borderTopRed100--T20></Box> // transparentize color
     * <Box borderTopRed100--O20></Box> // opacify color
     * <Box borderTopRed100--L20></Box> // lighten color
     * <Box borderTopRed100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopRed100?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #fee2e2; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightRed100></Box>
     * <Box borderRightRed100--T20></Box> // transparentize color
     * <Box borderRightRed100--O20></Box> // opacify color
     * <Box borderRightRed100--L20></Box> // lighten color
     * <Box borderRightRed100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightRed100?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #fee2e2; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomRed100></Box>
     * <Box borderBottomRed100--T20></Box> // transparentize color
     * <Box borderBottomRed100--O20></Box> // opacify color
     * <Box borderBottomRed100--L20></Box> // lighten color
     * <Box borderBottomRed100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomRed100?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #fee2e2; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftRed100></Box>
     * <Box borderLeftRed100--T20></Box> // transparentize color
     * <Box borderLeftRed100--O20></Box> // opacify color
     * <Box borderLeftRed100--L20></Box> // lighten color
     * <Box borderLeftRed100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftRed100?: ResponsiveBoolean
    /**
     * Set border color to red200
     * ```css
     * { border-color: #fecaca; }
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
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #fecaca; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopRed200></Box>
     * <Box borderTopRed200--T20></Box> // transparentize color
     * <Box borderTopRed200--O20></Box> // opacify color
     * <Box borderTopRed200--L20></Box> // lighten color
     * <Box borderTopRed200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopRed200?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #fecaca; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightRed200></Box>
     * <Box borderRightRed200--T20></Box> // transparentize color
     * <Box borderRightRed200--O20></Box> // opacify color
     * <Box borderRightRed200--L20></Box> // lighten color
     * <Box borderRightRed200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightRed200?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #fecaca; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomRed200></Box>
     * <Box borderBottomRed200--T20></Box> // transparentize color
     * <Box borderBottomRed200--O20></Box> // opacify color
     * <Box borderBottomRed200--L20></Box> // lighten color
     * <Box borderBottomRed200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomRed200?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #fecaca; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftRed200></Box>
     * <Box borderLeftRed200--T20></Box> // transparentize color
     * <Box borderLeftRed200--O20></Box> // opacify color
     * <Box borderLeftRed200--L20></Box> // lighten color
     * <Box borderLeftRed200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftRed200?: ResponsiveBoolean
    /**
     * Set border color to red300
     * ```css
     * { border-color: #fca5a5; }
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
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #fca5a5; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopRed300></Box>
     * <Box borderTopRed300--T20></Box> // transparentize color
     * <Box borderTopRed300--O20></Box> // opacify color
     * <Box borderTopRed300--L20></Box> // lighten color
     * <Box borderTopRed300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopRed300?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #fca5a5; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightRed300></Box>
     * <Box borderRightRed300--T20></Box> // transparentize color
     * <Box borderRightRed300--O20></Box> // opacify color
     * <Box borderRightRed300--L20></Box> // lighten color
     * <Box borderRightRed300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightRed300?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #fca5a5; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomRed300></Box>
     * <Box borderBottomRed300--T20></Box> // transparentize color
     * <Box borderBottomRed300--O20></Box> // opacify color
     * <Box borderBottomRed300--L20></Box> // lighten color
     * <Box borderBottomRed300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomRed300?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #fca5a5; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftRed300></Box>
     * <Box borderLeftRed300--T20></Box> // transparentize color
     * <Box borderLeftRed300--O20></Box> // opacify color
     * <Box borderLeftRed300--L20></Box> // lighten color
     * <Box borderLeftRed300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftRed300?: ResponsiveBoolean
    /**
     * Set border color to red400
     * ```css
     * { border-color: #f87171; }
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
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #f87171; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopRed400></Box>
     * <Box borderTopRed400--T20></Box> // transparentize color
     * <Box borderTopRed400--O20></Box> // opacify color
     * <Box borderTopRed400--L20></Box> // lighten color
     * <Box borderTopRed400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopRed400?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #f87171; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightRed400></Box>
     * <Box borderRightRed400--T20></Box> // transparentize color
     * <Box borderRightRed400--O20></Box> // opacify color
     * <Box borderRightRed400--L20></Box> // lighten color
     * <Box borderRightRed400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightRed400?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #f87171; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomRed400></Box>
     * <Box borderBottomRed400--T20></Box> // transparentize color
     * <Box borderBottomRed400--O20></Box> // opacify color
     * <Box borderBottomRed400--L20></Box> // lighten color
     * <Box borderBottomRed400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomRed400?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #f87171; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftRed400></Box>
     * <Box borderLeftRed400--T20></Box> // transparentize color
     * <Box borderLeftRed400--O20></Box> // opacify color
     * <Box borderLeftRed400--L20></Box> // lighten color
     * <Box borderLeftRed400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftRed400?: ResponsiveBoolean
    /**
     * Set border color to red500
     * ```css
     * { border-color: #ef4444; }
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
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #ef4444; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopRed500></Box>
     * <Box borderTopRed500--T20></Box> // transparentize color
     * <Box borderTopRed500--O20></Box> // opacify color
     * <Box borderTopRed500--L20></Box> // lighten color
     * <Box borderTopRed500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopRed500?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #ef4444; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightRed500></Box>
     * <Box borderRightRed500--T20></Box> // transparentize color
     * <Box borderRightRed500--O20></Box> // opacify color
     * <Box borderRightRed500--L20></Box> // lighten color
     * <Box borderRightRed500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightRed500?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #ef4444; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomRed500></Box>
     * <Box borderBottomRed500--T20></Box> // transparentize color
     * <Box borderBottomRed500--O20></Box> // opacify color
     * <Box borderBottomRed500--L20></Box> // lighten color
     * <Box borderBottomRed500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomRed500?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #ef4444; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftRed500></Box>
     * <Box borderLeftRed500--T20></Box> // transparentize color
     * <Box borderLeftRed500--O20></Box> // opacify color
     * <Box borderLeftRed500--L20></Box> // lighten color
     * <Box borderLeftRed500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftRed500?: ResponsiveBoolean
    /**
     * Set border color to red600
     * ```css
     * { border-color: #dc2626; }
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
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #dc2626; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopRed600></Box>
     * <Box borderTopRed600--T20></Box> // transparentize color
     * <Box borderTopRed600--O20></Box> // opacify color
     * <Box borderTopRed600--L20></Box> // lighten color
     * <Box borderTopRed600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopRed600?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #dc2626; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightRed600></Box>
     * <Box borderRightRed600--T20></Box> // transparentize color
     * <Box borderRightRed600--O20></Box> // opacify color
     * <Box borderRightRed600--L20></Box> // lighten color
     * <Box borderRightRed600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightRed600?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #dc2626; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomRed600></Box>
     * <Box borderBottomRed600--T20></Box> // transparentize color
     * <Box borderBottomRed600--O20></Box> // opacify color
     * <Box borderBottomRed600--L20></Box> // lighten color
     * <Box borderBottomRed600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomRed600?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #dc2626; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftRed600></Box>
     * <Box borderLeftRed600--T20></Box> // transparentize color
     * <Box borderLeftRed600--O20></Box> // opacify color
     * <Box borderLeftRed600--L20></Box> // lighten color
     * <Box borderLeftRed600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftRed600?: ResponsiveBoolean
    /**
     * Set border color to red700
     * ```css
     * { border-color: #b91c1c; }
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
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #b91c1c; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopRed700></Box>
     * <Box borderTopRed700--T20></Box> // transparentize color
     * <Box borderTopRed700--O20></Box> // opacify color
     * <Box borderTopRed700--L20></Box> // lighten color
     * <Box borderTopRed700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopRed700?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #b91c1c; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightRed700></Box>
     * <Box borderRightRed700--T20></Box> // transparentize color
     * <Box borderRightRed700--O20></Box> // opacify color
     * <Box borderRightRed700--L20></Box> // lighten color
     * <Box borderRightRed700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightRed700?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #b91c1c; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomRed700></Box>
     * <Box borderBottomRed700--T20></Box> // transparentize color
     * <Box borderBottomRed700--O20></Box> // opacify color
     * <Box borderBottomRed700--L20></Box> // lighten color
     * <Box borderBottomRed700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomRed700?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #b91c1c; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftRed700></Box>
     * <Box borderLeftRed700--T20></Box> // transparentize color
     * <Box borderLeftRed700--O20></Box> // opacify color
     * <Box borderLeftRed700--L20></Box> // lighten color
     * <Box borderLeftRed700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftRed700?: ResponsiveBoolean
    /**
     * Set border color to red800
     * ```css
     * { border-color: #991b1b; }
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
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #991b1b; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopRed800></Box>
     * <Box borderTopRed800--T20></Box> // transparentize color
     * <Box borderTopRed800--O20></Box> // opacify color
     * <Box borderTopRed800--L20></Box> // lighten color
     * <Box borderTopRed800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopRed800?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #991b1b; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightRed800></Box>
     * <Box borderRightRed800--T20></Box> // transparentize color
     * <Box borderRightRed800--O20></Box> // opacify color
     * <Box borderRightRed800--L20></Box> // lighten color
     * <Box borderRightRed800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightRed800?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #991b1b; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomRed800></Box>
     * <Box borderBottomRed800--T20></Box> // transparentize color
     * <Box borderBottomRed800--O20></Box> // opacify color
     * <Box borderBottomRed800--L20></Box> // lighten color
     * <Box borderBottomRed800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomRed800?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #991b1b; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftRed800></Box>
     * <Box borderLeftRed800--T20></Box> // transparentize color
     * <Box borderLeftRed800--O20></Box> // opacify color
     * <Box borderLeftRed800--L20></Box> // lighten color
     * <Box borderLeftRed800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftRed800?: ResponsiveBoolean
    /**
     * Set border color to red900
     * ```css
     * { border-color: #7f1d1d; }
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
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #7f1d1d; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopRed900></Box>
     * <Box borderTopRed900--T20></Box> // transparentize color
     * <Box borderTopRed900--O20></Box> // opacify color
     * <Box borderTopRed900--L20></Box> // lighten color
     * <Box borderTopRed900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopRed900?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #7f1d1d; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightRed900></Box>
     * <Box borderRightRed900--T20></Box> // transparentize color
     * <Box borderRightRed900--O20></Box> // opacify color
     * <Box borderRightRed900--L20></Box> // lighten color
     * <Box borderRightRed900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightRed900?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #7f1d1d; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomRed900></Box>
     * <Box borderBottomRed900--T20></Box> // transparentize color
     * <Box borderBottomRed900--O20></Box> // opacify color
     * <Box borderBottomRed900--L20></Box> // lighten color
     * <Box borderBottomRed900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomRed900?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #7f1d1d; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftRed900></Box>
     * <Box borderLeftRed900--T20></Box> // transparentize color
     * <Box borderLeftRed900--O20></Box> // opacify color
     * <Box borderLeftRed900--L20></Box> // lighten color
     * <Box borderLeftRed900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftRed900?: ResponsiveBoolean
    /**
     * Set border color to warmGray50
     * ```css
     * { border-color: #fafaf9; }
     * ```
     * @example
     * ```tsx
     * <Box borderWarmGray50></Box>
     * <Box borderWarmGray50--T20></Box> // transparentize color
     * <Box borderWarmGray50--O20></Box> // opacify color
     * <Box borderWarmGray50--L20></Box> // lighten color
     * <Box borderWarmGray50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderWarmGray50?: ResponsiveBoolean
    /**
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #fafaf9; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopWarmGray50></Box>
     * <Box borderTopWarmGray50--T20></Box> // transparentize color
     * <Box borderTopWarmGray50--O20></Box> // opacify color
     * <Box borderTopWarmGray50--L20></Box> // lighten color
     * <Box borderTopWarmGray50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopWarmGray50?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #fafaf9; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightWarmGray50></Box>
     * <Box borderRightWarmGray50--T20></Box> // transparentize color
     * <Box borderRightWarmGray50--O20></Box> // opacify color
     * <Box borderRightWarmGray50--L20></Box> // lighten color
     * <Box borderRightWarmGray50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightWarmGray50?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #fafaf9; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomWarmGray50></Box>
     * <Box borderBottomWarmGray50--T20></Box> // transparentize color
     * <Box borderBottomWarmGray50--O20></Box> // opacify color
     * <Box borderBottomWarmGray50--L20></Box> // lighten color
     * <Box borderBottomWarmGray50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomWarmGray50?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #fafaf9; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftWarmGray50></Box>
     * <Box borderLeftWarmGray50--T20></Box> // transparentize color
     * <Box borderLeftWarmGray50--O20></Box> // opacify color
     * <Box borderLeftWarmGray50--L20></Box> // lighten color
     * <Box borderLeftWarmGray50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftWarmGray50?: ResponsiveBoolean
    /**
     * Set border color to warmGray100
     * ```css
     * { border-color: #f5f5f4; }
     * ```
     * @example
     * ```tsx
     * <Box borderWarmGray100></Box>
     * <Box borderWarmGray100--T20></Box> // transparentize color
     * <Box borderWarmGray100--O20></Box> // opacify color
     * <Box borderWarmGray100--L20></Box> // lighten color
     * <Box borderWarmGray100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderWarmGray100?: ResponsiveBoolean
    /**
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #f5f5f4; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopWarmGray100></Box>
     * <Box borderTopWarmGray100--T20></Box> // transparentize color
     * <Box borderTopWarmGray100--O20></Box> // opacify color
     * <Box borderTopWarmGray100--L20></Box> // lighten color
     * <Box borderTopWarmGray100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopWarmGray100?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #f5f5f4; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightWarmGray100></Box>
     * <Box borderRightWarmGray100--T20></Box> // transparentize color
     * <Box borderRightWarmGray100--O20></Box> // opacify color
     * <Box borderRightWarmGray100--L20></Box> // lighten color
     * <Box borderRightWarmGray100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightWarmGray100?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #f5f5f4; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomWarmGray100></Box>
     * <Box borderBottomWarmGray100--T20></Box> // transparentize color
     * <Box borderBottomWarmGray100--O20></Box> // opacify color
     * <Box borderBottomWarmGray100--L20></Box> // lighten color
     * <Box borderBottomWarmGray100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomWarmGray100?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #f5f5f4; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftWarmGray100></Box>
     * <Box borderLeftWarmGray100--T20></Box> // transparentize color
     * <Box borderLeftWarmGray100--O20></Box> // opacify color
     * <Box borderLeftWarmGray100--L20></Box> // lighten color
     * <Box borderLeftWarmGray100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftWarmGray100?: ResponsiveBoolean
    /**
     * Set border color to warmGray200
     * ```css
     * { border-color: #e7e5e4; }
     * ```
     * @example
     * ```tsx
     * <Box borderWarmGray200></Box>
     * <Box borderWarmGray200--T20></Box> // transparentize color
     * <Box borderWarmGray200--O20></Box> // opacify color
     * <Box borderWarmGray200--L20></Box> // lighten color
     * <Box borderWarmGray200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderWarmGray200?: ResponsiveBoolean
    /**
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #e7e5e4; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopWarmGray200></Box>
     * <Box borderTopWarmGray200--T20></Box> // transparentize color
     * <Box borderTopWarmGray200--O20></Box> // opacify color
     * <Box borderTopWarmGray200--L20></Box> // lighten color
     * <Box borderTopWarmGray200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopWarmGray200?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #e7e5e4; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightWarmGray200></Box>
     * <Box borderRightWarmGray200--T20></Box> // transparentize color
     * <Box borderRightWarmGray200--O20></Box> // opacify color
     * <Box borderRightWarmGray200--L20></Box> // lighten color
     * <Box borderRightWarmGray200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightWarmGray200?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #e7e5e4; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomWarmGray200></Box>
     * <Box borderBottomWarmGray200--T20></Box> // transparentize color
     * <Box borderBottomWarmGray200--O20></Box> // opacify color
     * <Box borderBottomWarmGray200--L20></Box> // lighten color
     * <Box borderBottomWarmGray200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomWarmGray200?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #e7e5e4; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftWarmGray200></Box>
     * <Box borderLeftWarmGray200--T20></Box> // transparentize color
     * <Box borderLeftWarmGray200--O20></Box> // opacify color
     * <Box borderLeftWarmGray200--L20></Box> // lighten color
     * <Box borderLeftWarmGray200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftWarmGray200?: ResponsiveBoolean
    /**
     * Set border color to warmGray300
     * ```css
     * { border-color: #d6d3d1; }
     * ```
     * @example
     * ```tsx
     * <Box borderWarmGray300></Box>
     * <Box borderWarmGray300--T20></Box> // transparentize color
     * <Box borderWarmGray300--O20></Box> // opacify color
     * <Box borderWarmGray300--L20></Box> // lighten color
     * <Box borderWarmGray300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderWarmGray300?: ResponsiveBoolean
    /**
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #d6d3d1; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopWarmGray300></Box>
     * <Box borderTopWarmGray300--T20></Box> // transparentize color
     * <Box borderTopWarmGray300--O20></Box> // opacify color
     * <Box borderTopWarmGray300--L20></Box> // lighten color
     * <Box borderTopWarmGray300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopWarmGray300?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #d6d3d1; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightWarmGray300></Box>
     * <Box borderRightWarmGray300--T20></Box> // transparentize color
     * <Box borderRightWarmGray300--O20></Box> // opacify color
     * <Box borderRightWarmGray300--L20></Box> // lighten color
     * <Box borderRightWarmGray300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightWarmGray300?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #d6d3d1; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomWarmGray300></Box>
     * <Box borderBottomWarmGray300--T20></Box> // transparentize color
     * <Box borderBottomWarmGray300--O20></Box> // opacify color
     * <Box borderBottomWarmGray300--L20></Box> // lighten color
     * <Box borderBottomWarmGray300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomWarmGray300?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #d6d3d1; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftWarmGray300></Box>
     * <Box borderLeftWarmGray300--T20></Box> // transparentize color
     * <Box borderLeftWarmGray300--O20></Box> // opacify color
     * <Box borderLeftWarmGray300--L20></Box> // lighten color
     * <Box borderLeftWarmGray300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftWarmGray300?: ResponsiveBoolean
    /**
     * Set border color to warmGray400
     * ```css
     * { border-color: #a8a29e; }
     * ```
     * @example
     * ```tsx
     * <Box borderWarmGray400></Box>
     * <Box borderWarmGray400--T20></Box> // transparentize color
     * <Box borderWarmGray400--O20></Box> // opacify color
     * <Box borderWarmGray400--L20></Box> // lighten color
     * <Box borderWarmGray400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderWarmGray400?: ResponsiveBoolean
    /**
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #a8a29e; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopWarmGray400></Box>
     * <Box borderTopWarmGray400--T20></Box> // transparentize color
     * <Box borderTopWarmGray400--O20></Box> // opacify color
     * <Box borderTopWarmGray400--L20></Box> // lighten color
     * <Box borderTopWarmGray400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopWarmGray400?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #a8a29e; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightWarmGray400></Box>
     * <Box borderRightWarmGray400--T20></Box> // transparentize color
     * <Box borderRightWarmGray400--O20></Box> // opacify color
     * <Box borderRightWarmGray400--L20></Box> // lighten color
     * <Box borderRightWarmGray400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightWarmGray400?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #a8a29e; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomWarmGray400></Box>
     * <Box borderBottomWarmGray400--T20></Box> // transparentize color
     * <Box borderBottomWarmGray400--O20></Box> // opacify color
     * <Box borderBottomWarmGray400--L20></Box> // lighten color
     * <Box borderBottomWarmGray400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomWarmGray400?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #a8a29e; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftWarmGray400></Box>
     * <Box borderLeftWarmGray400--T20></Box> // transparentize color
     * <Box borderLeftWarmGray400--O20></Box> // opacify color
     * <Box borderLeftWarmGray400--L20></Box> // lighten color
     * <Box borderLeftWarmGray400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftWarmGray400?: ResponsiveBoolean
    /**
     * Set border color to warmGray500
     * ```css
     * { border-color: #78716c; }
     * ```
     * @example
     * ```tsx
     * <Box borderWarmGray500></Box>
     * <Box borderWarmGray500--T20></Box> // transparentize color
     * <Box borderWarmGray500--O20></Box> // opacify color
     * <Box borderWarmGray500--L20></Box> // lighten color
     * <Box borderWarmGray500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderWarmGray500?: ResponsiveBoolean
    /**
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #78716c; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopWarmGray500></Box>
     * <Box borderTopWarmGray500--T20></Box> // transparentize color
     * <Box borderTopWarmGray500--O20></Box> // opacify color
     * <Box borderTopWarmGray500--L20></Box> // lighten color
     * <Box borderTopWarmGray500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopWarmGray500?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #78716c; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightWarmGray500></Box>
     * <Box borderRightWarmGray500--T20></Box> // transparentize color
     * <Box borderRightWarmGray500--O20></Box> // opacify color
     * <Box borderRightWarmGray500--L20></Box> // lighten color
     * <Box borderRightWarmGray500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightWarmGray500?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #78716c; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomWarmGray500></Box>
     * <Box borderBottomWarmGray500--T20></Box> // transparentize color
     * <Box borderBottomWarmGray500--O20></Box> // opacify color
     * <Box borderBottomWarmGray500--L20></Box> // lighten color
     * <Box borderBottomWarmGray500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomWarmGray500?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #78716c; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftWarmGray500></Box>
     * <Box borderLeftWarmGray500--T20></Box> // transparentize color
     * <Box borderLeftWarmGray500--O20></Box> // opacify color
     * <Box borderLeftWarmGray500--L20></Box> // lighten color
     * <Box borderLeftWarmGray500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftWarmGray500?: ResponsiveBoolean
    /**
     * Set border color to warmGray600
     * ```css
     * { border-color: #57534e; }
     * ```
     * @example
     * ```tsx
     * <Box borderWarmGray600></Box>
     * <Box borderWarmGray600--T20></Box> // transparentize color
     * <Box borderWarmGray600--O20></Box> // opacify color
     * <Box borderWarmGray600--L20></Box> // lighten color
     * <Box borderWarmGray600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderWarmGray600?: ResponsiveBoolean
    /**
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #57534e; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopWarmGray600></Box>
     * <Box borderTopWarmGray600--T20></Box> // transparentize color
     * <Box borderTopWarmGray600--O20></Box> // opacify color
     * <Box borderTopWarmGray600--L20></Box> // lighten color
     * <Box borderTopWarmGray600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopWarmGray600?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #57534e; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightWarmGray600></Box>
     * <Box borderRightWarmGray600--T20></Box> // transparentize color
     * <Box borderRightWarmGray600--O20></Box> // opacify color
     * <Box borderRightWarmGray600--L20></Box> // lighten color
     * <Box borderRightWarmGray600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightWarmGray600?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #57534e; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomWarmGray600></Box>
     * <Box borderBottomWarmGray600--T20></Box> // transparentize color
     * <Box borderBottomWarmGray600--O20></Box> // opacify color
     * <Box borderBottomWarmGray600--L20></Box> // lighten color
     * <Box borderBottomWarmGray600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomWarmGray600?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #57534e; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftWarmGray600></Box>
     * <Box borderLeftWarmGray600--T20></Box> // transparentize color
     * <Box borderLeftWarmGray600--O20></Box> // opacify color
     * <Box borderLeftWarmGray600--L20></Box> // lighten color
     * <Box borderLeftWarmGray600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftWarmGray600?: ResponsiveBoolean
    /**
     * Set border color to warmGray700
     * ```css
     * { border-color: #44403c; }
     * ```
     * @example
     * ```tsx
     * <Box borderWarmGray700></Box>
     * <Box borderWarmGray700--T20></Box> // transparentize color
     * <Box borderWarmGray700--O20></Box> // opacify color
     * <Box borderWarmGray700--L20></Box> // lighten color
     * <Box borderWarmGray700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderWarmGray700?: ResponsiveBoolean
    /**
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #44403c; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopWarmGray700></Box>
     * <Box borderTopWarmGray700--T20></Box> // transparentize color
     * <Box borderTopWarmGray700--O20></Box> // opacify color
     * <Box borderTopWarmGray700--L20></Box> // lighten color
     * <Box borderTopWarmGray700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopWarmGray700?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #44403c; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightWarmGray700></Box>
     * <Box borderRightWarmGray700--T20></Box> // transparentize color
     * <Box borderRightWarmGray700--O20></Box> // opacify color
     * <Box borderRightWarmGray700--L20></Box> // lighten color
     * <Box borderRightWarmGray700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightWarmGray700?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #44403c; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomWarmGray700></Box>
     * <Box borderBottomWarmGray700--T20></Box> // transparentize color
     * <Box borderBottomWarmGray700--O20></Box> // opacify color
     * <Box borderBottomWarmGray700--L20></Box> // lighten color
     * <Box borderBottomWarmGray700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomWarmGray700?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #44403c; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftWarmGray700></Box>
     * <Box borderLeftWarmGray700--T20></Box> // transparentize color
     * <Box borderLeftWarmGray700--O20></Box> // opacify color
     * <Box borderLeftWarmGray700--L20></Box> // lighten color
     * <Box borderLeftWarmGray700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftWarmGray700?: ResponsiveBoolean
    /**
     * Set border color to warmGray800
     * ```css
     * { border-color: #292524; }
     * ```
     * @example
     * ```tsx
     * <Box borderWarmGray800></Box>
     * <Box borderWarmGray800--T20></Box> // transparentize color
     * <Box borderWarmGray800--O20></Box> // opacify color
     * <Box borderWarmGray800--L20></Box> // lighten color
     * <Box borderWarmGray800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderWarmGray800?: ResponsiveBoolean
    /**
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #292524; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopWarmGray800></Box>
     * <Box borderTopWarmGray800--T20></Box> // transparentize color
     * <Box borderTopWarmGray800--O20></Box> // opacify color
     * <Box borderTopWarmGray800--L20></Box> // lighten color
     * <Box borderTopWarmGray800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopWarmGray800?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #292524; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightWarmGray800></Box>
     * <Box borderRightWarmGray800--T20></Box> // transparentize color
     * <Box borderRightWarmGray800--O20></Box> // opacify color
     * <Box borderRightWarmGray800--L20></Box> // lighten color
     * <Box borderRightWarmGray800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightWarmGray800?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #292524; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomWarmGray800></Box>
     * <Box borderBottomWarmGray800--T20></Box> // transparentize color
     * <Box borderBottomWarmGray800--O20></Box> // opacify color
     * <Box borderBottomWarmGray800--L20></Box> // lighten color
     * <Box borderBottomWarmGray800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomWarmGray800?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #292524; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftWarmGray800></Box>
     * <Box borderLeftWarmGray800--T20></Box> // transparentize color
     * <Box borderLeftWarmGray800--O20></Box> // opacify color
     * <Box borderLeftWarmGray800--L20></Box> // lighten color
     * <Box borderLeftWarmGray800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftWarmGray800?: ResponsiveBoolean
    /**
     * Set border color to warmGray900
     * ```css
     * { border-color: #1c1917; }
     * ```
     * @example
     * ```tsx
     * <Box borderWarmGray900></Box>
     * <Box borderWarmGray900--T20></Box> // transparentize color
     * <Box borderWarmGray900--O20></Box> // opacify color
     * <Box borderWarmGray900--L20></Box> // lighten color
     * <Box borderWarmGray900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderWarmGray900?: ResponsiveBoolean
    /**
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #1c1917; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopWarmGray900></Box>
     * <Box borderTopWarmGray900--T20></Box> // transparentize color
     * <Box borderTopWarmGray900--O20></Box> // opacify color
     * <Box borderTopWarmGray900--L20></Box> // lighten color
     * <Box borderTopWarmGray900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopWarmGray900?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #1c1917; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightWarmGray900></Box>
     * <Box borderRightWarmGray900--T20></Box> // transparentize color
     * <Box borderRightWarmGray900--O20></Box> // opacify color
     * <Box borderRightWarmGray900--L20></Box> // lighten color
     * <Box borderRightWarmGray900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightWarmGray900?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #1c1917; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomWarmGray900></Box>
     * <Box borderBottomWarmGray900--T20></Box> // transparentize color
     * <Box borderBottomWarmGray900--O20></Box> // opacify color
     * <Box borderBottomWarmGray900--L20></Box> // lighten color
     * <Box borderBottomWarmGray900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomWarmGray900?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #1c1917; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftWarmGray900></Box>
     * <Box borderLeftWarmGray900--T20></Box> // transparentize color
     * <Box borderLeftWarmGray900--O20></Box> // opacify color
     * <Box borderLeftWarmGray900--L20></Box> // lighten color
     * <Box borderLeftWarmGray900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftWarmGray900?: ResponsiveBoolean
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
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #fafafa; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopTrueGray50></Box>
     * <Box borderTopTrueGray50--T20></Box> // transparentize color
     * <Box borderTopTrueGray50--O20></Box> // opacify color
     * <Box borderTopTrueGray50--L20></Box> // lighten color
     * <Box borderTopTrueGray50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopTrueGray50?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #fafafa; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightTrueGray50></Box>
     * <Box borderRightTrueGray50--T20></Box> // transparentize color
     * <Box borderRightTrueGray50--O20></Box> // opacify color
     * <Box borderRightTrueGray50--L20></Box> // lighten color
     * <Box borderRightTrueGray50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightTrueGray50?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #fafafa; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomTrueGray50></Box>
     * <Box borderBottomTrueGray50--T20></Box> // transparentize color
     * <Box borderBottomTrueGray50--O20></Box> // opacify color
     * <Box borderBottomTrueGray50--L20></Box> // lighten color
     * <Box borderBottomTrueGray50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomTrueGray50?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #fafafa; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftTrueGray50></Box>
     * <Box borderLeftTrueGray50--T20></Box> // transparentize color
     * <Box borderLeftTrueGray50--O20></Box> // opacify color
     * <Box borderLeftTrueGray50--L20></Box> // lighten color
     * <Box borderLeftTrueGray50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftTrueGray50?: ResponsiveBoolean
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
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #f5f5f5; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopTrueGray100></Box>
     * <Box borderTopTrueGray100--T20></Box> // transparentize color
     * <Box borderTopTrueGray100--O20></Box> // opacify color
     * <Box borderTopTrueGray100--L20></Box> // lighten color
     * <Box borderTopTrueGray100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopTrueGray100?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #f5f5f5; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightTrueGray100></Box>
     * <Box borderRightTrueGray100--T20></Box> // transparentize color
     * <Box borderRightTrueGray100--O20></Box> // opacify color
     * <Box borderRightTrueGray100--L20></Box> // lighten color
     * <Box borderRightTrueGray100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightTrueGray100?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #f5f5f5; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomTrueGray100></Box>
     * <Box borderBottomTrueGray100--T20></Box> // transparentize color
     * <Box borderBottomTrueGray100--O20></Box> // opacify color
     * <Box borderBottomTrueGray100--L20></Box> // lighten color
     * <Box borderBottomTrueGray100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomTrueGray100?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #f5f5f5; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftTrueGray100></Box>
     * <Box borderLeftTrueGray100--T20></Box> // transparentize color
     * <Box borderLeftTrueGray100--O20></Box> // opacify color
     * <Box borderLeftTrueGray100--L20></Box> // lighten color
     * <Box borderLeftTrueGray100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftTrueGray100?: ResponsiveBoolean
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
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #e5e5e5; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopTrueGray200></Box>
     * <Box borderTopTrueGray200--T20></Box> // transparentize color
     * <Box borderTopTrueGray200--O20></Box> // opacify color
     * <Box borderTopTrueGray200--L20></Box> // lighten color
     * <Box borderTopTrueGray200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopTrueGray200?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #e5e5e5; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightTrueGray200></Box>
     * <Box borderRightTrueGray200--T20></Box> // transparentize color
     * <Box borderRightTrueGray200--O20></Box> // opacify color
     * <Box borderRightTrueGray200--L20></Box> // lighten color
     * <Box borderRightTrueGray200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightTrueGray200?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #e5e5e5; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomTrueGray200></Box>
     * <Box borderBottomTrueGray200--T20></Box> // transparentize color
     * <Box borderBottomTrueGray200--O20></Box> // opacify color
     * <Box borderBottomTrueGray200--L20></Box> // lighten color
     * <Box borderBottomTrueGray200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomTrueGray200?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #e5e5e5; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftTrueGray200></Box>
     * <Box borderLeftTrueGray200--T20></Box> // transparentize color
     * <Box borderLeftTrueGray200--O20></Box> // opacify color
     * <Box borderLeftTrueGray200--L20></Box> // lighten color
     * <Box borderLeftTrueGray200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftTrueGray200?: ResponsiveBoolean
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
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #d4d4d4; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopTrueGray300></Box>
     * <Box borderTopTrueGray300--T20></Box> // transparentize color
     * <Box borderTopTrueGray300--O20></Box> // opacify color
     * <Box borderTopTrueGray300--L20></Box> // lighten color
     * <Box borderTopTrueGray300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopTrueGray300?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #d4d4d4; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightTrueGray300></Box>
     * <Box borderRightTrueGray300--T20></Box> // transparentize color
     * <Box borderRightTrueGray300--O20></Box> // opacify color
     * <Box borderRightTrueGray300--L20></Box> // lighten color
     * <Box borderRightTrueGray300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightTrueGray300?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #d4d4d4; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomTrueGray300></Box>
     * <Box borderBottomTrueGray300--T20></Box> // transparentize color
     * <Box borderBottomTrueGray300--O20></Box> // opacify color
     * <Box borderBottomTrueGray300--L20></Box> // lighten color
     * <Box borderBottomTrueGray300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomTrueGray300?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #d4d4d4; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftTrueGray300></Box>
     * <Box borderLeftTrueGray300--T20></Box> // transparentize color
     * <Box borderLeftTrueGray300--O20></Box> // opacify color
     * <Box borderLeftTrueGray300--L20></Box> // lighten color
     * <Box borderLeftTrueGray300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftTrueGray300?: ResponsiveBoolean
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
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #a3a3a3; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopTrueGray400></Box>
     * <Box borderTopTrueGray400--T20></Box> // transparentize color
     * <Box borderTopTrueGray400--O20></Box> // opacify color
     * <Box borderTopTrueGray400--L20></Box> // lighten color
     * <Box borderTopTrueGray400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopTrueGray400?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #a3a3a3; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightTrueGray400></Box>
     * <Box borderRightTrueGray400--T20></Box> // transparentize color
     * <Box borderRightTrueGray400--O20></Box> // opacify color
     * <Box borderRightTrueGray400--L20></Box> // lighten color
     * <Box borderRightTrueGray400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightTrueGray400?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #a3a3a3; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomTrueGray400></Box>
     * <Box borderBottomTrueGray400--T20></Box> // transparentize color
     * <Box borderBottomTrueGray400--O20></Box> // opacify color
     * <Box borderBottomTrueGray400--L20></Box> // lighten color
     * <Box borderBottomTrueGray400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomTrueGray400?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #a3a3a3; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftTrueGray400></Box>
     * <Box borderLeftTrueGray400--T20></Box> // transparentize color
     * <Box borderLeftTrueGray400--O20></Box> // opacify color
     * <Box borderLeftTrueGray400--L20></Box> // lighten color
     * <Box borderLeftTrueGray400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftTrueGray400?: ResponsiveBoolean
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
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #737373; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopTrueGray500></Box>
     * <Box borderTopTrueGray500--T20></Box> // transparentize color
     * <Box borderTopTrueGray500--O20></Box> // opacify color
     * <Box borderTopTrueGray500--L20></Box> // lighten color
     * <Box borderTopTrueGray500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopTrueGray500?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #737373; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightTrueGray500></Box>
     * <Box borderRightTrueGray500--T20></Box> // transparentize color
     * <Box borderRightTrueGray500--O20></Box> // opacify color
     * <Box borderRightTrueGray500--L20></Box> // lighten color
     * <Box borderRightTrueGray500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightTrueGray500?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #737373; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomTrueGray500></Box>
     * <Box borderBottomTrueGray500--T20></Box> // transparentize color
     * <Box borderBottomTrueGray500--O20></Box> // opacify color
     * <Box borderBottomTrueGray500--L20></Box> // lighten color
     * <Box borderBottomTrueGray500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomTrueGray500?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #737373; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftTrueGray500></Box>
     * <Box borderLeftTrueGray500--T20></Box> // transparentize color
     * <Box borderLeftTrueGray500--O20></Box> // opacify color
     * <Box borderLeftTrueGray500--L20></Box> // lighten color
     * <Box borderLeftTrueGray500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftTrueGray500?: ResponsiveBoolean
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
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #525252; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopTrueGray600></Box>
     * <Box borderTopTrueGray600--T20></Box> // transparentize color
     * <Box borderTopTrueGray600--O20></Box> // opacify color
     * <Box borderTopTrueGray600--L20></Box> // lighten color
     * <Box borderTopTrueGray600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopTrueGray600?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #525252; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightTrueGray600></Box>
     * <Box borderRightTrueGray600--T20></Box> // transparentize color
     * <Box borderRightTrueGray600--O20></Box> // opacify color
     * <Box borderRightTrueGray600--L20></Box> // lighten color
     * <Box borderRightTrueGray600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightTrueGray600?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #525252; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomTrueGray600></Box>
     * <Box borderBottomTrueGray600--T20></Box> // transparentize color
     * <Box borderBottomTrueGray600--O20></Box> // opacify color
     * <Box borderBottomTrueGray600--L20></Box> // lighten color
     * <Box borderBottomTrueGray600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomTrueGray600?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #525252; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftTrueGray600></Box>
     * <Box borderLeftTrueGray600--T20></Box> // transparentize color
     * <Box borderLeftTrueGray600--O20></Box> // opacify color
     * <Box borderLeftTrueGray600--L20></Box> // lighten color
     * <Box borderLeftTrueGray600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftTrueGray600?: ResponsiveBoolean
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
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #404040; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopTrueGray700></Box>
     * <Box borderTopTrueGray700--T20></Box> // transparentize color
     * <Box borderTopTrueGray700--O20></Box> // opacify color
     * <Box borderTopTrueGray700--L20></Box> // lighten color
     * <Box borderTopTrueGray700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopTrueGray700?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #404040; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightTrueGray700></Box>
     * <Box borderRightTrueGray700--T20></Box> // transparentize color
     * <Box borderRightTrueGray700--O20></Box> // opacify color
     * <Box borderRightTrueGray700--L20></Box> // lighten color
     * <Box borderRightTrueGray700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightTrueGray700?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #404040; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomTrueGray700></Box>
     * <Box borderBottomTrueGray700--T20></Box> // transparentize color
     * <Box borderBottomTrueGray700--O20></Box> // opacify color
     * <Box borderBottomTrueGray700--L20></Box> // lighten color
     * <Box borderBottomTrueGray700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomTrueGray700?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #404040; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftTrueGray700></Box>
     * <Box borderLeftTrueGray700--T20></Box> // transparentize color
     * <Box borderLeftTrueGray700--O20></Box> // opacify color
     * <Box borderLeftTrueGray700--L20></Box> // lighten color
     * <Box borderLeftTrueGray700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftTrueGray700?: ResponsiveBoolean
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
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #262626; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopTrueGray800></Box>
     * <Box borderTopTrueGray800--T20></Box> // transparentize color
     * <Box borderTopTrueGray800--O20></Box> // opacify color
     * <Box borderTopTrueGray800--L20></Box> // lighten color
     * <Box borderTopTrueGray800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopTrueGray800?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #262626; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightTrueGray800></Box>
     * <Box borderRightTrueGray800--T20></Box> // transparentize color
     * <Box borderRightTrueGray800--O20></Box> // opacify color
     * <Box borderRightTrueGray800--L20></Box> // lighten color
     * <Box borderRightTrueGray800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightTrueGray800?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #262626; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomTrueGray800></Box>
     * <Box borderBottomTrueGray800--T20></Box> // transparentize color
     * <Box borderBottomTrueGray800--O20></Box> // opacify color
     * <Box borderBottomTrueGray800--L20></Box> // lighten color
     * <Box borderBottomTrueGray800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomTrueGray800?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #262626; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftTrueGray800></Box>
     * <Box borderLeftTrueGray800--T20></Box> // transparentize color
     * <Box borderLeftTrueGray800--O20></Box> // opacify color
     * <Box borderLeftTrueGray800--L20></Box> // lighten color
     * <Box borderLeftTrueGray800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftTrueGray800?: ResponsiveBoolean
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
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #171717; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopTrueGray900></Box>
     * <Box borderTopTrueGray900--T20></Box> // transparentize color
     * <Box borderTopTrueGray900--O20></Box> // opacify color
     * <Box borderTopTrueGray900--L20></Box> // lighten color
     * <Box borderTopTrueGray900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopTrueGray900?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #171717; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightTrueGray900></Box>
     * <Box borderRightTrueGray900--T20></Box> // transparentize color
     * <Box borderRightTrueGray900--O20></Box> // opacify color
     * <Box borderRightTrueGray900--L20></Box> // lighten color
     * <Box borderRightTrueGray900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightTrueGray900?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #171717; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomTrueGray900></Box>
     * <Box borderBottomTrueGray900--T20></Box> // transparentize color
     * <Box borderBottomTrueGray900--O20></Box> // opacify color
     * <Box borderBottomTrueGray900--L20></Box> // lighten color
     * <Box borderBottomTrueGray900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomTrueGray900?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #171717; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftTrueGray900></Box>
     * <Box borderLeftTrueGray900--T20></Box> // transparentize color
     * <Box borderLeftTrueGray900--O20></Box> // opacify color
     * <Box borderLeftTrueGray900--L20></Box> // lighten color
     * <Box borderLeftTrueGray900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftTrueGray900?: ResponsiveBoolean
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
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #fafafa; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopGray50></Box>
     * <Box borderTopGray50--T20></Box> // transparentize color
     * <Box borderTopGray50--O20></Box> // opacify color
     * <Box borderTopGray50--L20></Box> // lighten color
     * <Box borderTopGray50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopGray50?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #fafafa; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightGray50></Box>
     * <Box borderRightGray50--T20></Box> // transparentize color
     * <Box borderRightGray50--O20></Box> // opacify color
     * <Box borderRightGray50--L20></Box> // lighten color
     * <Box borderRightGray50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightGray50?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #fafafa; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomGray50></Box>
     * <Box borderBottomGray50--T20></Box> // transparentize color
     * <Box borderBottomGray50--O20></Box> // opacify color
     * <Box borderBottomGray50--L20></Box> // lighten color
     * <Box borderBottomGray50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomGray50?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #fafafa; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftGray50></Box>
     * <Box borderLeftGray50--T20></Box> // transparentize color
     * <Box borderLeftGray50--O20></Box> // opacify color
     * <Box borderLeftGray50--L20></Box> // lighten color
     * <Box borderLeftGray50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftGray50?: ResponsiveBoolean
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
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #f4f4f5; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopGray100></Box>
     * <Box borderTopGray100--T20></Box> // transparentize color
     * <Box borderTopGray100--O20></Box> // opacify color
     * <Box borderTopGray100--L20></Box> // lighten color
     * <Box borderTopGray100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopGray100?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #f4f4f5; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightGray100></Box>
     * <Box borderRightGray100--T20></Box> // transparentize color
     * <Box borderRightGray100--O20></Box> // opacify color
     * <Box borderRightGray100--L20></Box> // lighten color
     * <Box borderRightGray100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightGray100?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #f4f4f5; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomGray100></Box>
     * <Box borderBottomGray100--T20></Box> // transparentize color
     * <Box borderBottomGray100--O20></Box> // opacify color
     * <Box borderBottomGray100--L20></Box> // lighten color
     * <Box borderBottomGray100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomGray100?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #f4f4f5; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftGray100></Box>
     * <Box borderLeftGray100--T20></Box> // transparentize color
     * <Box borderLeftGray100--O20></Box> // opacify color
     * <Box borderLeftGray100--L20></Box> // lighten color
     * <Box borderLeftGray100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftGray100?: ResponsiveBoolean
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
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #e4e4e7; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopGray200></Box>
     * <Box borderTopGray200--T20></Box> // transparentize color
     * <Box borderTopGray200--O20></Box> // opacify color
     * <Box borderTopGray200--L20></Box> // lighten color
     * <Box borderTopGray200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopGray200?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #e4e4e7; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightGray200></Box>
     * <Box borderRightGray200--T20></Box> // transparentize color
     * <Box borderRightGray200--O20></Box> // opacify color
     * <Box borderRightGray200--L20></Box> // lighten color
     * <Box borderRightGray200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightGray200?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #e4e4e7; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomGray200></Box>
     * <Box borderBottomGray200--T20></Box> // transparentize color
     * <Box borderBottomGray200--O20></Box> // opacify color
     * <Box borderBottomGray200--L20></Box> // lighten color
     * <Box borderBottomGray200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomGray200?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #e4e4e7; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftGray200></Box>
     * <Box borderLeftGray200--T20></Box> // transparentize color
     * <Box borderLeftGray200--O20></Box> // opacify color
     * <Box borderLeftGray200--L20></Box> // lighten color
     * <Box borderLeftGray200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftGray200?: ResponsiveBoolean
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
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #d4d4d8; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopGray300></Box>
     * <Box borderTopGray300--T20></Box> // transparentize color
     * <Box borderTopGray300--O20></Box> // opacify color
     * <Box borderTopGray300--L20></Box> // lighten color
     * <Box borderTopGray300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopGray300?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #d4d4d8; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightGray300></Box>
     * <Box borderRightGray300--T20></Box> // transparentize color
     * <Box borderRightGray300--O20></Box> // opacify color
     * <Box borderRightGray300--L20></Box> // lighten color
     * <Box borderRightGray300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightGray300?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #d4d4d8; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomGray300></Box>
     * <Box borderBottomGray300--T20></Box> // transparentize color
     * <Box borderBottomGray300--O20></Box> // opacify color
     * <Box borderBottomGray300--L20></Box> // lighten color
     * <Box borderBottomGray300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomGray300?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #d4d4d8; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftGray300></Box>
     * <Box borderLeftGray300--T20></Box> // transparentize color
     * <Box borderLeftGray300--O20></Box> // opacify color
     * <Box borderLeftGray300--L20></Box> // lighten color
     * <Box borderLeftGray300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftGray300?: ResponsiveBoolean
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
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #a1a1aa; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopGray400></Box>
     * <Box borderTopGray400--T20></Box> // transparentize color
     * <Box borderTopGray400--O20></Box> // opacify color
     * <Box borderTopGray400--L20></Box> // lighten color
     * <Box borderTopGray400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopGray400?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #a1a1aa; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightGray400></Box>
     * <Box borderRightGray400--T20></Box> // transparentize color
     * <Box borderRightGray400--O20></Box> // opacify color
     * <Box borderRightGray400--L20></Box> // lighten color
     * <Box borderRightGray400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightGray400?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #a1a1aa; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomGray400></Box>
     * <Box borderBottomGray400--T20></Box> // transparentize color
     * <Box borderBottomGray400--O20></Box> // opacify color
     * <Box borderBottomGray400--L20></Box> // lighten color
     * <Box borderBottomGray400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomGray400?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #a1a1aa; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftGray400></Box>
     * <Box borderLeftGray400--T20></Box> // transparentize color
     * <Box borderLeftGray400--O20></Box> // opacify color
     * <Box borderLeftGray400--L20></Box> // lighten color
     * <Box borderLeftGray400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftGray400?: ResponsiveBoolean
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
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #71717a; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopGray500></Box>
     * <Box borderTopGray500--T20></Box> // transparentize color
     * <Box borderTopGray500--O20></Box> // opacify color
     * <Box borderTopGray500--L20></Box> // lighten color
     * <Box borderTopGray500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopGray500?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #71717a; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightGray500></Box>
     * <Box borderRightGray500--T20></Box> // transparentize color
     * <Box borderRightGray500--O20></Box> // opacify color
     * <Box borderRightGray500--L20></Box> // lighten color
     * <Box borderRightGray500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightGray500?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #71717a; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomGray500></Box>
     * <Box borderBottomGray500--T20></Box> // transparentize color
     * <Box borderBottomGray500--O20></Box> // opacify color
     * <Box borderBottomGray500--L20></Box> // lighten color
     * <Box borderBottomGray500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomGray500?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #71717a; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftGray500></Box>
     * <Box borderLeftGray500--T20></Box> // transparentize color
     * <Box borderLeftGray500--O20></Box> // opacify color
     * <Box borderLeftGray500--L20></Box> // lighten color
     * <Box borderLeftGray500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftGray500?: ResponsiveBoolean
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
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #52525b; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopGray600></Box>
     * <Box borderTopGray600--T20></Box> // transparentize color
     * <Box borderTopGray600--O20></Box> // opacify color
     * <Box borderTopGray600--L20></Box> // lighten color
     * <Box borderTopGray600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopGray600?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #52525b; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightGray600></Box>
     * <Box borderRightGray600--T20></Box> // transparentize color
     * <Box borderRightGray600--O20></Box> // opacify color
     * <Box borderRightGray600--L20></Box> // lighten color
     * <Box borderRightGray600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightGray600?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #52525b; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomGray600></Box>
     * <Box borderBottomGray600--T20></Box> // transparentize color
     * <Box borderBottomGray600--O20></Box> // opacify color
     * <Box borderBottomGray600--L20></Box> // lighten color
     * <Box borderBottomGray600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomGray600?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #52525b; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftGray600></Box>
     * <Box borderLeftGray600--T20></Box> // transparentize color
     * <Box borderLeftGray600--O20></Box> // opacify color
     * <Box borderLeftGray600--L20></Box> // lighten color
     * <Box borderLeftGray600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftGray600?: ResponsiveBoolean
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
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #3f3f46; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopGray700></Box>
     * <Box borderTopGray700--T20></Box> // transparentize color
     * <Box borderTopGray700--O20></Box> // opacify color
     * <Box borderTopGray700--L20></Box> // lighten color
     * <Box borderTopGray700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopGray700?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #3f3f46; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightGray700></Box>
     * <Box borderRightGray700--T20></Box> // transparentize color
     * <Box borderRightGray700--O20></Box> // opacify color
     * <Box borderRightGray700--L20></Box> // lighten color
     * <Box borderRightGray700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightGray700?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #3f3f46; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomGray700></Box>
     * <Box borderBottomGray700--T20></Box> // transparentize color
     * <Box borderBottomGray700--O20></Box> // opacify color
     * <Box borderBottomGray700--L20></Box> // lighten color
     * <Box borderBottomGray700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomGray700?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #3f3f46; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftGray700></Box>
     * <Box borderLeftGray700--T20></Box> // transparentize color
     * <Box borderLeftGray700--O20></Box> // opacify color
     * <Box borderLeftGray700--L20></Box> // lighten color
     * <Box borderLeftGray700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftGray700?: ResponsiveBoolean
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
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #27272a; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopGray800></Box>
     * <Box borderTopGray800--T20></Box> // transparentize color
     * <Box borderTopGray800--O20></Box> // opacify color
     * <Box borderTopGray800--L20></Box> // lighten color
     * <Box borderTopGray800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopGray800?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #27272a; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightGray800></Box>
     * <Box borderRightGray800--T20></Box> // transparentize color
     * <Box borderRightGray800--O20></Box> // opacify color
     * <Box borderRightGray800--L20></Box> // lighten color
     * <Box borderRightGray800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightGray800?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #27272a; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomGray800></Box>
     * <Box borderBottomGray800--T20></Box> // transparentize color
     * <Box borderBottomGray800--O20></Box> // opacify color
     * <Box borderBottomGray800--L20></Box> // lighten color
     * <Box borderBottomGray800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomGray800?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #27272a; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftGray800></Box>
     * <Box borderLeftGray800--T20></Box> // transparentize color
     * <Box borderLeftGray800--O20></Box> // opacify color
     * <Box borderLeftGray800--L20></Box> // lighten color
     * <Box borderLeftGray800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftGray800?: ResponsiveBoolean
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
    /**
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #18181b; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopGray900></Box>
     * <Box borderTopGray900--T20></Box> // transparentize color
     * <Box borderTopGray900--O20></Box> // opacify color
     * <Box borderTopGray900--L20></Box> // lighten color
     * <Box borderTopGray900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopGray900?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #18181b; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightGray900></Box>
     * <Box borderRightGray900--T20></Box> // transparentize color
     * <Box borderRightGray900--O20></Box> // opacify color
     * <Box borderRightGray900--L20></Box> // lighten color
     * <Box borderRightGray900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightGray900?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #18181b; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomGray900></Box>
     * <Box borderBottomGray900--T20></Box> // transparentize color
     * <Box borderBottomGray900--O20></Box> // opacify color
     * <Box borderBottomGray900--L20></Box> // lighten color
     * <Box borderBottomGray900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomGray900?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #18181b; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftGray900></Box>
     * <Box borderLeftGray900--T20></Box> // transparentize color
     * <Box borderLeftGray900--O20></Box> // opacify color
     * <Box borderLeftGray900--L20></Box> // lighten color
     * <Box borderLeftGray900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftGray900?: ResponsiveBoolean
    /**
     * Set border color to coolGray50
     * ```css
     * { border-color: #f9fafb; }
     * ```
     * @example
     * ```tsx
     * <Box borderCoolGray50></Box>
     * <Box borderCoolGray50--T20></Box> // transparentize color
     * <Box borderCoolGray50--O20></Box> // opacify color
     * <Box borderCoolGray50--L20></Box> // lighten color
     * <Box borderCoolGray50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderCoolGray50?: ResponsiveBoolean
    /**
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #f9fafb; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopCoolGray50></Box>
     * <Box borderTopCoolGray50--T20></Box> // transparentize color
     * <Box borderTopCoolGray50--O20></Box> // opacify color
     * <Box borderTopCoolGray50--L20></Box> // lighten color
     * <Box borderTopCoolGray50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopCoolGray50?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #f9fafb; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightCoolGray50></Box>
     * <Box borderRightCoolGray50--T20></Box> // transparentize color
     * <Box borderRightCoolGray50--O20></Box> // opacify color
     * <Box borderRightCoolGray50--L20></Box> // lighten color
     * <Box borderRightCoolGray50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightCoolGray50?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #f9fafb; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomCoolGray50></Box>
     * <Box borderBottomCoolGray50--T20></Box> // transparentize color
     * <Box borderBottomCoolGray50--O20></Box> // opacify color
     * <Box borderBottomCoolGray50--L20></Box> // lighten color
     * <Box borderBottomCoolGray50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomCoolGray50?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #f9fafb; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftCoolGray50></Box>
     * <Box borderLeftCoolGray50--T20></Box> // transparentize color
     * <Box borderLeftCoolGray50--O20></Box> // opacify color
     * <Box borderLeftCoolGray50--L20></Box> // lighten color
     * <Box borderLeftCoolGray50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftCoolGray50?: ResponsiveBoolean
    /**
     * Set border color to coolGray100
     * ```css
     * { border-color: #f3f4f6; }
     * ```
     * @example
     * ```tsx
     * <Box borderCoolGray100></Box>
     * <Box borderCoolGray100--T20></Box> // transparentize color
     * <Box borderCoolGray100--O20></Box> // opacify color
     * <Box borderCoolGray100--L20></Box> // lighten color
     * <Box borderCoolGray100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderCoolGray100?: ResponsiveBoolean
    /**
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #f3f4f6; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopCoolGray100></Box>
     * <Box borderTopCoolGray100--T20></Box> // transparentize color
     * <Box borderTopCoolGray100--O20></Box> // opacify color
     * <Box borderTopCoolGray100--L20></Box> // lighten color
     * <Box borderTopCoolGray100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopCoolGray100?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #f3f4f6; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightCoolGray100></Box>
     * <Box borderRightCoolGray100--T20></Box> // transparentize color
     * <Box borderRightCoolGray100--O20></Box> // opacify color
     * <Box borderRightCoolGray100--L20></Box> // lighten color
     * <Box borderRightCoolGray100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightCoolGray100?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #f3f4f6; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomCoolGray100></Box>
     * <Box borderBottomCoolGray100--T20></Box> // transparentize color
     * <Box borderBottomCoolGray100--O20></Box> // opacify color
     * <Box borderBottomCoolGray100--L20></Box> // lighten color
     * <Box borderBottomCoolGray100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomCoolGray100?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #f3f4f6; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftCoolGray100></Box>
     * <Box borderLeftCoolGray100--T20></Box> // transparentize color
     * <Box borderLeftCoolGray100--O20></Box> // opacify color
     * <Box borderLeftCoolGray100--L20></Box> // lighten color
     * <Box borderLeftCoolGray100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftCoolGray100?: ResponsiveBoolean
    /**
     * Set border color to coolGray200
     * ```css
     * { border-color: #e5e7eb; }
     * ```
     * @example
     * ```tsx
     * <Box borderCoolGray200></Box>
     * <Box borderCoolGray200--T20></Box> // transparentize color
     * <Box borderCoolGray200--O20></Box> // opacify color
     * <Box borderCoolGray200--L20></Box> // lighten color
     * <Box borderCoolGray200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderCoolGray200?: ResponsiveBoolean
    /**
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #e5e7eb; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopCoolGray200></Box>
     * <Box borderTopCoolGray200--T20></Box> // transparentize color
     * <Box borderTopCoolGray200--O20></Box> // opacify color
     * <Box borderTopCoolGray200--L20></Box> // lighten color
     * <Box borderTopCoolGray200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopCoolGray200?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #e5e7eb; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightCoolGray200></Box>
     * <Box borderRightCoolGray200--T20></Box> // transparentize color
     * <Box borderRightCoolGray200--O20></Box> // opacify color
     * <Box borderRightCoolGray200--L20></Box> // lighten color
     * <Box borderRightCoolGray200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightCoolGray200?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #e5e7eb; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomCoolGray200></Box>
     * <Box borderBottomCoolGray200--T20></Box> // transparentize color
     * <Box borderBottomCoolGray200--O20></Box> // opacify color
     * <Box borderBottomCoolGray200--L20></Box> // lighten color
     * <Box borderBottomCoolGray200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomCoolGray200?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #e5e7eb; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftCoolGray200></Box>
     * <Box borderLeftCoolGray200--T20></Box> // transparentize color
     * <Box borderLeftCoolGray200--O20></Box> // opacify color
     * <Box borderLeftCoolGray200--L20></Box> // lighten color
     * <Box borderLeftCoolGray200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftCoolGray200?: ResponsiveBoolean
    /**
     * Set border color to coolGray300
     * ```css
     * { border-color: #d1d5db; }
     * ```
     * @example
     * ```tsx
     * <Box borderCoolGray300></Box>
     * <Box borderCoolGray300--T20></Box> // transparentize color
     * <Box borderCoolGray300--O20></Box> // opacify color
     * <Box borderCoolGray300--L20></Box> // lighten color
     * <Box borderCoolGray300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderCoolGray300?: ResponsiveBoolean
    /**
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #d1d5db; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopCoolGray300></Box>
     * <Box borderTopCoolGray300--T20></Box> // transparentize color
     * <Box borderTopCoolGray300--O20></Box> // opacify color
     * <Box borderTopCoolGray300--L20></Box> // lighten color
     * <Box borderTopCoolGray300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopCoolGray300?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #d1d5db; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightCoolGray300></Box>
     * <Box borderRightCoolGray300--T20></Box> // transparentize color
     * <Box borderRightCoolGray300--O20></Box> // opacify color
     * <Box borderRightCoolGray300--L20></Box> // lighten color
     * <Box borderRightCoolGray300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightCoolGray300?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #d1d5db; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomCoolGray300></Box>
     * <Box borderBottomCoolGray300--T20></Box> // transparentize color
     * <Box borderBottomCoolGray300--O20></Box> // opacify color
     * <Box borderBottomCoolGray300--L20></Box> // lighten color
     * <Box borderBottomCoolGray300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomCoolGray300?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #d1d5db; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftCoolGray300></Box>
     * <Box borderLeftCoolGray300--T20></Box> // transparentize color
     * <Box borderLeftCoolGray300--O20></Box> // opacify color
     * <Box borderLeftCoolGray300--L20></Box> // lighten color
     * <Box borderLeftCoolGray300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftCoolGray300?: ResponsiveBoolean
    /**
     * Set border color to coolGray400
     * ```css
     * { border-color: #9ca3af; }
     * ```
     * @example
     * ```tsx
     * <Box borderCoolGray400></Box>
     * <Box borderCoolGray400--T20></Box> // transparentize color
     * <Box borderCoolGray400--O20></Box> // opacify color
     * <Box borderCoolGray400--L20></Box> // lighten color
     * <Box borderCoolGray400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderCoolGray400?: ResponsiveBoolean
    /**
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #9ca3af; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopCoolGray400></Box>
     * <Box borderTopCoolGray400--T20></Box> // transparentize color
     * <Box borderTopCoolGray400--O20></Box> // opacify color
     * <Box borderTopCoolGray400--L20></Box> // lighten color
     * <Box borderTopCoolGray400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopCoolGray400?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #9ca3af; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightCoolGray400></Box>
     * <Box borderRightCoolGray400--T20></Box> // transparentize color
     * <Box borderRightCoolGray400--O20></Box> // opacify color
     * <Box borderRightCoolGray400--L20></Box> // lighten color
     * <Box borderRightCoolGray400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightCoolGray400?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #9ca3af; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomCoolGray400></Box>
     * <Box borderBottomCoolGray400--T20></Box> // transparentize color
     * <Box borderBottomCoolGray400--O20></Box> // opacify color
     * <Box borderBottomCoolGray400--L20></Box> // lighten color
     * <Box borderBottomCoolGray400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomCoolGray400?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #9ca3af; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftCoolGray400></Box>
     * <Box borderLeftCoolGray400--T20></Box> // transparentize color
     * <Box borderLeftCoolGray400--O20></Box> // opacify color
     * <Box borderLeftCoolGray400--L20></Box> // lighten color
     * <Box borderLeftCoolGray400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftCoolGray400?: ResponsiveBoolean
    /**
     * Set border color to coolGray500
     * ```css
     * { border-color: #6b7280; }
     * ```
     * @example
     * ```tsx
     * <Box borderCoolGray500></Box>
     * <Box borderCoolGray500--T20></Box> // transparentize color
     * <Box borderCoolGray500--O20></Box> // opacify color
     * <Box borderCoolGray500--L20></Box> // lighten color
     * <Box borderCoolGray500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderCoolGray500?: ResponsiveBoolean
    /**
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #6b7280; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopCoolGray500></Box>
     * <Box borderTopCoolGray500--T20></Box> // transparentize color
     * <Box borderTopCoolGray500--O20></Box> // opacify color
     * <Box borderTopCoolGray500--L20></Box> // lighten color
     * <Box borderTopCoolGray500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopCoolGray500?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #6b7280; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightCoolGray500></Box>
     * <Box borderRightCoolGray500--T20></Box> // transparentize color
     * <Box borderRightCoolGray500--O20></Box> // opacify color
     * <Box borderRightCoolGray500--L20></Box> // lighten color
     * <Box borderRightCoolGray500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightCoolGray500?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #6b7280; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomCoolGray500></Box>
     * <Box borderBottomCoolGray500--T20></Box> // transparentize color
     * <Box borderBottomCoolGray500--O20></Box> // opacify color
     * <Box borderBottomCoolGray500--L20></Box> // lighten color
     * <Box borderBottomCoolGray500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomCoolGray500?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #6b7280; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftCoolGray500></Box>
     * <Box borderLeftCoolGray500--T20></Box> // transparentize color
     * <Box borderLeftCoolGray500--O20></Box> // opacify color
     * <Box borderLeftCoolGray500--L20></Box> // lighten color
     * <Box borderLeftCoolGray500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftCoolGray500?: ResponsiveBoolean
    /**
     * Set border color to coolGray600
     * ```css
     * { border-color: #4b5563; }
     * ```
     * @example
     * ```tsx
     * <Box borderCoolGray600></Box>
     * <Box borderCoolGray600--T20></Box> // transparentize color
     * <Box borderCoolGray600--O20></Box> // opacify color
     * <Box borderCoolGray600--L20></Box> // lighten color
     * <Box borderCoolGray600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderCoolGray600?: ResponsiveBoolean
    /**
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #4b5563; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopCoolGray600></Box>
     * <Box borderTopCoolGray600--T20></Box> // transparentize color
     * <Box borderTopCoolGray600--O20></Box> // opacify color
     * <Box borderTopCoolGray600--L20></Box> // lighten color
     * <Box borderTopCoolGray600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopCoolGray600?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #4b5563; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightCoolGray600></Box>
     * <Box borderRightCoolGray600--T20></Box> // transparentize color
     * <Box borderRightCoolGray600--O20></Box> // opacify color
     * <Box borderRightCoolGray600--L20></Box> // lighten color
     * <Box borderRightCoolGray600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightCoolGray600?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #4b5563; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomCoolGray600></Box>
     * <Box borderBottomCoolGray600--T20></Box> // transparentize color
     * <Box borderBottomCoolGray600--O20></Box> // opacify color
     * <Box borderBottomCoolGray600--L20></Box> // lighten color
     * <Box borderBottomCoolGray600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomCoolGray600?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #4b5563; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftCoolGray600></Box>
     * <Box borderLeftCoolGray600--T20></Box> // transparentize color
     * <Box borderLeftCoolGray600--O20></Box> // opacify color
     * <Box borderLeftCoolGray600--L20></Box> // lighten color
     * <Box borderLeftCoolGray600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftCoolGray600?: ResponsiveBoolean
    /**
     * Set border color to coolGray700
     * ```css
     * { border-color: #374151; }
     * ```
     * @example
     * ```tsx
     * <Box borderCoolGray700></Box>
     * <Box borderCoolGray700--T20></Box> // transparentize color
     * <Box borderCoolGray700--O20></Box> // opacify color
     * <Box borderCoolGray700--L20></Box> // lighten color
     * <Box borderCoolGray700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderCoolGray700?: ResponsiveBoolean
    /**
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #374151; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopCoolGray700></Box>
     * <Box borderTopCoolGray700--T20></Box> // transparentize color
     * <Box borderTopCoolGray700--O20></Box> // opacify color
     * <Box borderTopCoolGray700--L20></Box> // lighten color
     * <Box borderTopCoolGray700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopCoolGray700?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #374151; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightCoolGray700></Box>
     * <Box borderRightCoolGray700--T20></Box> // transparentize color
     * <Box borderRightCoolGray700--O20></Box> // opacify color
     * <Box borderRightCoolGray700--L20></Box> // lighten color
     * <Box borderRightCoolGray700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightCoolGray700?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #374151; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomCoolGray700></Box>
     * <Box borderBottomCoolGray700--T20></Box> // transparentize color
     * <Box borderBottomCoolGray700--O20></Box> // opacify color
     * <Box borderBottomCoolGray700--L20></Box> // lighten color
     * <Box borderBottomCoolGray700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomCoolGray700?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #374151; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftCoolGray700></Box>
     * <Box borderLeftCoolGray700--T20></Box> // transparentize color
     * <Box borderLeftCoolGray700--O20></Box> // opacify color
     * <Box borderLeftCoolGray700--L20></Box> // lighten color
     * <Box borderLeftCoolGray700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftCoolGray700?: ResponsiveBoolean
    /**
     * Set border color to coolGray800
     * ```css
     * { border-color: #1f2937; }
     * ```
     * @example
     * ```tsx
     * <Box borderCoolGray800></Box>
     * <Box borderCoolGray800--T20></Box> // transparentize color
     * <Box borderCoolGray800--O20></Box> // opacify color
     * <Box borderCoolGray800--L20></Box> // lighten color
     * <Box borderCoolGray800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderCoolGray800?: ResponsiveBoolean
    /**
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #1f2937; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopCoolGray800></Box>
     * <Box borderTopCoolGray800--T20></Box> // transparentize color
     * <Box borderTopCoolGray800--O20></Box> // opacify color
     * <Box borderTopCoolGray800--L20></Box> // lighten color
     * <Box borderTopCoolGray800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopCoolGray800?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #1f2937; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightCoolGray800></Box>
     * <Box borderRightCoolGray800--T20></Box> // transparentize color
     * <Box borderRightCoolGray800--O20></Box> // opacify color
     * <Box borderRightCoolGray800--L20></Box> // lighten color
     * <Box borderRightCoolGray800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightCoolGray800?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #1f2937; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomCoolGray800></Box>
     * <Box borderBottomCoolGray800--T20></Box> // transparentize color
     * <Box borderBottomCoolGray800--O20></Box> // opacify color
     * <Box borderBottomCoolGray800--L20></Box> // lighten color
     * <Box borderBottomCoolGray800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomCoolGray800?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #1f2937; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftCoolGray800></Box>
     * <Box borderLeftCoolGray800--T20></Box> // transparentize color
     * <Box borderLeftCoolGray800--O20></Box> // opacify color
     * <Box borderLeftCoolGray800--L20></Box> // lighten color
     * <Box borderLeftCoolGray800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftCoolGray800?: ResponsiveBoolean
    /**
     * Set border color to coolGray900
     * ```css
     * { border-color: #111827; }
     * ```
     * @example
     * ```tsx
     * <Box borderCoolGray900></Box>
     * <Box borderCoolGray900--T20></Box> // transparentize color
     * <Box borderCoolGray900--O20></Box> // opacify color
     * <Box borderCoolGray900--L20></Box> // lighten color
     * <Box borderCoolGray900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderCoolGray900?: ResponsiveBoolean
    /**
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #111827; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopCoolGray900></Box>
     * <Box borderTopCoolGray900--T20></Box> // transparentize color
     * <Box borderTopCoolGray900--O20></Box> // opacify color
     * <Box borderTopCoolGray900--L20></Box> // lighten color
     * <Box borderTopCoolGray900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopCoolGray900?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #111827; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightCoolGray900></Box>
     * <Box borderRightCoolGray900--T20></Box> // transparentize color
     * <Box borderRightCoolGray900--O20></Box> // opacify color
     * <Box borderRightCoolGray900--L20></Box> // lighten color
     * <Box borderRightCoolGray900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightCoolGray900?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #111827; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomCoolGray900></Box>
     * <Box borderBottomCoolGray900--T20></Box> // transparentize color
     * <Box borderBottomCoolGray900--O20></Box> // opacify color
     * <Box borderBottomCoolGray900--L20></Box> // lighten color
     * <Box borderBottomCoolGray900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomCoolGray900?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #111827; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftCoolGray900></Box>
     * <Box borderLeftCoolGray900--T20></Box> // transparentize color
     * <Box borderLeftCoolGray900--O20></Box> // opacify color
     * <Box borderLeftCoolGray900--L20></Box> // lighten color
     * <Box borderLeftCoolGray900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftCoolGray900?: ResponsiveBoolean
    /**
     * Set border color to blueGray50
     * ```css
     * { border-color: #f8fafc; }
     * ```
     * @example
     * ```tsx
     * <Box borderBlueGray50></Box>
     * <Box borderBlueGray50--T20></Box> // transparentize color
     * <Box borderBlueGray50--O20></Box> // opacify color
     * <Box borderBlueGray50--L20></Box> // lighten color
     * <Box borderBlueGray50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBlueGray50?: ResponsiveBoolean
    /**
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #f8fafc; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopBlueGray50></Box>
     * <Box borderTopBlueGray50--T20></Box> // transparentize color
     * <Box borderTopBlueGray50--O20></Box> // opacify color
     * <Box borderTopBlueGray50--L20></Box> // lighten color
     * <Box borderTopBlueGray50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopBlueGray50?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #f8fafc; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightBlueGray50></Box>
     * <Box borderRightBlueGray50--T20></Box> // transparentize color
     * <Box borderRightBlueGray50--O20></Box> // opacify color
     * <Box borderRightBlueGray50--L20></Box> // lighten color
     * <Box borderRightBlueGray50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightBlueGray50?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #f8fafc; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomBlueGray50></Box>
     * <Box borderBottomBlueGray50--T20></Box> // transparentize color
     * <Box borderBottomBlueGray50--O20></Box> // opacify color
     * <Box borderBottomBlueGray50--L20></Box> // lighten color
     * <Box borderBottomBlueGray50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomBlueGray50?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #f8fafc; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftBlueGray50></Box>
     * <Box borderLeftBlueGray50--T20></Box> // transparentize color
     * <Box borderLeftBlueGray50--O20></Box> // opacify color
     * <Box borderLeftBlueGray50--L20></Box> // lighten color
     * <Box borderLeftBlueGray50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftBlueGray50?: ResponsiveBoolean
    /**
     * Set border color to blueGray100
     * ```css
     * { border-color: #f1f5f9; }
     * ```
     * @example
     * ```tsx
     * <Box borderBlueGray100></Box>
     * <Box borderBlueGray100--T20></Box> // transparentize color
     * <Box borderBlueGray100--O20></Box> // opacify color
     * <Box borderBlueGray100--L20></Box> // lighten color
     * <Box borderBlueGray100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBlueGray100?: ResponsiveBoolean
    /**
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #f1f5f9; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopBlueGray100></Box>
     * <Box borderTopBlueGray100--T20></Box> // transparentize color
     * <Box borderTopBlueGray100--O20></Box> // opacify color
     * <Box borderTopBlueGray100--L20></Box> // lighten color
     * <Box borderTopBlueGray100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopBlueGray100?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #f1f5f9; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightBlueGray100></Box>
     * <Box borderRightBlueGray100--T20></Box> // transparentize color
     * <Box borderRightBlueGray100--O20></Box> // opacify color
     * <Box borderRightBlueGray100--L20></Box> // lighten color
     * <Box borderRightBlueGray100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightBlueGray100?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #f1f5f9; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomBlueGray100></Box>
     * <Box borderBottomBlueGray100--T20></Box> // transparentize color
     * <Box borderBottomBlueGray100--O20></Box> // opacify color
     * <Box borderBottomBlueGray100--L20></Box> // lighten color
     * <Box borderBottomBlueGray100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomBlueGray100?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #f1f5f9; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftBlueGray100></Box>
     * <Box borderLeftBlueGray100--T20></Box> // transparentize color
     * <Box borderLeftBlueGray100--O20></Box> // opacify color
     * <Box borderLeftBlueGray100--L20></Box> // lighten color
     * <Box borderLeftBlueGray100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftBlueGray100?: ResponsiveBoolean
    /**
     * Set border color to blueGray200
     * ```css
     * { border-color: #e2e8f0; }
     * ```
     * @example
     * ```tsx
     * <Box borderBlueGray200></Box>
     * <Box borderBlueGray200--T20></Box> // transparentize color
     * <Box borderBlueGray200--O20></Box> // opacify color
     * <Box borderBlueGray200--L20></Box> // lighten color
     * <Box borderBlueGray200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBlueGray200?: ResponsiveBoolean
    /**
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #e2e8f0; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopBlueGray200></Box>
     * <Box borderTopBlueGray200--T20></Box> // transparentize color
     * <Box borderTopBlueGray200--O20></Box> // opacify color
     * <Box borderTopBlueGray200--L20></Box> // lighten color
     * <Box borderTopBlueGray200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopBlueGray200?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #e2e8f0; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightBlueGray200></Box>
     * <Box borderRightBlueGray200--T20></Box> // transparentize color
     * <Box borderRightBlueGray200--O20></Box> // opacify color
     * <Box borderRightBlueGray200--L20></Box> // lighten color
     * <Box borderRightBlueGray200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightBlueGray200?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #e2e8f0; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomBlueGray200></Box>
     * <Box borderBottomBlueGray200--T20></Box> // transparentize color
     * <Box borderBottomBlueGray200--O20></Box> // opacify color
     * <Box borderBottomBlueGray200--L20></Box> // lighten color
     * <Box borderBottomBlueGray200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomBlueGray200?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #e2e8f0; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftBlueGray200></Box>
     * <Box borderLeftBlueGray200--T20></Box> // transparentize color
     * <Box borderLeftBlueGray200--O20></Box> // opacify color
     * <Box borderLeftBlueGray200--L20></Box> // lighten color
     * <Box borderLeftBlueGray200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftBlueGray200?: ResponsiveBoolean
    /**
     * Set border color to blueGray300
     * ```css
     * { border-color: #cbd5e1; }
     * ```
     * @example
     * ```tsx
     * <Box borderBlueGray300></Box>
     * <Box borderBlueGray300--T20></Box> // transparentize color
     * <Box borderBlueGray300--O20></Box> // opacify color
     * <Box borderBlueGray300--L20></Box> // lighten color
     * <Box borderBlueGray300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBlueGray300?: ResponsiveBoolean
    /**
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #cbd5e1; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopBlueGray300></Box>
     * <Box borderTopBlueGray300--T20></Box> // transparentize color
     * <Box borderTopBlueGray300--O20></Box> // opacify color
     * <Box borderTopBlueGray300--L20></Box> // lighten color
     * <Box borderTopBlueGray300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopBlueGray300?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #cbd5e1; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightBlueGray300></Box>
     * <Box borderRightBlueGray300--T20></Box> // transparentize color
     * <Box borderRightBlueGray300--O20></Box> // opacify color
     * <Box borderRightBlueGray300--L20></Box> // lighten color
     * <Box borderRightBlueGray300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightBlueGray300?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #cbd5e1; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomBlueGray300></Box>
     * <Box borderBottomBlueGray300--T20></Box> // transparentize color
     * <Box borderBottomBlueGray300--O20></Box> // opacify color
     * <Box borderBottomBlueGray300--L20></Box> // lighten color
     * <Box borderBottomBlueGray300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomBlueGray300?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #cbd5e1; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftBlueGray300></Box>
     * <Box borderLeftBlueGray300--T20></Box> // transparentize color
     * <Box borderLeftBlueGray300--O20></Box> // opacify color
     * <Box borderLeftBlueGray300--L20></Box> // lighten color
     * <Box borderLeftBlueGray300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftBlueGray300?: ResponsiveBoolean
    /**
     * Set border color to blueGray400
     * ```css
     * { border-color: #94a3b8; }
     * ```
     * @example
     * ```tsx
     * <Box borderBlueGray400></Box>
     * <Box borderBlueGray400--T20></Box> // transparentize color
     * <Box borderBlueGray400--O20></Box> // opacify color
     * <Box borderBlueGray400--L20></Box> // lighten color
     * <Box borderBlueGray400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBlueGray400?: ResponsiveBoolean
    /**
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #94a3b8; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopBlueGray400></Box>
     * <Box borderTopBlueGray400--T20></Box> // transparentize color
     * <Box borderTopBlueGray400--O20></Box> // opacify color
     * <Box borderTopBlueGray400--L20></Box> // lighten color
     * <Box borderTopBlueGray400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopBlueGray400?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #94a3b8; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightBlueGray400></Box>
     * <Box borderRightBlueGray400--T20></Box> // transparentize color
     * <Box borderRightBlueGray400--O20></Box> // opacify color
     * <Box borderRightBlueGray400--L20></Box> // lighten color
     * <Box borderRightBlueGray400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightBlueGray400?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #94a3b8; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomBlueGray400></Box>
     * <Box borderBottomBlueGray400--T20></Box> // transparentize color
     * <Box borderBottomBlueGray400--O20></Box> // opacify color
     * <Box borderBottomBlueGray400--L20></Box> // lighten color
     * <Box borderBottomBlueGray400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomBlueGray400?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #94a3b8; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftBlueGray400></Box>
     * <Box borderLeftBlueGray400--T20></Box> // transparentize color
     * <Box borderLeftBlueGray400--O20></Box> // opacify color
     * <Box borderLeftBlueGray400--L20></Box> // lighten color
     * <Box borderLeftBlueGray400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftBlueGray400?: ResponsiveBoolean
    /**
     * Set border color to blueGray500
     * ```css
     * { border-color: #64748b; }
     * ```
     * @example
     * ```tsx
     * <Box borderBlueGray500></Box>
     * <Box borderBlueGray500--T20></Box> // transparentize color
     * <Box borderBlueGray500--O20></Box> // opacify color
     * <Box borderBlueGray500--L20></Box> // lighten color
     * <Box borderBlueGray500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBlueGray500?: ResponsiveBoolean
    /**
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #64748b; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopBlueGray500></Box>
     * <Box borderTopBlueGray500--T20></Box> // transparentize color
     * <Box borderTopBlueGray500--O20></Box> // opacify color
     * <Box borderTopBlueGray500--L20></Box> // lighten color
     * <Box borderTopBlueGray500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopBlueGray500?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #64748b; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightBlueGray500></Box>
     * <Box borderRightBlueGray500--T20></Box> // transparentize color
     * <Box borderRightBlueGray500--O20></Box> // opacify color
     * <Box borderRightBlueGray500--L20></Box> // lighten color
     * <Box borderRightBlueGray500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightBlueGray500?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #64748b; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomBlueGray500></Box>
     * <Box borderBottomBlueGray500--T20></Box> // transparentize color
     * <Box borderBottomBlueGray500--O20></Box> // opacify color
     * <Box borderBottomBlueGray500--L20></Box> // lighten color
     * <Box borderBottomBlueGray500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomBlueGray500?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #64748b; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftBlueGray500></Box>
     * <Box borderLeftBlueGray500--T20></Box> // transparentize color
     * <Box borderLeftBlueGray500--O20></Box> // opacify color
     * <Box borderLeftBlueGray500--L20></Box> // lighten color
     * <Box borderLeftBlueGray500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftBlueGray500?: ResponsiveBoolean
    /**
     * Set border color to blueGray600
     * ```css
     * { border-color: #475569; }
     * ```
     * @example
     * ```tsx
     * <Box borderBlueGray600></Box>
     * <Box borderBlueGray600--T20></Box> // transparentize color
     * <Box borderBlueGray600--O20></Box> // opacify color
     * <Box borderBlueGray600--L20></Box> // lighten color
     * <Box borderBlueGray600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBlueGray600?: ResponsiveBoolean
    /**
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #475569; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopBlueGray600></Box>
     * <Box borderTopBlueGray600--T20></Box> // transparentize color
     * <Box borderTopBlueGray600--O20></Box> // opacify color
     * <Box borderTopBlueGray600--L20></Box> // lighten color
     * <Box borderTopBlueGray600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopBlueGray600?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #475569; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightBlueGray600></Box>
     * <Box borderRightBlueGray600--T20></Box> // transparentize color
     * <Box borderRightBlueGray600--O20></Box> // opacify color
     * <Box borderRightBlueGray600--L20></Box> // lighten color
     * <Box borderRightBlueGray600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightBlueGray600?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #475569; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomBlueGray600></Box>
     * <Box borderBottomBlueGray600--T20></Box> // transparentize color
     * <Box borderBottomBlueGray600--O20></Box> // opacify color
     * <Box borderBottomBlueGray600--L20></Box> // lighten color
     * <Box borderBottomBlueGray600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomBlueGray600?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #475569; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftBlueGray600></Box>
     * <Box borderLeftBlueGray600--T20></Box> // transparentize color
     * <Box borderLeftBlueGray600--O20></Box> // opacify color
     * <Box borderLeftBlueGray600--L20></Box> // lighten color
     * <Box borderLeftBlueGray600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftBlueGray600?: ResponsiveBoolean
    /**
     * Set border color to blueGray700
     * ```css
     * { border-color: #334155; }
     * ```
     * @example
     * ```tsx
     * <Box borderBlueGray700></Box>
     * <Box borderBlueGray700--T20></Box> // transparentize color
     * <Box borderBlueGray700--O20></Box> // opacify color
     * <Box borderBlueGray700--L20></Box> // lighten color
     * <Box borderBlueGray700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBlueGray700?: ResponsiveBoolean
    /**
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #334155; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopBlueGray700></Box>
     * <Box borderTopBlueGray700--T20></Box> // transparentize color
     * <Box borderTopBlueGray700--O20></Box> // opacify color
     * <Box borderTopBlueGray700--L20></Box> // lighten color
     * <Box borderTopBlueGray700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopBlueGray700?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #334155; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightBlueGray700></Box>
     * <Box borderRightBlueGray700--T20></Box> // transparentize color
     * <Box borderRightBlueGray700--O20></Box> // opacify color
     * <Box borderRightBlueGray700--L20></Box> // lighten color
     * <Box borderRightBlueGray700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightBlueGray700?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #334155; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomBlueGray700></Box>
     * <Box borderBottomBlueGray700--T20></Box> // transparentize color
     * <Box borderBottomBlueGray700--O20></Box> // opacify color
     * <Box borderBottomBlueGray700--L20></Box> // lighten color
     * <Box borderBottomBlueGray700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomBlueGray700?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #334155; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftBlueGray700></Box>
     * <Box borderLeftBlueGray700--T20></Box> // transparentize color
     * <Box borderLeftBlueGray700--O20></Box> // opacify color
     * <Box borderLeftBlueGray700--L20></Box> // lighten color
     * <Box borderLeftBlueGray700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftBlueGray700?: ResponsiveBoolean
    /**
     * Set border color to blueGray800
     * ```css
     * { border-color: #1e293b; }
     * ```
     * @example
     * ```tsx
     * <Box borderBlueGray800></Box>
     * <Box borderBlueGray800--T20></Box> // transparentize color
     * <Box borderBlueGray800--O20></Box> // opacify color
     * <Box borderBlueGray800--L20></Box> // lighten color
     * <Box borderBlueGray800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBlueGray800?: ResponsiveBoolean
    /**
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #1e293b; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopBlueGray800></Box>
     * <Box borderTopBlueGray800--T20></Box> // transparentize color
     * <Box borderTopBlueGray800--O20></Box> // opacify color
     * <Box borderTopBlueGray800--L20></Box> // lighten color
     * <Box borderTopBlueGray800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopBlueGray800?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #1e293b; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightBlueGray800></Box>
     * <Box borderRightBlueGray800--T20></Box> // transparentize color
     * <Box borderRightBlueGray800--O20></Box> // opacify color
     * <Box borderRightBlueGray800--L20></Box> // lighten color
     * <Box borderRightBlueGray800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightBlueGray800?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #1e293b; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomBlueGray800></Box>
     * <Box borderBottomBlueGray800--T20></Box> // transparentize color
     * <Box borderBottomBlueGray800--O20></Box> // opacify color
     * <Box borderBottomBlueGray800--L20></Box> // lighten color
     * <Box borderBottomBlueGray800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomBlueGray800?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #1e293b; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftBlueGray800></Box>
     * <Box borderLeftBlueGray800--T20></Box> // transparentize color
     * <Box borderLeftBlueGray800--O20></Box> // opacify color
     * <Box borderLeftBlueGray800--L20></Box> // lighten color
     * <Box borderLeftBlueGray800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftBlueGray800?: ResponsiveBoolean
    /**
     * Set border color to blueGray900
     * ```css
     * { border-color: #0f172a; }
     * ```
     * @example
     * ```tsx
     * <Box borderBlueGray900></Box>
     * <Box borderBlueGray900--T20></Box> // transparentize color
     * <Box borderBlueGray900--O20></Box> // opacify color
     * <Box borderBlueGray900--L20></Box> // lighten color
     * <Box borderBlueGray900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBlueGray900?: ResponsiveBoolean
    /**
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #0f172a; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopBlueGray900></Box>
     * <Box borderTopBlueGray900--T20></Box> // transparentize color
     * <Box borderTopBlueGray900--O20></Box> // opacify color
     * <Box borderTopBlueGray900--L20></Box> // lighten color
     * <Box borderTopBlueGray900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopBlueGray900?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #0f172a; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightBlueGray900></Box>
     * <Box borderRightBlueGray900--T20></Box> // transparentize color
     * <Box borderRightBlueGray900--O20></Box> // opacify color
     * <Box borderRightBlueGray900--L20></Box> // lighten color
     * <Box borderRightBlueGray900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightBlueGray900?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #0f172a; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomBlueGray900></Box>
     * <Box borderBottomBlueGray900--T20></Box> // transparentize color
     * <Box borderBottomBlueGray900--O20></Box> // opacify color
     * <Box borderBottomBlueGray900--L20></Box> // lighten color
     * <Box borderBottomBlueGray900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomBlueGray900?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #0f172a; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftBlueGray900></Box>
     * <Box borderLeftBlueGray900--T20></Box> // transparentize color
     * <Box borderLeftBlueGray900--O20></Box> // opacify color
     * <Box borderLeftBlueGray900--L20></Box> // lighten color
     * <Box borderLeftBlueGray900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftBlueGray900?: ResponsiveBoolean
  }
}
