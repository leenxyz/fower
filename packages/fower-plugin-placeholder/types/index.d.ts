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
     * Set placeholder color to brand950
     * @example
     * ```tsx
     * <Box placeholderBrand950></Box>
     * <Box placeholderBrand950--T20></Box> // transparentize color
     * <Box placeholderBrand950--O20></Box> // opacify color
     * <Box placeholderBrand950--L20></Box> // lighten color
     * <Box placeholderBrand950--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderBrand950?: ResponsiveBoolean
    /**
     * Set placeholder color to slate50
     * @example
     * ```tsx
     * <Box placeholderSlate50></Box>
     * <Box placeholderSlate50--T20></Box> // transparentize color
     * <Box placeholderSlate50--O20></Box> // opacify color
     * <Box placeholderSlate50--L20></Box> // lighten color
     * <Box placeholderSlate50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderSlate50?: ResponsiveBoolean
    /**
     * Set placeholder color to slate100
     * @example
     * ```tsx
     * <Box placeholderSlate100></Box>
     * <Box placeholderSlate100--T20></Box> // transparentize color
     * <Box placeholderSlate100--O20></Box> // opacify color
     * <Box placeholderSlate100--L20></Box> // lighten color
     * <Box placeholderSlate100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderSlate100?: ResponsiveBoolean
    /**
     * Set placeholder color to slate200
     * @example
     * ```tsx
     * <Box placeholderSlate200></Box>
     * <Box placeholderSlate200--T20></Box> // transparentize color
     * <Box placeholderSlate200--O20></Box> // opacify color
     * <Box placeholderSlate200--L20></Box> // lighten color
     * <Box placeholderSlate200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderSlate200?: ResponsiveBoolean
    /**
     * Set placeholder color to slate300
     * @example
     * ```tsx
     * <Box placeholderSlate300></Box>
     * <Box placeholderSlate300--T20></Box> // transparentize color
     * <Box placeholderSlate300--O20></Box> // opacify color
     * <Box placeholderSlate300--L20></Box> // lighten color
     * <Box placeholderSlate300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderSlate300?: ResponsiveBoolean
    /**
     * Set placeholder color to slate400
     * @example
     * ```tsx
     * <Box placeholderSlate400></Box>
     * <Box placeholderSlate400--T20></Box> // transparentize color
     * <Box placeholderSlate400--O20></Box> // opacify color
     * <Box placeholderSlate400--L20></Box> // lighten color
     * <Box placeholderSlate400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderSlate400?: ResponsiveBoolean
    /**
     * Set placeholder color to slate500
     * @example
     * ```tsx
     * <Box placeholderSlate500></Box>
     * <Box placeholderSlate500--T20></Box> // transparentize color
     * <Box placeholderSlate500--O20></Box> // opacify color
     * <Box placeholderSlate500--L20></Box> // lighten color
     * <Box placeholderSlate500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderSlate500?: ResponsiveBoolean
    /**
     * Set placeholder color to slate600
     * @example
     * ```tsx
     * <Box placeholderSlate600></Box>
     * <Box placeholderSlate600--T20></Box> // transparentize color
     * <Box placeholderSlate600--O20></Box> // opacify color
     * <Box placeholderSlate600--L20></Box> // lighten color
     * <Box placeholderSlate600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderSlate600?: ResponsiveBoolean
    /**
     * Set placeholder color to slate700
     * @example
     * ```tsx
     * <Box placeholderSlate700></Box>
     * <Box placeholderSlate700--T20></Box> // transparentize color
     * <Box placeholderSlate700--O20></Box> // opacify color
     * <Box placeholderSlate700--L20></Box> // lighten color
     * <Box placeholderSlate700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderSlate700?: ResponsiveBoolean
    /**
     * Set placeholder color to slate800
     * @example
     * ```tsx
     * <Box placeholderSlate800></Box>
     * <Box placeholderSlate800--T20></Box> // transparentize color
     * <Box placeholderSlate800--O20></Box> // opacify color
     * <Box placeholderSlate800--L20></Box> // lighten color
     * <Box placeholderSlate800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderSlate800?: ResponsiveBoolean
    /**
     * Set placeholder color to slate900
     * @example
     * ```tsx
     * <Box placeholderSlate900></Box>
     * <Box placeholderSlate900--T20></Box> // transparentize color
     * <Box placeholderSlate900--O20></Box> // opacify color
     * <Box placeholderSlate900--L20></Box> // lighten color
     * <Box placeholderSlate900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderSlate900?: ResponsiveBoolean
    /**
     * Set placeholder color to slate950
     * @example
     * ```tsx
     * <Box placeholderSlate950></Box>
     * <Box placeholderSlate950--T20></Box> // transparentize color
     * <Box placeholderSlate950--O20></Box> // opacify color
     * <Box placeholderSlate950--L20></Box> // lighten color
     * <Box placeholderSlate950--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderSlate950?: ResponsiveBoolean
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
    /**
     * Set placeholder color to gray950
     * @example
     * ```tsx
     * <Box placeholderGray950></Box>
     * <Box placeholderGray950--T20></Box> // transparentize color
     * <Box placeholderGray950--O20></Box> // opacify color
     * <Box placeholderGray950--L20></Box> // lighten color
     * <Box placeholderGray950--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderGray950?: ResponsiveBoolean
    /**
     * Set placeholder color to zinc50
     * @example
     * ```tsx
     * <Box placeholderZinc50></Box>
     * <Box placeholderZinc50--T20></Box> // transparentize color
     * <Box placeholderZinc50--O20></Box> // opacify color
     * <Box placeholderZinc50--L20></Box> // lighten color
     * <Box placeholderZinc50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderZinc50?: ResponsiveBoolean
    /**
     * Set placeholder color to zinc100
     * @example
     * ```tsx
     * <Box placeholderZinc100></Box>
     * <Box placeholderZinc100--T20></Box> // transparentize color
     * <Box placeholderZinc100--O20></Box> // opacify color
     * <Box placeholderZinc100--L20></Box> // lighten color
     * <Box placeholderZinc100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderZinc100?: ResponsiveBoolean
    /**
     * Set placeholder color to zinc200
     * @example
     * ```tsx
     * <Box placeholderZinc200></Box>
     * <Box placeholderZinc200--T20></Box> // transparentize color
     * <Box placeholderZinc200--O20></Box> // opacify color
     * <Box placeholderZinc200--L20></Box> // lighten color
     * <Box placeholderZinc200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderZinc200?: ResponsiveBoolean
    /**
     * Set placeholder color to zinc300
     * @example
     * ```tsx
     * <Box placeholderZinc300></Box>
     * <Box placeholderZinc300--T20></Box> // transparentize color
     * <Box placeholderZinc300--O20></Box> // opacify color
     * <Box placeholderZinc300--L20></Box> // lighten color
     * <Box placeholderZinc300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderZinc300?: ResponsiveBoolean
    /**
     * Set placeholder color to zinc400
     * @example
     * ```tsx
     * <Box placeholderZinc400></Box>
     * <Box placeholderZinc400--T20></Box> // transparentize color
     * <Box placeholderZinc400--O20></Box> // opacify color
     * <Box placeholderZinc400--L20></Box> // lighten color
     * <Box placeholderZinc400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderZinc400?: ResponsiveBoolean
    /**
     * Set placeholder color to zinc500
     * @example
     * ```tsx
     * <Box placeholderZinc500></Box>
     * <Box placeholderZinc500--T20></Box> // transparentize color
     * <Box placeholderZinc500--O20></Box> // opacify color
     * <Box placeholderZinc500--L20></Box> // lighten color
     * <Box placeholderZinc500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderZinc500?: ResponsiveBoolean
    /**
     * Set placeholder color to zinc600
     * @example
     * ```tsx
     * <Box placeholderZinc600></Box>
     * <Box placeholderZinc600--T20></Box> // transparentize color
     * <Box placeholderZinc600--O20></Box> // opacify color
     * <Box placeholderZinc600--L20></Box> // lighten color
     * <Box placeholderZinc600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderZinc600?: ResponsiveBoolean
    /**
     * Set placeholder color to zinc700
     * @example
     * ```tsx
     * <Box placeholderZinc700></Box>
     * <Box placeholderZinc700--T20></Box> // transparentize color
     * <Box placeholderZinc700--O20></Box> // opacify color
     * <Box placeholderZinc700--L20></Box> // lighten color
     * <Box placeholderZinc700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderZinc700?: ResponsiveBoolean
    /**
     * Set placeholder color to zinc800
     * @example
     * ```tsx
     * <Box placeholderZinc800></Box>
     * <Box placeholderZinc800--T20></Box> // transparentize color
     * <Box placeholderZinc800--O20></Box> // opacify color
     * <Box placeholderZinc800--L20></Box> // lighten color
     * <Box placeholderZinc800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderZinc800?: ResponsiveBoolean
    /**
     * Set placeholder color to zinc900
     * @example
     * ```tsx
     * <Box placeholderZinc900></Box>
     * <Box placeholderZinc900--T20></Box> // transparentize color
     * <Box placeholderZinc900--O20></Box> // opacify color
     * <Box placeholderZinc900--L20></Box> // lighten color
     * <Box placeholderZinc900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderZinc900?: ResponsiveBoolean
    /**
     * Set placeholder color to zinc950
     * @example
     * ```tsx
     * <Box placeholderZinc950></Box>
     * <Box placeholderZinc950--T20></Box> // transparentize color
     * <Box placeholderZinc950--O20></Box> // opacify color
     * <Box placeholderZinc950--L20></Box> // lighten color
     * <Box placeholderZinc950--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderZinc950?: ResponsiveBoolean
    /**
     * Set placeholder color to neutral50
     * @example
     * ```tsx
     * <Box placeholderNeutral50></Box>
     * <Box placeholderNeutral50--T20></Box> // transparentize color
     * <Box placeholderNeutral50--O20></Box> // opacify color
     * <Box placeholderNeutral50--L20></Box> // lighten color
     * <Box placeholderNeutral50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderNeutral50?: ResponsiveBoolean
    /**
     * Set placeholder color to neutral100
     * @example
     * ```tsx
     * <Box placeholderNeutral100></Box>
     * <Box placeholderNeutral100--T20></Box> // transparentize color
     * <Box placeholderNeutral100--O20></Box> // opacify color
     * <Box placeholderNeutral100--L20></Box> // lighten color
     * <Box placeholderNeutral100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderNeutral100?: ResponsiveBoolean
    /**
     * Set placeholder color to neutral200
     * @example
     * ```tsx
     * <Box placeholderNeutral200></Box>
     * <Box placeholderNeutral200--T20></Box> // transparentize color
     * <Box placeholderNeutral200--O20></Box> // opacify color
     * <Box placeholderNeutral200--L20></Box> // lighten color
     * <Box placeholderNeutral200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderNeutral200?: ResponsiveBoolean
    /**
     * Set placeholder color to neutral300
     * @example
     * ```tsx
     * <Box placeholderNeutral300></Box>
     * <Box placeholderNeutral300--T20></Box> // transparentize color
     * <Box placeholderNeutral300--O20></Box> // opacify color
     * <Box placeholderNeutral300--L20></Box> // lighten color
     * <Box placeholderNeutral300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderNeutral300?: ResponsiveBoolean
    /**
     * Set placeholder color to neutral400
     * @example
     * ```tsx
     * <Box placeholderNeutral400></Box>
     * <Box placeholderNeutral400--T20></Box> // transparentize color
     * <Box placeholderNeutral400--O20></Box> // opacify color
     * <Box placeholderNeutral400--L20></Box> // lighten color
     * <Box placeholderNeutral400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderNeutral400?: ResponsiveBoolean
    /**
     * Set placeholder color to neutral500
     * @example
     * ```tsx
     * <Box placeholderNeutral500></Box>
     * <Box placeholderNeutral500--T20></Box> // transparentize color
     * <Box placeholderNeutral500--O20></Box> // opacify color
     * <Box placeholderNeutral500--L20></Box> // lighten color
     * <Box placeholderNeutral500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderNeutral500?: ResponsiveBoolean
    /**
     * Set placeholder color to neutral600
     * @example
     * ```tsx
     * <Box placeholderNeutral600></Box>
     * <Box placeholderNeutral600--T20></Box> // transparentize color
     * <Box placeholderNeutral600--O20></Box> // opacify color
     * <Box placeholderNeutral600--L20></Box> // lighten color
     * <Box placeholderNeutral600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderNeutral600?: ResponsiveBoolean
    /**
     * Set placeholder color to neutral700
     * @example
     * ```tsx
     * <Box placeholderNeutral700></Box>
     * <Box placeholderNeutral700--T20></Box> // transparentize color
     * <Box placeholderNeutral700--O20></Box> // opacify color
     * <Box placeholderNeutral700--L20></Box> // lighten color
     * <Box placeholderNeutral700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderNeutral700?: ResponsiveBoolean
    /**
     * Set placeholder color to neutral800
     * @example
     * ```tsx
     * <Box placeholderNeutral800></Box>
     * <Box placeholderNeutral800--T20></Box> // transparentize color
     * <Box placeholderNeutral800--O20></Box> // opacify color
     * <Box placeholderNeutral800--L20></Box> // lighten color
     * <Box placeholderNeutral800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderNeutral800?: ResponsiveBoolean
    /**
     * Set placeholder color to neutral900
     * @example
     * ```tsx
     * <Box placeholderNeutral900></Box>
     * <Box placeholderNeutral900--T20></Box> // transparentize color
     * <Box placeholderNeutral900--O20></Box> // opacify color
     * <Box placeholderNeutral900--L20></Box> // lighten color
     * <Box placeholderNeutral900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderNeutral900?: ResponsiveBoolean
    /**
     * Set placeholder color to neutral950
     * @example
     * ```tsx
     * <Box placeholderNeutral950></Box>
     * <Box placeholderNeutral950--T20></Box> // transparentize color
     * <Box placeholderNeutral950--O20></Box> // opacify color
     * <Box placeholderNeutral950--L20></Box> // lighten color
     * <Box placeholderNeutral950--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderNeutral950?: ResponsiveBoolean
    /**
     * Set placeholder color to stone50
     * @example
     * ```tsx
     * <Box placeholderStone50></Box>
     * <Box placeholderStone50--T20></Box> // transparentize color
     * <Box placeholderStone50--O20></Box> // opacify color
     * <Box placeholderStone50--L20></Box> // lighten color
     * <Box placeholderStone50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderStone50?: ResponsiveBoolean
    /**
     * Set placeholder color to stone100
     * @example
     * ```tsx
     * <Box placeholderStone100></Box>
     * <Box placeholderStone100--T20></Box> // transparentize color
     * <Box placeholderStone100--O20></Box> // opacify color
     * <Box placeholderStone100--L20></Box> // lighten color
     * <Box placeholderStone100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderStone100?: ResponsiveBoolean
    /**
     * Set placeholder color to stone200
     * @example
     * ```tsx
     * <Box placeholderStone200></Box>
     * <Box placeholderStone200--T20></Box> // transparentize color
     * <Box placeholderStone200--O20></Box> // opacify color
     * <Box placeholderStone200--L20></Box> // lighten color
     * <Box placeholderStone200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderStone200?: ResponsiveBoolean
    /**
     * Set placeholder color to stone300
     * @example
     * ```tsx
     * <Box placeholderStone300></Box>
     * <Box placeholderStone300--T20></Box> // transparentize color
     * <Box placeholderStone300--O20></Box> // opacify color
     * <Box placeholderStone300--L20></Box> // lighten color
     * <Box placeholderStone300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderStone300?: ResponsiveBoolean
    /**
     * Set placeholder color to stone400
     * @example
     * ```tsx
     * <Box placeholderStone400></Box>
     * <Box placeholderStone400--T20></Box> // transparentize color
     * <Box placeholderStone400--O20></Box> // opacify color
     * <Box placeholderStone400--L20></Box> // lighten color
     * <Box placeholderStone400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderStone400?: ResponsiveBoolean
    /**
     * Set placeholder color to stone500
     * @example
     * ```tsx
     * <Box placeholderStone500></Box>
     * <Box placeholderStone500--T20></Box> // transparentize color
     * <Box placeholderStone500--O20></Box> // opacify color
     * <Box placeholderStone500--L20></Box> // lighten color
     * <Box placeholderStone500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderStone500?: ResponsiveBoolean
    /**
     * Set placeholder color to stone600
     * @example
     * ```tsx
     * <Box placeholderStone600></Box>
     * <Box placeholderStone600--T20></Box> // transparentize color
     * <Box placeholderStone600--O20></Box> // opacify color
     * <Box placeholderStone600--L20></Box> // lighten color
     * <Box placeholderStone600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderStone600?: ResponsiveBoolean
    /**
     * Set placeholder color to stone700
     * @example
     * ```tsx
     * <Box placeholderStone700></Box>
     * <Box placeholderStone700--T20></Box> // transparentize color
     * <Box placeholderStone700--O20></Box> // opacify color
     * <Box placeholderStone700--L20></Box> // lighten color
     * <Box placeholderStone700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderStone700?: ResponsiveBoolean
    /**
     * Set placeholder color to stone800
     * @example
     * ```tsx
     * <Box placeholderStone800></Box>
     * <Box placeholderStone800--T20></Box> // transparentize color
     * <Box placeholderStone800--O20></Box> // opacify color
     * <Box placeholderStone800--L20></Box> // lighten color
     * <Box placeholderStone800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderStone800?: ResponsiveBoolean
    /**
     * Set placeholder color to stone900
     * @example
     * ```tsx
     * <Box placeholderStone900></Box>
     * <Box placeholderStone900--T20></Box> // transparentize color
     * <Box placeholderStone900--O20></Box> // opacify color
     * <Box placeholderStone900--L20></Box> // lighten color
     * <Box placeholderStone900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderStone900?: ResponsiveBoolean
    /**
     * Set placeholder color to stone950
     * @example
     * ```tsx
     * <Box placeholderStone950></Box>
     * <Box placeholderStone950--T20></Box> // transparentize color
     * <Box placeholderStone950--O20></Box> // opacify color
     * <Box placeholderStone950--L20></Box> // lighten color
     * <Box placeholderStone950--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderStone950?: ResponsiveBoolean
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
     * Set placeholder color to red950
     * @example
     * ```tsx
     * <Box placeholderRed950></Box>
     * <Box placeholderRed950--T20></Box> // transparentize color
     * <Box placeholderRed950--O20></Box> // opacify color
     * <Box placeholderRed950--L20></Box> // lighten color
     * <Box placeholderRed950--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderRed950?: ResponsiveBoolean
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
     * Set placeholder color to orange950
     * @example
     * ```tsx
     * <Box placeholderOrange950></Box>
     * <Box placeholderOrange950--T20></Box> // transparentize color
     * <Box placeholderOrange950--O20></Box> // opacify color
     * <Box placeholderOrange950--L20></Box> // lighten color
     * <Box placeholderOrange950--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderOrange950?: ResponsiveBoolean
    /**
     * Set placeholder color to amber50
     * @example
     * ```tsx
     * <Box placeholderAmber50></Box>
     * <Box placeholderAmber50--T20></Box> // transparentize color
     * <Box placeholderAmber50--O20></Box> // opacify color
     * <Box placeholderAmber50--L20></Box> // lighten color
     * <Box placeholderAmber50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderAmber50?: ResponsiveBoolean
    /**
     * Set placeholder color to amber100
     * @example
     * ```tsx
     * <Box placeholderAmber100></Box>
     * <Box placeholderAmber100--T20></Box> // transparentize color
     * <Box placeholderAmber100--O20></Box> // opacify color
     * <Box placeholderAmber100--L20></Box> // lighten color
     * <Box placeholderAmber100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderAmber100?: ResponsiveBoolean
    /**
     * Set placeholder color to amber200
     * @example
     * ```tsx
     * <Box placeholderAmber200></Box>
     * <Box placeholderAmber200--T20></Box> // transparentize color
     * <Box placeholderAmber200--O20></Box> // opacify color
     * <Box placeholderAmber200--L20></Box> // lighten color
     * <Box placeholderAmber200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderAmber200?: ResponsiveBoolean
    /**
     * Set placeholder color to amber300
     * @example
     * ```tsx
     * <Box placeholderAmber300></Box>
     * <Box placeholderAmber300--T20></Box> // transparentize color
     * <Box placeholderAmber300--O20></Box> // opacify color
     * <Box placeholderAmber300--L20></Box> // lighten color
     * <Box placeholderAmber300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderAmber300?: ResponsiveBoolean
    /**
     * Set placeholder color to amber400
     * @example
     * ```tsx
     * <Box placeholderAmber400></Box>
     * <Box placeholderAmber400--T20></Box> // transparentize color
     * <Box placeholderAmber400--O20></Box> // opacify color
     * <Box placeholderAmber400--L20></Box> // lighten color
     * <Box placeholderAmber400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderAmber400?: ResponsiveBoolean
    /**
     * Set placeholder color to amber500
     * @example
     * ```tsx
     * <Box placeholderAmber500></Box>
     * <Box placeholderAmber500--T20></Box> // transparentize color
     * <Box placeholderAmber500--O20></Box> // opacify color
     * <Box placeholderAmber500--L20></Box> // lighten color
     * <Box placeholderAmber500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderAmber500?: ResponsiveBoolean
    /**
     * Set placeholder color to amber600
     * @example
     * ```tsx
     * <Box placeholderAmber600></Box>
     * <Box placeholderAmber600--T20></Box> // transparentize color
     * <Box placeholderAmber600--O20></Box> // opacify color
     * <Box placeholderAmber600--L20></Box> // lighten color
     * <Box placeholderAmber600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderAmber600?: ResponsiveBoolean
    /**
     * Set placeholder color to amber700
     * @example
     * ```tsx
     * <Box placeholderAmber700></Box>
     * <Box placeholderAmber700--T20></Box> // transparentize color
     * <Box placeholderAmber700--O20></Box> // opacify color
     * <Box placeholderAmber700--L20></Box> // lighten color
     * <Box placeholderAmber700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderAmber700?: ResponsiveBoolean
    /**
     * Set placeholder color to amber800
     * @example
     * ```tsx
     * <Box placeholderAmber800></Box>
     * <Box placeholderAmber800--T20></Box> // transparentize color
     * <Box placeholderAmber800--O20></Box> // opacify color
     * <Box placeholderAmber800--L20></Box> // lighten color
     * <Box placeholderAmber800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderAmber800?: ResponsiveBoolean
    /**
     * Set placeholder color to amber900
     * @example
     * ```tsx
     * <Box placeholderAmber900></Box>
     * <Box placeholderAmber900--T20></Box> // transparentize color
     * <Box placeholderAmber900--O20></Box> // opacify color
     * <Box placeholderAmber900--L20></Box> // lighten color
     * <Box placeholderAmber900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderAmber900?: ResponsiveBoolean
    /**
     * Set placeholder color to amber950
     * @example
     * ```tsx
     * <Box placeholderAmber950></Box>
     * <Box placeholderAmber950--T20></Box> // transparentize color
     * <Box placeholderAmber950--O20></Box> // opacify color
     * <Box placeholderAmber950--L20></Box> // lighten color
     * <Box placeholderAmber950--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderAmber950?: ResponsiveBoolean
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
     * Set placeholder color to yellow950
     * @example
     * ```tsx
     * <Box placeholderYellow950></Box>
     * <Box placeholderYellow950--T20></Box> // transparentize color
     * <Box placeholderYellow950--O20></Box> // opacify color
     * <Box placeholderYellow950--L20></Box> // lighten color
     * <Box placeholderYellow950--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderYellow950?: ResponsiveBoolean
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
     * Set placeholder color to lime950
     * @example
     * ```tsx
     * <Box placeholderLime950></Box>
     * <Box placeholderLime950--T20></Box> // transparentize color
     * <Box placeholderLime950--O20></Box> // opacify color
     * <Box placeholderLime950--L20></Box> // lighten color
     * <Box placeholderLime950--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderLime950?: ResponsiveBoolean
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
     * Set placeholder color to green950
     * @example
     * ```tsx
     * <Box placeholderGreen950></Box>
     * <Box placeholderGreen950--T20></Box> // transparentize color
     * <Box placeholderGreen950--O20></Box> // opacify color
     * <Box placeholderGreen950--L20></Box> // lighten color
     * <Box placeholderGreen950--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderGreen950?: ResponsiveBoolean
    /**
     * Set placeholder color to emerald50
     * @example
     * ```tsx
     * <Box placeholderEmerald50></Box>
     * <Box placeholderEmerald50--T20></Box> // transparentize color
     * <Box placeholderEmerald50--O20></Box> // opacify color
     * <Box placeholderEmerald50--L20></Box> // lighten color
     * <Box placeholderEmerald50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderEmerald50?: ResponsiveBoolean
    /**
     * Set placeholder color to emerald100
     * @example
     * ```tsx
     * <Box placeholderEmerald100></Box>
     * <Box placeholderEmerald100--T20></Box> // transparentize color
     * <Box placeholderEmerald100--O20></Box> // opacify color
     * <Box placeholderEmerald100--L20></Box> // lighten color
     * <Box placeholderEmerald100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderEmerald100?: ResponsiveBoolean
    /**
     * Set placeholder color to emerald200
     * @example
     * ```tsx
     * <Box placeholderEmerald200></Box>
     * <Box placeholderEmerald200--T20></Box> // transparentize color
     * <Box placeholderEmerald200--O20></Box> // opacify color
     * <Box placeholderEmerald200--L20></Box> // lighten color
     * <Box placeholderEmerald200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderEmerald200?: ResponsiveBoolean
    /**
     * Set placeholder color to emerald300
     * @example
     * ```tsx
     * <Box placeholderEmerald300></Box>
     * <Box placeholderEmerald300--T20></Box> // transparentize color
     * <Box placeholderEmerald300--O20></Box> // opacify color
     * <Box placeholderEmerald300--L20></Box> // lighten color
     * <Box placeholderEmerald300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderEmerald300?: ResponsiveBoolean
    /**
     * Set placeholder color to emerald400
     * @example
     * ```tsx
     * <Box placeholderEmerald400></Box>
     * <Box placeholderEmerald400--T20></Box> // transparentize color
     * <Box placeholderEmerald400--O20></Box> // opacify color
     * <Box placeholderEmerald400--L20></Box> // lighten color
     * <Box placeholderEmerald400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderEmerald400?: ResponsiveBoolean
    /**
     * Set placeholder color to emerald500
     * @example
     * ```tsx
     * <Box placeholderEmerald500></Box>
     * <Box placeholderEmerald500--T20></Box> // transparentize color
     * <Box placeholderEmerald500--O20></Box> // opacify color
     * <Box placeholderEmerald500--L20></Box> // lighten color
     * <Box placeholderEmerald500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderEmerald500?: ResponsiveBoolean
    /**
     * Set placeholder color to emerald600
     * @example
     * ```tsx
     * <Box placeholderEmerald600></Box>
     * <Box placeholderEmerald600--T20></Box> // transparentize color
     * <Box placeholderEmerald600--O20></Box> // opacify color
     * <Box placeholderEmerald600--L20></Box> // lighten color
     * <Box placeholderEmerald600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderEmerald600?: ResponsiveBoolean
    /**
     * Set placeholder color to emerald700
     * @example
     * ```tsx
     * <Box placeholderEmerald700></Box>
     * <Box placeholderEmerald700--T20></Box> // transparentize color
     * <Box placeholderEmerald700--O20></Box> // opacify color
     * <Box placeholderEmerald700--L20></Box> // lighten color
     * <Box placeholderEmerald700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderEmerald700?: ResponsiveBoolean
    /**
     * Set placeholder color to emerald800
     * @example
     * ```tsx
     * <Box placeholderEmerald800></Box>
     * <Box placeholderEmerald800--T20></Box> // transparentize color
     * <Box placeholderEmerald800--O20></Box> // opacify color
     * <Box placeholderEmerald800--L20></Box> // lighten color
     * <Box placeholderEmerald800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderEmerald800?: ResponsiveBoolean
    /**
     * Set placeholder color to emerald900
     * @example
     * ```tsx
     * <Box placeholderEmerald900></Box>
     * <Box placeholderEmerald900--T20></Box> // transparentize color
     * <Box placeholderEmerald900--O20></Box> // opacify color
     * <Box placeholderEmerald900--L20></Box> // lighten color
     * <Box placeholderEmerald900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderEmerald900?: ResponsiveBoolean
    /**
     * Set placeholder color to emerald950
     * @example
     * ```tsx
     * <Box placeholderEmerald950></Box>
     * <Box placeholderEmerald950--T20></Box> // transparentize color
     * <Box placeholderEmerald950--O20></Box> // opacify color
     * <Box placeholderEmerald950--L20></Box> // lighten color
     * <Box placeholderEmerald950--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderEmerald950?: ResponsiveBoolean
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
     * Set placeholder color to teal950
     * @example
     * ```tsx
     * <Box placeholderTeal950></Box>
     * <Box placeholderTeal950--T20></Box> // transparentize color
     * <Box placeholderTeal950--O20></Box> // opacify color
     * <Box placeholderTeal950--L20></Box> // lighten color
     * <Box placeholderTeal950--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderTeal950?: ResponsiveBoolean
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
     * Set placeholder color to cyan950
     * @example
     * ```tsx
     * <Box placeholderCyan950></Box>
     * <Box placeholderCyan950--T20></Box> // transparentize color
     * <Box placeholderCyan950--O20></Box> // opacify color
     * <Box placeholderCyan950--L20></Box> // lighten color
     * <Box placeholderCyan950--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderCyan950?: ResponsiveBoolean
    /**
     * Set placeholder color to sky50
     * @example
     * ```tsx
     * <Box placeholderSky50></Box>
     * <Box placeholderSky50--T20></Box> // transparentize color
     * <Box placeholderSky50--O20></Box> // opacify color
     * <Box placeholderSky50--L20></Box> // lighten color
     * <Box placeholderSky50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderSky50?: ResponsiveBoolean
    /**
     * Set placeholder color to sky100
     * @example
     * ```tsx
     * <Box placeholderSky100></Box>
     * <Box placeholderSky100--T20></Box> // transparentize color
     * <Box placeholderSky100--O20></Box> // opacify color
     * <Box placeholderSky100--L20></Box> // lighten color
     * <Box placeholderSky100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderSky100?: ResponsiveBoolean
    /**
     * Set placeholder color to sky200
     * @example
     * ```tsx
     * <Box placeholderSky200></Box>
     * <Box placeholderSky200--T20></Box> // transparentize color
     * <Box placeholderSky200--O20></Box> // opacify color
     * <Box placeholderSky200--L20></Box> // lighten color
     * <Box placeholderSky200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderSky200?: ResponsiveBoolean
    /**
     * Set placeholder color to sky300
     * @example
     * ```tsx
     * <Box placeholderSky300></Box>
     * <Box placeholderSky300--T20></Box> // transparentize color
     * <Box placeholderSky300--O20></Box> // opacify color
     * <Box placeholderSky300--L20></Box> // lighten color
     * <Box placeholderSky300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderSky300?: ResponsiveBoolean
    /**
     * Set placeholder color to sky400
     * @example
     * ```tsx
     * <Box placeholderSky400></Box>
     * <Box placeholderSky400--T20></Box> // transparentize color
     * <Box placeholderSky400--O20></Box> // opacify color
     * <Box placeholderSky400--L20></Box> // lighten color
     * <Box placeholderSky400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderSky400?: ResponsiveBoolean
    /**
     * Set placeholder color to sky500
     * @example
     * ```tsx
     * <Box placeholderSky500></Box>
     * <Box placeholderSky500--T20></Box> // transparentize color
     * <Box placeholderSky500--O20></Box> // opacify color
     * <Box placeholderSky500--L20></Box> // lighten color
     * <Box placeholderSky500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderSky500?: ResponsiveBoolean
    /**
     * Set placeholder color to sky600
     * @example
     * ```tsx
     * <Box placeholderSky600></Box>
     * <Box placeholderSky600--T20></Box> // transparentize color
     * <Box placeholderSky600--O20></Box> // opacify color
     * <Box placeholderSky600--L20></Box> // lighten color
     * <Box placeholderSky600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderSky600?: ResponsiveBoolean
    /**
     * Set placeholder color to sky700
     * @example
     * ```tsx
     * <Box placeholderSky700></Box>
     * <Box placeholderSky700--T20></Box> // transparentize color
     * <Box placeholderSky700--O20></Box> // opacify color
     * <Box placeholderSky700--L20></Box> // lighten color
     * <Box placeholderSky700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderSky700?: ResponsiveBoolean
    /**
     * Set placeholder color to sky800
     * @example
     * ```tsx
     * <Box placeholderSky800></Box>
     * <Box placeholderSky800--T20></Box> // transparentize color
     * <Box placeholderSky800--O20></Box> // opacify color
     * <Box placeholderSky800--L20></Box> // lighten color
     * <Box placeholderSky800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderSky800?: ResponsiveBoolean
    /**
     * Set placeholder color to sky900
     * @example
     * ```tsx
     * <Box placeholderSky900></Box>
     * <Box placeholderSky900--T20></Box> // transparentize color
     * <Box placeholderSky900--O20></Box> // opacify color
     * <Box placeholderSky900--L20></Box> // lighten color
     * <Box placeholderSky900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderSky900?: ResponsiveBoolean
    /**
     * Set placeholder color to sky950
     * @example
     * ```tsx
     * <Box placeholderSky950></Box>
     * <Box placeholderSky950--T20></Box> // transparentize color
     * <Box placeholderSky950--O20></Box> // opacify color
     * <Box placeholderSky950--L20></Box> // lighten color
     * <Box placeholderSky950--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderSky950?: ResponsiveBoolean
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
     * Set placeholder color to blue950
     * @example
     * ```tsx
     * <Box placeholderBlue950></Box>
     * <Box placeholderBlue950--T20></Box> // transparentize color
     * <Box placeholderBlue950--O20></Box> // opacify color
     * <Box placeholderBlue950--L20></Box> // lighten color
     * <Box placeholderBlue950--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderBlue950?: ResponsiveBoolean
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
     * Set placeholder color to indigo950
     * @example
     * ```tsx
     * <Box placeholderIndigo950></Box>
     * <Box placeholderIndigo950--T20></Box> // transparentize color
     * <Box placeholderIndigo950--O20></Box> // opacify color
     * <Box placeholderIndigo950--L20></Box> // lighten color
     * <Box placeholderIndigo950--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderIndigo950?: ResponsiveBoolean
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
     * Set placeholder color to violet950
     * @example
     * ```tsx
     * <Box placeholderViolet950></Box>
     * <Box placeholderViolet950--T20></Box> // transparentize color
     * <Box placeholderViolet950--O20></Box> // opacify color
     * <Box placeholderViolet950--L20></Box> // lighten color
     * <Box placeholderViolet950--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderViolet950?: ResponsiveBoolean
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
     * Set placeholder color to purple950
     * @example
     * ```tsx
     * <Box placeholderPurple950></Box>
     * <Box placeholderPurple950--T20></Box> // transparentize color
     * <Box placeholderPurple950--O20></Box> // opacify color
     * <Box placeholderPurple950--L20></Box> // lighten color
     * <Box placeholderPurple950--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderPurple950?: ResponsiveBoolean
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
     * Set placeholder color to fuchsia950
     * @example
     * ```tsx
     * <Box placeholderFuchsia950></Box>
     * <Box placeholderFuchsia950--T20></Box> // transparentize color
     * <Box placeholderFuchsia950--O20></Box> // opacify color
     * <Box placeholderFuchsia950--L20></Box> // lighten color
     * <Box placeholderFuchsia950--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderFuchsia950?: ResponsiveBoolean
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
     * Set placeholder color to pink950
     * @example
     * ```tsx
     * <Box placeholderPink950></Box>
     * <Box placeholderPink950--T20></Box> // transparentize color
     * <Box placeholderPink950--O20></Box> // opacify color
     * <Box placeholderPink950--L20></Box> // lighten color
     * <Box placeholderPink950--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderPink950?: ResponsiveBoolean
    /**
     * Set placeholder color to rose50
     * @example
     * ```tsx
     * <Box placeholderRose50></Box>
     * <Box placeholderRose50--T20></Box> // transparentize color
     * <Box placeholderRose50--O20></Box> // opacify color
     * <Box placeholderRose50--L20></Box> // lighten color
     * <Box placeholderRose50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderRose50?: ResponsiveBoolean
    /**
     * Set placeholder color to rose100
     * @example
     * ```tsx
     * <Box placeholderRose100></Box>
     * <Box placeholderRose100--T20></Box> // transparentize color
     * <Box placeholderRose100--O20></Box> // opacify color
     * <Box placeholderRose100--L20></Box> // lighten color
     * <Box placeholderRose100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderRose100?: ResponsiveBoolean
    /**
     * Set placeholder color to rose200
     * @example
     * ```tsx
     * <Box placeholderRose200></Box>
     * <Box placeholderRose200--T20></Box> // transparentize color
     * <Box placeholderRose200--O20></Box> // opacify color
     * <Box placeholderRose200--L20></Box> // lighten color
     * <Box placeholderRose200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderRose200?: ResponsiveBoolean
    /**
     * Set placeholder color to rose300
     * @example
     * ```tsx
     * <Box placeholderRose300></Box>
     * <Box placeholderRose300--T20></Box> // transparentize color
     * <Box placeholderRose300--O20></Box> // opacify color
     * <Box placeholderRose300--L20></Box> // lighten color
     * <Box placeholderRose300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderRose300?: ResponsiveBoolean
    /**
     * Set placeholder color to rose400
     * @example
     * ```tsx
     * <Box placeholderRose400></Box>
     * <Box placeholderRose400--T20></Box> // transparentize color
     * <Box placeholderRose400--O20></Box> // opacify color
     * <Box placeholderRose400--L20></Box> // lighten color
     * <Box placeholderRose400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderRose400?: ResponsiveBoolean
    /**
     * Set placeholder color to rose500
     * @example
     * ```tsx
     * <Box placeholderRose500></Box>
     * <Box placeholderRose500--T20></Box> // transparentize color
     * <Box placeholderRose500--O20></Box> // opacify color
     * <Box placeholderRose500--L20></Box> // lighten color
     * <Box placeholderRose500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderRose500?: ResponsiveBoolean
    /**
     * Set placeholder color to rose600
     * @example
     * ```tsx
     * <Box placeholderRose600></Box>
     * <Box placeholderRose600--T20></Box> // transparentize color
     * <Box placeholderRose600--O20></Box> // opacify color
     * <Box placeholderRose600--L20></Box> // lighten color
     * <Box placeholderRose600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderRose600?: ResponsiveBoolean
    /**
     * Set placeholder color to rose700
     * @example
     * ```tsx
     * <Box placeholderRose700></Box>
     * <Box placeholderRose700--T20></Box> // transparentize color
     * <Box placeholderRose700--O20></Box> // opacify color
     * <Box placeholderRose700--L20></Box> // lighten color
     * <Box placeholderRose700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderRose700?: ResponsiveBoolean
    /**
     * Set placeholder color to rose800
     * @example
     * ```tsx
     * <Box placeholderRose800></Box>
     * <Box placeholderRose800--T20></Box> // transparentize color
     * <Box placeholderRose800--O20></Box> // opacify color
     * <Box placeholderRose800--L20></Box> // lighten color
     * <Box placeholderRose800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderRose800?: ResponsiveBoolean
    /**
     * Set placeholder color to rose900
     * @example
     * ```tsx
     * <Box placeholderRose900></Box>
     * <Box placeholderRose900--T20></Box> // transparentize color
     * <Box placeholderRose900--O20></Box> // opacify color
     * <Box placeholderRose900--L20></Box> // lighten color
     * <Box placeholderRose900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderRose900?: ResponsiveBoolean
    /**
     * Set placeholder color to rose950
     * @example
     * ```tsx
     * <Box placeholderRose950></Box>
     * <Box placeholderRose950--T20></Box> // transparentize color
     * <Box placeholderRose950--O20></Box> // opacify color
     * <Box placeholderRose950--L20></Box> // lighten color
     * <Box placeholderRose950--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder
     */
    placeholderRose950?: ResponsiveBoolean
  }
}
