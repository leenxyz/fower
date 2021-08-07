import { FowerPlugin, ResponsiveValue, ResponsiveBoolean } from "@fower/core"
declare const _default: () => FowerPlugin
export default _default

declare module '@fower/atomic-props' {
  export interface AtomicProps {
    /**
     * set margin to some value
     * ```css
     * {
     *   margin: $value;
     * }
     * ```
     * @example
     * ```tsx
     * <Box m-4></Box>
     * <Box m-1rem></Box>
     * <Box m-8px></Box>
     * <Box m={8}></Box>
     * <Box m={a + b}></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    m?: ResponsiveValue<string | number>
    /**
     * set margin to 0
     * ```css
     * {
     *   margin: 0px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box m0></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    m0?: ResponsiveBoolean
    /**
     * set margin to 4
     * ```css
     * {
     *   margin: 4px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box m1></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    m1?: ResponsiveBoolean
    /**
     * set margin to 8
     * ```css
     * {
     *   margin: 8px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box m2></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    m2?: ResponsiveBoolean
    /**
     * set margin to 12
     * ```css
     * {
     *   margin: 12px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box m3></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    m3?: ResponsiveBoolean
    /**
     * set margin to 16
     * ```css
     * {
     *   margin: 16px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box m4></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    m4?: ResponsiveBoolean
    /**
     * set margin to 20
     * ```css
     * {
     *   margin: 20px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box m5></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    m5?: ResponsiveBoolean
    /**
     * set margin to 24
     * ```css
     * {
     *   margin: 24px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box m6></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    m6?: ResponsiveBoolean
    /**
     * set margin to 28
     * ```css
     * {
     *   margin: 28px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box m7></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    m7?: ResponsiveBoolean
    /**
     * set margin to 32
     * ```css
     * {
     *   margin: 32px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box m8></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    m8?: ResponsiveBoolean
    /**
     * set margin to 36
     * ```css
     * {
     *   margin: 36px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box m9></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    m9?: ResponsiveBoolean
    /**
     * set margin to 40
     * ```css
     * {
     *   margin: 40px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box m10></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    m10?: ResponsiveBoolean
    /**
     * set margin to 44
     * ```css
     * {
     *   margin: 44px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box m11></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    m11?: ResponsiveBoolean
    /**
     * set margin to 48
     * ```css
     * {
     *   margin: 48px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box m12></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    m12?: ResponsiveBoolean
    /**
     * set margin to 56
     * ```css
     * {
     *   margin: 56px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box m14></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    m14?: ResponsiveBoolean
    /**
     * set margin to 64
     * ```css
     * {
     *   margin: 64px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box m16></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    m16?: ResponsiveBoolean
    /**
     * set margin to 80
     * ```css
     * {
     *   margin: 80px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box m20></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    m20?: ResponsiveBoolean
    /**
     * set margin to 96
     * ```css
     * {
     *   margin: 96px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box m24></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    m24?: ResponsiveBoolean
    /**
     * set margin to 112
     * ```css
     * {
     *   margin: 112px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box m28></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    m28?: ResponsiveBoolean
    /**
     * set margin to 128
     * ```css
     * {
     *   margin: 128px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box m32></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    m32?: ResponsiveBoolean
    /**
     * set margin to 144
     * ```css
     * {
     *   margin: 144px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box m36></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    m36?: ResponsiveBoolean
    /**
     * set margin to 160
     * ```css
     * {
     *   margin: 160px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box m40></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    m40?: ResponsiveBoolean
    /**
     * set margin to 176
     * ```css
     * {
     *   margin: 176px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box m44></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    m44?: ResponsiveBoolean
    /**
     * set margin to 192
     * ```css
     * {
     *   margin: 192px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box m48></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    m48?: ResponsiveBoolean
    /**
     * set margin to 208
     * ```css
     * {
     *   margin: 208px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box m52></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    m52?: ResponsiveBoolean
    /**
     * set margin to 224
     * ```css
     * {
     *   margin: 224px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box m56></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    m56?: ResponsiveBoolean
    /**
     * set margin to 240
     * ```css
     * {
     *   margin: 240px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box m60></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    m60?: ResponsiveBoolean
    /**
     * set margin to 256
     * ```css
     * {
     *   margin: 256px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box m64></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    m64?: ResponsiveBoolean
    /**
     * set margin to 288
     * ```css
     * {
     *   margin: 288px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box m72></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    m72?: ResponsiveBoolean
    /**
     * set margin to 320
     * ```css
     * {
     *   margin: 320px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box m80></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    m80?: ResponsiveBoolean
    /**
     * set margin to 384
     * ```css
     * {
     *   margin: 384px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box m96></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    m96?: ResponsiveBoolean
    /**
     * set margin-left margin-right to some value
     * ```css
     * {
     *   margin-left: $value;
     *   margin-right: $value;
     * }
     * ```
     * @example
     * ```tsx
     * <Box mx-4></Box>
     * <Box mx-1rem></Box>
     * <Box mx-8px></Box>
     * <Box mx={8}></Box>
     * <Box mx={a + b}></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    mx?: ResponsiveValue<string | number>
    /**
     * set margin-left margin-right to 0
     * ```css
     * {
     *   margin-left: 0px;
     *   margin-right: 0px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box mx0></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    mx0?: ResponsiveBoolean
    /**
     * set margin-left margin-right to 4
     * ```css
     * {
     *   margin-left: 4px;
     *   margin-right: 4px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box mx1></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    mx1?: ResponsiveBoolean
    /**
     * set margin-left margin-right to 8
     * ```css
     * {
     *   margin-left: 8px;
     *   margin-right: 8px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box mx2></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    mx2?: ResponsiveBoolean
    /**
     * set margin-left margin-right to 12
     * ```css
     * {
     *   margin-left: 12px;
     *   margin-right: 12px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box mx3></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    mx3?: ResponsiveBoolean
    /**
     * set margin-left margin-right to 16
     * ```css
     * {
     *   margin-left: 16px;
     *   margin-right: 16px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box mx4></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    mx4?: ResponsiveBoolean
    /**
     * set margin-left margin-right to 20
     * ```css
     * {
     *   margin-left: 20px;
     *   margin-right: 20px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box mx5></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    mx5?: ResponsiveBoolean
    /**
     * set margin-left margin-right to 24
     * ```css
     * {
     *   margin-left: 24px;
     *   margin-right: 24px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box mx6></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    mx6?: ResponsiveBoolean
    /**
     * set margin-left margin-right to 28
     * ```css
     * {
     *   margin-left: 28px;
     *   margin-right: 28px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box mx7></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    mx7?: ResponsiveBoolean
    /**
     * set margin-left margin-right to 32
     * ```css
     * {
     *   margin-left: 32px;
     *   margin-right: 32px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box mx8></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    mx8?: ResponsiveBoolean
    /**
     * set margin-left margin-right to 36
     * ```css
     * {
     *   margin-left: 36px;
     *   margin-right: 36px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box mx9></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    mx9?: ResponsiveBoolean
    /**
     * set margin-left margin-right to 40
     * ```css
     * {
     *   margin-left: 40px;
     *   margin-right: 40px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box mx10></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    mx10?: ResponsiveBoolean
    /**
     * set margin-left margin-right to 44
     * ```css
     * {
     *   margin-left: 44px;
     *   margin-right: 44px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box mx11></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    mx11?: ResponsiveBoolean
    /**
     * set margin-left margin-right to 48
     * ```css
     * {
     *   margin-left: 48px;
     *   margin-right: 48px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box mx12></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    mx12?: ResponsiveBoolean
    /**
     * set margin-left margin-right to 56
     * ```css
     * {
     *   margin-left: 56px;
     *   margin-right: 56px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box mx14></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    mx14?: ResponsiveBoolean
    /**
     * set margin-left margin-right to 64
     * ```css
     * {
     *   margin-left: 64px;
     *   margin-right: 64px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box mx16></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    mx16?: ResponsiveBoolean
    /**
     * set margin-left margin-right to 80
     * ```css
     * {
     *   margin-left: 80px;
     *   margin-right: 80px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box mx20></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    mx20?: ResponsiveBoolean
    /**
     * set margin-left margin-right to 96
     * ```css
     * {
     *   margin-left: 96px;
     *   margin-right: 96px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box mx24></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    mx24?: ResponsiveBoolean
    /**
     * set margin-left margin-right to 112
     * ```css
     * {
     *   margin-left: 112px;
     *   margin-right: 112px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box mx28></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    mx28?: ResponsiveBoolean
    /**
     * set margin-left margin-right to 128
     * ```css
     * {
     *   margin-left: 128px;
     *   margin-right: 128px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box mx32></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    mx32?: ResponsiveBoolean
    /**
     * set margin-left margin-right to 144
     * ```css
     * {
     *   margin-left: 144px;
     *   margin-right: 144px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box mx36></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    mx36?: ResponsiveBoolean
    /**
     * set margin-left margin-right to 160
     * ```css
     * {
     *   margin-left: 160px;
     *   margin-right: 160px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box mx40></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    mx40?: ResponsiveBoolean
    /**
     * set margin-left margin-right to 176
     * ```css
     * {
     *   margin-left: 176px;
     *   margin-right: 176px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box mx44></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    mx44?: ResponsiveBoolean
    /**
     * set margin-left margin-right to 192
     * ```css
     * {
     *   margin-left: 192px;
     *   margin-right: 192px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box mx48></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    mx48?: ResponsiveBoolean
    /**
     * set margin-left margin-right to 208
     * ```css
     * {
     *   margin-left: 208px;
     *   margin-right: 208px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box mx52></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    mx52?: ResponsiveBoolean
    /**
     * set margin-left margin-right to 224
     * ```css
     * {
     *   margin-left: 224px;
     *   margin-right: 224px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box mx56></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    mx56?: ResponsiveBoolean
    /**
     * set margin-left margin-right to 240
     * ```css
     * {
     *   margin-left: 240px;
     *   margin-right: 240px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box mx60></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    mx60?: ResponsiveBoolean
    /**
     * set margin-left margin-right to 256
     * ```css
     * {
     *   margin-left: 256px;
     *   margin-right: 256px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box mx64></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    mx64?: ResponsiveBoolean
    /**
     * set margin-left margin-right to 288
     * ```css
     * {
     *   margin-left: 288px;
     *   margin-right: 288px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box mx72></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    mx72?: ResponsiveBoolean
    /**
     * set margin-left margin-right to 320
     * ```css
     * {
     *   margin-left: 320px;
     *   margin-right: 320px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box mx80></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    mx80?: ResponsiveBoolean
    /**
     * set margin-left margin-right to 384
     * ```css
     * {
     *   margin-left: 384px;
     *   margin-right: 384px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box mx96></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    mx96?: ResponsiveBoolean
    /**
     * set margin-top margin-top to some value
     * ```css
     * {
     *   margin-top: $value;
     *   margin-top: $value;
     * }
     * ```
     * @example
     * ```tsx
     * <Box my-4></Box>
     * <Box my-1rem></Box>
     * <Box my-8px></Box>
     * <Box my={8}></Box>
     * <Box my={a + b}></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    my?: ResponsiveValue<string | number>
    /**
     * set margin-top margin-top to 0
     * ```css
     * {
     *   margin-top: 0px;
     *   margin-top: 0px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box my0></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    my0?: ResponsiveBoolean
    /**
     * set margin-top margin-top to 4
     * ```css
     * {
     *   margin-top: 4px;
     *   margin-top: 4px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box my1></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    my1?: ResponsiveBoolean
    /**
     * set margin-top margin-top to 8
     * ```css
     * {
     *   margin-top: 8px;
     *   margin-top: 8px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box my2></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    my2?: ResponsiveBoolean
    /**
     * set margin-top margin-top to 12
     * ```css
     * {
     *   margin-top: 12px;
     *   margin-top: 12px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box my3></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    my3?: ResponsiveBoolean
    /**
     * set margin-top margin-top to 16
     * ```css
     * {
     *   margin-top: 16px;
     *   margin-top: 16px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box my4></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    my4?: ResponsiveBoolean
    /**
     * set margin-top margin-top to 20
     * ```css
     * {
     *   margin-top: 20px;
     *   margin-top: 20px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box my5></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    my5?: ResponsiveBoolean
    /**
     * set margin-top margin-top to 24
     * ```css
     * {
     *   margin-top: 24px;
     *   margin-top: 24px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box my6></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    my6?: ResponsiveBoolean
    /**
     * set margin-top margin-top to 28
     * ```css
     * {
     *   margin-top: 28px;
     *   margin-top: 28px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box my7></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    my7?: ResponsiveBoolean
    /**
     * set margin-top margin-top to 32
     * ```css
     * {
     *   margin-top: 32px;
     *   margin-top: 32px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box my8></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    my8?: ResponsiveBoolean
    /**
     * set margin-top margin-top to 36
     * ```css
     * {
     *   margin-top: 36px;
     *   margin-top: 36px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box my9></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    my9?: ResponsiveBoolean
    /**
     * set margin-top margin-top to 40
     * ```css
     * {
     *   margin-top: 40px;
     *   margin-top: 40px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box my10></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    my10?: ResponsiveBoolean
    /**
     * set margin-top margin-top to 44
     * ```css
     * {
     *   margin-top: 44px;
     *   margin-top: 44px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box my11></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    my11?: ResponsiveBoolean
    /**
     * set margin-top margin-top to 48
     * ```css
     * {
     *   margin-top: 48px;
     *   margin-top: 48px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box my12></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    my12?: ResponsiveBoolean
    /**
     * set margin-top margin-top to 56
     * ```css
     * {
     *   margin-top: 56px;
     *   margin-top: 56px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box my14></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    my14?: ResponsiveBoolean
    /**
     * set margin-top margin-top to 64
     * ```css
     * {
     *   margin-top: 64px;
     *   margin-top: 64px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box my16></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    my16?: ResponsiveBoolean
    /**
     * set margin-top margin-top to 80
     * ```css
     * {
     *   margin-top: 80px;
     *   margin-top: 80px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box my20></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    my20?: ResponsiveBoolean
    /**
     * set margin-top margin-top to 96
     * ```css
     * {
     *   margin-top: 96px;
     *   margin-top: 96px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box my24></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    my24?: ResponsiveBoolean
    /**
     * set margin-top margin-top to 112
     * ```css
     * {
     *   margin-top: 112px;
     *   margin-top: 112px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box my28></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    my28?: ResponsiveBoolean
    /**
     * set margin-top margin-top to 128
     * ```css
     * {
     *   margin-top: 128px;
     *   margin-top: 128px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box my32></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    my32?: ResponsiveBoolean
    /**
     * set margin-top margin-top to 144
     * ```css
     * {
     *   margin-top: 144px;
     *   margin-top: 144px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box my36></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    my36?: ResponsiveBoolean
    /**
     * set margin-top margin-top to 160
     * ```css
     * {
     *   margin-top: 160px;
     *   margin-top: 160px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box my40></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    my40?: ResponsiveBoolean
    /**
     * set margin-top margin-top to 176
     * ```css
     * {
     *   margin-top: 176px;
     *   margin-top: 176px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box my44></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    my44?: ResponsiveBoolean
    /**
     * set margin-top margin-top to 192
     * ```css
     * {
     *   margin-top: 192px;
     *   margin-top: 192px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box my48></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    my48?: ResponsiveBoolean
    /**
     * set margin-top margin-top to 208
     * ```css
     * {
     *   margin-top: 208px;
     *   margin-top: 208px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box my52></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    my52?: ResponsiveBoolean
    /**
     * set margin-top margin-top to 224
     * ```css
     * {
     *   margin-top: 224px;
     *   margin-top: 224px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box my56></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    my56?: ResponsiveBoolean
    /**
     * set margin-top margin-top to 240
     * ```css
     * {
     *   margin-top: 240px;
     *   margin-top: 240px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box my60></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    my60?: ResponsiveBoolean
    /**
     * set margin-top margin-top to 256
     * ```css
     * {
     *   margin-top: 256px;
     *   margin-top: 256px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box my64></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    my64?: ResponsiveBoolean
    /**
     * set margin-top margin-top to 288
     * ```css
     * {
     *   margin-top: 288px;
     *   margin-top: 288px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box my72></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    my72?: ResponsiveBoolean
    /**
     * set margin-top margin-top to 320
     * ```css
     * {
     *   margin-top: 320px;
     *   margin-top: 320px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box my80></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    my80?: ResponsiveBoolean
    /**
     * set margin-top margin-top to 384
     * ```css
     * {
     *   margin-top: 384px;
     *   margin-top: 384px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box my96></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    my96?: ResponsiveBoolean
    /**
     * set margin-top to some value
     * ```css
     * {
     *   margin-top: $value;
     * }
     * ```
     * @example
     * ```tsx
     * <Box mt-4></Box>
     * <Box mt-1rem></Box>
     * <Box mt-8px></Box>
     * <Box mt={8}></Box>
     * <Box mt={a + b}></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    mt?: ResponsiveValue<string | number>
    /**
     * set margin-top to 0
     * ```css
     * {
     *   margin-top: 0px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box mt0></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    mt0?: ResponsiveBoolean
    /**
     * set margin-top to 4
     * ```css
     * {
     *   margin-top: 4px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box mt1></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    mt1?: ResponsiveBoolean
    /**
     * set margin-top to 8
     * ```css
     * {
     *   margin-top: 8px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box mt2></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    mt2?: ResponsiveBoolean
    /**
     * set margin-top to 12
     * ```css
     * {
     *   margin-top: 12px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box mt3></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    mt3?: ResponsiveBoolean
    /**
     * set margin-top to 16
     * ```css
     * {
     *   margin-top: 16px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box mt4></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    mt4?: ResponsiveBoolean
    /**
     * set margin-top to 20
     * ```css
     * {
     *   margin-top: 20px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box mt5></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    mt5?: ResponsiveBoolean
    /**
     * set margin-top to 24
     * ```css
     * {
     *   margin-top: 24px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box mt6></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    mt6?: ResponsiveBoolean
    /**
     * set margin-top to 28
     * ```css
     * {
     *   margin-top: 28px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box mt7></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    mt7?: ResponsiveBoolean
    /**
     * set margin-top to 32
     * ```css
     * {
     *   margin-top: 32px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box mt8></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    mt8?: ResponsiveBoolean
    /**
     * set margin-top to 36
     * ```css
     * {
     *   margin-top: 36px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box mt9></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    mt9?: ResponsiveBoolean
    /**
     * set margin-top to 40
     * ```css
     * {
     *   margin-top: 40px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box mt10></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    mt10?: ResponsiveBoolean
    /**
     * set margin-top to 44
     * ```css
     * {
     *   margin-top: 44px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box mt11></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    mt11?: ResponsiveBoolean
    /**
     * set margin-top to 48
     * ```css
     * {
     *   margin-top: 48px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box mt12></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    mt12?: ResponsiveBoolean
    /**
     * set margin-top to 56
     * ```css
     * {
     *   margin-top: 56px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box mt14></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    mt14?: ResponsiveBoolean
    /**
     * set margin-top to 64
     * ```css
     * {
     *   margin-top: 64px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box mt16></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    mt16?: ResponsiveBoolean
    /**
     * set margin-top to 80
     * ```css
     * {
     *   margin-top: 80px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box mt20></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    mt20?: ResponsiveBoolean
    /**
     * set margin-top to 96
     * ```css
     * {
     *   margin-top: 96px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box mt24></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    mt24?: ResponsiveBoolean
    /**
     * set margin-top to 112
     * ```css
     * {
     *   margin-top: 112px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box mt28></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    mt28?: ResponsiveBoolean
    /**
     * set margin-top to 128
     * ```css
     * {
     *   margin-top: 128px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box mt32></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    mt32?: ResponsiveBoolean
    /**
     * set margin-top to 144
     * ```css
     * {
     *   margin-top: 144px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box mt36></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    mt36?: ResponsiveBoolean
    /**
     * set margin-top to 160
     * ```css
     * {
     *   margin-top: 160px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box mt40></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    mt40?: ResponsiveBoolean
    /**
     * set margin-top to 176
     * ```css
     * {
     *   margin-top: 176px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box mt44></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    mt44?: ResponsiveBoolean
    /**
     * set margin-top to 192
     * ```css
     * {
     *   margin-top: 192px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box mt48></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    mt48?: ResponsiveBoolean
    /**
     * set margin-top to 208
     * ```css
     * {
     *   margin-top: 208px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box mt52></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    mt52?: ResponsiveBoolean
    /**
     * set margin-top to 224
     * ```css
     * {
     *   margin-top: 224px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box mt56></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    mt56?: ResponsiveBoolean
    /**
     * set margin-top to 240
     * ```css
     * {
     *   margin-top: 240px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box mt60></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    mt60?: ResponsiveBoolean
    /**
     * set margin-top to 256
     * ```css
     * {
     *   margin-top: 256px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box mt64></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    mt64?: ResponsiveBoolean
    /**
     * set margin-top to 288
     * ```css
     * {
     *   margin-top: 288px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box mt72></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    mt72?: ResponsiveBoolean
    /**
     * set margin-top to 320
     * ```css
     * {
     *   margin-top: 320px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box mt80></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    mt80?: ResponsiveBoolean
    /**
     * set margin-top to 384
     * ```css
     * {
     *   margin-top: 384px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box mt96></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    mt96?: ResponsiveBoolean
    /**
     * set margin-right to some value
     * ```css
     * {
     *   margin-right: $value;
     * }
     * ```
     * @example
     * ```tsx
     * <Box mr-4></Box>
     * <Box mr-1rem></Box>
     * <Box mr-8px></Box>
     * <Box mr={8}></Box>
     * <Box mr={a + b}></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    mr?: ResponsiveValue<string | number>
    /**
     * set margin-right to 0
     * ```css
     * {
     *   margin-right: 0px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box mr0></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    mr0?: ResponsiveBoolean
    /**
     * set margin-right to 4
     * ```css
     * {
     *   margin-right: 4px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box mr1></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    mr1?: ResponsiveBoolean
    /**
     * set margin-right to 8
     * ```css
     * {
     *   margin-right: 8px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box mr2></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    mr2?: ResponsiveBoolean
    /**
     * set margin-right to 12
     * ```css
     * {
     *   margin-right: 12px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box mr3></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    mr3?: ResponsiveBoolean
    /**
     * set margin-right to 16
     * ```css
     * {
     *   margin-right: 16px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box mr4></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    mr4?: ResponsiveBoolean
    /**
     * set margin-right to 20
     * ```css
     * {
     *   margin-right: 20px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box mr5></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    mr5?: ResponsiveBoolean
    /**
     * set margin-right to 24
     * ```css
     * {
     *   margin-right: 24px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box mr6></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    mr6?: ResponsiveBoolean
    /**
     * set margin-right to 28
     * ```css
     * {
     *   margin-right: 28px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box mr7></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    mr7?: ResponsiveBoolean
    /**
     * set margin-right to 32
     * ```css
     * {
     *   margin-right: 32px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box mr8></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    mr8?: ResponsiveBoolean
    /**
     * set margin-right to 36
     * ```css
     * {
     *   margin-right: 36px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box mr9></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    mr9?: ResponsiveBoolean
    /**
     * set margin-right to 40
     * ```css
     * {
     *   margin-right: 40px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box mr10></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    mr10?: ResponsiveBoolean
    /**
     * set margin-right to 44
     * ```css
     * {
     *   margin-right: 44px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box mr11></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    mr11?: ResponsiveBoolean
    /**
     * set margin-right to 48
     * ```css
     * {
     *   margin-right: 48px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box mr12></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    mr12?: ResponsiveBoolean
    /**
     * set margin-right to 56
     * ```css
     * {
     *   margin-right: 56px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box mr14></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    mr14?: ResponsiveBoolean
    /**
     * set margin-right to 64
     * ```css
     * {
     *   margin-right: 64px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box mr16></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    mr16?: ResponsiveBoolean
    /**
     * set margin-right to 80
     * ```css
     * {
     *   margin-right: 80px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box mr20></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    mr20?: ResponsiveBoolean
    /**
     * set margin-right to 96
     * ```css
     * {
     *   margin-right: 96px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box mr24></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    mr24?: ResponsiveBoolean
    /**
     * set margin-right to 112
     * ```css
     * {
     *   margin-right: 112px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box mr28></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    mr28?: ResponsiveBoolean
    /**
     * set margin-right to 128
     * ```css
     * {
     *   margin-right: 128px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box mr32></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    mr32?: ResponsiveBoolean
    /**
     * set margin-right to 144
     * ```css
     * {
     *   margin-right: 144px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box mr36></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    mr36?: ResponsiveBoolean
    /**
     * set margin-right to 160
     * ```css
     * {
     *   margin-right: 160px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box mr40></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    mr40?: ResponsiveBoolean
    /**
     * set margin-right to 176
     * ```css
     * {
     *   margin-right: 176px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box mr44></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    mr44?: ResponsiveBoolean
    /**
     * set margin-right to 192
     * ```css
     * {
     *   margin-right: 192px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box mr48></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    mr48?: ResponsiveBoolean
    /**
     * set margin-right to 208
     * ```css
     * {
     *   margin-right: 208px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box mr52></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    mr52?: ResponsiveBoolean
    /**
     * set margin-right to 224
     * ```css
     * {
     *   margin-right: 224px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box mr56></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    mr56?: ResponsiveBoolean
    /**
     * set margin-right to 240
     * ```css
     * {
     *   margin-right: 240px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box mr60></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    mr60?: ResponsiveBoolean
    /**
     * set margin-right to 256
     * ```css
     * {
     *   margin-right: 256px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box mr64></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    mr64?: ResponsiveBoolean
    /**
     * set margin-right to 288
     * ```css
     * {
     *   margin-right: 288px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box mr72></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    mr72?: ResponsiveBoolean
    /**
     * set margin-right to 320
     * ```css
     * {
     *   margin-right: 320px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box mr80></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    mr80?: ResponsiveBoolean
    /**
     * set margin-right to 384
     * ```css
     * {
     *   margin-right: 384px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box mr96></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    mr96?: ResponsiveBoolean
    /**
     * set margin-bottom to some value
     * ```css
     * {
     *   margin-bottom: $value;
     * }
     * ```
     * @example
     * ```tsx
     * <Box mb-4></Box>
     * <Box mb-1rem></Box>
     * <Box mb-8px></Box>
     * <Box mb={8}></Box>
     * <Box mb={a + b}></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    mb?: ResponsiveValue<string | number>
    /**
     * set margin-bottom to 0
     * ```css
     * {
     *   margin-bottom: 0px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box mb0></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    mb0?: ResponsiveBoolean
    /**
     * set margin-bottom to 4
     * ```css
     * {
     *   margin-bottom: 4px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box mb1></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    mb1?: ResponsiveBoolean
    /**
     * set margin-bottom to 8
     * ```css
     * {
     *   margin-bottom: 8px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box mb2></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    mb2?: ResponsiveBoolean
    /**
     * set margin-bottom to 12
     * ```css
     * {
     *   margin-bottom: 12px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box mb3></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    mb3?: ResponsiveBoolean
    /**
     * set margin-bottom to 16
     * ```css
     * {
     *   margin-bottom: 16px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box mb4></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    mb4?: ResponsiveBoolean
    /**
     * set margin-bottom to 20
     * ```css
     * {
     *   margin-bottom: 20px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box mb5></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    mb5?: ResponsiveBoolean
    /**
     * set margin-bottom to 24
     * ```css
     * {
     *   margin-bottom: 24px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box mb6></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    mb6?: ResponsiveBoolean
    /**
     * set margin-bottom to 28
     * ```css
     * {
     *   margin-bottom: 28px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box mb7></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    mb7?: ResponsiveBoolean
    /**
     * set margin-bottom to 32
     * ```css
     * {
     *   margin-bottom: 32px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box mb8></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    mb8?: ResponsiveBoolean
    /**
     * set margin-bottom to 36
     * ```css
     * {
     *   margin-bottom: 36px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box mb9></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    mb9?: ResponsiveBoolean
    /**
     * set margin-bottom to 40
     * ```css
     * {
     *   margin-bottom: 40px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box mb10></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    mb10?: ResponsiveBoolean
    /**
     * set margin-bottom to 44
     * ```css
     * {
     *   margin-bottom: 44px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box mb11></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    mb11?: ResponsiveBoolean
    /**
     * set margin-bottom to 48
     * ```css
     * {
     *   margin-bottom: 48px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box mb12></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    mb12?: ResponsiveBoolean
    /**
     * set margin-bottom to 56
     * ```css
     * {
     *   margin-bottom: 56px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box mb14></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    mb14?: ResponsiveBoolean
    /**
     * set margin-bottom to 64
     * ```css
     * {
     *   margin-bottom: 64px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box mb16></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    mb16?: ResponsiveBoolean
    /**
     * set margin-bottom to 80
     * ```css
     * {
     *   margin-bottom: 80px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box mb20></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    mb20?: ResponsiveBoolean
    /**
     * set margin-bottom to 96
     * ```css
     * {
     *   margin-bottom: 96px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box mb24></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    mb24?: ResponsiveBoolean
    /**
     * set margin-bottom to 112
     * ```css
     * {
     *   margin-bottom: 112px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box mb28></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    mb28?: ResponsiveBoolean
    /**
     * set margin-bottom to 128
     * ```css
     * {
     *   margin-bottom: 128px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box mb32></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    mb32?: ResponsiveBoolean
    /**
     * set margin-bottom to 144
     * ```css
     * {
     *   margin-bottom: 144px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box mb36></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    mb36?: ResponsiveBoolean
    /**
     * set margin-bottom to 160
     * ```css
     * {
     *   margin-bottom: 160px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box mb40></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    mb40?: ResponsiveBoolean
    /**
     * set margin-bottom to 176
     * ```css
     * {
     *   margin-bottom: 176px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box mb44></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    mb44?: ResponsiveBoolean
    /**
     * set margin-bottom to 192
     * ```css
     * {
     *   margin-bottom: 192px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box mb48></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    mb48?: ResponsiveBoolean
    /**
     * set margin-bottom to 208
     * ```css
     * {
     *   margin-bottom: 208px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box mb52></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    mb52?: ResponsiveBoolean
    /**
     * set margin-bottom to 224
     * ```css
     * {
     *   margin-bottom: 224px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box mb56></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    mb56?: ResponsiveBoolean
    /**
     * set margin-bottom to 240
     * ```css
     * {
     *   margin-bottom: 240px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box mb60></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    mb60?: ResponsiveBoolean
    /**
     * set margin-bottom to 256
     * ```css
     * {
     *   margin-bottom: 256px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box mb64></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    mb64?: ResponsiveBoolean
    /**
     * set margin-bottom to 288
     * ```css
     * {
     *   margin-bottom: 288px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box mb72></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    mb72?: ResponsiveBoolean
    /**
     * set margin-bottom to 320
     * ```css
     * {
     *   margin-bottom: 320px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box mb80></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    mb80?: ResponsiveBoolean
    /**
     * set margin-bottom to 384
     * ```css
     * {
     *   margin-bottom: 384px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box mb96></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    mb96?: ResponsiveBoolean
    /**
     * set margin-left to some value
     * ```css
     * {
     *   margin-left: $value;
     * }
     * ```
     * @example
     * ```tsx
     * <Box ml-4></Box>
     * <Box ml-1rem></Box>
     * <Box ml-8px></Box>
     * <Box ml={8}></Box>
     * <Box ml={a + b}></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    ml?: ResponsiveValue<string | number>
    /**
     * set margin-left to 0
     * ```css
     * {
     *   margin-left: 0px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box ml0></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    ml0?: ResponsiveBoolean
    /**
     * set margin-left to 4
     * ```css
     * {
     *   margin-left: 4px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box ml1></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    ml1?: ResponsiveBoolean
    /**
     * set margin-left to 8
     * ```css
     * {
     *   margin-left: 8px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box ml2></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    ml2?: ResponsiveBoolean
    /**
     * set margin-left to 12
     * ```css
     * {
     *   margin-left: 12px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box ml3></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    ml3?: ResponsiveBoolean
    /**
     * set margin-left to 16
     * ```css
     * {
     *   margin-left: 16px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box ml4></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    ml4?: ResponsiveBoolean
    /**
     * set margin-left to 20
     * ```css
     * {
     *   margin-left: 20px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box ml5></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    ml5?: ResponsiveBoolean
    /**
     * set margin-left to 24
     * ```css
     * {
     *   margin-left: 24px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box ml6></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    ml6?: ResponsiveBoolean
    /**
     * set margin-left to 28
     * ```css
     * {
     *   margin-left: 28px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box ml7></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    ml7?: ResponsiveBoolean
    /**
     * set margin-left to 32
     * ```css
     * {
     *   margin-left: 32px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box ml8></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    ml8?: ResponsiveBoolean
    /**
     * set margin-left to 36
     * ```css
     * {
     *   margin-left: 36px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box ml9></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    ml9?: ResponsiveBoolean
    /**
     * set margin-left to 40
     * ```css
     * {
     *   margin-left: 40px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box ml10></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    ml10?: ResponsiveBoolean
    /**
     * set margin-left to 44
     * ```css
     * {
     *   margin-left: 44px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box ml11></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    ml11?: ResponsiveBoolean
    /**
     * set margin-left to 48
     * ```css
     * {
     *   margin-left: 48px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box ml12></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    ml12?: ResponsiveBoolean
    /**
     * set margin-left to 56
     * ```css
     * {
     *   margin-left: 56px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box ml14></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    ml14?: ResponsiveBoolean
    /**
     * set margin-left to 64
     * ```css
     * {
     *   margin-left: 64px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box ml16></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    ml16?: ResponsiveBoolean
    /**
     * set margin-left to 80
     * ```css
     * {
     *   margin-left: 80px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box ml20></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    ml20?: ResponsiveBoolean
    /**
     * set margin-left to 96
     * ```css
     * {
     *   margin-left: 96px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box ml24></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    ml24?: ResponsiveBoolean
    /**
     * set margin-left to 112
     * ```css
     * {
     *   margin-left: 112px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box ml28></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    ml28?: ResponsiveBoolean
    /**
     * set margin-left to 128
     * ```css
     * {
     *   margin-left: 128px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box ml32></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    ml32?: ResponsiveBoolean
    /**
     * set margin-left to 144
     * ```css
     * {
     *   margin-left: 144px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box ml36></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    ml36?: ResponsiveBoolean
    /**
     * set margin-left to 160
     * ```css
     * {
     *   margin-left: 160px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box ml40></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    ml40?: ResponsiveBoolean
    /**
     * set margin-left to 176
     * ```css
     * {
     *   margin-left: 176px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box ml44></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    ml44?: ResponsiveBoolean
    /**
     * set margin-left to 192
     * ```css
     * {
     *   margin-left: 192px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box ml48></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    ml48?: ResponsiveBoolean
    /**
     * set margin-left to 208
     * ```css
     * {
     *   margin-left: 208px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box ml52></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    ml52?: ResponsiveBoolean
    /**
     * set margin-left to 224
     * ```css
     * {
     *   margin-left: 224px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box ml56></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    ml56?: ResponsiveBoolean
    /**
     * set margin-left to 240
     * ```css
     * {
     *   margin-left: 240px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box ml60></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    ml60?: ResponsiveBoolean
    /**
     * set margin-left to 256
     * ```css
     * {
     *   margin-left: 256px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box ml64></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    ml64?: ResponsiveBoolean
    /**
     * set margin-left to 288
     * ```css
     * {
     *   margin-left: 288px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box ml72></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    ml72?: ResponsiveBoolean
    /**
     * set margin-left to 320
     * ```css
     * {
     *   margin-left: 320px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box ml80></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    ml80?: ResponsiveBoolean
    /**
     * set margin-left to 384
     * ```css
     * {
     *   margin-left: 384px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box ml96></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    ml96?: ResponsiveBoolean
  }
}
