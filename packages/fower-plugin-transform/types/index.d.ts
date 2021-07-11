import { FowerPlugin } from '@fower/core'

declare const _default: () => FowerPlugin
export default _default

declare module '@fower/atomic-props' {
  export interface AtomicProps {
    scale?: boolean | number

    rotate?: boolean | number

    translateX?: boolean | number | string

    translateY?: boolean | number | string

    // translateZ?: boolean | number | string

    skewX?: boolean | number

    skewY?: boolean | number

    origin?: boolean | string | number
  }
}
