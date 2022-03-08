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
     * Set background to brand50
     * ```css
     * { background-color: #eff6ff; }
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
     * { background-color: #dbeafe; }
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
     * { background-color: #bfdbfe; }
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
     * { background-color: #93c5fd; }
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
     * { background-color: #60a5fa; }
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
     * { background-color: #3b82f6; }
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
     * { background-color: #2563eb; }
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
     * { background-color: #1d4ed8; }
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
     * { background-color: #1e40af; }
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
     * { background-color: #1e3a8a; }
     * ```
     * @example
     * ```tsx
     * <Box bgBrand900></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgBrand900?: ResponsiveBoolean
    /**
     * Set background to rose50
     * ```css
     * { background-color: #fff1f2; }
     * ```
     * @example
     * ```tsx
     * <Box bgRose50></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgRose50?: ResponsiveBoolean
    /**
     * Set background to rose100
     * ```css
     * { background-color: #ffe4e6; }
     * ```
     * @example
     * ```tsx
     * <Box bgRose100></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgRose100?: ResponsiveBoolean
    /**
     * Set background to rose200
     * ```css
     * { background-color: #fecdd3; }
     * ```
     * @example
     * ```tsx
     * <Box bgRose200></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgRose200?: ResponsiveBoolean
    /**
     * Set background to rose300
     * ```css
     * { background-color: #fda4af; }
     * ```
     * @example
     * ```tsx
     * <Box bgRose300></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgRose300?: ResponsiveBoolean
    /**
     * Set background to rose400
     * ```css
     * { background-color: #fb7185; }
     * ```
     * @example
     * ```tsx
     * <Box bgRose400></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgRose400?: ResponsiveBoolean
    /**
     * Set background to rose500
     * ```css
     * { background-color: #f43f5e; }
     * ```
     * @example
     * ```tsx
     * <Box bgRose500></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgRose500?: ResponsiveBoolean
    /**
     * Set background to rose600
     * ```css
     * { background-color: #e11d48; }
     * ```
     * @example
     * ```tsx
     * <Box bgRose600></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgRose600?: ResponsiveBoolean
    /**
     * Set background to rose700
     * ```css
     * { background-color: #be123c; }
     * ```
     * @example
     * ```tsx
     * <Box bgRose700></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgRose700?: ResponsiveBoolean
    /**
     * Set background to rose800
     * ```css
     * { background-color: #9f1239; }
     * ```
     * @example
     * ```tsx
     * <Box bgRose800></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgRose800?: ResponsiveBoolean
    /**
     * Set background to rose900
     * ```css
     * { background-color: #881337; }
     * ```
     * @example
     * ```tsx
     * <Box bgRose900></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgRose900?: ResponsiveBoolean
    /**
     * Set background to pink50
     * ```css
     * { background-color: #fdf2f8; }
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
     * { background-color: #fce7f3; }
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
     * { background-color: #fbcfe8; }
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
     * { background-color: #f9a8d4; }
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
     * { background-color: #f472b6; }
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
     * { background-color: #ec4899; }
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
     * { background-color: #db2777; }
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
     * { background-color: #be185d; }
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
     * { background-color: #9d174d; }
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
     * { background-color: #831843; }
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
     * { background-color: #fdf4ff; }
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
     * { background-color: #fae8ff; }
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
     * { background-color: #f5d0fe; }
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
     * { background-color: #f0abfc; }
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
     * { background-color: #e879f9; }
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
     * { background-color: #d946ef; }
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
     * { background-color: #c026d3; }
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
     * { background-color: #a21caf; }
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
     * { background-color: #86198f; }
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
     * { background-color: #701a75; }
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
     * { background-color: #f5f3ff; }
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
     * { background-color: #ede9fe; }
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
     * { background-color: #ddd6fe; }
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
     * { background-color: #c4b5fd; }
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
     * { background-color: #a78bfa; }
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
     * { background-color: #8b5cf6; }
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
     * { background-color: #7c3aed; }
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
     * { background-color: #6d28d9; }
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
     * { background-color: #5b21b6; }
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
     * { background-color: #4c1d95; }
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
     * { background-color: #eef2ff; }
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
     * { background-color: #e0e7ff; }
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
     * { background-color: #c7d2fe; }
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
     * { background-color: #a5b4fc; }
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
     * { background-color: #818cf8; }
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
     * { background-color: #6366f1; }
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
     * { background-color: #4f46e5; }
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
     * { background-color: #4338ca; }
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
     * { background-color: #3730a3; }
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
     * { background-color: #312e81; }
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
     * { background-color: #eff6ff; }
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
     * { background-color: #dbeafe; }
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
     * { background-color: #bfdbfe; }
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
     * { background-color: #93c5fd; }
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
     * { background-color: #60a5fa; }
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
     * { background-color: #3b82f6; }
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
     * { background-color: #2563eb; }
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
     * { background-color: #1d4ed8; }
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
     * { background-color: #1e40af; }
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
     * { background-color: #1e3a8a; }
     * ```
     * @example
     * ```tsx
     * <Box bgBlue900></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgBlue900?: ResponsiveBoolean
    /**
     * Set background to lightBlue50
     * ```css
     * { background-color: #f0f9ff; }
     * ```
     * @example
     * ```tsx
     * <Box bgLightBlue50></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgLightBlue50?: ResponsiveBoolean
    /**
     * Set background to lightBlue100
     * ```css
     * { background-color: #e0f2fe; }
     * ```
     * @example
     * ```tsx
     * <Box bgLightBlue100></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgLightBlue100?: ResponsiveBoolean
    /**
     * Set background to lightBlue200
     * ```css
     * { background-color: #bae6fd; }
     * ```
     * @example
     * ```tsx
     * <Box bgLightBlue200></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgLightBlue200?: ResponsiveBoolean
    /**
     * Set background to lightBlue300
     * ```css
     * { background-color: #7dd3fc; }
     * ```
     * @example
     * ```tsx
     * <Box bgLightBlue300></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgLightBlue300?: ResponsiveBoolean
    /**
     * Set background to lightBlue400
     * ```css
     * { background-color: #38bdf8; }
     * ```
     * @example
     * ```tsx
     * <Box bgLightBlue400></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgLightBlue400?: ResponsiveBoolean
    /**
     * Set background to lightBlue500
     * ```css
     * { background-color: #0ea5e9; }
     * ```
     * @example
     * ```tsx
     * <Box bgLightBlue500></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgLightBlue500?: ResponsiveBoolean
    /**
     * Set background to lightBlue600
     * ```css
     * { background-color: #0284c7; }
     * ```
     * @example
     * ```tsx
     * <Box bgLightBlue600></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgLightBlue600?: ResponsiveBoolean
    /**
     * Set background to lightBlue700
     * ```css
     * { background-color: #0369a1; }
     * ```
     * @example
     * ```tsx
     * <Box bgLightBlue700></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgLightBlue700?: ResponsiveBoolean
    /**
     * Set background to lightBlue800
     * ```css
     * { background-color: #075985; }
     * ```
     * @example
     * ```tsx
     * <Box bgLightBlue800></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgLightBlue800?: ResponsiveBoolean
    /**
     * Set background to lightBlue900
     * ```css
     * { background-color: #0c4a6e; }
     * ```
     * @example
     * ```tsx
     * <Box bgLightBlue900></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgLightBlue900?: ResponsiveBoolean
    /**
     * Set background to cyan50
     * ```css
     * { background-color: #ecfeff; }
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
     * { background-color: #cffafe; }
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
     * { background-color: #a5f3fc; }
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
     * { background-color: #67e8f9; }
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
     * { background-color: #22d3ee; }
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
     * { background-color: #06b6d4; }
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
     * { background-color: #0891b2; }
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
     * { background-color: #0e7490; }
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
     * { background-color: #155e75; }
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
     * { background-color: #164e63; }
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
     * { background-color: #f0fdfa; }
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
     * { background-color: #ccfbf1; }
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
     * { background-color: #99f6e4; }
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
     * { background-color: #5eead4; }
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
     * { background-color: #2dd4bf; }
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
     * { background-color: #14b8a6; }
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
     * { background-color: #0d9488; }
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
     * { background-color: #0f766e; }
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
     * { background-color: #115e59; }
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
     * { background-color: #134e4a; }
     * ```
     * @example
     * ```tsx
     * <Box bgTeal900></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgTeal900?: ResponsiveBoolean
    /**
     * Set background to emerald50
     * ```css
     * { background-color: #ecfdf5; }
     * ```
     * @example
     * ```tsx
     * <Box bgEmerald50></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgEmerald50?: ResponsiveBoolean
    /**
     * Set background to emerald100
     * ```css
     * { background-color: #d1fae5; }
     * ```
     * @example
     * ```tsx
     * <Box bgEmerald100></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgEmerald100?: ResponsiveBoolean
    /**
     * Set background to emerald200
     * ```css
     * { background-color: #a7f3d0; }
     * ```
     * @example
     * ```tsx
     * <Box bgEmerald200></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgEmerald200?: ResponsiveBoolean
    /**
     * Set background to emerald300
     * ```css
     * { background-color: #6ee7b7; }
     * ```
     * @example
     * ```tsx
     * <Box bgEmerald300></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgEmerald300?: ResponsiveBoolean
    /**
     * Set background to emerald400
     * ```css
     * { background-color: #34d399; }
     * ```
     * @example
     * ```tsx
     * <Box bgEmerald400></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgEmerald400?: ResponsiveBoolean
    /**
     * Set background to emerald500
     * ```css
     * { background-color: #10b981; }
     * ```
     * @example
     * ```tsx
     * <Box bgEmerald500></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgEmerald500?: ResponsiveBoolean
    /**
     * Set background to emerald600
     * ```css
     * { background-color: #059669; }
     * ```
     * @example
     * ```tsx
     * <Box bgEmerald600></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgEmerald600?: ResponsiveBoolean
    /**
     * Set background to emerald700
     * ```css
     * { background-color: #047857; }
     * ```
     * @example
     * ```tsx
     * <Box bgEmerald700></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgEmerald700?: ResponsiveBoolean
    /**
     * Set background to emerald800
     * ```css
     * { background-color: #065f46; }
     * ```
     * @example
     * ```tsx
     * <Box bgEmerald800></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgEmerald800?: ResponsiveBoolean
    /**
     * Set background to emerald900
     * ```css
     * { background-color: #064e3b; }
     * ```
     * @example
     * ```tsx
     * <Box bgEmerald900></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgEmerald900?: ResponsiveBoolean
    /**
     * Set background to green50
     * ```css
     * { background-color: #f0fdf4; }
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
     * { background-color: #dcfce7; }
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
     * { background-color: #bbf7d0; }
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
     * { background-color: #86efac; }
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
     * { background-color: #4ade80; }
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
     * { background-color: #22c55e; }
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
     * { background-color: #16a34a; }
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
     * { background-color: #15803d; }
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
     * { background-color: #166534; }
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
     * { background-color: #14532d; }
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
     * { background-color: #f7fee7; }
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
     * { background-color: #ecfccb; }
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
     * { background-color: #d9f99d; }
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
     * { background-color: #bef264; }
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
     * { background-color: #a3e635; }
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
     * { background-color: #84cc16; }
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
     * { background-color: #65a30d; }
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
     * { background-color: #4d7c0f; }
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
     * { background-color: #3f6212; }
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
     * { background-color: #365314; }
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
     * { background-color: #fefce8; }
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
     * { background-color: #fef9c3; }
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
     * { background-color: #fef08a; }
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
     * { background-color: #fde047; }
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
     * { background-color: #facc15; }
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
     * { background-color: #eab308; }
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
     * { background-color: #ca8a04; }
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
     * { background-color: #a16207; }
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
     * { background-color: #854d0e; }
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
     * { background-color: #713f12; }
     * ```
     * @example
     * ```tsx
     * <Box bgYellow900></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgYellow900?: ResponsiveBoolean
    /**
     * Set background to amber50
     * ```css
     * { background-color: #fffbeb; }
     * ```
     * @example
     * ```tsx
     * <Box bgAmber50></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgAmber50?: ResponsiveBoolean
    /**
     * Set background to amber100
     * ```css
     * { background-color: #fef3c7; }
     * ```
     * @example
     * ```tsx
     * <Box bgAmber100></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgAmber100?: ResponsiveBoolean
    /**
     * Set background to amber200
     * ```css
     * { background-color: #fde68a; }
     * ```
     * @example
     * ```tsx
     * <Box bgAmber200></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgAmber200?: ResponsiveBoolean
    /**
     * Set background to amber300
     * ```css
     * { background-color: #fcd34d; }
     * ```
     * @example
     * ```tsx
     * <Box bgAmber300></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgAmber300?: ResponsiveBoolean
    /**
     * Set background to amber400
     * ```css
     * { background-color: #fbbf24; }
     * ```
     * @example
     * ```tsx
     * <Box bgAmber400></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgAmber400?: ResponsiveBoolean
    /**
     * Set background to amber500
     * ```css
     * { background-color: #f59e0b; }
     * ```
     * @example
     * ```tsx
     * <Box bgAmber500></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgAmber500?: ResponsiveBoolean
    /**
     * Set background to amber600
     * ```css
     * { background-color: #d97706; }
     * ```
     * @example
     * ```tsx
     * <Box bgAmber600></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgAmber600?: ResponsiveBoolean
    /**
     * Set background to amber700
     * ```css
     * { background-color: #b45309; }
     * ```
     * @example
     * ```tsx
     * <Box bgAmber700></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgAmber700?: ResponsiveBoolean
    /**
     * Set background to amber800
     * ```css
     * { background-color: #92400e; }
     * ```
     * @example
     * ```tsx
     * <Box bgAmber800></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgAmber800?: ResponsiveBoolean
    /**
     * Set background to amber900
     * ```css
     * { background-color: #78350f; }
     * ```
     * @example
     * ```tsx
     * <Box bgAmber900></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgAmber900?: ResponsiveBoolean
    /**
     * Set background to orange50
     * ```css
     * { background-color: #fff7ed; }
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
     * { background-color: #ffedd5; }
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
     * { background-color: #fed7aa; }
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
     * { background-color: #fdba74; }
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
     * { background-color: #fb923c; }
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
     * { background-color: #f97316; }
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
     * { background-color: #ea580c; }
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
     * { background-color: #c2410c; }
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
     * { background-color: #9a3412; }
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
     * { background-color: #7c2d12; }
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
     * { background-color: #fef2f2; }
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
     * { background-color: #fee2e2; }
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
     * { background-color: #fecaca; }
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
     * { background-color: #fca5a5; }
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
     * { background-color: #f87171; }
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
     * { background-color: #ef4444; }
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
     * { background-color: #dc2626; }
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
     * { background-color: #b91c1c; }
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
     * { background-color: #991b1b; }
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
     * { background-color: #7f1d1d; }
     * ```
     * @example
     * ```tsx
     * <Box bgRed900></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgRed900?: ResponsiveBoolean
    /**
     * Set background to warmGray50
     * ```css
     * { background-color: #fafaf9; }
     * ```
     * @example
     * ```tsx
     * <Box bgWarmGray50></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgWarmGray50?: ResponsiveBoolean
    /**
     * Set background to warmGray100
     * ```css
     * { background-color: #f5f5f4; }
     * ```
     * @example
     * ```tsx
     * <Box bgWarmGray100></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgWarmGray100?: ResponsiveBoolean
    /**
     * Set background to warmGray200
     * ```css
     * { background-color: #e7e5e4; }
     * ```
     * @example
     * ```tsx
     * <Box bgWarmGray200></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgWarmGray200?: ResponsiveBoolean
    /**
     * Set background to warmGray300
     * ```css
     * { background-color: #d6d3d1; }
     * ```
     * @example
     * ```tsx
     * <Box bgWarmGray300></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgWarmGray300?: ResponsiveBoolean
    /**
     * Set background to warmGray400
     * ```css
     * { background-color: #a8a29e; }
     * ```
     * @example
     * ```tsx
     * <Box bgWarmGray400></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgWarmGray400?: ResponsiveBoolean
    /**
     * Set background to warmGray500
     * ```css
     * { background-color: #78716c; }
     * ```
     * @example
     * ```tsx
     * <Box bgWarmGray500></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgWarmGray500?: ResponsiveBoolean
    /**
     * Set background to warmGray600
     * ```css
     * { background-color: #57534e; }
     * ```
     * @example
     * ```tsx
     * <Box bgWarmGray600></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgWarmGray600?: ResponsiveBoolean
    /**
     * Set background to warmGray700
     * ```css
     * { background-color: #44403c; }
     * ```
     * @example
     * ```tsx
     * <Box bgWarmGray700></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgWarmGray700?: ResponsiveBoolean
    /**
     * Set background to warmGray800
     * ```css
     * { background-color: #292524; }
     * ```
     * @example
     * ```tsx
     * <Box bgWarmGray800></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgWarmGray800?: ResponsiveBoolean
    /**
     * Set background to warmGray900
     * ```css
     * { background-color: #1c1917; }
     * ```
     * @example
     * ```tsx
     * <Box bgWarmGray900></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgWarmGray900?: ResponsiveBoolean
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
    /**
     * Set background to coolGray50
     * ```css
     * { background-color: #f9fafb; }
     * ```
     * @example
     * ```tsx
     * <Box bgCoolGray50></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgCoolGray50?: ResponsiveBoolean
    /**
     * Set background to coolGray100
     * ```css
     * { background-color: #f3f4f6; }
     * ```
     * @example
     * ```tsx
     * <Box bgCoolGray100></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgCoolGray100?: ResponsiveBoolean
    /**
     * Set background to coolGray200
     * ```css
     * { background-color: #e5e7eb; }
     * ```
     * @example
     * ```tsx
     * <Box bgCoolGray200></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgCoolGray200?: ResponsiveBoolean
    /**
     * Set background to coolGray300
     * ```css
     * { background-color: #d1d5db; }
     * ```
     * @example
     * ```tsx
     * <Box bgCoolGray300></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgCoolGray300?: ResponsiveBoolean
    /**
     * Set background to coolGray400
     * ```css
     * { background-color: #9ca3af; }
     * ```
     * @example
     * ```tsx
     * <Box bgCoolGray400></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgCoolGray400?: ResponsiveBoolean
    /**
     * Set background to coolGray500
     * ```css
     * { background-color: #6b7280; }
     * ```
     * @example
     * ```tsx
     * <Box bgCoolGray500></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgCoolGray500?: ResponsiveBoolean
    /**
     * Set background to coolGray600
     * ```css
     * { background-color: #4b5563; }
     * ```
     * @example
     * ```tsx
     * <Box bgCoolGray600></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgCoolGray600?: ResponsiveBoolean
    /**
     * Set background to coolGray700
     * ```css
     * { background-color: #374151; }
     * ```
     * @example
     * ```tsx
     * <Box bgCoolGray700></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgCoolGray700?: ResponsiveBoolean
    /**
     * Set background to coolGray800
     * ```css
     * { background-color: #1f2937; }
     * ```
     * @example
     * ```tsx
     * <Box bgCoolGray800></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgCoolGray800?: ResponsiveBoolean
    /**
     * Set background to coolGray900
     * ```css
     * { background-color: #111827; }
     * ```
     * @example
     * ```tsx
     * <Box bgCoolGray900></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgCoolGray900?: ResponsiveBoolean
    /**
     * Set background to blueGray50
     * ```css
     * { background-color: #f8fafc; }
     * ```
     * @example
     * ```tsx
     * <Box bgBlueGray50></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgBlueGray50?: ResponsiveBoolean
    /**
     * Set background to blueGray100
     * ```css
     * { background-color: #f1f5f9; }
     * ```
     * @example
     * ```tsx
     * <Box bgBlueGray100></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgBlueGray100?: ResponsiveBoolean
    /**
     * Set background to blueGray200
     * ```css
     * { background-color: #e2e8f0; }
     * ```
     * @example
     * ```tsx
     * <Box bgBlueGray200></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgBlueGray200?: ResponsiveBoolean
    /**
     * Set background to blueGray300
     * ```css
     * { background-color: #cbd5e1; }
     * ```
     * @example
     * ```tsx
     * <Box bgBlueGray300></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgBlueGray300?: ResponsiveBoolean
    /**
     * Set background to blueGray400
     * ```css
     * { background-color: #94a3b8; }
     * ```
     * @example
     * ```tsx
     * <Box bgBlueGray400></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgBlueGray400?: ResponsiveBoolean
    /**
     * Set background to blueGray500
     * ```css
     * { background-color: #64748b; }
     * ```
     * @example
     * ```tsx
     * <Box bgBlueGray500></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgBlueGray500?: ResponsiveBoolean
    /**
     * Set background to blueGray600
     * ```css
     * { background-color: #475569; }
     * ```
     * @example
     * ```tsx
     * <Box bgBlueGray600></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgBlueGray600?: ResponsiveBoolean
    /**
     * Set background to blueGray700
     * ```css
     * { background-color: #334155; }
     * ```
     * @example
     * ```tsx
     * <Box bgBlueGray700></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgBlueGray700?: ResponsiveBoolean
    /**
     * Set background to blueGray800
     * ```css
     * { background-color: #1e293b; }
     * ```
     * @example
     * ```tsx
     * <Box bgBlueGray800></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgBlueGray800?: ResponsiveBoolean
    /**
     * Set background to blueGray900
     * ```css
     * { background-color: #0f172a; }
     * ```
     * @example
     * ```tsx
     * <Box bgBlueGray900></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgBlueGray900?: ResponsiveBoolean
  }
}
