import { FowerPlugin, PropValue } from '@fower/core'

declare const _default: () => FowerPlugin
export default _default

declare module '@fower/atomic-props' {
  export interface AtomicProps {
    /**
     * Set borderRadius
     *
     * @example
     * ```tsx
     * <Box rounded-10></Box>
     * <Box rounded-10rem></Box>
     * <Box rounded-100p></Box>
     * <Box rounded="10"></Box>
     * ```
     */
    rounded?: PropValue

    /**
     * Set borderRadius to 9999px
     *
     * roundedFull is `border-radius: 9999px;`
     *
     * @example
     * ```tsx
     * <Box roundedFull></Box>
     * ```
     */
    roundedFull?: boolean
    roundedNone?: boolean

    roundedTiny?: boolean
    roundedSmall?: boolean
    roundedMedium?: boolean
    roundedLarge?: boolean
    roundedHuge?: boolean
    roundedGigantic?: boolean

    /**
     * Set borderTopLeftRadius and borderTopRightRadius
     *
     * roundedTop-10 is `border-top-left-radius: 10px; border-top-right-radius: 10px;`
     *
     * @example
     * ```tsx
     * <Box roundedTop-10></Box>
     * <Box roundedTop-10rem></Box>
     * <Box roundedTop="10"></Box>
     * ```
     */
    roundedTop?: PropValue

    roundedTopFull?: boolean
    roundedTopNone?: boolean

    roundedTopTiny?: boolean
    roundedTopSmall?: boolean
    roundedTopMedium?: boolean
    roundedTopLarge?: boolean
    roundedTopHuge?: boolean
    roundedTopGigantic?: boolean

    /**
     * Set borderTopRightRadius and borderBottomRightRadius
     *
     * roundedRight-10 is `border-top-right-radius: 10px; border-bottom-right-radius: 10px;`
     *
     * @example
     * ```tsx
     * <Box roundedRight-10></Box>
     * <Box roundedRight-10p></Box>
     * <Box roundedRight="10"></Box>
     * ```
     */
    roundedRight?: PropValue

    roundedRightFull?: boolean
    roundedRightNone?: boolean

    roundedRightTiny?: boolean
    roundedRightSmall?: boolean
    roundedRightMedium?: boolean
    roundedRightLarge?: boolean
    roundedRightHuge?: boolean
    roundedRightGigantic?: boolean

    /**
     * Set borderBottomLeftRadius and borderBottomRightRadius
     *
     * roundedBottom-10 is `border-bottom-left-radius: 10px; border-bottom-right-radius: 10px;`
     *
     * @example
     * ```tsx
     * <Box roundedBottom-10></Box>
     * <Box roundedBottom-10p></Box>
     * <Box roundedBottom="10"></Box>
     * ```
     */
    roundedBottom?: PropValue

    roundedBottomFull?: boolean
    roundedBottomNone?: boolean

    roundedBottomTiny?: boolean
    roundedBottomSmall?: boolean
    roundedBottomMedium?: boolean
    roundedBottomLarge?: boolean
    roundedBottomHuge?: boolean
    roundedBottomGigantic?: boolean

    /**
     * Set borderTopLeftRadius and borderBottomLeftRadius
     *
     * roundedBottom-10 is `border-top-left-radius: 10px; border-bottom-left-radius: 10px;`
     *
     * @example
     * ```tsx
     * <Box roundedLeft-10></Box>
     * <Box roundedLeft-10p></Box>
     * <Box roundedLeft="10"></Box>
     * ```
     */
    roundedLeft?: PropValue

    roundedLeftFull?: boolean
    roundedLeftNone?: boolean

    roundedLeftTiny?: boolean
    roundedLeftSmall?: boolean
    roundedLeftMedium?: boolean
    roundedLeftLarge?: boolean
    roundedLeftHuge?: boolean
    roundedLeftGigantic?: boolean

    /**
     * Set borderTopLeftRadius
     *
     * roundedTopL-10 is `border-top-left-radius: 10px;`
     *
     * @example
     * ```tsx
     * <Box roundedTopLeft-10></Box>
     * <Box roundedTopLeft-10p></Box>
     * <Box roundedTopLeft="10"></Box>
     * ```
     */
    roundedTopLeft?: PropValue

    roundedTopLeftFull?: boolean
    roundedTopLeftNone?: boolean

    roundedTopLeftTiny?: boolean
    roundedTopLeftSmall?: boolean
    roundedTopLeftMedium?: boolean
    roundedTopLeftLarge?: boolean
    roundedTopLeftHuge?: boolean
    roundedTopLeftGigantic?: boolean

    /**
     * Set borderTopRightRadius
     *
     * roundedTopRight-10 is `border-top-right-radius: 10px;`
     *
     * @example
     * ```tsx
     * <Box roundedTopRight-10></Box>
     * <Box roundedTopRight-10p></Box>
     * <Box roundedTopRight="10"></Box>
     * ```
     */
    roundedTopRight?: PropValue

    roundedTopRightFull?: boolean
    roundedTopRightNone?: boolean

    roundedTopRightTiny?: boolean
    roundedTopRightSmall?: boolean
    roundedTopRightMedium?: boolean
    roundedTopRightLarge?: boolean
    roundedTopRightHuge?: boolean
    roundedTopRightGigantic?: boolean

    /**
     * Set borderBottomLeftRadius
     *
     * roundedBottomLeft-10 is `border-bottom-left-radius: 10px;`
     *
     * @example
     * ```tsx
     * <Box roundedBottomLeft-10></Box>
     * <Box roundedBottomLeft-10p></Box>
     * <Box roundedBottomLeft="10"></Box>
     * ```
     */
    roundedBottomLeft?: PropValue

    roundedBottomLeftFull?: boolean
    roundedBottomLeftNone?: boolean

    roundedBottomLeftTiny?: boolean
    roundedBottomLeftSmall?: boolean
    roundedBottomLeftMedium?: boolean
    roundedBottomLeftLarge?: boolean
    roundedBottomLeftHuge?: boolean
    roundedBottomLeftGigantic?: boolean

    /**
     * Set borderBottomRightRadius
     *
     * roundedBottomRight-10 is `border-bottom-right-radius: 10px;`
     *
     * @example
     * ```tsx
     * <Box roundedBottomRight-10></Box>
     * <Box roundedBottomRight-10p></Box>
     * <Box roundedBottomRight="10"></Box>
     * ```
     */
    roundedBottomRight?: PropValue

    roundedBottomRightFull?: boolean
    roundedBottomRightNone?: boolean

    roundedBottomRightTiny?: boolean
    roundedBottomRightSmall?: boolean
    roundedBottomRightMedium?: boolean
    roundedBottomRightLarge?: boolean
    roundedBottomRightHuge?: boolean
    roundedBottomRightGigantic?: boolean
  }
}
