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
     * Set borderRadius to 0
     *
     * roundedNone is `border-radius: 0;`
     *
     * @example
     * ```tsx
     * <View roundedNone></View>
     * ```
     */
    roundedNone?: PropValue

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
    roundedFull?: PropValue

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
  }
}
