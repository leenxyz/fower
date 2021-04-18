import { FowerPlugin } from '@fower/types'

declare const _default: () => FowerPlugin
export default _default

declare module '@fower/types' {
  export interface AtomicProps {
    /**
     * Set textSize to any size
     *
     * @example
     * ```tsx
     * <Box text-14></Box>
     * <Box text={14}></Box>
     * <Box text="1.5rem"></Box>
     * ```
     */
    text?: PropValue

    /**
     * Set textSize to xs, default is 12px
     *
     * @example
     * ```tsx
     * <Box textXS></Box>
     * ```
     */
    textXS?: boolean

    /**
     * Set textSize to sm, default is 14px
     *
     * @example
     * ```tsx
     * <Box textSM></Box>
     * ```
     */
    textSM?: boolean

    /**
     * Set textSize to base, default is 16px
     *
     * @example
     * ```tsx
     * <Box textBase></Box>
     * ```
     */
    textBase?: boolean

    /**
     * Set textSize to lg, default is 18px
     *
     * @example
     * ```tsx
     * <Box textLG></Box>
     * ```
     */
    textLG?: boolean

    /**
     * Set textSize to xl, default is 20px
     *
     * @example
     * ```tsx
     * <Box textXL></Box>
     * ```
     */
    textXL?: boolean

    /**
     * Set textSize to 2xl, default is 24px
     *
     * @example
     * ```tsx
     * <Box text2XL></Box>
     * ```
     */
    text2XL?: boolean

    /**
     * Set textSize to 3xl, default is 30px
     *
     * @example
     * ```tsx
     * <Box text3XL></Box>
     * ```
     */
    text3XL?: boolean

    /**
     * Set textSize to 4xl, default is 36px
     *
     * @example
     * ```tsx
     * <Box text4XL></Box>
     * ```
     */
    text4XL?: boolean

    /**
     * Set textSize to 5xl, default is 48px
     *
     * @example
     * ```tsx
     * <Box text5XL</Box>
     * ```
     */
    text5XL?: boolean

    /**
     * Set textSize to 6xl, default is 60px
     *
     * @example
     * ```tsx
     * <Box text6XL></Box>
     * ```
     */
    text6XL?: boolean

    /**
     * Set textSize to 7xl, default is 72px
     *
     * @example
     * ```tsx
     * <Box text7XL></Box>
     * ```
     */
    text7XL?: boolean

    /**
     * Set textSize 8xl lg, default is 96px
     *
     * @example
     * ```tsx
     * <Box text8XL></Box>
     * ```
     */
    text8XL?: boolean

    /**
     * Set textSize to 9xl, default is 128px
     *
     * @example
     * ```tsx
     * <Box text9XL></Box>
     * ```
     */
    text9XL?: boolean
  }
}
