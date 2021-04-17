import { StyliPlugin } from '@styli/types'

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
     * <Box row></View>
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
     * <Box column></View>
     * ```
     */
    column?: boolean

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
     * <Box toCenter></View>
     * ```
     */
    toCenter?: boolean

    /**
     * Set center in x axis，不管该容器是 row 还是 column, 只会在 x 轴生效
     *
     * @example
     *
     * ```tsx
     * <Box toCenterX></View>
     * ```
     */
    toCenterX?: boolean

    /**
     * Set center in y axis，不管该容器是 row 还是 column, 只会在 y 轴生效
     *
     * @example
     *
     * ```tsx
     * <Box toCenterY></View>
     * ```
     */
    toCenterY?: boolean

    /**
     * Make all element align to left, either row or column
     * 让所以有元素靠左对齐，不管是row还是column布局
     *
     * @example
     *
     * ```tsx
     * <Box toLeft></View>
     * <Box toLeft toBottom></View>
     * ```
     */
    toLeft?: boolean

    /**
     * Make all element align to right, either row or column
     * 让所以有元素靠右对齐，不管是row还是column布局
     *
     * @example
     *
     * ```tsx
     * <Box toRight></View>
     * <Box toRight toBottom></View>
     * ```
     */
    toRight?: boolean

    /**
     * Make all element align to top, either row or column
     * 让所以有元素靠上对齐，不管是row还是column布局
     *
     * @example
     *
     * ```tsx
     * <Box toTop></View>
     * ```
     */
    toTop?: boolean

    /**
     * Make all element align to bottom, either row or column
     * 让所以有元素靠下对齐，不管是row还是column布局
     *
     * @example
     *
     * ```tsx
     * <Box toBottom></View>
     * ```
     */
    toBottom?: boolean

    /**
     * Make all element align with flex between, either row or column
     *
     * @example
     *
     * ```tsx
     * <Box toBetween></View>
     * ```
     */
    toBetween?: boolean

    /**
     * Make all element align with flex around, either row or column
     *
     * @example
     *
     * ```tsx
     * <Box toAround></View>
     * ```
     */
    toAround?: boolean

    /**
     * Make all element align with flex evenly, either row or column
     *
     * @example
     *
     * ```tsx
     * <Box toEvenly></View>
     * ```
     */
    toEvenly?: boolean
  }
}
