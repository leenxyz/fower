import { StyliPlugin } from '@styli/types'

declare const _default: () => StyliPlugin
export default _default

declare module '@styli/types' {
  export interface AtomicProps {
    /**
     * Set grid gap
     *
     * @example
     * ```tsx
     * <Box gap-10></Box>
     * <Box gap-1rem></Box>
     * <Box gap-10p></Box>
     * <Box gap={10}></Box>
     * ```
     */
    gap?: number | number[] | boolean

    /**
     * Set grid column gap
     *
     * @example
     * ```tsx
     * <Box columnGap-10></Box>
     * <Box columnGap-1rem></Box>
     * <Box columnGap-10p></Box>
     * <Box columnGap={10}></Box>
     * ```
     */
    columnGap?: number | number[] | boolean

    /**
     * Set grid row gap
     *
     * @example
     * ```tsx
     * <Box rowGap-10></Box>
     * <Box rowGap-1rem></Box>
     * <Box rowGap-10p></Box>
     * <Box rowGap={10}></Box>
     * ```
     */
    rowGap?: number | number[] | boolean

    /**
     * Set gridTemplateColumns
     *
     * @example
     * ```tsx
     * <Box gridTemplateColumns-4></Box>
     * ```
     */
    gridTemplateColumns?: number | number[] | boolean
  }
}
