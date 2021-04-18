import { FowerPlugin } from '@fower/types'

declare const _default: () => FowerPlugin
export default _default

declare module '@fower/types' {
  export interface AtomicProps {
    /**
     * Set fontWeight
     *
     * @example
     * ```tsx
     * <Box fontWeight="bold"></Box>
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
     * <Box fontHairline></Box>
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
     * <Box fontThin></Box>
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
     * <Box fontLight></Box>
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
     * <Box fontNormal></Box>
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
     * <Box fontMedium></Box>
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
     * <Box fontSemibold></Box>
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
     * <Box fontBold></Box>
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
     * <Box fontExtrabold></Box>
     * ```
     */
    fontExtrabold?: boolean
  }
}
