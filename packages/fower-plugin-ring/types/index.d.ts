import { FowerPlugin, ResponsiveBoolean } from "@fower/core"
declare const _default: () => FowerPlugin
export default _default

declare module '@fower/atomic-props' {
  export interface AtomicProps {
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ring-2></Box>
     * <Box ring={3}></Box>
     * <Box ring="4"></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ring?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringTransparent></Box> // default with is 1
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringTransparent?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringWhite></Box> // default with is 1
     * <Box ringWhite-2></Box> // ring with is 2
     * <Box ringWhite--T20></Box> // transparentize color
     * <Box ringWhite--O20></Box> // opacify color
     * <Box ringWhite--L20></Box> // lighten color
     * <Box ringWhite--D20></Box> // darken color
     * <Box ringWhite-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringWhite?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringBlack></Box> // default with is 1
     * <Box ringBlack-2></Box> // ring with is 2
     * <Box ringBlack--T20></Box> // transparentize color
     * <Box ringBlack--O20></Box> // opacify color
     * <Box ringBlack--L20></Box> // lighten color
     * <Box ringBlack--D20></Box> // darken color
     * <Box ringBlack-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringBlack?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringBrand50></Box> // default with is 1
     * <Box ringBrand50-2></Box> // ring with is 2
     * <Box ringBrand50--T20></Box> // transparentize color
     * <Box ringBrand50--O20></Box> // opacify color
     * <Box ringBrand50--L20></Box> // lighten color
     * <Box ringBrand50--D20></Box> // darken color
     * <Box ringBrand50-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringBrand50?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringBrand100></Box> // default with is 1
     * <Box ringBrand100-2></Box> // ring with is 2
     * <Box ringBrand100--T20></Box> // transparentize color
     * <Box ringBrand100--O20></Box> // opacify color
     * <Box ringBrand100--L20></Box> // lighten color
     * <Box ringBrand100--D20></Box> // darken color
     * <Box ringBrand100-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringBrand100?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringBrand200></Box> // default with is 1
     * <Box ringBrand200-2></Box> // ring with is 2
     * <Box ringBrand200--T20></Box> // transparentize color
     * <Box ringBrand200--O20></Box> // opacify color
     * <Box ringBrand200--L20></Box> // lighten color
     * <Box ringBrand200--D20></Box> // darken color
     * <Box ringBrand200-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringBrand200?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringBrand300></Box> // default with is 1
     * <Box ringBrand300-2></Box> // ring with is 2
     * <Box ringBrand300--T20></Box> // transparentize color
     * <Box ringBrand300--O20></Box> // opacify color
     * <Box ringBrand300--L20></Box> // lighten color
     * <Box ringBrand300--D20></Box> // darken color
     * <Box ringBrand300-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringBrand300?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringBrand400></Box> // default with is 1
     * <Box ringBrand400-2></Box> // ring with is 2
     * <Box ringBrand400--T20></Box> // transparentize color
     * <Box ringBrand400--O20></Box> // opacify color
     * <Box ringBrand400--L20></Box> // lighten color
     * <Box ringBrand400--D20></Box> // darken color
     * <Box ringBrand400-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringBrand400?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringBrand500></Box> // default with is 1
     * <Box ringBrand500-2></Box> // ring with is 2
     * <Box ringBrand500--T20></Box> // transparentize color
     * <Box ringBrand500--O20></Box> // opacify color
     * <Box ringBrand500--L20></Box> // lighten color
     * <Box ringBrand500--D20></Box> // darken color
     * <Box ringBrand500-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringBrand500?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringBrand600></Box> // default with is 1
     * <Box ringBrand600-2></Box> // ring with is 2
     * <Box ringBrand600--T20></Box> // transparentize color
     * <Box ringBrand600--O20></Box> // opacify color
     * <Box ringBrand600--L20></Box> // lighten color
     * <Box ringBrand600--D20></Box> // darken color
     * <Box ringBrand600-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringBrand600?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringBrand700></Box> // default with is 1
     * <Box ringBrand700-2></Box> // ring with is 2
     * <Box ringBrand700--T20></Box> // transparentize color
     * <Box ringBrand700--O20></Box> // opacify color
     * <Box ringBrand700--L20></Box> // lighten color
     * <Box ringBrand700--D20></Box> // darken color
     * <Box ringBrand700-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringBrand700?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringBrand800></Box> // default with is 1
     * <Box ringBrand800-2></Box> // ring with is 2
     * <Box ringBrand800--T20></Box> // transparentize color
     * <Box ringBrand800--O20></Box> // opacify color
     * <Box ringBrand800--L20></Box> // lighten color
     * <Box ringBrand800--D20></Box> // darken color
     * <Box ringBrand800-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringBrand800?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringBrand900></Box> // default with is 1
     * <Box ringBrand900-2></Box> // ring with is 2
     * <Box ringBrand900--T20></Box> // transparentize color
     * <Box ringBrand900--O20></Box> // opacify color
     * <Box ringBrand900--L20></Box> // lighten color
     * <Box ringBrand900--D20></Box> // darken color
     * <Box ringBrand900-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringBrand900?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringSlate50></Box> // default with is 1
     * <Box ringSlate50-2></Box> // ring with is 2
     * <Box ringSlate50--T20></Box> // transparentize color
     * <Box ringSlate50--O20></Box> // opacify color
     * <Box ringSlate50--L20></Box> // lighten color
     * <Box ringSlate50--D20></Box> // darken color
     * <Box ringSlate50-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringSlate50?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringSlate100></Box> // default with is 1
     * <Box ringSlate100-2></Box> // ring with is 2
     * <Box ringSlate100--T20></Box> // transparentize color
     * <Box ringSlate100--O20></Box> // opacify color
     * <Box ringSlate100--L20></Box> // lighten color
     * <Box ringSlate100--D20></Box> // darken color
     * <Box ringSlate100-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringSlate100?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringSlate200></Box> // default with is 1
     * <Box ringSlate200-2></Box> // ring with is 2
     * <Box ringSlate200--T20></Box> // transparentize color
     * <Box ringSlate200--O20></Box> // opacify color
     * <Box ringSlate200--L20></Box> // lighten color
     * <Box ringSlate200--D20></Box> // darken color
     * <Box ringSlate200-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringSlate200?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringSlate300></Box> // default with is 1
     * <Box ringSlate300-2></Box> // ring with is 2
     * <Box ringSlate300--T20></Box> // transparentize color
     * <Box ringSlate300--O20></Box> // opacify color
     * <Box ringSlate300--L20></Box> // lighten color
     * <Box ringSlate300--D20></Box> // darken color
     * <Box ringSlate300-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringSlate300?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringSlate400></Box> // default with is 1
     * <Box ringSlate400-2></Box> // ring with is 2
     * <Box ringSlate400--T20></Box> // transparentize color
     * <Box ringSlate400--O20></Box> // opacify color
     * <Box ringSlate400--L20></Box> // lighten color
     * <Box ringSlate400--D20></Box> // darken color
     * <Box ringSlate400-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringSlate400?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringSlate500></Box> // default with is 1
     * <Box ringSlate500-2></Box> // ring with is 2
     * <Box ringSlate500--T20></Box> // transparentize color
     * <Box ringSlate500--O20></Box> // opacify color
     * <Box ringSlate500--L20></Box> // lighten color
     * <Box ringSlate500--D20></Box> // darken color
     * <Box ringSlate500-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringSlate500?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringSlate600></Box> // default with is 1
     * <Box ringSlate600-2></Box> // ring with is 2
     * <Box ringSlate600--T20></Box> // transparentize color
     * <Box ringSlate600--O20></Box> // opacify color
     * <Box ringSlate600--L20></Box> // lighten color
     * <Box ringSlate600--D20></Box> // darken color
     * <Box ringSlate600-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringSlate600?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringSlate700></Box> // default with is 1
     * <Box ringSlate700-2></Box> // ring with is 2
     * <Box ringSlate700--T20></Box> // transparentize color
     * <Box ringSlate700--O20></Box> // opacify color
     * <Box ringSlate700--L20></Box> // lighten color
     * <Box ringSlate700--D20></Box> // darken color
     * <Box ringSlate700-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringSlate700?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringSlate800></Box> // default with is 1
     * <Box ringSlate800-2></Box> // ring with is 2
     * <Box ringSlate800--T20></Box> // transparentize color
     * <Box ringSlate800--O20></Box> // opacify color
     * <Box ringSlate800--L20></Box> // lighten color
     * <Box ringSlate800--D20></Box> // darken color
     * <Box ringSlate800-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringSlate800?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringSlate900></Box> // default with is 1
     * <Box ringSlate900-2></Box> // ring with is 2
     * <Box ringSlate900--T20></Box> // transparentize color
     * <Box ringSlate900--O20></Box> // opacify color
     * <Box ringSlate900--L20></Box> // lighten color
     * <Box ringSlate900--D20></Box> // darken color
     * <Box ringSlate900-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringSlate900?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringGray50></Box> // default with is 1
     * <Box ringGray50-2></Box> // ring with is 2
     * <Box ringGray50--T20></Box> // transparentize color
     * <Box ringGray50--O20></Box> // opacify color
     * <Box ringGray50--L20></Box> // lighten color
     * <Box ringGray50--D20></Box> // darken color
     * <Box ringGray50-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringGray50?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringGray100></Box> // default with is 1
     * <Box ringGray100-2></Box> // ring with is 2
     * <Box ringGray100--T20></Box> // transparentize color
     * <Box ringGray100--O20></Box> // opacify color
     * <Box ringGray100--L20></Box> // lighten color
     * <Box ringGray100--D20></Box> // darken color
     * <Box ringGray100-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringGray100?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringGray200></Box> // default with is 1
     * <Box ringGray200-2></Box> // ring with is 2
     * <Box ringGray200--T20></Box> // transparentize color
     * <Box ringGray200--O20></Box> // opacify color
     * <Box ringGray200--L20></Box> // lighten color
     * <Box ringGray200--D20></Box> // darken color
     * <Box ringGray200-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringGray200?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringGray300></Box> // default with is 1
     * <Box ringGray300-2></Box> // ring with is 2
     * <Box ringGray300--T20></Box> // transparentize color
     * <Box ringGray300--O20></Box> // opacify color
     * <Box ringGray300--L20></Box> // lighten color
     * <Box ringGray300--D20></Box> // darken color
     * <Box ringGray300-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringGray300?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringGray400></Box> // default with is 1
     * <Box ringGray400-2></Box> // ring with is 2
     * <Box ringGray400--T20></Box> // transparentize color
     * <Box ringGray400--O20></Box> // opacify color
     * <Box ringGray400--L20></Box> // lighten color
     * <Box ringGray400--D20></Box> // darken color
     * <Box ringGray400-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringGray400?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringGray500></Box> // default with is 1
     * <Box ringGray500-2></Box> // ring with is 2
     * <Box ringGray500--T20></Box> // transparentize color
     * <Box ringGray500--O20></Box> // opacify color
     * <Box ringGray500--L20></Box> // lighten color
     * <Box ringGray500--D20></Box> // darken color
     * <Box ringGray500-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringGray500?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringGray600></Box> // default with is 1
     * <Box ringGray600-2></Box> // ring with is 2
     * <Box ringGray600--T20></Box> // transparentize color
     * <Box ringGray600--O20></Box> // opacify color
     * <Box ringGray600--L20></Box> // lighten color
     * <Box ringGray600--D20></Box> // darken color
     * <Box ringGray600-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringGray600?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringGray700></Box> // default with is 1
     * <Box ringGray700-2></Box> // ring with is 2
     * <Box ringGray700--T20></Box> // transparentize color
     * <Box ringGray700--O20></Box> // opacify color
     * <Box ringGray700--L20></Box> // lighten color
     * <Box ringGray700--D20></Box> // darken color
     * <Box ringGray700-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringGray700?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringGray800></Box> // default with is 1
     * <Box ringGray800-2></Box> // ring with is 2
     * <Box ringGray800--T20></Box> // transparentize color
     * <Box ringGray800--O20></Box> // opacify color
     * <Box ringGray800--L20></Box> // lighten color
     * <Box ringGray800--D20></Box> // darken color
     * <Box ringGray800-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringGray800?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringGray900></Box> // default with is 1
     * <Box ringGray900-2></Box> // ring with is 2
     * <Box ringGray900--T20></Box> // transparentize color
     * <Box ringGray900--O20></Box> // opacify color
     * <Box ringGray900--L20></Box> // lighten color
     * <Box ringGray900--D20></Box> // darken color
     * <Box ringGray900-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringGray900?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringZinc50></Box> // default with is 1
     * <Box ringZinc50-2></Box> // ring with is 2
     * <Box ringZinc50--T20></Box> // transparentize color
     * <Box ringZinc50--O20></Box> // opacify color
     * <Box ringZinc50--L20></Box> // lighten color
     * <Box ringZinc50--D20></Box> // darken color
     * <Box ringZinc50-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringZinc50?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringZinc100></Box> // default with is 1
     * <Box ringZinc100-2></Box> // ring with is 2
     * <Box ringZinc100--T20></Box> // transparentize color
     * <Box ringZinc100--O20></Box> // opacify color
     * <Box ringZinc100--L20></Box> // lighten color
     * <Box ringZinc100--D20></Box> // darken color
     * <Box ringZinc100-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringZinc100?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringZinc200></Box> // default with is 1
     * <Box ringZinc200-2></Box> // ring with is 2
     * <Box ringZinc200--T20></Box> // transparentize color
     * <Box ringZinc200--O20></Box> // opacify color
     * <Box ringZinc200--L20></Box> // lighten color
     * <Box ringZinc200--D20></Box> // darken color
     * <Box ringZinc200-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringZinc200?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringZinc300></Box> // default with is 1
     * <Box ringZinc300-2></Box> // ring with is 2
     * <Box ringZinc300--T20></Box> // transparentize color
     * <Box ringZinc300--O20></Box> // opacify color
     * <Box ringZinc300--L20></Box> // lighten color
     * <Box ringZinc300--D20></Box> // darken color
     * <Box ringZinc300-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringZinc300?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringZinc400></Box> // default with is 1
     * <Box ringZinc400-2></Box> // ring with is 2
     * <Box ringZinc400--T20></Box> // transparentize color
     * <Box ringZinc400--O20></Box> // opacify color
     * <Box ringZinc400--L20></Box> // lighten color
     * <Box ringZinc400--D20></Box> // darken color
     * <Box ringZinc400-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringZinc400?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringZinc500></Box> // default with is 1
     * <Box ringZinc500-2></Box> // ring with is 2
     * <Box ringZinc500--T20></Box> // transparentize color
     * <Box ringZinc500--O20></Box> // opacify color
     * <Box ringZinc500--L20></Box> // lighten color
     * <Box ringZinc500--D20></Box> // darken color
     * <Box ringZinc500-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringZinc500?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringZinc600></Box> // default with is 1
     * <Box ringZinc600-2></Box> // ring with is 2
     * <Box ringZinc600--T20></Box> // transparentize color
     * <Box ringZinc600--O20></Box> // opacify color
     * <Box ringZinc600--L20></Box> // lighten color
     * <Box ringZinc600--D20></Box> // darken color
     * <Box ringZinc600-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringZinc600?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringZinc700></Box> // default with is 1
     * <Box ringZinc700-2></Box> // ring with is 2
     * <Box ringZinc700--T20></Box> // transparentize color
     * <Box ringZinc700--O20></Box> // opacify color
     * <Box ringZinc700--L20></Box> // lighten color
     * <Box ringZinc700--D20></Box> // darken color
     * <Box ringZinc700-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringZinc700?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringZinc800></Box> // default with is 1
     * <Box ringZinc800-2></Box> // ring with is 2
     * <Box ringZinc800--T20></Box> // transparentize color
     * <Box ringZinc800--O20></Box> // opacify color
     * <Box ringZinc800--L20></Box> // lighten color
     * <Box ringZinc800--D20></Box> // darken color
     * <Box ringZinc800-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringZinc800?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringZinc900></Box> // default with is 1
     * <Box ringZinc900-2></Box> // ring with is 2
     * <Box ringZinc900--T20></Box> // transparentize color
     * <Box ringZinc900--O20></Box> // opacify color
     * <Box ringZinc900--L20></Box> // lighten color
     * <Box ringZinc900--D20></Box> // darken color
     * <Box ringZinc900-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringZinc900?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringNeutral50></Box> // default with is 1
     * <Box ringNeutral50-2></Box> // ring with is 2
     * <Box ringNeutral50--T20></Box> // transparentize color
     * <Box ringNeutral50--O20></Box> // opacify color
     * <Box ringNeutral50--L20></Box> // lighten color
     * <Box ringNeutral50--D20></Box> // darken color
     * <Box ringNeutral50-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringNeutral50?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringNeutral100></Box> // default with is 1
     * <Box ringNeutral100-2></Box> // ring with is 2
     * <Box ringNeutral100--T20></Box> // transparentize color
     * <Box ringNeutral100--O20></Box> // opacify color
     * <Box ringNeutral100--L20></Box> // lighten color
     * <Box ringNeutral100--D20></Box> // darken color
     * <Box ringNeutral100-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringNeutral100?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringNeutral200></Box> // default with is 1
     * <Box ringNeutral200-2></Box> // ring with is 2
     * <Box ringNeutral200--T20></Box> // transparentize color
     * <Box ringNeutral200--O20></Box> // opacify color
     * <Box ringNeutral200--L20></Box> // lighten color
     * <Box ringNeutral200--D20></Box> // darken color
     * <Box ringNeutral200-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringNeutral200?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringNeutral300></Box> // default with is 1
     * <Box ringNeutral300-2></Box> // ring with is 2
     * <Box ringNeutral300--T20></Box> // transparentize color
     * <Box ringNeutral300--O20></Box> // opacify color
     * <Box ringNeutral300--L20></Box> // lighten color
     * <Box ringNeutral300--D20></Box> // darken color
     * <Box ringNeutral300-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringNeutral300?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringNeutral400></Box> // default with is 1
     * <Box ringNeutral400-2></Box> // ring with is 2
     * <Box ringNeutral400--T20></Box> // transparentize color
     * <Box ringNeutral400--O20></Box> // opacify color
     * <Box ringNeutral400--L20></Box> // lighten color
     * <Box ringNeutral400--D20></Box> // darken color
     * <Box ringNeutral400-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringNeutral400?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringNeutral500></Box> // default with is 1
     * <Box ringNeutral500-2></Box> // ring with is 2
     * <Box ringNeutral500--T20></Box> // transparentize color
     * <Box ringNeutral500--O20></Box> // opacify color
     * <Box ringNeutral500--L20></Box> // lighten color
     * <Box ringNeutral500--D20></Box> // darken color
     * <Box ringNeutral500-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringNeutral500?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringNeutral600></Box> // default with is 1
     * <Box ringNeutral600-2></Box> // ring with is 2
     * <Box ringNeutral600--T20></Box> // transparentize color
     * <Box ringNeutral600--O20></Box> // opacify color
     * <Box ringNeutral600--L20></Box> // lighten color
     * <Box ringNeutral600--D20></Box> // darken color
     * <Box ringNeutral600-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringNeutral600?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringNeutral700></Box> // default with is 1
     * <Box ringNeutral700-2></Box> // ring with is 2
     * <Box ringNeutral700--T20></Box> // transparentize color
     * <Box ringNeutral700--O20></Box> // opacify color
     * <Box ringNeutral700--L20></Box> // lighten color
     * <Box ringNeutral700--D20></Box> // darken color
     * <Box ringNeutral700-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringNeutral700?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringNeutral800></Box> // default with is 1
     * <Box ringNeutral800-2></Box> // ring with is 2
     * <Box ringNeutral800--T20></Box> // transparentize color
     * <Box ringNeutral800--O20></Box> // opacify color
     * <Box ringNeutral800--L20></Box> // lighten color
     * <Box ringNeutral800--D20></Box> // darken color
     * <Box ringNeutral800-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringNeutral800?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringNeutral900></Box> // default with is 1
     * <Box ringNeutral900-2></Box> // ring with is 2
     * <Box ringNeutral900--T20></Box> // transparentize color
     * <Box ringNeutral900--O20></Box> // opacify color
     * <Box ringNeutral900--L20></Box> // lighten color
     * <Box ringNeutral900--D20></Box> // darken color
     * <Box ringNeutral900-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringNeutral900?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringStone50></Box> // default with is 1
     * <Box ringStone50-2></Box> // ring with is 2
     * <Box ringStone50--T20></Box> // transparentize color
     * <Box ringStone50--O20></Box> // opacify color
     * <Box ringStone50--L20></Box> // lighten color
     * <Box ringStone50--D20></Box> // darken color
     * <Box ringStone50-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringStone50?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringStone100></Box> // default with is 1
     * <Box ringStone100-2></Box> // ring with is 2
     * <Box ringStone100--T20></Box> // transparentize color
     * <Box ringStone100--O20></Box> // opacify color
     * <Box ringStone100--L20></Box> // lighten color
     * <Box ringStone100--D20></Box> // darken color
     * <Box ringStone100-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringStone100?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringStone200></Box> // default with is 1
     * <Box ringStone200-2></Box> // ring with is 2
     * <Box ringStone200--T20></Box> // transparentize color
     * <Box ringStone200--O20></Box> // opacify color
     * <Box ringStone200--L20></Box> // lighten color
     * <Box ringStone200--D20></Box> // darken color
     * <Box ringStone200-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringStone200?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringStone300></Box> // default with is 1
     * <Box ringStone300-2></Box> // ring with is 2
     * <Box ringStone300--T20></Box> // transparentize color
     * <Box ringStone300--O20></Box> // opacify color
     * <Box ringStone300--L20></Box> // lighten color
     * <Box ringStone300--D20></Box> // darken color
     * <Box ringStone300-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringStone300?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringStone400></Box> // default with is 1
     * <Box ringStone400-2></Box> // ring with is 2
     * <Box ringStone400--T20></Box> // transparentize color
     * <Box ringStone400--O20></Box> // opacify color
     * <Box ringStone400--L20></Box> // lighten color
     * <Box ringStone400--D20></Box> // darken color
     * <Box ringStone400-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringStone400?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringStone500></Box> // default with is 1
     * <Box ringStone500-2></Box> // ring with is 2
     * <Box ringStone500--T20></Box> // transparentize color
     * <Box ringStone500--O20></Box> // opacify color
     * <Box ringStone500--L20></Box> // lighten color
     * <Box ringStone500--D20></Box> // darken color
     * <Box ringStone500-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringStone500?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringStone600></Box> // default with is 1
     * <Box ringStone600-2></Box> // ring with is 2
     * <Box ringStone600--T20></Box> // transparentize color
     * <Box ringStone600--O20></Box> // opacify color
     * <Box ringStone600--L20></Box> // lighten color
     * <Box ringStone600--D20></Box> // darken color
     * <Box ringStone600-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringStone600?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringStone700></Box> // default with is 1
     * <Box ringStone700-2></Box> // ring with is 2
     * <Box ringStone700--T20></Box> // transparentize color
     * <Box ringStone700--O20></Box> // opacify color
     * <Box ringStone700--L20></Box> // lighten color
     * <Box ringStone700--D20></Box> // darken color
     * <Box ringStone700-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringStone700?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringStone800></Box> // default with is 1
     * <Box ringStone800-2></Box> // ring with is 2
     * <Box ringStone800--T20></Box> // transparentize color
     * <Box ringStone800--O20></Box> // opacify color
     * <Box ringStone800--L20></Box> // lighten color
     * <Box ringStone800--D20></Box> // darken color
     * <Box ringStone800-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringStone800?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringStone900></Box> // default with is 1
     * <Box ringStone900-2></Box> // ring with is 2
     * <Box ringStone900--T20></Box> // transparentize color
     * <Box ringStone900--O20></Box> // opacify color
     * <Box ringStone900--L20></Box> // lighten color
     * <Box ringStone900--D20></Box> // darken color
     * <Box ringStone900-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringStone900?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringRed50></Box> // default with is 1
     * <Box ringRed50-2></Box> // ring with is 2
     * <Box ringRed50--T20></Box> // transparentize color
     * <Box ringRed50--O20></Box> // opacify color
     * <Box ringRed50--L20></Box> // lighten color
     * <Box ringRed50--D20></Box> // darken color
     * <Box ringRed50-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringRed50?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringRed100></Box> // default with is 1
     * <Box ringRed100-2></Box> // ring with is 2
     * <Box ringRed100--T20></Box> // transparentize color
     * <Box ringRed100--O20></Box> // opacify color
     * <Box ringRed100--L20></Box> // lighten color
     * <Box ringRed100--D20></Box> // darken color
     * <Box ringRed100-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringRed100?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringRed200></Box> // default with is 1
     * <Box ringRed200-2></Box> // ring with is 2
     * <Box ringRed200--T20></Box> // transparentize color
     * <Box ringRed200--O20></Box> // opacify color
     * <Box ringRed200--L20></Box> // lighten color
     * <Box ringRed200--D20></Box> // darken color
     * <Box ringRed200-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringRed200?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringRed300></Box> // default with is 1
     * <Box ringRed300-2></Box> // ring with is 2
     * <Box ringRed300--T20></Box> // transparentize color
     * <Box ringRed300--O20></Box> // opacify color
     * <Box ringRed300--L20></Box> // lighten color
     * <Box ringRed300--D20></Box> // darken color
     * <Box ringRed300-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringRed300?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringRed400></Box> // default with is 1
     * <Box ringRed400-2></Box> // ring with is 2
     * <Box ringRed400--T20></Box> // transparentize color
     * <Box ringRed400--O20></Box> // opacify color
     * <Box ringRed400--L20></Box> // lighten color
     * <Box ringRed400--D20></Box> // darken color
     * <Box ringRed400-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringRed400?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringRed500></Box> // default with is 1
     * <Box ringRed500-2></Box> // ring with is 2
     * <Box ringRed500--T20></Box> // transparentize color
     * <Box ringRed500--O20></Box> // opacify color
     * <Box ringRed500--L20></Box> // lighten color
     * <Box ringRed500--D20></Box> // darken color
     * <Box ringRed500-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringRed500?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringRed600></Box> // default with is 1
     * <Box ringRed600-2></Box> // ring with is 2
     * <Box ringRed600--T20></Box> // transparentize color
     * <Box ringRed600--O20></Box> // opacify color
     * <Box ringRed600--L20></Box> // lighten color
     * <Box ringRed600--D20></Box> // darken color
     * <Box ringRed600-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringRed600?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringRed700></Box> // default with is 1
     * <Box ringRed700-2></Box> // ring with is 2
     * <Box ringRed700--T20></Box> // transparentize color
     * <Box ringRed700--O20></Box> // opacify color
     * <Box ringRed700--L20></Box> // lighten color
     * <Box ringRed700--D20></Box> // darken color
     * <Box ringRed700-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringRed700?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringRed800></Box> // default with is 1
     * <Box ringRed800-2></Box> // ring with is 2
     * <Box ringRed800--T20></Box> // transparentize color
     * <Box ringRed800--O20></Box> // opacify color
     * <Box ringRed800--L20></Box> // lighten color
     * <Box ringRed800--D20></Box> // darken color
     * <Box ringRed800-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringRed800?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringRed900></Box> // default with is 1
     * <Box ringRed900-2></Box> // ring with is 2
     * <Box ringRed900--T20></Box> // transparentize color
     * <Box ringRed900--O20></Box> // opacify color
     * <Box ringRed900--L20></Box> // lighten color
     * <Box ringRed900--D20></Box> // darken color
     * <Box ringRed900-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringRed900?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringOrange50></Box> // default with is 1
     * <Box ringOrange50-2></Box> // ring with is 2
     * <Box ringOrange50--T20></Box> // transparentize color
     * <Box ringOrange50--O20></Box> // opacify color
     * <Box ringOrange50--L20></Box> // lighten color
     * <Box ringOrange50--D20></Box> // darken color
     * <Box ringOrange50-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringOrange50?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringOrange100></Box> // default with is 1
     * <Box ringOrange100-2></Box> // ring with is 2
     * <Box ringOrange100--T20></Box> // transparentize color
     * <Box ringOrange100--O20></Box> // opacify color
     * <Box ringOrange100--L20></Box> // lighten color
     * <Box ringOrange100--D20></Box> // darken color
     * <Box ringOrange100-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringOrange100?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringOrange200></Box> // default with is 1
     * <Box ringOrange200-2></Box> // ring with is 2
     * <Box ringOrange200--T20></Box> // transparentize color
     * <Box ringOrange200--O20></Box> // opacify color
     * <Box ringOrange200--L20></Box> // lighten color
     * <Box ringOrange200--D20></Box> // darken color
     * <Box ringOrange200-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringOrange200?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringOrange300></Box> // default with is 1
     * <Box ringOrange300-2></Box> // ring with is 2
     * <Box ringOrange300--T20></Box> // transparentize color
     * <Box ringOrange300--O20></Box> // opacify color
     * <Box ringOrange300--L20></Box> // lighten color
     * <Box ringOrange300--D20></Box> // darken color
     * <Box ringOrange300-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringOrange300?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringOrange400></Box> // default with is 1
     * <Box ringOrange400-2></Box> // ring with is 2
     * <Box ringOrange400--T20></Box> // transparentize color
     * <Box ringOrange400--O20></Box> // opacify color
     * <Box ringOrange400--L20></Box> // lighten color
     * <Box ringOrange400--D20></Box> // darken color
     * <Box ringOrange400-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringOrange400?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringOrange500></Box> // default with is 1
     * <Box ringOrange500-2></Box> // ring with is 2
     * <Box ringOrange500--T20></Box> // transparentize color
     * <Box ringOrange500--O20></Box> // opacify color
     * <Box ringOrange500--L20></Box> // lighten color
     * <Box ringOrange500--D20></Box> // darken color
     * <Box ringOrange500-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringOrange500?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringOrange600></Box> // default with is 1
     * <Box ringOrange600-2></Box> // ring with is 2
     * <Box ringOrange600--T20></Box> // transparentize color
     * <Box ringOrange600--O20></Box> // opacify color
     * <Box ringOrange600--L20></Box> // lighten color
     * <Box ringOrange600--D20></Box> // darken color
     * <Box ringOrange600-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringOrange600?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringOrange700></Box> // default with is 1
     * <Box ringOrange700-2></Box> // ring with is 2
     * <Box ringOrange700--T20></Box> // transparentize color
     * <Box ringOrange700--O20></Box> // opacify color
     * <Box ringOrange700--L20></Box> // lighten color
     * <Box ringOrange700--D20></Box> // darken color
     * <Box ringOrange700-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringOrange700?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringOrange800></Box> // default with is 1
     * <Box ringOrange800-2></Box> // ring with is 2
     * <Box ringOrange800--T20></Box> // transparentize color
     * <Box ringOrange800--O20></Box> // opacify color
     * <Box ringOrange800--L20></Box> // lighten color
     * <Box ringOrange800--D20></Box> // darken color
     * <Box ringOrange800-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringOrange800?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringOrange900></Box> // default with is 1
     * <Box ringOrange900-2></Box> // ring with is 2
     * <Box ringOrange900--T20></Box> // transparentize color
     * <Box ringOrange900--O20></Box> // opacify color
     * <Box ringOrange900--L20></Box> // lighten color
     * <Box ringOrange900--D20></Box> // darken color
     * <Box ringOrange900-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringOrange900?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringAmber50></Box> // default with is 1
     * <Box ringAmber50-2></Box> // ring with is 2
     * <Box ringAmber50--T20></Box> // transparentize color
     * <Box ringAmber50--O20></Box> // opacify color
     * <Box ringAmber50--L20></Box> // lighten color
     * <Box ringAmber50--D20></Box> // darken color
     * <Box ringAmber50-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringAmber50?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringAmber100></Box> // default with is 1
     * <Box ringAmber100-2></Box> // ring with is 2
     * <Box ringAmber100--T20></Box> // transparentize color
     * <Box ringAmber100--O20></Box> // opacify color
     * <Box ringAmber100--L20></Box> // lighten color
     * <Box ringAmber100--D20></Box> // darken color
     * <Box ringAmber100-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringAmber100?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringAmber200></Box> // default with is 1
     * <Box ringAmber200-2></Box> // ring with is 2
     * <Box ringAmber200--T20></Box> // transparentize color
     * <Box ringAmber200--O20></Box> // opacify color
     * <Box ringAmber200--L20></Box> // lighten color
     * <Box ringAmber200--D20></Box> // darken color
     * <Box ringAmber200-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringAmber200?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringAmber300></Box> // default with is 1
     * <Box ringAmber300-2></Box> // ring with is 2
     * <Box ringAmber300--T20></Box> // transparentize color
     * <Box ringAmber300--O20></Box> // opacify color
     * <Box ringAmber300--L20></Box> // lighten color
     * <Box ringAmber300--D20></Box> // darken color
     * <Box ringAmber300-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringAmber300?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringAmber400></Box> // default with is 1
     * <Box ringAmber400-2></Box> // ring with is 2
     * <Box ringAmber400--T20></Box> // transparentize color
     * <Box ringAmber400--O20></Box> // opacify color
     * <Box ringAmber400--L20></Box> // lighten color
     * <Box ringAmber400--D20></Box> // darken color
     * <Box ringAmber400-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringAmber400?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringAmber500></Box> // default with is 1
     * <Box ringAmber500-2></Box> // ring with is 2
     * <Box ringAmber500--T20></Box> // transparentize color
     * <Box ringAmber500--O20></Box> // opacify color
     * <Box ringAmber500--L20></Box> // lighten color
     * <Box ringAmber500--D20></Box> // darken color
     * <Box ringAmber500-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringAmber500?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringAmber600></Box> // default with is 1
     * <Box ringAmber600-2></Box> // ring with is 2
     * <Box ringAmber600--T20></Box> // transparentize color
     * <Box ringAmber600--O20></Box> // opacify color
     * <Box ringAmber600--L20></Box> // lighten color
     * <Box ringAmber600--D20></Box> // darken color
     * <Box ringAmber600-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringAmber600?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringAmber700></Box> // default with is 1
     * <Box ringAmber700-2></Box> // ring with is 2
     * <Box ringAmber700--T20></Box> // transparentize color
     * <Box ringAmber700--O20></Box> // opacify color
     * <Box ringAmber700--L20></Box> // lighten color
     * <Box ringAmber700--D20></Box> // darken color
     * <Box ringAmber700-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringAmber700?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringAmber800></Box> // default with is 1
     * <Box ringAmber800-2></Box> // ring with is 2
     * <Box ringAmber800--T20></Box> // transparentize color
     * <Box ringAmber800--O20></Box> // opacify color
     * <Box ringAmber800--L20></Box> // lighten color
     * <Box ringAmber800--D20></Box> // darken color
     * <Box ringAmber800-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringAmber800?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringAmber900></Box> // default with is 1
     * <Box ringAmber900-2></Box> // ring with is 2
     * <Box ringAmber900--T20></Box> // transparentize color
     * <Box ringAmber900--O20></Box> // opacify color
     * <Box ringAmber900--L20></Box> // lighten color
     * <Box ringAmber900--D20></Box> // darken color
     * <Box ringAmber900-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringAmber900?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringYellow50></Box> // default with is 1
     * <Box ringYellow50-2></Box> // ring with is 2
     * <Box ringYellow50--T20></Box> // transparentize color
     * <Box ringYellow50--O20></Box> // opacify color
     * <Box ringYellow50--L20></Box> // lighten color
     * <Box ringYellow50--D20></Box> // darken color
     * <Box ringYellow50-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringYellow50?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringYellow100></Box> // default with is 1
     * <Box ringYellow100-2></Box> // ring with is 2
     * <Box ringYellow100--T20></Box> // transparentize color
     * <Box ringYellow100--O20></Box> // opacify color
     * <Box ringYellow100--L20></Box> // lighten color
     * <Box ringYellow100--D20></Box> // darken color
     * <Box ringYellow100-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringYellow100?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringYellow200></Box> // default with is 1
     * <Box ringYellow200-2></Box> // ring with is 2
     * <Box ringYellow200--T20></Box> // transparentize color
     * <Box ringYellow200--O20></Box> // opacify color
     * <Box ringYellow200--L20></Box> // lighten color
     * <Box ringYellow200--D20></Box> // darken color
     * <Box ringYellow200-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringYellow200?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringYellow300></Box> // default with is 1
     * <Box ringYellow300-2></Box> // ring with is 2
     * <Box ringYellow300--T20></Box> // transparentize color
     * <Box ringYellow300--O20></Box> // opacify color
     * <Box ringYellow300--L20></Box> // lighten color
     * <Box ringYellow300--D20></Box> // darken color
     * <Box ringYellow300-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringYellow300?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringYellow400></Box> // default with is 1
     * <Box ringYellow400-2></Box> // ring with is 2
     * <Box ringYellow400--T20></Box> // transparentize color
     * <Box ringYellow400--O20></Box> // opacify color
     * <Box ringYellow400--L20></Box> // lighten color
     * <Box ringYellow400--D20></Box> // darken color
     * <Box ringYellow400-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringYellow400?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringYellow500></Box> // default with is 1
     * <Box ringYellow500-2></Box> // ring with is 2
     * <Box ringYellow500--T20></Box> // transparentize color
     * <Box ringYellow500--O20></Box> // opacify color
     * <Box ringYellow500--L20></Box> // lighten color
     * <Box ringYellow500--D20></Box> // darken color
     * <Box ringYellow500-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringYellow500?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringYellow600></Box> // default with is 1
     * <Box ringYellow600-2></Box> // ring with is 2
     * <Box ringYellow600--T20></Box> // transparentize color
     * <Box ringYellow600--O20></Box> // opacify color
     * <Box ringYellow600--L20></Box> // lighten color
     * <Box ringYellow600--D20></Box> // darken color
     * <Box ringYellow600-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringYellow600?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringYellow700></Box> // default with is 1
     * <Box ringYellow700-2></Box> // ring with is 2
     * <Box ringYellow700--T20></Box> // transparentize color
     * <Box ringYellow700--O20></Box> // opacify color
     * <Box ringYellow700--L20></Box> // lighten color
     * <Box ringYellow700--D20></Box> // darken color
     * <Box ringYellow700-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringYellow700?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringYellow800></Box> // default with is 1
     * <Box ringYellow800-2></Box> // ring with is 2
     * <Box ringYellow800--T20></Box> // transparentize color
     * <Box ringYellow800--O20></Box> // opacify color
     * <Box ringYellow800--L20></Box> // lighten color
     * <Box ringYellow800--D20></Box> // darken color
     * <Box ringYellow800-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringYellow800?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringYellow900></Box> // default with is 1
     * <Box ringYellow900-2></Box> // ring with is 2
     * <Box ringYellow900--T20></Box> // transparentize color
     * <Box ringYellow900--O20></Box> // opacify color
     * <Box ringYellow900--L20></Box> // lighten color
     * <Box ringYellow900--D20></Box> // darken color
     * <Box ringYellow900-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringYellow900?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringLime50></Box> // default with is 1
     * <Box ringLime50-2></Box> // ring with is 2
     * <Box ringLime50--T20></Box> // transparentize color
     * <Box ringLime50--O20></Box> // opacify color
     * <Box ringLime50--L20></Box> // lighten color
     * <Box ringLime50--D20></Box> // darken color
     * <Box ringLime50-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringLime50?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringLime100></Box> // default with is 1
     * <Box ringLime100-2></Box> // ring with is 2
     * <Box ringLime100--T20></Box> // transparentize color
     * <Box ringLime100--O20></Box> // opacify color
     * <Box ringLime100--L20></Box> // lighten color
     * <Box ringLime100--D20></Box> // darken color
     * <Box ringLime100-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringLime100?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringLime200></Box> // default with is 1
     * <Box ringLime200-2></Box> // ring with is 2
     * <Box ringLime200--T20></Box> // transparentize color
     * <Box ringLime200--O20></Box> // opacify color
     * <Box ringLime200--L20></Box> // lighten color
     * <Box ringLime200--D20></Box> // darken color
     * <Box ringLime200-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringLime200?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringLime300></Box> // default with is 1
     * <Box ringLime300-2></Box> // ring with is 2
     * <Box ringLime300--T20></Box> // transparentize color
     * <Box ringLime300--O20></Box> // opacify color
     * <Box ringLime300--L20></Box> // lighten color
     * <Box ringLime300--D20></Box> // darken color
     * <Box ringLime300-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringLime300?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringLime400></Box> // default with is 1
     * <Box ringLime400-2></Box> // ring with is 2
     * <Box ringLime400--T20></Box> // transparentize color
     * <Box ringLime400--O20></Box> // opacify color
     * <Box ringLime400--L20></Box> // lighten color
     * <Box ringLime400--D20></Box> // darken color
     * <Box ringLime400-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringLime400?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringLime500></Box> // default with is 1
     * <Box ringLime500-2></Box> // ring with is 2
     * <Box ringLime500--T20></Box> // transparentize color
     * <Box ringLime500--O20></Box> // opacify color
     * <Box ringLime500--L20></Box> // lighten color
     * <Box ringLime500--D20></Box> // darken color
     * <Box ringLime500-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringLime500?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringLime600></Box> // default with is 1
     * <Box ringLime600-2></Box> // ring with is 2
     * <Box ringLime600--T20></Box> // transparentize color
     * <Box ringLime600--O20></Box> // opacify color
     * <Box ringLime600--L20></Box> // lighten color
     * <Box ringLime600--D20></Box> // darken color
     * <Box ringLime600-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringLime600?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringLime700></Box> // default with is 1
     * <Box ringLime700-2></Box> // ring with is 2
     * <Box ringLime700--T20></Box> // transparentize color
     * <Box ringLime700--O20></Box> // opacify color
     * <Box ringLime700--L20></Box> // lighten color
     * <Box ringLime700--D20></Box> // darken color
     * <Box ringLime700-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringLime700?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringLime800></Box> // default with is 1
     * <Box ringLime800-2></Box> // ring with is 2
     * <Box ringLime800--T20></Box> // transparentize color
     * <Box ringLime800--O20></Box> // opacify color
     * <Box ringLime800--L20></Box> // lighten color
     * <Box ringLime800--D20></Box> // darken color
     * <Box ringLime800-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringLime800?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringLime900></Box> // default with is 1
     * <Box ringLime900-2></Box> // ring with is 2
     * <Box ringLime900--T20></Box> // transparentize color
     * <Box ringLime900--O20></Box> // opacify color
     * <Box ringLime900--L20></Box> // lighten color
     * <Box ringLime900--D20></Box> // darken color
     * <Box ringLime900-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringLime900?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringGreen50></Box> // default with is 1
     * <Box ringGreen50-2></Box> // ring with is 2
     * <Box ringGreen50--T20></Box> // transparentize color
     * <Box ringGreen50--O20></Box> // opacify color
     * <Box ringGreen50--L20></Box> // lighten color
     * <Box ringGreen50--D20></Box> // darken color
     * <Box ringGreen50-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringGreen50?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringGreen100></Box> // default with is 1
     * <Box ringGreen100-2></Box> // ring with is 2
     * <Box ringGreen100--T20></Box> // transparentize color
     * <Box ringGreen100--O20></Box> // opacify color
     * <Box ringGreen100--L20></Box> // lighten color
     * <Box ringGreen100--D20></Box> // darken color
     * <Box ringGreen100-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringGreen100?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringGreen200></Box> // default with is 1
     * <Box ringGreen200-2></Box> // ring with is 2
     * <Box ringGreen200--T20></Box> // transparentize color
     * <Box ringGreen200--O20></Box> // opacify color
     * <Box ringGreen200--L20></Box> // lighten color
     * <Box ringGreen200--D20></Box> // darken color
     * <Box ringGreen200-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringGreen200?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringGreen300></Box> // default with is 1
     * <Box ringGreen300-2></Box> // ring with is 2
     * <Box ringGreen300--T20></Box> // transparentize color
     * <Box ringGreen300--O20></Box> // opacify color
     * <Box ringGreen300--L20></Box> // lighten color
     * <Box ringGreen300--D20></Box> // darken color
     * <Box ringGreen300-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringGreen300?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringGreen400></Box> // default with is 1
     * <Box ringGreen400-2></Box> // ring with is 2
     * <Box ringGreen400--T20></Box> // transparentize color
     * <Box ringGreen400--O20></Box> // opacify color
     * <Box ringGreen400--L20></Box> // lighten color
     * <Box ringGreen400--D20></Box> // darken color
     * <Box ringGreen400-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringGreen400?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringGreen500></Box> // default with is 1
     * <Box ringGreen500-2></Box> // ring with is 2
     * <Box ringGreen500--T20></Box> // transparentize color
     * <Box ringGreen500--O20></Box> // opacify color
     * <Box ringGreen500--L20></Box> // lighten color
     * <Box ringGreen500--D20></Box> // darken color
     * <Box ringGreen500-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringGreen500?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringGreen600></Box> // default with is 1
     * <Box ringGreen600-2></Box> // ring with is 2
     * <Box ringGreen600--T20></Box> // transparentize color
     * <Box ringGreen600--O20></Box> // opacify color
     * <Box ringGreen600--L20></Box> // lighten color
     * <Box ringGreen600--D20></Box> // darken color
     * <Box ringGreen600-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringGreen600?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringGreen700></Box> // default with is 1
     * <Box ringGreen700-2></Box> // ring with is 2
     * <Box ringGreen700--T20></Box> // transparentize color
     * <Box ringGreen700--O20></Box> // opacify color
     * <Box ringGreen700--L20></Box> // lighten color
     * <Box ringGreen700--D20></Box> // darken color
     * <Box ringGreen700-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringGreen700?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringGreen800></Box> // default with is 1
     * <Box ringGreen800-2></Box> // ring with is 2
     * <Box ringGreen800--T20></Box> // transparentize color
     * <Box ringGreen800--O20></Box> // opacify color
     * <Box ringGreen800--L20></Box> // lighten color
     * <Box ringGreen800--D20></Box> // darken color
     * <Box ringGreen800-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringGreen800?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringGreen900></Box> // default with is 1
     * <Box ringGreen900-2></Box> // ring with is 2
     * <Box ringGreen900--T20></Box> // transparentize color
     * <Box ringGreen900--O20></Box> // opacify color
     * <Box ringGreen900--L20></Box> // lighten color
     * <Box ringGreen900--D20></Box> // darken color
     * <Box ringGreen900-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringGreen900?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringEmerald50></Box> // default with is 1
     * <Box ringEmerald50-2></Box> // ring with is 2
     * <Box ringEmerald50--T20></Box> // transparentize color
     * <Box ringEmerald50--O20></Box> // opacify color
     * <Box ringEmerald50--L20></Box> // lighten color
     * <Box ringEmerald50--D20></Box> // darken color
     * <Box ringEmerald50-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringEmerald50?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringEmerald100></Box> // default with is 1
     * <Box ringEmerald100-2></Box> // ring with is 2
     * <Box ringEmerald100--T20></Box> // transparentize color
     * <Box ringEmerald100--O20></Box> // opacify color
     * <Box ringEmerald100--L20></Box> // lighten color
     * <Box ringEmerald100--D20></Box> // darken color
     * <Box ringEmerald100-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringEmerald100?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringEmerald200></Box> // default with is 1
     * <Box ringEmerald200-2></Box> // ring with is 2
     * <Box ringEmerald200--T20></Box> // transparentize color
     * <Box ringEmerald200--O20></Box> // opacify color
     * <Box ringEmerald200--L20></Box> // lighten color
     * <Box ringEmerald200--D20></Box> // darken color
     * <Box ringEmerald200-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringEmerald200?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringEmerald300></Box> // default with is 1
     * <Box ringEmerald300-2></Box> // ring with is 2
     * <Box ringEmerald300--T20></Box> // transparentize color
     * <Box ringEmerald300--O20></Box> // opacify color
     * <Box ringEmerald300--L20></Box> // lighten color
     * <Box ringEmerald300--D20></Box> // darken color
     * <Box ringEmerald300-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringEmerald300?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringEmerald400></Box> // default with is 1
     * <Box ringEmerald400-2></Box> // ring with is 2
     * <Box ringEmerald400--T20></Box> // transparentize color
     * <Box ringEmerald400--O20></Box> // opacify color
     * <Box ringEmerald400--L20></Box> // lighten color
     * <Box ringEmerald400--D20></Box> // darken color
     * <Box ringEmerald400-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringEmerald400?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringEmerald500></Box> // default with is 1
     * <Box ringEmerald500-2></Box> // ring with is 2
     * <Box ringEmerald500--T20></Box> // transparentize color
     * <Box ringEmerald500--O20></Box> // opacify color
     * <Box ringEmerald500--L20></Box> // lighten color
     * <Box ringEmerald500--D20></Box> // darken color
     * <Box ringEmerald500-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringEmerald500?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringEmerald600></Box> // default with is 1
     * <Box ringEmerald600-2></Box> // ring with is 2
     * <Box ringEmerald600--T20></Box> // transparentize color
     * <Box ringEmerald600--O20></Box> // opacify color
     * <Box ringEmerald600--L20></Box> // lighten color
     * <Box ringEmerald600--D20></Box> // darken color
     * <Box ringEmerald600-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringEmerald600?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringEmerald700></Box> // default with is 1
     * <Box ringEmerald700-2></Box> // ring with is 2
     * <Box ringEmerald700--T20></Box> // transparentize color
     * <Box ringEmerald700--O20></Box> // opacify color
     * <Box ringEmerald700--L20></Box> // lighten color
     * <Box ringEmerald700--D20></Box> // darken color
     * <Box ringEmerald700-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringEmerald700?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringEmerald800></Box> // default with is 1
     * <Box ringEmerald800-2></Box> // ring with is 2
     * <Box ringEmerald800--T20></Box> // transparentize color
     * <Box ringEmerald800--O20></Box> // opacify color
     * <Box ringEmerald800--L20></Box> // lighten color
     * <Box ringEmerald800--D20></Box> // darken color
     * <Box ringEmerald800-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringEmerald800?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringEmerald900></Box> // default with is 1
     * <Box ringEmerald900-2></Box> // ring with is 2
     * <Box ringEmerald900--T20></Box> // transparentize color
     * <Box ringEmerald900--O20></Box> // opacify color
     * <Box ringEmerald900--L20></Box> // lighten color
     * <Box ringEmerald900--D20></Box> // darken color
     * <Box ringEmerald900-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringEmerald900?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringTeal50></Box> // default with is 1
     * <Box ringTeal50-2></Box> // ring with is 2
     * <Box ringTeal50--T20></Box> // transparentize color
     * <Box ringTeal50--O20></Box> // opacify color
     * <Box ringTeal50--L20></Box> // lighten color
     * <Box ringTeal50--D20></Box> // darken color
     * <Box ringTeal50-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringTeal50?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringTeal100></Box> // default with is 1
     * <Box ringTeal100-2></Box> // ring with is 2
     * <Box ringTeal100--T20></Box> // transparentize color
     * <Box ringTeal100--O20></Box> // opacify color
     * <Box ringTeal100--L20></Box> // lighten color
     * <Box ringTeal100--D20></Box> // darken color
     * <Box ringTeal100-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringTeal100?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringTeal200></Box> // default with is 1
     * <Box ringTeal200-2></Box> // ring with is 2
     * <Box ringTeal200--T20></Box> // transparentize color
     * <Box ringTeal200--O20></Box> // opacify color
     * <Box ringTeal200--L20></Box> // lighten color
     * <Box ringTeal200--D20></Box> // darken color
     * <Box ringTeal200-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringTeal200?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringTeal300></Box> // default with is 1
     * <Box ringTeal300-2></Box> // ring with is 2
     * <Box ringTeal300--T20></Box> // transparentize color
     * <Box ringTeal300--O20></Box> // opacify color
     * <Box ringTeal300--L20></Box> // lighten color
     * <Box ringTeal300--D20></Box> // darken color
     * <Box ringTeal300-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringTeal300?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringTeal400></Box> // default with is 1
     * <Box ringTeal400-2></Box> // ring with is 2
     * <Box ringTeal400--T20></Box> // transparentize color
     * <Box ringTeal400--O20></Box> // opacify color
     * <Box ringTeal400--L20></Box> // lighten color
     * <Box ringTeal400--D20></Box> // darken color
     * <Box ringTeal400-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringTeal400?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringTeal500></Box> // default with is 1
     * <Box ringTeal500-2></Box> // ring with is 2
     * <Box ringTeal500--T20></Box> // transparentize color
     * <Box ringTeal500--O20></Box> // opacify color
     * <Box ringTeal500--L20></Box> // lighten color
     * <Box ringTeal500--D20></Box> // darken color
     * <Box ringTeal500-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringTeal500?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringTeal600></Box> // default with is 1
     * <Box ringTeal600-2></Box> // ring with is 2
     * <Box ringTeal600--T20></Box> // transparentize color
     * <Box ringTeal600--O20></Box> // opacify color
     * <Box ringTeal600--L20></Box> // lighten color
     * <Box ringTeal600--D20></Box> // darken color
     * <Box ringTeal600-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringTeal600?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringTeal700></Box> // default with is 1
     * <Box ringTeal700-2></Box> // ring with is 2
     * <Box ringTeal700--T20></Box> // transparentize color
     * <Box ringTeal700--O20></Box> // opacify color
     * <Box ringTeal700--L20></Box> // lighten color
     * <Box ringTeal700--D20></Box> // darken color
     * <Box ringTeal700-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringTeal700?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringTeal800></Box> // default with is 1
     * <Box ringTeal800-2></Box> // ring with is 2
     * <Box ringTeal800--T20></Box> // transparentize color
     * <Box ringTeal800--O20></Box> // opacify color
     * <Box ringTeal800--L20></Box> // lighten color
     * <Box ringTeal800--D20></Box> // darken color
     * <Box ringTeal800-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringTeal800?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringTeal900></Box> // default with is 1
     * <Box ringTeal900-2></Box> // ring with is 2
     * <Box ringTeal900--T20></Box> // transparentize color
     * <Box ringTeal900--O20></Box> // opacify color
     * <Box ringTeal900--L20></Box> // lighten color
     * <Box ringTeal900--D20></Box> // darken color
     * <Box ringTeal900-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringTeal900?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringCyan50></Box> // default with is 1
     * <Box ringCyan50-2></Box> // ring with is 2
     * <Box ringCyan50--T20></Box> // transparentize color
     * <Box ringCyan50--O20></Box> // opacify color
     * <Box ringCyan50--L20></Box> // lighten color
     * <Box ringCyan50--D20></Box> // darken color
     * <Box ringCyan50-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringCyan50?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringCyan100></Box> // default with is 1
     * <Box ringCyan100-2></Box> // ring with is 2
     * <Box ringCyan100--T20></Box> // transparentize color
     * <Box ringCyan100--O20></Box> // opacify color
     * <Box ringCyan100--L20></Box> // lighten color
     * <Box ringCyan100--D20></Box> // darken color
     * <Box ringCyan100-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringCyan100?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringCyan200></Box> // default with is 1
     * <Box ringCyan200-2></Box> // ring with is 2
     * <Box ringCyan200--T20></Box> // transparentize color
     * <Box ringCyan200--O20></Box> // opacify color
     * <Box ringCyan200--L20></Box> // lighten color
     * <Box ringCyan200--D20></Box> // darken color
     * <Box ringCyan200-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringCyan200?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringCyan300></Box> // default with is 1
     * <Box ringCyan300-2></Box> // ring with is 2
     * <Box ringCyan300--T20></Box> // transparentize color
     * <Box ringCyan300--O20></Box> // opacify color
     * <Box ringCyan300--L20></Box> // lighten color
     * <Box ringCyan300--D20></Box> // darken color
     * <Box ringCyan300-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringCyan300?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringCyan400></Box> // default with is 1
     * <Box ringCyan400-2></Box> // ring with is 2
     * <Box ringCyan400--T20></Box> // transparentize color
     * <Box ringCyan400--O20></Box> // opacify color
     * <Box ringCyan400--L20></Box> // lighten color
     * <Box ringCyan400--D20></Box> // darken color
     * <Box ringCyan400-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringCyan400?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringCyan500></Box> // default with is 1
     * <Box ringCyan500-2></Box> // ring with is 2
     * <Box ringCyan500--T20></Box> // transparentize color
     * <Box ringCyan500--O20></Box> // opacify color
     * <Box ringCyan500--L20></Box> // lighten color
     * <Box ringCyan500--D20></Box> // darken color
     * <Box ringCyan500-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringCyan500?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringCyan600></Box> // default with is 1
     * <Box ringCyan600-2></Box> // ring with is 2
     * <Box ringCyan600--T20></Box> // transparentize color
     * <Box ringCyan600--O20></Box> // opacify color
     * <Box ringCyan600--L20></Box> // lighten color
     * <Box ringCyan600--D20></Box> // darken color
     * <Box ringCyan600-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringCyan600?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringCyan700></Box> // default with is 1
     * <Box ringCyan700-2></Box> // ring with is 2
     * <Box ringCyan700--T20></Box> // transparentize color
     * <Box ringCyan700--O20></Box> // opacify color
     * <Box ringCyan700--L20></Box> // lighten color
     * <Box ringCyan700--D20></Box> // darken color
     * <Box ringCyan700-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringCyan700?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringCyan800></Box> // default with is 1
     * <Box ringCyan800-2></Box> // ring with is 2
     * <Box ringCyan800--T20></Box> // transparentize color
     * <Box ringCyan800--O20></Box> // opacify color
     * <Box ringCyan800--L20></Box> // lighten color
     * <Box ringCyan800--D20></Box> // darken color
     * <Box ringCyan800-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringCyan800?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringCyan900></Box> // default with is 1
     * <Box ringCyan900-2></Box> // ring with is 2
     * <Box ringCyan900--T20></Box> // transparentize color
     * <Box ringCyan900--O20></Box> // opacify color
     * <Box ringCyan900--L20></Box> // lighten color
     * <Box ringCyan900--D20></Box> // darken color
     * <Box ringCyan900-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringCyan900?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringSky50></Box> // default with is 1
     * <Box ringSky50-2></Box> // ring with is 2
     * <Box ringSky50--T20></Box> // transparentize color
     * <Box ringSky50--O20></Box> // opacify color
     * <Box ringSky50--L20></Box> // lighten color
     * <Box ringSky50--D20></Box> // darken color
     * <Box ringSky50-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringSky50?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringSky100></Box> // default with is 1
     * <Box ringSky100-2></Box> // ring with is 2
     * <Box ringSky100--T20></Box> // transparentize color
     * <Box ringSky100--O20></Box> // opacify color
     * <Box ringSky100--L20></Box> // lighten color
     * <Box ringSky100--D20></Box> // darken color
     * <Box ringSky100-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringSky100?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringSky200></Box> // default with is 1
     * <Box ringSky200-2></Box> // ring with is 2
     * <Box ringSky200--T20></Box> // transparentize color
     * <Box ringSky200--O20></Box> // opacify color
     * <Box ringSky200--L20></Box> // lighten color
     * <Box ringSky200--D20></Box> // darken color
     * <Box ringSky200-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringSky200?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringSky300></Box> // default with is 1
     * <Box ringSky300-2></Box> // ring with is 2
     * <Box ringSky300--T20></Box> // transparentize color
     * <Box ringSky300--O20></Box> // opacify color
     * <Box ringSky300--L20></Box> // lighten color
     * <Box ringSky300--D20></Box> // darken color
     * <Box ringSky300-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringSky300?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringSky400></Box> // default with is 1
     * <Box ringSky400-2></Box> // ring with is 2
     * <Box ringSky400--T20></Box> // transparentize color
     * <Box ringSky400--O20></Box> // opacify color
     * <Box ringSky400--L20></Box> // lighten color
     * <Box ringSky400--D20></Box> // darken color
     * <Box ringSky400-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringSky400?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringSky500></Box> // default with is 1
     * <Box ringSky500-2></Box> // ring with is 2
     * <Box ringSky500--T20></Box> // transparentize color
     * <Box ringSky500--O20></Box> // opacify color
     * <Box ringSky500--L20></Box> // lighten color
     * <Box ringSky500--D20></Box> // darken color
     * <Box ringSky500-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringSky500?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringSky600></Box> // default with is 1
     * <Box ringSky600-2></Box> // ring with is 2
     * <Box ringSky600--T20></Box> // transparentize color
     * <Box ringSky600--O20></Box> // opacify color
     * <Box ringSky600--L20></Box> // lighten color
     * <Box ringSky600--D20></Box> // darken color
     * <Box ringSky600-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringSky600?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringSky700></Box> // default with is 1
     * <Box ringSky700-2></Box> // ring with is 2
     * <Box ringSky700--T20></Box> // transparentize color
     * <Box ringSky700--O20></Box> // opacify color
     * <Box ringSky700--L20></Box> // lighten color
     * <Box ringSky700--D20></Box> // darken color
     * <Box ringSky700-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringSky700?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringSky800></Box> // default with is 1
     * <Box ringSky800-2></Box> // ring with is 2
     * <Box ringSky800--T20></Box> // transparentize color
     * <Box ringSky800--O20></Box> // opacify color
     * <Box ringSky800--L20></Box> // lighten color
     * <Box ringSky800--D20></Box> // darken color
     * <Box ringSky800-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringSky800?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringSky900></Box> // default with is 1
     * <Box ringSky900-2></Box> // ring with is 2
     * <Box ringSky900--T20></Box> // transparentize color
     * <Box ringSky900--O20></Box> // opacify color
     * <Box ringSky900--L20></Box> // lighten color
     * <Box ringSky900--D20></Box> // darken color
     * <Box ringSky900-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringSky900?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringBlue50></Box> // default with is 1
     * <Box ringBlue50-2></Box> // ring with is 2
     * <Box ringBlue50--T20></Box> // transparentize color
     * <Box ringBlue50--O20></Box> // opacify color
     * <Box ringBlue50--L20></Box> // lighten color
     * <Box ringBlue50--D20></Box> // darken color
     * <Box ringBlue50-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringBlue50?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringBlue100></Box> // default with is 1
     * <Box ringBlue100-2></Box> // ring with is 2
     * <Box ringBlue100--T20></Box> // transparentize color
     * <Box ringBlue100--O20></Box> // opacify color
     * <Box ringBlue100--L20></Box> // lighten color
     * <Box ringBlue100--D20></Box> // darken color
     * <Box ringBlue100-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringBlue100?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringBlue200></Box> // default with is 1
     * <Box ringBlue200-2></Box> // ring with is 2
     * <Box ringBlue200--T20></Box> // transparentize color
     * <Box ringBlue200--O20></Box> // opacify color
     * <Box ringBlue200--L20></Box> // lighten color
     * <Box ringBlue200--D20></Box> // darken color
     * <Box ringBlue200-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringBlue200?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringBlue300></Box> // default with is 1
     * <Box ringBlue300-2></Box> // ring with is 2
     * <Box ringBlue300--T20></Box> // transparentize color
     * <Box ringBlue300--O20></Box> // opacify color
     * <Box ringBlue300--L20></Box> // lighten color
     * <Box ringBlue300--D20></Box> // darken color
     * <Box ringBlue300-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringBlue300?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringBlue400></Box> // default with is 1
     * <Box ringBlue400-2></Box> // ring with is 2
     * <Box ringBlue400--T20></Box> // transparentize color
     * <Box ringBlue400--O20></Box> // opacify color
     * <Box ringBlue400--L20></Box> // lighten color
     * <Box ringBlue400--D20></Box> // darken color
     * <Box ringBlue400-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringBlue400?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringBlue500></Box> // default with is 1
     * <Box ringBlue500-2></Box> // ring with is 2
     * <Box ringBlue500--T20></Box> // transparentize color
     * <Box ringBlue500--O20></Box> // opacify color
     * <Box ringBlue500--L20></Box> // lighten color
     * <Box ringBlue500--D20></Box> // darken color
     * <Box ringBlue500-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringBlue500?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringBlue600></Box> // default with is 1
     * <Box ringBlue600-2></Box> // ring with is 2
     * <Box ringBlue600--T20></Box> // transparentize color
     * <Box ringBlue600--O20></Box> // opacify color
     * <Box ringBlue600--L20></Box> // lighten color
     * <Box ringBlue600--D20></Box> // darken color
     * <Box ringBlue600-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringBlue600?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringBlue700></Box> // default with is 1
     * <Box ringBlue700-2></Box> // ring with is 2
     * <Box ringBlue700--T20></Box> // transparentize color
     * <Box ringBlue700--O20></Box> // opacify color
     * <Box ringBlue700--L20></Box> // lighten color
     * <Box ringBlue700--D20></Box> // darken color
     * <Box ringBlue700-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringBlue700?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringBlue800></Box> // default with is 1
     * <Box ringBlue800-2></Box> // ring with is 2
     * <Box ringBlue800--T20></Box> // transparentize color
     * <Box ringBlue800--O20></Box> // opacify color
     * <Box ringBlue800--L20></Box> // lighten color
     * <Box ringBlue800--D20></Box> // darken color
     * <Box ringBlue800-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringBlue800?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringBlue900></Box> // default with is 1
     * <Box ringBlue900-2></Box> // ring with is 2
     * <Box ringBlue900--T20></Box> // transparentize color
     * <Box ringBlue900--O20></Box> // opacify color
     * <Box ringBlue900--L20></Box> // lighten color
     * <Box ringBlue900--D20></Box> // darken color
     * <Box ringBlue900-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringBlue900?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringIndigo50></Box> // default with is 1
     * <Box ringIndigo50-2></Box> // ring with is 2
     * <Box ringIndigo50--T20></Box> // transparentize color
     * <Box ringIndigo50--O20></Box> // opacify color
     * <Box ringIndigo50--L20></Box> // lighten color
     * <Box ringIndigo50--D20></Box> // darken color
     * <Box ringIndigo50-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringIndigo50?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringIndigo100></Box> // default with is 1
     * <Box ringIndigo100-2></Box> // ring with is 2
     * <Box ringIndigo100--T20></Box> // transparentize color
     * <Box ringIndigo100--O20></Box> // opacify color
     * <Box ringIndigo100--L20></Box> // lighten color
     * <Box ringIndigo100--D20></Box> // darken color
     * <Box ringIndigo100-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringIndigo100?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringIndigo200></Box> // default with is 1
     * <Box ringIndigo200-2></Box> // ring with is 2
     * <Box ringIndigo200--T20></Box> // transparentize color
     * <Box ringIndigo200--O20></Box> // opacify color
     * <Box ringIndigo200--L20></Box> // lighten color
     * <Box ringIndigo200--D20></Box> // darken color
     * <Box ringIndigo200-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringIndigo200?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringIndigo300></Box> // default with is 1
     * <Box ringIndigo300-2></Box> // ring with is 2
     * <Box ringIndigo300--T20></Box> // transparentize color
     * <Box ringIndigo300--O20></Box> // opacify color
     * <Box ringIndigo300--L20></Box> // lighten color
     * <Box ringIndigo300--D20></Box> // darken color
     * <Box ringIndigo300-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringIndigo300?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringIndigo400></Box> // default with is 1
     * <Box ringIndigo400-2></Box> // ring with is 2
     * <Box ringIndigo400--T20></Box> // transparentize color
     * <Box ringIndigo400--O20></Box> // opacify color
     * <Box ringIndigo400--L20></Box> // lighten color
     * <Box ringIndigo400--D20></Box> // darken color
     * <Box ringIndigo400-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringIndigo400?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringIndigo500></Box> // default with is 1
     * <Box ringIndigo500-2></Box> // ring with is 2
     * <Box ringIndigo500--T20></Box> // transparentize color
     * <Box ringIndigo500--O20></Box> // opacify color
     * <Box ringIndigo500--L20></Box> // lighten color
     * <Box ringIndigo500--D20></Box> // darken color
     * <Box ringIndigo500-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringIndigo500?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringIndigo600></Box> // default with is 1
     * <Box ringIndigo600-2></Box> // ring with is 2
     * <Box ringIndigo600--T20></Box> // transparentize color
     * <Box ringIndigo600--O20></Box> // opacify color
     * <Box ringIndigo600--L20></Box> // lighten color
     * <Box ringIndigo600--D20></Box> // darken color
     * <Box ringIndigo600-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringIndigo600?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringIndigo700></Box> // default with is 1
     * <Box ringIndigo700-2></Box> // ring with is 2
     * <Box ringIndigo700--T20></Box> // transparentize color
     * <Box ringIndigo700--O20></Box> // opacify color
     * <Box ringIndigo700--L20></Box> // lighten color
     * <Box ringIndigo700--D20></Box> // darken color
     * <Box ringIndigo700-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringIndigo700?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringIndigo800></Box> // default with is 1
     * <Box ringIndigo800-2></Box> // ring with is 2
     * <Box ringIndigo800--T20></Box> // transparentize color
     * <Box ringIndigo800--O20></Box> // opacify color
     * <Box ringIndigo800--L20></Box> // lighten color
     * <Box ringIndigo800--D20></Box> // darken color
     * <Box ringIndigo800-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringIndigo800?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringIndigo900></Box> // default with is 1
     * <Box ringIndigo900-2></Box> // ring with is 2
     * <Box ringIndigo900--T20></Box> // transparentize color
     * <Box ringIndigo900--O20></Box> // opacify color
     * <Box ringIndigo900--L20></Box> // lighten color
     * <Box ringIndigo900--D20></Box> // darken color
     * <Box ringIndigo900-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringIndigo900?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringViolet50></Box> // default with is 1
     * <Box ringViolet50-2></Box> // ring with is 2
     * <Box ringViolet50--T20></Box> // transparentize color
     * <Box ringViolet50--O20></Box> // opacify color
     * <Box ringViolet50--L20></Box> // lighten color
     * <Box ringViolet50--D20></Box> // darken color
     * <Box ringViolet50-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringViolet50?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringViolet100></Box> // default with is 1
     * <Box ringViolet100-2></Box> // ring with is 2
     * <Box ringViolet100--T20></Box> // transparentize color
     * <Box ringViolet100--O20></Box> // opacify color
     * <Box ringViolet100--L20></Box> // lighten color
     * <Box ringViolet100--D20></Box> // darken color
     * <Box ringViolet100-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringViolet100?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringViolet200></Box> // default with is 1
     * <Box ringViolet200-2></Box> // ring with is 2
     * <Box ringViolet200--T20></Box> // transparentize color
     * <Box ringViolet200--O20></Box> // opacify color
     * <Box ringViolet200--L20></Box> // lighten color
     * <Box ringViolet200--D20></Box> // darken color
     * <Box ringViolet200-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringViolet200?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringViolet300></Box> // default with is 1
     * <Box ringViolet300-2></Box> // ring with is 2
     * <Box ringViolet300--T20></Box> // transparentize color
     * <Box ringViolet300--O20></Box> // opacify color
     * <Box ringViolet300--L20></Box> // lighten color
     * <Box ringViolet300--D20></Box> // darken color
     * <Box ringViolet300-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringViolet300?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringViolet400></Box> // default with is 1
     * <Box ringViolet400-2></Box> // ring with is 2
     * <Box ringViolet400--T20></Box> // transparentize color
     * <Box ringViolet400--O20></Box> // opacify color
     * <Box ringViolet400--L20></Box> // lighten color
     * <Box ringViolet400--D20></Box> // darken color
     * <Box ringViolet400-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringViolet400?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringViolet500></Box> // default with is 1
     * <Box ringViolet500-2></Box> // ring with is 2
     * <Box ringViolet500--T20></Box> // transparentize color
     * <Box ringViolet500--O20></Box> // opacify color
     * <Box ringViolet500--L20></Box> // lighten color
     * <Box ringViolet500--D20></Box> // darken color
     * <Box ringViolet500-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringViolet500?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringViolet600></Box> // default with is 1
     * <Box ringViolet600-2></Box> // ring with is 2
     * <Box ringViolet600--T20></Box> // transparentize color
     * <Box ringViolet600--O20></Box> // opacify color
     * <Box ringViolet600--L20></Box> // lighten color
     * <Box ringViolet600--D20></Box> // darken color
     * <Box ringViolet600-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringViolet600?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringViolet700></Box> // default with is 1
     * <Box ringViolet700-2></Box> // ring with is 2
     * <Box ringViolet700--T20></Box> // transparentize color
     * <Box ringViolet700--O20></Box> // opacify color
     * <Box ringViolet700--L20></Box> // lighten color
     * <Box ringViolet700--D20></Box> // darken color
     * <Box ringViolet700-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringViolet700?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringViolet800></Box> // default with is 1
     * <Box ringViolet800-2></Box> // ring with is 2
     * <Box ringViolet800--T20></Box> // transparentize color
     * <Box ringViolet800--O20></Box> // opacify color
     * <Box ringViolet800--L20></Box> // lighten color
     * <Box ringViolet800--D20></Box> // darken color
     * <Box ringViolet800-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringViolet800?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringViolet900></Box> // default with is 1
     * <Box ringViolet900-2></Box> // ring with is 2
     * <Box ringViolet900--T20></Box> // transparentize color
     * <Box ringViolet900--O20></Box> // opacify color
     * <Box ringViolet900--L20></Box> // lighten color
     * <Box ringViolet900--D20></Box> // darken color
     * <Box ringViolet900-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringViolet900?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringPurple50></Box> // default with is 1
     * <Box ringPurple50-2></Box> // ring with is 2
     * <Box ringPurple50--T20></Box> // transparentize color
     * <Box ringPurple50--O20></Box> // opacify color
     * <Box ringPurple50--L20></Box> // lighten color
     * <Box ringPurple50--D20></Box> // darken color
     * <Box ringPurple50-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringPurple50?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringPurple100></Box> // default with is 1
     * <Box ringPurple100-2></Box> // ring with is 2
     * <Box ringPurple100--T20></Box> // transparentize color
     * <Box ringPurple100--O20></Box> // opacify color
     * <Box ringPurple100--L20></Box> // lighten color
     * <Box ringPurple100--D20></Box> // darken color
     * <Box ringPurple100-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringPurple100?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringPurple200></Box> // default with is 1
     * <Box ringPurple200-2></Box> // ring with is 2
     * <Box ringPurple200--T20></Box> // transparentize color
     * <Box ringPurple200--O20></Box> // opacify color
     * <Box ringPurple200--L20></Box> // lighten color
     * <Box ringPurple200--D20></Box> // darken color
     * <Box ringPurple200-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringPurple200?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringPurple300></Box> // default with is 1
     * <Box ringPurple300-2></Box> // ring with is 2
     * <Box ringPurple300--T20></Box> // transparentize color
     * <Box ringPurple300--O20></Box> // opacify color
     * <Box ringPurple300--L20></Box> // lighten color
     * <Box ringPurple300--D20></Box> // darken color
     * <Box ringPurple300-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringPurple300?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringPurple400></Box> // default with is 1
     * <Box ringPurple400-2></Box> // ring with is 2
     * <Box ringPurple400--T20></Box> // transparentize color
     * <Box ringPurple400--O20></Box> // opacify color
     * <Box ringPurple400--L20></Box> // lighten color
     * <Box ringPurple400--D20></Box> // darken color
     * <Box ringPurple400-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringPurple400?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringPurple500></Box> // default with is 1
     * <Box ringPurple500-2></Box> // ring with is 2
     * <Box ringPurple500--T20></Box> // transparentize color
     * <Box ringPurple500--O20></Box> // opacify color
     * <Box ringPurple500--L20></Box> // lighten color
     * <Box ringPurple500--D20></Box> // darken color
     * <Box ringPurple500-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringPurple500?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringPurple600></Box> // default with is 1
     * <Box ringPurple600-2></Box> // ring with is 2
     * <Box ringPurple600--T20></Box> // transparentize color
     * <Box ringPurple600--O20></Box> // opacify color
     * <Box ringPurple600--L20></Box> // lighten color
     * <Box ringPurple600--D20></Box> // darken color
     * <Box ringPurple600-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringPurple600?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringPurple700></Box> // default with is 1
     * <Box ringPurple700-2></Box> // ring with is 2
     * <Box ringPurple700--T20></Box> // transparentize color
     * <Box ringPurple700--O20></Box> // opacify color
     * <Box ringPurple700--L20></Box> // lighten color
     * <Box ringPurple700--D20></Box> // darken color
     * <Box ringPurple700-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringPurple700?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringPurple800></Box> // default with is 1
     * <Box ringPurple800-2></Box> // ring with is 2
     * <Box ringPurple800--T20></Box> // transparentize color
     * <Box ringPurple800--O20></Box> // opacify color
     * <Box ringPurple800--L20></Box> // lighten color
     * <Box ringPurple800--D20></Box> // darken color
     * <Box ringPurple800-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringPurple800?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringPurple900></Box> // default with is 1
     * <Box ringPurple900-2></Box> // ring with is 2
     * <Box ringPurple900--T20></Box> // transparentize color
     * <Box ringPurple900--O20></Box> // opacify color
     * <Box ringPurple900--L20></Box> // lighten color
     * <Box ringPurple900--D20></Box> // darken color
     * <Box ringPurple900-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringPurple900?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringFuchsia50></Box> // default with is 1
     * <Box ringFuchsia50-2></Box> // ring with is 2
     * <Box ringFuchsia50--T20></Box> // transparentize color
     * <Box ringFuchsia50--O20></Box> // opacify color
     * <Box ringFuchsia50--L20></Box> // lighten color
     * <Box ringFuchsia50--D20></Box> // darken color
     * <Box ringFuchsia50-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringFuchsia50?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringFuchsia100></Box> // default with is 1
     * <Box ringFuchsia100-2></Box> // ring with is 2
     * <Box ringFuchsia100--T20></Box> // transparentize color
     * <Box ringFuchsia100--O20></Box> // opacify color
     * <Box ringFuchsia100--L20></Box> // lighten color
     * <Box ringFuchsia100--D20></Box> // darken color
     * <Box ringFuchsia100-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringFuchsia100?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringFuchsia200></Box> // default with is 1
     * <Box ringFuchsia200-2></Box> // ring with is 2
     * <Box ringFuchsia200--T20></Box> // transparentize color
     * <Box ringFuchsia200--O20></Box> // opacify color
     * <Box ringFuchsia200--L20></Box> // lighten color
     * <Box ringFuchsia200--D20></Box> // darken color
     * <Box ringFuchsia200-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringFuchsia200?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringFuchsia300></Box> // default with is 1
     * <Box ringFuchsia300-2></Box> // ring with is 2
     * <Box ringFuchsia300--T20></Box> // transparentize color
     * <Box ringFuchsia300--O20></Box> // opacify color
     * <Box ringFuchsia300--L20></Box> // lighten color
     * <Box ringFuchsia300--D20></Box> // darken color
     * <Box ringFuchsia300-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringFuchsia300?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringFuchsia400></Box> // default with is 1
     * <Box ringFuchsia400-2></Box> // ring with is 2
     * <Box ringFuchsia400--T20></Box> // transparentize color
     * <Box ringFuchsia400--O20></Box> // opacify color
     * <Box ringFuchsia400--L20></Box> // lighten color
     * <Box ringFuchsia400--D20></Box> // darken color
     * <Box ringFuchsia400-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringFuchsia400?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringFuchsia500></Box> // default with is 1
     * <Box ringFuchsia500-2></Box> // ring with is 2
     * <Box ringFuchsia500--T20></Box> // transparentize color
     * <Box ringFuchsia500--O20></Box> // opacify color
     * <Box ringFuchsia500--L20></Box> // lighten color
     * <Box ringFuchsia500--D20></Box> // darken color
     * <Box ringFuchsia500-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringFuchsia500?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringFuchsia600></Box> // default with is 1
     * <Box ringFuchsia600-2></Box> // ring with is 2
     * <Box ringFuchsia600--T20></Box> // transparentize color
     * <Box ringFuchsia600--O20></Box> // opacify color
     * <Box ringFuchsia600--L20></Box> // lighten color
     * <Box ringFuchsia600--D20></Box> // darken color
     * <Box ringFuchsia600-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringFuchsia600?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringFuchsia700></Box> // default with is 1
     * <Box ringFuchsia700-2></Box> // ring with is 2
     * <Box ringFuchsia700--T20></Box> // transparentize color
     * <Box ringFuchsia700--O20></Box> // opacify color
     * <Box ringFuchsia700--L20></Box> // lighten color
     * <Box ringFuchsia700--D20></Box> // darken color
     * <Box ringFuchsia700-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringFuchsia700?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringFuchsia800></Box> // default with is 1
     * <Box ringFuchsia800-2></Box> // ring with is 2
     * <Box ringFuchsia800--T20></Box> // transparentize color
     * <Box ringFuchsia800--O20></Box> // opacify color
     * <Box ringFuchsia800--L20></Box> // lighten color
     * <Box ringFuchsia800--D20></Box> // darken color
     * <Box ringFuchsia800-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringFuchsia800?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringFuchsia900></Box> // default with is 1
     * <Box ringFuchsia900-2></Box> // ring with is 2
     * <Box ringFuchsia900--T20></Box> // transparentize color
     * <Box ringFuchsia900--O20></Box> // opacify color
     * <Box ringFuchsia900--L20></Box> // lighten color
     * <Box ringFuchsia900--D20></Box> // darken color
     * <Box ringFuchsia900-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringFuchsia900?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringPink50></Box> // default with is 1
     * <Box ringPink50-2></Box> // ring with is 2
     * <Box ringPink50--T20></Box> // transparentize color
     * <Box ringPink50--O20></Box> // opacify color
     * <Box ringPink50--L20></Box> // lighten color
     * <Box ringPink50--D20></Box> // darken color
     * <Box ringPink50-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringPink50?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringPink100></Box> // default with is 1
     * <Box ringPink100-2></Box> // ring with is 2
     * <Box ringPink100--T20></Box> // transparentize color
     * <Box ringPink100--O20></Box> // opacify color
     * <Box ringPink100--L20></Box> // lighten color
     * <Box ringPink100--D20></Box> // darken color
     * <Box ringPink100-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringPink100?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringPink200></Box> // default with is 1
     * <Box ringPink200-2></Box> // ring with is 2
     * <Box ringPink200--T20></Box> // transparentize color
     * <Box ringPink200--O20></Box> // opacify color
     * <Box ringPink200--L20></Box> // lighten color
     * <Box ringPink200--D20></Box> // darken color
     * <Box ringPink200-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringPink200?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringPink300></Box> // default with is 1
     * <Box ringPink300-2></Box> // ring with is 2
     * <Box ringPink300--T20></Box> // transparentize color
     * <Box ringPink300--O20></Box> // opacify color
     * <Box ringPink300--L20></Box> // lighten color
     * <Box ringPink300--D20></Box> // darken color
     * <Box ringPink300-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringPink300?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringPink400></Box> // default with is 1
     * <Box ringPink400-2></Box> // ring with is 2
     * <Box ringPink400--T20></Box> // transparentize color
     * <Box ringPink400--O20></Box> // opacify color
     * <Box ringPink400--L20></Box> // lighten color
     * <Box ringPink400--D20></Box> // darken color
     * <Box ringPink400-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringPink400?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringPink500></Box> // default with is 1
     * <Box ringPink500-2></Box> // ring with is 2
     * <Box ringPink500--T20></Box> // transparentize color
     * <Box ringPink500--O20></Box> // opacify color
     * <Box ringPink500--L20></Box> // lighten color
     * <Box ringPink500--D20></Box> // darken color
     * <Box ringPink500-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringPink500?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringPink600></Box> // default with is 1
     * <Box ringPink600-2></Box> // ring with is 2
     * <Box ringPink600--T20></Box> // transparentize color
     * <Box ringPink600--O20></Box> // opacify color
     * <Box ringPink600--L20></Box> // lighten color
     * <Box ringPink600--D20></Box> // darken color
     * <Box ringPink600-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringPink600?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringPink700></Box> // default with is 1
     * <Box ringPink700-2></Box> // ring with is 2
     * <Box ringPink700--T20></Box> // transparentize color
     * <Box ringPink700--O20></Box> // opacify color
     * <Box ringPink700--L20></Box> // lighten color
     * <Box ringPink700--D20></Box> // darken color
     * <Box ringPink700-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringPink700?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringPink800></Box> // default with is 1
     * <Box ringPink800-2></Box> // ring with is 2
     * <Box ringPink800--T20></Box> // transparentize color
     * <Box ringPink800--O20></Box> // opacify color
     * <Box ringPink800--L20></Box> // lighten color
     * <Box ringPink800--D20></Box> // darken color
     * <Box ringPink800-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringPink800?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringPink900></Box> // default with is 1
     * <Box ringPink900-2></Box> // ring with is 2
     * <Box ringPink900--T20></Box> // transparentize color
     * <Box ringPink900--O20></Box> // opacify color
     * <Box ringPink900--L20></Box> // lighten color
     * <Box ringPink900--D20></Box> // darken color
     * <Box ringPink900-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringPink900?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringRose50></Box> // default with is 1
     * <Box ringRose50-2></Box> // ring with is 2
     * <Box ringRose50--T20></Box> // transparentize color
     * <Box ringRose50--O20></Box> // opacify color
     * <Box ringRose50--L20></Box> // lighten color
     * <Box ringRose50--D20></Box> // darken color
     * <Box ringRose50-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringRose50?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringRose100></Box> // default with is 1
     * <Box ringRose100-2></Box> // ring with is 2
     * <Box ringRose100--T20></Box> // transparentize color
     * <Box ringRose100--O20></Box> // opacify color
     * <Box ringRose100--L20></Box> // lighten color
     * <Box ringRose100--D20></Box> // darken color
     * <Box ringRose100-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringRose100?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringRose200></Box> // default with is 1
     * <Box ringRose200-2></Box> // ring with is 2
     * <Box ringRose200--T20></Box> // transparentize color
     * <Box ringRose200--O20></Box> // opacify color
     * <Box ringRose200--L20></Box> // lighten color
     * <Box ringRose200--D20></Box> // darken color
     * <Box ringRose200-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringRose200?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringRose300></Box> // default with is 1
     * <Box ringRose300-2></Box> // ring with is 2
     * <Box ringRose300--T20></Box> // transparentize color
     * <Box ringRose300--O20></Box> // opacify color
     * <Box ringRose300--L20></Box> // lighten color
     * <Box ringRose300--D20></Box> // darken color
     * <Box ringRose300-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringRose300?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringRose400></Box> // default with is 1
     * <Box ringRose400-2></Box> // ring with is 2
     * <Box ringRose400--T20></Box> // transparentize color
     * <Box ringRose400--O20></Box> // opacify color
     * <Box ringRose400--L20></Box> // lighten color
     * <Box ringRose400--D20></Box> // darken color
     * <Box ringRose400-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringRose400?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringRose500></Box> // default with is 1
     * <Box ringRose500-2></Box> // ring with is 2
     * <Box ringRose500--T20></Box> // transparentize color
     * <Box ringRose500--O20></Box> // opacify color
     * <Box ringRose500--L20></Box> // lighten color
     * <Box ringRose500--D20></Box> // darken color
     * <Box ringRose500-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringRose500?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringRose600></Box> // default with is 1
     * <Box ringRose600-2></Box> // ring with is 2
     * <Box ringRose600--T20></Box> // transparentize color
     * <Box ringRose600--O20></Box> // opacify color
     * <Box ringRose600--L20></Box> // lighten color
     * <Box ringRose600--D20></Box> // darken color
     * <Box ringRose600-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringRose600?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringRose700></Box> // default with is 1
     * <Box ringRose700-2></Box> // ring with is 2
     * <Box ringRose700--T20></Box> // transparentize color
     * <Box ringRose700--O20></Box> // opacify color
     * <Box ringRose700--L20></Box> // lighten color
     * <Box ringRose700--D20></Box> // darken color
     * <Box ringRose700-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringRose700?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringRose800></Box> // default with is 1
     * <Box ringRose800-2></Box> // ring with is 2
     * <Box ringRose800--T20></Box> // transparentize color
     * <Box ringRose800--O20></Box> // opacify color
     * <Box ringRose800--L20></Box> // lighten color
     * <Box ringRose800--D20></Box> // darken color
     * <Box ringRose800-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringRose800?: ResponsiveBoolean
    /**
     * Set ring color and ring width
     * @example
     * ```tsx
     * <Box ringRose900></Box> // default with is 1
     * <Box ringRose900-2></Box> // ring with is 2
     * <Box ringRose900--T20></Box> // transparentize color
     * <Box ringRose900--O20></Box> // opacify color
     * <Box ringRose900--L20></Box> // lighten color
     * <Box ringRose900--D20></Box> // darken color
     * <Box ringRose900-2--T20></Box>
     * ```
     * @see https://fower.vercel.app/docs/ring
     */
    ringRose900?: ResponsiveBoolean
  }
}
