import { StyliPlugin } from '@styli/types'

declare const _default: () => StyliPlugin
export default _default

declare module '@styli/types' {
  export interface AtomicProps {
    /**
     * Set flex item center in x y  (水平垂直对齐), 默认flex: row
     * ```css
     * {
     *   display: flex;
     *   justify-content: center;
     *   justify-items: center;
     * }
     * ```
     * @example
     * ```tsx
     * <View center></View>
     * ```
     */
    center?: boolean

    /**
     * Set center in x axis，不管该容器是 row 还是 column, 只会在 x 轴生效
     *
     * @example
     *
     * ```tsx
     * <View centerX></View>
     * ```
     */
    centerX?: boolean

    /**
     * Set center in y axis，不管该容器是 row 还是 column, 只会在 y 轴生效
     *
     * @example
     *
     * ```tsx
     * <View centerY></View>
     * ```
     */
    centerY?: boolean

    toLeft?: boolean

    toRight?: boolean

    toTop?: boolean

    toBottom?: boolean

    between?: boolean

    around?: boolean

    evenly?: boolean

    stretch?: boolean
  }
}
