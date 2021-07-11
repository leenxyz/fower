import { FowerPlugin, PropValue } from '@fower/core'

declare const _default: () => FowerPlugin
export default _default

declare module '@fower/atomic-props' {
  export interface AtomicProps {
    /**
     * single line of text ellipsis
     *
     * ellipsis is `white-space: nowrap; overflow: hidden; textOverflow: ellipsis; max-width:100px`
     *
     * @example
     * ```tsx
     * <Box ellipsis></Box>
     * <Box ellipsisquare-200></Box>
     * <Box ellipsisquare-200px></Box>
     * <Box ellipsis="200rem></Box>
     * ```
     */
    ellipsis?: PropValue

    /**
     * single line of text ellipsis
     *
     * ellipsis1 is `white-space: nowrap; overflow: hidden; textOverflow: ellipsis; max-width:100px`
     *
     * @example
     * ```tsx
     * <Box ellipsis1></Box>
     * <Box ellipsis1-200></Box>
     * <Box ellipsis1-200px></Box>
     * <Box ellipsis1="200rem"></Box>
     * ```
     */
    ellipsis1?: PropValue

    /**
     * multiline of text ellipsis
     *
     * NOTE: webkit only
     * @See https://developer.mozilla.org/zh-CN/docs/Web/CSS/-webkit-line-clamp
     *
     * @example
     * ```tsx
     * <Box ellipsis2></Box>
     * <Box ellipsis2-200></Box>
     * <Box ellipsis2-200px></Box>
     * <Box ellipsis2="200rem"></Box>
     * ```
     */
    ellipsis2?: PropValue

    /**
     * multiline of text ellipsis
     *
     * NOTE: webkit only
     * @See https://developer.mozilla.org/zh-CN/docs/Web/CSS/-webkit-line-clamp
     *
     * @example
     * ```tsx
     * <Box ellipsis3></Box>
     * <Box ellipsis3-200></Box>
     * <Box ellipsis3-200px></Box>
     * <Box ellipsis3="200rem"></Box>
     * ```
     */
    ellipsis3?: PropValue

    /**
     * multiline of text ellipsis
     *
     * NOTE: webkit only
     * @See https://developer.mozilla.org/zh-CN/docs/Web/CSS/-webkit-line-clamp
     *
     * @example
     * ```tsx
     * <Box ellipsis4></Box>
     * <Box ellipsis4-200></Box>
     * <Box ellipsis4-200px></Box>
     * <Box ellipsis4="200rem"></Box>
     * ```
     */
    ellipsis4?: PropValue

    /**
     * multiline of text ellipsis
     *
     * NOTE: webkit only
     * @See https://developer.mozilla.org/zh-CN/docs/Web/CSS/-webkit-line-clamp
     *
     * @example
     * ```tsx
     * <Box ellipsis5></Box>
     * <Box ellipsis5-200></Box>
     * <Box ellipsis5-200px></Box>
     * <Box ellipsis5="200rem"></Box>
     * ```
     */
    ellipsis5?: PropValue
  }
}
