import { FowerPlugin, ResponsiveValue, ResponsiveBoolean } from "@fower/core"
import * as CSS from 'csstype'
declare const _default: () => FowerPlugin
export default _default

declare module '@fower/atomic-props' {
  export interface AtomicProps {
    /**
     * set the gap between child elements to some value
     * @example
     * ```tsx
     * <Box gap-8></Box>
     * <Box gap-1rem></Box>
     * <Box gap-4px></Box>
     * <Box gap={8}></Box>
     * <Box gap={a + b}></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    gap?: ResponsiveValue<string | number>
    /**
     * set the gap between child elements to 0
     * @example
     * ```tsx
     * <Box gap0></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    gap0?: ResponsiveBoolean
    /**
     * set the gap between child elements to 4
     * @example
     * ```tsx
     * <Box gap1></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    gap1?: ResponsiveBoolean
    /**
     * set the gap between child elements to 8
     * @example
     * ```tsx
     * <Box gap2></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    gap2?: ResponsiveBoolean
    /**
     * set the gap between child elements to 12
     * @example
     * ```tsx
     * <Box gap3></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    gap3?: ResponsiveBoolean
    /**
     * set the gap between child elements to 16
     * @example
     * ```tsx
     * <Box gap4></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    gap4?: ResponsiveBoolean
    /**
     * set the gap between child elements to 20
     * @example
     * ```tsx
     * <Box gap5></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    gap5?: ResponsiveBoolean
    /**
     * set the gap between child elements to 24
     * @example
     * ```tsx
     * <Box gap6></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    gap6?: ResponsiveBoolean
    /**
     * set the gap between child elements to 28
     * @example
     * ```tsx
     * <Box gap7></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    gap7?: ResponsiveBoolean
    /**
     * set the gap between child elements to 32
     * @example
     * ```tsx
     * <Box gap8></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    gap8?: ResponsiveBoolean
    /**
     * set the gap between child elements to 36
     * @example
     * ```tsx
     * <Box gap9></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    gap9?: ResponsiveBoolean
    /**
     * set the gap between child elements to 40
     * @example
     * ```tsx
     * <Box gap10></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    gap10?: ResponsiveBoolean
    /**
     * set the gap between child elements to 44
     * @example
     * ```tsx
     * <Box gap11></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    gap11?: ResponsiveBoolean
    /**
     * set the gap between child elements to 48
     * @example
     * ```tsx
     * <Box gap12></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    gap12?: ResponsiveBoolean
    /**
     * set the gap between child elements to 56
     * @example
     * ```tsx
     * <Box gap14></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    gap14?: ResponsiveBoolean
    /**
     * set the gap between child elements to 64
     * @example
     * ```tsx
     * <Box gap16></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    gap16?: ResponsiveBoolean
    /**
     * set the gap between child elements to 80
     * @example
     * ```tsx
     * <Box gap20></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    gap20?: ResponsiveBoolean
    /**
     * set the gap between child elements to 96
     * @example
     * ```tsx
     * <Box gap24></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    gap24?: ResponsiveBoolean
    /**
     * set the gap between child elements to 112
     * @example
     * ```tsx
     * <Box gap28></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    gap28?: ResponsiveBoolean
    /**
     * set the gap between child elements to 128
     * @example
     * ```tsx
     * <Box gap32></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    gap32?: ResponsiveBoolean
    /**
     * set the gap between child elements to 144
     * @example
     * ```tsx
     * <Box gap36></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    gap36?: ResponsiveBoolean
    /**
     * set the gap between child elements to 160
     * @example
     * ```tsx
     * <Box gap40></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    gap40?: ResponsiveBoolean
    /**
     * set the gap between child elements to 176
     * @example
     * ```tsx
     * <Box gap44></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    gap44?: ResponsiveBoolean
    /**
     * set the gap between child elements to 192
     * @example
     * ```tsx
     * <Box gap48></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    gap48?: ResponsiveBoolean
    /**
     * set the gap between child elements to 208
     * @example
     * ```tsx
     * <Box gap52></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    gap52?: ResponsiveBoolean
    /**
     * set the gap between child elements to 224
     * @example
     * ```tsx
     * <Box gap56></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    gap56?: ResponsiveBoolean
    /**
     * set the gap between child elements to 240
     * @example
     * ```tsx
     * <Box gap60></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    gap60?: ResponsiveBoolean
    /**
     * set the gap between child elements to 256
     * @example
     * ```tsx
     * <Box gap64></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    gap64?: ResponsiveBoolean
    /**
     * set the gap between child elements to 288
     * @example
     * ```tsx
     * <Box gap72></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    gap72?: ResponsiveBoolean
    /**
     * set the gap between child elements to 320
     * @example
     * ```tsx
     * <Box gap80></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    gap80?: ResponsiveBoolean
    /**
     * set the gap between child elements to 384
     * @example
     * ```tsx
     * <Box gap96></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    gap96?: ResponsiveBoolean
    /**
     * set the gap between child elements to some value
     * @example
     * ```tsx
     * <Box gapX-8></Box>
     * <Box gapX-1rem></Box>
     * <Box gapX-4px></Box>
     * <Box gapX={8}></Box>
     * <Box gapX={a + b}></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    gapX?: ResponsiveValue<string | number>
    /**
     * set the gap between child elements to 0
     * @example
     * ```tsx
     * <Box gapX0></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    gapX0?: ResponsiveBoolean
    /**
     * set the gap between child elements to 4
     * @example
     * ```tsx
     * <Box gapX1></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    gapX1?: ResponsiveBoolean
    /**
     * set the gap between child elements to 8
     * @example
     * ```tsx
     * <Box gapX2></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    gapX2?: ResponsiveBoolean
    /**
     * set the gap between child elements to 12
     * @example
     * ```tsx
     * <Box gapX3></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    gapX3?: ResponsiveBoolean
    /**
     * set the gap between child elements to 16
     * @example
     * ```tsx
     * <Box gapX4></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    gapX4?: ResponsiveBoolean
    /**
     * set the gap between child elements to 20
     * @example
     * ```tsx
     * <Box gapX5></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    gapX5?: ResponsiveBoolean
    /**
     * set the gap between child elements to 24
     * @example
     * ```tsx
     * <Box gapX6></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    gapX6?: ResponsiveBoolean
    /**
     * set the gap between child elements to 28
     * @example
     * ```tsx
     * <Box gapX7></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    gapX7?: ResponsiveBoolean
    /**
     * set the gap between child elements to 32
     * @example
     * ```tsx
     * <Box gapX8></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    gapX8?: ResponsiveBoolean
    /**
     * set the gap between child elements to 36
     * @example
     * ```tsx
     * <Box gapX9></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    gapX9?: ResponsiveBoolean
    /**
     * set the gap between child elements to 40
     * @example
     * ```tsx
     * <Box gapX10></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    gapX10?: ResponsiveBoolean
    /**
     * set the gap between child elements to 44
     * @example
     * ```tsx
     * <Box gapX11></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    gapX11?: ResponsiveBoolean
    /**
     * set the gap between child elements to 48
     * @example
     * ```tsx
     * <Box gapX12></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    gapX12?: ResponsiveBoolean
    /**
     * set the gap between child elements to 56
     * @example
     * ```tsx
     * <Box gapX14></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    gapX14?: ResponsiveBoolean
    /**
     * set the gap between child elements to 64
     * @example
     * ```tsx
     * <Box gapX16></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    gapX16?: ResponsiveBoolean
    /**
     * set the gap between child elements to 80
     * @example
     * ```tsx
     * <Box gapX20></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    gapX20?: ResponsiveBoolean
    /**
     * set the gap between child elements to 96
     * @example
     * ```tsx
     * <Box gapX24></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    gapX24?: ResponsiveBoolean
    /**
     * set the gap between child elements to 112
     * @example
     * ```tsx
     * <Box gapX28></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    gapX28?: ResponsiveBoolean
    /**
     * set the gap between child elements to 128
     * @example
     * ```tsx
     * <Box gapX32></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    gapX32?: ResponsiveBoolean
    /**
     * set the gap between child elements to 144
     * @example
     * ```tsx
     * <Box gapX36></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    gapX36?: ResponsiveBoolean
    /**
     * set the gap between child elements to 160
     * @example
     * ```tsx
     * <Box gapX40></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    gapX40?: ResponsiveBoolean
    /**
     * set the gap between child elements to 176
     * @example
     * ```tsx
     * <Box gapX44></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    gapX44?: ResponsiveBoolean
    /**
     * set the gap between child elements to 192
     * @example
     * ```tsx
     * <Box gapX48></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    gapX48?: ResponsiveBoolean
    /**
     * set the gap between child elements to 208
     * @example
     * ```tsx
     * <Box gapX52></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    gapX52?: ResponsiveBoolean
    /**
     * set the gap between child elements to 224
     * @example
     * ```tsx
     * <Box gapX56></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    gapX56?: ResponsiveBoolean
    /**
     * set the gap between child elements to 240
     * @example
     * ```tsx
     * <Box gapX60></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    gapX60?: ResponsiveBoolean
    /**
     * set the gap between child elements to 256
     * @example
     * ```tsx
     * <Box gapX64></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    gapX64?: ResponsiveBoolean
    /**
     * set the gap between child elements to 288
     * @example
     * ```tsx
     * <Box gapX72></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    gapX72?: ResponsiveBoolean
    /**
     * set the gap between child elements to 320
     * @example
     * ```tsx
     * <Box gapX80></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    gapX80?: ResponsiveBoolean
    /**
     * set the gap between child elements to 384
     * @example
     * ```tsx
     * <Box gapX96></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    gapX96?: ResponsiveBoolean
    /**
     * set the gap between child elements to some value
     * @example
     * ```tsx
     * <Box gapY-8></Box>
     * <Box gapY-1rem></Box>
     * <Box gapY-4px></Box>
     * <Box gapY={8}></Box>
     * <Box gapY={a + b}></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    gapY?: ResponsiveValue<string | number>
    /**
     * set the gap between child elements to 0
     * @example
     * ```tsx
     * <Box gapY0></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    gapY0?: ResponsiveBoolean
    /**
     * set the gap between child elements to 4
     * @example
     * ```tsx
     * <Box gapY1></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    gapY1?: ResponsiveBoolean
    /**
     * set the gap between child elements to 8
     * @example
     * ```tsx
     * <Box gapY2></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    gapY2?: ResponsiveBoolean
    /**
     * set the gap between child elements to 12
     * @example
     * ```tsx
     * <Box gapY3></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    gapY3?: ResponsiveBoolean
    /**
     * set the gap between child elements to 16
     * @example
     * ```tsx
     * <Box gapY4></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    gapY4?: ResponsiveBoolean
    /**
     * set the gap between child elements to 20
     * @example
     * ```tsx
     * <Box gapY5></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    gapY5?: ResponsiveBoolean
    /**
     * set the gap between child elements to 24
     * @example
     * ```tsx
     * <Box gapY6></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    gapY6?: ResponsiveBoolean
    /**
     * set the gap between child elements to 28
     * @example
     * ```tsx
     * <Box gapY7></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    gapY7?: ResponsiveBoolean
    /**
     * set the gap between child elements to 32
     * @example
     * ```tsx
     * <Box gapY8></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    gapY8?: ResponsiveBoolean
    /**
     * set the gap between child elements to 36
     * @example
     * ```tsx
     * <Box gapY9></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    gapY9?: ResponsiveBoolean
    /**
     * set the gap between child elements to 40
     * @example
     * ```tsx
     * <Box gapY10></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    gapY10?: ResponsiveBoolean
    /**
     * set the gap between child elements to 44
     * @example
     * ```tsx
     * <Box gapY11></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    gapY11?: ResponsiveBoolean
    /**
     * set the gap between child elements to 48
     * @example
     * ```tsx
     * <Box gapY12></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    gapY12?: ResponsiveBoolean
    /**
     * set the gap between child elements to 56
     * @example
     * ```tsx
     * <Box gapY14></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    gapY14?: ResponsiveBoolean
    /**
     * set the gap between child elements to 64
     * @example
     * ```tsx
     * <Box gapY16></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    gapY16?: ResponsiveBoolean
    /**
     * set the gap between child elements to 80
     * @example
     * ```tsx
     * <Box gapY20></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    gapY20?: ResponsiveBoolean
    /**
     * set the gap between child elements to 96
     * @example
     * ```tsx
     * <Box gapY24></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    gapY24?: ResponsiveBoolean
    /**
     * set the gap between child elements to 112
     * @example
     * ```tsx
     * <Box gapY28></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    gapY28?: ResponsiveBoolean
    /**
     * set the gap between child elements to 128
     * @example
     * ```tsx
     * <Box gapY32></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    gapY32?: ResponsiveBoolean
    /**
     * set the gap between child elements to 144
     * @example
     * ```tsx
     * <Box gapY36></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    gapY36?: ResponsiveBoolean
    /**
     * set the gap between child elements to 160
     * @example
     * ```tsx
     * <Box gapY40></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    gapY40?: ResponsiveBoolean
    /**
     * set the gap between child elements to 176
     * @example
     * ```tsx
     * <Box gapY44></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    gapY44?: ResponsiveBoolean
    /**
     * set the gap between child elements to 192
     * @example
     * ```tsx
     * <Box gapY48></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    gapY48?: ResponsiveBoolean
    /**
     * set the gap between child elements to 208
     * @example
     * ```tsx
     * <Box gapY52></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    gapY52?: ResponsiveBoolean
    /**
     * set the gap between child elements to 224
     * @example
     * ```tsx
     * <Box gapY56></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    gapY56?: ResponsiveBoolean
    /**
     * set the gap between child elements to 240
     * @example
     * ```tsx
     * <Box gapY60></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    gapY60?: ResponsiveBoolean
    /**
     * set the gap between child elements to 256
     * @example
     * ```tsx
     * <Box gapY64></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    gapY64?: ResponsiveBoolean
    /**
     * set the gap between child elements to 288
     * @example
     * ```tsx
     * <Box gapY72></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    gapY72?: ResponsiveBoolean
    /**
     * set the gap between child elements to 320
     * @example
     * ```tsx
     * <Box gapY80></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    gapY80?: ResponsiveBoolean
    /**
     * set the gap between child elements to 384
     * @example
     * ```tsx
     * <Box gapY96></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    gapY96?: ResponsiveBoolean
  }
}
