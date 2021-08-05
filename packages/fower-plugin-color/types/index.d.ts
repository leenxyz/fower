import { FowerPlugin, FowerColor, ResponsiveValue, ResponsiveBoolean } from "@fower/core"
import * as CSS from 'csstype'
declare const _default: () => FowerPlugin
export default _default

declare module '@fower/atomic-props' {
  export interface AtomicProps {
    /**
     * Set color to any value
     * ```css
     * { color: $value }
     * ```
     * @example
     * ```
     * <Box color="#fff"></Box>
     * <Box color="red500--T20"></Box> // transparentize color
     * <Box color="red500--O20"></Box> // opacify color
     * <Box color="red500--L20"></Box> // lighten color
     * <Box color="red500--D20"></Box> // darken  color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    color?: ResponsiveValue<FowerColor>
    /**
     * Set color to transparent
     * ```css
     * { color: transparent; }
     * ```
     * @example
     * ```tsx
     * <Box transparent></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    transparent?: ResponsiveBoolean
    /**
     * Set color to white
     * ```css
     * { color: #ffffff; }
     * ```
     * @example
     * ```tsx
     * <Box white></Box>
     * <Box white--T20></Box> // transparentize color
     * <Box white--O20></Box> // opacify color
     * <Box white--L20></Box> // lighten color
     * <Box white--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    white?: ResponsiveBoolean
    /**
     * Set color to black
     * ```css
     * { color: #000; }
     * ```
     * @example
     * ```tsx
     * <Box black></Box>
     * <Box black--T20></Box> // transparentize color
     * <Box black--O20></Box> // opacify color
     * <Box black--L20></Box> // lighten color
     * <Box black--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    black?: ResponsiveBoolean
    /**
     * Set color to brand
     * ```css
     * { color: #20c997; }
     * ```
     * @example
     * ```tsx
     * <Box brand></Box>
     * <Box brand--T20></Box> // transparentize color
     * <Box brand--O20></Box> // opacify color
     * <Box brand--L20></Box> // lighten color
     * <Box brand--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    brand?: ResponsiveBoolean
    /**
     * Set color to brand50
     * ```css
     * { color: #e6fcf5; }
     * ```
     * @example
     * ```tsx
     * <Box brand50></Box>
     * <Box brand50--T20></Box> // transparentize color
     * <Box brand50--O20></Box> // opacify color
     * <Box brand50--L20></Box> // lighten color
     * <Box brand50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    brand50?: ResponsiveBoolean
    /**
     * Set color to brand100
     * ```css
     * { color: #c3fae8; }
     * ```
     * @example
     * ```tsx
     * <Box brand100></Box>
     * <Box brand100--T20></Box> // transparentize color
     * <Box brand100--O20></Box> // opacify color
     * <Box brand100--L20></Box> // lighten color
     * <Box brand100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    brand100?: ResponsiveBoolean
    /**
     * Set color to brand200
     * ```css
     * { color: #96f2d7; }
     * ```
     * @example
     * ```tsx
     * <Box brand200></Box>
     * <Box brand200--T20></Box> // transparentize color
     * <Box brand200--O20></Box> // opacify color
     * <Box brand200--L20></Box> // lighten color
     * <Box brand200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    brand200?: ResponsiveBoolean
    /**
     * Set color to brand300
     * ```css
     * { color: #63e6be; }
     * ```
     * @example
     * ```tsx
     * <Box brand300></Box>
     * <Box brand300--T20></Box> // transparentize color
     * <Box brand300--O20></Box> // opacify color
     * <Box brand300--L20></Box> // lighten color
     * <Box brand300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    brand300?: ResponsiveBoolean
    /**
     * Set color to brand400
     * ```css
     * { color: #38d9a9; }
     * ```
     * @example
     * ```tsx
     * <Box brand400></Box>
     * <Box brand400--T20></Box> // transparentize color
     * <Box brand400--O20></Box> // opacify color
     * <Box brand400--L20></Box> // lighten color
     * <Box brand400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    brand400?: ResponsiveBoolean
    /**
     * Set color to brand500
     * ```css
     * { color: #20c997; }
     * ```
     * @example
     * ```tsx
     * <Box brand500></Box>
     * <Box brand500--T20></Box> // transparentize color
     * <Box brand500--O20></Box> // opacify color
     * <Box brand500--L20></Box> // lighten color
     * <Box brand500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    brand500?: ResponsiveBoolean
    /**
     * Set color to brand600
     * ```css
     * { color: #12b886; }
     * ```
     * @example
     * ```tsx
     * <Box brand600></Box>
     * <Box brand600--T20></Box> // transparentize color
     * <Box brand600--O20></Box> // opacify color
     * <Box brand600--L20></Box> // lighten color
     * <Box brand600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    brand600?: ResponsiveBoolean
    /**
     * Set color to brand700
     * ```css
     * { color: #0ca678; }
     * ```
     * @example
     * ```tsx
     * <Box brand700></Box>
     * <Box brand700--T20></Box> // transparentize color
     * <Box brand700--O20></Box> // opacify color
     * <Box brand700--L20></Box> // lighten color
     * <Box brand700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    brand700?: ResponsiveBoolean
    /**
     * Set color to brand800
     * ```css
     * { color: #099268; }
     * ```
     * @example
     * ```tsx
     * <Box brand800></Box>
     * <Box brand800--T20></Box> // transparentize color
     * <Box brand800--O20></Box> // opacify color
     * <Box brand800--L20></Box> // lighten color
     * <Box brand800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    brand800?: ResponsiveBoolean
    /**
     * Set color to brand900
     * ```css
     * { color: #087f5b; }
     * ```
     * @example
     * ```tsx
     * <Box brand900></Box>
     * <Box brand900--T20></Box> // transparentize color
     * <Box brand900--O20></Box> // opacify color
     * <Box brand900--L20></Box> // lighten color
     * <Box brand900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    brand900?: ResponsiveBoolean
    /**
     * Set color to pink50
     * ```css
     * { color: #fff0f6; }
     * ```
     * @example
     * ```tsx
     * <Box pink50></Box>
     * <Box pink50--T20></Box> // transparentize color
     * <Box pink50--O20></Box> // opacify color
     * <Box pink50--L20></Box> // lighten color
     * <Box pink50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    pink50?: ResponsiveBoolean
    /**
     * Set color to pink100
     * ```css
     * { color: #ffdeeb; }
     * ```
     * @example
     * ```tsx
     * <Box pink100></Box>
     * <Box pink100--T20></Box> // transparentize color
     * <Box pink100--O20></Box> // opacify color
     * <Box pink100--L20></Box> // lighten color
     * <Box pink100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    pink100?: ResponsiveBoolean
    /**
     * Set color to pink200
     * ```css
     * { color: #fcc2d7; }
     * ```
     * @example
     * ```tsx
     * <Box pink200></Box>
     * <Box pink200--T20></Box> // transparentize color
     * <Box pink200--O20></Box> // opacify color
     * <Box pink200--L20></Box> // lighten color
     * <Box pink200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    pink200?: ResponsiveBoolean
    /**
     * Set color to pink300
     * ```css
     * { color: #faa2c1; }
     * ```
     * @example
     * ```tsx
     * <Box pink300></Box>
     * <Box pink300--T20></Box> // transparentize color
     * <Box pink300--O20></Box> // opacify color
     * <Box pink300--L20></Box> // lighten color
     * <Box pink300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    pink300?: ResponsiveBoolean
    /**
     * Set color to pink400
     * ```css
     * { color: #f783ac; }
     * ```
     * @example
     * ```tsx
     * <Box pink400></Box>
     * <Box pink400--T20></Box> // transparentize color
     * <Box pink400--O20></Box> // opacify color
     * <Box pink400--L20></Box> // lighten color
     * <Box pink400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    pink400?: ResponsiveBoolean
    /**
     * Set color to pink500
     * ```css
     * { color: #f06595; }
     * ```
     * @example
     * ```tsx
     * <Box pink500></Box>
     * <Box pink500--T20></Box> // transparentize color
     * <Box pink500--O20></Box> // opacify color
     * <Box pink500--L20></Box> // lighten color
     * <Box pink500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    pink500?: ResponsiveBoolean
    /**
     * Set color to pink600
     * ```css
     * { color: #e64980; }
     * ```
     * @example
     * ```tsx
     * <Box pink600></Box>
     * <Box pink600--T20></Box> // transparentize color
     * <Box pink600--O20></Box> // opacify color
     * <Box pink600--L20></Box> // lighten color
     * <Box pink600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    pink600?: ResponsiveBoolean
    /**
     * Set color to pink700
     * ```css
     * { color: #d6336c; }
     * ```
     * @example
     * ```tsx
     * <Box pink700></Box>
     * <Box pink700--T20></Box> // transparentize color
     * <Box pink700--O20></Box> // opacify color
     * <Box pink700--L20></Box> // lighten color
     * <Box pink700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    pink700?: ResponsiveBoolean
    /**
     * Set color to pink800
     * ```css
     * { color: #c2255c; }
     * ```
     * @example
     * ```tsx
     * <Box pink800></Box>
     * <Box pink800--T20></Box> // transparentize color
     * <Box pink800--O20></Box> // opacify color
     * <Box pink800--L20></Box> // lighten color
     * <Box pink800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    pink800?: ResponsiveBoolean
    /**
     * Set color to pink900
     * ```css
     * { color: #a61e4d; }
     * ```
     * @example
     * ```tsx
     * <Box pink900></Box>
     * <Box pink900--T20></Box> // transparentize color
     * <Box pink900--O20></Box> // opacify color
     * <Box pink900--L20></Box> // lighten color
     * <Box pink900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    pink900?: ResponsiveBoolean
    /**
     * Set color to fuchsia50
     * ```css
     * { color: #f8f0fc; }
     * ```
     * @example
     * ```tsx
     * <Box fuchsia50></Box>
     * <Box fuchsia50--T20></Box> // transparentize color
     * <Box fuchsia50--O20></Box> // opacify color
     * <Box fuchsia50--L20></Box> // lighten color
     * <Box fuchsia50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    fuchsia50?: ResponsiveBoolean
    /**
     * Set color to fuchsia100
     * ```css
     * { color: #f3d9fa; }
     * ```
     * @example
     * ```tsx
     * <Box fuchsia100></Box>
     * <Box fuchsia100--T20></Box> // transparentize color
     * <Box fuchsia100--O20></Box> // opacify color
     * <Box fuchsia100--L20></Box> // lighten color
     * <Box fuchsia100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    fuchsia100?: ResponsiveBoolean
    /**
     * Set color to fuchsia200
     * ```css
     * { color: #eebefa; }
     * ```
     * @example
     * ```tsx
     * <Box fuchsia200></Box>
     * <Box fuchsia200--T20></Box> // transparentize color
     * <Box fuchsia200--O20></Box> // opacify color
     * <Box fuchsia200--L20></Box> // lighten color
     * <Box fuchsia200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    fuchsia200?: ResponsiveBoolean
    /**
     * Set color to fuchsia300
     * ```css
     * { color: #e599f7; }
     * ```
     * @example
     * ```tsx
     * <Box fuchsia300></Box>
     * <Box fuchsia300--T20></Box> // transparentize color
     * <Box fuchsia300--O20></Box> // opacify color
     * <Box fuchsia300--L20></Box> // lighten color
     * <Box fuchsia300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    fuchsia300?: ResponsiveBoolean
    /**
     * Set color to fuchsia400
     * ```css
     * { color: #da77f2; }
     * ```
     * @example
     * ```tsx
     * <Box fuchsia400></Box>
     * <Box fuchsia400--T20></Box> // transparentize color
     * <Box fuchsia400--O20></Box> // opacify color
     * <Box fuchsia400--L20></Box> // lighten color
     * <Box fuchsia400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    fuchsia400?: ResponsiveBoolean
    /**
     * Set color to fuchsia500
     * ```css
     * { color: #cc5de8; }
     * ```
     * @example
     * ```tsx
     * <Box fuchsia500></Box>
     * <Box fuchsia500--T20></Box> // transparentize color
     * <Box fuchsia500--O20></Box> // opacify color
     * <Box fuchsia500--L20></Box> // lighten color
     * <Box fuchsia500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    fuchsia500?: ResponsiveBoolean
    /**
     * Set color to fuchsia600
     * ```css
     * { color: #be4bdb; }
     * ```
     * @example
     * ```tsx
     * <Box fuchsia600></Box>
     * <Box fuchsia600--T20></Box> // transparentize color
     * <Box fuchsia600--O20></Box> // opacify color
     * <Box fuchsia600--L20></Box> // lighten color
     * <Box fuchsia600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    fuchsia600?: ResponsiveBoolean
    /**
     * Set color to fuchsia700
     * ```css
     * { color: #ae3ec9; }
     * ```
     * @example
     * ```tsx
     * <Box fuchsia700></Box>
     * <Box fuchsia700--T20></Box> // transparentize color
     * <Box fuchsia700--O20></Box> // opacify color
     * <Box fuchsia700--L20></Box> // lighten color
     * <Box fuchsia700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    fuchsia700?: ResponsiveBoolean
    /**
     * Set color to fuchsia800
     * ```css
     * { color: #9c36b5; }
     * ```
     * @example
     * ```tsx
     * <Box fuchsia800></Box>
     * <Box fuchsia800--T20></Box> // transparentize color
     * <Box fuchsia800--O20></Box> // opacify color
     * <Box fuchsia800--L20></Box> // lighten color
     * <Box fuchsia800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    fuchsia800?: ResponsiveBoolean
    /**
     * Set color to fuchsia900
     * ```css
     * { color: #862e9c; }
     * ```
     * @example
     * ```tsx
     * <Box fuchsia900></Box>
     * <Box fuchsia900--T20></Box> // transparentize color
     * <Box fuchsia900--O20></Box> // opacify color
     * <Box fuchsia900--L20></Box> // lighten color
     * <Box fuchsia900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    fuchsia900?: ResponsiveBoolean
    /**
     * Set color to purple50
     * ```css
     * { color: #faf5ff; }
     * ```
     * @example
     * ```tsx
     * <Box purple50></Box>
     * <Box purple50--T20></Box> // transparentize color
     * <Box purple50--O20></Box> // opacify color
     * <Box purple50--L20></Box> // lighten color
     * <Box purple50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    purple50?: ResponsiveBoolean
    /**
     * Set color to purple100
     * ```css
     * { color: #f3e8ff; }
     * ```
     * @example
     * ```tsx
     * <Box purple100></Box>
     * <Box purple100--T20></Box> // transparentize color
     * <Box purple100--O20></Box> // opacify color
     * <Box purple100--L20></Box> // lighten color
     * <Box purple100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    purple100?: ResponsiveBoolean
    /**
     * Set color to purple200
     * ```css
     * { color: #e9d5ff; }
     * ```
     * @example
     * ```tsx
     * <Box purple200></Box>
     * <Box purple200--T20></Box> // transparentize color
     * <Box purple200--O20></Box> // opacify color
     * <Box purple200--L20></Box> // lighten color
     * <Box purple200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    purple200?: ResponsiveBoolean
    /**
     * Set color to purple300
     * ```css
     * { color: #d8b4fe; }
     * ```
     * @example
     * ```tsx
     * <Box purple300></Box>
     * <Box purple300--T20></Box> // transparentize color
     * <Box purple300--O20></Box> // opacify color
     * <Box purple300--L20></Box> // lighten color
     * <Box purple300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    purple300?: ResponsiveBoolean
    /**
     * Set color to purple400
     * ```css
     * { color: #c084fc; }
     * ```
     * @example
     * ```tsx
     * <Box purple400></Box>
     * <Box purple400--T20></Box> // transparentize color
     * <Box purple400--O20></Box> // opacify color
     * <Box purple400--L20></Box> // lighten color
     * <Box purple400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    purple400?: ResponsiveBoolean
    /**
     * Set color to purple500
     * ```css
     * { color: #a855f7; }
     * ```
     * @example
     * ```tsx
     * <Box purple500></Box>
     * <Box purple500--T20></Box> // transparentize color
     * <Box purple500--O20></Box> // opacify color
     * <Box purple500--L20></Box> // lighten color
     * <Box purple500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    purple500?: ResponsiveBoolean
    /**
     * Set color to purple600
     * ```css
     * { color: #9333ea; }
     * ```
     * @example
     * ```tsx
     * <Box purple600></Box>
     * <Box purple600--T20></Box> // transparentize color
     * <Box purple600--O20></Box> // opacify color
     * <Box purple600--L20></Box> // lighten color
     * <Box purple600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    purple600?: ResponsiveBoolean
    /**
     * Set color to purple700
     * ```css
     * { color: #7e22ce; }
     * ```
     * @example
     * ```tsx
     * <Box purple700></Box>
     * <Box purple700--T20></Box> // transparentize color
     * <Box purple700--O20></Box> // opacify color
     * <Box purple700--L20></Box> // lighten color
     * <Box purple700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    purple700?: ResponsiveBoolean
    /**
     * Set color to purple800
     * ```css
     * { color: #6b21a8; }
     * ```
     * @example
     * ```tsx
     * <Box purple800></Box>
     * <Box purple800--T20></Box> // transparentize color
     * <Box purple800--O20></Box> // opacify color
     * <Box purple800--L20></Box> // lighten color
     * <Box purple800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    purple800?: ResponsiveBoolean
    /**
     * Set color to purple900
     * ```css
     * { color: #581c87; }
     * ```
     * @example
     * ```tsx
     * <Box purple900></Box>
     * <Box purple900--T20></Box> // transparentize color
     * <Box purple900--O20></Box> // opacify color
     * <Box purple900--L20></Box> // lighten color
     * <Box purple900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    purple900?: ResponsiveBoolean
    /**
     * Set color to violet50
     * ```css
     * { color: #f3f0ff; }
     * ```
     * @example
     * ```tsx
     * <Box violet50></Box>
     * <Box violet50--T20></Box> // transparentize color
     * <Box violet50--O20></Box> // opacify color
     * <Box violet50--L20></Box> // lighten color
     * <Box violet50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    violet50?: ResponsiveBoolean
    /**
     * Set color to violet100
     * ```css
     * { color: #e5dbff; }
     * ```
     * @example
     * ```tsx
     * <Box violet100></Box>
     * <Box violet100--T20></Box> // transparentize color
     * <Box violet100--O20></Box> // opacify color
     * <Box violet100--L20></Box> // lighten color
     * <Box violet100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    violet100?: ResponsiveBoolean
    /**
     * Set color to violet200
     * ```css
     * { color: #d0bfff; }
     * ```
     * @example
     * ```tsx
     * <Box violet200></Box>
     * <Box violet200--T20></Box> // transparentize color
     * <Box violet200--O20></Box> // opacify color
     * <Box violet200--L20></Box> // lighten color
     * <Box violet200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    violet200?: ResponsiveBoolean
    /**
     * Set color to violet300
     * ```css
     * { color: #b197fc; }
     * ```
     * @example
     * ```tsx
     * <Box violet300></Box>
     * <Box violet300--T20></Box> // transparentize color
     * <Box violet300--O20></Box> // opacify color
     * <Box violet300--L20></Box> // lighten color
     * <Box violet300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    violet300?: ResponsiveBoolean
    /**
     * Set color to violet400
     * ```css
     * { color: #9775fa; }
     * ```
     * @example
     * ```tsx
     * <Box violet400></Box>
     * <Box violet400--T20></Box> // transparentize color
     * <Box violet400--O20></Box> // opacify color
     * <Box violet400--L20></Box> // lighten color
     * <Box violet400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    violet400?: ResponsiveBoolean
    /**
     * Set color to violet500
     * ```css
     * { color: #845ef7; }
     * ```
     * @example
     * ```tsx
     * <Box violet500></Box>
     * <Box violet500--T20></Box> // transparentize color
     * <Box violet500--O20></Box> // opacify color
     * <Box violet500--L20></Box> // lighten color
     * <Box violet500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    violet500?: ResponsiveBoolean
    /**
     * Set color to violet600
     * ```css
     * { color: #7950f2; }
     * ```
     * @example
     * ```tsx
     * <Box violet600></Box>
     * <Box violet600--T20></Box> // transparentize color
     * <Box violet600--O20></Box> // opacify color
     * <Box violet600--L20></Box> // lighten color
     * <Box violet600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    violet600?: ResponsiveBoolean
    /**
     * Set color to violet700
     * ```css
     * { color: #7048e8; }
     * ```
     * @example
     * ```tsx
     * <Box violet700></Box>
     * <Box violet700--T20></Box> // transparentize color
     * <Box violet700--O20></Box> // opacify color
     * <Box violet700--L20></Box> // lighten color
     * <Box violet700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    violet700?: ResponsiveBoolean
    /**
     * Set color to violet800
     * ```css
     * { color: #6741d9; }
     * ```
     * @example
     * ```tsx
     * <Box violet800></Box>
     * <Box violet800--T20></Box> // transparentize color
     * <Box violet800--O20></Box> // opacify color
     * <Box violet800--L20></Box> // lighten color
     * <Box violet800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    violet800?: ResponsiveBoolean
    /**
     * Set color to violet900
     * ```css
     * { color: #5f3dc4; }
     * ```
     * @example
     * ```tsx
     * <Box violet900></Box>
     * <Box violet900--T20></Box> // transparentize color
     * <Box violet900--O20></Box> // opacify color
     * <Box violet900--L20></Box> // lighten color
     * <Box violet900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    violet900?: ResponsiveBoolean
    /**
     * Set color to indigo50
     * ```css
     * { color: #edf2ff; }
     * ```
     * @example
     * ```tsx
     * <Box indigo50></Box>
     * <Box indigo50--T20></Box> // transparentize color
     * <Box indigo50--O20></Box> // opacify color
     * <Box indigo50--L20></Box> // lighten color
     * <Box indigo50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    indigo50?: ResponsiveBoolean
    /**
     * Set color to indigo100
     * ```css
     * { color: #dbe4ff; }
     * ```
     * @example
     * ```tsx
     * <Box indigo100></Box>
     * <Box indigo100--T20></Box> // transparentize color
     * <Box indigo100--O20></Box> // opacify color
     * <Box indigo100--L20></Box> // lighten color
     * <Box indigo100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    indigo100?: ResponsiveBoolean
    /**
     * Set color to indigo200
     * ```css
     * { color: #bac8ff; }
     * ```
     * @example
     * ```tsx
     * <Box indigo200></Box>
     * <Box indigo200--T20></Box> // transparentize color
     * <Box indigo200--O20></Box> // opacify color
     * <Box indigo200--L20></Box> // lighten color
     * <Box indigo200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    indigo200?: ResponsiveBoolean
    /**
     * Set color to indigo300
     * ```css
     * { color: #91a7ff; }
     * ```
     * @example
     * ```tsx
     * <Box indigo300></Box>
     * <Box indigo300--T20></Box> // transparentize color
     * <Box indigo300--O20></Box> // opacify color
     * <Box indigo300--L20></Box> // lighten color
     * <Box indigo300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    indigo300?: ResponsiveBoolean
    /**
     * Set color to indigo400
     * ```css
     * { color: #748ffc; }
     * ```
     * @example
     * ```tsx
     * <Box indigo400></Box>
     * <Box indigo400--T20></Box> // transparentize color
     * <Box indigo400--O20></Box> // opacify color
     * <Box indigo400--L20></Box> // lighten color
     * <Box indigo400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    indigo400?: ResponsiveBoolean
    /**
     * Set color to indigo500
     * ```css
     * { color: #5c7cfa; }
     * ```
     * @example
     * ```tsx
     * <Box indigo500></Box>
     * <Box indigo500--T20></Box> // transparentize color
     * <Box indigo500--O20></Box> // opacify color
     * <Box indigo500--L20></Box> // lighten color
     * <Box indigo500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    indigo500?: ResponsiveBoolean
    /**
     * Set color to indigo600
     * ```css
     * { color: #4c6ef5; }
     * ```
     * @example
     * ```tsx
     * <Box indigo600></Box>
     * <Box indigo600--T20></Box> // transparentize color
     * <Box indigo600--O20></Box> // opacify color
     * <Box indigo600--L20></Box> // lighten color
     * <Box indigo600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    indigo600?: ResponsiveBoolean
    /**
     * Set color to indigo700
     * ```css
     * { color: #4263eb; }
     * ```
     * @example
     * ```tsx
     * <Box indigo700></Box>
     * <Box indigo700--T20></Box> // transparentize color
     * <Box indigo700--O20></Box> // opacify color
     * <Box indigo700--L20></Box> // lighten color
     * <Box indigo700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    indigo700?: ResponsiveBoolean
    /**
     * Set color to indigo800
     * ```css
     * { color: #3b5bdb; }
     * ```
     * @example
     * ```tsx
     * <Box indigo800></Box>
     * <Box indigo800--T20></Box> // transparentize color
     * <Box indigo800--O20></Box> // opacify color
     * <Box indigo800--L20></Box> // lighten color
     * <Box indigo800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    indigo800?: ResponsiveBoolean
    /**
     * Set color to indigo900
     * ```css
     * { color: #364fc7; }
     * ```
     * @example
     * ```tsx
     * <Box indigo900></Box>
     * <Box indigo900--T20></Box> // transparentize color
     * <Box indigo900--O20></Box> // opacify color
     * <Box indigo900--L20></Box> // lighten color
     * <Box indigo900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    indigo900?: ResponsiveBoolean
    /**
     * Set color to blue50
     * ```css
     * { color: #e7f5ff; }
     * ```
     * @example
     * ```tsx
     * <Box blue50></Box>
     * <Box blue50--T20></Box> // transparentize color
     * <Box blue50--O20></Box> // opacify color
     * <Box blue50--L20></Box> // lighten color
     * <Box blue50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    blue50?: ResponsiveBoolean
    /**
     * Set color to blue100
     * ```css
     * { color: #d0ebff; }
     * ```
     * @example
     * ```tsx
     * <Box blue100></Box>
     * <Box blue100--T20></Box> // transparentize color
     * <Box blue100--O20></Box> // opacify color
     * <Box blue100--L20></Box> // lighten color
     * <Box blue100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    blue100?: ResponsiveBoolean
    /**
     * Set color to blue200
     * ```css
     * { color: #a5d8ff; }
     * ```
     * @example
     * ```tsx
     * <Box blue200></Box>
     * <Box blue200--T20></Box> // transparentize color
     * <Box blue200--O20></Box> // opacify color
     * <Box blue200--L20></Box> // lighten color
     * <Box blue200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    blue200?: ResponsiveBoolean
    /**
     * Set color to blue300
     * ```css
     * { color: #74c0fc; }
     * ```
     * @example
     * ```tsx
     * <Box blue300></Box>
     * <Box blue300--T20></Box> // transparentize color
     * <Box blue300--O20></Box> // opacify color
     * <Box blue300--L20></Box> // lighten color
     * <Box blue300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    blue300?: ResponsiveBoolean
    /**
     * Set color to blue400
     * ```css
     * { color: #4dabf7; }
     * ```
     * @example
     * ```tsx
     * <Box blue400></Box>
     * <Box blue400--T20></Box> // transparentize color
     * <Box blue400--O20></Box> // opacify color
     * <Box blue400--L20></Box> // lighten color
     * <Box blue400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    blue400?: ResponsiveBoolean
    /**
     * Set color to blue500
     * ```css
     * { color: #339af0; }
     * ```
     * @example
     * ```tsx
     * <Box blue500></Box>
     * <Box blue500--T20></Box> // transparentize color
     * <Box blue500--O20></Box> // opacify color
     * <Box blue500--L20></Box> // lighten color
     * <Box blue500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    blue500?: ResponsiveBoolean
    /**
     * Set color to blue600
     * ```css
     * { color: #228be6; }
     * ```
     * @example
     * ```tsx
     * <Box blue600></Box>
     * <Box blue600--T20></Box> // transparentize color
     * <Box blue600--O20></Box> // opacify color
     * <Box blue600--L20></Box> // lighten color
     * <Box blue600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    blue600?: ResponsiveBoolean
    /**
     * Set color to blue700
     * ```css
     * { color: #1c7ed6; }
     * ```
     * @example
     * ```tsx
     * <Box blue700></Box>
     * <Box blue700--T20></Box> // transparentize color
     * <Box blue700--O20></Box> // opacify color
     * <Box blue700--L20></Box> // lighten color
     * <Box blue700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    blue700?: ResponsiveBoolean
    /**
     * Set color to blue800
     * ```css
     * { color: #1971c2; }
     * ```
     * @example
     * ```tsx
     * <Box blue800></Box>
     * <Box blue800--T20></Box> // transparentize color
     * <Box blue800--O20></Box> // opacify color
     * <Box blue800--L20></Box> // lighten color
     * <Box blue800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    blue800?: ResponsiveBoolean
    /**
     * Set color to blue900
     * ```css
     * { color: #1864ab; }
     * ```
     * @example
     * ```tsx
     * <Box blue900></Box>
     * <Box blue900--T20></Box> // transparentize color
     * <Box blue900--O20></Box> // opacify color
     * <Box blue900--L20></Box> // lighten color
     * <Box blue900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    blue900?: ResponsiveBoolean
    /**
     * Set color to cyan50
     * ```css
     * { color: #e3fafc; }
     * ```
     * @example
     * ```tsx
     * <Box cyan50></Box>
     * <Box cyan50--T20></Box> // transparentize color
     * <Box cyan50--O20></Box> // opacify color
     * <Box cyan50--L20></Box> // lighten color
     * <Box cyan50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    cyan50?: ResponsiveBoolean
    /**
     * Set color to cyan100
     * ```css
     * { color: #c5f6fa; }
     * ```
     * @example
     * ```tsx
     * <Box cyan100></Box>
     * <Box cyan100--T20></Box> // transparentize color
     * <Box cyan100--O20></Box> // opacify color
     * <Box cyan100--L20></Box> // lighten color
     * <Box cyan100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    cyan100?: ResponsiveBoolean
    /**
     * Set color to cyan200
     * ```css
     * { color: #99e9f2; }
     * ```
     * @example
     * ```tsx
     * <Box cyan200></Box>
     * <Box cyan200--T20></Box> // transparentize color
     * <Box cyan200--O20></Box> // opacify color
     * <Box cyan200--L20></Box> // lighten color
     * <Box cyan200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    cyan200?: ResponsiveBoolean
    /**
     * Set color to cyan300
     * ```css
     * { color: #66d9e8; }
     * ```
     * @example
     * ```tsx
     * <Box cyan300></Box>
     * <Box cyan300--T20></Box> // transparentize color
     * <Box cyan300--O20></Box> // opacify color
     * <Box cyan300--L20></Box> // lighten color
     * <Box cyan300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    cyan300?: ResponsiveBoolean
    /**
     * Set color to cyan400
     * ```css
     * { color: #3bc9db; }
     * ```
     * @example
     * ```tsx
     * <Box cyan400></Box>
     * <Box cyan400--T20></Box> // transparentize color
     * <Box cyan400--O20></Box> // opacify color
     * <Box cyan400--L20></Box> // lighten color
     * <Box cyan400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    cyan400?: ResponsiveBoolean
    /**
     * Set color to cyan500
     * ```css
     * { color: #22b8cf; }
     * ```
     * @example
     * ```tsx
     * <Box cyan500></Box>
     * <Box cyan500--T20></Box> // transparentize color
     * <Box cyan500--O20></Box> // opacify color
     * <Box cyan500--L20></Box> // lighten color
     * <Box cyan500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    cyan500?: ResponsiveBoolean
    /**
     * Set color to cyan600
     * ```css
     * { color: #15aabf; }
     * ```
     * @example
     * ```tsx
     * <Box cyan600></Box>
     * <Box cyan600--T20></Box> // transparentize color
     * <Box cyan600--O20></Box> // opacify color
     * <Box cyan600--L20></Box> // lighten color
     * <Box cyan600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    cyan600?: ResponsiveBoolean
    /**
     * Set color to cyan700
     * ```css
     * { color: #1098ad; }
     * ```
     * @example
     * ```tsx
     * <Box cyan700></Box>
     * <Box cyan700--T20></Box> // transparentize color
     * <Box cyan700--O20></Box> // opacify color
     * <Box cyan700--L20></Box> // lighten color
     * <Box cyan700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    cyan700?: ResponsiveBoolean
    /**
     * Set color to cyan800
     * ```css
     * { color: #0c8599; }
     * ```
     * @example
     * ```tsx
     * <Box cyan800></Box>
     * <Box cyan800--T20></Box> // transparentize color
     * <Box cyan800--O20></Box> // opacify color
     * <Box cyan800--L20></Box> // lighten color
     * <Box cyan800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    cyan800?: ResponsiveBoolean
    /**
     * Set color to cyan900
     * ```css
     * { color: #0b7285; }
     * ```
     * @example
     * ```tsx
     * <Box cyan900></Box>
     * <Box cyan900--T20></Box> // transparentize color
     * <Box cyan900--O20></Box> // opacify color
     * <Box cyan900--L20></Box> // lighten color
     * <Box cyan900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    cyan900?: ResponsiveBoolean
    /**
     * Set color to teal50
     * ```css
     * { color: #e6fcf5; }
     * ```
     * @example
     * ```tsx
     * <Box teal50></Box>
     * <Box teal50--T20></Box> // transparentize color
     * <Box teal50--O20></Box> // opacify color
     * <Box teal50--L20></Box> // lighten color
     * <Box teal50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    teal50?: ResponsiveBoolean
    /**
     * Set color to teal100
     * ```css
     * { color: #c3fae8; }
     * ```
     * @example
     * ```tsx
     * <Box teal100></Box>
     * <Box teal100--T20></Box> // transparentize color
     * <Box teal100--O20></Box> // opacify color
     * <Box teal100--L20></Box> // lighten color
     * <Box teal100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    teal100?: ResponsiveBoolean
    /**
     * Set color to teal200
     * ```css
     * { color: #96f2d7; }
     * ```
     * @example
     * ```tsx
     * <Box teal200></Box>
     * <Box teal200--T20></Box> // transparentize color
     * <Box teal200--O20></Box> // opacify color
     * <Box teal200--L20></Box> // lighten color
     * <Box teal200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    teal200?: ResponsiveBoolean
    /**
     * Set color to teal300
     * ```css
     * { color: #63e6be; }
     * ```
     * @example
     * ```tsx
     * <Box teal300></Box>
     * <Box teal300--T20></Box> // transparentize color
     * <Box teal300--O20></Box> // opacify color
     * <Box teal300--L20></Box> // lighten color
     * <Box teal300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    teal300?: ResponsiveBoolean
    /**
     * Set color to teal400
     * ```css
     * { color: #38d9a9; }
     * ```
     * @example
     * ```tsx
     * <Box teal400></Box>
     * <Box teal400--T20></Box> // transparentize color
     * <Box teal400--O20></Box> // opacify color
     * <Box teal400--L20></Box> // lighten color
     * <Box teal400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    teal400?: ResponsiveBoolean
    /**
     * Set color to teal500
     * ```css
     * { color: #20c997; }
     * ```
     * @example
     * ```tsx
     * <Box teal500></Box>
     * <Box teal500--T20></Box> // transparentize color
     * <Box teal500--O20></Box> // opacify color
     * <Box teal500--L20></Box> // lighten color
     * <Box teal500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    teal500?: ResponsiveBoolean
    /**
     * Set color to teal600
     * ```css
     * { color: #12b886; }
     * ```
     * @example
     * ```tsx
     * <Box teal600></Box>
     * <Box teal600--T20></Box> // transparentize color
     * <Box teal600--O20></Box> // opacify color
     * <Box teal600--L20></Box> // lighten color
     * <Box teal600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    teal600?: ResponsiveBoolean
    /**
     * Set color to teal700
     * ```css
     * { color: #0ca678; }
     * ```
     * @example
     * ```tsx
     * <Box teal700></Box>
     * <Box teal700--T20></Box> // transparentize color
     * <Box teal700--O20></Box> // opacify color
     * <Box teal700--L20></Box> // lighten color
     * <Box teal700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    teal700?: ResponsiveBoolean
    /**
     * Set color to teal800
     * ```css
     * { color: #099268; }
     * ```
     * @example
     * ```tsx
     * <Box teal800></Box>
     * <Box teal800--T20></Box> // transparentize color
     * <Box teal800--O20></Box> // opacify color
     * <Box teal800--L20></Box> // lighten color
     * <Box teal800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    teal800?: ResponsiveBoolean
    /**
     * Set color to teal900
     * ```css
     * { color: #087f5b; }
     * ```
     * @example
     * ```tsx
     * <Box teal900></Box>
     * <Box teal900--T20></Box> // transparentize color
     * <Box teal900--O20></Box> // opacify color
     * <Box teal900--L20></Box> // lighten color
     * <Box teal900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    teal900?: ResponsiveBoolean
    /**
     * Set color to green50
     * ```css
     * { color: #ebfbee; }
     * ```
     * @example
     * ```tsx
     * <Box green50></Box>
     * <Box green50--T20></Box> // transparentize color
     * <Box green50--O20></Box> // opacify color
     * <Box green50--L20></Box> // lighten color
     * <Box green50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    green50?: ResponsiveBoolean
    /**
     * Set color to green100
     * ```css
     * { color: #d3f9d8; }
     * ```
     * @example
     * ```tsx
     * <Box green100></Box>
     * <Box green100--T20></Box> // transparentize color
     * <Box green100--O20></Box> // opacify color
     * <Box green100--L20></Box> // lighten color
     * <Box green100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    green100?: ResponsiveBoolean
    /**
     * Set color to green200
     * ```css
     * { color: #b2f2bb; }
     * ```
     * @example
     * ```tsx
     * <Box green200></Box>
     * <Box green200--T20></Box> // transparentize color
     * <Box green200--O20></Box> // opacify color
     * <Box green200--L20></Box> // lighten color
     * <Box green200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    green200?: ResponsiveBoolean
    /**
     * Set color to green300
     * ```css
     * { color: #8ce99a; }
     * ```
     * @example
     * ```tsx
     * <Box green300></Box>
     * <Box green300--T20></Box> // transparentize color
     * <Box green300--O20></Box> // opacify color
     * <Box green300--L20></Box> // lighten color
     * <Box green300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    green300?: ResponsiveBoolean
    /**
     * Set color to green400
     * ```css
     * { color: #69db7c; }
     * ```
     * @example
     * ```tsx
     * <Box green400></Box>
     * <Box green400--T20></Box> // transparentize color
     * <Box green400--O20></Box> // opacify color
     * <Box green400--L20></Box> // lighten color
     * <Box green400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    green400?: ResponsiveBoolean
    /**
     * Set color to green500
     * ```css
     * { color: #51cf66; }
     * ```
     * @example
     * ```tsx
     * <Box green500></Box>
     * <Box green500--T20></Box> // transparentize color
     * <Box green500--O20></Box> // opacify color
     * <Box green500--L20></Box> // lighten color
     * <Box green500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    green500?: ResponsiveBoolean
    /**
     * Set color to green600
     * ```css
     * { color: #40c057; }
     * ```
     * @example
     * ```tsx
     * <Box green600></Box>
     * <Box green600--T20></Box> // transparentize color
     * <Box green600--O20></Box> // opacify color
     * <Box green600--L20></Box> // lighten color
     * <Box green600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    green600?: ResponsiveBoolean
    /**
     * Set color to green700
     * ```css
     * { color: #37b24d; }
     * ```
     * @example
     * ```tsx
     * <Box green700></Box>
     * <Box green700--T20></Box> // transparentize color
     * <Box green700--O20></Box> // opacify color
     * <Box green700--L20></Box> // lighten color
     * <Box green700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    green700?: ResponsiveBoolean
    /**
     * Set color to green800
     * ```css
     * { color: #2f9e44; }
     * ```
     * @example
     * ```tsx
     * <Box green800></Box>
     * <Box green800--T20></Box> // transparentize color
     * <Box green800--O20></Box> // opacify color
     * <Box green800--L20></Box> // lighten color
     * <Box green800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    green800?: ResponsiveBoolean
    /**
     * Set color to green900
     * ```css
     * { color: #2b8a3e; }
     * ```
     * @example
     * ```tsx
     * <Box green900></Box>
     * <Box green900--T20></Box> // transparentize color
     * <Box green900--O20></Box> // opacify color
     * <Box green900--L20></Box> // lighten color
     * <Box green900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    green900?: ResponsiveBoolean
    /**
     * Set color to lime50
     * ```css
     * { color: #f4fce3; }
     * ```
     * @example
     * ```tsx
     * <Box lime50></Box>
     * <Box lime50--T20></Box> // transparentize color
     * <Box lime50--O20></Box> // opacify color
     * <Box lime50--L20></Box> // lighten color
     * <Box lime50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    lime50?: ResponsiveBoolean
    /**
     * Set color to lime100
     * ```css
     * { color: #e9fac8; }
     * ```
     * @example
     * ```tsx
     * <Box lime100></Box>
     * <Box lime100--T20></Box> // transparentize color
     * <Box lime100--O20></Box> // opacify color
     * <Box lime100--L20></Box> // lighten color
     * <Box lime100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    lime100?: ResponsiveBoolean
    /**
     * Set color to lime200
     * ```css
     * { color: #d8f5a2; }
     * ```
     * @example
     * ```tsx
     * <Box lime200></Box>
     * <Box lime200--T20></Box> // transparentize color
     * <Box lime200--O20></Box> // opacify color
     * <Box lime200--L20></Box> // lighten color
     * <Box lime200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    lime200?: ResponsiveBoolean
    /**
     * Set color to lime300
     * ```css
     * { color: #c0eb75; }
     * ```
     * @example
     * ```tsx
     * <Box lime300></Box>
     * <Box lime300--T20></Box> // transparentize color
     * <Box lime300--O20></Box> // opacify color
     * <Box lime300--L20></Box> // lighten color
     * <Box lime300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    lime300?: ResponsiveBoolean
    /**
     * Set color to lime400
     * ```css
     * { color: #a9e34b; }
     * ```
     * @example
     * ```tsx
     * <Box lime400></Box>
     * <Box lime400--T20></Box> // transparentize color
     * <Box lime400--O20></Box> // opacify color
     * <Box lime400--L20></Box> // lighten color
     * <Box lime400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    lime400?: ResponsiveBoolean
    /**
     * Set color to lime500
     * ```css
     * { color: #94d82d; }
     * ```
     * @example
     * ```tsx
     * <Box lime500></Box>
     * <Box lime500--T20></Box> // transparentize color
     * <Box lime500--O20></Box> // opacify color
     * <Box lime500--L20></Box> // lighten color
     * <Box lime500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    lime500?: ResponsiveBoolean
    /**
     * Set color to lime600
     * ```css
     * { color: #82c91e; }
     * ```
     * @example
     * ```tsx
     * <Box lime600></Box>
     * <Box lime600--T20></Box> // transparentize color
     * <Box lime600--O20></Box> // opacify color
     * <Box lime600--L20></Box> // lighten color
     * <Box lime600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    lime600?: ResponsiveBoolean
    /**
     * Set color to lime700
     * ```css
     * { color: #74b816; }
     * ```
     * @example
     * ```tsx
     * <Box lime700></Box>
     * <Box lime700--T20></Box> // transparentize color
     * <Box lime700--O20></Box> // opacify color
     * <Box lime700--L20></Box> // lighten color
     * <Box lime700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    lime700?: ResponsiveBoolean
    /**
     * Set color to lime800
     * ```css
     * { color: #66a80f; }
     * ```
     * @example
     * ```tsx
     * <Box lime800></Box>
     * <Box lime800--T20></Box> // transparentize color
     * <Box lime800--O20></Box> // opacify color
     * <Box lime800--L20></Box> // lighten color
     * <Box lime800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    lime800?: ResponsiveBoolean
    /**
     * Set color to lime900
     * ```css
     * { color: #5c940d; }
     * ```
     * @example
     * ```tsx
     * <Box lime900></Box>
     * <Box lime900--T20></Box> // transparentize color
     * <Box lime900--O20></Box> // opacify color
     * <Box lime900--L20></Box> // lighten color
     * <Box lime900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    lime900?: ResponsiveBoolean
    /**
     * Set color to yellow50
     * ```css
     * { color: #fff9db; }
     * ```
     * @example
     * ```tsx
     * <Box yellow50></Box>
     * <Box yellow50--T20></Box> // transparentize color
     * <Box yellow50--O20></Box> // opacify color
     * <Box yellow50--L20></Box> // lighten color
     * <Box yellow50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    yellow50?: ResponsiveBoolean
    /**
     * Set color to yellow100
     * ```css
     * { color: #fff3bf; }
     * ```
     * @example
     * ```tsx
     * <Box yellow100></Box>
     * <Box yellow100--T20></Box> // transparentize color
     * <Box yellow100--O20></Box> // opacify color
     * <Box yellow100--L20></Box> // lighten color
     * <Box yellow100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    yellow100?: ResponsiveBoolean
    /**
     * Set color to yellow200
     * ```css
     * { color: #ffec99; }
     * ```
     * @example
     * ```tsx
     * <Box yellow200></Box>
     * <Box yellow200--T20></Box> // transparentize color
     * <Box yellow200--O20></Box> // opacify color
     * <Box yellow200--L20></Box> // lighten color
     * <Box yellow200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    yellow200?: ResponsiveBoolean
    /**
     * Set color to yellow300
     * ```css
     * { color: #ffe066; }
     * ```
     * @example
     * ```tsx
     * <Box yellow300></Box>
     * <Box yellow300--T20></Box> // transparentize color
     * <Box yellow300--O20></Box> // opacify color
     * <Box yellow300--L20></Box> // lighten color
     * <Box yellow300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    yellow300?: ResponsiveBoolean
    /**
     * Set color to yellow400
     * ```css
     * { color: #ffd43b; }
     * ```
     * @example
     * ```tsx
     * <Box yellow400></Box>
     * <Box yellow400--T20></Box> // transparentize color
     * <Box yellow400--O20></Box> // opacify color
     * <Box yellow400--L20></Box> // lighten color
     * <Box yellow400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    yellow400?: ResponsiveBoolean
    /**
     * Set color to yellow500
     * ```css
     * { color: #fcc419; }
     * ```
     * @example
     * ```tsx
     * <Box yellow500></Box>
     * <Box yellow500--T20></Box> // transparentize color
     * <Box yellow500--O20></Box> // opacify color
     * <Box yellow500--L20></Box> // lighten color
     * <Box yellow500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    yellow500?: ResponsiveBoolean
    /**
     * Set color to yellow600
     * ```css
     * { color: #fab005; }
     * ```
     * @example
     * ```tsx
     * <Box yellow600></Box>
     * <Box yellow600--T20></Box> // transparentize color
     * <Box yellow600--O20></Box> // opacify color
     * <Box yellow600--L20></Box> // lighten color
     * <Box yellow600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    yellow600?: ResponsiveBoolean
    /**
     * Set color to yellow700
     * ```css
     * { color: #f59f00; }
     * ```
     * @example
     * ```tsx
     * <Box yellow700></Box>
     * <Box yellow700--T20></Box> // transparentize color
     * <Box yellow700--O20></Box> // opacify color
     * <Box yellow700--L20></Box> // lighten color
     * <Box yellow700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    yellow700?: ResponsiveBoolean
    /**
     * Set color to yellow800
     * ```css
     * { color: #f08c00; }
     * ```
     * @example
     * ```tsx
     * <Box yellow800></Box>
     * <Box yellow800--T20></Box> // transparentize color
     * <Box yellow800--O20></Box> // opacify color
     * <Box yellow800--L20></Box> // lighten color
     * <Box yellow800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    yellow800?: ResponsiveBoolean
    /**
     * Set color to yellow900
     * ```css
     * { color: #e67700; }
     * ```
     * @example
     * ```tsx
     * <Box yellow900></Box>
     * <Box yellow900--T20></Box> // transparentize color
     * <Box yellow900--O20></Box> // opacify color
     * <Box yellow900--L20></Box> // lighten color
     * <Box yellow900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    yellow900?: ResponsiveBoolean
    /**
     * Set color to orange50
     * ```css
     * { color: #fff4e6; }
     * ```
     * @example
     * ```tsx
     * <Box orange50></Box>
     * <Box orange50--T20></Box> // transparentize color
     * <Box orange50--O20></Box> // opacify color
     * <Box orange50--L20></Box> // lighten color
     * <Box orange50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    orange50?: ResponsiveBoolean
    /**
     * Set color to orange100
     * ```css
     * { color: #ffe8cc; }
     * ```
     * @example
     * ```tsx
     * <Box orange100></Box>
     * <Box orange100--T20></Box> // transparentize color
     * <Box orange100--O20></Box> // opacify color
     * <Box orange100--L20></Box> // lighten color
     * <Box orange100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    orange100?: ResponsiveBoolean
    /**
     * Set color to orange200
     * ```css
     * { color: #ffd8a8; }
     * ```
     * @example
     * ```tsx
     * <Box orange200></Box>
     * <Box orange200--T20></Box> // transparentize color
     * <Box orange200--O20></Box> // opacify color
     * <Box orange200--L20></Box> // lighten color
     * <Box orange200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    orange200?: ResponsiveBoolean
    /**
     * Set color to orange300
     * ```css
     * { color: #ffc078; }
     * ```
     * @example
     * ```tsx
     * <Box orange300></Box>
     * <Box orange300--T20></Box> // transparentize color
     * <Box orange300--O20></Box> // opacify color
     * <Box orange300--L20></Box> // lighten color
     * <Box orange300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    orange300?: ResponsiveBoolean
    /**
     * Set color to orange400
     * ```css
     * { color: #ffa94d; }
     * ```
     * @example
     * ```tsx
     * <Box orange400></Box>
     * <Box orange400--T20></Box> // transparentize color
     * <Box orange400--O20></Box> // opacify color
     * <Box orange400--L20></Box> // lighten color
     * <Box orange400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    orange400?: ResponsiveBoolean
    /**
     * Set color to orange500
     * ```css
     * { color: #ff922b; }
     * ```
     * @example
     * ```tsx
     * <Box orange500></Box>
     * <Box orange500--T20></Box> // transparentize color
     * <Box orange500--O20></Box> // opacify color
     * <Box orange500--L20></Box> // lighten color
     * <Box orange500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    orange500?: ResponsiveBoolean
    /**
     * Set color to orange600
     * ```css
     * { color: #fd7e14; }
     * ```
     * @example
     * ```tsx
     * <Box orange600></Box>
     * <Box orange600--T20></Box> // transparentize color
     * <Box orange600--O20></Box> // opacify color
     * <Box orange600--L20></Box> // lighten color
     * <Box orange600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    orange600?: ResponsiveBoolean
    /**
     * Set color to orange700
     * ```css
     * { color: #f76707; }
     * ```
     * @example
     * ```tsx
     * <Box orange700></Box>
     * <Box orange700--T20></Box> // transparentize color
     * <Box orange700--O20></Box> // opacify color
     * <Box orange700--L20></Box> // lighten color
     * <Box orange700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    orange700?: ResponsiveBoolean
    /**
     * Set color to orange800
     * ```css
     * { color: #e8590c; }
     * ```
     * @example
     * ```tsx
     * <Box orange800></Box>
     * <Box orange800--T20></Box> // transparentize color
     * <Box orange800--O20></Box> // opacify color
     * <Box orange800--L20></Box> // lighten color
     * <Box orange800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    orange800?: ResponsiveBoolean
    /**
     * Set color to orange900
     * ```css
     * { color: #d9480f; }
     * ```
     * @example
     * ```tsx
     * <Box orange900></Box>
     * <Box orange900--T20></Box> // transparentize color
     * <Box orange900--O20></Box> // opacify color
     * <Box orange900--L20></Box> // lighten color
     * <Box orange900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    orange900?: ResponsiveBoolean
    /**
     * Set color to red50
     * ```css
     * { color: #fff5f5; }
     * ```
     * @example
     * ```tsx
     * <Box red50></Box>
     * <Box red50--T20></Box> // transparentize color
     * <Box red50--O20></Box> // opacify color
     * <Box red50--L20></Box> // lighten color
     * <Box red50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    red50?: ResponsiveBoolean
    /**
     * Set color to red100
     * ```css
     * { color: #ffe3e3; }
     * ```
     * @example
     * ```tsx
     * <Box red100></Box>
     * <Box red100--T20></Box> // transparentize color
     * <Box red100--O20></Box> // opacify color
     * <Box red100--L20></Box> // lighten color
     * <Box red100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    red100?: ResponsiveBoolean
    /**
     * Set color to red200
     * ```css
     * { color: #ffc9c9; }
     * ```
     * @example
     * ```tsx
     * <Box red200></Box>
     * <Box red200--T20></Box> // transparentize color
     * <Box red200--O20></Box> // opacify color
     * <Box red200--L20></Box> // lighten color
     * <Box red200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    red200?: ResponsiveBoolean
    /**
     * Set color to red300
     * ```css
     * { color: #ffa8a8; }
     * ```
     * @example
     * ```tsx
     * <Box red300></Box>
     * <Box red300--T20></Box> // transparentize color
     * <Box red300--O20></Box> // opacify color
     * <Box red300--L20></Box> // lighten color
     * <Box red300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    red300?: ResponsiveBoolean
    /**
     * Set color to red400
     * ```css
     * { color: #ff8787; }
     * ```
     * @example
     * ```tsx
     * <Box red400></Box>
     * <Box red400--T20></Box> // transparentize color
     * <Box red400--O20></Box> // opacify color
     * <Box red400--L20></Box> // lighten color
     * <Box red400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    red400?: ResponsiveBoolean
    /**
     * Set color to red500
     * ```css
     * { color: #ff6b6b; }
     * ```
     * @example
     * ```tsx
     * <Box red500></Box>
     * <Box red500--T20></Box> // transparentize color
     * <Box red500--O20></Box> // opacify color
     * <Box red500--L20></Box> // lighten color
     * <Box red500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    red500?: ResponsiveBoolean
    /**
     * Set color to red600
     * ```css
     * { color: #fa5252; }
     * ```
     * @example
     * ```tsx
     * <Box red600></Box>
     * <Box red600--T20></Box> // transparentize color
     * <Box red600--O20></Box> // opacify color
     * <Box red600--L20></Box> // lighten color
     * <Box red600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    red600?: ResponsiveBoolean
    /**
     * Set color to red700
     * ```css
     * { color: #f03e3e; }
     * ```
     * @example
     * ```tsx
     * <Box red700></Box>
     * <Box red700--T20></Box> // transparentize color
     * <Box red700--O20></Box> // opacify color
     * <Box red700--L20></Box> // lighten color
     * <Box red700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    red700?: ResponsiveBoolean
    /**
     * Set color to red800
     * ```css
     * { color: #e03131; }
     * ```
     * @example
     * ```tsx
     * <Box red800></Box>
     * <Box red800--T20></Box> // transparentize color
     * <Box red800--O20></Box> // opacify color
     * <Box red800--L20></Box> // lighten color
     * <Box red800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    red800?: ResponsiveBoolean
    /**
     * Set color to red900
     * ```css
     * { color: #c92a2a; }
     * ```
     * @example
     * ```tsx
     * <Box red900></Box>
     * <Box red900--T20></Box> // transparentize color
     * <Box red900--O20></Box> // opacify color
     * <Box red900--L20></Box> // lighten color
     * <Box red900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    red900?: ResponsiveBoolean
    /**
     * Set color to trueGray50
     * ```css
     * { color: #fafafa; }
     * ```
     * @example
     * ```tsx
     * <Box trueGray50></Box>
     * <Box trueGray50--T20></Box> // transparentize color
     * <Box trueGray50--O20></Box> // opacify color
     * <Box trueGray50--L20></Box> // lighten color
     * <Box trueGray50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    trueGray50?: ResponsiveBoolean
    /**
     * Set color to trueGray100
     * ```css
     * { color: #f5f5f5; }
     * ```
     * @example
     * ```tsx
     * <Box trueGray100></Box>
     * <Box trueGray100--T20></Box> // transparentize color
     * <Box trueGray100--O20></Box> // opacify color
     * <Box trueGray100--L20></Box> // lighten color
     * <Box trueGray100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    trueGray100?: ResponsiveBoolean
    /**
     * Set color to trueGray200
     * ```css
     * { color: #e5e5e5; }
     * ```
     * @example
     * ```tsx
     * <Box trueGray200></Box>
     * <Box trueGray200--T20></Box> // transparentize color
     * <Box trueGray200--O20></Box> // opacify color
     * <Box trueGray200--L20></Box> // lighten color
     * <Box trueGray200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    trueGray200?: ResponsiveBoolean
    /**
     * Set color to trueGray300
     * ```css
     * { color: #d4d4d4; }
     * ```
     * @example
     * ```tsx
     * <Box trueGray300></Box>
     * <Box trueGray300--T20></Box> // transparentize color
     * <Box trueGray300--O20></Box> // opacify color
     * <Box trueGray300--L20></Box> // lighten color
     * <Box trueGray300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    trueGray300?: ResponsiveBoolean
    /**
     * Set color to trueGray400
     * ```css
     * { color: #a3a3a3; }
     * ```
     * @example
     * ```tsx
     * <Box trueGray400></Box>
     * <Box trueGray400--T20></Box> // transparentize color
     * <Box trueGray400--O20></Box> // opacify color
     * <Box trueGray400--L20></Box> // lighten color
     * <Box trueGray400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    trueGray400?: ResponsiveBoolean
    /**
     * Set color to trueGray500
     * ```css
     * { color: #737373; }
     * ```
     * @example
     * ```tsx
     * <Box trueGray500></Box>
     * <Box trueGray500--T20></Box> // transparentize color
     * <Box trueGray500--O20></Box> // opacify color
     * <Box trueGray500--L20></Box> // lighten color
     * <Box trueGray500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    trueGray500?: ResponsiveBoolean
    /**
     * Set color to trueGray600
     * ```css
     * { color: #525252; }
     * ```
     * @example
     * ```tsx
     * <Box trueGray600></Box>
     * <Box trueGray600--T20></Box> // transparentize color
     * <Box trueGray600--O20></Box> // opacify color
     * <Box trueGray600--L20></Box> // lighten color
     * <Box trueGray600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    trueGray600?: ResponsiveBoolean
    /**
     * Set color to trueGray700
     * ```css
     * { color: #404040; }
     * ```
     * @example
     * ```tsx
     * <Box trueGray700></Box>
     * <Box trueGray700--T20></Box> // transparentize color
     * <Box trueGray700--O20></Box> // opacify color
     * <Box trueGray700--L20></Box> // lighten color
     * <Box trueGray700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    trueGray700?: ResponsiveBoolean
    /**
     * Set color to trueGray800
     * ```css
     * { color: #262626; }
     * ```
     * @example
     * ```tsx
     * <Box trueGray800></Box>
     * <Box trueGray800--T20></Box> // transparentize color
     * <Box trueGray800--O20></Box> // opacify color
     * <Box trueGray800--L20></Box> // lighten color
     * <Box trueGray800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    trueGray800?: ResponsiveBoolean
    /**
     * Set color to trueGray900
     * ```css
     * { color: #171717; }
     * ```
     * @example
     * ```tsx
     * <Box trueGray900></Box>
     * <Box trueGray900--T20></Box> // transparentize color
     * <Box trueGray900--O20></Box> // opacify color
     * <Box trueGray900--L20></Box> // lighten color
     * <Box trueGray900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    trueGray900?: ResponsiveBoolean
    /**
     * Set color to gray50
     * ```css
     * { color: #fafafa; }
     * ```
     * @example
     * ```tsx
     * <Box gray50></Box>
     * <Box gray50--T20></Box> // transparentize color
     * <Box gray50--O20></Box> // opacify color
     * <Box gray50--L20></Box> // lighten color
     * <Box gray50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    gray50?: ResponsiveBoolean
    /**
     * Set color to gray100
     * ```css
     * { color: #f4f4f5; }
     * ```
     * @example
     * ```tsx
     * <Box gray100></Box>
     * <Box gray100--T20></Box> // transparentize color
     * <Box gray100--O20></Box> // opacify color
     * <Box gray100--L20></Box> // lighten color
     * <Box gray100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    gray100?: ResponsiveBoolean
    /**
     * Set color to gray200
     * ```css
     * { color: #e4e4e7; }
     * ```
     * @example
     * ```tsx
     * <Box gray200></Box>
     * <Box gray200--T20></Box> // transparentize color
     * <Box gray200--O20></Box> // opacify color
     * <Box gray200--L20></Box> // lighten color
     * <Box gray200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    gray200?: ResponsiveBoolean
    /**
     * Set color to gray300
     * ```css
     * { color: #d4d4d8; }
     * ```
     * @example
     * ```tsx
     * <Box gray300></Box>
     * <Box gray300--T20></Box> // transparentize color
     * <Box gray300--O20></Box> // opacify color
     * <Box gray300--L20></Box> // lighten color
     * <Box gray300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    gray300?: ResponsiveBoolean
    /**
     * Set color to gray400
     * ```css
     * { color: #a1a1aa; }
     * ```
     * @example
     * ```tsx
     * <Box gray400></Box>
     * <Box gray400--T20></Box> // transparentize color
     * <Box gray400--O20></Box> // opacify color
     * <Box gray400--L20></Box> // lighten color
     * <Box gray400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    gray400?: ResponsiveBoolean
    /**
     * Set color to gray500
     * ```css
     * { color: #71717a; }
     * ```
     * @example
     * ```tsx
     * <Box gray500></Box>
     * <Box gray500--T20></Box> // transparentize color
     * <Box gray500--O20></Box> // opacify color
     * <Box gray500--L20></Box> // lighten color
     * <Box gray500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    gray500?: ResponsiveBoolean
    /**
     * Set color to gray600
     * ```css
     * { color: #52525b; }
     * ```
     * @example
     * ```tsx
     * <Box gray600></Box>
     * <Box gray600--T20></Box> // transparentize color
     * <Box gray600--O20></Box> // opacify color
     * <Box gray600--L20></Box> // lighten color
     * <Box gray600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    gray600?: ResponsiveBoolean
    /**
     * Set color to gray700
     * ```css
     * { color: #3f3f46; }
     * ```
     * @example
     * ```tsx
     * <Box gray700></Box>
     * <Box gray700--T20></Box> // transparentize color
     * <Box gray700--O20></Box> // opacify color
     * <Box gray700--L20></Box> // lighten color
     * <Box gray700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    gray700?: ResponsiveBoolean
    /**
     * Set color to gray800
     * ```css
     * { color: #27272a; }
     * ```
     * @example
     * ```tsx
     * <Box gray800></Box>
     * <Box gray800--T20></Box> // transparentize color
     * <Box gray800--O20></Box> // opacify color
     * <Box gray800--L20></Box> // lighten color
     * <Box gray800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    gray800?: ResponsiveBoolean
    /**
     * Set color to gray900
     * ```css
     * { color: #18181b; }
     * ```
     * @example
     * ```tsx
     * <Box gray900></Box>
     * <Box gray900--T20></Box> // transparentize color
     * <Box gray900--O20></Box> // opacify color
     * <Box gray900--L20></Box> // lighten color
     * <Box gray900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    gray900?: ResponsiveBoolean
  }
}
