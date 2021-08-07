import { FowerPlugin, ResponsiveValue, ResponsiveBoolean } from "@fower/core"
declare const _default: () => FowerPlugin
export default _default

declare module '@fower/atomic-props' {
  export interface AtomicProps {
    /**
     * set padding to some value
     * ```css
     * {
     *   padding: $value;
     * }
     * ```
     * @example
     * ```tsx
     * <Box p-8></Box>
     * <Box p-1rem></Box>
     * <Box p-4px></Box>
     * <Box p={8}></Box>
     * <Box p={a + b}></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    p?: ResponsiveValue<string | number>
    /**
     * set padding to 0
     * ```css
     * {
     *   padding: 0px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box p0></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    p0?: ResponsiveBoolean
    /**
     * set padding to 4
     * ```css
     * {
     *   padding: 4px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box p1></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    p1?: ResponsiveBoolean
    /**
     * set padding to 8
     * ```css
     * {
     *   padding: 8px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box p2></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    p2?: ResponsiveBoolean
    /**
     * set padding to 12
     * ```css
     * {
     *   padding: 12px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box p3></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    p3?: ResponsiveBoolean
    /**
     * set padding to 16
     * ```css
     * {
     *   padding: 16px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box p4></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    p4?: ResponsiveBoolean
    /**
     * set padding to 20
     * ```css
     * {
     *   padding: 20px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box p5></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    p5?: ResponsiveBoolean
    /**
     * set padding to 24
     * ```css
     * {
     *   padding: 24px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box p6></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    p6?: ResponsiveBoolean
    /**
     * set padding to 28
     * ```css
     * {
     *   padding: 28px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box p7></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    p7?: ResponsiveBoolean
    /**
     * set padding to 32
     * ```css
     * {
     *   padding: 32px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box p8></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    p8?: ResponsiveBoolean
    /**
     * set padding to 36
     * ```css
     * {
     *   padding: 36px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box p9></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    p9?: ResponsiveBoolean
    /**
     * set padding to 40
     * ```css
     * {
     *   padding: 40px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box p10></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    p10?: ResponsiveBoolean
    /**
     * set padding to 44
     * ```css
     * {
     *   padding: 44px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box p11></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    p11?: ResponsiveBoolean
    /**
     * set padding to 48
     * ```css
     * {
     *   padding: 48px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box p12></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    p12?: ResponsiveBoolean
    /**
     * set padding to 56
     * ```css
     * {
     *   padding: 56px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box p14></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    p14?: ResponsiveBoolean
    /**
     * set padding to 64
     * ```css
     * {
     *   padding: 64px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box p16></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    p16?: ResponsiveBoolean
    /**
     * set padding to 80
     * ```css
     * {
     *   padding: 80px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box p20></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    p20?: ResponsiveBoolean
    /**
     * set padding to 96
     * ```css
     * {
     *   padding: 96px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box p24></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    p24?: ResponsiveBoolean
    /**
     * set padding to 112
     * ```css
     * {
     *   padding: 112px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box p28></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    p28?: ResponsiveBoolean
    /**
     * set padding to 128
     * ```css
     * {
     *   padding: 128px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box p32></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    p32?: ResponsiveBoolean
    /**
     * set padding to 144
     * ```css
     * {
     *   padding: 144px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box p36></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    p36?: ResponsiveBoolean
    /**
     * set padding to 160
     * ```css
     * {
     *   padding: 160px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box p40></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    p40?: ResponsiveBoolean
    /**
     * set padding to 176
     * ```css
     * {
     *   padding: 176px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box p44></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    p44?: ResponsiveBoolean
    /**
     * set padding to 192
     * ```css
     * {
     *   padding: 192px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box p48></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    p48?: ResponsiveBoolean
    /**
     * set padding to 208
     * ```css
     * {
     *   padding: 208px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box p52></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    p52?: ResponsiveBoolean
    /**
     * set padding to 224
     * ```css
     * {
     *   padding: 224px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box p56></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    p56?: ResponsiveBoolean
    /**
     * set padding to 240
     * ```css
     * {
     *   padding: 240px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box p60></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    p60?: ResponsiveBoolean
    /**
     * set padding to 256
     * ```css
     * {
     *   padding: 256px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box p64></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    p64?: ResponsiveBoolean
    /**
     * set padding to 288
     * ```css
     * {
     *   padding: 288px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box p72></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    p72?: ResponsiveBoolean
    /**
     * set padding to 320
     * ```css
     * {
     *   padding: 320px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box p80></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    p80?: ResponsiveBoolean
    /**
     * set padding to 384
     * ```css
     * {
     *   padding: 384px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box p96></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    p96?: ResponsiveBoolean
    /**
     * set padding-left padding-right to some value
     * ```css
     * {
     *   padding-left: $value;
     *   padding-right: $value;
     * }
     * ```
     * @example
     * ```tsx
     * <Box px-8></Box>
     * <Box px-1rem></Box>
     * <Box px-4px></Box>
     * <Box px={8}></Box>
     * <Box px={a + b}></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    px?: ResponsiveValue<string | number>
    /**
     * set padding-left padding-right to 0
     * ```css
     * {
     *   padding-left: 0px;
     *   padding-right: 0px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box px0></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    px0?: ResponsiveBoolean
    /**
     * set padding-left padding-right to 4
     * ```css
     * {
     *   padding-left: 4px;
     *   padding-right: 4px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box px1></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    px1?: ResponsiveBoolean
    /**
     * set padding-left padding-right to 8
     * ```css
     * {
     *   padding-left: 8px;
     *   padding-right: 8px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box px2></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    px2?: ResponsiveBoolean
    /**
     * set padding-left padding-right to 12
     * ```css
     * {
     *   padding-left: 12px;
     *   padding-right: 12px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box px3></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    px3?: ResponsiveBoolean
    /**
     * set padding-left padding-right to 16
     * ```css
     * {
     *   padding-left: 16px;
     *   padding-right: 16px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box px4></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    px4?: ResponsiveBoolean
    /**
     * set padding-left padding-right to 20
     * ```css
     * {
     *   padding-left: 20px;
     *   padding-right: 20px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box px5></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    px5?: ResponsiveBoolean
    /**
     * set padding-left padding-right to 24
     * ```css
     * {
     *   padding-left: 24px;
     *   padding-right: 24px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box px6></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    px6?: ResponsiveBoolean
    /**
     * set padding-left padding-right to 28
     * ```css
     * {
     *   padding-left: 28px;
     *   padding-right: 28px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box px7></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    px7?: ResponsiveBoolean
    /**
     * set padding-left padding-right to 32
     * ```css
     * {
     *   padding-left: 32px;
     *   padding-right: 32px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box px8></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    px8?: ResponsiveBoolean
    /**
     * set padding-left padding-right to 36
     * ```css
     * {
     *   padding-left: 36px;
     *   padding-right: 36px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box px9></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    px9?: ResponsiveBoolean
    /**
     * set padding-left padding-right to 40
     * ```css
     * {
     *   padding-left: 40px;
     *   padding-right: 40px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box px10></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    px10?: ResponsiveBoolean
    /**
     * set padding-left padding-right to 44
     * ```css
     * {
     *   padding-left: 44px;
     *   padding-right: 44px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box px11></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    px11?: ResponsiveBoolean
    /**
     * set padding-left padding-right to 48
     * ```css
     * {
     *   padding-left: 48px;
     *   padding-right: 48px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box px12></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    px12?: ResponsiveBoolean
    /**
     * set padding-left padding-right to 56
     * ```css
     * {
     *   padding-left: 56px;
     *   padding-right: 56px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box px14></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    px14?: ResponsiveBoolean
    /**
     * set padding-left padding-right to 64
     * ```css
     * {
     *   padding-left: 64px;
     *   padding-right: 64px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box px16></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    px16?: ResponsiveBoolean
    /**
     * set padding-left padding-right to 80
     * ```css
     * {
     *   padding-left: 80px;
     *   padding-right: 80px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box px20></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    px20?: ResponsiveBoolean
    /**
     * set padding-left padding-right to 96
     * ```css
     * {
     *   padding-left: 96px;
     *   padding-right: 96px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box px24></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    px24?: ResponsiveBoolean
    /**
     * set padding-left padding-right to 112
     * ```css
     * {
     *   padding-left: 112px;
     *   padding-right: 112px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box px28></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    px28?: ResponsiveBoolean
    /**
     * set padding-left padding-right to 128
     * ```css
     * {
     *   padding-left: 128px;
     *   padding-right: 128px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box px32></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    px32?: ResponsiveBoolean
    /**
     * set padding-left padding-right to 144
     * ```css
     * {
     *   padding-left: 144px;
     *   padding-right: 144px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box px36></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    px36?: ResponsiveBoolean
    /**
     * set padding-left padding-right to 160
     * ```css
     * {
     *   padding-left: 160px;
     *   padding-right: 160px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box px40></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    px40?: ResponsiveBoolean
    /**
     * set padding-left padding-right to 176
     * ```css
     * {
     *   padding-left: 176px;
     *   padding-right: 176px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box px44></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    px44?: ResponsiveBoolean
    /**
     * set padding-left padding-right to 192
     * ```css
     * {
     *   padding-left: 192px;
     *   padding-right: 192px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box px48></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    px48?: ResponsiveBoolean
    /**
     * set padding-left padding-right to 208
     * ```css
     * {
     *   padding-left: 208px;
     *   padding-right: 208px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box px52></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    px52?: ResponsiveBoolean
    /**
     * set padding-left padding-right to 224
     * ```css
     * {
     *   padding-left: 224px;
     *   padding-right: 224px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box px56></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    px56?: ResponsiveBoolean
    /**
     * set padding-left padding-right to 240
     * ```css
     * {
     *   padding-left: 240px;
     *   padding-right: 240px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box px60></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    px60?: ResponsiveBoolean
    /**
     * set padding-left padding-right to 256
     * ```css
     * {
     *   padding-left: 256px;
     *   padding-right: 256px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box px64></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    px64?: ResponsiveBoolean
    /**
     * set padding-left padding-right to 288
     * ```css
     * {
     *   padding-left: 288px;
     *   padding-right: 288px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box px72></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    px72?: ResponsiveBoolean
    /**
     * set padding-left padding-right to 320
     * ```css
     * {
     *   padding-left: 320px;
     *   padding-right: 320px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box px80></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    px80?: ResponsiveBoolean
    /**
     * set padding-left padding-right to 384
     * ```css
     * {
     *   padding-left: 384px;
     *   padding-right: 384px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box px96></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    px96?: ResponsiveBoolean
    /**
     * set padding-top padding-bottom to some value
     * ```css
     * {
     *   padding-top: $value;
     *   padding-bottom: $value;
     * }
     * ```
     * @example
     * ```tsx
     * <Box py-8></Box>
     * <Box py-1rem></Box>
     * <Box py-4px></Box>
     * <Box py={8}></Box>
     * <Box py={a + b}></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    py?: ResponsiveValue<string | number>
    /**
     * set padding-top padding-bottom to 0
     * ```css
     * {
     *   padding-top: 0px;
     *   padding-bottom: 0px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box py0></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    py0?: ResponsiveBoolean
    /**
     * set padding-top padding-bottom to 4
     * ```css
     * {
     *   padding-top: 4px;
     *   padding-bottom: 4px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box py1></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    py1?: ResponsiveBoolean
    /**
     * set padding-top padding-bottom to 8
     * ```css
     * {
     *   padding-top: 8px;
     *   padding-bottom: 8px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box py2></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    py2?: ResponsiveBoolean
    /**
     * set padding-top padding-bottom to 12
     * ```css
     * {
     *   padding-top: 12px;
     *   padding-bottom: 12px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box py3></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    py3?: ResponsiveBoolean
    /**
     * set padding-top padding-bottom to 16
     * ```css
     * {
     *   padding-top: 16px;
     *   padding-bottom: 16px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box py4></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    py4?: ResponsiveBoolean
    /**
     * set padding-top padding-bottom to 20
     * ```css
     * {
     *   padding-top: 20px;
     *   padding-bottom: 20px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box py5></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    py5?: ResponsiveBoolean
    /**
     * set padding-top padding-bottom to 24
     * ```css
     * {
     *   padding-top: 24px;
     *   padding-bottom: 24px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box py6></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    py6?: ResponsiveBoolean
    /**
     * set padding-top padding-bottom to 28
     * ```css
     * {
     *   padding-top: 28px;
     *   padding-bottom: 28px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box py7></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    py7?: ResponsiveBoolean
    /**
     * set padding-top padding-bottom to 32
     * ```css
     * {
     *   padding-top: 32px;
     *   padding-bottom: 32px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box py8></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    py8?: ResponsiveBoolean
    /**
     * set padding-top padding-bottom to 36
     * ```css
     * {
     *   padding-top: 36px;
     *   padding-bottom: 36px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box py9></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    py9?: ResponsiveBoolean
    /**
     * set padding-top padding-bottom to 40
     * ```css
     * {
     *   padding-top: 40px;
     *   padding-bottom: 40px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box py10></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    py10?: ResponsiveBoolean
    /**
     * set padding-top padding-bottom to 44
     * ```css
     * {
     *   padding-top: 44px;
     *   padding-bottom: 44px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box py11></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    py11?: ResponsiveBoolean
    /**
     * set padding-top padding-bottom to 48
     * ```css
     * {
     *   padding-top: 48px;
     *   padding-bottom: 48px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box py12></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    py12?: ResponsiveBoolean
    /**
     * set padding-top padding-bottom to 56
     * ```css
     * {
     *   padding-top: 56px;
     *   padding-bottom: 56px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box py14></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    py14?: ResponsiveBoolean
    /**
     * set padding-top padding-bottom to 64
     * ```css
     * {
     *   padding-top: 64px;
     *   padding-bottom: 64px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box py16></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    py16?: ResponsiveBoolean
    /**
     * set padding-top padding-bottom to 80
     * ```css
     * {
     *   padding-top: 80px;
     *   padding-bottom: 80px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box py20></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    py20?: ResponsiveBoolean
    /**
     * set padding-top padding-bottom to 96
     * ```css
     * {
     *   padding-top: 96px;
     *   padding-bottom: 96px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box py24></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    py24?: ResponsiveBoolean
    /**
     * set padding-top padding-bottom to 112
     * ```css
     * {
     *   padding-top: 112px;
     *   padding-bottom: 112px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box py28></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    py28?: ResponsiveBoolean
    /**
     * set padding-top padding-bottom to 128
     * ```css
     * {
     *   padding-top: 128px;
     *   padding-bottom: 128px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box py32></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    py32?: ResponsiveBoolean
    /**
     * set padding-top padding-bottom to 144
     * ```css
     * {
     *   padding-top: 144px;
     *   padding-bottom: 144px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box py36></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    py36?: ResponsiveBoolean
    /**
     * set padding-top padding-bottom to 160
     * ```css
     * {
     *   padding-top: 160px;
     *   padding-bottom: 160px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box py40></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    py40?: ResponsiveBoolean
    /**
     * set padding-top padding-bottom to 176
     * ```css
     * {
     *   padding-top: 176px;
     *   padding-bottom: 176px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box py44></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    py44?: ResponsiveBoolean
    /**
     * set padding-top padding-bottom to 192
     * ```css
     * {
     *   padding-top: 192px;
     *   padding-bottom: 192px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box py48></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    py48?: ResponsiveBoolean
    /**
     * set padding-top padding-bottom to 208
     * ```css
     * {
     *   padding-top: 208px;
     *   padding-bottom: 208px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box py52></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    py52?: ResponsiveBoolean
    /**
     * set padding-top padding-bottom to 224
     * ```css
     * {
     *   padding-top: 224px;
     *   padding-bottom: 224px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box py56></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    py56?: ResponsiveBoolean
    /**
     * set padding-top padding-bottom to 240
     * ```css
     * {
     *   padding-top: 240px;
     *   padding-bottom: 240px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box py60></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    py60?: ResponsiveBoolean
    /**
     * set padding-top padding-bottom to 256
     * ```css
     * {
     *   padding-top: 256px;
     *   padding-bottom: 256px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box py64></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    py64?: ResponsiveBoolean
    /**
     * set padding-top padding-bottom to 288
     * ```css
     * {
     *   padding-top: 288px;
     *   padding-bottom: 288px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box py72></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    py72?: ResponsiveBoolean
    /**
     * set padding-top padding-bottom to 320
     * ```css
     * {
     *   padding-top: 320px;
     *   padding-bottom: 320px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box py80></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    py80?: ResponsiveBoolean
    /**
     * set padding-top padding-bottom to 384
     * ```css
     * {
     *   padding-top: 384px;
     *   padding-bottom: 384px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box py96></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    py96?: ResponsiveBoolean
    /**
     * set padding-top to some value
     * ```css
     * {
     *   padding-top: $value;
     * }
     * ```
     * @example
     * ```tsx
     * <Box pt-8></Box>
     * <Box pt-1rem></Box>
     * <Box pt-4px></Box>
     * <Box pt={8}></Box>
     * <Box pt={a + b}></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    pt?: ResponsiveValue<string | number>
    /**
     * set padding-top to 0
     * ```css
     * {
     *   padding-top: 0px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box pt0></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    pt0?: ResponsiveBoolean
    /**
     * set padding-top to 4
     * ```css
     * {
     *   padding-top: 4px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box pt1></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    pt1?: ResponsiveBoolean
    /**
     * set padding-top to 8
     * ```css
     * {
     *   padding-top: 8px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box pt2></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    pt2?: ResponsiveBoolean
    /**
     * set padding-top to 12
     * ```css
     * {
     *   padding-top: 12px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box pt3></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    pt3?: ResponsiveBoolean
    /**
     * set padding-top to 16
     * ```css
     * {
     *   padding-top: 16px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box pt4></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    pt4?: ResponsiveBoolean
    /**
     * set padding-top to 20
     * ```css
     * {
     *   padding-top: 20px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box pt5></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    pt5?: ResponsiveBoolean
    /**
     * set padding-top to 24
     * ```css
     * {
     *   padding-top: 24px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box pt6></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    pt6?: ResponsiveBoolean
    /**
     * set padding-top to 28
     * ```css
     * {
     *   padding-top: 28px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box pt7></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    pt7?: ResponsiveBoolean
    /**
     * set padding-top to 32
     * ```css
     * {
     *   padding-top: 32px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box pt8></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    pt8?: ResponsiveBoolean
    /**
     * set padding-top to 36
     * ```css
     * {
     *   padding-top: 36px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box pt9></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    pt9?: ResponsiveBoolean
    /**
     * set padding-top to 40
     * ```css
     * {
     *   padding-top: 40px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box pt10></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    pt10?: ResponsiveBoolean
    /**
     * set padding-top to 44
     * ```css
     * {
     *   padding-top: 44px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box pt11></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    pt11?: ResponsiveBoolean
    /**
     * set padding-top to 48
     * ```css
     * {
     *   padding-top: 48px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box pt12></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    pt12?: ResponsiveBoolean
    /**
     * set padding-top to 56
     * ```css
     * {
     *   padding-top: 56px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box pt14></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    pt14?: ResponsiveBoolean
    /**
     * set padding-top to 64
     * ```css
     * {
     *   padding-top: 64px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box pt16></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    pt16?: ResponsiveBoolean
    /**
     * set padding-top to 80
     * ```css
     * {
     *   padding-top: 80px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box pt20></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    pt20?: ResponsiveBoolean
    /**
     * set padding-top to 96
     * ```css
     * {
     *   padding-top: 96px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box pt24></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    pt24?: ResponsiveBoolean
    /**
     * set padding-top to 112
     * ```css
     * {
     *   padding-top: 112px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box pt28></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    pt28?: ResponsiveBoolean
    /**
     * set padding-top to 128
     * ```css
     * {
     *   padding-top: 128px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box pt32></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    pt32?: ResponsiveBoolean
    /**
     * set padding-top to 144
     * ```css
     * {
     *   padding-top: 144px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box pt36></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    pt36?: ResponsiveBoolean
    /**
     * set padding-top to 160
     * ```css
     * {
     *   padding-top: 160px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box pt40></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    pt40?: ResponsiveBoolean
    /**
     * set padding-top to 176
     * ```css
     * {
     *   padding-top: 176px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box pt44></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    pt44?: ResponsiveBoolean
    /**
     * set padding-top to 192
     * ```css
     * {
     *   padding-top: 192px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box pt48></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    pt48?: ResponsiveBoolean
    /**
     * set padding-top to 208
     * ```css
     * {
     *   padding-top: 208px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box pt52></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    pt52?: ResponsiveBoolean
    /**
     * set padding-top to 224
     * ```css
     * {
     *   padding-top: 224px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box pt56></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    pt56?: ResponsiveBoolean
    /**
     * set padding-top to 240
     * ```css
     * {
     *   padding-top: 240px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box pt60></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    pt60?: ResponsiveBoolean
    /**
     * set padding-top to 256
     * ```css
     * {
     *   padding-top: 256px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box pt64></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    pt64?: ResponsiveBoolean
    /**
     * set padding-top to 288
     * ```css
     * {
     *   padding-top: 288px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box pt72></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    pt72?: ResponsiveBoolean
    /**
     * set padding-top to 320
     * ```css
     * {
     *   padding-top: 320px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box pt80></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    pt80?: ResponsiveBoolean
    /**
     * set padding-top to 384
     * ```css
     * {
     *   padding-top: 384px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box pt96></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    pt96?: ResponsiveBoolean
    /**
     * set padding-right to some value
     * ```css
     * {
     *   padding-right: $value;
     * }
     * ```
     * @example
     * ```tsx
     * <Box pr-8></Box>
     * <Box pr-1rem></Box>
     * <Box pr-4px></Box>
     * <Box pr={8}></Box>
     * <Box pr={a + b}></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    pr?: ResponsiveValue<string | number>
    /**
     * set padding-right to 0
     * ```css
     * {
     *   padding-right: 0px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box pr0></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    pr0?: ResponsiveBoolean
    /**
     * set padding-right to 4
     * ```css
     * {
     *   padding-right: 4px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box pr1></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    pr1?: ResponsiveBoolean
    /**
     * set padding-right to 8
     * ```css
     * {
     *   padding-right: 8px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box pr2></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    pr2?: ResponsiveBoolean
    /**
     * set padding-right to 12
     * ```css
     * {
     *   padding-right: 12px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box pr3></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    pr3?: ResponsiveBoolean
    /**
     * set padding-right to 16
     * ```css
     * {
     *   padding-right: 16px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box pr4></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    pr4?: ResponsiveBoolean
    /**
     * set padding-right to 20
     * ```css
     * {
     *   padding-right: 20px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box pr5></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    pr5?: ResponsiveBoolean
    /**
     * set padding-right to 24
     * ```css
     * {
     *   padding-right: 24px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box pr6></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    pr6?: ResponsiveBoolean
    /**
     * set padding-right to 28
     * ```css
     * {
     *   padding-right: 28px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box pr7></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    pr7?: ResponsiveBoolean
    /**
     * set padding-right to 32
     * ```css
     * {
     *   padding-right: 32px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box pr8></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    pr8?: ResponsiveBoolean
    /**
     * set padding-right to 36
     * ```css
     * {
     *   padding-right: 36px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box pr9></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    pr9?: ResponsiveBoolean
    /**
     * set padding-right to 40
     * ```css
     * {
     *   padding-right: 40px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box pr10></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    pr10?: ResponsiveBoolean
    /**
     * set padding-right to 44
     * ```css
     * {
     *   padding-right: 44px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box pr11></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    pr11?: ResponsiveBoolean
    /**
     * set padding-right to 48
     * ```css
     * {
     *   padding-right: 48px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box pr12></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    pr12?: ResponsiveBoolean
    /**
     * set padding-right to 56
     * ```css
     * {
     *   padding-right: 56px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box pr14></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    pr14?: ResponsiveBoolean
    /**
     * set padding-right to 64
     * ```css
     * {
     *   padding-right: 64px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box pr16></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    pr16?: ResponsiveBoolean
    /**
     * set padding-right to 80
     * ```css
     * {
     *   padding-right: 80px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box pr20></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    pr20?: ResponsiveBoolean
    /**
     * set padding-right to 96
     * ```css
     * {
     *   padding-right: 96px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box pr24></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    pr24?: ResponsiveBoolean
    /**
     * set padding-right to 112
     * ```css
     * {
     *   padding-right: 112px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box pr28></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    pr28?: ResponsiveBoolean
    /**
     * set padding-right to 128
     * ```css
     * {
     *   padding-right: 128px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box pr32></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    pr32?: ResponsiveBoolean
    /**
     * set padding-right to 144
     * ```css
     * {
     *   padding-right: 144px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box pr36></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    pr36?: ResponsiveBoolean
    /**
     * set padding-right to 160
     * ```css
     * {
     *   padding-right: 160px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box pr40></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    pr40?: ResponsiveBoolean
    /**
     * set padding-right to 176
     * ```css
     * {
     *   padding-right: 176px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box pr44></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    pr44?: ResponsiveBoolean
    /**
     * set padding-right to 192
     * ```css
     * {
     *   padding-right: 192px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box pr48></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    pr48?: ResponsiveBoolean
    /**
     * set padding-right to 208
     * ```css
     * {
     *   padding-right: 208px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box pr52></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    pr52?: ResponsiveBoolean
    /**
     * set padding-right to 224
     * ```css
     * {
     *   padding-right: 224px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box pr56></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    pr56?: ResponsiveBoolean
    /**
     * set padding-right to 240
     * ```css
     * {
     *   padding-right: 240px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box pr60></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    pr60?: ResponsiveBoolean
    /**
     * set padding-right to 256
     * ```css
     * {
     *   padding-right: 256px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box pr64></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    pr64?: ResponsiveBoolean
    /**
     * set padding-right to 288
     * ```css
     * {
     *   padding-right: 288px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box pr72></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    pr72?: ResponsiveBoolean
    /**
     * set padding-right to 320
     * ```css
     * {
     *   padding-right: 320px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box pr80></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    pr80?: ResponsiveBoolean
    /**
     * set padding-right to 384
     * ```css
     * {
     *   padding-right: 384px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box pr96></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    pr96?: ResponsiveBoolean
    /**
     * set padding-bottom to some value
     * ```css
     * {
     *   padding-bottom: $value;
     * }
     * ```
     * @example
     * ```tsx
     * <Box pb-8></Box>
     * <Box pb-1rem></Box>
     * <Box pb-4px></Box>
     * <Box pb={8}></Box>
     * <Box pb={a + b}></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    pb?: ResponsiveValue<string | number>
    /**
     * set padding-bottom to 0
     * ```css
     * {
     *   padding-bottom: 0px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box pb0></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    pb0?: ResponsiveBoolean
    /**
     * set padding-bottom to 4
     * ```css
     * {
     *   padding-bottom: 4px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box pb1></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    pb1?: ResponsiveBoolean
    /**
     * set padding-bottom to 8
     * ```css
     * {
     *   padding-bottom: 8px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box pb2></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    pb2?: ResponsiveBoolean
    /**
     * set padding-bottom to 12
     * ```css
     * {
     *   padding-bottom: 12px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box pb3></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    pb3?: ResponsiveBoolean
    /**
     * set padding-bottom to 16
     * ```css
     * {
     *   padding-bottom: 16px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box pb4></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    pb4?: ResponsiveBoolean
    /**
     * set padding-bottom to 20
     * ```css
     * {
     *   padding-bottom: 20px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box pb5></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    pb5?: ResponsiveBoolean
    /**
     * set padding-bottom to 24
     * ```css
     * {
     *   padding-bottom: 24px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box pb6></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    pb6?: ResponsiveBoolean
    /**
     * set padding-bottom to 28
     * ```css
     * {
     *   padding-bottom: 28px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box pb7></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    pb7?: ResponsiveBoolean
    /**
     * set padding-bottom to 32
     * ```css
     * {
     *   padding-bottom: 32px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box pb8></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    pb8?: ResponsiveBoolean
    /**
     * set padding-bottom to 36
     * ```css
     * {
     *   padding-bottom: 36px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box pb9></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    pb9?: ResponsiveBoolean
    /**
     * set padding-bottom to 40
     * ```css
     * {
     *   padding-bottom: 40px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box pb10></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    pb10?: ResponsiveBoolean
    /**
     * set padding-bottom to 44
     * ```css
     * {
     *   padding-bottom: 44px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box pb11></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    pb11?: ResponsiveBoolean
    /**
     * set padding-bottom to 48
     * ```css
     * {
     *   padding-bottom: 48px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box pb12></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    pb12?: ResponsiveBoolean
    /**
     * set padding-bottom to 56
     * ```css
     * {
     *   padding-bottom: 56px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box pb14></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    pb14?: ResponsiveBoolean
    /**
     * set padding-bottom to 64
     * ```css
     * {
     *   padding-bottom: 64px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box pb16></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    pb16?: ResponsiveBoolean
    /**
     * set padding-bottom to 80
     * ```css
     * {
     *   padding-bottom: 80px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box pb20></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    pb20?: ResponsiveBoolean
    /**
     * set padding-bottom to 96
     * ```css
     * {
     *   padding-bottom: 96px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box pb24></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    pb24?: ResponsiveBoolean
    /**
     * set padding-bottom to 112
     * ```css
     * {
     *   padding-bottom: 112px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box pb28></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    pb28?: ResponsiveBoolean
    /**
     * set padding-bottom to 128
     * ```css
     * {
     *   padding-bottom: 128px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box pb32></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    pb32?: ResponsiveBoolean
    /**
     * set padding-bottom to 144
     * ```css
     * {
     *   padding-bottom: 144px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box pb36></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    pb36?: ResponsiveBoolean
    /**
     * set padding-bottom to 160
     * ```css
     * {
     *   padding-bottom: 160px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box pb40></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    pb40?: ResponsiveBoolean
    /**
     * set padding-bottom to 176
     * ```css
     * {
     *   padding-bottom: 176px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box pb44></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    pb44?: ResponsiveBoolean
    /**
     * set padding-bottom to 192
     * ```css
     * {
     *   padding-bottom: 192px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box pb48></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    pb48?: ResponsiveBoolean
    /**
     * set padding-bottom to 208
     * ```css
     * {
     *   padding-bottom: 208px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box pb52></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    pb52?: ResponsiveBoolean
    /**
     * set padding-bottom to 224
     * ```css
     * {
     *   padding-bottom: 224px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box pb56></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    pb56?: ResponsiveBoolean
    /**
     * set padding-bottom to 240
     * ```css
     * {
     *   padding-bottom: 240px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box pb60></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    pb60?: ResponsiveBoolean
    /**
     * set padding-bottom to 256
     * ```css
     * {
     *   padding-bottom: 256px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box pb64></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    pb64?: ResponsiveBoolean
    /**
     * set padding-bottom to 288
     * ```css
     * {
     *   padding-bottom: 288px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box pb72></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    pb72?: ResponsiveBoolean
    /**
     * set padding-bottom to 320
     * ```css
     * {
     *   padding-bottom: 320px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box pb80></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    pb80?: ResponsiveBoolean
    /**
     * set padding-bottom to 384
     * ```css
     * {
     *   padding-bottom: 384px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box pb96></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    pb96?: ResponsiveBoolean
    /**
     * set padding-left to some value
     * ```css
     * {
     *   padding-left: $value;
     * }
     * ```
     * @example
     * ```tsx
     * <Box pl-8></Box>
     * <Box pl-1rem></Box>
     * <Box pl-4px></Box>
     * <Box pl={8}></Box>
     * <Box pl={a + b}></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    pl?: ResponsiveValue<string | number>
    /**
     * set padding-left to 0
     * ```css
     * {
     *   padding-left: 0px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box pl0></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    pl0?: ResponsiveBoolean
    /**
     * set padding-left to 4
     * ```css
     * {
     *   padding-left: 4px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box pl1></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    pl1?: ResponsiveBoolean
    /**
     * set padding-left to 8
     * ```css
     * {
     *   padding-left: 8px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box pl2></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    pl2?: ResponsiveBoolean
    /**
     * set padding-left to 12
     * ```css
     * {
     *   padding-left: 12px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box pl3></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    pl3?: ResponsiveBoolean
    /**
     * set padding-left to 16
     * ```css
     * {
     *   padding-left: 16px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box pl4></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    pl4?: ResponsiveBoolean
    /**
     * set padding-left to 20
     * ```css
     * {
     *   padding-left: 20px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box pl5></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    pl5?: ResponsiveBoolean
    /**
     * set padding-left to 24
     * ```css
     * {
     *   padding-left: 24px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box pl6></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    pl6?: ResponsiveBoolean
    /**
     * set padding-left to 28
     * ```css
     * {
     *   padding-left: 28px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box pl7></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    pl7?: ResponsiveBoolean
    /**
     * set padding-left to 32
     * ```css
     * {
     *   padding-left: 32px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box pl8></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    pl8?: ResponsiveBoolean
    /**
     * set padding-left to 36
     * ```css
     * {
     *   padding-left: 36px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box pl9></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    pl9?: ResponsiveBoolean
    /**
     * set padding-left to 40
     * ```css
     * {
     *   padding-left: 40px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box pl10></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    pl10?: ResponsiveBoolean
    /**
     * set padding-left to 44
     * ```css
     * {
     *   padding-left: 44px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box pl11></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    pl11?: ResponsiveBoolean
    /**
     * set padding-left to 48
     * ```css
     * {
     *   padding-left: 48px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box pl12></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    pl12?: ResponsiveBoolean
    /**
     * set padding-left to 56
     * ```css
     * {
     *   padding-left: 56px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box pl14></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    pl14?: ResponsiveBoolean
    /**
     * set padding-left to 64
     * ```css
     * {
     *   padding-left: 64px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box pl16></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    pl16?: ResponsiveBoolean
    /**
     * set padding-left to 80
     * ```css
     * {
     *   padding-left: 80px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box pl20></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    pl20?: ResponsiveBoolean
    /**
     * set padding-left to 96
     * ```css
     * {
     *   padding-left: 96px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box pl24></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    pl24?: ResponsiveBoolean
    /**
     * set padding-left to 112
     * ```css
     * {
     *   padding-left: 112px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box pl28></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    pl28?: ResponsiveBoolean
    /**
     * set padding-left to 128
     * ```css
     * {
     *   padding-left: 128px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box pl32></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    pl32?: ResponsiveBoolean
    /**
     * set padding-left to 144
     * ```css
     * {
     *   padding-left: 144px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box pl36></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    pl36?: ResponsiveBoolean
    /**
     * set padding-left to 160
     * ```css
     * {
     *   padding-left: 160px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box pl40></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    pl40?: ResponsiveBoolean
    /**
     * set padding-left to 176
     * ```css
     * {
     *   padding-left: 176px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box pl44></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    pl44?: ResponsiveBoolean
    /**
     * set padding-left to 192
     * ```css
     * {
     *   padding-left: 192px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box pl48></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    pl48?: ResponsiveBoolean
    /**
     * set padding-left to 208
     * ```css
     * {
     *   padding-left: 208px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box pl52></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    pl52?: ResponsiveBoolean
    /**
     * set padding-left to 224
     * ```css
     * {
     *   padding-left: 224px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box pl56></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    pl56?: ResponsiveBoolean
    /**
     * set padding-left to 240
     * ```css
     * {
     *   padding-left: 240px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box pl60></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    pl60?: ResponsiveBoolean
    /**
     * set padding-left to 256
     * ```css
     * {
     *   padding-left: 256px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box pl64></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    pl64?: ResponsiveBoolean
    /**
     * set padding-left to 288
     * ```css
     * {
     *   padding-left: 288px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box pl72></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    pl72?: ResponsiveBoolean
    /**
     * set padding-left to 320
     * ```css
     * {
     *   padding-left: 320px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box pl80></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    pl80?: ResponsiveBoolean
    /**
     * set padding-left to 384
     * ```css
     * {
     *   padding-left: 384px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box pl96></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    pl96?: ResponsiveBoolean
  }
}
