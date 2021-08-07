import { FowerPlugin, ResponsiveValue, ResponsiveBoolean } from "@fower/core"
import * as CSS from 'csstype'
declare const _default: () => FowerPlugin
export default _default

declare module '@fower/atomic-props' {
  export interface AtomicProps {
    /**
     * Set position to some value
     * ```css
     * { position: $value }
     * ```
     * @example
     * ```
     * <Box position="absolute"></Box>
     * <Box position="sticky"></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    position?: ResponsiveValue<CSS.Property.Position>
    /**
     * set position to static
     * ```css
     * { position: static}
     * ```
     * @example
     * ```tsx
     * <Box static></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    static?: ResponsiveBoolean
    /**
     * set position to fixed
     * ```css
     * { position: fixed}
     * ```
     * @example
     * ```tsx
     * <Box fixed></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    fixed?: ResponsiveBoolean
    /**
     * set position to absolute
     * ```css
     * { position: absolute}
     * ```
     * @example
     * ```tsx
     * <Box absolute></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    absolute?: ResponsiveBoolean
    /**
     * set position to relative
     * ```css
     * { position: relative}
     * ```
     * @example
     * ```tsx
     * <Box relative></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    relative?: ResponsiveBoolean
    /**
     * set position to sticky
     * ```css
     * { position: sticky}
     * ```
     * @example
     * ```tsx
     * <Box sticky></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    sticky?: ResponsiveBoolean
    /**
     * set top to some value
     * ```css
     * {
     *   top: $value;
     * }
     * ```
     * @example
     * ```tsx
     * <Box top-8></Box>
     * <Box top-1rem></Box>
     * <Box top-4px></Box>
     * <Box top={8}></Box>
     * <Box top={a + b}></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    top?: ResponsiveValue<string | number>
    /**
     * set top to 0
     * ```css
     * {
     *   top: 0px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box top0></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    top0?: ResponsiveBoolean
    /**
     * set top to 4
     * ```css
     * {
     *   top: 4px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box top1></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    top1?: ResponsiveBoolean
    /**
     * set top to 8
     * ```css
     * {
     *   top: 8px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box top2></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    top2?: ResponsiveBoolean
    /**
     * set top to 12
     * ```css
     * {
     *   top: 12px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box top3></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    top3?: ResponsiveBoolean
    /**
     * set top to 16
     * ```css
     * {
     *   top: 16px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box top4></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    top4?: ResponsiveBoolean
    /**
     * set top to 20
     * ```css
     * {
     *   top: 20px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box top5></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    top5?: ResponsiveBoolean
    /**
     * set top to 24
     * ```css
     * {
     *   top: 24px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box top6></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    top6?: ResponsiveBoolean
    /**
     * set top to 28
     * ```css
     * {
     *   top: 28px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box top7></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    top7?: ResponsiveBoolean
    /**
     * set top to 32
     * ```css
     * {
     *   top: 32px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box top8></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    top8?: ResponsiveBoolean
    /**
     * set top to 36
     * ```css
     * {
     *   top: 36px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box top9></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    top9?: ResponsiveBoolean
    /**
     * set top to 40
     * ```css
     * {
     *   top: 40px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box top10></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    top10?: ResponsiveBoolean
    /**
     * set top to 44
     * ```css
     * {
     *   top: 44px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box top11></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    top11?: ResponsiveBoolean
    /**
     * set top to 48
     * ```css
     * {
     *   top: 48px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box top12></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    top12?: ResponsiveBoolean
    /**
     * set top to 56
     * ```css
     * {
     *   top: 56px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box top14></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    top14?: ResponsiveBoolean
    /**
     * set top to 64
     * ```css
     * {
     *   top: 64px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box top16></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    top16?: ResponsiveBoolean
    /**
     * set top to 80
     * ```css
     * {
     *   top: 80px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box top20></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    top20?: ResponsiveBoolean
    /**
     * set top to 96
     * ```css
     * {
     *   top: 96px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box top24></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    top24?: ResponsiveBoolean
    /**
     * set top to 112
     * ```css
     * {
     *   top: 112px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box top28></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    top28?: ResponsiveBoolean
    /**
     * set top to 128
     * ```css
     * {
     *   top: 128px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box top32></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    top32?: ResponsiveBoolean
    /**
     * set top to 144
     * ```css
     * {
     *   top: 144px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box top36></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    top36?: ResponsiveBoolean
    /**
     * set top to 160
     * ```css
     * {
     *   top: 160px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box top40></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    top40?: ResponsiveBoolean
    /**
     * set top to 176
     * ```css
     * {
     *   top: 176px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box top44></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    top44?: ResponsiveBoolean
    /**
     * set top to 192
     * ```css
     * {
     *   top: 192px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box top48></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    top48?: ResponsiveBoolean
    /**
     * set top to 208
     * ```css
     * {
     *   top: 208px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box top52></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    top52?: ResponsiveBoolean
    /**
     * set top to 224
     * ```css
     * {
     *   top: 224px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box top56></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    top56?: ResponsiveBoolean
    /**
     * set top to 240
     * ```css
     * {
     *   top: 240px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box top60></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    top60?: ResponsiveBoolean
    /**
     * set top to 256
     * ```css
     * {
     *   top: 256px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box top64></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    top64?: ResponsiveBoolean
    /**
     * set top to 288
     * ```css
     * {
     *   top: 288px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box top72></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    top72?: ResponsiveBoolean
    /**
     * set top to 320
     * ```css
     * {
     *   top: 320px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box top80></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    top80?: ResponsiveBoolean
    /**
     * set top to 384
     * ```css
     * {
     *   top: 384px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box top96></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    top96?: ResponsiveBoolean
    /**
     * set right to some value
     * ```css
     * {
     *   right: $value;
     * }
     * ```
     * @example
     * ```tsx
     * <Box right-8></Box>
     * <Box right-1rem></Box>
     * <Box right-4px></Box>
     * <Box right={8}></Box>
     * <Box right={a + b}></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    right?: ResponsiveValue<string | number>
    /**
     * set right to 0
     * ```css
     * {
     *   right: 0px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box right0></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    right0?: ResponsiveBoolean
    /**
     * set right to 4
     * ```css
     * {
     *   right: 4px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box right1></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    right1?: ResponsiveBoolean
    /**
     * set right to 8
     * ```css
     * {
     *   right: 8px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box right2></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    right2?: ResponsiveBoolean
    /**
     * set right to 12
     * ```css
     * {
     *   right: 12px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box right3></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    right3?: ResponsiveBoolean
    /**
     * set right to 16
     * ```css
     * {
     *   right: 16px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box right4></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    right4?: ResponsiveBoolean
    /**
     * set right to 20
     * ```css
     * {
     *   right: 20px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box right5></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    right5?: ResponsiveBoolean
    /**
     * set right to 24
     * ```css
     * {
     *   right: 24px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box right6></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    right6?: ResponsiveBoolean
    /**
     * set right to 28
     * ```css
     * {
     *   right: 28px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box right7></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    right7?: ResponsiveBoolean
    /**
     * set right to 32
     * ```css
     * {
     *   right: 32px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box right8></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    right8?: ResponsiveBoolean
    /**
     * set right to 36
     * ```css
     * {
     *   right: 36px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box right9></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    right9?: ResponsiveBoolean
    /**
     * set right to 40
     * ```css
     * {
     *   right: 40px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box right10></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    right10?: ResponsiveBoolean
    /**
     * set right to 44
     * ```css
     * {
     *   right: 44px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box right11></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    right11?: ResponsiveBoolean
    /**
     * set right to 48
     * ```css
     * {
     *   right: 48px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box right12></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    right12?: ResponsiveBoolean
    /**
     * set right to 56
     * ```css
     * {
     *   right: 56px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box right14></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    right14?: ResponsiveBoolean
    /**
     * set right to 64
     * ```css
     * {
     *   right: 64px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box right16></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    right16?: ResponsiveBoolean
    /**
     * set right to 80
     * ```css
     * {
     *   right: 80px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box right20></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    right20?: ResponsiveBoolean
    /**
     * set right to 96
     * ```css
     * {
     *   right: 96px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box right24></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    right24?: ResponsiveBoolean
    /**
     * set right to 112
     * ```css
     * {
     *   right: 112px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box right28></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    right28?: ResponsiveBoolean
    /**
     * set right to 128
     * ```css
     * {
     *   right: 128px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box right32></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    right32?: ResponsiveBoolean
    /**
     * set right to 144
     * ```css
     * {
     *   right: 144px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box right36></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    right36?: ResponsiveBoolean
    /**
     * set right to 160
     * ```css
     * {
     *   right: 160px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box right40></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    right40?: ResponsiveBoolean
    /**
     * set right to 176
     * ```css
     * {
     *   right: 176px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box right44></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    right44?: ResponsiveBoolean
    /**
     * set right to 192
     * ```css
     * {
     *   right: 192px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box right48></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    right48?: ResponsiveBoolean
    /**
     * set right to 208
     * ```css
     * {
     *   right: 208px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box right52></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    right52?: ResponsiveBoolean
    /**
     * set right to 224
     * ```css
     * {
     *   right: 224px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box right56></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    right56?: ResponsiveBoolean
    /**
     * set right to 240
     * ```css
     * {
     *   right: 240px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box right60></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    right60?: ResponsiveBoolean
    /**
     * set right to 256
     * ```css
     * {
     *   right: 256px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box right64></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    right64?: ResponsiveBoolean
    /**
     * set right to 288
     * ```css
     * {
     *   right: 288px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box right72></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    right72?: ResponsiveBoolean
    /**
     * set right to 320
     * ```css
     * {
     *   right: 320px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box right80></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    right80?: ResponsiveBoolean
    /**
     * set right to 384
     * ```css
     * {
     *   right: 384px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box right96></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    right96?: ResponsiveBoolean
    /**
     * set bottom to some value
     * ```css
     * {
     *   bottom: $value;
     * }
     * ```
     * @example
     * ```tsx
     * <Box bottom-8></Box>
     * <Box bottom-1rem></Box>
     * <Box bottom-4px></Box>
     * <Box bottom={8}></Box>
     * <Box bottom={a + b}></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    bottom?: ResponsiveValue<string | number>
    /**
     * set bottom to 0
     * ```css
     * {
     *   bottom: 0px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box bottom0></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    bottom0?: ResponsiveBoolean
    /**
     * set bottom to 4
     * ```css
     * {
     *   bottom: 4px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box bottom1></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    bottom1?: ResponsiveBoolean
    /**
     * set bottom to 8
     * ```css
     * {
     *   bottom: 8px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box bottom2></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    bottom2?: ResponsiveBoolean
    /**
     * set bottom to 12
     * ```css
     * {
     *   bottom: 12px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box bottom3></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    bottom3?: ResponsiveBoolean
    /**
     * set bottom to 16
     * ```css
     * {
     *   bottom: 16px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box bottom4></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    bottom4?: ResponsiveBoolean
    /**
     * set bottom to 20
     * ```css
     * {
     *   bottom: 20px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box bottom5></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    bottom5?: ResponsiveBoolean
    /**
     * set bottom to 24
     * ```css
     * {
     *   bottom: 24px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box bottom6></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    bottom6?: ResponsiveBoolean
    /**
     * set bottom to 28
     * ```css
     * {
     *   bottom: 28px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box bottom7></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    bottom7?: ResponsiveBoolean
    /**
     * set bottom to 32
     * ```css
     * {
     *   bottom: 32px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box bottom8></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    bottom8?: ResponsiveBoolean
    /**
     * set bottom to 36
     * ```css
     * {
     *   bottom: 36px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box bottom9></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    bottom9?: ResponsiveBoolean
    /**
     * set bottom to 40
     * ```css
     * {
     *   bottom: 40px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box bottom10></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    bottom10?: ResponsiveBoolean
    /**
     * set bottom to 44
     * ```css
     * {
     *   bottom: 44px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box bottom11></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    bottom11?: ResponsiveBoolean
    /**
     * set bottom to 48
     * ```css
     * {
     *   bottom: 48px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box bottom12></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    bottom12?: ResponsiveBoolean
    /**
     * set bottom to 56
     * ```css
     * {
     *   bottom: 56px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box bottom14></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    bottom14?: ResponsiveBoolean
    /**
     * set bottom to 64
     * ```css
     * {
     *   bottom: 64px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box bottom16></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    bottom16?: ResponsiveBoolean
    /**
     * set bottom to 80
     * ```css
     * {
     *   bottom: 80px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box bottom20></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    bottom20?: ResponsiveBoolean
    /**
     * set bottom to 96
     * ```css
     * {
     *   bottom: 96px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box bottom24></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    bottom24?: ResponsiveBoolean
    /**
     * set bottom to 112
     * ```css
     * {
     *   bottom: 112px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box bottom28></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    bottom28?: ResponsiveBoolean
    /**
     * set bottom to 128
     * ```css
     * {
     *   bottom: 128px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box bottom32></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    bottom32?: ResponsiveBoolean
    /**
     * set bottom to 144
     * ```css
     * {
     *   bottom: 144px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box bottom36></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    bottom36?: ResponsiveBoolean
    /**
     * set bottom to 160
     * ```css
     * {
     *   bottom: 160px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box bottom40></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    bottom40?: ResponsiveBoolean
    /**
     * set bottom to 176
     * ```css
     * {
     *   bottom: 176px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box bottom44></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    bottom44?: ResponsiveBoolean
    /**
     * set bottom to 192
     * ```css
     * {
     *   bottom: 192px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box bottom48></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    bottom48?: ResponsiveBoolean
    /**
     * set bottom to 208
     * ```css
     * {
     *   bottom: 208px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box bottom52></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    bottom52?: ResponsiveBoolean
    /**
     * set bottom to 224
     * ```css
     * {
     *   bottom: 224px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box bottom56></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    bottom56?: ResponsiveBoolean
    /**
     * set bottom to 240
     * ```css
     * {
     *   bottom: 240px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box bottom60></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    bottom60?: ResponsiveBoolean
    /**
     * set bottom to 256
     * ```css
     * {
     *   bottom: 256px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box bottom64></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    bottom64?: ResponsiveBoolean
    /**
     * set bottom to 288
     * ```css
     * {
     *   bottom: 288px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box bottom72></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    bottom72?: ResponsiveBoolean
    /**
     * set bottom to 320
     * ```css
     * {
     *   bottom: 320px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box bottom80></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    bottom80?: ResponsiveBoolean
    /**
     * set bottom to 384
     * ```css
     * {
     *   bottom: 384px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box bottom96></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    bottom96?: ResponsiveBoolean
    /**
     * set left to some value
     * ```css
     * {
     *   left: $value;
     * }
     * ```
     * @example
     * ```tsx
     * <Box left-8></Box>
     * <Box left-1rem></Box>
     * <Box left-4px></Box>
     * <Box left={8}></Box>
     * <Box left={a + b}></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    left?: ResponsiveValue<string | number>
    /**
     * set left to 0
     * ```css
     * {
     *   left: 0px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box left0></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    left0?: ResponsiveBoolean
    /**
     * set left to 4
     * ```css
     * {
     *   left: 4px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box left1></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    left1?: ResponsiveBoolean
    /**
     * set left to 8
     * ```css
     * {
     *   left: 8px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box left2></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    left2?: ResponsiveBoolean
    /**
     * set left to 12
     * ```css
     * {
     *   left: 12px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box left3></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    left3?: ResponsiveBoolean
    /**
     * set left to 16
     * ```css
     * {
     *   left: 16px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box left4></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    left4?: ResponsiveBoolean
    /**
     * set left to 20
     * ```css
     * {
     *   left: 20px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box left5></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    left5?: ResponsiveBoolean
    /**
     * set left to 24
     * ```css
     * {
     *   left: 24px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box left6></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    left6?: ResponsiveBoolean
    /**
     * set left to 28
     * ```css
     * {
     *   left: 28px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box left7></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    left7?: ResponsiveBoolean
    /**
     * set left to 32
     * ```css
     * {
     *   left: 32px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box left8></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    left8?: ResponsiveBoolean
    /**
     * set left to 36
     * ```css
     * {
     *   left: 36px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box left9></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    left9?: ResponsiveBoolean
    /**
     * set left to 40
     * ```css
     * {
     *   left: 40px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box left10></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    left10?: ResponsiveBoolean
    /**
     * set left to 44
     * ```css
     * {
     *   left: 44px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box left11></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    left11?: ResponsiveBoolean
    /**
     * set left to 48
     * ```css
     * {
     *   left: 48px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box left12></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    left12?: ResponsiveBoolean
    /**
     * set left to 56
     * ```css
     * {
     *   left: 56px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box left14></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    left14?: ResponsiveBoolean
    /**
     * set left to 64
     * ```css
     * {
     *   left: 64px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box left16></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    left16?: ResponsiveBoolean
    /**
     * set left to 80
     * ```css
     * {
     *   left: 80px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box left20></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    left20?: ResponsiveBoolean
    /**
     * set left to 96
     * ```css
     * {
     *   left: 96px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box left24></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    left24?: ResponsiveBoolean
    /**
     * set left to 112
     * ```css
     * {
     *   left: 112px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box left28></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    left28?: ResponsiveBoolean
    /**
     * set left to 128
     * ```css
     * {
     *   left: 128px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box left32></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    left32?: ResponsiveBoolean
    /**
     * set left to 144
     * ```css
     * {
     *   left: 144px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box left36></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    left36?: ResponsiveBoolean
    /**
     * set left to 160
     * ```css
     * {
     *   left: 160px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box left40></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    left40?: ResponsiveBoolean
    /**
     * set left to 176
     * ```css
     * {
     *   left: 176px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box left44></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    left44?: ResponsiveBoolean
    /**
     * set left to 192
     * ```css
     * {
     *   left: 192px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box left48></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    left48?: ResponsiveBoolean
    /**
     * set left to 208
     * ```css
     * {
     *   left: 208px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box left52></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    left52?: ResponsiveBoolean
    /**
     * set left to 224
     * ```css
     * {
     *   left: 224px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box left56></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    left56?: ResponsiveBoolean
    /**
     * set left to 240
     * ```css
     * {
     *   left: 240px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box left60></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    left60?: ResponsiveBoolean
    /**
     * set left to 256
     * ```css
     * {
     *   left: 256px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box left64></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    left64?: ResponsiveBoolean
    /**
     * set left to 288
     * ```css
     * {
     *   left: 288px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box left72></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    left72?: ResponsiveBoolean
    /**
     * set left to 320
     * ```css
     * {
     *   left: 320px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box left80></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    left80?: ResponsiveBoolean
    /**
     * set left to 384
     * ```css
     * {
     *   left: 384px;
     * }
     * ```
     * @example
     * ```tsx
     * <Box left96></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    left96?: ResponsiveBoolean
  }
}
