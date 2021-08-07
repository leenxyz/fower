import { FowerPlugin, FowerColor, ResponsiveValue, ResponsiveBoolean } from "@fower/core"
import * as CSS from 'csstype'
declare const _default: () => FowerPlugin
export default _default

declare module '@fower/atomic-props' {
  export interface AtomicProps {
    /**
     * Set background
     * ```css
     * { background-color: $value; }
     * ```
     * @example
     * ```
     * <Box bg="#112233"></Box>
     * <Box bg="red"></Box>
     * <Box bg="red500"></Box>
     * ```
     */
    bg?: ResponsiveValue<FowerColor>
    /**
     * Set backgroundImage
     * ```css
     * { background-image: $value; }
     * ```
     * @example
     * ```
     * <Box backgroundImage="url('http...')"></Box>
     * ```
     */
    backgroundImage?: ResponsiveValue<CSS.Property.BackgroundImage>
    /**
     *  Set backgroundPosition
     * ```css
     * { background-position: $value; }
     * ```
     * @example
     * ```
     * <Box backgroundPosition="top left"></Box>
     * ```
     */
    backgroundPosition?: ResponsiveValue<CSS.Property.BackgroundPosition>
    /**
     * Set backgroundSize
     * ```css
     * { background-size: $value; }
     * ```
     * @example
     * ```
     * <Box backgroundSize="100% 100%"></Box>
     * ```
     */
    backgroundSize?: ResponsiveValue<string>
    /**
     * Set backgroundRepeat
     * ```css
     * { background-repeat: $value; }
     * ```
     * @example
     * ```
     * <Box backgroundRepeat="no-repeat"></Box>
     * ```
     */
    backgroundRepeat?: ResponsiveValue<CSS.Property.BackgroundRepeat>
    /**
     * ```css
     * { background-clip: $value; }
     * ```
     * @example
     * ```
     * <Box bgClip="$value"></Box>
     * ```
     */
    bgClip?: ResponsiveValue<CSS.Property.BackgroundClip>
    /**
     * ```css
     * { background-clip: border-box; }
     * ```
     * @example
     * ```
     * <Box bgClipBorder></Box>
     * ```
     */
    bgClipBorder?: ResponsiveBoolean
    /**
     * ```css
     * { background-clip: padding-box; }
     * ```
     * @example
     * ```
     * <Box bgClipPadding></Box>
     * ```
     */
    bgClipPadding?: ResponsiveBoolean
    /**
     * ```css
     * { background-clip: content-box; }
     * ```
     * @example
     * ```
     * <Box bgClipContent></Box>
     * ```
     */
    bgClipContent?: ResponsiveBoolean
    /**
     * ```css
     * { background-clip: text; }
     * ```
     * @example
     * ```
     * <Box bgClipText></Box>
     * ```
     */
    bgClipText?: ResponsiveBoolean
    /**
     * Set background to transparent
     * ```css
     * { background-color: transparent; }
     * ```
     * @example
     * ```tsx
     * <Box bgTransparent></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgTransparent?: ResponsiveBoolean
    /**
     * Set background to white
     * ```css
     * { background-color: #ffffff; }
     * ```
     * @example
     * ```tsx
     * <Box bgWhite></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgWhite?: ResponsiveBoolean
    /**
     * Set background to black
     * ```css
     * { background-color: #000; }
     * ```
     * @example
     * ```tsx
     * <Box bgBlack></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgBlack?: ResponsiveBoolean
    /**
     * Set background to brand
     * ```css
     * { background-color: #20c997; }
     * ```
     * @example
     * ```tsx
     * <Box bgBrand></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgBrand?: ResponsiveBoolean
    /**
     * Set background to brand50
     * ```css
     * { background-color: #e6fcf5; }
     * ```
     * @example
     * ```tsx
     * <Box bgBrand50></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgBrand50?: ResponsiveBoolean
    /**
     * Set background to brand100
     * ```css
     * { background-color: #c3fae8; }
     * ```
     * @example
     * ```tsx
     * <Box bgBrand100></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgBrand100?: ResponsiveBoolean
    /**
     * Set background to brand200
     * ```css
     * { background-color: #96f2d7; }
     * ```
     * @example
     * ```tsx
     * <Box bgBrand200></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgBrand200?: ResponsiveBoolean
    /**
     * Set background to brand300
     * ```css
     * { background-color: #63e6be; }
     * ```
     * @example
     * ```tsx
     * <Box bgBrand300></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgBrand300?: ResponsiveBoolean
    /**
     * Set background to brand400
     * ```css
     * { background-color: #38d9a9; }
     * ```
     * @example
     * ```tsx
     * <Box bgBrand400></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgBrand400?: ResponsiveBoolean
    /**
     * Set background to brand500
     * ```css
     * { background-color: #20c997; }
     * ```
     * @example
     * ```tsx
     * <Box bgBrand500></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgBrand500?: ResponsiveBoolean
    /**
     * Set background to brand600
     * ```css
     * { background-color: #12b886; }
     * ```
     * @example
     * ```tsx
     * <Box bgBrand600></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgBrand600?: ResponsiveBoolean
    /**
     * Set background to brand700
     * ```css
     * { background-color: #0ca678; }
     * ```
     * @example
     * ```tsx
     * <Box bgBrand700></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgBrand700?: ResponsiveBoolean
    /**
     * Set background to brand800
     * ```css
     * { background-color: #099268; }
     * ```
     * @example
     * ```tsx
     * <Box bgBrand800></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgBrand800?: ResponsiveBoolean
    /**
     * Set background to brand900
     * ```css
     * { background-color: #087f5b; }
     * ```
     * @example
     * ```tsx
     * <Box bgBrand900></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgBrand900?: ResponsiveBoolean
    /**
     * Set background to pink50
     * ```css
     * { background-color: #fff0f6; }
     * ```
     * @example
     * ```tsx
     * <Box bgPink50></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgPink50?: ResponsiveBoolean
    /**
     * Set background to pink100
     * ```css
     * { background-color: #ffdeeb; }
     * ```
     * @example
     * ```tsx
     * <Box bgPink100></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgPink100?: ResponsiveBoolean
    /**
     * Set background to pink200
     * ```css
     * { background-color: #fcc2d7; }
     * ```
     * @example
     * ```tsx
     * <Box bgPink200></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgPink200?: ResponsiveBoolean
    /**
     * Set background to pink300
     * ```css
     * { background-color: #faa2c1; }
     * ```
     * @example
     * ```tsx
     * <Box bgPink300></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgPink300?: ResponsiveBoolean
    /**
     * Set background to pink400
     * ```css
     * { background-color: #f783ac; }
     * ```
     * @example
     * ```tsx
     * <Box bgPink400></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgPink400?: ResponsiveBoolean
    /**
     * Set background to pink500
     * ```css
     * { background-color: #f06595; }
     * ```
     * @example
     * ```tsx
     * <Box bgPink500></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgPink500?: ResponsiveBoolean
    /**
     * Set background to pink600
     * ```css
     * { background-color: #e64980; }
     * ```
     * @example
     * ```tsx
     * <Box bgPink600></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgPink600?: ResponsiveBoolean
    /**
     * Set background to pink700
     * ```css
     * { background-color: #d6336c; }
     * ```
     * @example
     * ```tsx
     * <Box bgPink700></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgPink700?: ResponsiveBoolean
    /**
     * Set background to pink800
     * ```css
     * { background-color: #c2255c; }
     * ```
     * @example
     * ```tsx
     * <Box bgPink800></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgPink800?: ResponsiveBoolean
    /**
     * Set background to pink900
     * ```css
     * { background-color: #a61e4d; }
     * ```
     * @example
     * ```tsx
     * <Box bgPink900></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgPink900?: ResponsiveBoolean
    /**
     * Set background to fuchsia50
     * ```css
     * { background-color: #f8f0fc; }
     * ```
     * @example
     * ```tsx
     * <Box bgFuchsia50></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgFuchsia50?: ResponsiveBoolean
    /**
     * Set background to fuchsia100
     * ```css
     * { background-color: #f3d9fa; }
     * ```
     * @example
     * ```tsx
     * <Box bgFuchsia100></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgFuchsia100?: ResponsiveBoolean
    /**
     * Set background to fuchsia200
     * ```css
     * { background-color: #eebefa; }
     * ```
     * @example
     * ```tsx
     * <Box bgFuchsia200></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgFuchsia200?: ResponsiveBoolean
    /**
     * Set background to fuchsia300
     * ```css
     * { background-color: #e599f7; }
     * ```
     * @example
     * ```tsx
     * <Box bgFuchsia300></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgFuchsia300?: ResponsiveBoolean
    /**
     * Set background to fuchsia400
     * ```css
     * { background-color: #da77f2; }
     * ```
     * @example
     * ```tsx
     * <Box bgFuchsia400></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgFuchsia400?: ResponsiveBoolean
    /**
     * Set background to fuchsia500
     * ```css
     * { background-color: #cc5de8; }
     * ```
     * @example
     * ```tsx
     * <Box bgFuchsia500></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgFuchsia500?: ResponsiveBoolean
    /**
     * Set background to fuchsia600
     * ```css
     * { background-color: #be4bdb; }
     * ```
     * @example
     * ```tsx
     * <Box bgFuchsia600></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgFuchsia600?: ResponsiveBoolean
    /**
     * Set background to fuchsia700
     * ```css
     * { background-color: #ae3ec9; }
     * ```
     * @example
     * ```tsx
     * <Box bgFuchsia700></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgFuchsia700?: ResponsiveBoolean
    /**
     * Set background to fuchsia800
     * ```css
     * { background-color: #9c36b5; }
     * ```
     * @example
     * ```tsx
     * <Box bgFuchsia800></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgFuchsia800?: ResponsiveBoolean
    /**
     * Set background to fuchsia900
     * ```css
     * { background-color: #862e9c; }
     * ```
     * @example
     * ```tsx
     * <Box bgFuchsia900></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgFuchsia900?: ResponsiveBoolean
    /**
     * Set background to purple50
     * ```css
     * { background-color: #faf5ff; }
     * ```
     * @example
     * ```tsx
     * <Box bgPurple50></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgPurple50?: ResponsiveBoolean
    /**
     * Set background to purple100
     * ```css
     * { background-color: #f3e8ff; }
     * ```
     * @example
     * ```tsx
     * <Box bgPurple100></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgPurple100?: ResponsiveBoolean
    /**
     * Set background to purple200
     * ```css
     * { background-color: #e9d5ff; }
     * ```
     * @example
     * ```tsx
     * <Box bgPurple200></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgPurple200?: ResponsiveBoolean
    /**
     * Set background to purple300
     * ```css
     * { background-color: #d8b4fe; }
     * ```
     * @example
     * ```tsx
     * <Box bgPurple300></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgPurple300?: ResponsiveBoolean
    /**
     * Set background to purple400
     * ```css
     * { background-color: #c084fc; }
     * ```
     * @example
     * ```tsx
     * <Box bgPurple400></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgPurple400?: ResponsiveBoolean
    /**
     * Set background to purple500
     * ```css
     * { background-color: #a855f7; }
     * ```
     * @example
     * ```tsx
     * <Box bgPurple500></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgPurple500?: ResponsiveBoolean
    /**
     * Set background to purple600
     * ```css
     * { background-color: #9333ea; }
     * ```
     * @example
     * ```tsx
     * <Box bgPurple600></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgPurple600?: ResponsiveBoolean
    /**
     * Set background to purple700
     * ```css
     * { background-color: #7e22ce; }
     * ```
     * @example
     * ```tsx
     * <Box bgPurple700></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgPurple700?: ResponsiveBoolean
    /**
     * Set background to purple800
     * ```css
     * { background-color: #6b21a8; }
     * ```
     * @example
     * ```tsx
     * <Box bgPurple800></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgPurple800?: ResponsiveBoolean
    /**
     * Set background to purple900
     * ```css
     * { background-color: #581c87; }
     * ```
     * @example
     * ```tsx
     * <Box bgPurple900></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgPurple900?: ResponsiveBoolean
    /**
     * Set background to violet50
     * ```css
     * { background-color: #f3f0ff; }
     * ```
     * @example
     * ```tsx
     * <Box bgViolet50></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgViolet50?: ResponsiveBoolean
    /**
     * Set background to violet100
     * ```css
     * { background-color: #e5dbff; }
     * ```
     * @example
     * ```tsx
     * <Box bgViolet100></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgViolet100?: ResponsiveBoolean
    /**
     * Set background to violet200
     * ```css
     * { background-color: #d0bfff; }
     * ```
     * @example
     * ```tsx
     * <Box bgViolet200></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgViolet200?: ResponsiveBoolean
    /**
     * Set background to violet300
     * ```css
     * { background-color: #b197fc; }
     * ```
     * @example
     * ```tsx
     * <Box bgViolet300></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgViolet300?: ResponsiveBoolean
    /**
     * Set background to violet400
     * ```css
     * { background-color: #9775fa; }
     * ```
     * @example
     * ```tsx
     * <Box bgViolet400></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgViolet400?: ResponsiveBoolean
    /**
     * Set background to violet500
     * ```css
     * { background-color: #845ef7; }
     * ```
     * @example
     * ```tsx
     * <Box bgViolet500></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgViolet500?: ResponsiveBoolean
    /**
     * Set background to violet600
     * ```css
     * { background-color: #7950f2; }
     * ```
     * @example
     * ```tsx
     * <Box bgViolet600></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgViolet600?: ResponsiveBoolean
    /**
     * Set background to violet700
     * ```css
     * { background-color: #7048e8; }
     * ```
     * @example
     * ```tsx
     * <Box bgViolet700></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgViolet700?: ResponsiveBoolean
    /**
     * Set background to violet800
     * ```css
     * { background-color: #6741d9; }
     * ```
     * @example
     * ```tsx
     * <Box bgViolet800></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgViolet800?: ResponsiveBoolean
    /**
     * Set background to violet900
     * ```css
     * { background-color: #5f3dc4; }
     * ```
     * @example
     * ```tsx
     * <Box bgViolet900></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgViolet900?: ResponsiveBoolean
    /**
     * Set background to indigo50
     * ```css
     * { background-color: #edf2ff; }
     * ```
     * @example
     * ```tsx
     * <Box bgIndigo50></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgIndigo50?: ResponsiveBoolean
    /**
     * Set background to indigo100
     * ```css
     * { background-color: #dbe4ff; }
     * ```
     * @example
     * ```tsx
     * <Box bgIndigo100></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgIndigo100?: ResponsiveBoolean
    /**
     * Set background to indigo200
     * ```css
     * { background-color: #bac8ff; }
     * ```
     * @example
     * ```tsx
     * <Box bgIndigo200></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgIndigo200?: ResponsiveBoolean
    /**
     * Set background to indigo300
     * ```css
     * { background-color: #91a7ff; }
     * ```
     * @example
     * ```tsx
     * <Box bgIndigo300></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgIndigo300?: ResponsiveBoolean
    /**
     * Set background to indigo400
     * ```css
     * { background-color: #748ffc; }
     * ```
     * @example
     * ```tsx
     * <Box bgIndigo400></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgIndigo400?: ResponsiveBoolean
    /**
     * Set background to indigo500
     * ```css
     * { background-color: #5c7cfa; }
     * ```
     * @example
     * ```tsx
     * <Box bgIndigo500></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgIndigo500?: ResponsiveBoolean
    /**
     * Set background to indigo600
     * ```css
     * { background-color: #4c6ef5; }
     * ```
     * @example
     * ```tsx
     * <Box bgIndigo600></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgIndigo600?: ResponsiveBoolean
    /**
     * Set background to indigo700
     * ```css
     * { background-color: #4263eb; }
     * ```
     * @example
     * ```tsx
     * <Box bgIndigo700></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgIndigo700?: ResponsiveBoolean
    /**
     * Set background to indigo800
     * ```css
     * { background-color: #3b5bdb; }
     * ```
     * @example
     * ```tsx
     * <Box bgIndigo800></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgIndigo800?: ResponsiveBoolean
    /**
     * Set background to indigo900
     * ```css
     * { background-color: #364fc7; }
     * ```
     * @example
     * ```tsx
     * <Box bgIndigo900></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgIndigo900?: ResponsiveBoolean
    /**
     * Set background to blue50
     * ```css
     * { background-color: #e7f5ff; }
     * ```
     * @example
     * ```tsx
     * <Box bgBlue50></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgBlue50?: ResponsiveBoolean
    /**
     * Set background to blue100
     * ```css
     * { background-color: #d0ebff; }
     * ```
     * @example
     * ```tsx
     * <Box bgBlue100></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgBlue100?: ResponsiveBoolean
    /**
     * Set background to blue200
     * ```css
     * { background-color: #a5d8ff; }
     * ```
     * @example
     * ```tsx
     * <Box bgBlue200></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgBlue200?: ResponsiveBoolean
    /**
     * Set background to blue300
     * ```css
     * { background-color: #74c0fc; }
     * ```
     * @example
     * ```tsx
     * <Box bgBlue300></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgBlue300?: ResponsiveBoolean
    /**
     * Set background to blue400
     * ```css
     * { background-color: #4dabf7; }
     * ```
     * @example
     * ```tsx
     * <Box bgBlue400></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgBlue400?: ResponsiveBoolean
    /**
     * Set background to blue500
     * ```css
     * { background-color: #339af0; }
     * ```
     * @example
     * ```tsx
     * <Box bgBlue500></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgBlue500?: ResponsiveBoolean
    /**
     * Set background to blue600
     * ```css
     * { background-color: #228be6; }
     * ```
     * @example
     * ```tsx
     * <Box bgBlue600></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgBlue600?: ResponsiveBoolean
    /**
     * Set background to blue700
     * ```css
     * { background-color: #1c7ed6; }
     * ```
     * @example
     * ```tsx
     * <Box bgBlue700></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgBlue700?: ResponsiveBoolean
    /**
     * Set background to blue800
     * ```css
     * { background-color: #1971c2; }
     * ```
     * @example
     * ```tsx
     * <Box bgBlue800></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgBlue800?: ResponsiveBoolean
    /**
     * Set background to blue900
     * ```css
     * { background-color: #1864ab; }
     * ```
     * @example
     * ```tsx
     * <Box bgBlue900></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgBlue900?: ResponsiveBoolean
    /**
     * Set background to cyan50
     * ```css
     * { background-color: #e3fafc; }
     * ```
     * @example
     * ```tsx
     * <Box bgCyan50></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgCyan50?: ResponsiveBoolean
    /**
     * Set background to cyan100
     * ```css
     * { background-color: #c5f6fa; }
     * ```
     * @example
     * ```tsx
     * <Box bgCyan100></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgCyan100?: ResponsiveBoolean
    /**
     * Set background to cyan200
     * ```css
     * { background-color: #99e9f2; }
     * ```
     * @example
     * ```tsx
     * <Box bgCyan200></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgCyan200?: ResponsiveBoolean
    /**
     * Set background to cyan300
     * ```css
     * { background-color: #66d9e8; }
     * ```
     * @example
     * ```tsx
     * <Box bgCyan300></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgCyan300?: ResponsiveBoolean
    /**
     * Set background to cyan400
     * ```css
     * { background-color: #3bc9db; }
     * ```
     * @example
     * ```tsx
     * <Box bgCyan400></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgCyan400?: ResponsiveBoolean
    /**
     * Set background to cyan500
     * ```css
     * { background-color: #22b8cf; }
     * ```
     * @example
     * ```tsx
     * <Box bgCyan500></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgCyan500?: ResponsiveBoolean
    /**
     * Set background to cyan600
     * ```css
     * { background-color: #15aabf; }
     * ```
     * @example
     * ```tsx
     * <Box bgCyan600></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgCyan600?: ResponsiveBoolean
    /**
     * Set background to cyan700
     * ```css
     * { background-color: #1098ad; }
     * ```
     * @example
     * ```tsx
     * <Box bgCyan700></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgCyan700?: ResponsiveBoolean
    /**
     * Set background to cyan800
     * ```css
     * { background-color: #0c8599; }
     * ```
     * @example
     * ```tsx
     * <Box bgCyan800></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgCyan800?: ResponsiveBoolean
    /**
     * Set background to cyan900
     * ```css
     * { background-color: #0b7285; }
     * ```
     * @example
     * ```tsx
     * <Box bgCyan900></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgCyan900?: ResponsiveBoolean
    /**
     * Set background to teal50
     * ```css
     * { background-color: #e6fcf5; }
     * ```
     * @example
     * ```tsx
     * <Box bgTeal50></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgTeal50?: ResponsiveBoolean
    /**
     * Set background to teal100
     * ```css
     * { background-color: #c3fae8; }
     * ```
     * @example
     * ```tsx
     * <Box bgTeal100></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgTeal100?: ResponsiveBoolean
    /**
     * Set background to teal200
     * ```css
     * { background-color: #96f2d7; }
     * ```
     * @example
     * ```tsx
     * <Box bgTeal200></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgTeal200?: ResponsiveBoolean
    /**
     * Set background to teal300
     * ```css
     * { background-color: #63e6be; }
     * ```
     * @example
     * ```tsx
     * <Box bgTeal300></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgTeal300?: ResponsiveBoolean
    /**
     * Set background to teal400
     * ```css
     * { background-color: #38d9a9; }
     * ```
     * @example
     * ```tsx
     * <Box bgTeal400></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgTeal400?: ResponsiveBoolean
    /**
     * Set background to teal500
     * ```css
     * { background-color: #20c997; }
     * ```
     * @example
     * ```tsx
     * <Box bgTeal500></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgTeal500?: ResponsiveBoolean
    /**
     * Set background to teal600
     * ```css
     * { background-color: #12b886; }
     * ```
     * @example
     * ```tsx
     * <Box bgTeal600></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgTeal600?: ResponsiveBoolean
    /**
     * Set background to teal700
     * ```css
     * { background-color: #0ca678; }
     * ```
     * @example
     * ```tsx
     * <Box bgTeal700></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgTeal700?: ResponsiveBoolean
    /**
     * Set background to teal800
     * ```css
     * { background-color: #099268; }
     * ```
     * @example
     * ```tsx
     * <Box bgTeal800></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgTeal800?: ResponsiveBoolean
    /**
     * Set background to teal900
     * ```css
     * { background-color: #087f5b; }
     * ```
     * @example
     * ```tsx
     * <Box bgTeal900></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgTeal900?: ResponsiveBoolean
    /**
     * Set background to green50
     * ```css
     * { background-color: #ebfbee; }
     * ```
     * @example
     * ```tsx
     * <Box bgGreen50></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgGreen50?: ResponsiveBoolean
    /**
     * Set background to green100
     * ```css
     * { background-color: #d3f9d8; }
     * ```
     * @example
     * ```tsx
     * <Box bgGreen100></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgGreen100?: ResponsiveBoolean
    /**
     * Set background to green200
     * ```css
     * { background-color: #b2f2bb; }
     * ```
     * @example
     * ```tsx
     * <Box bgGreen200></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgGreen200?: ResponsiveBoolean
    /**
     * Set background to green300
     * ```css
     * { background-color: #8ce99a; }
     * ```
     * @example
     * ```tsx
     * <Box bgGreen300></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgGreen300?: ResponsiveBoolean
    /**
     * Set background to green400
     * ```css
     * { background-color: #69db7c; }
     * ```
     * @example
     * ```tsx
     * <Box bgGreen400></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgGreen400?: ResponsiveBoolean
    /**
     * Set background to green500
     * ```css
     * { background-color: #51cf66; }
     * ```
     * @example
     * ```tsx
     * <Box bgGreen500></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgGreen500?: ResponsiveBoolean
    /**
     * Set background to green600
     * ```css
     * { background-color: #40c057; }
     * ```
     * @example
     * ```tsx
     * <Box bgGreen600></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgGreen600?: ResponsiveBoolean
    /**
     * Set background to green700
     * ```css
     * { background-color: #37b24d; }
     * ```
     * @example
     * ```tsx
     * <Box bgGreen700></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgGreen700?: ResponsiveBoolean
    /**
     * Set background to green800
     * ```css
     * { background-color: #2f9e44; }
     * ```
     * @example
     * ```tsx
     * <Box bgGreen800></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgGreen800?: ResponsiveBoolean
    /**
     * Set background to green900
     * ```css
     * { background-color: #2b8a3e; }
     * ```
     * @example
     * ```tsx
     * <Box bgGreen900></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgGreen900?: ResponsiveBoolean
    /**
     * Set background to lime50
     * ```css
     * { background-color: #f4fce3; }
     * ```
     * @example
     * ```tsx
     * <Box bgLime50></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgLime50?: ResponsiveBoolean
    /**
     * Set background to lime100
     * ```css
     * { background-color: #e9fac8; }
     * ```
     * @example
     * ```tsx
     * <Box bgLime100></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgLime100?: ResponsiveBoolean
    /**
     * Set background to lime200
     * ```css
     * { background-color: #d8f5a2; }
     * ```
     * @example
     * ```tsx
     * <Box bgLime200></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgLime200?: ResponsiveBoolean
    /**
     * Set background to lime300
     * ```css
     * { background-color: #c0eb75; }
     * ```
     * @example
     * ```tsx
     * <Box bgLime300></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgLime300?: ResponsiveBoolean
    /**
     * Set background to lime400
     * ```css
     * { background-color: #a9e34b; }
     * ```
     * @example
     * ```tsx
     * <Box bgLime400></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgLime400?: ResponsiveBoolean
    /**
     * Set background to lime500
     * ```css
     * { background-color: #94d82d; }
     * ```
     * @example
     * ```tsx
     * <Box bgLime500></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgLime500?: ResponsiveBoolean
    /**
     * Set background to lime600
     * ```css
     * { background-color: #82c91e; }
     * ```
     * @example
     * ```tsx
     * <Box bgLime600></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgLime600?: ResponsiveBoolean
    /**
     * Set background to lime700
     * ```css
     * { background-color: #74b816; }
     * ```
     * @example
     * ```tsx
     * <Box bgLime700></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgLime700?: ResponsiveBoolean
    /**
     * Set background to lime800
     * ```css
     * { background-color: #66a80f; }
     * ```
     * @example
     * ```tsx
     * <Box bgLime800></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgLime800?: ResponsiveBoolean
    /**
     * Set background to lime900
     * ```css
     * { background-color: #5c940d; }
     * ```
     * @example
     * ```tsx
     * <Box bgLime900></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgLime900?: ResponsiveBoolean
    /**
     * Set background to yellow50
     * ```css
     * { background-color: #fff9db; }
     * ```
     * @example
     * ```tsx
     * <Box bgYellow50></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgYellow50?: ResponsiveBoolean
    /**
     * Set background to yellow100
     * ```css
     * { background-color: #fff3bf; }
     * ```
     * @example
     * ```tsx
     * <Box bgYellow100></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgYellow100?: ResponsiveBoolean
    /**
     * Set background to yellow200
     * ```css
     * { background-color: #ffec99; }
     * ```
     * @example
     * ```tsx
     * <Box bgYellow200></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgYellow200?: ResponsiveBoolean
    /**
     * Set background to yellow300
     * ```css
     * { background-color: #ffe066; }
     * ```
     * @example
     * ```tsx
     * <Box bgYellow300></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgYellow300?: ResponsiveBoolean
    /**
     * Set background to yellow400
     * ```css
     * { background-color: #ffd43b; }
     * ```
     * @example
     * ```tsx
     * <Box bgYellow400></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgYellow400?: ResponsiveBoolean
    /**
     * Set background to yellow500
     * ```css
     * { background-color: #fcc419; }
     * ```
     * @example
     * ```tsx
     * <Box bgYellow500></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgYellow500?: ResponsiveBoolean
    /**
     * Set background to yellow600
     * ```css
     * { background-color: #fab005; }
     * ```
     * @example
     * ```tsx
     * <Box bgYellow600></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgYellow600?: ResponsiveBoolean
    /**
     * Set background to yellow700
     * ```css
     * { background-color: #f59f00; }
     * ```
     * @example
     * ```tsx
     * <Box bgYellow700></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgYellow700?: ResponsiveBoolean
    /**
     * Set background to yellow800
     * ```css
     * { background-color: #f08c00; }
     * ```
     * @example
     * ```tsx
     * <Box bgYellow800></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgYellow800?: ResponsiveBoolean
    /**
     * Set background to yellow900
     * ```css
     * { background-color: #e67700; }
     * ```
     * @example
     * ```tsx
     * <Box bgYellow900></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgYellow900?: ResponsiveBoolean
    /**
     * Set background to orange50
     * ```css
     * { background-color: #fff4e6; }
     * ```
     * @example
     * ```tsx
     * <Box bgOrange50></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgOrange50?: ResponsiveBoolean
    /**
     * Set background to orange100
     * ```css
     * { background-color: #ffe8cc; }
     * ```
     * @example
     * ```tsx
     * <Box bgOrange100></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgOrange100?: ResponsiveBoolean
    /**
     * Set background to orange200
     * ```css
     * { background-color: #ffd8a8; }
     * ```
     * @example
     * ```tsx
     * <Box bgOrange200></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgOrange200?: ResponsiveBoolean
    /**
     * Set background to orange300
     * ```css
     * { background-color: #ffc078; }
     * ```
     * @example
     * ```tsx
     * <Box bgOrange300></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgOrange300?: ResponsiveBoolean
    /**
     * Set background to orange400
     * ```css
     * { background-color: #ffa94d; }
     * ```
     * @example
     * ```tsx
     * <Box bgOrange400></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgOrange400?: ResponsiveBoolean
    /**
     * Set background to orange500
     * ```css
     * { background-color: #ff922b; }
     * ```
     * @example
     * ```tsx
     * <Box bgOrange500></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgOrange500?: ResponsiveBoolean
    /**
     * Set background to orange600
     * ```css
     * { background-color: #fd7e14; }
     * ```
     * @example
     * ```tsx
     * <Box bgOrange600></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgOrange600?: ResponsiveBoolean
    /**
     * Set background to orange700
     * ```css
     * { background-color: #f76707; }
     * ```
     * @example
     * ```tsx
     * <Box bgOrange700></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgOrange700?: ResponsiveBoolean
    /**
     * Set background to orange800
     * ```css
     * { background-color: #e8590c; }
     * ```
     * @example
     * ```tsx
     * <Box bgOrange800></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgOrange800?: ResponsiveBoolean
    /**
     * Set background to orange900
     * ```css
     * { background-color: #d9480f; }
     * ```
     * @example
     * ```tsx
     * <Box bgOrange900></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgOrange900?: ResponsiveBoolean
    /**
     * Set background to red50
     * ```css
     * { background-color: #fff5f5; }
     * ```
     * @example
     * ```tsx
     * <Box bgRed50></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgRed50?: ResponsiveBoolean
    /**
     * Set background to red100
     * ```css
     * { background-color: #ffe3e3; }
     * ```
     * @example
     * ```tsx
     * <Box bgRed100></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgRed100?: ResponsiveBoolean
    /**
     * Set background to red200
     * ```css
     * { background-color: #ffc9c9; }
     * ```
     * @example
     * ```tsx
     * <Box bgRed200></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgRed200?: ResponsiveBoolean
    /**
     * Set background to red300
     * ```css
     * { background-color: #ffa8a8; }
     * ```
     * @example
     * ```tsx
     * <Box bgRed300></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgRed300?: ResponsiveBoolean
    /**
     * Set background to red400
     * ```css
     * { background-color: #ff8787; }
     * ```
     * @example
     * ```tsx
     * <Box bgRed400></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgRed400?: ResponsiveBoolean
    /**
     * Set background to red500
     * ```css
     * { background-color: #ff6b6b; }
     * ```
     * @example
     * ```tsx
     * <Box bgRed500></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgRed500?: ResponsiveBoolean
    /**
     * Set background to red600
     * ```css
     * { background-color: #fa5252; }
     * ```
     * @example
     * ```tsx
     * <Box bgRed600></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgRed600?: ResponsiveBoolean
    /**
     * Set background to red700
     * ```css
     * { background-color: #f03e3e; }
     * ```
     * @example
     * ```tsx
     * <Box bgRed700></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgRed700?: ResponsiveBoolean
    /**
     * Set background to red800
     * ```css
     * { background-color: #e03131; }
     * ```
     * @example
     * ```tsx
     * <Box bgRed800></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgRed800?: ResponsiveBoolean
    /**
     * Set background to red900
     * ```css
     * { background-color: #c92a2a; }
     * ```
     * @example
     * ```tsx
     * <Box bgRed900></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgRed900?: ResponsiveBoolean
    /**
     * Set background to trueGray50
     * ```css
     * { background-color: #fafafa; }
     * ```
     * @example
     * ```tsx
     * <Box bgTrueGray50></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgTrueGray50?: ResponsiveBoolean
    /**
     * Set background to trueGray100
     * ```css
     * { background-color: #f5f5f5; }
     * ```
     * @example
     * ```tsx
     * <Box bgTrueGray100></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgTrueGray100?: ResponsiveBoolean
    /**
     * Set background to trueGray200
     * ```css
     * { background-color: #e5e5e5; }
     * ```
     * @example
     * ```tsx
     * <Box bgTrueGray200></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgTrueGray200?: ResponsiveBoolean
    /**
     * Set background to trueGray300
     * ```css
     * { background-color: #d4d4d4; }
     * ```
     * @example
     * ```tsx
     * <Box bgTrueGray300></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgTrueGray300?: ResponsiveBoolean
    /**
     * Set background to trueGray400
     * ```css
     * { background-color: #a3a3a3; }
     * ```
     * @example
     * ```tsx
     * <Box bgTrueGray400></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgTrueGray400?: ResponsiveBoolean
    /**
     * Set background to trueGray500
     * ```css
     * { background-color: #737373; }
     * ```
     * @example
     * ```tsx
     * <Box bgTrueGray500></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgTrueGray500?: ResponsiveBoolean
    /**
     * Set background to trueGray600
     * ```css
     * { background-color: #525252; }
     * ```
     * @example
     * ```tsx
     * <Box bgTrueGray600></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgTrueGray600?: ResponsiveBoolean
    /**
     * Set background to trueGray700
     * ```css
     * { background-color: #404040; }
     * ```
     * @example
     * ```tsx
     * <Box bgTrueGray700></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgTrueGray700?: ResponsiveBoolean
    /**
     * Set background to trueGray800
     * ```css
     * { background-color: #262626; }
     * ```
     * @example
     * ```tsx
     * <Box bgTrueGray800></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgTrueGray800?: ResponsiveBoolean
    /**
     * Set background to trueGray900
     * ```css
     * { background-color: #171717; }
     * ```
     * @example
     * ```tsx
     * <Box bgTrueGray900></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgTrueGray900?: ResponsiveBoolean
    /**
     * Set background to gray50
     * ```css
     * { background-color: #fafafa; }
     * ```
     * @example
     * ```tsx
     * <Box bgGray50></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgGray50?: ResponsiveBoolean
    /**
     * Set background to gray100
     * ```css
     * { background-color: #f4f4f5; }
     * ```
     * @example
     * ```tsx
     * <Box bgGray100></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgGray100?: ResponsiveBoolean
    /**
     * Set background to gray200
     * ```css
     * { background-color: #e4e4e7; }
     * ```
     * @example
     * ```tsx
     * <Box bgGray200></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgGray200?: ResponsiveBoolean
    /**
     * Set background to gray300
     * ```css
     * { background-color: #d4d4d8; }
     * ```
     * @example
     * ```tsx
     * <Box bgGray300></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgGray300?: ResponsiveBoolean
    /**
     * Set background to gray400
     * ```css
     * { background-color: #a1a1aa; }
     * ```
     * @example
     * ```tsx
     * <Box bgGray400></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgGray400?: ResponsiveBoolean
    /**
     * Set background to gray500
     * ```css
     * { background-color: #71717a; }
     * ```
     * @example
     * ```tsx
     * <Box bgGray500></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgGray500?: ResponsiveBoolean
    /**
     * Set background to gray600
     * ```css
     * { background-color: #52525b; }
     * ```
     * @example
     * ```tsx
     * <Box bgGray600></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgGray600?: ResponsiveBoolean
    /**
     * Set background to gray700
     * ```css
     * { background-color: #3f3f46; }
     * ```
     * @example
     * ```tsx
     * <Box bgGray700></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgGray700?: ResponsiveBoolean
    /**
     * Set background to gray800
     * ```css
     * { background-color: #27272a; }
     * ```
     * @example
     * ```tsx
     * <Box bgGray800></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgGray800?: ResponsiveBoolean
    /**
     * Set background to gray900
     * ```css
     * { background-color: #18181b; }
     * ```
     * @example
     * ```tsx
     * <Box bgGray900></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgGray900?: ResponsiveBoolean
  }
}
