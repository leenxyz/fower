import { FowerPlugin, ResponsiveValue, ResponsiveBoolean } from "@fower/core"
declare const _default: () => FowerPlugin
export default _default

declare module '@fower/atomic-props' {
  export interface AtomicProps {
    /**
     * set width to some value
     * ```css
     * {
     *   width: $value;
     * }
     * ```
     * @example
     * ```tsx
     * <Box w-8></Box>
     * <Box w-1rem></Box>
     * <Box w-4px></Box>
     * <Box w={8}></Box>
     * <Box w={a + b}></Box>
     * ```
     */
    w?: ResponsiveValue<string | number>
    /**
     * set width to 0
     * ```css
     * {
     *   width: 0px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box w0></Box>
     * ```
     */
    w0?: ResponsiveBoolean
    /**
     * set width to 4
     * ```css
     * {
     *   width: 4px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box w1></Box>
     * ```
     */
    w1?: ResponsiveBoolean
    /**
     * set width to 8
     * ```css
     * {
     *   width: 8px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box w2></Box>
     * ```
     */
    w2?: ResponsiveBoolean
    /**
     * set width to 12
     * ```css
     * {
     *   width: 12px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box w3></Box>
     * ```
     */
    w3?: ResponsiveBoolean
    /**
     * set width to 16
     * ```css
     * {
     *   width: 16px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box w4></Box>
     * ```
     */
    w4?: ResponsiveBoolean
    /**
     * set width to 20
     * ```css
     * {
     *   width: 20px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box w5></Box>
     * ```
     */
    w5?: ResponsiveBoolean
    /**
     * set width to 24
     * ```css
     * {
     *   width: 24px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box w6></Box>
     * ```
     */
    w6?: ResponsiveBoolean
    /**
     * set width to 28
     * ```css
     * {
     *   width: 28px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box w7></Box>
     * ```
     */
    w7?: ResponsiveBoolean
    /**
     * set width to 32
     * ```css
     * {
     *   width: 32px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box w8></Box>
     * ```
     */
    w8?: ResponsiveBoolean
    /**
     * set width to 36
     * ```css
     * {
     *   width: 36px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box w9></Box>
     * ```
     */
    w9?: ResponsiveBoolean
    /**
     * set width to 40
     * ```css
     * {
     *   width: 40px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box w10></Box>
     * ```
     */
    w10?: ResponsiveBoolean
    /**
     * set width to 44
     * ```css
     * {
     *   width: 44px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box w11></Box>
     * ```
     */
    w11?: ResponsiveBoolean
    /**
     * set width to 48
     * ```css
     * {
     *   width: 48px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box w12></Box>
     * ```
     */
    w12?: ResponsiveBoolean
    /**
     * set width to 56
     * ```css
     * {
     *   width: 56px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box w14></Box>
     * ```
     */
    w14?: ResponsiveBoolean
    /**
     * set width to 64
     * ```css
     * {
     *   width: 64px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box w16></Box>
     * ```
     */
    w16?: ResponsiveBoolean
    /**
     * set width to 80
     * ```css
     * {
     *   width: 80px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box w20></Box>
     * ```
     */
    w20?: ResponsiveBoolean
    /**
     * set width to 96
     * ```css
     * {
     *   width: 96px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box w24></Box>
     * ```
     */
    w24?: ResponsiveBoolean
    /**
     * set width to 112
     * ```css
     * {
     *   width: 112px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box w28></Box>
     * ```
     */
    w28?: ResponsiveBoolean
    /**
     * set width to 128
     * ```css
     * {
     *   width: 128px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box w32></Box>
     * ```
     */
    w32?: ResponsiveBoolean
    /**
     * set width to 144
     * ```css
     * {
     *   width: 144px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box w36></Box>
     * ```
     */
    w36?: ResponsiveBoolean
    /**
     * set width to 160
     * ```css
     * {
     *   width: 160px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box w40></Box>
     * ```
     */
    w40?: ResponsiveBoolean
    /**
     * set width to 176
     * ```css
     * {
     *   width: 176px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box w44></Box>
     * ```
     */
    w44?: ResponsiveBoolean
    /**
     * set width to 192
     * ```css
     * {
     *   width: 192px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box w48></Box>
     * ```
     */
    w48?: ResponsiveBoolean
    /**
     * set width to 208
     * ```css
     * {
     *   width: 208px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box w52></Box>
     * ```
     */
    w52?: ResponsiveBoolean
    /**
     * set width to 224
     * ```css
     * {
     *   width: 224px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box w56></Box>
     * ```
     */
    w56?: ResponsiveBoolean
    /**
     * set width to 240
     * ```css
     * {
     *   width: 240px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box w60></Box>
     * ```
     */
    w60?: ResponsiveBoolean
    /**
     * set width to 256
     * ```css
     * {
     *   width: 256px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box w64></Box>
     * ```
     */
    w64?: ResponsiveBoolean
    /**
     * set width to 288
     * ```css
     * {
     *   width: 288px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box w72></Box>
     * ```
     */
    w72?: ResponsiveBoolean
    /**
     * set width to 320
     * ```css
     * {
     *   width: 320px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box w80></Box>
     * ```
     */
    w80?: ResponsiveBoolean
    /**
     * set width to 384
     * ```css
     * {
     *   width: 384px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box w96></Box>
     * ```
     */
    w96?: ResponsiveBoolean
    /**
     * set height to some value
     * ```css
     * {
     *   height: $value;
     * }
     * ```
     * @example
     * ```tsx
     * <Box h-8></Box>
     * <Box h-1rem></Box>
     * <Box h-4px></Box>
     * <Box h={8}></Box>
     * <Box h={a + b}></Box>
     * ```
     */
    h?: ResponsiveValue<string | number>
    /**
     * set height to 0
     * ```css
     * {
     *   height: 0px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box h0></Box>
     * ```
     */
    h0?: ResponsiveBoolean
    /**
     * set height to 4
     * ```css
     * {
     *   height: 4px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box h1></Box>
     * ```
     */
    h1?: ResponsiveBoolean
    /**
     * set height to 8
     * ```css
     * {
     *   height: 8px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box h2></Box>
     * ```
     */
    h2?: ResponsiveBoolean
    /**
     * set height to 12
     * ```css
     * {
     *   height: 12px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box h3></Box>
     * ```
     */
    h3?: ResponsiveBoolean
    /**
     * set height to 16
     * ```css
     * {
     *   height: 16px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box h4></Box>
     * ```
     */
    h4?: ResponsiveBoolean
    /**
     * set height to 20
     * ```css
     * {
     *   height: 20px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box h5></Box>
     * ```
     */
    h5?: ResponsiveBoolean
    /**
     * set height to 24
     * ```css
     * {
     *   height: 24px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box h6></Box>
     * ```
     */
    h6?: ResponsiveBoolean
    /**
     * set height to 28
     * ```css
     * {
     *   height: 28px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box h7></Box>
     * ```
     */
    h7?: ResponsiveBoolean
    /**
     * set height to 32
     * ```css
     * {
     *   height: 32px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box h8></Box>
     * ```
     */
    h8?: ResponsiveBoolean
    /**
     * set height to 36
     * ```css
     * {
     *   height: 36px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box h9></Box>
     * ```
     */
    h9?: ResponsiveBoolean
    /**
     * set height to 40
     * ```css
     * {
     *   height: 40px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box h10></Box>
     * ```
     */
    h10?: ResponsiveBoolean
    /**
     * set height to 44
     * ```css
     * {
     *   height: 44px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box h11></Box>
     * ```
     */
    h11?: ResponsiveBoolean
    /**
     * set height to 48
     * ```css
     * {
     *   height: 48px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box h12></Box>
     * ```
     */
    h12?: ResponsiveBoolean
    /**
     * set height to 56
     * ```css
     * {
     *   height: 56px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box h14></Box>
     * ```
     */
    h14?: ResponsiveBoolean
    /**
     * set height to 64
     * ```css
     * {
     *   height: 64px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box h16></Box>
     * ```
     */
    h16?: ResponsiveBoolean
    /**
     * set height to 80
     * ```css
     * {
     *   height: 80px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box h20></Box>
     * ```
     */
    h20?: ResponsiveBoolean
    /**
     * set height to 96
     * ```css
     * {
     *   height: 96px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box h24></Box>
     * ```
     */
    h24?: ResponsiveBoolean
    /**
     * set height to 112
     * ```css
     * {
     *   height: 112px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box h28></Box>
     * ```
     */
    h28?: ResponsiveBoolean
    /**
     * set height to 128
     * ```css
     * {
     *   height: 128px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box h32></Box>
     * ```
     */
    h32?: ResponsiveBoolean
    /**
     * set height to 144
     * ```css
     * {
     *   height: 144px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box h36></Box>
     * ```
     */
    h36?: ResponsiveBoolean
    /**
     * set height to 160
     * ```css
     * {
     *   height: 160px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box h40></Box>
     * ```
     */
    h40?: ResponsiveBoolean
    /**
     * set height to 176
     * ```css
     * {
     *   height: 176px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box h44></Box>
     * ```
     */
    h44?: ResponsiveBoolean
    /**
     * set height to 192
     * ```css
     * {
     *   height: 192px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box h48></Box>
     * ```
     */
    h48?: ResponsiveBoolean
    /**
     * set height to 208
     * ```css
     * {
     *   height: 208px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box h52></Box>
     * ```
     */
    h52?: ResponsiveBoolean
    /**
     * set height to 224
     * ```css
     * {
     *   height: 224px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box h56></Box>
     * ```
     */
    h56?: ResponsiveBoolean
    /**
     * set height to 240
     * ```css
     * {
     *   height: 240px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box h60></Box>
     * ```
     */
    h60?: ResponsiveBoolean
    /**
     * set height to 256
     * ```css
     * {
     *   height: 256px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box h64></Box>
     * ```
     */
    h64?: ResponsiveBoolean
    /**
     * set height to 288
     * ```css
     * {
     *   height: 288px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box h72></Box>
     * ```
     */
    h72?: ResponsiveBoolean
    /**
     * set height to 320
     * ```css
     * {
     *   height: 320px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box h80></Box>
     * ```
     */
    h80?: ResponsiveBoolean
    /**
     * set height to 384
     * ```css
     * {
     *   height: 384px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box h96></Box>
     * ```
     */
    h96?: ResponsiveBoolean
    /**
     * set max-height to some value
     * ```css
     * {
     *   max-height: $value;
     * }
     * ```
     * @example
     * ```tsx
     * <Box maxH-8></Box>
     * <Box maxH-1rem></Box>
     * <Box maxH-4px></Box>
     * <Box maxH={8}></Box>
     * <Box maxH={a + b}></Box>
     * ```
     */
    maxH?: ResponsiveValue<string | number>
    /**
     * set max-height to 0
     * ```css
     * {
     *   max-height: 0px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box maxH0></Box>
     * ```
     */
    maxH0?: ResponsiveBoolean
    /**
     * set max-height to 4
     * ```css
     * {
     *   max-height: 4px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box maxH1></Box>
     * ```
     */
    maxH1?: ResponsiveBoolean
    /**
     * set max-height to 8
     * ```css
     * {
     *   max-height: 8px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box maxH2></Box>
     * ```
     */
    maxH2?: ResponsiveBoolean
    /**
     * set max-height to 12
     * ```css
     * {
     *   max-height: 12px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box maxH3></Box>
     * ```
     */
    maxH3?: ResponsiveBoolean
    /**
     * set max-height to 16
     * ```css
     * {
     *   max-height: 16px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box maxH4></Box>
     * ```
     */
    maxH4?: ResponsiveBoolean
    /**
     * set max-height to 20
     * ```css
     * {
     *   max-height: 20px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box maxH5></Box>
     * ```
     */
    maxH5?: ResponsiveBoolean
    /**
     * set max-height to 24
     * ```css
     * {
     *   max-height: 24px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box maxH6></Box>
     * ```
     */
    maxH6?: ResponsiveBoolean
    /**
     * set max-height to 28
     * ```css
     * {
     *   max-height: 28px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box maxH7></Box>
     * ```
     */
    maxH7?: ResponsiveBoolean
    /**
     * set max-height to 32
     * ```css
     * {
     *   max-height: 32px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box maxH8></Box>
     * ```
     */
    maxH8?: ResponsiveBoolean
    /**
     * set max-height to 36
     * ```css
     * {
     *   max-height: 36px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box maxH9></Box>
     * ```
     */
    maxH9?: ResponsiveBoolean
    /**
     * set max-height to 40
     * ```css
     * {
     *   max-height: 40px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box maxH10></Box>
     * ```
     */
    maxH10?: ResponsiveBoolean
    /**
     * set max-height to 44
     * ```css
     * {
     *   max-height: 44px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box maxH11></Box>
     * ```
     */
    maxH11?: ResponsiveBoolean
    /**
     * set max-height to 48
     * ```css
     * {
     *   max-height: 48px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box maxH12></Box>
     * ```
     */
    maxH12?: ResponsiveBoolean
    /**
     * set max-height to 56
     * ```css
     * {
     *   max-height: 56px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box maxH14></Box>
     * ```
     */
    maxH14?: ResponsiveBoolean
    /**
     * set max-height to 64
     * ```css
     * {
     *   max-height: 64px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box maxH16></Box>
     * ```
     */
    maxH16?: ResponsiveBoolean
    /**
     * set max-height to 80
     * ```css
     * {
     *   max-height: 80px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box maxH20></Box>
     * ```
     */
    maxH20?: ResponsiveBoolean
    /**
     * set max-height to 96
     * ```css
     * {
     *   max-height: 96px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box maxH24></Box>
     * ```
     */
    maxH24?: ResponsiveBoolean
    /**
     * set max-height to 112
     * ```css
     * {
     *   max-height: 112px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box maxH28></Box>
     * ```
     */
    maxH28?: ResponsiveBoolean
    /**
     * set max-height to 128
     * ```css
     * {
     *   max-height: 128px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box maxH32></Box>
     * ```
     */
    maxH32?: ResponsiveBoolean
    /**
     * set max-height to 144
     * ```css
     * {
     *   max-height: 144px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box maxH36></Box>
     * ```
     */
    maxH36?: ResponsiveBoolean
    /**
     * set max-height to 160
     * ```css
     * {
     *   max-height: 160px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box maxH40></Box>
     * ```
     */
    maxH40?: ResponsiveBoolean
    /**
     * set max-height to 176
     * ```css
     * {
     *   max-height: 176px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box maxH44></Box>
     * ```
     */
    maxH44?: ResponsiveBoolean
    /**
     * set max-height to 192
     * ```css
     * {
     *   max-height: 192px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box maxH48></Box>
     * ```
     */
    maxH48?: ResponsiveBoolean
    /**
     * set max-height to 208
     * ```css
     * {
     *   max-height: 208px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box maxH52></Box>
     * ```
     */
    maxH52?: ResponsiveBoolean
    /**
     * set max-height to 224
     * ```css
     * {
     *   max-height: 224px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box maxH56></Box>
     * ```
     */
    maxH56?: ResponsiveBoolean
    /**
     * set max-height to 240
     * ```css
     * {
     *   max-height: 240px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box maxH60></Box>
     * ```
     */
    maxH60?: ResponsiveBoolean
    /**
     * set max-height to 256
     * ```css
     * {
     *   max-height: 256px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box maxH64></Box>
     * ```
     */
    maxH64?: ResponsiveBoolean
    /**
     * set max-height to 288
     * ```css
     * {
     *   max-height: 288px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box maxH72></Box>
     * ```
     */
    maxH72?: ResponsiveBoolean
    /**
     * set max-height to 320
     * ```css
     * {
     *   max-height: 320px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box maxH80></Box>
     * ```
     */
    maxH80?: ResponsiveBoolean
    /**
     * set max-height to 384
     * ```css
     * {
     *   max-height: 384px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box maxH96></Box>
     * ```
     */
    maxH96?: ResponsiveBoolean
    /**
     * set max-width to some value
     * ```css
     * {
     *   max-width: $value;
     * }
     * ```
     * @example
     * ```tsx
     * <Box maxW-8></Box>
     * <Box maxW-1rem></Box>
     * <Box maxW-4px></Box>
     * <Box maxW={8}></Box>
     * <Box maxW={a + b}></Box>
     * ```
     */
    maxW?: ResponsiveValue<string | number>
    /**
     * set max-width to 0
     * ```css
     * {
     *   max-width: 0px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box maxW0></Box>
     * ```
     */
    maxW0?: ResponsiveBoolean
    /**
     * set max-width to 4
     * ```css
     * {
     *   max-width: 4px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box maxW1></Box>
     * ```
     */
    maxW1?: ResponsiveBoolean
    /**
     * set max-width to 8
     * ```css
     * {
     *   max-width: 8px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box maxW2></Box>
     * ```
     */
    maxW2?: ResponsiveBoolean
    /**
     * set max-width to 12
     * ```css
     * {
     *   max-width: 12px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box maxW3></Box>
     * ```
     */
    maxW3?: ResponsiveBoolean
    /**
     * set max-width to 16
     * ```css
     * {
     *   max-width: 16px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box maxW4></Box>
     * ```
     */
    maxW4?: ResponsiveBoolean
    /**
     * set max-width to 20
     * ```css
     * {
     *   max-width: 20px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box maxW5></Box>
     * ```
     */
    maxW5?: ResponsiveBoolean
    /**
     * set max-width to 24
     * ```css
     * {
     *   max-width: 24px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box maxW6></Box>
     * ```
     */
    maxW6?: ResponsiveBoolean
    /**
     * set max-width to 28
     * ```css
     * {
     *   max-width: 28px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box maxW7></Box>
     * ```
     */
    maxW7?: ResponsiveBoolean
    /**
     * set max-width to 32
     * ```css
     * {
     *   max-width: 32px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box maxW8></Box>
     * ```
     */
    maxW8?: ResponsiveBoolean
    /**
     * set max-width to 36
     * ```css
     * {
     *   max-width: 36px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box maxW9></Box>
     * ```
     */
    maxW9?: ResponsiveBoolean
    /**
     * set max-width to 40
     * ```css
     * {
     *   max-width: 40px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box maxW10></Box>
     * ```
     */
    maxW10?: ResponsiveBoolean
    /**
     * set max-width to 44
     * ```css
     * {
     *   max-width: 44px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box maxW11></Box>
     * ```
     */
    maxW11?: ResponsiveBoolean
    /**
     * set max-width to 48
     * ```css
     * {
     *   max-width: 48px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box maxW12></Box>
     * ```
     */
    maxW12?: ResponsiveBoolean
    /**
     * set max-width to 56
     * ```css
     * {
     *   max-width: 56px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box maxW14></Box>
     * ```
     */
    maxW14?: ResponsiveBoolean
    /**
     * set max-width to 64
     * ```css
     * {
     *   max-width: 64px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box maxW16></Box>
     * ```
     */
    maxW16?: ResponsiveBoolean
    /**
     * set max-width to 80
     * ```css
     * {
     *   max-width: 80px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box maxW20></Box>
     * ```
     */
    maxW20?: ResponsiveBoolean
    /**
     * set max-width to 96
     * ```css
     * {
     *   max-width: 96px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box maxW24></Box>
     * ```
     */
    maxW24?: ResponsiveBoolean
    /**
     * set max-width to 112
     * ```css
     * {
     *   max-width: 112px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box maxW28></Box>
     * ```
     */
    maxW28?: ResponsiveBoolean
    /**
     * set max-width to 128
     * ```css
     * {
     *   max-width: 128px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box maxW32></Box>
     * ```
     */
    maxW32?: ResponsiveBoolean
    /**
     * set max-width to 144
     * ```css
     * {
     *   max-width: 144px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box maxW36></Box>
     * ```
     */
    maxW36?: ResponsiveBoolean
    /**
     * set max-width to 160
     * ```css
     * {
     *   max-width: 160px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box maxW40></Box>
     * ```
     */
    maxW40?: ResponsiveBoolean
    /**
     * set max-width to 176
     * ```css
     * {
     *   max-width: 176px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box maxW44></Box>
     * ```
     */
    maxW44?: ResponsiveBoolean
    /**
     * set max-width to 192
     * ```css
     * {
     *   max-width: 192px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box maxW48></Box>
     * ```
     */
    maxW48?: ResponsiveBoolean
    /**
     * set max-width to 208
     * ```css
     * {
     *   max-width: 208px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box maxW52></Box>
     * ```
     */
    maxW52?: ResponsiveBoolean
    /**
     * set max-width to 224
     * ```css
     * {
     *   max-width: 224px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box maxW56></Box>
     * ```
     */
    maxW56?: ResponsiveBoolean
    /**
     * set max-width to 240
     * ```css
     * {
     *   max-width: 240px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box maxW60></Box>
     * ```
     */
    maxW60?: ResponsiveBoolean
    /**
     * set max-width to 256
     * ```css
     * {
     *   max-width: 256px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box maxW64></Box>
     * ```
     */
    maxW64?: ResponsiveBoolean
    /**
     * set max-width to 288
     * ```css
     * {
     *   max-width: 288px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box maxW72></Box>
     * ```
     */
    maxW72?: ResponsiveBoolean
    /**
     * set max-width to 320
     * ```css
     * {
     *   max-width: 320px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box maxW80></Box>
     * ```
     */
    maxW80?: ResponsiveBoolean
    /**
     * set max-width to 384
     * ```css
     * {
     *   max-width: 384px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box maxW96></Box>
     * ```
     */
    maxW96?: ResponsiveBoolean
    /**
     * set min-height to some value
     * ```css
     * {
     *   min-height: $value;
     * }
     * ```
     * @example
     * ```tsx
     * <Box minH-8></Box>
     * <Box minH-1rem></Box>
     * <Box minH-4px></Box>
     * <Box minH={8}></Box>
     * <Box minH={a + b}></Box>
     * ```
     */
    minH?: ResponsiveValue<string | number>
    /**
     * set min-height to 0
     * ```css
     * {
     *   min-height: 0px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box minH0></Box>
     * ```
     */
    minH0?: ResponsiveBoolean
    /**
     * set min-height to 4
     * ```css
     * {
     *   min-height: 4px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box minH1></Box>
     * ```
     */
    minH1?: ResponsiveBoolean
    /**
     * set min-height to 8
     * ```css
     * {
     *   min-height: 8px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box minH2></Box>
     * ```
     */
    minH2?: ResponsiveBoolean
    /**
     * set min-height to 12
     * ```css
     * {
     *   min-height: 12px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box minH3></Box>
     * ```
     */
    minH3?: ResponsiveBoolean
    /**
     * set min-height to 16
     * ```css
     * {
     *   min-height: 16px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box minH4></Box>
     * ```
     */
    minH4?: ResponsiveBoolean
    /**
     * set min-height to 20
     * ```css
     * {
     *   min-height: 20px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box minH5></Box>
     * ```
     */
    minH5?: ResponsiveBoolean
    /**
     * set min-height to 24
     * ```css
     * {
     *   min-height: 24px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box minH6></Box>
     * ```
     */
    minH6?: ResponsiveBoolean
    /**
     * set min-height to 28
     * ```css
     * {
     *   min-height: 28px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box minH7></Box>
     * ```
     */
    minH7?: ResponsiveBoolean
    /**
     * set min-height to 32
     * ```css
     * {
     *   min-height: 32px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box minH8></Box>
     * ```
     */
    minH8?: ResponsiveBoolean
    /**
     * set min-height to 36
     * ```css
     * {
     *   min-height: 36px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box minH9></Box>
     * ```
     */
    minH9?: ResponsiveBoolean
    /**
     * set min-height to 40
     * ```css
     * {
     *   min-height: 40px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box minH10></Box>
     * ```
     */
    minH10?: ResponsiveBoolean
    /**
     * set min-height to 44
     * ```css
     * {
     *   min-height: 44px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box minH11></Box>
     * ```
     */
    minH11?: ResponsiveBoolean
    /**
     * set min-height to 48
     * ```css
     * {
     *   min-height: 48px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box minH12></Box>
     * ```
     */
    minH12?: ResponsiveBoolean
    /**
     * set min-height to 56
     * ```css
     * {
     *   min-height: 56px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box minH14></Box>
     * ```
     */
    minH14?: ResponsiveBoolean
    /**
     * set min-height to 64
     * ```css
     * {
     *   min-height: 64px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box minH16></Box>
     * ```
     */
    minH16?: ResponsiveBoolean
    /**
     * set min-height to 80
     * ```css
     * {
     *   min-height: 80px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box minH20></Box>
     * ```
     */
    minH20?: ResponsiveBoolean
    /**
     * set min-height to 96
     * ```css
     * {
     *   min-height: 96px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box minH24></Box>
     * ```
     */
    minH24?: ResponsiveBoolean
    /**
     * set min-height to 112
     * ```css
     * {
     *   min-height: 112px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box minH28></Box>
     * ```
     */
    minH28?: ResponsiveBoolean
    /**
     * set min-height to 128
     * ```css
     * {
     *   min-height: 128px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box minH32></Box>
     * ```
     */
    minH32?: ResponsiveBoolean
    /**
     * set min-height to 144
     * ```css
     * {
     *   min-height: 144px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box minH36></Box>
     * ```
     */
    minH36?: ResponsiveBoolean
    /**
     * set min-height to 160
     * ```css
     * {
     *   min-height: 160px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box minH40></Box>
     * ```
     */
    minH40?: ResponsiveBoolean
    /**
     * set min-height to 176
     * ```css
     * {
     *   min-height: 176px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box minH44></Box>
     * ```
     */
    minH44?: ResponsiveBoolean
    /**
     * set min-height to 192
     * ```css
     * {
     *   min-height: 192px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box minH48></Box>
     * ```
     */
    minH48?: ResponsiveBoolean
    /**
     * set min-height to 208
     * ```css
     * {
     *   min-height: 208px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box minH52></Box>
     * ```
     */
    minH52?: ResponsiveBoolean
    /**
     * set min-height to 224
     * ```css
     * {
     *   min-height: 224px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box minH56></Box>
     * ```
     */
    minH56?: ResponsiveBoolean
    /**
     * set min-height to 240
     * ```css
     * {
     *   min-height: 240px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box minH60></Box>
     * ```
     */
    minH60?: ResponsiveBoolean
    /**
     * set min-height to 256
     * ```css
     * {
     *   min-height: 256px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box minH64></Box>
     * ```
     */
    minH64?: ResponsiveBoolean
    /**
     * set min-height to 288
     * ```css
     * {
     *   min-height: 288px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box minH72></Box>
     * ```
     */
    minH72?: ResponsiveBoolean
    /**
     * set min-height to 320
     * ```css
     * {
     *   min-height: 320px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box minH80></Box>
     * ```
     */
    minH80?: ResponsiveBoolean
    /**
     * set min-height to 384
     * ```css
     * {
     *   min-height: 384px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box minH96></Box>
     * ```
     */
    minH96?: ResponsiveBoolean
    /**
     * set min-width to some value
     * ```css
     * {
     *   min-width: $value;
     * }
     * ```
     * @example
     * ```tsx
     * <Box minW-8></Box>
     * <Box minW-1rem></Box>
     * <Box minW-4px></Box>
     * <Box minW={8}></Box>
     * <Box minW={a + b}></Box>
     * ```
     */
    minW?: ResponsiveValue<string | number>
    /**
     * set min-width to 0
     * ```css
     * {
     *   min-width: 0px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box minW0></Box>
     * ```
     */
    minW0?: ResponsiveBoolean
    /**
     * set min-width to 4
     * ```css
     * {
     *   min-width: 4px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box minW1></Box>
     * ```
     */
    minW1?: ResponsiveBoolean
    /**
     * set min-width to 8
     * ```css
     * {
     *   min-width: 8px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box minW2></Box>
     * ```
     */
    minW2?: ResponsiveBoolean
    /**
     * set min-width to 12
     * ```css
     * {
     *   min-width: 12px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box minW3></Box>
     * ```
     */
    minW3?: ResponsiveBoolean
    /**
     * set min-width to 16
     * ```css
     * {
     *   min-width: 16px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box minW4></Box>
     * ```
     */
    minW4?: ResponsiveBoolean
    /**
     * set min-width to 20
     * ```css
     * {
     *   min-width: 20px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box minW5></Box>
     * ```
     */
    minW5?: ResponsiveBoolean
    /**
     * set min-width to 24
     * ```css
     * {
     *   min-width: 24px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box minW6></Box>
     * ```
     */
    minW6?: ResponsiveBoolean
    /**
     * set min-width to 28
     * ```css
     * {
     *   min-width: 28px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box minW7></Box>
     * ```
     */
    minW7?: ResponsiveBoolean
    /**
     * set min-width to 32
     * ```css
     * {
     *   min-width: 32px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box minW8></Box>
     * ```
     */
    minW8?: ResponsiveBoolean
    /**
     * set min-width to 36
     * ```css
     * {
     *   min-width: 36px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box minW9></Box>
     * ```
     */
    minW9?: ResponsiveBoolean
    /**
     * set min-width to 40
     * ```css
     * {
     *   min-width: 40px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box minW10></Box>
     * ```
     */
    minW10?: ResponsiveBoolean
    /**
     * set min-width to 44
     * ```css
     * {
     *   min-width: 44px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box minW11></Box>
     * ```
     */
    minW11?: ResponsiveBoolean
    /**
     * set min-width to 48
     * ```css
     * {
     *   min-width: 48px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box minW12></Box>
     * ```
     */
    minW12?: ResponsiveBoolean
    /**
     * set min-width to 56
     * ```css
     * {
     *   min-width: 56px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box minW14></Box>
     * ```
     */
    minW14?: ResponsiveBoolean
    /**
     * set min-width to 64
     * ```css
     * {
     *   min-width: 64px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box minW16></Box>
     * ```
     */
    minW16?: ResponsiveBoolean
    /**
     * set min-width to 80
     * ```css
     * {
     *   min-width: 80px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box minW20></Box>
     * ```
     */
    minW20?: ResponsiveBoolean
    /**
     * set min-width to 96
     * ```css
     * {
     *   min-width: 96px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box minW24></Box>
     * ```
     */
    minW24?: ResponsiveBoolean
    /**
     * set min-width to 112
     * ```css
     * {
     *   min-width: 112px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box minW28></Box>
     * ```
     */
    minW28?: ResponsiveBoolean
    /**
     * set min-width to 128
     * ```css
     * {
     *   min-width: 128px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box minW32></Box>
     * ```
     */
    minW32?: ResponsiveBoolean
    /**
     * set min-width to 144
     * ```css
     * {
     *   min-width: 144px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box minW36></Box>
     * ```
     */
    minW36?: ResponsiveBoolean
    /**
     * set min-width to 160
     * ```css
     * {
     *   min-width: 160px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box minW40></Box>
     * ```
     */
    minW40?: ResponsiveBoolean
    /**
     * set min-width to 176
     * ```css
     * {
     *   min-width: 176px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box minW44></Box>
     * ```
     */
    minW44?: ResponsiveBoolean
    /**
     * set min-width to 192
     * ```css
     * {
     *   min-width: 192px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box minW48></Box>
     * ```
     */
    minW48?: ResponsiveBoolean
    /**
     * set min-width to 208
     * ```css
     * {
     *   min-width: 208px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box minW52></Box>
     * ```
     */
    minW52?: ResponsiveBoolean
    /**
     * set min-width to 224
     * ```css
     * {
     *   min-width: 224px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box minW56></Box>
     * ```
     */
    minW56?: ResponsiveBoolean
    /**
     * set min-width to 240
     * ```css
     * {
     *   min-width: 240px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box minW60></Box>
     * ```
     */
    minW60?: ResponsiveBoolean
    /**
     * set min-width to 256
     * ```css
     * {
     *   min-width: 256px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box minW64></Box>
     * ```
     */
    minW64?: ResponsiveBoolean
    /**
     * set min-width to 288
     * ```css
     * {
     *   min-width: 288px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box minW72></Box>
     * ```
     */
    minW72?: ResponsiveBoolean
    /**
     * set min-width to 320
     * ```css
     * {
     *   min-width: 320px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box minW80></Box>
     * ```
     */
    minW80?: ResponsiveBoolean
    /**
     * set min-width to 384
     * ```css
     * {
     *   min-width: 384px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box minW96></Box>
     * ```
     */
    minW96?: ResponsiveBoolean
    /**
     * set width height to some value
     * ```css
     * {
     *   width: $value;
     *   height: $value;
     * }
     * ```
     * @example
     * ```tsx
     * <Box square-8></Box>
     * <Box square-1rem></Box>
     * <Box square-4px></Box>
     * <Box square={8}></Box>
     * <Box square={a + b}></Box>
     * ```
     */
    square?: ResponsiveValue<string | number>
    /**
     * set width height to 0
     * ```css
     * {
     *   width: 0px;
     *   height: 0px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box square0></Box>
     * ```
     */
    square0?: ResponsiveBoolean
    /**
     * set width height to 4
     * ```css
     * {
     *   width: 4px;
     *   height: 4px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box square1></Box>
     * ```
     */
    square1?: ResponsiveBoolean
    /**
     * set width height to 8
     * ```css
     * {
     *   width: 8px;
     *   height: 8px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box square2></Box>
     * ```
     */
    square2?: ResponsiveBoolean
    /**
     * set width height to 12
     * ```css
     * {
     *   width: 12px;
     *   height: 12px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box square3></Box>
     * ```
     */
    square3?: ResponsiveBoolean
    /**
     * set width height to 16
     * ```css
     * {
     *   width: 16px;
     *   height: 16px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box square4></Box>
     * ```
     */
    square4?: ResponsiveBoolean
    /**
     * set width height to 20
     * ```css
     * {
     *   width: 20px;
     *   height: 20px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box square5></Box>
     * ```
     */
    square5?: ResponsiveBoolean
    /**
     * set width height to 24
     * ```css
     * {
     *   width: 24px;
     *   height: 24px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box square6></Box>
     * ```
     */
    square6?: ResponsiveBoolean
    /**
     * set width height to 28
     * ```css
     * {
     *   width: 28px;
     *   height: 28px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box square7></Box>
     * ```
     */
    square7?: ResponsiveBoolean
    /**
     * set width height to 32
     * ```css
     * {
     *   width: 32px;
     *   height: 32px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box square8></Box>
     * ```
     */
    square8?: ResponsiveBoolean
    /**
     * set width height to 36
     * ```css
     * {
     *   width: 36px;
     *   height: 36px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box square9></Box>
     * ```
     */
    square9?: ResponsiveBoolean
    /**
     * set width height to 40
     * ```css
     * {
     *   width: 40px;
     *   height: 40px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box square10></Box>
     * ```
     */
    square10?: ResponsiveBoolean
    /**
     * set width height to 44
     * ```css
     * {
     *   width: 44px;
     *   height: 44px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box square11></Box>
     * ```
     */
    square11?: ResponsiveBoolean
    /**
     * set width height to 48
     * ```css
     * {
     *   width: 48px;
     *   height: 48px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box square12></Box>
     * ```
     */
    square12?: ResponsiveBoolean
    /**
     * set width height to 56
     * ```css
     * {
     *   width: 56px;
     *   height: 56px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box square14></Box>
     * ```
     */
    square14?: ResponsiveBoolean
    /**
     * set width height to 64
     * ```css
     * {
     *   width: 64px;
     *   height: 64px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box square16></Box>
     * ```
     */
    square16?: ResponsiveBoolean
    /**
     * set width height to 80
     * ```css
     * {
     *   width: 80px;
     *   height: 80px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box square20></Box>
     * ```
     */
    square20?: ResponsiveBoolean
    /**
     * set width height to 96
     * ```css
     * {
     *   width: 96px;
     *   height: 96px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box square24></Box>
     * ```
     */
    square24?: ResponsiveBoolean
    /**
     * set width height to 112
     * ```css
     * {
     *   width: 112px;
     *   height: 112px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box square28></Box>
     * ```
     */
    square28?: ResponsiveBoolean
    /**
     * set width height to 128
     * ```css
     * {
     *   width: 128px;
     *   height: 128px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box square32></Box>
     * ```
     */
    square32?: ResponsiveBoolean
    /**
     * set width height to 144
     * ```css
     * {
     *   width: 144px;
     *   height: 144px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box square36></Box>
     * ```
     */
    square36?: ResponsiveBoolean
    /**
     * set width height to 160
     * ```css
     * {
     *   width: 160px;
     *   height: 160px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box square40></Box>
     * ```
     */
    square40?: ResponsiveBoolean
    /**
     * set width height to 176
     * ```css
     * {
     *   width: 176px;
     *   height: 176px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box square44></Box>
     * ```
     */
    square44?: ResponsiveBoolean
    /**
     * set width height to 192
     * ```css
     * {
     *   width: 192px;
     *   height: 192px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box square48></Box>
     * ```
     */
    square48?: ResponsiveBoolean
    /**
     * set width height to 208
     * ```css
     * {
     *   width: 208px;
     *   height: 208px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box square52></Box>
     * ```
     */
    square52?: ResponsiveBoolean
    /**
     * set width height to 224
     * ```css
     * {
     *   width: 224px;
     *   height: 224px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box square56></Box>
     * ```
     */
    square56?: ResponsiveBoolean
    /**
     * set width height to 240
     * ```css
     * {
     *   width: 240px;
     *   height: 240px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box square60></Box>
     * ```
     */
    square60?: ResponsiveBoolean
    /**
     * set width height to 256
     * ```css
     * {
     *   width: 256px;
     *   height: 256px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box square64></Box>
     * ```
     */
    square64?: ResponsiveBoolean
    /**
     * set width height to 288
     * ```css
     * {
     *   width: 288px;
     *   height: 288px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box square72></Box>
     * ```
     */
    square72?: ResponsiveBoolean
    /**
     * set width height to 320
     * ```css
     * {
     *   width: 320px;
     *   height: 320px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box square80></Box>
     * ```
     */
    square80?: ResponsiveBoolean
    /**
     * set width height to 384
     * ```css
     * {
     *   width: 384px;
     *   height: 384px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box square96></Box>
     * ```
     */
    square96?: ResponsiveBoolean
    /**
     * set width height border-radius to some value
     * ```css
     * {
     *   width: $value;
     *   height: $value;
     *   border-radius: $value;
     * }
     * ```
     * @example
     * ```tsx
     * <Box circle-8></Box>
     * <Box circle-1rem></Box>
     * <Box circle-4px></Box>
     * <Box circle={8}></Box>
     * <Box circle={a + b}></Box>
     * ```
     */
    circle?: ResponsiveValue<string | number>
    /**
     * set width height border-radius to 0
     * ```css
     * {
     *   width: 0px;
     *   height: 0px;
     *   border-radius: 0px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box circle0></Box>
     * ```
     */
    circle0?: ResponsiveBoolean
    /**
     * set width height border-radius to 4
     * ```css
     * {
     *   width: 4px;
     *   height: 4px;
     *   border-radius: 4px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box circle1></Box>
     * ```
     */
    circle1?: ResponsiveBoolean
    /**
     * set width height border-radius to 8
     * ```css
     * {
     *   width: 8px;
     *   height: 8px;
     *   border-radius: 8px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box circle2></Box>
     * ```
     */
    circle2?: ResponsiveBoolean
    /**
     * set width height border-radius to 12
     * ```css
     * {
     *   width: 12px;
     *   height: 12px;
     *   border-radius: 12px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box circle3></Box>
     * ```
     */
    circle3?: ResponsiveBoolean
    /**
     * set width height border-radius to 16
     * ```css
     * {
     *   width: 16px;
     *   height: 16px;
     *   border-radius: 16px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box circle4></Box>
     * ```
     */
    circle4?: ResponsiveBoolean
    /**
     * set width height border-radius to 20
     * ```css
     * {
     *   width: 20px;
     *   height: 20px;
     *   border-radius: 20px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box circle5></Box>
     * ```
     */
    circle5?: ResponsiveBoolean
    /**
     * set width height border-radius to 24
     * ```css
     * {
     *   width: 24px;
     *   height: 24px;
     *   border-radius: 24px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box circle6></Box>
     * ```
     */
    circle6?: ResponsiveBoolean
    /**
     * set width height border-radius to 28
     * ```css
     * {
     *   width: 28px;
     *   height: 28px;
     *   border-radius: 28px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box circle7></Box>
     * ```
     */
    circle7?: ResponsiveBoolean
    /**
     * set width height border-radius to 32
     * ```css
     * {
     *   width: 32px;
     *   height: 32px;
     *   border-radius: 32px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box circle8></Box>
     * ```
     */
    circle8?: ResponsiveBoolean
    /**
     * set width height border-radius to 36
     * ```css
     * {
     *   width: 36px;
     *   height: 36px;
     *   border-radius: 36px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box circle9></Box>
     * ```
     */
    circle9?: ResponsiveBoolean
    /**
     * set width height border-radius to 40
     * ```css
     * {
     *   width: 40px;
     *   height: 40px;
     *   border-radius: 40px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box circle10></Box>
     * ```
     */
    circle10?: ResponsiveBoolean
    /**
     * set width height border-radius to 44
     * ```css
     * {
     *   width: 44px;
     *   height: 44px;
     *   border-radius: 44px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box circle11></Box>
     * ```
     */
    circle11?: ResponsiveBoolean
    /**
     * set width height border-radius to 48
     * ```css
     * {
     *   width: 48px;
     *   height: 48px;
     *   border-radius: 48px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box circle12></Box>
     * ```
     */
    circle12?: ResponsiveBoolean
    /**
     * set width height border-radius to 56
     * ```css
     * {
     *   width: 56px;
     *   height: 56px;
     *   border-radius: 56px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box circle14></Box>
     * ```
     */
    circle14?: ResponsiveBoolean
    /**
     * set width height border-radius to 64
     * ```css
     * {
     *   width: 64px;
     *   height: 64px;
     *   border-radius: 64px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box circle16></Box>
     * ```
     */
    circle16?: ResponsiveBoolean
    /**
     * set width height border-radius to 80
     * ```css
     * {
     *   width: 80px;
     *   height: 80px;
     *   border-radius: 80px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box circle20></Box>
     * ```
     */
    circle20?: ResponsiveBoolean
    /**
     * set width height border-radius to 96
     * ```css
     * {
     *   width: 96px;
     *   height: 96px;
     *   border-radius: 96px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box circle24></Box>
     * ```
     */
    circle24?: ResponsiveBoolean
    /**
     * set width height border-radius to 112
     * ```css
     * {
     *   width: 112px;
     *   height: 112px;
     *   border-radius: 112px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box circle28></Box>
     * ```
     */
    circle28?: ResponsiveBoolean
    /**
     * set width height border-radius to 128
     * ```css
     * {
     *   width: 128px;
     *   height: 128px;
     *   border-radius: 128px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box circle32></Box>
     * ```
     */
    circle32?: ResponsiveBoolean
    /**
     * set width height border-radius to 144
     * ```css
     * {
     *   width: 144px;
     *   height: 144px;
     *   border-radius: 144px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box circle36></Box>
     * ```
     */
    circle36?: ResponsiveBoolean
    /**
     * set width height border-radius to 160
     * ```css
     * {
     *   width: 160px;
     *   height: 160px;
     *   border-radius: 160px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box circle40></Box>
     * ```
     */
    circle40?: ResponsiveBoolean
    /**
     * set width height border-radius to 176
     * ```css
     * {
     *   width: 176px;
     *   height: 176px;
     *   border-radius: 176px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box circle44></Box>
     * ```
     */
    circle44?: ResponsiveBoolean
    /**
     * set width height border-radius to 192
     * ```css
     * {
     *   width: 192px;
     *   height: 192px;
     *   border-radius: 192px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box circle48></Box>
     * ```
     */
    circle48?: ResponsiveBoolean
    /**
     * set width height border-radius to 208
     * ```css
     * {
     *   width: 208px;
     *   height: 208px;
     *   border-radius: 208px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box circle52></Box>
     * ```
     */
    circle52?: ResponsiveBoolean
    /**
     * set width height border-radius to 224
     * ```css
     * {
     *   width: 224px;
     *   height: 224px;
     *   border-radius: 224px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box circle56></Box>
     * ```
     */
    circle56?: ResponsiveBoolean
    /**
     * set width height border-radius to 240
     * ```css
     * {
     *   width: 240px;
     *   height: 240px;
     *   border-radius: 240px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box circle60></Box>
     * ```
     */
    circle60?: ResponsiveBoolean
    /**
     * set width height border-radius to 256
     * ```css
     * {
     *   width: 256px;
     *   height: 256px;
     *   border-radius: 256px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box circle64></Box>
     * ```
     */
    circle64?: ResponsiveBoolean
    /**
     * set width height border-radius to 288
     * ```css
     * {
     *   width: 288px;
     *   height: 288px;
     *   border-radius: 288px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box circle72></Box>
     * ```
     */
    circle72?: ResponsiveBoolean
    /**
     * set width height border-radius to 320
     * ```css
     * {
     *   width: 320px;
     *   height: 320px;
     *   border-radius: 320px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box circle80></Box>
     * ```
     */
    circle80?: ResponsiveBoolean
    /**
     * set width height border-radius to 384
     * ```css
     * {
     *   width: 384px;
     *   height: 384px;
     *   border-radius: 384px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box circle96></Box>
     * ```
     */
    circle96?: ResponsiveBoolean
  }
}
