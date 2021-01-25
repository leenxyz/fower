import { StyliPlugin, Theme } from '@styli/types'
import * as CSS from 'csstype'

declare const _default: () => StyliPlugin
export default _default

type Overflow = CSS.Property.Overflow | CSS.Property.Overflow[] | boolean

declare module '@styli/types' {
  export interface AtomicProps {
    /**
     * Set overflow
     *
     * @example
     * ```tsx
     * <View overflow="hidden"></View>
     * ```
     */
    overflow?: Overflow

    /**
     * Set overflowX
     *
     * @example
     * ```tsx
     * <View overflowX="hidden"></View>
     * ```
     */
    overflowX?: Overflow

    /**
     * Set overflowY
     *
     * @example
     * ```tsx
     * <View overflowY="hidden"></View>
     * ```
     */
    overflowY?: Overflow

    /**
     * Set overflow to visible
     *
     * oVisible is `overflow: visible`
     *
     * @example
     * ```tsx
     * <View oVisible></View>
     * ```
     */
    oVisible?: boolean

    /**
     * Set overflow to hidden
     *
     * oHidden is `overflow: hidden`
     *
     * @example
     * ```tsx
     * <View oHidden></View>
     * ```
     */
    oHidden?: boolean

    /**
     * Set overflow to visible
     *
     * oScroll is `overflow: scroll`
     *
     * @example
     * ```tsx
     * <View oScroll></View>
     * ```
     */
    oScroll?: boolean

    /**
     * Set overflow to auto
     *
     * oAuto is `overflow: auto`
     *
     * @example
     * ```tsx
     * <View oAuto></View>
     * ```
     */
    oAuto?: boolean

    /**
     * Set overflowX to visible
     *
     * oxVisible is `overflow-x: visible`
     *
     * @example
     * ```tsx
     * <View oxVisible></View>
     * ```
     */
    oxVisible?: boolean

    /**
     * Set overflowX to hidden
     *
     * oxHidden is `overflow-x: hidden`
     *
     * @example
     * ```tsx
     * <View oxHidden></View>
     * ```
     */
    oxHidden?: boolean

    /**
     * Set overflowX to scroll
     *
     * oxScroll is `overflow-x: scroll`
     *
     * @example
     * ```tsx
     * <View oxScroll></View>
     * ```
     */
    oxScroll?: boolean

    /**
     * Set overflowX to auto
     *
     * oxAuto is `overflow-x: auto`
     *
     * @example
     * ```tsx
     * <View oxAuto></View>
     * ```
     */
    oxAuto?: boolean

    /**
     * Set overflowY to visible
     *
     * oyVisible is `overflow-y: visible`
     *
     * @example
     * ```tsx
     * <View oyVisible></View>
     * ```
     */
    oyVisible?: boolean

    /**
     * Set overflowY to hidden
     *
     * oyHidden is `overflow-y: hidden`
     *
     * @example
     * ```tsx
     * <View oyHidden></View>
     * ```
     */
    oyHidden?: boolean

    /**
     * Set overflowY to scroll
     *
     * oyScroll is `overflow-y: scroll`
     *
     * @example
     * ```tsx
     * <View oyScroll></View>
     * ```
     */
    oyScroll?: boolean

    /**
     * Set overflowY to auto
     *
     * oyAuto is `overflow-y: auto`
     *
     * @example
     * ```tsx
     * <View oyAuto></View>
     * ```
     */
    oyAuto?: boolean
  }
}
