import { FowerPlugin, ResponsiveValue, ResponsiveBoolean } from "@fower/core"
import * as CSS from 'csstype'
declare const _default: () => FowerPlugin
export default _default

declare module '@fower/atomic-props' {
  export interface AtomicProps {
    /**
     * set the space between child elements to some value
     * @example
     * ```tsx
     * <Box space-8></Box>
     * <Box space-1rem></Box>
     * <Box space-4px></Box>
     * <Box space={8}></Box>
     * <Box space={a + b}></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    space?: ResponsiveValue<string | number>
    /**
     * set the space between child elements to 0
     * @example
     * ```tsx
     * <Box space0></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    space0?: ResponsiveBoolean
    /**
     * set the space between child elements to 4
     * @example
     * ```tsx
     * <Box space1></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    space1?: ResponsiveBoolean
    /**
     * set the space between child elements to 8
     * @example
     * ```tsx
     * <Box space2></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    space2?: ResponsiveBoolean
    /**
     * set the space between child elements to 12
     * @example
     * ```tsx
     * <Box space3></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    space3?: ResponsiveBoolean
    /**
     * set the space between child elements to 16
     * @example
     * ```tsx
     * <Box space4></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    space4?: ResponsiveBoolean
    /**
     * set the space between child elements to 20
     * @example
     * ```tsx
     * <Box space5></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    space5?: ResponsiveBoolean
    /**
     * set the space between child elements to 24
     * @example
     * ```tsx
     * <Box space6></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    space6?: ResponsiveBoolean
    /**
     * set the space between child elements to 28
     * @example
     * ```tsx
     * <Box space7></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    space7?: ResponsiveBoolean
    /**
     * set the space between child elements to 32
     * @example
     * ```tsx
     * <Box space8></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    space8?: ResponsiveBoolean
    /**
     * set the space between child elements to 36
     * @example
     * ```tsx
     * <Box space9></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    space9?: ResponsiveBoolean
    /**
     * set the space between child elements to 40
     * @example
     * ```tsx
     * <Box space10></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    space10?: ResponsiveBoolean
    /**
     * set the space between child elements to 44
     * @example
     * ```tsx
     * <Box space11></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    space11?: ResponsiveBoolean
    /**
     * set the space between child elements to 48
     * @example
     * ```tsx
     * <Box space12></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    space12?: ResponsiveBoolean
    /**
     * set the space between child elements to 56
     * @example
     * ```tsx
     * <Box space14></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    space14?: ResponsiveBoolean
    /**
     * set the space between child elements to 64
     * @example
     * ```tsx
     * <Box space16></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    space16?: ResponsiveBoolean
    /**
     * set the space between child elements to 80
     * @example
     * ```tsx
     * <Box space20></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    space20?: ResponsiveBoolean
    /**
     * set the space between child elements to 96
     * @example
     * ```tsx
     * <Box space24></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    space24?: ResponsiveBoolean
    /**
     * set the space between child elements to 112
     * @example
     * ```tsx
     * <Box space28></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    space28?: ResponsiveBoolean
    /**
     * set the space between child elements to 128
     * @example
     * ```tsx
     * <Box space32></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    space32?: ResponsiveBoolean
    /**
     * set the space between child elements to 144
     * @example
     * ```tsx
     * <Box space36></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    space36?: ResponsiveBoolean
    /**
     * set the space between child elements to 160
     * @example
     * ```tsx
     * <Box space40></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    space40?: ResponsiveBoolean
    /**
     * set the space between child elements to 176
     * @example
     * ```tsx
     * <Box space44></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    space44?: ResponsiveBoolean
    /**
     * set the space between child elements to 192
     * @example
     * ```tsx
     * <Box space48></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    space48?: ResponsiveBoolean
    /**
     * set the space between child elements to 208
     * @example
     * ```tsx
     * <Box space52></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    space52?: ResponsiveBoolean
    /**
     * set the space between child elements to 224
     * @example
     * ```tsx
     * <Box space56></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    space56?: ResponsiveBoolean
    /**
     * set the space between child elements to 240
     * @example
     * ```tsx
     * <Box space60></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    space60?: ResponsiveBoolean
    /**
     * set the space between child elements to 256
     * @example
     * ```tsx
     * <Box space64></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    space64?: ResponsiveBoolean
    /**
     * set the space between child elements to 288
     * @example
     * ```tsx
     * <Box space72></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    space72?: ResponsiveBoolean
    /**
     * set the space between child elements to 320
     * @example
     * ```tsx
     * <Box space80></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    space80?: ResponsiveBoolean
    /**
     * set the space between child elements to 384
     * @example
     * ```tsx
     * <Box space96></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    space96?: ResponsiveBoolean
    /**
     * set the space between child elements to some value
     * @example
     * ```tsx
     * <Box spaceX-8></Box>
     * <Box spaceX-1rem></Box>
     * <Box spaceX-4px></Box>
     * <Box spaceX={8}></Box>
     * <Box spaceX={a + b}></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    spaceX?: ResponsiveValue<string | number>
    /**
     * set the space between child elements to 0
     * @example
     * ```tsx
     * <Box spaceX0></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    spaceX0?: ResponsiveBoolean
    /**
     * set the space between child elements to 4
     * @example
     * ```tsx
     * <Box spaceX1></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    spaceX1?: ResponsiveBoolean
    /**
     * set the space between child elements to 8
     * @example
     * ```tsx
     * <Box spaceX2></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    spaceX2?: ResponsiveBoolean
    /**
     * set the space between child elements to 12
     * @example
     * ```tsx
     * <Box spaceX3></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    spaceX3?: ResponsiveBoolean
    /**
     * set the space between child elements to 16
     * @example
     * ```tsx
     * <Box spaceX4></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    spaceX4?: ResponsiveBoolean
    /**
     * set the space between child elements to 20
     * @example
     * ```tsx
     * <Box spaceX5></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    spaceX5?: ResponsiveBoolean
    /**
     * set the space between child elements to 24
     * @example
     * ```tsx
     * <Box spaceX6></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    spaceX6?: ResponsiveBoolean
    /**
     * set the space between child elements to 28
     * @example
     * ```tsx
     * <Box spaceX7></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    spaceX7?: ResponsiveBoolean
    /**
     * set the space between child elements to 32
     * @example
     * ```tsx
     * <Box spaceX8></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    spaceX8?: ResponsiveBoolean
    /**
     * set the space between child elements to 36
     * @example
     * ```tsx
     * <Box spaceX9></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    spaceX9?: ResponsiveBoolean
    /**
     * set the space between child elements to 40
     * @example
     * ```tsx
     * <Box spaceX10></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    spaceX10?: ResponsiveBoolean
    /**
     * set the space between child elements to 44
     * @example
     * ```tsx
     * <Box spaceX11></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    spaceX11?: ResponsiveBoolean
    /**
     * set the space between child elements to 48
     * @example
     * ```tsx
     * <Box spaceX12></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    spaceX12?: ResponsiveBoolean
    /**
     * set the space between child elements to 56
     * @example
     * ```tsx
     * <Box spaceX14></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    spaceX14?: ResponsiveBoolean
    /**
     * set the space between child elements to 64
     * @example
     * ```tsx
     * <Box spaceX16></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    spaceX16?: ResponsiveBoolean
    /**
     * set the space between child elements to 80
     * @example
     * ```tsx
     * <Box spaceX20></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    spaceX20?: ResponsiveBoolean
    /**
     * set the space between child elements to 96
     * @example
     * ```tsx
     * <Box spaceX24></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    spaceX24?: ResponsiveBoolean
    /**
     * set the space between child elements to 112
     * @example
     * ```tsx
     * <Box spaceX28></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    spaceX28?: ResponsiveBoolean
    /**
     * set the space between child elements to 128
     * @example
     * ```tsx
     * <Box spaceX32></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    spaceX32?: ResponsiveBoolean
    /**
     * set the space between child elements to 144
     * @example
     * ```tsx
     * <Box spaceX36></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    spaceX36?: ResponsiveBoolean
    /**
     * set the space between child elements to 160
     * @example
     * ```tsx
     * <Box spaceX40></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    spaceX40?: ResponsiveBoolean
    /**
     * set the space between child elements to 176
     * @example
     * ```tsx
     * <Box spaceX44></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    spaceX44?: ResponsiveBoolean
    /**
     * set the space between child elements to 192
     * @example
     * ```tsx
     * <Box spaceX48></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    spaceX48?: ResponsiveBoolean
    /**
     * set the space between child elements to 208
     * @example
     * ```tsx
     * <Box spaceX52></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    spaceX52?: ResponsiveBoolean
    /**
     * set the space between child elements to 224
     * @example
     * ```tsx
     * <Box spaceX56></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    spaceX56?: ResponsiveBoolean
    /**
     * set the space between child elements to 240
     * @example
     * ```tsx
     * <Box spaceX60></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    spaceX60?: ResponsiveBoolean
    /**
     * set the space between child elements to 256
     * @example
     * ```tsx
     * <Box spaceX64></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    spaceX64?: ResponsiveBoolean
    /**
     * set the space between child elements to 288
     * @example
     * ```tsx
     * <Box spaceX72></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    spaceX72?: ResponsiveBoolean
    /**
     * set the space between child elements to 320
     * @example
     * ```tsx
     * <Box spaceX80></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    spaceX80?: ResponsiveBoolean
    /**
     * set the space between child elements to 384
     * @example
     * ```tsx
     * <Box spaceX96></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    spaceX96?: ResponsiveBoolean
    /**
     * set the space between child elements to some value
     * @example
     * ```tsx
     * <Box spaceY-8></Box>
     * <Box spaceY-1rem></Box>
     * <Box spaceY-4px></Box>
     * <Box spaceY={8}></Box>
     * <Box spaceY={a + b}></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    spaceY?: ResponsiveValue<string | number>
    /**
     * set the space between child elements to 0
     * @example
     * ```tsx
     * <Box spaceY0></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    spaceY0?: ResponsiveBoolean
    /**
     * set the space between child elements to 4
     * @example
     * ```tsx
     * <Box spaceY1></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    spaceY1?: ResponsiveBoolean
    /**
     * set the space between child elements to 8
     * @example
     * ```tsx
     * <Box spaceY2></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    spaceY2?: ResponsiveBoolean
    /**
     * set the space between child elements to 12
     * @example
     * ```tsx
     * <Box spaceY3></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    spaceY3?: ResponsiveBoolean
    /**
     * set the space between child elements to 16
     * @example
     * ```tsx
     * <Box spaceY4></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    spaceY4?: ResponsiveBoolean
    /**
     * set the space between child elements to 20
     * @example
     * ```tsx
     * <Box spaceY5></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    spaceY5?: ResponsiveBoolean
    /**
     * set the space between child elements to 24
     * @example
     * ```tsx
     * <Box spaceY6></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    spaceY6?: ResponsiveBoolean
    /**
     * set the space between child elements to 28
     * @example
     * ```tsx
     * <Box spaceY7></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    spaceY7?: ResponsiveBoolean
    /**
     * set the space between child elements to 32
     * @example
     * ```tsx
     * <Box spaceY8></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    spaceY8?: ResponsiveBoolean
    /**
     * set the space between child elements to 36
     * @example
     * ```tsx
     * <Box spaceY9></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    spaceY9?: ResponsiveBoolean
    /**
     * set the space between child elements to 40
     * @example
     * ```tsx
     * <Box spaceY10></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    spaceY10?: ResponsiveBoolean
    /**
     * set the space between child elements to 44
     * @example
     * ```tsx
     * <Box spaceY11></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    spaceY11?: ResponsiveBoolean
    /**
     * set the space between child elements to 48
     * @example
     * ```tsx
     * <Box spaceY12></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    spaceY12?: ResponsiveBoolean
    /**
     * set the space between child elements to 56
     * @example
     * ```tsx
     * <Box spaceY14></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    spaceY14?: ResponsiveBoolean
    /**
     * set the space between child elements to 64
     * @example
     * ```tsx
     * <Box spaceY16></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    spaceY16?: ResponsiveBoolean
    /**
     * set the space between child elements to 80
     * @example
     * ```tsx
     * <Box spaceY20></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    spaceY20?: ResponsiveBoolean
    /**
     * set the space between child elements to 96
     * @example
     * ```tsx
     * <Box spaceY24></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    spaceY24?: ResponsiveBoolean
    /**
     * set the space between child elements to 112
     * @example
     * ```tsx
     * <Box spaceY28></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    spaceY28?: ResponsiveBoolean
    /**
     * set the space between child elements to 128
     * @example
     * ```tsx
     * <Box spaceY32></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    spaceY32?: ResponsiveBoolean
    /**
     * set the space between child elements to 144
     * @example
     * ```tsx
     * <Box spaceY36></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    spaceY36?: ResponsiveBoolean
    /**
     * set the space between child elements to 160
     * @example
     * ```tsx
     * <Box spaceY40></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    spaceY40?: ResponsiveBoolean
    /**
     * set the space between child elements to 176
     * @example
     * ```tsx
     * <Box spaceY44></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    spaceY44?: ResponsiveBoolean
    /**
     * set the space between child elements to 192
     * @example
     * ```tsx
     * <Box spaceY48></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    spaceY48?: ResponsiveBoolean
    /**
     * set the space between child elements to 208
     * @example
     * ```tsx
     * <Box spaceY52></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    spaceY52?: ResponsiveBoolean
    /**
     * set the space between child elements to 224
     * @example
     * ```tsx
     * <Box spaceY56></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    spaceY56?: ResponsiveBoolean
    /**
     * set the space between child elements to 240
     * @example
     * ```tsx
     * <Box spaceY60></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    spaceY60?: ResponsiveBoolean
    /**
     * set the space between child elements to 256
     * @example
     * ```tsx
     * <Box spaceY64></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    spaceY64?: ResponsiveBoolean
    /**
     * set the space between child elements to 288
     * @example
     * ```tsx
     * <Box spaceY72></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    spaceY72?: ResponsiveBoolean
    /**
     * set the space between child elements to 320
     * @example
     * ```tsx
     * <Box spaceY80></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    spaceY80?: ResponsiveBoolean
    /**
     * set the space between child elements to 384
     * @example
     * ```tsx
     * <Box spaceY96></Box>
     * ```
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    spaceY96?: ResponsiveBoolean
  }
}
