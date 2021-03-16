import { StyliPlugin, Theme } from '@styli/types'
import * as CSS from 'csstype'

declare const _default: () => StyliPlugin
export default _default

type Fn = (theme: Theme) => CSS.Property.Position | CSS.Property.Position[]

declare module '@styli/types' {
  export interface AtomicProps {
    /**
     * Set position
     *
     * @example
     * ```tsx
     * <View position="absolute"></View>
     * ```
     */
    position?: CSS.Property.Position | CSS.Property.Position[] | Fn

    /**
     * Set position to static
     *
     * @example
     * ```tsx
     * <View static></View>
     * ```
     */
    static?: boolean

    /**
     * Set position to fixed
     *
     * @example
     * ```tsx
     * <View fixed></View>
     * ```
     */
    fixed?: boolean

    /**
     * Set position to absolute
     *
     * @example
     * ```tsx
     * <View absolute></View>
     * ```
     */
    absolute?: boolean

    /**
     * Set position to relative
     *
     * @example
     * ```tsx
     * <View relative></View>
     * ```
     */
    relative?: boolean

    /**
     * Set position to sticky
     *
     * @example
     * ```tsx
     * <View sticky></View>
     * ```
     */
    sticky?: boolean

    /**
     * Set top
     *
     * top-10 is `top: 10px`
     *
     * @example
     * ```tsx
     * <View top-0></View>
     * <View top-10px></View>
     * <View top--10rem></View>
     * ```
     */
    top?: boolean | number | string

    /**
     * Set right
     *
     * right-10 is `right: 10px`
     *
     * @example
     * ```tsx
     * <View right-0></View>
     * <View right-10px></View>
     * <View right--10rem></View>
     * ```
     */
    right?: boolean | number | string

    /**
     * Set bottom
     *
     * bottom-10 is `bottom: 10px`
     *
     * @example
     * ```tsx
     * <View bottom-0></View>
     * <View bottom-10px></View>
     * <View bottom--10rem></View>
     * ```
     */
    bottom?: boolean | number | string

    /**
     * Set left
     *
     * left-10 is `left: 10px`
     *
     * @example
     * ```tsx
     * <View left-0></View>
     * <View left-10px></View>
     * <View left--10rem></View>
     * ```
     */
    left?: boolean | number | string
  }
}
