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
     * Set border color to slate50
     * ```css
     * { border-color: #f8fafc; }
     * ```
     * @example
     * ```tsx
     * <Box borderSlate50></Box>
     * <Box borderSlate50--T20></Box> // transparentize color
     * <Box borderSlate50--O20></Box> // opacify color
     * <Box borderSlate50--L20></Box> // lighten color
     * <Box borderSlate50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderSlate50?: ResponsiveBoolean
    /**
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #f8fafc; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopSlate50></Box>
     * <Box borderTopSlate50--T20></Box> // transparentize color
     * <Box borderTopSlate50--O20></Box> // opacify color
     * <Box borderTopSlate50--L20></Box> // lighten color
     * <Box borderTopSlate50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopSlate50?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #f8fafc; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightSlate50></Box>
     * <Box borderRightSlate50--T20></Box> // transparentize color
     * <Box borderRightSlate50--O20></Box> // opacify color
     * <Box borderRightSlate50--L20></Box> // lighten color
     * <Box borderRightSlate50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightSlate50?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #f8fafc; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomSlate50></Box>
     * <Box borderBottomSlate50--T20></Box> // transparentize color
     * <Box borderBottomSlate50--O20></Box> // opacify color
     * <Box borderBottomSlate50--L20></Box> // lighten color
     * <Box borderBottomSlate50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomSlate50?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #f8fafc; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftSlate50></Box>
     * <Box borderLeftSlate50--T20></Box> // transparentize color
     * <Box borderLeftSlate50--O20></Box> // opacify color
     * <Box borderLeftSlate50--L20></Box> // lighten color
     * <Box borderLeftSlate50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftSlate50?: ResponsiveBoolean
    /**
     * Set border color to slate100
     * ```css
     * { border-color: #f1f5f9; }
     * ```
     * @example
     * ```tsx
     * <Box borderSlate100></Box>
     * <Box borderSlate100--T20></Box> // transparentize color
     * <Box borderSlate100--O20></Box> // opacify color
     * <Box borderSlate100--L20></Box> // lighten color
     * <Box borderSlate100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderSlate100?: ResponsiveBoolean
    /**
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #f1f5f9; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopSlate100></Box>
     * <Box borderTopSlate100--T20></Box> // transparentize color
     * <Box borderTopSlate100--O20></Box> // opacify color
     * <Box borderTopSlate100--L20></Box> // lighten color
     * <Box borderTopSlate100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopSlate100?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #f1f5f9; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightSlate100></Box>
     * <Box borderRightSlate100--T20></Box> // transparentize color
     * <Box borderRightSlate100--O20></Box> // opacify color
     * <Box borderRightSlate100--L20></Box> // lighten color
     * <Box borderRightSlate100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightSlate100?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #f1f5f9; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomSlate100></Box>
     * <Box borderBottomSlate100--T20></Box> // transparentize color
     * <Box borderBottomSlate100--O20></Box> // opacify color
     * <Box borderBottomSlate100--L20></Box> // lighten color
     * <Box borderBottomSlate100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomSlate100?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #f1f5f9; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftSlate100></Box>
     * <Box borderLeftSlate100--T20></Box> // transparentize color
     * <Box borderLeftSlate100--O20></Box> // opacify color
     * <Box borderLeftSlate100--L20></Box> // lighten color
     * <Box borderLeftSlate100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftSlate100?: ResponsiveBoolean
    /**
     * Set border color to slate200
     * ```css
     * { border-color: #e2e8f0; }
     * ```
     * @example
     * ```tsx
     * <Box borderSlate200></Box>
     * <Box borderSlate200--T20></Box> // transparentize color
     * <Box borderSlate200--O20></Box> // opacify color
     * <Box borderSlate200--L20></Box> // lighten color
     * <Box borderSlate200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderSlate200?: ResponsiveBoolean
    /**
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #e2e8f0; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopSlate200></Box>
     * <Box borderTopSlate200--T20></Box> // transparentize color
     * <Box borderTopSlate200--O20></Box> // opacify color
     * <Box borderTopSlate200--L20></Box> // lighten color
     * <Box borderTopSlate200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopSlate200?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #e2e8f0; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightSlate200></Box>
     * <Box borderRightSlate200--T20></Box> // transparentize color
     * <Box borderRightSlate200--O20></Box> // opacify color
     * <Box borderRightSlate200--L20></Box> // lighten color
     * <Box borderRightSlate200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightSlate200?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #e2e8f0; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomSlate200></Box>
     * <Box borderBottomSlate200--T20></Box> // transparentize color
     * <Box borderBottomSlate200--O20></Box> // opacify color
     * <Box borderBottomSlate200--L20></Box> // lighten color
     * <Box borderBottomSlate200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomSlate200?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #e2e8f0; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftSlate200></Box>
     * <Box borderLeftSlate200--T20></Box> // transparentize color
     * <Box borderLeftSlate200--O20></Box> // opacify color
     * <Box borderLeftSlate200--L20></Box> // lighten color
     * <Box borderLeftSlate200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftSlate200?: ResponsiveBoolean
    /**
     * Set border color to slate300
     * ```css
     * { border-color: #cbd5e1; }
     * ```
     * @example
     * ```tsx
     * <Box borderSlate300></Box>
     * <Box borderSlate300--T20></Box> // transparentize color
     * <Box borderSlate300--O20></Box> // opacify color
     * <Box borderSlate300--L20></Box> // lighten color
     * <Box borderSlate300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderSlate300?: ResponsiveBoolean
    /**
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #cbd5e1; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopSlate300></Box>
     * <Box borderTopSlate300--T20></Box> // transparentize color
     * <Box borderTopSlate300--O20></Box> // opacify color
     * <Box borderTopSlate300--L20></Box> // lighten color
     * <Box borderTopSlate300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopSlate300?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #cbd5e1; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightSlate300></Box>
     * <Box borderRightSlate300--T20></Box> // transparentize color
     * <Box borderRightSlate300--O20></Box> // opacify color
     * <Box borderRightSlate300--L20></Box> // lighten color
     * <Box borderRightSlate300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightSlate300?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #cbd5e1; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomSlate300></Box>
     * <Box borderBottomSlate300--T20></Box> // transparentize color
     * <Box borderBottomSlate300--O20></Box> // opacify color
     * <Box borderBottomSlate300--L20></Box> // lighten color
     * <Box borderBottomSlate300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomSlate300?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #cbd5e1; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftSlate300></Box>
     * <Box borderLeftSlate300--T20></Box> // transparentize color
     * <Box borderLeftSlate300--O20></Box> // opacify color
     * <Box borderLeftSlate300--L20></Box> // lighten color
     * <Box borderLeftSlate300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftSlate300?: ResponsiveBoolean
    /**
     * Set border color to slate400
     * ```css
     * { border-color: #94a3b8; }
     * ```
     * @example
     * ```tsx
     * <Box borderSlate400></Box>
     * <Box borderSlate400--T20></Box> // transparentize color
     * <Box borderSlate400--O20></Box> // opacify color
     * <Box borderSlate400--L20></Box> // lighten color
     * <Box borderSlate400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderSlate400?: ResponsiveBoolean
    /**
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #94a3b8; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopSlate400></Box>
     * <Box borderTopSlate400--T20></Box> // transparentize color
     * <Box borderTopSlate400--O20></Box> // opacify color
     * <Box borderTopSlate400--L20></Box> // lighten color
     * <Box borderTopSlate400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopSlate400?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #94a3b8; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightSlate400></Box>
     * <Box borderRightSlate400--T20></Box> // transparentize color
     * <Box borderRightSlate400--O20></Box> // opacify color
     * <Box borderRightSlate400--L20></Box> // lighten color
     * <Box borderRightSlate400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightSlate400?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #94a3b8; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomSlate400></Box>
     * <Box borderBottomSlate400--T20></Box> // transparentize color
     * <Box borderBottomSlate400--O20></Box> // opacify color
     * <Box borderBottomSlate400--L20></Box> // lighten color
     * <Box borderBottomSlate400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomSlate400?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #94a3b8; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftSlate400></Box>
     * <Box borderLeftSlate400--T20></Box> // transparentize color
     * <Box borderLeftSlate400--O20></Box> // opacify color
     * <Box borderLeftSlate400--L20></Box> // lighten color
     * <Box borderLeftSlate400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftSlate400?: ResponsiveBoolean
    /**
     * Set border color to slate500
     * ```css
     * { border-color: #64748b; }
     * ```
     * @example
     * ```tsx
     * <Box borderSlate500></Box>
     * <Box borderSlate500--T20></Box> // transparentize color
     * <Box borderSlate500--O20></Box> // opacify color
     * <Box borderSlate500--L20></Box> // lighten color
     * <Box borderSlate500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderSlate500?: ResponsiveBoolean
    /**
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #64748b; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopSlate500></Box>
     * <Box borderTopSlate500--T20></Box> // transparentize color
     * <Box borderTopSlate500--O20></Box> // opacify color
     * <Box borderTopSlate500--L20></Box> // lighten color
     * <Box borderTopSlate500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopSlate500?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #64748b; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightSlate500></Box>
     * <Box borderRightSlate500--T20></Box> // transparentize color
     * <Box borderRightSlate500--O20></Box> // opacify color
     * <Box borderRightSlate500--L20></Box> // lighten color
     * <Box borderRightSlate500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightSlate500?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #64748b; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomSlate500></Box>
     * <Box borderBottomSlate500--T20></Box> // transparentize color
     * <Box borderBottomSlate500--O20></Box> // opacify color
     * <Box borderBottomSlate500--L20></Box> // lighten color
     * <Box borderBottomSlate500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomSlate500?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #64748b; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftSlate500></Box>
     * <Box borderLeftSlate500--T20></Box> // transparentize color
     * <Box borderLeftSlate500--O20></Box> // opacify color
     * <Box borderLeftSlate500--L20></Box> // lighten color
     * <Box borderLeftSlate500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftSlate500?: ResponsiveBoolean
    /**
     * Set border color to slate600
     * ```css
     * { border-color: #475569; }
     * ```
     * @example
     * ```tsx
     * <Box borderSlate600></Box>
     * <Box borderSlate600--T20></Box> // transparentize color
     * <Box borderSlate600--O20></Box> // opacify color
     * <Box borderSlate600--L20></Box> // lighten color
     * <Box borderSlate600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderSlate600?: ResponsiveBoolean
    /**
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #475569; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopSlate600></Box>
     * <Box borderTopSlate600--T20></Box> // transparentize color
     * <Box borderTopSlate600--O20></Box> // opacify color
     * <Box borderTopSlate600--L20></Box> // lighten color
     * <Box borderTopSlate600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopSlate600?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #475569; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightSlate600></Box>
     * <Box borderRightSlate600--T20></Box> // transparentize color
     * <Box borderRightSlate600--O20></Box> // opacify color
     * <Box borderRightSlate600--L20></Box> // lighten color
     * <Box borderRightSlate600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightSlate600?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #475569; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomSlate600></Box>
     * <Box borderBottomSlate600--T20></Box> // transparentize color
     * <Box borderBottomSlate600--O20></Box> // opacify color
     * <Box borderBottomSlate600--L20></Box> // lighten color
     * <Box borderBottomSlate600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomSlate600?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #475569; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftSlate600></Box>
     * <Box borderLeftSlate600--T20></Box> // transparentize color
     * <Box borderLeftSlate600--O20></Box> // opacify color
     * <Box borderLeftSlate600--L20></Box> // lighten color
     * <Box borderLeftSlate600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftSlate600?: ResponsiveBoolean
    /**
     * Set border color to slate700
     * ```css
     * { border-color: #334155; }
     * ```
     * @example
     * ```tsx
     * <Box borderSlate700></Box>
     * <Box borderSlate700--T20></Box> // transparentize color
     * <Box borderSlate700--O20></Box> // opacify color
     * <Box borderSlate700--L20></Box> // lighten color
     * <Box borderSlate700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderSlate700?: ResponsiveBoolean
    /**
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #334155; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopSlate700></Box>
     * <Box borderTopSlate700--T20></Box> // transparentize color
     * <Box borderTopSlate700--O20></Box> // opacify color
     * <Box borderTopSlate700--L20></Box> // lighten color
     * <Box borderTopSlate700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopSlate700?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #334155; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightSlate700></Box>
     * <Box borderRightSlate700--T20></Box> // transparentize color
     * <Box borderRightSlate700--O20></Box> // opacify color
     * <Box borderRightSlate700--L20></Box> // lighten color
     * <Box borderRightSlate700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightSlate700?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #334155; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomSlate700></Box>
     * <Box borderBottomSlate700--T20></Box> // transparentize color
     * <Box borderBottomSlate700--O20></Box> // opacify color
     * <Box borderBottomSlate700--L20></Box> // lighten color
     * <Box borderBottomSlate700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomSlate700?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #334155; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftSlate700></Box>
     * <Box borderLeftSlate700--T20></Box> // transparentize color
     * <Box borderLeftSlate700--O20></Box> // opacify color
     * <Box borderLeftSlate700--L20></Box> // lighten color
     * <Box borderLeftSlate700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftSlate700?: ResponsiveBoolean
    /**
     * Set border color to slate800
     * ```css
     * { border-color: #1e293b; }
     * ```
     * @example
     * ```tsx
     * <Box borderSlate800></Box>
     * <Box borderSlate800--T20></Box> // transparentize color
     * <Box borderSlate800--O20></Box> // opacify color
     * <Box borderSlate800--L20></Box> // lighten color
     * <Box borderSlate800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderSlate800?: ResponsiveBoolean
    /**
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #1e293b; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopSlate800></Box>
     * <Box borderTopSlate800--T20></Box> // transparentize color
     * <Box borderTopSlate800--O20></Box> // opacify color
     * <Box borderTopSlate800--L20></Box> // lighten color
     * <Box borderTopSlate800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopSlate800?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #1e293b; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightSlate800></Box>
     * <Box borderRightSlate800--T20></Box> // transparentize color
     * <Box borderRightSlate800--O20></Box> // opacify color
     * <Box borderRightSlate800--L20></Box> // lighten color
     * <Box borderRightSlate800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightSlate800?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #1e293b; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomSlate800></Box>
     * <Box borderBottomSlate800--T20></Box> // transparentize color
     * <Box borderBottomSlate800--O20></Box> // opacify color
     * <Box borderBottomSlate800--L20></Box> // lighten color
     * <Box borderBottomSlate800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomSlate800?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #1e293b; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftSlate800></Box>
     * <Box borderLeftSlate800--T20></Box> // transparentize color
     * <Box borderLeftSlate800--O20></Box> // opacify color
     * <Box borderLeftSlate800--L20></Box> // lighten color
     * <Box borderLeftSlate800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftSlate800?: ResponsiveBoolean
    /**
     * Set border color to slate900
     * ```css
     * { border-color: #0f172a; }
     * ```
     * @example
     * ```tsx
     * <Box borderSlate900></Box>
     * <Box borderSlate900--T20></Box> // transparentize color
     * <Box borderSlate900--O20></Box> // opacify color
     * <Box borderSlate900--L20></Box> // lighten color
     * <Box borderSlate900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderSlate900?: ResponsiveBoolean
    /**
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #0f172a; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopSlate900></Box>
     * <Box borderTopSlate900--T20></Box> // transparentize color
     * <Box borderTopSlate900--O20></Box> // opacify color
     * <Box borderTopSlate900--L20></Box> // lighten color
     * <Box borderTopSlate900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopSlate900?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #0f172a; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightSlate900></Box>
     * <Box borderRightSlate900--T20></Box> // transparentize color
     * <Box borderRightSlate900--O20></Box> // opacify color
     * <Box borderRightSlate900--L20></Box> // lighten color
     * <Box borderRightSlate900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightSlate900?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #0f172a; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomSlate900></Box>
     * <Box borderBottomSlate900--T20></Box> // transparentize color
     * <Box borderBottomSlate900--O20></Box> // opacify color
     * <Box borderBottomSlate900--L20></Box> // lighten color
     * <Box borderBottomSlate900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomSlate900?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #0f172a; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftSlate900></Box>
     * <Box borderLeftSlate900--T20></Box> // transparentize color
     * <Box borderLeftSlate900--O20></Box> // opacify color
     * <Box borderLeftSlate900--L20></Box> // lighten color
     * <Box borderLeftSlate900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftSlate900?: ResponsiveBoolean
    /**
     * Set border color to gray50
     * ```css
     * { border-color: #f9fafb; }
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
     * { border-top-color: #f9fafb; }
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
     * { border-right-color: #f9fafb; }
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
     * { border-bottom-color: #f9fafb; }
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
     * { border-left-color: #f9fafb; }
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
     * { border-color: #f3f4f6; }
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
     * { border-top-color: #f3f4f6; }
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
     * { border-right-color: #f3f4f6; }
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
     * { border-bottom-color: #f3f4f6; }
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
     * { border-left-color: #f3f4f6; }
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
     * { border-color: #e5e7eb; }
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
     * { border-top-color: #e5e7eb; }
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
     * { border-right-color: #e5e7eb; }
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
     * { border-bottom-color: #e5e7eb; }
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
     * { border-left-color: #e5e7eb; }
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
     * { border-color: #d1d5db; }
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
     * { border-top-color: #d1d5db; }
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
     * { border-right-color: #d1d5db; }
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
     * { border-bottom-color: #d1d5db; }
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
     * { border-left-color: #d1d5db; }
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
     * { border-color: #9ca3af; }
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
     * { border-top-color: #9ca3af; }
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
     * { border-right-color: #9ca3af; }
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
     * { border-bottom-color: #9ca3af; }
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
     * { border-left-color: #9ca3af; }
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
     * { border-color: #6b7280; }
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
     * { border-top-color: #6b7280; }
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
     * { border-right-color: #6b7280; }
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
     * { border-bottom-color: #6b7280; }
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
     * { border-left-color: #6b7280; }
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
     * { border-color: #4b5563; }
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
     * { border-top-color: #4b5563; }
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
     * { border-right-color: #4b5563; }
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
     * { border-bottom-color: #4b5563; }
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
     * { border-left-color: #4b5563; }
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
     * { border-color: #374151; }
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
     * { border-top-color: #374151; }
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
     * { border-right-color: #374151; }
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
     * { border-bottom-color: #374151; }
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
     * { border-left-color: #374151; }
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
     * { border-color: #1f2937; }
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
     * { border-top-color: #1f2937; }
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
     * { border-right-color: #1f2937; }
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
     * { border-bottom-color: #1f2937; }
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
     * { border-left-color: #1f2937; }
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
     * { border-color: #111827; }
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
     * { border-top-color: #111827; }
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
     * { border-right-color: #111827; }
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
     * { border-bottom-color: #111827; }
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
     * { border-left-color: #111827; }
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
     * Set border color to zinc50
     * ```css
     * { border-color: #fafafa; }
     * ```
     * @example
     * ```tsx
     * <Box borderZinc50></Box>
     * <Box borderZinc50--T20></Box> // transparentize color
     * <Box borderZinc50--O20></Box> // opacify color
     * <Box borderZinc50--L20></Box> // lighten color
     * <Box borderZinc50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderZinc50?: ResponsiveBoolean
    /**
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #fafafa; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopZinc50></Box>
     * <Box borderTopZinc50--T20></Box> // transparentize color
     * <Box borderTopZinc50--O20></Box> // opacify color
     * <Box borderTopZinc50--L20></Box> // lighten color
     * <Box borderTopZinc50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopZinc50?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #fafafa; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightZinc50></Box>
     * <Box borderRightZinc50--T20></Box> // transparentize color
     * <Box borderRightZinc50--O20></Box> // opacify color
     * <Box borderRightZinc50--L20></Box> // lighten color
     * <Box borderRightZinc50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightZinc50?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #fafafa; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomZinc50></Box>
     * <Box borderBottomZinc50--T20></Box> // transparentize color
     * <Box borderBottomZinc50--O20></Box> // opacify color
     * <Box borderBottomZinc50--L20></Box> // lighten color
     * <Box borderBottomZinc50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomZinc50?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #fafafa; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftZinc50></Box>
     * <Box borderLeftZinc50--T20></Box> // transparentize color
     * <Box borderLeftZinc50--O20></Box> // opacify color
     * <Box borderLeftZinc50--L20></Box> // lighten color
     * <Box borderLeftZinc50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftZinc50?: ResponsiveBoolean
    /**
     * Set border color to zinc100
     * ```css
     * { border-color: #f4f4f5; }
     * ```
     * @example
     * ```tsx
     * <Box borderZinc100></Box>
     * <Box borderZinc100--T20></Box> // transparentize color
     * <Box borderZinc100--O20></Box> // opacify color
     * <Box borderZinc100--L20></Box> // lighten color
     * <Box borderZinc100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderZinc100?: ResponsiveBoolean
    /**
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #f4f4f5; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopZinc100></Box>
     * <Box borderTopZinc100--T20></Box> // transparentize color
     * <Box borderTopZinc100--O20></Box> // opacify color
     * <Box borderTopZinc100--L20></Box> // lighten color
     * <Box borderTopZinc100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopZinc100?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #f4f4f5; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightZinc100></Box>
     * <Box borderRightZinc100--T20></Box> // transparentize color
     * <Box borderRightZinc100--O20></Box> // opacify color
     * <Box borderRightZinc100--L20></Box> // lighten color
     * <Box borderRightZinc100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightZinc100?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #f4f4f5; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomZinc100></Box>
     * <Box borderBottomZinc100--T20></Box> // transparentize color
     * <Box borderBottomZinc100--O20></Box> // opacify color
     * <Box borderBottomZinc100--L20></Box> // lighten color
     * <Box borderBottomZinc100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomZinc100?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #f4f4f5; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftZinc100></Box>
     * <Box borderLeftZinc100--T20></Box> // transparentize color
     * <Box borderLeftZinc100--O20></Box> // opacify color
     * <Box borderLeftZinc100--L20></Box> // lighten color
     * <Box borderLeftZinc100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftZinc100?: ResponsiveBoolean
    /**
     * Set border color to zinc200
     * ```css
     * { border-color: #e4e4e7; }
     * ```
     * @example
     * ```tsx
     * <Box borderZinc200></Box>
     * <Box borderZinc200--T20></Box> // transparentize color
     * <Box borderZinc200--O20></Box> // opacify color
     * <Box borderZinc200--L20></Box> // lighten color
     * <Box borderZinc200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderZinc200?: ResponsiveBoolean
    /**
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #e4e4e7; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopZinc200></Box>
     * <Box borderTopZinc200--T20></Box> // transparentize color
     * <Box borderTopZinc200--O20></Box> // opacify color
     * <Box borderTopZinc200--L20></Box> // lighten color
     * <Box borderTopZinc200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopZinc200?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #e4e4e7; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightZinc200></Box>
     * <Box borderRightZinc200--T20></Box> // transparentize color
     * <Box borderRightZinc200--O20></Box> // opacify color
     * <Box borderRightZinc200--L20></Box> // lighten color
     * <Box borderRightZinc200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightZinc200?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #e4e4e7; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomZinc200></Box>
     * <Box borderBottomZinc200--T20></Box> // transparentize color
     * <Box borderBottomZinc200--O20></Box> // opacify color
     * <Box borderBottomZinc200--L20></Box> // lighten color
     * <Box borderBottomZinc200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomZinc200?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #e4e4e7; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftZinc200></Box>
     * <Box borderLeftZinc200--T20></Box> // transparentize color
     * <Box borderLeftZinc200--O20></Box> // opacify color
     * <Box borderLeftZinc200--L20></Box> // lighten color
     * <Box borderLeftZinc200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftZinc200?: ResponsiveBoolean
    /**
     * Set border color to zinc300
     * ```css
     * { border-color: #d4d4d8; }
     * ```
     * @example
     * ```tsx
     * <Box borderZinc300></Box>
     * <Box borderZinc300--T20></Box> // transparentize color
     * <Box borderZinc300--O20></Box> // opacify color
     * <Box borderZinc300--L20></Box> // lighten color
     * <Box borderZinc300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderZinc300?: ResponsiveBoolean
    /**
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #d4d4d8; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopZinc300></Box>
     * <Box borderTopZinc300--T20></Box> // transparentize color
     * <Box borderTopZinc300--O20></Box> // opacify color
     * <Box borderTopZinc300--L20></Box> // lighten color
     * <Box borderTopZinc300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopZinc300?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #d4d4d8; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightZinc300></Box>
     * <Box borderRightZinc300--T20></Box> // transparentize color
     * <Box borderRightZinc300--O20></Box> // opacify color
     * <Box borderRightZinc300--L20></Box> // lighten color
     * <Box borderRightZinc300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightZinc300?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #d4d4d8; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomZinc300></Box>
     * <Box borderBottomZinc300--T20></Box> // transparentize color
     * <Box borderBottomZinc300--O20></Box> // opacify color
     * <Box borderBottomZinc300--L20></Box> // lighten color
     * <Box borderBottomZinc300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomZinc300?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #d4d4d8; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftZinc300></Box>
     * <Box borderLeftZinc300--T20></Box> // transparentize color
     * <Box borderLeftZinc300--O20></Box> // opacify color
     * <Box borderLeftZinc300--L20></Box> // lighten color
     * <Box borderLeftZinc300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftZinc300?: ResponsiveBoolean
    /**
     * Set border color to zinc400
     * ```css
     * { border-color: #a1a1aa; }
     * ```
     * @example
     * ```tsx
     * <Box borderZinc400></Box>
     * <Box borderZinc400--T20></Box> // transparentize color
     * <Box borderZinc400--O20></Box> // opacify color
     * <Box borderZinc400--L20></Box> // lighten color
     * <Box borderZinc400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderZinc400?: ResponsiveBoolean
    /**
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #a1a1aa; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopZinc400></Box>
     * <Box borderTopZinc400--T20></Box> // transparentize color
     * <Box borderTopZinc400--O20></Box> // opacify color
     * <Box borderTopZinc400--L20></Box> // lighten color
     * <Box borderTopZinc400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopZinc400?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #a1a1aa; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightZinc400></Box>
     * <Box borderRightZinc400--T20></Box> // transparentize color
     * <Box borderRightZinc400--O20></Box> // opacify color
     * <Box borderRightZinc400--L20></Box> // lighten color
     * <Box borderRightZinc400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightZinc400?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #a1a1aa; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomZinc400></Box>
     * <Box borderBottomZinc400--T20></Box> // transparentize color
     * <Box borderBottomZinc400--O20></Box> // opacify color
     * <Box borderBottomZinc400--L20></Box> // lighten color
     * <Box borderBottomZinc400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomZinc400?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #a1a1aa; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftZinc400></Box>
     * <Box borderLeftZinc400--T20></Box> // transparentize color
     * <Box borderLeftZinc400--O20></Box> // opacify color
     * <Box borderLeftZinc400--L20></Box> // lighten color
     * <Box borderLeftZinc400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftZinc400?: ResponsiveBoolean
    /**
     * Set border color to zinc500
     * ```css
     * { border-color: #71717a; }
     * ```
     * @example
     * ```tsx
     * <Box borderZinc500></Box>
     * <Box borderZinc500--T20></Box> // transparentize color
     * <Box borderZinc500--O20></Box> // opacify color
     * <Box borderZinc500--L20></Box> // lighten color
     * <Box borderZinc500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderZinc500?: ResponsiveBoolean
    /**
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #71717a; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopZinc500></Box>
     * <Box borderTopZinc500--T20></Box> // transparentize color
     * <Box borderTopZinc500--O20></Box> // opacify color
     * <Box borderTopZinc500--L20></Box> // lighten color
     * <Box borderTopZinc500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopZinc500?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #71717a; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightZinc500></Box>
     * <Box borderRightZinc500--T20></Box> // transparentize color
     * <Box borderRightZinc500--O20></Box> // opacify color
     * <Box borderRightZinc500--L20></Box> // lighten color
     * <Box borderRightZinc500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightZinc500?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #71717a; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomZinc500></Box>
     * <Box borderBottomZinc500--T20></Box> // transparentize color
     * <Box borderBottomZinc500--O20></Box> // opacify color
     * <Box borderBottomZinc500--L20></Box> // lighten color
     * <Box borderBottomZinc500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomZinc500?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #71717a; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftZinc500></Box>
     * <Box borderLeftZinc500--T20></Box> // transparentize color
     * <Box borderLeftZinc500--O20></Box> // opacify color
     * <Box borderLeftZinc500--L20></Box> // lighten color
     * <Box borderLeftZinc500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftZinc500?: ResponsiveBoolean
    /**
     * Set border color to zinc600
     * ```css
     * { border-color: #52525b; }
     * ```
     * @example
     * ```tsx
     * <Box borderZinc600></Box>
     * <Box borderZinc600--T20></Box> // transparentize color
     * <Box borderZinc600--O20></Box> // opacify color
     * <Box borderZinc600--L20></Box> // lighten color
     * <Box borderZinc600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderZinc600?: ResponsiveBoolean
    /**
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #52525b; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopZinc600></Box>
     * <Box borderTopZinc600--T20></Box> // transparentize color
     * <Box borderTopZinc600--O20></Box> // opacify color
     * <Box borderTopZinc600--L20></Box> // lighten color
     * <Box borderTopZinc600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopZinc600?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #52525b; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightZinc600></Box>
     * <Box borderRightZinc600--T20></Box> // transparentize color
     * <Box borderRightZinc600--O20></Box> // opacify color
     * <Box borderRightZinc600--L20></Box> // lighten color
     * <Box borderRightZinc600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightZinc600?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #52525b; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomZinc600></Box>
     * <Box borderBottomZinc600--T20></Box> // transparentize color
     * <Box borderBottomZinc600--O20></Box> // opacify color
     * <Box borderBottomZinc600--L20></Box> // lighten color
     * <Box borderBottomZinc600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomZinc600?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #52525b; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftZinc600></Box>
     * <Box borderLeftZinc600--T20></Box> // transparentize color
     * <Box borderLeftZinc600--O20></Box> // opacify color
     * <Box borderLeftZinc600--L20></Box> // lighten color
     * <Box borderLeftZinc600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftZinc600?: ResponsiveBoolean
    /**
     * Set border color to zinc700
     * ```css
     * { border-color: #3f3f46; }
     * ```
     * @example
     * ```tsx
     * <Box borderZinc700></Box>
     * <Box borderZinc700--T20></Box> // transparentize color
     * <Box borderZinc700--O20></Box> // opacify color
     * <Box borderZinc700--L20></Box> // lighten color
     * <Box borderZinc700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderZinc700?: ResponsiveBoolean
    /**
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #3f3f46; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopZinc700></Box>
     * <Box borderTopZinc700--T20></Box> // transparentize color
     * <Box borderTopZinc700--O20></Box> // opacify color
     * <Box borderTopZinc700--L20></Box> // lighten color
     * <Box borderTopZinc700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopZinc700?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #3f3f46; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightZinc700></Box>
     * <Box borderRightZinc700--T20></Box> // transparentize color
     * <Box borderRightZinc700--O20></Box> // opacify color
     * <Box borderRightZinc700--L20></Box> // lighten color
     * <Box borderRightZinc700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightZinc700?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #3f3f46; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomZinc700></Box>
     * <Box borderBottomZinc700--T20></Box> // transparentize color
     * <Box borderBottomZinc700--O20></Box> // opacify color
     * <Box borderBottomZinc700--L20></Box> // lighten color
     * <Box borderBottomZinc700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomZinc700?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #3f3f46; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftZinc700></Box>
     * <Box borderLeftZinc700--T20></Box> // transparentize color
     * <Box borderLeftZinc700--O20></Box> // opacify color
     * <Box borderLeftZinc700--L20></Box> // lighten color
     * <Box borderLeftZinc700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftZinc700?: ResponsiveBoolean
    /**
     * Set border color to zinc800
     * ```css
     * { border-color: #27272a; }
     * ```
     * @example
     * ```tsx
     * <Box borderZinc800></Box>
     * <Box borderZinc800--T20></Box> // transparentize color
     * <Box borderZinc800--O20></Box> // opacify color
     * <Box borderZinc800--L20></Box> // lighten color
     * <Box borderZinc800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderZinc800?: ResponsiveBoolean
    /**
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #27272a; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopZinc800></Box>
     * <Box borderTopZinc800--T20></Box> // transparentize color
     * <Box borderTopZinc800--O20></Box> // opacify color
     * <Box borderTopZinc800--L20></Box> // lighten color
     * <Box borderTopZinc800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopZinc800?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #27272a; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightZinc800></Box>
     * <Box borderRightZinc800--T20></Box> // transparentize color
     * <Box borderRightZinc800--O20></Box> // opacify color
     * <Box borderRightZinc800--L20></Box> // lighten color
     * <Box borderRightZinc800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightZinc800?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #27272a; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomZinc800></Box>
     * <Box borderBottomZinc800--T20></Box> // transparentize color
     * <Box borderBottomZinc800--O20></Box> // opacify color
     * <Box borderBottomZinc800--L20></Box> // lighten color
     * <Box borderBottomZinc800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomZinc800?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #27272a; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftZinc800></Box>
     * <Box borderLeftZinc800--T20></Box> // transparentize color
     * <Box borderLeftZinc800--O20></Box> // opacify color
     * <Box borderLeftZinc800--L20></Box> // lighten color
     * <Box borderLeftZinc800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftZinc800?: ResponsiveBoolean
    /**
     * Set border color to zinc900
     * ```css
     * { border-color: #18181b; }
     * ```
     * @example
     * ```tsx
     * <Box borderZinc900></Box>
     * <Box borderZinc900--T20></Box> // transparentize color
     * <Box borderZinc900--O20></Box> // opacify color
     * <Box borderZinc900--L20></Box> // lighten color
     * <Box borderZinc900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderZinc900?: ResponsiveBoolean
    /**
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #18181b; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopZinc900></Box>
     * <Box borderTopZinc900--T20></Box> // transparentize color
     * <Box borderTopZinc900--O20></Box> // opacify color
     * <Box borderTopZinc900--L20></Box> // lighten color
     * <Box borderTopZinc900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopZinc900?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #18181b; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightZinc900></Box>
     * <Box borderRightZinc900--T20></Box> // transparentize color
     * <Box borderRightZinc900--O20></Box> // opacify color
     * <Box borderRightZinc900--L20></Box> // lighten color
     * <Box borderRightZinc900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightZinc900?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #18181b; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomZinc900></Box>
     * <Box borderBottomZinc900--T20></Box> // transparentize color
     * <Box borderBottomZinc900--O20></Box> // opacify color
     * <Box borderBottomZinc900--L20></Box> // lighten color
     * <Box borderBottomZinc900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomZinc900?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #18181b; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftZinc900></Box>
     * <Box borderLeftZinc900--T20></Box> // transparentize color
     * <Box borderLeftZinc900--O20></Box> // opacify color
     * <Box borderLeftZinc900--L20></Box> // lighten color
     * <Box borderLeftZinc900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftZinc900?: ResponsiveBoolean
    /**
     * Set border color to neutral50
     * ```css
     * { border-color: #fafafa; }
     * ```
     * @example
     * ```tsx
     * <Box borderNeutral50></Box>
     * <Box borderNeutral50--T20></Box> // transparentize color
     * <Box borderNeutral50--O20></Box> // opacify color
     * <Box borderNeutral50--L20></Box> // lighten color
     * <Box borderNeutral50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderNeutral50?: ResponsiveBoolean
    /**
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #fafafa; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopNeutral50></Box>
     * <Box borderTopNeutral50--T20></Box> // transparentize color
     * <Box borderTopNeutral50--O20></Box> // opacify color
     * <Box borderTopNeutral50--L20></Box> // lighten color
     * <Box borderTopNeutral50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopNeutral50?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #fafafa; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightNeutral50></Box>
     * <Box borderRightNeutral50--T20></Box> // transparentize color
     * <Box borderRightNeutral50--O20></Box> // opacify color
     * <Box borderRightNeutral50--L20></Box> // lighten color
     * <Box borderRightNeutral50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightNeutral50?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #fafafa; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomNeutral50></Box>
     * <Box borderBottomNeutral50--T20></Box> // transparentize color
     * <Box borderBottomNeutral50--O20></Box> // opacify color
     * <Box borderBottomNeutral50--L20></Box> // lighten color
     * <Box borderBottomNeutral50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomNeutral50?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #fafafa; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftNeutral50></Box>
     * <Box borderLeftNeutral50--T20></Box> // transparentize color
     * <Box borderLeftNeutral50--O20></Box> // opacify color
     * <Box borderLeftNeutral50--L20></Box> // lighten color
     * <Box borderLeftNeutral50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftNeutral50?: ResponsiveBoolean
    /**
     * Set border color to neutral100
     * ```css
     * { border-color: #f5f5f5; }
     * ```
     * @example
     * ```tsx
     * <Box borderNeutral100></Box>
     * <Box borderNeutral100--T20></Box> // transparentize color
     * <Box borderNeutral100--O20></Box> // opacify color
     * <Box borderNeutral100--L20></Box> // lighten color
     * <Box borderNeutral100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderNeutral100?: ResponsiveBoolean
    /**
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #f5f5f5; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopNeutral100></Box>
     * <Box borderTopNeutral100--T20></Box> // transparentize color
     * <Box borderTopNeutral100--O20></Box> // opacify color
     * <Box borderTopNeutral100--L20></Box> // lighten color
     * <Box borderTopNeutral100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopNeutral100?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #f5f5f5; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightNeutral100></Box>
     * <Box borderRightNeutral100--T20></Box> // transparentize color
     * <Box borderRightNeutral100--O20></Box> // opacify color
     * <Box borderRightNeutral100--L20></Box> // lighten color
     * <Box borderRightNeutral100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightNeutral100?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #f5f5f5; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomNeutral100></Box>
     * <Box borderBottomNeutral100--T20></Box> // transparentize color
     * <Box borderBottomNeutral100--O20></Box> // opacify color
     * <Box borderBottomNeutral100--L20></Box> // lighten color
     * <Box borderBottomNeutral100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomNeutral100?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #f5f5f5; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftNeutral100></Box>
     * <Box borderLeftNeutral100--T20></Box> // transparentize color
     * <Box borderLeftNeutral100--O20></Box> // opacify color
     * <Box borderLeftNeutral100--L20></Box> // lighten color
     * <Box borderLeftNeutral100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftNeutral100?: ResponsiveBoolean
    /**
     * Set border color to neutral200
     * ```css
     * { border-color: #e5e5e5; }
     * ```
     * @example
     * ```tsx
     * <Box borderNeutral200></Box>
     * <Box borderNeutral200--T20></Box> // transparentize color
     * <Box borderNeutral200--O20></Box> // opacify color
     * <Box borderNeutral200--L20></Box> // lighten color
     * <Box borderNeutral200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderNeutral200?: ResponsiveBoolean
    /**
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #e5e5e5; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopNeutral200></Box>
     * <Box borderTopNeutral200--T20></Box> // transparentize color
     * <Box borderTopNeutral200--O20></Box> // opacify color
     * <Box borderTopNeutral200--L20></Box> // lighten color
     * <Box borderTopNeutral200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopNeutral200?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #e5e5e5; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightNeutral200></Box>
     * <Box borderRightNeutral200--T20></Box> // transparentize color
     * <Box borderRightNeutral200--O20></Box> // opacify color
     * <Box borderRightNeutral200--L20></Box> // lighten color
     * <Box borderRightNeutral200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightNeutral200?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #e5e5e5; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomNeutral200></Box>
     * <Box borderBottomNeutral200--T20></Box> // transparentize color
     * <Box borderBottomNeutral200--O20></Box> // opacify color
     * <Box borderBottomNeutral200--L20></Box> // lighten color
     * <Box borderBottomNeutral200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomNeutral200?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #e5e5e5; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftNeutral200></Box>
     * <Box borderLeftNeutral200--T20></Box> // transparentize color
     * <Box borderLeftNeutral200--O20></Box> // opacify color
     * <Box borderLeftNeutral200--L20></Box> // lighten color
     * <Box borderLeftNeutral200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftNeutral200?: ResponsiveBoolean
    /**
     * Set border color to neutral300
     * ```css
     * { border-color: #d4d4d4; }
     * ```
     * @example
     * ```tsx
     * <Box borderNeutral300></Box>
     * <Box borderNeutral300--T20></Box> // transparentize color
     * <Box borderNeutral300--O20></Box> // opacify color
     * <Box borderNeutral300--L20></Box> // lighten color
     * <Box borderNeutral300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderNeutral300?: ResponsiveBoolean
    /**
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #d4d4d4; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopNeutral300></Box>
     * <Box borderTopNeutral300--T20></Box> // transparentize color
     * <Box borderTopNeutral300--O20></Box> // opacify color
     * <Box borderTopNeutral300--L20></Box> // lighten color
     * <Box borderTopNeutral300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopNeutral300?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #d4d4d4; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightNeutral300></Box>
     * <Box borderRightNeutral300--T20></Box> // transparentize color
     * <Box borderRightNeutral300--O20></Box> // opacify color
     * <Box borderRightNeutral300--L20></Box> // lighten color
     * <Box borderRightNeutral300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightNeutral300?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #d4d4d4; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomNeutral300></Box>
     * <Box borderBottomNeutral300--T20></Box> // transparentize color
     * <Box borderBottomNeutral300--O20></Box> // opacify color
     * <Box borderBottomNeutral300--L20></Box> // lighten color
     * <Box borderBottomNeutral300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomNeutral300?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #d4d4d4; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftNeutral300></Box>
     * <Box borderLeftNeutral300--T20></Box> // transparentize color
     * <Box borderLeftNeutral300--O20></Box> // opacify color
     * <Box borderLeftNeutral300--L20></Box> // lighten color
     * <Box borderLeftNeutral300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftNeutral300?: ResponsiveBoolean
    /**
     * Set border color to neutral400
     * ```css
     * { border-color: #a3a3a3; }
     * ```
     * @example
     * ```tsx
     * <Box borderNeutral400></Box>
     * <Box borderNeutral400--T20></Box> // transparentize color
     * <Box borderNeutral400--O20></Box> // opacify color
     * <Box borderNeutral400--L20></Box> // lighten color
     * <Box borderNeutral400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderNeutral400?: ResponsiveBoolean
    /**
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #a3a3a3; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopNeutral400></Box>
     * <Box borderTopNeutral400--T20></Box> // transparentize color
     * <Box borderTopNeutral400--O20></Box> // opacify color
     * <Box borderTopNeutral400--L20></Box> // lighten color
     * <Box borderTopNeutral400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopNeutral400?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #a3a3a3; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightNeutral400></Box>
     * <Box borderRightNeutral400--T20></Box> // transparentize color
     * <Box borderRightNeutral400--O20></Box> // opacify color
     * <Box borderRightNeutral400--L20></Box> // lighten color
     * <Box borderRightNeutral400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightNeutral400?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #a3a3a3; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomNeutral400></Box>
     * <Box borderBottomNeutral400--T20></Box> // transparentize color
     * <Box borderBottomNeutral400--O20></Box> // opacify color
     * <Box borderBottomNeutral400--L20></Box> // lighten color
     * <Box borderBottomNeutral400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomNeutral400?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #a3a3a3; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftNeutral400></Box>
     * <Box borderLeftNeutral400--T20></Box> // transparentize color
     * <Box borderLeftNeutral400--O20></Box> // opacify color
     * <Box borderLeftNeutral400--L20></Box> // lighten color
     * <Box borderLeftNeutral400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftNeutral400?: ResponsiveBoolean
    /**
     * Set border color to neutral500
     * ```css
     * { border-color: #737373; }
     * ```
     * @example
     * ```tsx
     * <Box borderNeutral500></Box>
     * <Box borderNeutral500--T20></Box> // transparentize color
     * <Box borderNeutral500--O20></Box> // opacify color
     * <Box borderNeutral500--L20></Box> // lighten color
     * <Box borderNeutral500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderNeutral500?: ResponsiveBoolean
    /**
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #737373; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopNeutral500></Box>
     * <Box borderTopNeutral500--T20></Box> // transparentize color
     * <Box borderTopNeutral500--O20></Box> // opacify color
     * <Box borderTopNeutral500--L20></Box> // lighten color
     * <Box borderTopNeutral500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopNeutral500?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #737373; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightNeutral500></Box>
     * <Box borderRightNeutral500--T20></Box> // transparentize color
     * <Box borderRightNeutral500--O20></Box> // opacify color
     * <Box borderRightNeutral500--L20></Box> // lighten color
     * <Box borderRightNeutral500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightNeutral500?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #737373; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomNeutral500></Box>
     * <Box borderBottomNeutral500--T20></Box> // transparentize color
     * <Box borderBottomNeutral500--O20></Box> // opacify color
     * <Box borderBottomNeutral500--L20></Box> // lighten color
     * <Box borderBottomNeutral500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomNeutral500?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #737373; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftNeutral500></Box>
     * <Box borderLeftNeutral500--T20></Box> // transparentize color
     * <Box borderLeftNeutral500--O20></Box> // opacify color
     * <Box borderLeftNeutral500--L20></Box> // lighten color
     * <Box borderLeftNeutral500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftNeutral500?: ResponsiveBoolean
    /**
     * Set border color to neutral600
     * ```css
     * { border-color: #525252; }
     * ```
     * @example
     * ```tsx
     * <Box borderNeutral600></Box>
     * <Box borderNeutral600--T20></Box> // transparentize color
     * <Box borderNeutral600--O20></Box> // opacify color
     * <Box borderNeutral600--L20></Box> // lighten color
     * <Box borderNeutral600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderNeutral600?: ResponsiveBoolean
    /**
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #525252; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopNeutral600></Box>
     * <Box borderTopNeutral600--T20></Box> // transparentize color
     * <Box borderTopNeutral600--O20></Box> // opacify color
     * <Box borderTopNeutral600--L20></Box> // lighten color
     * <Box borderTopNeutral600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopNeutral600?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #525252; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightNeutral600></Box>
     * <Box borderRightNeutral600--T20></Box> // transparentize color
     * <Box borderRightNeutral600--O20></Box> // opacify color
     * <Box borderRightNeutral600--L20></Box> // lighten color
     * <Box borderRightNeutral600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightNeutral600?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #525252; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomNeutral600></Box>
     * <Box borderBottomNeutral600--T20></Box> // transparentize color
     * <Box borderBottomNeutral600--O20></Box> // opacify color
     * <Box borderBottomNeutral600--L20></Box> // lighten color
     * <Box borderBottomNeutral600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomNeutral600?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #525252; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftNeutral600></Box>
     * <Box borderLeftNeutral600--T20></Box> // transparentize color
     * <Box borderLeftNeutral600--O20></Box> // opacify color
     * <Box borderLeftNeutral600--L20></Box> // lighten color
     * <Box borderLeftNeutral600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftNeutral600?: ResponsiveBoolean
    /**
     * Set border color to neutral700
     * ```css
     * { border-color: #404040; }
     * ```
     * @example
     * ```tsx
     * <Box borderNeutral700></Box>
     * <Box borderNeutral700--T20></Box> // transparentize color
     * <Box borderNeutral700--O20></Box> // opacify color
     * <Box borderNeutral700--L20></Box> // lighten color
     * <Box borderNeutral700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderNeutral700?: ResponsiveBoolean
    /**
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #404040; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopNeutral700></Box>
     * <Box borderTopNeutral700--T20></Box> // transparentize color
     * <Box borderTopNeutral700--O20></Box> // opacify color
     * <Box borderTopNeutral700--L20></Box> // lighten color
     * <Box borderTopNeutral700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopNeutral700?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #404040; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightNeutral700></Box>
     * <Box borderRightNeutral700--T20></Box> // transparentize color
     * <Box borderRightNeutral700--O20></Box> // opacify color
     * <Box borderRightNeutral700--L20></Box> // lighten color
     * <Box borderRightNeutral700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightNeutral700?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #404040; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomNeutral700></Box>
     * <Box borderBottomNeutral700--T20></Box> // transparentize color
     * <Box borderBottomNeutral700--O20></Box> // opacify color
     * <Box borderBottomNeutral700--L20></Box> // lighten color
     * <Box borderBottomNeutral700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomNeutral700?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #404040; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftNeutral700></Box>
     * <Box borderLeftNeutral700--T20></Box> // transparentize color
     * <Box borderLeftNeutral700--O20></Box> // opacify color
     * <Box borderLeftNeutral700--L20></Box> // lighten color
     * <Box borderLeftNeutral700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftNeutral700?: ResponsiveBoolean
    /**
     * Set border color to neutral800
     * ```css
     * { border-color: #262626; }
     * ```
     * @example
     * ```tsx
     * <Box borderNeutral800></Box>
     * <Box borderNeutral800--T20></Box> // transparentize color
     * <Box borderNeutral800--O20></Box> // opacify color
     * <Box borderNeutral800--L20></Box> // lighten color
     * <Box borderNeutral800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderNeutral800?: ResponsiveBoolean
    /**
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #262626; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopNeutral800></Box>
     * <Box borderTopNeutral800--T20></Box> // transparentize color
     * <Box borderTopNeutral800--O20></Box> // opacify color
     * <Box borderTopNeutral800--L20></Box> // lighten color
     * <Box borderTopNeutral800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopNeutral800?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #262626; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightNeutral800></Box>
     * <Box borderRightNeutral800--T20></Box> // transparentize color
     * <Box borderRightNeutral800--O20></Box> // opacify color
     * <Box borderRightNeutral800--L20></Box> // lighten color
     * <Box borderRightNeutral800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightNeutral800?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #262626; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomNeutral800></Box>
     * <Box borderBottomNeutral800--T20></Box> // transparentize color
     * <Box borderBottomNeutral800--O20></Box> // opacify color
     * <Box borderBottomNeutral800--L20></Box> // lighten color
     * <Box borderBottomNeutral800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomNeutral800?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #262626; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftNeutral800></Box>
     * <Box borderLeftNeutral800--T20></Box> // transparentize color
     * <Box borderLeftNeutral800--O20></Box> // opacify color
     * <Box borderLeftNeutral800--L20></Box> // lighten color
     * <Box borderLeftNeutral800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftNeutral800?: ResponsiveBoolean
    /**
     * Set border color to neutral900
     * ```css
     * { border-color: #171717; }
     * ```
     * @example
     * ```tsx
     * <Box borderNeutral900></Box>
     * <Box borderNeutral900--T20></Box> // transparentize color
     * <Box borderNeutral900--O20></Box> // opacify color
     * <Box borderNeutral900--L20></Box> // lighten color
     * <Box borderNeutral900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderNeutral900?: ResponsiveBoolean
    /**
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #171717; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopNeutral900></Box>
     * <Box borderTopNeutral900--T20></Box> // transparentize color
     * <Box borderTopNeutral900--O20></Box> // opacify color
     * <Box borderTopNeutral900--L20></Box> // lighten color
     * <Box borderTopNeutral900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopNeutral900?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #171717; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightNeutral900></Box>
     * <Box borderRightNeutral900--T20></Box> // transparentize color
     * <Box borderRightNeutral900--O20></Box> // opacify color
     * <Box borderRightNeutral900--L20></Box> // lighten color
     * <Box borderRightNeutral900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightNeutral900?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #171717; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomNeutral900></Box>
     * <Box borderBottomNeutral900--T20></Box> // transparentize color
     * <Box borderBottomNeutral900--O20></Box> // opacify color
     * <Box borderBottomNeutral900--L20></Box> // lighten color
     * <Box borderBottomNeutral900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomNeutral900?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #171717; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftNeutral900></Box>
     * <Box borderLeftNeutral900--T20></Box> // transparentize color
     * <Box borderLeftNeutral900--O20></Box> // opacify color
     * <Box borderLeftNeutral900--L20></Box> // lighten color
     * <Box borderLeftNeutral900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftNeutral900?: ResponsiveBoolean
    /**
     * Set border color to stone50
     * ```css
     * { border-color: #fafaf9; }
     * ```
     * @example
     * ```tsx
     * <Box borderStone50></Box>
     * <Box borderStone50--T20></Box> // transparentize color
     * <Box borderStone50--O20></Box> // opacify color
     * <Box borderStone50--L20></Box> // lighten color
     * <Box borderStone50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderStone50?: ResponsiveBoolean
    /**
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #fafaf9; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopStone50></Box>
     * <Box borderTopStone50--T20></Box> // transparentize color
     * <Box borderTopStone50--O20></Box> // opacify color
     * <Box borderTopStone50--L20></Box> // lighten color
     * <Box borderTopStone50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopStone50?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #fafaf9; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightStone50></Box>
     * <Box borderRightStone50--T20></Box> // transparentize color
     * <Box borderRightStone50--O20></Box> // opacify color
     * <Box borderRightStone50--L20></Box> // lighten color
     * <Box borderRightStone50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightStone50?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #fafaf9; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomStone50></Box>
     * <Box borderBottomStone50--T20></Box> // transparentize color
     * <Box borderBottomStone50--O20></Box> // opacify color
     * <Box borderBottomStone50--L20></Box> // lighten color
     * <Box borderBottomStone50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomStone50?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #fafaf9; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftStone50></Box>
     * <Box borderLeftStone50--T20></Box> // transparentize color
     * <Box borderLeftStone50--O20></Box> // opacify color
     * <Box borderLeftStone50--L20></Box> // lighten color
     * <Box borderLeftStone50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftStone50?: ResponsiveBoolean
    /**
     * Set border color to stone100
     * ```css
     * { border-color: #f5f5f4; }
     * ```
     * @example
     * ```tsx
     * <Box borderStone100></Box>
     * <Box borderStone100--T20></Box> // transparentize color
     * <Box borderStone100--O20></Box> // opacify color
     * <Box borderStone100--L20></Box> // lighten color
     * <Box borderStone100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderStone100?: ResponsiveBoolean
    /**
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #f5f5f4; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopStone100></Box>
     * <Box borderTopStone100--T20></Box> // transparentize color
     * <Box borderTopStone100--O20></Box> // opacify color
     * <Box borderTopStone100--L20></Box> // lighten color
     * <Box borderTopStone100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopStone100?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #f5f5f4; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightStone100></Box>
     * <Box borderRightStone100--T20></Box> // transparentize color
     * <Box borderRightStone100--O20></Box> // opacify color
     * <Box borderRightStone100--L20></Box> // lighten color
     * <Box borderRightStone100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightStone100?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #f5f5f4; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomStone100></Box>
     * <Box borderBottomStone100--T20></Box> // transparentize color
     * <Box borderBottomStone100--O20></Box> // opacify color
     * <Box borderBottomStone100--L20></Box> // lighten color
     * <Box borderBottomStone100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomStone100?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #f5f5f4; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftStone100></Box>
     * <Box borderLeftStone100--T20></Box> // transparentize color
     * <Box borderLeftStone100--O20></Box> // opacify color
     * <Box borderLeftStone100--L20></Box> // lighten color
     * <Box borderLeftStone100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftStone100?: ResponsiveBoolean
    /**
     * Set border color to stone200
     * ```css
     * { border-color: #e7e5e4; }
     * ```
     * @example
     * ```tsx
     * <Box borderStone200></Box>
     * <Box borderStone200--T20></Box> // transparentize color
     * <Box borderStone200--O20></Box> // opacify color
     * <Box borderStone200--L20></Box> // lighten color
     * <Box borderStone200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderStone200?: ResponsiveBoolean
    /**
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #e7e5e4; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopStone200></Box>
     * <Box borderTopStone200--T20></Box> // transparentize color
     * <Box borderTopStone200--O20></Box> // opacify color
     * <Box borderTopStone200--L20></Box> // lighten color
     * <Box borderTopStone200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopStone200?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #e7e5e4; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightStone200></Box>
     * <Box borderRightStone200--T20></Box> // transparentize color
     * <Box borderRightStone200--O20></Box> // opacify color
     * <Box borderRightStone200--L20></Box> // lighten color
     * <Box borderRightStone200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightStone200?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #e7e5e4; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomStone200></Box>
     * <Box borderBottomStone200--T20></Box> // transparentize color
     * <Box borderBottomStone200--O20></Box> // opacify color
     * <Box borderBottomStone200--L20></Box> // lighten color
     * <Box borderBottomStone200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomStone200?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #e7e5e4; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftStone200></Box>
     * <Box borderLeftStone200--T20></Box> // transparentize color
     * <Box borderLeftStone200--O20></Box> // opacify color
     * <Box borderLeftStone200--L20></Box> // lighten color
     * <Box borderLeftStone200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftStone200?: ResponsiveBoolean
    /**
     * Set border color to stone300
     * ```css
     * { border-color: #d6d3d1; }
     * ```
     * @example
     * ```tsx
     * <Box borderStone300></Box>
     * <Box borderStone300--T20></Box> // transparentize color
     * <Box borderStone300--O20></Box> // opacify color
     * <Box borderStone300--L20></Box> // lighten color
     * <Box borderStone300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderStone300?: ResponsiveBoolean
    /**
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #d6d3d1; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopStone300></Box>
     * <Box borderTopStone300--T20></Box> // transparentize color
     * <Box borderTopStone300--O20></Box> // opacify color
     * <Box borderTopStone300--L20></Box> // lighten color
     * <Box borderTopStone300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopStone300?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #d6d3d1; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightStone300></Box>
     * <Box borderRightStone300--T20></Box> // transparentize color
     * <Box borderRightStone300--O20></Box> // opacify color
     * <Box borderRightStone300--L20></Box> // lighten color
     * <Box borderRightStone300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightStone300?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #d6d3d1; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomStone300></Box>
     * <Box borderBottomStone300--T20></Box> // transparentize color
     * <Box borderBottomStone300--O20></Box> // opacify color
     * <Box borderBottomStone300--L20></Box> // lighten color
     * <Box borderBottomStone300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomStone300?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #d6d3d1; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftStone300></Box>
     * <Box borderLeftStone300--T20></Box> // transparentize color
     * <Box borderLeftStone300--O20></Box> // opacify color
     * <Box borderLeftStone300--L20></Box> // lighten color
     * <Box borderLeftStone300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftStone300?: ResponsiveBoolean
    /**
     * Set border color to stone400
     * ```css
     * { border-color: #a8a29e; }
     * ```
     * @example
     * ```tsx
     * <Box borderStone400></Box>
     * <Box borderStone400--T20></Box> // transparentize color
     * <Box borderStone400--O20></Box> // opacify color
     * <Box borderStone400--L20></Box> // lighten color
     * <Box borderStone400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderStone400?: ResponsiveBoolean
    /**
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #a8a29e; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopStone400></Box>
     * <Box borderTopStone400--T20></Box> // transparentize color
     * <Box borderTopStone400--O20></Box> // opacify color
     * <Box borderTopStone400--L20></Box> // lighten color
     * <Box borderTopStone400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopStone400?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #a8a29e; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightStone400></Box>
     * <Box borderRightStone400--T20></Box> // transparentize color
     * <Box borderRightStone400--O20></Box> // opacify color
     * <Box borderRightStone400--L20></Box> // lighten color
     * <Box borderRightStone400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightStone400?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #a8a29e; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomStone400></Box>
     * <Box borderBottomStone400--T20></Box> // transparentize color
     * <Box borderBottomStone400--O20></Box> // opacify color
     * <Box borderBottomStone400--L20></Box> // lighten color
     * <Box borderBottomStone400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomStone400?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #a8a29e; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftStone400></Box>
     * <Box borderLeftStone400--T20></Box> // transparentize color
     * <Box borderLeftStone400--O20></Box> // opacify color
     * <Box borderLeftStone400--L20></Box> // lighten color
     * <Box borderLeftStone400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftStone400?: ResponsiveBoolean
    /**
     * Set border color to stone500
     * ```css
     * { border-color: #78716c; }
     * ```
     * @example
     * ```tsx
     * <Box borderStone500></Box>
     * <Box borderStone500--T20></Box> // transparentize color
     * <Box borderStone500--O20></Box> // opacify color
     * <Box borderStone500--L20></Box> // lighten color
     * <Box borderStone500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderStone500?: ResponsiveBoolean
    /**
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #78716c; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopStone500></Box>
     * <Box borderTopStone500--T20></Box> // transparentize color
     * <Box borderTopStone500--O20></Box> // opacify color
     * <Box borderTopStone500--L20></Box> // lighten color
     * <Box borderTopStone500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopStone500?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #78716c; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightStone500></Box>
     * <Box borderRightStone500--T20></Box> // transparentize color
     * <Box borderRightStone500--O20></Box> // opacify color
     * <Box borderRightStone500--L20></Box> // lighten color
     * <Box borderRightStone500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightStone500?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #78716c; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomStone500></Box>
     * <Box borderBottomStone500--T20></Box> // transparentize color
     * <Box borderBottomStone500--O20></Box> // opacify color
     * <Box borderBottomStone500--L20></Box> // lighten color
     * <Box borderBottomStone500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomStone500?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #78716c; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftStone500></Box>
     * <Box borderLeftStone500--T20></Box> // transparentize color
     * <Box borderLeftStone500--O20></Box> // opacify color
     * <Box borderLeftStone500--L20></Box> // lighten color
     * <Box borderLeftStone500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftStone500?: ResponsiveBoolean
    /**
     * Set border color to stone600
     * ```css
     * { border-color: #57534e; }
     * ```
     * @example
     * ```tsx
     * <Box borderStone600></Box>
     * <Box borderStone600--T20></Box> // transparentize color
     * <Box borderStone600--O20></Box> // opacify color
     * <Box borderStone600--L20></Box> // lighten color
     * <Box borderStone600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderStone600?: ResponsiveBoolean
    /**
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #57534e; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopStone600></Box>
     * <Box borderTopStone600--T20></Box> // transparentize color
     * <Box borderTopStone600--O20></Box> // opacify color
     * <Box borderTopStone600--L20></Box> // lighten color
     * <Box borderTopStone600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopStone600?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #57534e; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightStone600></Box>
     * <Box borderRightStone600--T20></Box> // transparentize color
     * <Box borderRightStone600--O20></Box> // opacify color
     * <Box borderRightStone600--L20></Box> // lighten color
     * <Box borderRightStone600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightStone600?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #57534e; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomStone600></Box>
     * <Box borderBottomStone600--T20></Box> // transparentize color
     * <Box borderBottomStone600--O20></Box> // opacify color
     * <Box borderBottomStone600--L20></Box> // lighten color
     * <Box borderBottomStone600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomStone600?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #57534e; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftStone600></Box>
     * <Box borderLeftStone600--T20></Box> // transparentize color
     * <Box borderLeftStone600--O20></Box> // opacify color
     * <Box borderLeftStone600--L20></Box> // lighten color
     * <Box borderLeftStone600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftStone600?: ResponsiveBoolean
    /**
     * Set border color to stone700
     * ```css
     * { border-color: #44403c; }
     * ```
     * @example
     * ```tsx
     * <Box borderStone700></Box>
     * <Box borderStone700--T20></Box> // transparentize color
     * <Box borderStone700--O20></Box> // opacify color
     * <Box borderStone700--L20></Box> // lighten color
     * <Box borderStone700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderStone700?: ResponsiveBoolean
    /**
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #44403c; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopStone700></Box>
     * <Box borderTopStone700--T20></Box> // transparentize color
     * <Box borderTopStone700--O20></Box> // opacify color
     * <Box borderTopStone700--L20></Box> // lighten color
     * <Box borderTopStone700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopStone700?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #44403c; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightStone700></Box>
     * <Box borderRightStone700--T20></Box> // transparentize color
     * <Box borderRightStone700--O20></Box> // opacify color
     * <Box borderRightStone700--L20></Box> // lighten color
     * <Box borderRightStone700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightStone700?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #44403c; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomStone700></Box>
     * <Box borderBottomStone700--T20></Box> // transparentize color
     * <Box borderBottomStone700--O20></Box> // opacify color
     * <Box borderBottomStone700--L20></Box> // lighten color
     * <Box borderBottomStone700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomStone700?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #44403c; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftStone700></Box>
     * <Box borderLeftStone700--T20></Box> // transparentize color
     * <Box borderLeftStone700--O20></Box> // opacify color
     * <Box borderLeftStone700--L20></Box> // lighten color
     * <Box borderLeftStone700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftStone700?: ResponsiveBoolean
    /**
     * Set border color to stone800
     * ```css
     * { border-color: #292524; }
     * ```
     * @example
     * ```tsx
     * <Box borderStone800></Box>
     * <Box borderStone800--T20></Box> // transparentize color
     * <Box borderStone800--O20></Box> // opacify color
     * <Box borderStone800--L20></Box> // lighten color
     * <Box borderStone800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderStone800?: ResponsiveBoolean
    /**
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #292524; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopStone800></Box>
     * <Box borderTopStone800--T20></Box> // transparentize color
     * <Box borderTopStone800--O20></Box> // opacify color
     * <Box borderTopStone800--L20></Box> // lighten color
     * <Box borderTopStone800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopStone800?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #292524; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightStone800></Box>
     * <Box borderRightStone800--T20></Box> // transparentize color
     * <Box borderRightStone800--O20></Box> // opacify color
     * <Box borderRightStone800--L20></Box> // lighten color
     * <Box borderRightStone800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightStone800?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #292524; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomStone800></Box>
     * <Box borderBottomStone800--T20></Box> // transparentize color
     * <Box borderBottomStone800--O20></Box> // opacify color
     * <Box borderBottomStone800--L20></Box> // lighten color
     * <Box borderBottomStone800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomStone800?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #292524; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftStone800></Box>
     * <Box borderLeftStone800--T20></Box> // transparentize color
     * <Box borderLeftStone800--O20></Box> // opacify color
     * <Box borderLeftStone800--L20></Box> // lighten color
     * <Box borderLeftStone800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftStone800?: ResponsiveBoolean
    /**
     * Set border color to stone900
     * ```css
     * { border-color: #1c1917; }
     * ```
     * @example
     * ```tsx
     * <Box borderStone900></Box>
     * <Box borderStone900--T20></Box> // transparentize color
     * <Box borderStone900--O20></Box> // opacify color
     * <Box borderStone900--L20></Box> // lighten color
     * <Box borderStone900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderStone900?: ResponsiveBoolean
    /**
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #1c1917; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopStone900></Box>
     * <Box borderTopStone900--T20></Box> // transparentize color
     * <Box borderTopStone900--O20></Box> // opacify color
     * <Box borderTopStone900--L20></Box> // lighten color
     * <Box borderTopStone900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopStone900?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #1c1917; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightStone900></Box>
     * <Box borderRightStone900--T20></Box> // transparentize color
     * <Box borderRightStone900--O20></Box> // opacify color
     * <Box borderRightStone900--L20></Box> // lighten color
     * <Box borderRightStone900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightStone900?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #1c1917; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomStone900></Box>
     * <Box borderBottomStone900--T20></Box> // transparentize color
     * <Box borderBottomStone900--O20></Box> // opacify color
     * <Box borderBottomStone900--L20></Box> // lighten color
     * <Box borderBottomStone900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomStone900?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #1c1917; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftStone900></Box>
     * <Box borderLeftStone900--T20></Box> // transparentize color
     * <Box borderLeftStone900--O20></Box> // opacify color
     * <Box borderLeftStone900--L20></Box> // lighten color
     * <Box borderLeftStone900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftStone900?: ResponsiveBoolean
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
     * Set border color to sky50
     * ```css
     * { border-color: #f0f9ff; }
     * ```
     * @example
     * ```tsx
     * <Box borderSky50></Box>
     * <Box borderSky50--T20></Box> // transparentize color
     * <Box borderSky50--O20></Box> // opacify color
     * <Box borderSky50--L20></Box> // lighten color
     * <Box borderSky50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderSky50?: ResponsiveBoolean
    /**
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #f0f9ff; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopSky50></Box>
     * <Box borderTopSky50--T20></Box> // transparentize color
     * <Box borderTopSky50--O20></Box> // opacify color
     * <Box borderTopSky50--L20></Box> // lighten color
     * <Box borderTopSky50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopSky50?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #f0f9ff; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightSky50></Box>
     * <Box borderRightSky50--T20></Box> // transparentize color
     * <Box borderRightSky50--O20></Box> // opacify color
     * <Box borderRightSky50--L20></Box> // lighten color
     * <Box borderRightSky50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightSky50?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #f0f9ff; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomSky50></Box>
     * <Box borderBottomSky50--T20></Box> // transparentize color
     * <Box borderBottomSky50--O20></Box> // opacify color
     * <Box borderBottomSky50--L20></Box> // lighten color
     * <Box borderBottomSky50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomSky50?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #f0f9ff; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftSky50></Box>
     * <Box borderLeftSky50--T20></Box> // transparentize color
     * <Box borderLeftSky50--O20></Box> // opacify color
     * <Box borderLeftSky50--L20></Box> // lighten color
     * <Box borderLeftSky50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftSky50?: ResponsiveBoolean
    /**
     * Set border color to sky100
     * ```css
     * { border-color: #e0f2fe; }
     * ```
     * @example
     * ```tsx
     * <Box borderSky100></Box>
     * <Box borderSky100--T20></Box> // transparentize color
     * <Box borderSky100--O20></Box> // opacify color
     * <Box borderSky100--L20></Box> // lighten color
     * <Box borderSky100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderSky100?: ResponsiveBoolean
    /**
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #e0f2fe; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopSky100></Box>
     * <Box borderTopSky100--T20></Box> // transparentize color
     * <Box borderTopSky100--O20></Box> // opacify color
     * <Box borderTopSky100--L20></Box> // lighten color
     * <Box borderTopSky100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopSky100?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #e0f2fe; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightSky100></Box>
     * <Box borderRightSky100--T20></Box> // transparentize color
     * <Box borderRightSky100--O20></Box> // opacify color
     * <Box borderRightSky100--L20></Box> // lighten color
     * <Box borderRightSky100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightSky100?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #e0f2fe; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomSky100></Box>
     * <Box borderBottomSky100--T20></Box> // transparentize color
     * <Box borderBottomSky100--O20></Box> // opacify color
     * <Box borderBottomSky100--L20></Box> // lighten color
     * <Box borderBottomSky100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomSky100?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #e0f2fe; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftSky100></Box>
     * <Box borderLeftSky100--T20></Box> // transparentize color
     * <Box borderLeftSky100--O20></Box> // opacify color
     * <Box borderLeftSky100--L20></Box> // lighten color
     * <Box borderLeftSky100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftSky100?: ResponsiveBoolean
    /**
     * Set border color to sky200
     * ```css
     * { border-color: #bae6fd; }
     * ```
     * @example
     * ```tsx
     * <Box borderSky200></Box>
     * <Box borderSky200--T20></Box> // transparentize color
     * <Box borderSky200--O20></Box> // opacify color
     * <Box borderSky200--L20></Box> // lighten color
     * <Box borderSky200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderSky200?: ResponsiveBoolean
    /**
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #bae6fd; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopSky200></Box>
     * <Box borderTopSky200--T20></Box> // transparentize color
     * <Box borderTopSky200--O20></Box> // opacify color
     * <Box borderTopSky200--L20></Box> // lighten color
     * <Box borderTopSky200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopSky200?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #bae6fd; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightSky200></Box>
     * <Box borderRightSky200--T20></Box> // transparentize color
     * <Box borderRightSky200--O20></Box> // opacify color
     * <Box borderRightSky200--L20></Box> // lighten color
     * <Box borderRightSky200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightSky200?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #bae6fd; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomSky200></Box>
     * <Box borderBottomSky200--T20></Box> // transparentize color
     * <Box borderBottomSky200--O20></Box> // opacify color
     * <Box borderBottomSky200--L20></Box> // lighten color
     * <Box borderBottomSky200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomSky200?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #bae6fd; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftSky200></Box>
     * <Box borderLeftSky200--T20></Box> // transparentize color
     * <Box borderLeftSky200--O20></Box> // opacify color
     * <Box borderLeftSky200--L20></Box> // lighten color
     * <Box borderLeftSky200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftSky200?: ResponsiveBoolean
    /**
     * Set border color to sky300
     * ```css
     * { border-color: #7dd3fc; }
     * ```
     * @example
     * ```tsx
     * <Box borderSky300></Box>
     * <Box borderSky300--T20></Box> // transparentize color
     * <Box borderSky300--O20></Box> // opacify color
     * <Box borderSky300--L20></Box> // lighten color
     * <Box borderSky300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderSky300?: ResponsiveBoolean
    /**
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #7dd3fc; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopSky300></Box>
     * <Box borderTopSky300--T20></Box> // transparentize color
     * <Box borderTopSky300--O20></Box> // opacify color
     * <Box borderTopSky300--L20></Box> // lighten color
     * <Box borderTopSky300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopSky300?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #7dd3fc; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightSky300></Box>
     * <Box borderRightSky300--T20></Box> // transparentize color
     * <Box borderRightSky300--O20></Box> // opacify color
     * <Box borderRightSky300--L20></Box> // lighten color
     * <Box borderRightSky300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightSky300?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #7dd3fc; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomSky300></Box>
     * <Box borderBottomSky300--T20></Box> // transparentize color
     * <Box borderBottomSky300--O20></Box> // opacify color
     * <Box borderBottomSky300--L20></Box> // lighten color
     * <Box borderBottomSky300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomSky300?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #7dd3fc; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftSky300></Box>
     * <Box borderLeftSky300--T20></Box> // transparentize color
     * <Box borderLeftSky300--O20></Box> // opacify color
     * <Box borderLeftSky300--L20></Box> // lighten color
     * <Box borderLeftSky300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftSky300?: ResponsiveBoolean
    /**
     * Set border color to sky400
     * ```css
     * { border-color: #38bdf8; }
     * ```
     * @example
     * ```tsx
     * <Box borderSky400></Box>
     * <Box borderSky400--T20></Box> // transparentize color
     * <Box borderSky400--O20></Box> // opacify color
     * <Box borderSky400--L20></Box> // lighten color
     * <Box borderSky400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderSky400?: ResponsiveBoolean
    /**
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #38bdf8; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopSky400></Box>
     * <Box borderTopSky400--T20></Box> // transparentize color
     * <Box borderTopSky400--O20></Box> // opacify color
     * <Box borderTopSky400--L20></Box> // lighten color
     * <Box borderTopSky400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopSky400?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #38bdf8; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightSky400></Box>
     * <Box borderRightSky400--T20></Box> // transparentize color
     * <Box borderRightSky400--O20></Box> // opacify color
     * <Box borderRightSky400--L20></Box> // lighten color
     * <Box borderRightSky400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightSky400?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #38bdf8; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomSky400></Box>
     * <Box borderBottomSky400--T20></Box> // transparentize color
     * <Box borderBottomSky400--O20></Box> // opacify color
     * <Box borderBottomSky400--L20></Box> // lighten color
     * <Box borderBottomSky400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomSky400?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #38bdf8; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftSky400></Box>
     * <Box borderLeftSky400--T20></Box> // transparentize color
     * <Box borderLeftSky400--O20></Box> // opacify color
     * <Box borderLeftSky400--L20></Box> // lighten color
     * <Box borderLeftSky400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftSky400?: ResponsiveBoolean
    /**
     * Set border color to sky500
     * ```css
     * { border-color: #0ea5e9; }
     * ```
     * @example
     * ```tsx
     * <Box borderSky500></Box>
     * <Box borderSky500--T20></Box> // transparentize color
     * <Box borderSky500--O20></Box> // opacify color
     * <Box borderSky500--L20></Box> // lighten color
     * <Box borderSky500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderSky500?: ResponsiveBoolean
    /**
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #0ea5e9; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopSky500></Box>
     * <Box borderTopSky500--T20></Box> // transparentize color
     * <Box borderTopSky500--O20></Box> // opacify color
     * <Box borderTopSky500--L20></Box> // lighten color
     * <Box borderTopSky500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopSky500?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #0ea5e9; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightSky500></Box>
     * <Box borderRightSky500--T20></Box> // transparentize color
     * <Box borderRightSky500--O20></Box> // opacify color
     * <Box borderRightSky500--L20></Box> // lighten color
     * <Box borderRightSky500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightSky500?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #0ea5e9; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomSky500></Box>
     * <Box borderBottomSky500--T20></Box> // transparentize color
     * <Box borderBottomSky500--O20></Box> // opacify color
     * <Box borderBottomSky500--L20></Box> // lighten color
     * <Box borderBottomSky500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomSky500?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #0ea5e9; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftSky500></Box>
     * <Box borderLeftSky500--T20></Box> // transparentize color
     * <Box borderLeftSky500--O20></Box> // opacify color
     * <Box borderLeftSky500--L20></Box> // lighten color
     * <Box borderLeftSky500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftSky500?: ResponsiveBoolean
    /**
     * Set border color to sky600
     * ```css
     * { border-color: #0284c7; }
     * ```
     * @example
     * ```tsx
     * <Box borderSky600></Box>
     * <Box borderSky600--T20></Box> // transparentize color
     * <Box borderSky600--O20></Box> // opacify color
     * <Box borderSky600--L20></Box> // lighten color
     * <Box borderSky600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderSky600?: ResponsiveBoolean
    /**
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #0284c7; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopSky600></Box>
     * <Box borderTopSky600--T20></Box> // transparentize color
     * <Box borderTopSky600--O20></Box> // opacify color
     * <Box borderTopSky600--L20></Box> // lighten color
     * <Box borderTopSky600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopSky600?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #0284c7; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightSky600></Box>
     * <Box borderRightSky600--T20></Box> // transparentize color
     * <Box borderRightSky600--O20></Box> // opacify color
     * <Box borderRightSky600--L20></Box> // lighten color
     * <Box borderRightSky600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightSky600?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #0284c7; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomSky600></Box>
     * <Box borderBottomSky600--T20></Box> // transparentize color
     * <Box borderBottomSky600--O20></Box> // opacify color
     * <Box borderBottomSky600--L20></Box> // lighten color
     * <Box borderBottomSky600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomSky600?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #0284c7; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftSky600></Box>
     * <Box borderLeftSky600--T20></Box> // transparentize color
     * <Box borderLeftSky600--O20></Box> // opacify color
     * <Box borderLeftSky600--L20></Box> // lighten color
     * <Box borderLeftSky600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftSky600?: ResponsiveBoolean
    /**
     * Set border color to sky700
     * ```css
     * { border-color: #0369a1; }
     * ```
     * @example
     * ```tsx
     * <Box borderSky700></Box>
     * <Box borderSky700--T20></Box> // transparentize color
     * <Box borderSky700--O20></Box> // opacify color
     * <Box borderSky700--L20></Box> // lighten color
     * <Box borderSky700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderSky700?: ResponsiveBoolean
    /**
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #0369a1; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopSky700></Box>
     * <Box borderTopSky700--T20></Box> // transparentize color
     * <Box borderTopSky700--O20></Box> // opacify color
     * <Box borderTopSky700--L20></Box> // lighten color
     * <Box borderTopSky700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopSky700?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #0369a1; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightSky700></Box>
     * <Box borderRightSky700--T20></Box> // transparentize color
     * <Box borderRightSky700--O20></Box> // opacify color
     * <Box borderRightSky700--L20></Box> // lighten color
     * <Box borderRightSky700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightSky700?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #0369a1; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomSky700></Box>
     * <Box borderBottomSky700--T20></Box> // transparentize color
     * <Box borderBottomSky700--O20></Box> // opacify color
     * <Box borderBottomSky700--L20></Box> // lighten color
     * <Box borderBottomSky700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomSky700?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #0369a1; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftSky700></Box>
     * <Box borderLeftSky700--T20></Box> // transparentize color
     * <Box borderLeftSky700--O20></Box> // opacify color
     * <Box borderLeftSky700--L20></Box> // lighten color
     * <Box borderLeftSky700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftSky700?: ResponsiveBoolean
    /**
     * Set border color to sky800
     * ```css
     * { border-color: #075985; }
     * ```
     * @example
     * ```tsx
     * <Box borderSky800></Box>
     * <Box borderSky800--T20></Box> // transparentize color
     * <Box borderSky800--O20></Box> // opacify color
     * <Box borderSky800--L20></Box> // lighten color
     * <Box borderSky800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderSky800?: ResponsiveBoolean
    /**
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #075985; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopSky800></Box>
     * <Box borderTopSky800--T20></Box> // transparentize color
     * <Box borderTopSky800--O20></Box> // opacify color
     * <Box borderTopSky800--L20></Box> // lighten color
     * <Box borderTopSky800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopSky800?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #075985; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightSky800></Box>
     * <Box borderRightSky800--T20></Box> // transparentize color
     * <Box borderRightSky800--O20></Box> // opacify color
     * <Box borderRightSky800--L20></Box> // lighten color
     * <Box borderRightSky800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightSky800?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #075985; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomSky800></Box>
     * <Box borderBottomSky800--T20></Box> // transparentize color
     * <Box borderBottomSky800--O20></Box> // opacify color
     * <Box borderBottomSky800--L20></Box> // lighten color
     * <Box borderBottomSky800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomSky800?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #075985; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftSky800></Box>
     * <Box borderLeftSky800--T20></Box> // transparentize color
     * <Box borderLeftSky800--O20></Box> // opacify color
     * <Box borderLeftSky800--L20></Box> // lighten color
     * <Box borderLeftSky800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftSky800?: ResponsiveBoolean
    /**
     * Set border color to sky900
     * ```css
     * { border-color: #0c4a6e; }
     * ```
     * @example
     * ```tsx
     * <Box borderSky900></Box>
     * <Box borderSky900--T20></Box> // transparentize color
     * <Box borderSky900--O20></Box> // opacify color
     * <Box borderSky900--L20></Box> // lighten color
     * <Box borderSky900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderSky900?: ResponsiveBoolean
    /**
     * Set border top color to ' + cur
     * ```css
     * { border-top-color: #0c4a6e; }
     * ```
     * @example
     * ```tsx
     * <Box borderTopSky900></Box>
     * <Box borderTopSky900--T20></Box> // transparentize color
     * <Box borderTopSky900--O20></Box> // opacify color
     * <Box borderTopSky900--L20></Box> // lighten color
     * <Box borderTopSky900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderTopSky900?: ResponsiveBoolean
    /**
     * Set border right color to ' + cur
     * ```css
     * { border-right-color: #0c4a6e; }
     * ```
     * @example
     * ```tsx
     * <Box borderRightSky900></Box>
     * <Box borderRightSky900--T20></Box> // transparentize color
     * <Box borderRightSky900--O20></Box> // opacify color
     * <Box borderRightSky900--L20></Box> // lighten color
     * <Box borderRightSky900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderRightSky900?: ResponsiveBoolean
    /**
     * Set border bottom color to ' + cur
     * ```css
     * { border-bottom-color: #0c4a6e; }
     * ```
     * @example
     * ```tsx
     * <Box borderBottomSky900></Box>
     * <Box borderBottomSky900--T20></Box> // transparentize color
     * <Box borderBottomSky900--O20></Box> // opacify color
     * <Box borderBottomSky900--L20></Box> // lighten color
     * <Box borderBottomSky900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderBottomSky900?: ResponsiveBoolean
    /**
     * Set border left color to ' + cur
     * ```css
     * { border-left-color: #0c4a6e; }
     * ```
     * @example
     * ```tsx
     * <Box borderLeftSky900></Box>
     * <Box borderLeftSky900--T20></Box> // transparentize color
     * <Box borderLeftSky900--O20></Box> // opacify color
     * <Box borderLeftSky900--L20></Box> // lighten color
     * <Box borderLeftSky900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderLeftSky900?: ResponsiveBoolean
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
  }
}
