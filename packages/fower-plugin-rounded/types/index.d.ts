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
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius
     */
    rounded?: ResponsiveValue<string | number | boolean>
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
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius
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
     * <Box roundedSM></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius
     */
    roundedSM?: ResponsiveBoolean
    /**
     * set border-radius to 4
     * ```css
     * {
     *   border-radius: 4px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box roundedMD></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius
     */
    roundedMD?: ResponsiveBoolean
    /**
     * set border-radius to 6
     * ```css
     * {
     *   border-radius: 6px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box roundedLG></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius
     */
    roundedLG?: ResponsiveBoolean
    /**
     * set border-radius to 8
     * ```css
     * {
     *   border-radius: 8px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box roundedXL></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius
     */
    roundedXL?: ResponsiveBoolean
    /**
     * set border-radius to 12
     * ```css
     * {
     *   border-radius: 12px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box rounded2XL></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius
     */
    rounded2XL?: ResponsiveBoolean
    /**
     * set border-radius to 16
     * ```css
     * {
     *   border-radius: 16px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box rounded3XL></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius
     */
    rounded3XL?: ResponsiveBoolean
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
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius
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
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius
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
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius
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
     * <Box roundedTopSM></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius
     */
    roundedTopSM?: ResponsiveBoolean
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
     * <Box roundedTopMD></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius
     */
    roundedTopMD?: ResponsiveBoolean
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
     * <Box roundedTopLG></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius
     */
    roundedTopLG?: ResponsiveBoolean
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
     * <Box roundedTopXL></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius
     */
    roundedTopXL?: ResponsiveBoolean
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
     * <Box roundedTop2XL></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius
     */
    roundedTop2XL?: ResponsiveBoolean
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
     * <Box roundedTop3XL></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius
     */
    roundedTop3XL?: ResponsiveBoolean
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
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius
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
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius
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
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius
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
     * <Box roundedRightSM></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius
     */
    roundedRightSM?: ResponsiveBoolean
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
     * <Box roundedRightMD></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius
     */
    roundedRightMD?: ResponsiveBoolean
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
     * <Box roundedRightLG></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius
     */
    roundedRightLG?: ResponsiveBoolean
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
     * <Box roundedRightXL></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius
     */
    roundedRightXL?: ResponsiveBoolean
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
     * <Box roundedRight2XL></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius
     */
    roundedRight2XL?: ResponsiveBoolean
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
     * <Box roundedRight3XL></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius
     */
    roundedRight3XL?: ResponsiveBoolean
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
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius
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
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius
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
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius
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
     * <Box roundedBottomSM></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius
     */
    roundedBottomSM?: ResponsiveBoolean
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
     * <Box roundedBottomMD></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius
     */
    roundedBottomMD?: ResponsiveBoolean
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
     * <Box roundedBottomLG></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius
     */
    roundedBottomLG?: ResponsiveBoolean
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
     * <Box roundedBottomXL></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius
     */
    roundedBottomXL?: ResponsiveBoolean
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
     * <Box roundedBottom2XL></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius
     */
    roundedBottom2XL?: ResponsiveBoolean
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
     * <Box roundedBottom3XL></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius
     */
    roundedBottom3XL?: ResponsiveBoolean
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
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius
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
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius
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
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius
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
     * <Box roundedLeftSM></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius
     */
    roundedLeftSM?: ResponsiveBoolean
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
     * <Box roundedLeftMD></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius
     */
    roundedLeftMD?: ResponsiveBoolean
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
     * <Box roundedLeftLG></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius
     */
    roundedLeftLG?: ResponsiveBoolean
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
     * <Box roundedLeftXL></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius
     */
    roundedLeftXL?: ResponsiveBoolean
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
     * <Box roundedLeft2XL></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius
     */
    roundedLeft2XL?: ResponsiveBoolean
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
     * <Box roundedLeft3XL></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius
     */
    roundedLeft3XL?: ResponsiveBoolean
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
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius
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
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius
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
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius
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
     * <Box roundedTopLeftSM></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius
     */
    roundedTopLeftSM?: ResponsiveBoolean
    /**
     * set border-top-left-radius to 4
     * ```css
     * {
     *   border-top-left-radius: 4px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box roundedTopLeftMD></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius
     */
    roundedTopLeftMD?: ResponsiveBoolean
    /**
     * set border-top-left-radius to 6
     * ```css
     * {
     *   border-top-left-radius: 6px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box roundedTopLeftLG></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius
     */
    roundedTopLeftLG?: ResponsiveBoolean
    /**
     * set border-top-left-radius to 8
     * ```css
     * {
     *   border-top-left-radius: 8px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box roundedTopLeftXL></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius
     */
    roundedTopLeftXL?: ResponsiveBoolean
    /**
     * set border-top-left-radius to 12
     * ```css
     * {
     *   border-top-left-radius: 12px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box roundedTopLeft2XL></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius
     */
    roundedTopLeft2XL?: ResponsiveBoolean
    /**
     * set border-top-left-radius to 16
     * ```css
     * {
     *   border-top-left-radius: 16px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box roundedTopLeft3XL></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius
     */
    roundedTopLeft3XL?: ResponsiveBoolean
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
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius
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
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius
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
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius
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
     * <Box roundedTopRightSM></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius
     */
    roundedTopRightSM?: ResponsiveBoolean
    /**
     * set border-top-right-radius to 4
     * ```css
     * {
     *   border-top-right-radius: 4px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box roundedTopRightMD></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius
     */
    roundedTopRightMD?: ResponsiveBoolean
    /**
     * set border-top-right-radius to 6
     * ```css
     * {
     *   border-top-right-radius: 6px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box roundedTopRightLG></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius
     */
    roundedTopRightLG?: ResponsiveBoolean
    /**
     * set border-top-right-radius to 8
     * ```css
     * {
     *   border-top-right-radius: 8px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box roundedTopRightXL></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius
     */
    roundedTopRightXL?: ResponsiveBoolean
    /**
     * set border-top-right-radius to 12
     * ```css
     * {
     *   border-top-right-radius: 12px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box roundedTopRight2XL></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius
     */
    roundedTopRight2XL?: ResponsiveBoolean
    /**
     * set border-top-right-radius to 16
     * ```css
     * {
     *   border-top-right-radius: 16px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box roundedTopRight3XL></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius
     */
    roundedTopRight3XL?: ResponsiveBoolean
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
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius
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
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius
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
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius
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
     * <Box roundedBottomLeftSM></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius
     */
    roundedBottomLeftSM?: ResponsiveBoolean
    /**
     * set border-bottom-left-radius to 4
     * ```css
     * {
     *   border-bottom-left-radius: 4px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box roundedBottomLeftMD></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius
     */
    roundedBottomLeftMD?: ResponsiveBoolean
    /**
     * set border-bottom-left-radius to 6
     * ```css
     * {
     *   border-bottom-left-radius: 6px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box roundedBottomLeftLG></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius
     */
    roundedBottomLeftLG?: ResponsiveBoolean
    /**
     * set border-bottom-left-radius to 8
     * ```css
     * {
     *   border-bottom-left-radius: 8px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box roundedBottomLeftXL></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius
     */
    roundedBottomLeftXL?: ResponsiveBoolean
    /**
     * set border-bottom-left-radius to 12
     * ```css
     * {
     *   border-bottom-left-radius: 12px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box roundedBottomLeft2XL></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius
     */
    roundedBottomLeft2XL?: ResponsiveBoolean
    /**
     * set border-bottom-left-radius to 16
     * ```css
     * {
     *   border-bottom-left-radius: 16px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box roundedBottomLeft3XL></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius
     */
    roundedBottomLeft3XL?: ResponsiveBoolean
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
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius
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
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius
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
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius
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
     * <Box roundedBottomRightSM></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius
     */
    roundedBottomRightSM?: ResponsiveBoolean
    /**
     * set border-bottom-right-radius to 4
     * ```css
     * {
     *   border-bottom-right-radius: 4px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box roundedBottomRightMD></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius
     */
    roundedBottomRightMD?: ResponsiveBoolean
    /**
     * set border-bottom-right-radius to 6
     * ```css
     * {
     *   border-bottom-right-radius: 6px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box roundedBottomRightLG></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius
     */
    roundedBottomRightLG?: ResponsiveBoolean
    /**
     * set border-bottom-right-radius to 8
     * ```css
     * {
     *   border-bottom-right-radius: 8px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box roundedBottomRightXL></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius
     */
    roundedBottomRightXL?: ResponsiveBoolean
    /**
     * set border-bottom-right-radius to 12
     * ```css
     * {
     *   border-bottom-right-radius: 12px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box roundedBottomRight2XL></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius
     */
    roundedBottomRight2XL?: ResponsiveBoolean
    /**
     * set border-bottom-right-radius to 16
     * ```css
     * {
     *   border-bottom-right-radius: 16px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box roundedBottomRight3XL></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius
     */
    roundedBottomRight3XL?: ResponsiveBoolean
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
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius
     */
    roundedBottomRightFull?: ResponsiveBoolean
  }
}
