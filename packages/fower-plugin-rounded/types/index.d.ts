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
     * roundedT-10 is `border-top-left-radius: 10px; border-top-right-radius: 10px;`
     *
     * @example
     * ```tsx
     * <Box roundedT-10></Box>
     * <Box roundedT-10rem></Box>
     * <Box roundedT="10"></Box>
     * ```
     */
    roundedT?: PropValue

    roundedTNone?: boolean
    roundedTSM?: boolean
    roundedTMD?: boolean
    roundedTLG?: boolean
    roundedTXL?: boolean
    roundedT2XL?: boolean
    roundedT3XL?: boolean

    /**
     * Set borderTopRightRadius and borderBottomRightRadius
     *
     * roundedR-10 is `border-top-right-radius: 10px; border-bottom-right-radius: 10px;`
     *
     * @example
     * ```tsx
     * <Box roundedR-10></Box>
     * <Box roundedR-10p></Box>
     * <Box roundedR="10"></Box>
     * ```
     */
    roundedR?: PropValue

    roundedRNone?: boolean
    roundedRSM?: boolean
    roundedRMD?: boolean
    roundedRLG?: boolean
    roundedRXL?: boolean
    roundedR2XL?: boolean
    roundedR3XL?: boolean

    /**
     * Set borderBottomLeftRadius and borderBottomRightRadius
     *
     * roundedB-10 is `border-bottom-left-radius: 10px; border-bottom-right-radius: 10px;`
     *
     * @example
     * ```tsx
     * <Box roundedB-10></Box>
     * <Box roundedB-10p></Box>
     * <Box roundedB="10"></Box>
     * ```
     */
    roundedB?: PropValue

    roundedBNone?: boolean
    roundedBSM?: boolean
    roundedBMD?: boolean
    roundedBLG?: boolean
    roundedBXL?: boolean
    roundedB2XL?: boolean
    roundedB3XL?: boolean

    /**
     * Set borderTopLeftRadius and borderBottomLeftRadius
     *
     * roundedB-10 is `border-top-left-radius: 10px; border-bottom-left-radius: 10px;`
     *
     * @example
     * ```tsx
     * <Box roundedL-10></Box>
     * <Box roundedL-10p></Box>
     * <Box roundedL="10"></Box>
     * ```
     */
    roundedL?: PropValue

    roundedLNone?: boolean
    roundedLSM?: boolean
    roundedLMD?: boolean
    roundedLLG?: boolean
    roundedLXL?: boolean
    roundedL2XL?: boolean
    roundedL3XL?: boolean

    /**
     * Set borderTopLeftRadius
     *
     * roundedTL-10 is `border-top-left-radius: 10px;`
     *
     * @example
     * ```tsx
     * <Box roundedTL-10></Box>
     * <Box roundedTL-10p></Box>
     * <Box roundedTL="10"></Box>
     * ```
     */
    roundedTL?: PropValue

    roundedTLNone?: boolean
    roundedTLSM?: boolean
    roundedTLMD?: boolean
    roundedTLLG?: boolean
    roundedTLXL?: boolean
    roundedTL2XL?: boolean
    roundedTL3XL?: boolean

    /**
     * Set borderTopRightRadius
     *
     * roundedTR-10 is `border-top-right-radius: 10px;`
     *
     * @example
     * ```tsx
     * <Box roundedTR-10></Box>
     * <Box roundedTR-10p></Box>
     * <Box roundedTR="10"></Box>
     * ```
     */
    roundedTR?: PropValue

    roundedTRNone?: boolean
    roundedTRSM?: boolean
    roundedTRMD?: boolean
    roundedTRLG?: boolean
    roundedTRXL?: boolean
    roundedTR2XL?: boolean
    roundedTR3XL?: boolean

    /**
     * Set borderBottomLeftRadius
     *
     * roundedBL-10 is `border-bottom-left-radius: 10px;`
     *
     * @example
     * ```tsx
     * <Box roundedBL-10></Box>
     * <Box roundedBL-10p></Box>
     * <Box roundedBL="10"></Box>
     * ```
     */
    roundedBL?: PropValue
    roundedBLNone?: boolean
    roundedBLSM?: boolean
    roundedBLMD?: boolean
    roundedBLLG?: boolean
    roundedBLXL?: boolean
    roundedBL2XL?: boolean
    roundedBL3XL?: boolean

    /**
     * Set borderBottomRightRadius
     *
     * roundedBR-10 is `border-bottom-right-radius: 10px;`
     *
     * @example
     * ```tsx
     * <Box roundedBR-10></Box>
     * <Box roundedBR-10p></Box>
     * <Box roundedBR="10"></Box>
     * ```
     */
    roundedBR?: PropValue
    roundedBRNone?: boolean
    roundedBRSM?: boolean
    roundedBRMD?: boolean
    roundedBRLG?: boolean
    roundedBRXL?: boolean
    roundedBR2XL?: boolean
    roundedBR3XL?: boolean
  }
}
