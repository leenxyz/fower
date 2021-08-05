import { FowerPlugin, ResponsiveValue, ResponsiveBoolean } from "@fower/core"
declare const _default: () => FowerPlugin
export default _default

declare module '@fower/atomic-props' {
  export interface AtomicProps {
    /**
     * set border-radius to some value
     * ```css
     * {
     *   border-radius: $value;
     * }
     * ```
     * @example
     * ```tsx
     * <Box rounded-4></Box>
     * <Box rounded-1rem></Box>
     * <Box rounded-8px></Box>
     * <Box rounded={8}></Box>
     * <Box rounded={a + b}></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    rounded?: ResponsiveValue<string | number>
    /**
     * set border-radius to 0
     * ```css
     * {
     *   border-radius: 0px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box roundedNone></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    roundedNone?: ResponsiveBoolean
    /**
     * set border-radius to 2
     * ```css
     * {
     *   border-radius: 2px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box roundedTiny></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    roundedTiny?: ResponsiveBoolean
    /**
     * set border-radius to 4
     * ```css
     * {
     *   border-radius: 4px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box roundedSmall></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    roundedSmall?: ResponsiveBoolean
    /**
     * set border-radius to 6
     * ```css
     * {
     *   border-radius: 6px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box roundedMedium></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    roundedMedium?: ResponsiveBoolean
    /**
     * set border-radius to 8
     * ```css
     * {
     *   border-radius: 8px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box roundedLarge></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    roundedLarge?: ResponsiveBoolean
    /**
     * set border-radius to 12
     * ```css
     * {
     *   border-radius: 12px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box roundedHuge></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    roundedHuge?: ResponsiveBoolean
    /**
     * set border-radius to 16
     * ```css
     * {
     *   border-radius: 16px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box roundedGigantic></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    roundedGigantic?: ResponsiveBoolean
    /**
     * set border-radius to 9999
     * ```css
     * {
     *   border-radius: 9999px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box roundedFull></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    roundedFull?: ResponsiveBoolean
    /**
     * set border-top-left-radius border-top-right-radius to some value
     * ```css
     * {
     *   border-top-left-radius: $value;
     *   border-top-right-radius: $value;
     * }
     * ```
     * @example
     * ```tsx
     * <Box roundedTop-4></Box>
     * <Box roundedTop-1rem></Box>
     * <Box roundedTop-8px></Box>
     * <Box roundedTop={8}></Box>
     * <Box roundedTop={a + b}></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    roundedTop?: ResponsiveValue<string | number>
    /**
     * set border-top-left-radius border-top-right-radius to 0
     * ```css
     * {
     *   border-top-left-radius: 0px;
     *   border-top-right-radius: 0px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box roundedTopNone></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    roundedTopNone?: ResponsiveBoolean
    /**
     * set border-top-left-radius border-top-right-radius to 2
     * ```css
     * {
     *   border-top-left-radius: 2px;
     *   border-top-right-radius: 2px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box roundedTopTiny></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    roundedTopTiny?: ResponsiveBoolean
    /**
     * set border-top-left-radius border-top-right-radius to 4
     * ```css
     * {
     *   border-top-left-radius: 4px;
     *   border-top-right-radius: 4px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box roundedTopSmall></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    roundedTopSmall?: ResponsiveBoolean
    /**
     * set border-top-left-radius border-top-right-radius to 6
     * ```css
     * {
     *   border-top-left-radius: 6px;
     *   border-top-right-radius: 6px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box roundedTopMedium></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    roundedTopMedium?: ResponsiveBoolean
    /**
     * set border-top-left-radius border-top-right-radius to 8
     * ```css
     * {
     *   border-top-left-radius: 8px;
     *   border-top-right-radius: 8px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box roundedTopLarge></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    roundedTopLarge?: ResponsiveBoolean
    /**
     * set border-top-left-radius border-top-right-radius to 12
     * ```css
     * {
     *   border-top-left-radius: 12px;
     *   border-top-right-radius: 12px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box roundedTopHuge></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    roundedTopHuge?: ResponsiveBoolean
    /**
     * set border-top-left-radius border-top-right-radius to 16
     * ```css
     * {
     *   border-top-left-radius: 16px;
     *   border-top-right-radius: 16px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box roundedTopGigantic></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    roundedTopGigantic?: ResponsiveBoolean
    /**
     * set border-top-left-radius border-top-right-radius to 9999
     * ```css
     * {
     *   border-top-left-radius: 9999px;
     *   border-top-right-radius: 9999px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box roundedTopFull></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    roundedTopFull?: ResponsiveBoolean
    /**
     * set border-top-right-radius border-bottom-right-radius to some value
     * ```css
     * {
     *   border-top-right-radius: $value;
     *   border-bottom-right-radius: $value;
     * }
     * ```
     * @example
     * ```tsx
     * <Box roundedRight-4></Box>
     * <Box roundedRight-1rem></Box>
     * <Box roundedRight-8px></Box>
     * <Box roundedRight={8}></Box>
     * <Box roundedRight={a + b}></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    roundedRight?: ResponsiveValue<string | number>
    /**
     * set border-top-right-radius border-bottom-right-radius to 0
     * ```css
     * {
     *   border-top-right-radius: 0px;
     *   border-bottom-right-radius: 0px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box roundedRightNone></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    roundedRightNone?: ResponsiveBoolean
    /**
     * set border-top-right-radius border-bottom-right-radius to 2
     * ```css
     * {
     *   border-top-right-radius: 2px;
     *   border-bottom-right-radius: 2px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box roundedRightTiny></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    roundedRightTiny?: ResponsiveBoolean
    /**
     * set border-top-right-radius border-bottom-right-radius to 4
     * ```css
     * {
     *   border-top-right-radius: 4px;
     *   border-bottom-right-radius: 4px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box roundedRightSmall></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    roundedRightSmall?: ResponsiveBoolean
    /**
     * set border-top-right-radius border-bottom-right-radius to 6
     * ```css
     * {
     *   border-top-right-radius: 6px;
     *   border-bottom-right-radius: 6px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box roundedRightMedium></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    roundedRightMedium?: ResponsiveBoolean
    /**
     * set border-top-right-radius border-bottom-right-radius to 8
     * ```css
     * {
     *   border-top-right-radius: 8px;
     *   border-bottom-right-radius: 8px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box roundedRightLarge></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    roundedRightLarge?: ResponsiveBoolean
    /**
     * set border-top-right-radius border-bottom-right-radius to 12
     * ```css
     * {
     *   border-top-right-radius: 12px;
     *   border-bottom-right-radius: 12px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box roundedRightHuge></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    roundedRightHuge?: ResponsiveBoolean
    /**
     * set border-top-right-radius border-bottom-right-radius to 16
     * ```css
     * {
     *   border-top-right-radius: 16px;
     *   border-bottom-right-radius: 16px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box roundedRightGigantic></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    roundedRightGigantic?: ResponsiveBoolean
    /**
     * set border-top-right-radius border-bottom-right-radius to 9999
     * ```css
     * {
     *   border-top-right-radius: 9999px;
     *   border-bottom-right-radius: 9999px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box roundedRightFull></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    roundedRightFull?: ResponsiveBoolean
    /**
     * set border-bottom-left-radius border-bottom-right-radius to some value
     * ```css
     * {
     *   border-bottom-left-radius: $value;
     *   border-bottom-right-radius: $value;
     * }
     * ```
     * @example
     * ```tsx
     * <Box roundedBottom-4></Box>
     * <Box roundedBottom-1rem></Box>
     * <Box roundedBottom-8px></Box>
     * <Box roundedBottom={8}></Box>
     * <Box roundedBottom={a + b}></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    roundedBottom?: ResponsiveValue<string | number>
    /**
     * set border-bottom-left-radius border-bottom-right-radius to 0
     * ```css
     * {
     *   border-bottom-left-radius: 0px;
     *   border-bottom-right-radius: 0px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box roundedBottomNone></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    roundedBottomNone?: ResponsiveBoolean
    /**
     * set border-bottom-left-radius border-bottom-right-radius to 2
     * ```css
     * {
     *   border-bottom-left-radius: 2px;
     *   border-bottom-right-radius: 2px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box roundedBottomTiny></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    roundedBottomTiny?: ResponsiveBoolean
    /**
     * set border-bottom-left-radius border-bottom-right-radius to 4
     * ```css
     * {
     *   border-bottom-left-radius: 4px;
     *   border-bottom-right-radius: 4px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box roundedBottomSmall></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    roundedBottomSmall?: ResponsiveBoolean
    /**
     * set border-bottom-left-radius border-bottom-right-radius to 6
     * ```css
     * {
     *   border-bottom-left-radius: 6px;
     *   border-bottom-right-radius: 6px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box roundedBottomMedium></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    roundedBottomMedium?: ResponsiveBoolean
    /**
     * set border-bottom-left-radius border-bottom-right-radius to 8
     * ```css
     * {
     *   border-bottom-left-radius: 8px;
     *   border-bottom-right-radius: 8px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box roundedBottomLarge></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    roundedBottomLarge?: ResponsiveBoolean
    /**
     * set border-bottom-left-radius border-bottom-right-radius to 12
     * ```css
     * {
     *   border-bottom-left-radius: 12px;
     *   border-bottom-right-radius: 12px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box roundedBottomHuge></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    roundedBottomHuge?: ResponsiveBoolean
    /**
     * set border-bottom-left-radius border-bottom-right-radius to 16
     * ```css
     * {
     *   border-bottom-left-radius: 16px;
     *   border-bottom-right-radius: 16px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box roundedBottomGigantic></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    roundedBottomGigantic?: ResponsiveBoolean
    /**
     * set border-bottom-left-radius border-bottom-right-radius to 9999
     * ```css
     * {
     *   border-bottom-left-radius: 9999px;
     *   border-bottom-right-radius: 9999px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box roundedBottomFull></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    roundedBottomFull?: ResponsiveBoolean
    /**
     * set border-top-left-radius border-bottom-left-radius to some value
     * ```css
     * {
     *   border-top-left-radius: $value;
     *   border-bottom-left-radius: $value;
     * }
     * ```
     * @example
     * ```tsx
     * <Box roundedLeft-4></Box>
     * <Box roundedLeft-1rem></Box>
     * <Box roundedLeft-8px></Box>
     * <Box roundedLeft={8}></Box>
     * <Box roundedLeft={a + b}></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    roundedLeft?: ResponsiveValue<string | number>
    /**
     * set border-top-left-radius border-bottom-left-radius to 0
     * ```css
     * {
     *   border-top-left-radius: 0px;
     *   border-bottom-left-radius: 0px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box roundedLeftNone></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    roundedLeftNone?: ResponsiveBoolean
    /**
     * set border-top-left-radius border-bottom-left-radius to 2
     * ```css
     * {
     *   border-top-left-radius: 2px;
     *   border-bottom-left-radius: 2px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box roundedLeftTiny></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    roundedLeftTiny?: ResponsiveBoolean
    /**
     * set border-top-left-radius border-bottom-left-radius to 4
     * ```css
     * {
     *   border-top-left-radius: 4px;
     *   border-bottom-left-radius: 4px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box roundedLeftSmall></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    roundedLeftSmall?: ResponsiveBoolean
    /**
     * set border-top-left-radius border-bottom-left-radius to 6
     * ```css
     * {
     *   border-top-left-radius: 6px;
     *   border-bottom-left-radius: 6px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box roundedLeftMedium></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    roundedLeftMedium?: ResponsiveBoolean
    /**
     * set border-top-left-radius border-bottom-left-radius to 8
     * ```css
     * {
     *   border-top-left-radius: 8px;
     *   border-bottom-left-radius: 8px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box roundedLeftLarge></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    roundedLeftLarge?: ResponsiveBoolean
    /**
     * set border-top-left-radius border-bottom-left-radius to 12
     * ```css
     * {
     *   border-top-left-radius: 12px;
     *   border-bottom-left-radius: 12px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box roundedLeftHuge></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    roundedLeftHuge?: ResponsiveBoolean
    /**
     * set border-top-left-radius border-bottom-left-radius to 16
     * ```css
     * {
     *   border-top-left-radius: 16px;
     *   border-bottom-left-radius: 16px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box roundedLeftGigantic></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    roundedLeftGigantic?: ResponsiveBoolean
    /**
     * set border-top-left-radius border-bottom-left-radius to 9999
     * ```css
     * {
     *   border-top-left-radius: 9999px;
     *   border-bottom-left-radius: 9999px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box roundedLeftFull></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    roundedLeftFull?: ResponsiveBoolean
    /**
     * set border-top-left-radius to some value
     * ```css
     * {
     *   border-top-left-radius: $value;
     * }
     * ```
     * @example
     * ```tsx
     * <Box roundedTopLeft-4></Box>
     * <Box roundedTopLeft-1rem></Box>
     * <Box roundedTopLeft-8px></Box>
     * <Box roundedTopLeft={8}></Box>
     * <Box roundedTopLeft={a + b}></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    roundedTopLeft?: ResponsiveValue<string | number>
    /**
     * set border-top-left-radius to 0
     * ```css
     * {
     *   border-top-left-radius: 0px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box roundedTopLeftNone></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    roundedTopLeftNone?: ResponsiveBoolean
    /**
     * set border-top-left-radius to 2
     * ```css
     * {
     *   border-top-left-radius: 2px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box roundedTopLeftTiny></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    roundedTopLeftTiny?: ResponsiveBoolean
    /**
     * set border-top-left-radius to 4
     * ```css
     * {
     *   border-top-left-radius: 4px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box roundedTopLeftSmall></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    roundedTopLeftSmall?: ResponsiveBoolean
    /**
     * set border-top-left-radius to 6
     * ```css
     * {
     *   border-top-left-radius: 6px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box roundedTopLeftMedium></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    roundedTopLeftMedium?: ResponsiveBoolean
    /**
     * set border-top-left-radius to 8
     * ```css
     * {
     *   border-top-left-radius: 8px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box roundedTopLeftLarge></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    roundedTopLeftLarge?: ResponsiveBoolean
    /**
     * set border-top-left-radius to 12
     * ```css
     * {
     *   border-top-left-radius: 12px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box roundedTopLeftHuge></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    roundedTopLeftHuge?: ResponsiveBoolean
    /**
     * set border-top-left-radius to 16
     * ```css
     * {
     *   border-top-left-radius: 16px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box roundedTopLeftGigantic></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    roundedTopLeftGigantic?: ResponsiveBoolean
    /**
     * set border-top-left-radius to 9999
     * ```css
     * {
     *   border-top-left-radius: 9999px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box roundedTopLeftFull></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    roundedTopLeftFull?: ResponsiveBoolean
    /**
     * set border-top-right-radius to some value
     * ```css
     * {
     *   border-top-right-radius: $value;
     * }
     * ```
     * @example
     * ```tsx
     * <Box roundedTopRight-4></Box>
     * <Box roundedTopRight-1rem></Box>
     * <Box roundedTopRight-8px></Box>
     * <Box roundedTopRight={8}></Box>
     * <Box roundedTopRight={a + b}></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    roundedTopRight?: ResponsiveValue<string | number>
    /**
     * set border-top-right-radius to 0
     * ```css
     * {
     *   border-top-right-radius: 0px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box roundedTopRightNone></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    roundedTopRightNone?: ResponsiveBoolean
    /**
     * set border-top-right-radius to 2
     * ```css
     * {
     *   border-top-right-radius: 2px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box roundedTopRightTiny></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    roundedTopRightTiny?: ResponsiveBoolean
    /**
     * set border-top-right-radius to 4
     * ```css
     * {
     *   border-top-right-radius: 4px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box roundedTopRightSmall></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    roundedTopRightSmall?: ResponsiveBoolean
    /**
     * set border-top-right-radius to 6
     * ```css
     * {
     *   border-top-right-radius: 6px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box roundedTopRightMedium></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    roundedTopRightMedium?: ResponsiveBoolean
    /**
     * set border-top-right-radius to 8
     * ```css
     * {
     *   border-top-right-radius: 8px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box roundedTopRightLarge></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    roundedTopRightLarge?: ResponsiveBoolean
    /**
     * set border-top-right-radius to 12
     * ```css
     * {
     *   border-top-right-radius: 12px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box roundedTopRightHuge></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    roundedTopRightHuge?: ResponsiveBoolean
    /**
     * set border-top-right-radius to 16
     * ```css
     * {
     *   border-top-right-radius: 16px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box roundedTopRightGigantic></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    roundedTopRightGigantic?: ResponsiveBoolean
    /**
     * set border-top-right-radius to 9999
     * ```css
     * {
     *   border-top-right-radius: 9999px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box roundedTopRightFull></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    roundedTopRightFull?: ResponsiveBoolean
    /**
     * set border-bottom-left-radius to some value
     * ```css
     * {
     *   border-bottom-left-radius: $value;
     * }
     * ```
     * @example
     * ```tsx
     * <Box roundedBottomLeft-4></Box>
     * <Box roundedBottomLeft-1rem></Box>
     * <Box roundedBottomLeft-8px></Box>
     * <Box roundedBottomLeft={8}></Box>
     * <Box roundedBottomLeft={a + b}></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    roundedBottomLeft?: ResponsiveValue<string | number>
    /**
     * set border-bottom-left-radius to 0
     * ```css
     * {
     *   border-bottom-left-radius: 0px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box roundedBottomLeftNone></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    roundedBottomLeftNone?: ResponsiveBoolean
    /**
     * set border-bottom-left-radius to 2
     * ```css
     * {
     *   border-bottom-left-radius: 2px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box roundedBottomLeftTiny></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    roundedBottomLeftTiny?: ResponsiveBoolean
    /**
     * set border-bottom-left-radius to 4
     * ```css
     * {
     *   border-bottom-left-radius: 4px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box roundedBottomLeftSmall></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    roundedBottomLeftSmall?: ResponsiveBoolean
    /**
     * set border-bottom-left-radius to 6
     * ```css
     * {
     *   border-bottom-left-radius: 6px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box roundedBottomLeftMedium></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    roundedBottomLeftMedium?: ResponsiveBoolean
    /**
     * set border-bottom-left-radius to 8
     * ```css
     * {
     *   border-bottom-left-radius: 8px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box roundedBottomLeftLarge></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    roundedBottomLeftLarge?: ResponsiveBoolean
    /**
     * set border-bottom-left-radius to 12
     * ```css
     * {
     *   border-bottom-left-radius: 12px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box roundedBottomLeftHuge></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    roundedBottomLeftHuge?: ResponsiveBoolean
    /**
     * set border-bottom-left-radius to 16
     * ```css
     * {
     *   border-bottom-left-radius: 16px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box roundedBottomLeftGigantic></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    roundedBottomLeftGigantic?: ResponsiveBoolean
    /**
     * set border-bottom-left-radius to 9999
     * ```css
     * {
     *   border-bottom-left-radius: 9999px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box roundedBottomLeftFull></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    roundedBottomLeftFull?: ResponsiveBoolean
    /**
     * set border-bottom-right-radius to some value
     * ```css
     * {
     *   border-bottom-right-radius: $value;
     * }
     * ```
     * @example
     * ```tsx
     * <Box roundedBottomRight-4></Box>
     * <Box roundedBottomRight-1rem></Box>
     * <Box roundedBottomRight-8px></Box>
     * <Box roundedBottomRight={8}></Box>
     * <Box roundedBottomRight={a + b}></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    roundedBottomRight?: ResponsiveValue<string | number>
    /**
     * set border-bottom-right-radius to 0
     * ```css
     * {
     *   border-bottom-right-radius: 0px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box roundedBottomRightNone></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    roundedBottomRightNone?: ResponsiveBoolean
    /**
     * set border-bottom-right-radius to 2
     * ```css
     * {
     *   border-bottom-right-radius: 2px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box roundedBottomRightTiny></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    roundedBottomRightTiny?: ResponsiveBoolean
    /**
     * set border-bottom-right-radius to 4
     * ```css
     * {
     *   border-bottom-right-radius: 4px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box roundedBottomRightSmall></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    roundedBottomRightSmall?: ResponsiveBoolean
    /**
     * set border-bottom-right-radius to 6
     * ```css
     * {
     *   border-bottom-right-radius: 6px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box roundedBottomRightMedium></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    roundedBottomRightMedium?: ResponsiveBoolean
    /**
     * set border-bottom-right-radius to 8
     * ```css
     * {
     *   border-bottom-right-radius: 8px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box roundedBottomRightLarge></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    roundedBottomRightLarge?: ResponsiveBoolean
    /**
     * set border-bottom-right-radius to 12
     * ```css
     * {
     *   border-bottom-right-radius: 12px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box roundedBottomRightHuge></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    roundedBottomRightHuge?: ResponsiveBoolean
    /**
     * set border-bottom-right-radius to 16
     * ```css
     * {
     *   border-bottom-right-radius: 16px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box roundedBottomRightGigantic></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    roundedBottomRightGigantic?: ResponsiveBoolean
    /**
     * set border-bottom-right-radius to 9999
     * ```css
     * {
     *   border-bottom-right-radius: 9999px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box roundedBottomRightFull></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    roundedBottomRightFull?: ResponsiveBoolean
  }
}
