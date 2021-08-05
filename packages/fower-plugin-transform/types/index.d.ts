import { FowerPlugin, ResponsiveValue } from '@fower/core'

declare const _default: () => FowerPlugin
export default _default

declare module '@fower/atomic-props' {
  export interface AtomicProps {
    scale?: ResponsiveValue<number>

    rotate?: ResponsiveValue<number>

    translateX?: ResponsiveValue<number | string>

    translateY?: ResponsiveValue<number | string>

    // translateZ?: boolean | number | string

    skewX?: ResponsiveValue<number>

    skewY?: ResponsiveValue<number>

    origin?: ResponsiveValue<number | string>
  }
}
