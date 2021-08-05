import { FowerPlugin, ResponsiveValue, ResponsiveBoolean } from "@fower/core"
import * as CSS from 'csstype'
declare const _default: () => FowerPlugin
export default _default

declare module '@fower/atomic-props' {
  export interface AtomicProps {
    /**
     * Set flex-direction to row
     * ```css
     * { flex-direction: row; }
     * ```
     * @example
     * ```tsx
     * <Box row></Box>
     * ```
     * @see https://fower.vercel.app/docs/flex-direction
     */
    row?: ResponsiveBoolean
    /**
     * Set flex-direction to column
     * ```css
     * { flex-direction: column; }
     * ```
     * @example
     * ```tsx
     * <Box column></Box>
     * ```
     * @see https://fower.vercel.app/docs/flex-direction
     */
    column?: ResponsiveBoolean
    /**
     * Make all children elements to Top in flex container, whether it's row or column
     * @example
     * ```tsx
     * <Box toTop></Box>
     * ```
     * @see https://fower.vercel.app/docs/to-top
     */
    toTop?: ResponsiveBoolean
    /**
     * Make all children elements to Left in flex container, whether it's row or column
     * @example
     * ```tsx
     * <Box toLeft></Box>
     * ```
     * @see https://fower.vercel.app/docs/to-left
     */
    toLeft?: ResponsiveBoolean
    /**
     * Make all children elements to Right in flex container, whether it's row or column
     * @example
     * ```tsx
     * <Box toRight></Box>
     * ```
     * @see https://fower.vercel.app/docs/to-right
     */
    toRight?: ResponsiveBoolean
    /**
     * Make all children elements to Bottom in flex container, whether it's row or column
     * @example
     * ```tsx
     * <Box toBottom></Box>
     * ```
     * @see https://fower.vercel.app/docs/to-bottom
     */
    toBottom?: ResponsiveBoolean
    /**
     * Make all children elements to Between in flex container, whether it's row or column
     * @example
     * ```tsx
     * <Box toBetween></Box>
     * ```
     * @see https://fower.vercel.app/docs/to-between
     */
    toBetween?: ResponsiveBoolean
    /**
     * Make all children elements to Around in flex container, whether it's row or column
     * @example
     * ```tsx
     * <Box toAround></Box>
     * ```
     * @see https://fower.vercel.app/docs/to-around
     */
    toAround?: ResponsiveBoolean
    /**
     * Make all children elements to Evenly in flex container, whether it's row or column
     * @example
     * ```tsx
     * <Box toEvenly></Box>
     * ```
     * @see https://fower.vercel.app/docs/to-evenly
     */
    toEvenly?: ResponsiveBoolean
    /**
     * Make all children elements to Center in flex container, whether it's row or column
     * @example
     * ```tsx
     * <Box toCenter></Box>
     * ```
     * @see https://fower.vercel.app/docs/to-center
     */
    toCenter?: ResponsiveBoolean
    /**
     * Make all children elements to CenterX in flex container, whether it's row or column
     * @example
     * ```tsx
     * <Box toCenterX></Box>
     * ```
     * @see https://fower.vercel.app/docs/to-centerx
     */
    toCenterX?: ResponsiveBoolean
    /**
     * Make all children elements to CenterY in flex container, whether it's row or column
     * @example
     * ```tsx
     * <Box toCenterY></Box>
     * ```
     * @see https://fower.vercel.app/docs/to-centery
     */
    toCenterY?: ResponsiveBoolean
    /**
     * Make an element to Auto in flex container, whether it's row or column
     * @example
     * ```tsx
     * <Box selfAuto></Box>
     * ```
     * @see https://fower.vercel.app/docs/self-auto
     */
    selfAuto?: ResponsiveBoolean
    /**
     * Make an element to Top in flex container, whether it's row or column
     * @example
     * ```tsx
     * <Box selfTop></Box>
     * ```
     * @see https://fower.vercel.app/docs/self-top
     */
    selfTop?: ResponsiveBoolean
    /**
     * Make an element to Right in flex container, whether it's row or column
     * @example
     * ```tsx
     * <Box selfRight></Box>
     * ```
     * @see https://fower.vercel.app/docs/self-right
     */
    selfRight?: ResponsiveBoolean
    /**
     * Make an element to Bottom in flex container, whether it's row or column
     * @example
     * ```tsx
     * <Box selfBottom></Box>
     * ```
     * @see https://fower.vercel.app/docs/self-bottom
     */
    selfBottom?: ResponsiveBoolean
    /**
     * Make an element to Left in flex container, whether it's row or column
     * @example
     * ```tsx
     * <Box selfLeft></Box>
     * ```
     * @see https://fower.vercel.app/docs/self-left
     */
    selfLeft?: ResponsiveBoolean
    /**
     * Make an element to Center in flex container, whether it's row or column
     * @example
     * ```tsx
     * <Box selfCenter></Box>
     * ```
     * @see https://fower.vercel.app/docs/self-center
     */
    selfCenter?: ResponsiveBoolean
    /**
     * Make an element to Stretch in flex container, whether it's row or column
     * @example
     * ```tsx
     * <Box selfStretch></Box>
     * ```
     * @see https://fower.vercel.app/docs/self-stretch
     */
    selfStretch?: ResponsiveBoolean
  }
}
