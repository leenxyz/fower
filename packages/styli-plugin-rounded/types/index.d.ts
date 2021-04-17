import { StyliPlugin } from '@styli/types'

declare const _default: () => StyliPlugin
export default _default

declare module '@styli/types' {
  export interface AtomicProps {
    /**
     * Set borderRadius
     *
     * @example
     * ```tsx
     * <Box rounded-10></View>
     * <Box rounded-10rem></View>
     * <Box rounded-100p></View>
     * <Box rounded="10"></View>
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
     * <Box roundedFull></View>
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
     * <Box roundedT-10></View>
     * <Box roundedT-10rem></View>
     * <Box roundedT="10"></View>
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
     * <Box roundedR-10></View>
     * <Box roundedR-10p></View>
     * <Box roundedR="10"></View>
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
     * <Box roundedB-10></View>
     * <Box roundedB-10p></View>
     * <Box roundedB="10"></View>
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
     * <Box roundedL-10></View>
     * <Box roundedL-10p></View>
     * <Box roundedL="10"></View>
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
     * <Box roundedTL-10></View>
     * <Box roundedTL-10p></View>
     * <Box roundedTL="10"></View>
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
     * <Box roundedTR-10></View>
     * <Box roundedTR-10p></View>
     * <Box roundedTR="10"></View>
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
     * <Box roundedBL-10></View>
     * <Box roundedBL-10p></View>
     * <Box roundedBL="10"></View>
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
     * <Box roundedBR-10></View>
     * <Box roundedBR-10p></View>
     * <Box roundedBR="10"></View>
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
