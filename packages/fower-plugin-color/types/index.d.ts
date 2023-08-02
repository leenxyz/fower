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
     * Set color to brand50
     * ```css
     * { color: #eff6ff; }
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
     * { color: #dbeafe; }
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
     * { color: #bfdbfe; }
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
     * { color: #93c5fd; }
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
     * { color: #60a5fa; }
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
     * { color: #3b82f6; }
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
     * { color: #2563eb; }
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
     * { color: #1d4ed8; }
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
     * { color: #1e40af; }
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
     * { color: #1e3a8a; }
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
     * Set color to brand950
     * ```css
     * { color: #11118a; }
     * ```
     * @example
     * ```tsx
     * <Box brand950></Box>
     * <Box brand950--T20></Box> // transparentize color
     * <Box brand950--O20></Box> // opacify color
     * <Box brand950--L20></Box> // lighten color
     * <Box brand950--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    brand950?: ResponsiveBoolean
    /**
     * Set color to slate50
     * ```css
     * { color: #f8fafc; }
     * ```
     * @example
     * ```tsx
     * <Box slate50></Box>
     * <Box slate50--T20></Box> // transparentize color
     * <Box slate50--O20></Box> // opacify color
     * <Box slate50--L20></Box> // lighten color
     * <Box slate50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    slate50?: ResponsiveBoolean
    /**
     * Set color to slate100
     * ```css
     * { color: #f1f5f9; }
     * ```
     * @example
     * ```tsx
     * <Box slate100></Box>
     * <Box slate100--T20></Box> // transparentize color
     * <Box slate100--O20></Box> // opacify color
     * <Box slate100--L20></Box> // lighten color
     * <Box slate100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    slate100?: ResponsiveBoolean
    /**
     * Set color to slate200
     * ```css
     * { color: #e2e8f0; }
     * ```
     * @example
     * ```tsx
     * <Box slate200></Box>
     * <Box slate200--T20></Box> // transparentize color
     * <Box slate200--O20></Box> // opacify color
     * <Box slate200--L20></Box> // lighten color
     * <Box slate200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    slate200?: ResponsiveBoolean
    /**
     * Set color to slate300
     * ```css
     * { color: #cbd5e1; }
     * ```
     * @example
     * ```tsx
     * <Box slate300></Box>
     * <Box slate300--T20></Box> // transparentize color
     * <Box slate300--O20></Box> // opacify color
     * <Box slate300--L20></Box> // lighten color
     * <Box slate300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    slate300?: ResponsiveBoolean
    /**
     * Set color to slate400
     * ```css
     * { color: #94a3b8; }
     * ```
     * @example
     * ```tsx
     * <Box slate400></Box>
     * <Box slate400--T20></Box> // transparentize color
     * <Box slate400--O20></Box> // opacify color
     * <Box slate400--L20></Box> // lighten color
     * <Box slate400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    slate400?: ResponsiveBoolean
    /**
     * Set color to slate500
     * ```css
     * { color: #64748b; }
     * ```
     * @example
     * ```tsx
     * <Box slate500></Box>
     * <Box slate500--T20></Box> // transparentize color
     * <Box slate500--O20></Box> // opacify color
     * <Box slate500--L20></Box> // lighten color
     * <Box slate500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    slate500?: ResponsiveBoolean
    /**
     * Set color to slate600
     * ```css
     * { color: #475569; }
     * ```
     * @example
     * ```tsx
     * <Box slate600></Box>
     * <Box slate600--T20></Box> // transparentize color
     * <Box slate600--O20></Box> // opacify color
     * <Box slate600--L20></Box> // lighten color
     * <Box slate600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    slate600?: ResponsiveBoolean
    /**
     * Set color to slate700
     * ```css
     * { color: #334155; }
     * ```
     * @example
     * ```tsx
     * <Box slate700></Box>
     * <Box slate700--T20></Box> // transparentize color
     * <Box slate700--O20></Box> // opacify color
     * <Box slate700--L20></Box> // lighten color
     * <Box slate700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    slate700?: ResponsiveBoolean
    /**
     * Set color to slate800
     * ```css
     * { color: #1e293b; }
     * ```
     * @example
     * ```tsx
     * <Box slate800></Box>
     * <Box slate800--T20></Box> // transparentize color
     * <Box slate800--O20></Box> // opacify color
     * <Box slate800--L20></Box> // lighten color
     * <Box slate800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    slate800?: ResponsiveBoolean
    /**
     * Set color to slate900
     * ```css
     * { color: #0f172a; }
     * ```
     * @example
     * ```tsx
     * <Box slate900></Box>
     * <Box slate900--T20></Box> // transparentize color
     * <Box slate900--O20></Box> // opacify color
     * <Box slate900--L20></Box> // lighten color
     * <Box slate900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    slate900?: ResponsiveBoolean
    /**
     * Set color to slate950
     * ```css
     * { color: #020617; }
     * ```
     * @example
     * ```tsx
     * <Box slate950></Box>
     * <Box slate950--T20></Box> // transparentize color
     * <Box slate950--O20></Box> // opacify color
     * <Box slate950--L20></Box> // lighten color
     * <Box slate950--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    slate950?: ResponsiveBoolean
    /**
     * Set color to gray50
     * ```css
     * { color: #f9fafb; }
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
     * { color: #f3f4f6; }
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
     * { color: #e5e7eb; }
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
     * { color: #d1d5db; }
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
     * { color: #9ca3af; }
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
     * { color: #6b7280; }
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
     * { color: #4b5563; }
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
     * { color: #374151; }
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
     * { color: #1f2937; }
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
     * { color: #111827; }
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
    /**
     * Set color to gray950
     * ```css
     * { color: #030712; }
     * ```
     * @example
     * ```tsx
     * <Box gray950></Box>
     * <Box gray950--T20></Box> // transparentize color
     * <Box gray950--O20></Box> // opacify color
     * <Box gray950--L20></Box> // lighten color
     * <Box gray950--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    gray950?: ResponsiveBoolean
    /**
     * Set color to zinc50
     * ```css
     * { color: #fafafa; }
     * ```
     * @example
     * ```tsx
     * <Box zinc50></Box>
     * <Box zinc50--T20></Box> // transparentize color
     * <Box zinc50--O20></Box> // opacify color
     * <Box zinc50--L20></Box> // lighten color
     * <Box zinc50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    zinc50?: ResponsiveBoolean
    /**
     * Set color to zinc100
     * ```css
     * { color: #f4f4f5; }
     * ```
     * @example
     * ```tsx
     * <Box zinc100></Box>
     * <Box zinc100--T20></Box> // transparentize color
     * <Box zinc100--O20></Box> // opacify color
     * <Box zinc100--L20></Box> // lighten color
     * <Box zinc100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    zinc100?: ResponsiveBoolean
    /**
     * Set color to zinc200
     * ```css
     * { color: #e4e4e7; }
     * ```
     * @example
     * ```tsx
     * <Box zinc200></Box>
     * <Box zinc200--T20></Box> // transparentize color
     * <Box zinc200--O20></Box> // opacify color
     * <Box zinc200--L20></Box> // lighten color
     * <Box zinc200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    zinc200?: ResponsiveBoolean
    /**
     * Set color to zinc300
     * ```css
     * { color: #d4d4d8; }
     * ```
     * @example
     * ```tsx
     * <Box zinc300></Box>
     * <Box zinc300--T20></Box> // transparentize color
     * <Box zinc300--O20></Box> // opacify color
     * <Box zinc300--L20></Box> // lighten color
     * <Box zinc300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    zinc300?: ResponsiveBoolean
    /**
     * Set color to zinc400
     * ```css
     * { color: #a1a1aa; }
     * ```
     * @example
     * ```tsx
     * <Box zinc400></Box>
     * <Box zinc400--T20></Box> // transparentize color
     * <Box zinc400--O20></Box> // opacify color
     * <Box zinc400--L20></Box> // lighten color
     * <Box zinc400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    zinc400?: ResponsiveBoolean
    /**
     * Set color to zinc500
     * ```css
     * { color: #71717a; }
     * ```
     * @example
     * ```tsx
     * <Box zinc500></Box>
     * <Box zinc500--T20></Box> // transparentize color
     * <Box zinc500--O20></Box> // opacify color
     * <Box zinc500--L20></Box> // lighten color
     * <Box zinc500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    zinc500?: ResponsiveBoolean
    /**
     * Set color to zinc600
     * ```css
     * { color: #52525b; }
     * ```
     * @example
     * ```tsx
     * <Box zinc600></Box>
     * <Box zinc600--T20></Box> // transparentize color
     * <Box zinc600--O20></Box> // opacify color
     * <Box zinc600--L20></Box> // lighten color
     * <Box zinc600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    zinc600?: ResponsiveBoolean
    /**
     * Set color to zinc700
     * ```css
     * { color: #3f3f46; }
     * ```
     * @example
     * ```tsx
     * <Box zinc700></Box>
     * <Box zinc700--T20></Box> // transparentize color
     * <Box zinc700--O20></Box> // opacify color
     * <Box zinc700--L20></Box> // lighten color
     * <Box zinc700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    zinc700?: ResponsiveBoolean
    /**
     * Set color to zinc800
     * ```css
     * { color: #27272a; }
     * ```
     * @example
     * ```tsx
     * <Box zinc800></Box>
     * <Box zinc800--T20></Box> // transparentize color
     * <Box zinc800--O20></Box> // opacify color
     * <Box zinc800--L20></Box> // lighten color
     * <Box zinc800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    zinc800?: ResponsiveBoolean
    /**
     * Set color to zinc900
     * ```css
     * { color: #18181b; }
     * ```
     * @example
     * ```tsx
     * <Box zinc900></Box>
     * <Box zinc900--T20></Box> // transparentize color
     * <Box zinc900--O20></Box> // opacify color
     * <Box zinc900--L20></Box> // lighten color
     * <Box zinc900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    zinc900?: ResponsiveBoolean
    /**
     * Set color to zinc950
     * ```css
     * { color: #09090b; }
     * ```
     * @example
     * ```tsx
     * <Box zinc950></Box>
     * <Box zinc950--T20></Box> // transparentize color
     * <Box zinc950--O20></Box> // opacify color
     * <Box zinc950--L20></Box> // lighten color
     * <Box zinc950--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    zinc950?: ResponsiveBoolean
    /**
     * Set color to neutral50
     * ```css
     * { color: #fafafa; }
     * ```
     * @example
     * ```tsx
     * <Box neutral50></Box>
     * <Box neutral50--T20></Box> // transparentize color
     * <Box neutral50--O20></Box> // opacify color
     * <Box neutral50--L20></Box> // lighten color
     * <Box neutral50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    neutral50?: ResponsiveBoolean
    /**
     * Set color to neutral100
     * ```css
     * { color: #f5f5f5; }
     * ```
     * @example
     * ```tsx
     * <Box neutral100></Box>
     * <Box neutral100--T20></Box> // transparentize color
     * <Box neutral100--O20></Box> // opacify color
     * <Box neutral100--L20></Box> // lighten color
     * <Box neutral100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    neutral100?: ResponsiveBoolean
    /**
     * Set color to neutral200
     * ```css
     * { color: #e5e5e5; }
     * ```
     * @example
     * ```tsx
     * <Box neutral200></Box>
     * <Box neutral200--T20></Box> // transparentize color
     * <Box neutral200--O20></Box> // opacify color
     * <Box neutral200--L20></Box> // lighten color
     * <Box neutral200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    neutral200?: ResponsiveBoolean
    /**
     * Set color to neutral300
     * ```css
     * { color: #d4d4d4; }
     * ```
     * @example
     * ```tsx
     * <Box neutral300></Box>
     * <Box neutral300--T20></Box> // transparentize color
     * <Box neutral300--O20></Box> // opacify color
     * <Box neutral300--L20></Box> // lighten color
     * <Box neutral300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    neutral300?: ResponsiveBoolean
    /**
     * Set color to neutral400
     * ```css
     * { color: #a3a3a3; }
     * ```
     * @example
     * ```tsx
     * <Box neutral400></Box>
     * <Box neutral400--T20></Box> // transparentize color
     * <Box neutral400--O20></Box> // opacify color
     * <Box neutral400--L20></Box> // lighten color
     * <Box neutral400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    neutral400?: ResponsiveBoolean
    /**
     * Set color to neutral500
     * ```css
     * { color: #737373; }
     * ```
     * @example
     * ```tsx
     * <Box neutral500></Box>
     * <Box neutral500--T20></Box> // transparentize color
     * <Box neutral500--O20></Box> // opacify color
     * <Box neutral500--L20></Box> // lighten color
     * <Box neutral500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    neutral500?: ResponsiveBoolean
    /**
     * Set color to neutral600
     * ```css
     * { color: #525252; }
     * ```
     * @example
     * ```tsx
     * <Box neutral600></Box>
     * <Box neutral600--T20></Box> // transparentize color
     * <Box neutral600--O20></Box> // opacify color
     * <Box neutral600--L20></Box> // lighten color
     * <Box neutral600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    neutral600?: ResponsiveBoolean
    /**
     * Set color to neutral700
     * ```css
     * { color: #404040; }
     * ```
     * @example
     * ```tsx
     * <Box neutral700></Box>
     * <Box neutral700--T20></Box> // transparentize color
     * <Box neutral700--O20></Box> // opacify color
     * <Box neutral700--L20></Box> // lighten color
     * <Box neutral700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    neutral700?: ResponsiveBoolean
    /**
     * Set color to neutral800
     * ```css
     * { color: #262626; }
     * ```
     * @example
     * ```tsx
     * <Box neutral800></Box>
     * <Box neutral800--T20></Box> // transparentize color
     * <Box neutral800--O20></Box> // opacify color
     * <Box neutral800--L20></Box> // lighten color
     * <Box neutral800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    neutral800?: ResponsiveBoolean
    /**
     * Set color to neutral900
     * ```css
     * { color: #171717; }
     * ```
     * @example
     * ```tsx
     * <Box neutral900></Box>
     * <Box neutral900--T20></Box> // transparentize color
     * <Box neutral900--O20></Box> // opacify color
     * <Box neutral900--L20></Box> // lighten color
     * <Box neutral900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    neutral900?: ResponsiveBoolean
    /**
     * Set color to neutral950
     * ```css
     * { color: #0a0a0a; }
     * ```
     * @example
     * ```tsx
     * <Box neutral950></Box>
     * <Box neutral950--T20></Box> // transparentize color
     * <Box neutral950--O20></Box> // opacify color
     * <Box neutral950--L20></Box> // lighten color
     * <Box neutral950--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    neutral950?: ResponsiveBoolean
    /**
     * Set color to stone50
     * ```css
     * { color: #fafaf9; }
     * ```
     * @example
     * ```tsx
     * <Box stone50></Box>
     * <Box stone50--T20></Box> // transparentize color
     * <Box stone50--O20></Box> // opacify color
     * <Box stone50--L20></Box> // lighten color
     * <Box stone50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    stone50?: ResponsiveBoolean
    /**
     * Set color to stone100
     * ```css
     * { color: #f5f5f4; }
     * ```
     * @example
     * ```tsx
     * <Box stone100></Box>
     * <Box stone100--T20></Box> // transparentize color
     * <Box stone100--O20></Box> // opacify color
     * <Box stone100--L20></Box> // lighten color
     * <Box stone100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    stone100?: ResponsiveBoolean
    /**
     * Set color to stone200
     * ```css
     * { color: #e7e5e4; }
     * ```
     * @example
     * ```tsx
     * <Box stone200></Box>
     * <Box stone200--T20></Box> // transparentize color
     * <Box stone200--O20></Box> // opacify color
     * <Box stone200--L20></Box> // lighten color
     * <Box stone200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    stone200?: ResponsiveBoolean
    /**
     * Set color to stone300
     * ```css
     * { color: #d6d3d1; }
     * ```
     * @example
     * ```tsx
     * <Box stone300></Box>
     * <Box stone300--T20></Box> // transparentize color
     * <Box stone300--O20></Box> // opacify color
     * <Box stone300--L20></Box> // lighten color
     * <Box stone300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    stone300?: ResponsiveBoolean
    /**
     * Set color to stone400
     * ```css
     * { color: #a8a29e; }
     * ```
     * @example
     * ```tsx
     * <Box stone400></Box>
     * <Box stone400--T20></Box> // transparentize color
     * <Box stone400--O20></Box> // opacify color
     * <Box stone400--L20></Box> // lighten color
     * <Box stone400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    stone400?: ResponsiveBoolean
    /**
     * Set color to stone500
     * ```css
     * { color: #78716c; }
     * ```
     * @example
     * ```tsx
     * <Box stone500></Box>
     * <Box stone500--T20></Box> // transparentize color
     * <Box stone500--O20></Box> // opacify color
     * <Box stone500--L20></Box> // lighten color
     * <Box stone500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    stone500?: ResponsiveBoolean
    /**
     * Set color to stone600
     * ```css
     * { color: #57534e; }
     * ```
     * @example
     * ```tsx
     * <Box stone600></Box>
     * <Box stone600--T20></Box> // transparentize color
     * <Box stone600--O20></Box> // opacify color
     * <Box stone600--L20></Box> // lighten color
     * <Box stone600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    stone600?: ResponsiveBoolean
    /**
     * Set color to stone700
     * ```css
     * { color: #44403c; }
     * ```
     * @example
     * ```tsx
     * <Box stone700></Box>
     * <Box stone700--T20></Box> // transparentize color
     * <Box stone700--O20></Box> // opacify color
     * <Box stone700--L20></Box> // lighten color
     * <Box stone700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    stone700?: ResponsiveBoolean
    /**
     * Set color to stone800
     * ```css
     * { color: #292524; }
     * ```
     * @example
     * ```tsx
     * <Box stone800></Box>
     * <Box stone800--T20></Box> // transparentize color
     * <Box stone800--O20></Box> // opacify color
     * <Box stone800--L20></Box> // lighten color
     * <Box stone800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    stone800?: ResponsiveBoolean
    /**
     * Set color to stone900
     * ```css
     * { color: #1c1917; }
     * ```
     * @example
     * ```tsx
     * <Box stone900></Box>
     * <Box stone900--T20></Box> // transparentize color
     * <Box stone900--O20></Box> // opacify color
     * <Box stone900--L20></Box> // lighten color
     * <Box stone900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    stone900?: ResponsiveBoolean
    /**
     * Set color to stone950
     * ```css
     * { color: #0c0a09; }
     * ```
     * @example
     * ```tsx
     * <Box stone950></Box>
     * <Box stone950--T20></Box> // transparentize color
     * <Box stone950--O20></Box> // opacify color
     * <Box stone950--L20></Box> // lighten color
     * <Box stone950--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    stone950?: ResponsiveBoolean
    /**
     * Set color to red50
     * ```css
     * { color: #fef2f2; }
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
     * { color: #fee2e2; }
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
     * { color: #fecaca; }
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
     * { color: #fca5a5; }
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
     * { color: #f87171; }
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
     * { color: #ef4444; }
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
     * { color: #dc2626; }
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
     * { color: #b91c1c; }
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
     * { color: #991b1b; }
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
     * { color: #7f1d1d; }
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
     * Set color to red950
     * ```css
     * { color: #450a0a; }
     * ```
     * @example
     * ```tsx
     * <Box red950></Box>
     * <Box red950--T20></Box> // transparentize color
     * <Box red950--O20></Box> // opacify color
     * <Box red950--L20></Box> // lighten color
     * <Box red950--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    red950?: ResponsiveBoolean
    /**
     * Set color to orange50
     * ```css
     * { color: #fff7ed; }
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
     * { color: #ffedd5; }
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
     * { color: #fed7aa; }
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
     * { color: #fdba74; }
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
     * { color: #fb923c; }
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
     * { color: #f97316; }
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
     * { color: #ea580c; }
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
     * { color: #c2410c; }
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
     * { color: #9a3412; }
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
     * { color: #7c2d12; }
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
     * Set color to orange950
     * ```css
     * { color: #431407; }
     * ```
     * @example
     * ```tsx
     * <Box orange950></Box>
     * <Box orange950--T20></Box> // transparentize color
     * <Box orange950--O20></Box> // opacify color
     * <Box orange950--L20></Box> // lighten color
     * <Box orange950--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    orange950?: ResponsiveBoolean
    /**
     * Set color to amber50
     * ```css
     * { color: #fffbeb; }
     * ```
     * @example
     * ```tsx
     * <Box amber50></Box>
     * <Box amber50--T20></Box> // transparentize color
     * <Box amber50--O20></Box> // opacify color
     * <Box amber50--L20></Box> // lighten color
     * <Box amber50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    amber50?: ResponsiveBoolean
    /**
     * Set color to amber100
     * ```css
     * { color: #fef3c7; }
     * ```
     * @example
     * ```tsx
     * <Box amber100></Box>
     * <Box amber100--T20></Box> // transparentize color
     * <Box amber100--O20></Box> // opacify color
     * <Box amber100--L20></Box> // lighten color
     * <Box amber100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    amber100?: ResponsiveBoolean
    /**
     * Set color to amber200
     * ```css
     * { color: #fde68a; }
     * ```
     * @example
     * ```tsx
     * <Box amber200></Box>
     * <Box amber200--T20></Box> // transparentize color
     * <Box amber200--O20></Box> // opacify color
     * <Box amber200--L20></Box> // lighten color
     * <Box amber200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    amber200?: ResponsiveBoolean
    /**
     * Set color to amber300
     * ```css
     * { color: #fcd34d; }
     * ```
     * @example
     * ```tsx
     * <Box amber300></Box>
     * <Box amber300--T20></Box> // transparentize color
     * <Box amber300--O20></Box> // opacify color
     * <Box amber300--L20></Box> // lighten color
     * <Box amber300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    amber300?: ResponsiveBoolean
    /**
     * Set color to amber400
     * ```css
     * { color: #fbbf24; }
     * ```
     * @example
     * ```tsx
     * <Box amber400></Box>
     * <Box amber400--T20></Box> // transparentize color
     * <Box amber400--O20></Box> // opacify color
     * <Box amber400--L20></Box> // lighten color
     * <Box amber400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    amber400?: ResponsiveBoolean
    /**
     * Set color to amber500
     * ```css
     * { color: #f59e0b; }
     * ```
     * @example
     * ```tsx
     * <Box amber500></Box>
     * <Box amber500--T20></Box> // transparentize color
     * <Box amber500--O20></Box> // opacify color
     * <Box amber500--L20></Box> // lighten color
     * <Box amber500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    amber500?: ResponsiveBoolean
    /**
     * Set color to amber600
     * ```css
     * { color: #d97706; }
     * ```
     * @example
     * ```tsx
     * <Box amber600></Box>
     * <Box amber600--T20></Box> // transparentize color
     * <Box amber600--O20></Box> // opacify color
     * <Box amber600--L20></Box> // lighten color
     * <Box amber600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    amber600?: ResponsiveBoolean
    /**
     * Set color to amber700
     * ```css
     * { color: #b45309; }
     * ```
     * @example
     * ```tsx
     * <Box amber700></Box>
     * <Box amber700--T20></Box> // transparentize color
     * <Box amber700--O20></Box> // opacify color
     * <Box amber700--L20></Box> // lighten color
     * <Box amber700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    amber700?: ResponsiveBoolean
    /**
     * Set color to amber800
     * ```css
     * { color: #92400e; }
     * ```
     * @example
     * ```tsx
     * <Box amber800></Box>
     * <Box amber800--T20></Box> // transparentize color
     * <Box amber800--O20></Box> // opacify color
     * <Box amber800--L20></Box> // lighten color
     * <Box amber800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    amber800?: ResponsiveBoolean
    /**
     * Set color to amber900
     * ```css
     * { color: #78350f; }
     * ```
     * @example
     * ```tsx
     * <Box amber900></Box>
     * <Box amber900--T20></Box> // transparentize color
     * <Box amber900--O20></Box> // opacify color
     * <Box amber900--L20></Box> // lighten color
     * <Box amber900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    amber900?: ResponsiveBoolean
    /**
     * Set color to amber950
     * ```css
     * { color: #451a03; }
     * ```
     * @example
     * ```tsx
     * <Box amber950></Box>
     * <Box amber950--T20></Box> // transparentize color
     * <Box amber950--O20></Box> // opacify color
     * <Box amber950--L20></Box> // lighten color
     * <Box amber950--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    amber950?: ResponsiveBoolean
    /**
     * Set color to yellow50
     * ```css
     * { color: #fefce8; }
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
     * { color: #fef9c3; }
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
     * { color: #fef08a; }
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
     * { color: #fde047; }
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
     * { color: #facc15; }
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
     * { color: #eab308; }
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
     * { color: #ca8a04; }
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
     * { color: #a16207; }
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
     * { color: #854d0e; }
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
     * { color: #713f12; }
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
     * Set color to yellow950
     * ```css
     * { color: #422006; }
     * ```
     * @example
     * ```tsx
     * <Box yellow950></Box>
     * <Box yellow950--T20></Box> // transparentize color
     * <Box yellow950--O20></Box> // opacify color
     * <Box yellow950--L20></Box> // lighten color
     * <Box yellow950--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    yellow950?: ResponsiveBoolean
    /**
     * Set color to lime50
     * ```css
     * { color: #f7fee7; }
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
     * { color: #ecfccb; }
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
     * { color: #d9f99d; }
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
     * { color: #bef264; }
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
     * { color: #a3e635; }
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
     * { color: #84cc16; }
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
     * { color: #65a30d; }
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
     * { color: #4d7c0f; }
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
     * { color: #3f6212; }
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
     * { color: #365314; }
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
     * Set color to lime950
     * ```css
     * { color: #1a2e05; }
     * ```
     * @example
     * ```tsx
     * <Box lime950></Box>
     * <Box lime950--T20></Box> // transparentize color
     * <Box lime950--O20></Box> // opacify color
     * <Box lime950--L20></Box> // lighten color
     * <Box lime950--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    lime950?: ResponsiveBoolean
    /**
     * Set color to green50
     * ```css
     * { color: #f0fdf4; }
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
     * { color: #dcfce7; }
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
     * { color: #bbf7d0; }
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
     * { color: #86efac; }
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
     * { color: #4ade80; }
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
     * { color: #22c55e; }
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
     * { color: #16a34a; }
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
     * { color: #15803d; }
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
     * { color: #166534; }
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
     * { color: #14532d; }
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
     * Set color to green950
     * ```css
     * { color: #052e16; }
     * ```
     * @example
     * ```tsx
     * <Box green950></Box>
     * <Box green950--T20></Box> // transparentize color
     * <Box green950--O20></Box> // opacify color
     * <Box green950--L20></Box> // lighten color
     * <Box green950--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    green950?: ResponsiveBoolean
    /**
     * Set color to emerald50
     * ```css
     * { color: #ecfdf5; }
     * ```
     * @example
     * ```tsx
     * <Box emerald50></Box>
     * <Box emerald50--T20></Box> // transparentize color
     * <Box emerald50--O20></Box> // opacify color
     * <Box emerald50--L20></Box> // lighten color
     * <Box emerald50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    emerald50?: ResponsiveBoolean
    /**
     * Set color to emerald100
     * ```css
     * { color: #d1fae5; }
     * ```
     * @example
     * ```tsx
     * <Box emerald100></Box>
     * <Box emerald100--T20></Box> // transparentize color
     * <Box emerald100--O20></Box> // opacify color
     * <Box emerald100--L20></Box> // lighten color
     * <Box emerald100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    emerald100?: ResponsiveBoolean
    /**
     * Set color to emerald200
     * ```css
     * { color: #a7f3d0; }
     * ```
     * @example
     * ```tsx
     * <Box emerald200></Box>
     * <Box emerald200--T20></Box> // transparentize color
     * <Box emerald200--O20></Box> // opacify color
     * <Box emerald200--L20></Box> // lighten color
     * <Box emerald200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    emerald200?: ResponsiveBoolean
    /**
     * Set color to emerald300
     * ```css
     * { color: #6ee7b7; }
     * ```
     * @example
     * ```tsx
     * <Box emerald300></Box>
     * <Box emerald300--T20></Box> // transparentize color
     * <Box emerald300--O20></Box> // opacify color
     * <Box emerald300--L20></Box> // lighten color
     * <Box emerald300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    emerald300?: ResponsiveBoolean
    /**
     * Set color to emerald400
     * ```css
     * { color: #34d399; }
     * ```
     * @example
     * ```tsx
     * <Box emerald400></Box>
     * <Box emerald400--T20></Box> // transparentize color
     * <Box emerald400--O20></Box> // opacify color
     * <Box emerald400--L20></Box> // lighten color
     * <Box emerald400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    emerald400?: ResponsiveBoolean
    /**
     * Set color to emerald500
     * ```css
     * { color: #10b981; }
     * ```
     * @example
     * ```tsx
     * <Box emerald500></Box>
     * <Box emerald500--T20></Box> // transparentize color
     * <Box emerald500--O20></Box> // opacify color
     * <Box emerald500--L20></Box> // lighten color
     * <Box emerald500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    emerald500?: ResponsiveBoolean
    /**
     * Set color to emerald600
     * ```css
     * { color: #059669; }
     * ```
     * @example
     * ```tsx
     * <Box emerald600></Box>
     * <Box emerald600--T20></Box> // transparentize color
     * <Box emerald600--O20></Box> // opacify color
     * <Box emerald600--L20></Box> // lighten color
     * <Box emerald600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    emerald600?: ResponsiveBoolean
    /**
     * Set color to emerald700
     * ```css
     * { color: #047857; }
     * ```
     * @example
     * ```tsx
     * <Box emerald700></Box>
     * <Box emerald700--T20></Box> // transparentize color
     * <Box emerald700--O20></Box> // opacify color
     * <Box emerald700--L20></Box> // lighten color
     * <Box emerald700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    emerald700?: ResponsiveBoolean
    /**
     * Set color to emerald800
     * ```css
     * { color: #065f46; }
     * ```
     * @example
     * ```tsx
     * <Box emerald800></Box>
     * <Box emerald800--T20></Box> // transparentize color
     * <Box emerald800--O20></Box> // opacify color
     * <Box emerald800--L20></Box> // lighten color
     * <Box emerald800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    emerald800?: ResponsiveBoolean
    /**
     * Set color to emerald900
     * ```css
     * { color: #064e3b; }
     * ```
     * @example
     * ```tsx
     * <Box emerald900></Box>
     * <Box emerald900--T20></Box> // transparentize color
     * <Box emerald900--O20></Box> // opacify color
     * <Box emerald900--L20></Box> // lighten color
     * <Box emerald900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    emerald900?: ResponsiveBoolean
    /**
     * Set color to emerald950
     * ```css
     * { color: #022c22; }
     * ```
     * @example
     * ```tsx
     * <Box emerald950></Box>
     * <Box emerald950--T20></Box> // transparentize color
     * <Box emerald950--O20></Box> // opacify color
     * <Box emerald950--L20></Box> // lighten color
     * <Box emerald950--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    emerald950?: ResponsiveBoolean
    /**
     * Set color to teal50
     * ```css
     * { color: #f0fdfa; }
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
     * { color: #ccfbf1; }
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
     * { color: #99f6e4; }
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
     * { color: #5eead4; }
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
     * { color: #2dd4bf; }
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
     * { color: #14b8a6; }
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
     * { color: #0d9488; }
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
     * { color: #0f766e; }
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
     * { color: #115e59; }
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
     * { color: #134e4a; }
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
     * Set color to teal950
     * ```css
     * { color: #042f2e; }
     * ```
     * @example
     * ```tsx
     * <Box teal950></Box>
     * <Box teal950--T20></Box> // transparentize color
     * <Box teal950--O20></Box> // opacify color
     * <Box teal950--L20></Box> // lighten color
     * <Box teal950--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    teal950?: ResponsiveBoolean
    /**
     * Set color to cyan50
     * ```css
     * { color: #ecfeff; }
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
     * { color: #cffafe; }
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
     * { color: #a5f3fc; }
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
     * { color: #67e8f9; }
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
     * { color: #22d3ee; }
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
     * { color: #06b6d4; }
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
     * { color: #0891b2; }
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
     * { color: #0e7490; }
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
     * { color: #155e75; }
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
     * { color: #164e63; }
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
     * Set color to cyan950
     * ```css
     * { color: #083344; }
     * ```
     * @example
     * ```tsx
     * <Box cyan950></Box>
     * <Box cyan950--T20></Box> // transparentize color
     * <Box cyan950--O20></Box> // opacify color
     * <Box cyan950--L20></Box> // lighten color
     * <Box cyan950--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    cyan950?: ResponsiveBoolean
    /**
     * Set color to sky50
     * ```css
     * { color: #f0f9ff; }
     * ```
     * @example
     * ```tsx
     * <Box sky50></Box>
     * <Box sky50--T20></Box> // transparentize color
     * <Box sky50--O20></Box> // opacify color
     * <Box sky50--L20></Box> // lighten color
     * <Box sky50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    sky50?: ResponsiveBoolean
    /**
     * Set color to sky100
     * ```css
     * { color: #e0f2fe; }
     * ```
     * @example
     * ```tsx
     * <Box sky100></Box>
     * <Box sky100--T20></Box> // transparentize color
     * <Box sky100--O20></Box> // opacify color
     * <Box sky100--L20></Box> // lighten color
     * <Box sky100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    sky100?: ResponsiveBoolean
    /**
     * Set color to sky200
     * ```css
     * { color: #bae6fd; }
     * ```
     * @example
     * ```tsx
     * <Box sky200></Box>
     * <Box sky200--T20></Box> // transparentize color
     * <Box sky200--O20></Box> // opacify color
     * <Box sky200--L20></Box> // lighten color
     * <Box sky200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    sky200?: ResponsiveBoolean
    /**
     * Set color to sky300
     * ```css
     * { color: #7dd3fc; }
     * ```
     * @example
     * ```tsx
     * <Box sky300></Box>
     * <Box sky300--T20></Box> // transparentize color
     * <Box sky300--O20></Box> // opacify color
     * <Box sky300--L20></Box> // lighten color
     * <Box sky300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    sky300?: ResponsiveBoolean
    /**
     * Set color to sky400
     * ```css
     * { color: #38bdf8; }
     * ```
     * @example
     * ```tsx
     * <Box sky400></Box>
     * <Box sky400--T20></Box> // transparentize color
     * <Box sky400--O20></Box> // opacify color
     * <Box sky400--L20></Box> // lighten color
     * <Box sky400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    sky400?: ResponsiveBoolean
    /**
     * Set color to sky500
     * ```css
     * { color: #0ea5e9; }
     * ```
     * @example
     * ```tsx
     * <Box sky500></Box>
     * <Box sky500--T20></Box> // transparentize color
     * <Box sky500--O20></Box> // opacify color
     * <Box sky500--L20></Box> // lighten color
     * <Box sky500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    sky500?: ResponsiveBoolean
    /**
     * Set color to sky600
     * ```css
     * { color: #0284c7; }
     * ```
     * @example
     * ```tsx
     * <Box sky600></Box>
     * <Box sky600--T20></Box> // transparentize color
     * <Box sky600--O20></Box> // opacify color
     * <Box sky600--L20></Box> // lighten color
     * <Box sky600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    sky600?: ResponsiveBoolean
    /**
     * Set color to sky700
     * ```css
     * { color: #0369a1; }
     * ```
     * @example
     * ```tsx
     * <Box sky700></Box>
     * <Box sky700--T20></Box> // transparentize color
     * <Box sky700--O20></Box> // opacify color
     * <Box sky700--L20></Box> // lighten color
     * <Box sky700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    sky700?: ResponsiveBoolean
    /**
     * Set color to sky800
     * ```css
     * { color: #075985; }
     * ```
     * @example
     * ```tsx
     * <Box sky800></Box>
     * <Box sky800--T20></Box> // transparentize color
     * <Box sky800--O20></Box> // opacify color
     * <Box sky800--L20></Box> // lighten color
     * <Box sky800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    sky800?: ResponsiveBoolean
    /**
     * Set color to sky900
     * ```css
     * { color: #0c4a6e; }
     * ```
     * @example
     * ```tsx
     * <Box sky900></Box>
     * <Box sky900--T20></Box> // transparentize color
     * <Box sky900--O20></Box> // opacify color
     * <Box sky900--L20></Box> // lighten color
     * <Box sky900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    sky900?: ResponsiveBoolean
    /**
     * Set color to sky950
     * ```css
     * { color: #082f49; }
     * ```
     * @example
     * ```tsx
     * <Box sky950></Box>
     * <Box sky950--T20></Box> // transparentize color
     * <Box sky950--O20></Box> // opacify color
     * <Box sky950--L20></Box> // lighten color
     * <Box sky950--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    sky950?: ResponsiveBoolean
    /**
     * Set color to blue50
     * ```css
     * { color: #eff6ff; }
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
     * { color: #dbeafe; }
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
     * { color: #bfdbfe; }
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
     * { color: #93c5fd; }
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
     * { color: #60a5fa; }
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
     * { color: #3b82f6; }
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
     * { color: #2563eb; }
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
     * { color: #1d4ed8; }
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
     * { color: #1e40af; }
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
     * { color: #1e3a8a; }
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
     * Set color to blue950
     * ```css
     * { color: #172554; }
     * ```
     * @example
     * ```tsx
     * <Box blue950></Box>
     * <Box blue950--T20></Box> // transparentize color
     * <Box blue950--O20></Box> // opacify color
     * <Box blue950--L20></Box> // lighten color
     * <Box blue950--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    blue950?: ResponsiveBoolean
    /**
     * Set color to indigo50
     * ```css
     * { color: #eef2ff; }
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
     * { color: #e0e7ff; }
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
     * { color: #c7d2fe; }
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
     * { color: #a5b4fc; }
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
     * { color: #818cf8; }
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
     * { color: #6366f1; }
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
     * { color: #4f46e5; }
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
     * { color: #4338ca; }
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
     * { color: #3730a3; }
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
     * { color: #312e81; }
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
     * Set color to indigo950
     * ```css
     * { color: #1e1b4b; }
     * ```
     * @example
     * ```tsx
     * <Box indigo950></Box>
     * <Box indigo950--T20></Box> // transparentize color
     * <Box indigo950--O20></Box> // opacify color
     * <Box indigo950--L20></Box> // lighten color
     * <Box indigo950--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    indigo950?: ResponsiveBoolean
    /**
     * Set color to violet50
     * ```css
     * { color: #f5f3ff; }
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
     * { color: #ede9fe; }
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
     * { color: #ddd6fe; }
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
     * { color: #c4b5fd; }
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
     * { color: #a78bfa; }
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
     * { color: #8b5cf6; }
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
     * { color: #7c3aed; }
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
     * { color: #6d28d9; }
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
     * { color: #5b21b6; }
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
     * { color: #4c1d95; }
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
     * Set color to violet950
     * ```css
     * { color: #2e1065; }
     * ```
     * @example
     * ```tsx
     * <Box violet950></Box>
     * <Box violet950--T20></Box> // transparentize color
     * <Box violet950--O20></Box> // opacify color
     * <Box violet950--L20></Box> // lighten color
     * <Box violet950--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    violet950?: ResponsiveBoolean
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
     * Set color to purple950
     * ```css
     * { color: #3b0764; }
     * ```
     * @example
     * ```tsx
     * <Box purple950></Box>
     * <Box purple950--T20></Box> // transparentize color
     * <Box purple950--O20></Box> // opacify color
     * <Box purple950--L20></Box> // lighten color
     * <Box purple950--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    purple950?: ResponsiveBoolean
    /**
     * Set color to fuchsia50
     * ```css
     * { color: #fdf4ff; }
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
     * { color: #fae8ff; }
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
     * { color: #f5d0fe; }
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
     * { color: #f0abfc; }
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
     * { color: #e879f9; }
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
     * { color: #d946ef; }
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
     * { color: #c026d3; }
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
     * { color: #a21caf; }
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
     * { color: #86198f; }
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
     * { color: #701a75; }
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
     * Set color to fuchsia950
     * ```css
     * { color: #4a044e; }
     * ```
     * @example
     * ```tsx
     * <Box fuchsia950></Box>
     * <Box fuchsia950--T20></Box> // transparentize color
     * <Box fuchsia950--O20></Box> // opacify color
     * <Box fuchsia950--L20></Box> // lighten color
     * <Box fuchsia950--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    fuchsia950?: ResponsiveBoolean
    /**
     * Set color to pink50
     * ```css
     * { color: #fdf2f8; }
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
     * { color: #fce7f3; }
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
     * { color: #fbcfe8; }
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
     * { color: #f9a8d4; }
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
     * { color: #f472b6; }
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
     * { color: #ec4899; }
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
     * { color: #db2777; }
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
     * { color: #be185d; }
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
     * { color: #9d174d; }
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
     * { color: #831843; }
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
     * Set color to pink950
     * ```css
     * { color: #500724; }
     * ```
     * @example
     * ```tsx
     * <Box pink950></Box>
     * <Box pink950--T20></Box> // transparentize color
     * <Box pink950--O20></Box> // opacify color
     * <Box pink950--L20></Box> // lighten color
     * <Box pink950--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    pink950?: ResponsiveBoolean
    /**
     * Set color to rose50
     * ```css
     * { color: #fff1f2; }
     * ```
     * @example
     * ```tsx
     * <Box rose50></Box>
     * <Box rose50--T20></Box> // transparentize color
     * <Box rose50--O20></Box> // opacify color
     * <Box rose50--L20></Box> // lighten color
     * <Box rose50--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    rose50?: ResponsiveBoolean
    /**
     * Set color to rose100
     * ```css
     * { color: #ffe4e6; }
     * ```
     * @example
     * ```tsx
     * <Box rose100></Box>
     * <Box rose100--T20></Box> // transparentize color
     * <Box rose100--O20></Box> // opacify color
     * <Box rose100--L20></Box> // lighten color
     * <Box rose100--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    rose100?: ResponsiveBoolean
    /**
     * Set color to rose200
     * ```css
     * { color: #fecdd3; }
     * ```
     * @example
     * ```tsx
     * <Box rose200></Box>
     * <Box rose200--T20></Box> // transparentize color
     * <Box rose200--O20></Box> // opacify color
     * <Box rose200--L20></Box> // lighten color
     * <Box rose200--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    rose200?: ResponsiveBoolean
    /**
     * Set color to rose300
     * ```css
     * { color: #fda4af; }
     * ```
     * @example
     * ```tsx
     * <Box rose300></Box>
     * <Box rose300--T20></Box> // transparentize color
     * <Box rose300--O20></Box> // opacify color
     * <Box rose300--L20></Box> // lighten color
     * <Box rose300--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    rose300?: ResponsiveBoolean
    /**
     * Set color to rose400
     * ```css
     * { color: #fb7185; }
     * ```
     * @example
     * ```tsx
     * <Box rose400></Box>
     * <Box rose400--T20></Box> // transparentize color
     * <Box rose400--O20></Box> // opacify color
     * <Box rose400--L20></Box> // lighten color
     * <Box rose400--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    rose400?: ResponsiveBoolean
    /**
     * Set color to rose500
     * ```css
     * { color: #f43f5e; }
     * ```
     * @example
     * ```tsx
     * <Box rose500></Box>
     * <Box rose500--T20></Box> // transparentize color
     * <Box rose500--O20></Box> // opacify color
     * <Box rose500--L20></Box> // lighten color
     * <Box rose500--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    rose500?: ResponsiveBoolean
    /**
     * Set color to rose600
     * ```css
     * { color: #e11d48; }
     * ```
     * @example
     * ```tsx
     * <Box rose600></Box>
     * <Box rose600--T20></Box> // transparentize color
     * <Box rose600--O20></Box> // opacify color
     * <Box rose600--L20></Box> // lighten color
     * <Box rose600--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    rose600?: ResponsiveBoolean
    /**
     * Set color to rose700
     * ```css
     * { color: #be123c; }
     * ```
     * @example
     * ```tsx
     * <Box rose700></Box>
     * <Box rose700--T20></Box> // transparentize color
     * <Box rose700--O20></Box> // opacify color
     * <Box rose700--L20></Box> // lighten color
     * <Box rose700--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    rose700?: ResponsiveBoolean
    /**
     * Set color to rose800
     * ```css
     * { color: #9f1239; }
     * ```
     * @example
     * ```tsx
     * <Box rose800></Box>
     * <Box rose800--T20></Box> // transparentize color
     * <Box rose800--O20></Box> // opacify color
     * <Box rose800--L20></Box> // lighten color
     * <Box rose800--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    rose800?: ResponsiveBoolean
    /**
     * Set color to rose900
     * ```css
     * { color: #881337; }
     * ```
     * @example
     * ```tsx
     * <Box rose900></Box>
     * <Box rose900--T20></Box> // transparentize color
     * <Box rose900--O20></Box> // opacify color
     * <Box rose900--L20></Box> // lighten color
     * <Box rose900--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    rose900?: ResponsiveBoolean
    /**
     * Set color to rose950
     * ```css
     * { color: #4c0519; }
     * ```
     * @example
     * ```tsx
     * <Box rose950></Box>
     * <Box rose950--T20></Box> // transparentize color
     * <Box rose950--O20></Box> // opacify color
     * <Box rose950--L20></Box> // lighten color
     * <Box rose950--D20></Box> // darken color
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    rose950?: ResponsiveBoolean
  }
}
