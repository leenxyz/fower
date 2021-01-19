import { StyliPlugin } from '@styli/types'
import * as CSS from 'csstype'

declare const _default: () => StyliPlugin
export default _default

declare module '@styli/types' {
  export interface AtomicProps {
    /**
     * Set flex-direction: row;
     *
     * 相当于下面 (自动 display: flex)：
     *
     * ```css
     * {
     *   flex-direction: row;
     *   display: flex;
     * }
     * ```
     *
     * @example
     * ```tsx
     * <View row></View>
     * ```
     */
    row?: boolean

    /**
     * Set flex-direction: column;
     *
     * 相当于下面 (自动 display: flex)：
     *
     * ```css
     * {
     *   flex-direction: column;
     *   display: flex;
     * }
     * ```
     *
     * @example
     * ```tsx
     * <View column></View>
     * ```
     */
    column?: boolean

    /**
     * set flex-direction
     *
     * @example
     * ```tsx
     * <View direction="row"></View>
     * <View direction="row-reverse"></View>
     * <View direction="column"></View>
     * <View direction="column-reverse"></View>
     * ```
     */
    direction?: CSS.Property.FlexDirection | CSS.Property.FlexDirection[]

    /**
     * Flex items nowrap
     * ```css
     * { flex-wrap: nowrap }
     * ```
     * @example
     * ```tsx
     * <View nowrap></View>
     * ```
     */
    nowrap?: boolean

    /**
     * Flex items wrap
     * ```css
     * { flex-wrap: wrap }
     * ```
     * @example
     * ```tsx
     * <View wrap></View>
     * ```
     */
    wrap?: boolean

    /**
     * Set justify-content
     * ```css
     * { justify-content: flex-start }
     * ```
     * @example
     * ```tsx
     * <View justifyStart></View>
     * ```
     */
    justifyStart?: boolean

    /**
     * Set justify-content
     * ```css
     * { justify-content: flex-end }
     * ```
     * @example
     * ```tsx
     * <View justifyEnd></View>
     * ```
     */
    justifyEnd?: boolean

    /**
     * Set justify-content
     * ```css
     * { justify-content: center }
     * ```
     * @example
     * ```tsx
     * <View justifyCenter></View>
     * ```
     */
    justifyCenter?: boolean

    /**
     * Set justify-content
     * ```css
     * { justify-content: space-between }
     * ```
     * @example
     * ```tsx
     * <View justifyBetween></View>
     * ```
     */
    justifyBetween?: boolean

    /**
     * Set justify-content
     * ```css
     * { justify-content: space-around }
     * ```
     * @example
     * ```tsx
     * <View justifyAround></View>
     * ```
     */
    justifyAround?: boolean

    /**
     * Set justify-content
     * ```css
     * { justify-content: space-around }
     * ```
     * @example
     * ```tsx
     * <View justifyAround></View>
     * ```
     */
    justifyEvenly?: boolean

    /**
     * Set align-items
     * ```css
     * { align-items: flex-start }
     * ```
     * @example
     * ```tsx
     * <View itemsStart></View>
     * ```
     */
    itemsStart?: boolean

    /**
     * Set align-items
     * ```css
     * { align-items: flex-end }
     * ```
     * @example
     * ```tsx
     * <View itemsEnd></View>
     * ```
     */
    itemsEnd?: boolean

    /**
     * Set align-items
     * ```css
     * { align-items: center }
     * ```
     * @example
     * ```tsx
     * <View itemsCenter></View>
     * ```
     */
    itemsCenter?: boolean

    /**
     * Set align-items
     * ```css
     * { align-items: baseline }
     * ```
     * @example
     * ```tsx
     * <View itemsBaseline></View>
     * ```
     */
    itemsBaseline?: boolean

    /**
     * Set align-items
     * ```css
     * { align-items: stretch }
     * ```
     * @example
     * ```tsx
     * <View itemsStretch></View>
     * ```
     */
    itemsStretch?: boolean

    selfAuto?: boolean
    selfStart?: boolean
    selfEnd?: boolean
    selfCenter?: boolean
    selfStretch?: boolean

    contentStart?: boolean
    contentEnd?: boolean
    contentCenter?: boolean
    contentBetween?: boolean
    contentAround?: boolean
    contentStretch?: boolean
  }
}
