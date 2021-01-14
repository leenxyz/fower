import { StyliPlugin } from '@styli/types'

declare const _default: () => StyliPlugin
export default _default

declare module '@styli/types' {
  export interface AtomicProps {
    /**
     * single line of text ellipsis
     *
     * ellipsis is `white-space: nowrap; overflow: hidden; textOverflow: ellipsis; max-width:100px`
     *
     * @example
     * ```tsx
     * <View ellipsis></View>
     * <View ellipsis-200></View>
     * <View ellipsis-200px></View>
     * <View ellipsis="200rem></View>
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
     * <View ellipsis1></View>
     * <View ellipsis1-200></View>
     * <View ellipsis1-200px></View>
     * <View ellipsis1="200rem"></View>
     * ```
     */
    ellipsis1?: PropValue

    /**
     * multiline of text ellipsis
     *
     * NOTE: webkit only
     * @see https://developer.mozilla.org/zh-CN/docs/Web/CSS/-webkit-line-clamp
     *
     * @example
     * ```tsx
     * <View ellipsis2></View>
     * <View ellipsis2-200></View>
     * <View ellipsis2-200px></View>
     * <View ellipsis2="200rem"></View>
     * ```
     */
    ellipsis2?: PropValue

    /**
     * multiline of text ellipsis
     *
     * NOTE: webkit only
     * @see https://developer.mozilla.org/zh-CN/docs/Web/CSS/-webkit-line-clamp
     *
     * @example
     * ```tsx
     * <View ellipsis3></View>
     * <View ellipsis3-200></View>
     * <View ellipsis3-200px></View>
     * <View ellipsis3="200rem"></View>
     * ```
     */
    ellipsis3?: PropValue

    /**
     * multiline of text ellipsis
     *
     * NOTE: webkit only
     * @see https://developer.mozilla.org/zh-CN/docs/Web/CSS/-webkit-line-clamp
     *
     * @example
     * ```tsx
     * <View ellipsis4></View>
     * <View ellipsis4-200></View>
     * <View ellipsis4-200px></View>
     * <View ellipsis4="200rem"></View>
     * ```
     */
    ellipsis4?: PropValue

    /**
     * multiline of text ellipsis
     *
     * NOTE: webkit only
     * @see https://developer.mozilla.org/zh-CN/docs/Web/CSS/-webkit-line-clamp
     *
     * @example
     * ```tsx
     * <View ellipsis5></View>
     * <View ellipsis5-200></View>
     * <View ellipsis5-200px></View>
     * <View ellipsis5="200rem"></View>
     * ```
     */
    ellipsis5?: PropValue
  }
}
