import { FowerPlugin } from '@fower/types'

declare const _default: () => FowerPlugin
export default _default

declare module '@fower/types' {
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
    roundedSM?: boolean
    roundedMD?: boolean
    roundedLG?: boolean
    roundedXL?: boolean
    rounded2XL?: boolean
    rounded3XL?: boolean

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
    roundedTopSM?: boolean
    roundedTopMD?: boolean
    roundedTopLG?: boolean
    roundedTopXL?: boolean
    roundedTop2XL?: boolean
    roundedTop3XL?: boolean

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
    roundedRightSM?: boolean
    roundedRightMD?: boolean
    roundedRightLG?: boolean
    roundedRightXL?: boolean
    roundedRight2XL?: boolean
    roundedRight3XL?: boolean

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
    roundedBottomSM?: boolean
    roundedBottomMD?: boolean
    roundedBottomLeftG?: boolean
    roundedBottomXL?: boolean
    roundedBottom2XL?: boolean
    roundedBottom3XL?: boolean

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
    roundedLeftSM?: boolean
    roundedLeftMD?: boolean
    roundedLeftLG?: boolean
    roundedLeftXL?: boolean
    roundedLeft2XL?: boolean
    roundedLeft3XL?: boolean

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
    roundedTopLeftSM?: boolean
    roundedTopLeftMD?: boolean
    roundedTopLeftLG?: boolean
    roundedTopLeftXL?: boolean
    roundedTopLeft2XL?: boolean
    roundedTopLeft3XL?: boolean

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
    roundedTopRightSM?: boolean
    roundedTopRightMD?: boolean
    roundedTopRightLG?: boolean
    roundedTopRightXL?: boolean
    roundedTopRight2XL?: boolean
    roundedTopRight3XL?: boolean

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
    roundedBottomLeftNone?: boolean
    roundedBottomLeftSM?: boolean
    roundedBottomLeftMD?: boolean
    roundedBottomLeftLG?: boolean
    roundedBottomLeftXL?: boolean
    roundedBottomLeft2XL?: boolean
    roundedBottomLeft3XL?: boolean

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
    roundedBottomRightNone?: boolean
    roundedBottomRightSM?: boolean
    roundedBottomRightMD?: boolean
    roundedBottomRightLG?: boolean
    roundedBottomRightXL?: boolean
    roundedBottomRight2XL?: boolean
    roundedBottomRight3XL?: boolean
  }
}
