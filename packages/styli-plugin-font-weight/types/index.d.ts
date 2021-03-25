import { StyliPlugin } from '@styli/types'

declare const _default: () => StyliPlugin
export default _default

declare module '@styli/types' {
  export interface AtomicProps {
    /**
     * Set fontWeight
     *
     * @example
     * ```tsx
     * <View fontWeight="bold"></View>
     * ```
     */
    fontWeight?: PropValue

    /**
     * Set fontWeight
     *
     * NOTE: Theme restrict.
     *
     * @example
     * ```tsx
     * <View fontHairline></View>
     * ```
     */
    fontHairline?: boolean

    /**
     * Set fontWeight
     *
     * NOTE: Theme restrict.
     *
     * @example
     * ```tsx
     * <View fontThin></View>
     * ```
     */
    fontThin?: boolean

    /**
     * Set fontWeight
     *
     * NOTE: Theme restrict.
     *
     * @example
     * ```tsx
     * <View fontLight></View>
     * ```
     */
    fontLight?: boolean

    /**
     * Set fontWeight
     *
     * NOTE: Theme restrict.
     *
     * @example
     * ```tsx
     * <View fontNormal></View>
     * ```
     */
    fontNormal?: boolean

    /**
     * Set fontWeight
     *
     * NOTE: Theme restrict.
     *
     * @example
     * ```tsx
     * <View fontMedium></View>
     * ```
     */
    fontMedium?: boolean

    /**
     * Set fontWeight
     *
     * NOTE: Theme restrict.
     *
     * @example
     * ```tsx
     * <View fontSemibold></View>
     * ```
     */
    fontSemibold?: boolean

    /**
     * Set fontWeight
     *
     * NOTE: Theme restrict.
     *
     * @example
     * ```tsx
     * <View fontBold></View>
     * ```
     */
    fontBold?: boolean

    /**
     * Set fontWeight
     *
     * NOTE: Theme restrict.
     *
     * @example
     * ```tsx
     * <View fontExtrabold></View>
     * ```
     */
    fontExtrabold?: boolean
  }
}
