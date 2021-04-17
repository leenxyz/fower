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
     * <Box fontWeight="bold"></View>
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
     * <Box fontHairline></View>
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
     * <Box fontThin></View>
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
     * <Box fontLight></View>
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
     * <Box fontNormal></View>
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
     * <Box fontMedium></View>
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
     * <Box fontSemibold></View>
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
     * <Box fontBold></View>
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
     * <Box fontExtrabold></View>
     * ```
     */
    fontExtrabold?: boolean
  }
}
