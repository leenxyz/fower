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
     * <View rounded-10></View>
     * <View rounded-10rem></View>
     * <View rounded-100p></View>
     * <View rounded="10"></View>
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
     * <View roundedFull></View>
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
     * <View roundedT-10></View>
     * <View roundedT-10rem></View>
     * <View roundedT="10"></View>
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
     * <View roundedR-10></View>
     * <View roundedR-10p></View>
     * <View roundedR="10"></View>
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
     * <View roundedB-10></View>
     * <View roundedB-10p></View>
     * <View roundedB="10"></View>
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
     * <View roundedL-10></View>
     * <View roundedL-10p></View>
     * <View roundedL="10"></View>
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
     * <View roundedTL-10></View>
     * <View roundedTL-10p></View>
     * <View roundedTL="10"></View>
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
     * <View roundedTR-10></View>
     * <View roundedTR-10p></View>
     * <View roundedTR="10"></View>
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
     * <View roundedBL-10></View>
     * <View roundedBL-10p></View>
     * <View roundedBL="10"></View>
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
     * <View roundedBR-10></View>
     * <View roundedBR-10p></View>
     * <View roundedBR="10"></View>
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
