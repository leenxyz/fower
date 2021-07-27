import { FowerPlugin, FowerColor } from '@fower/core'

declare const _default: () => FowerPlugin
export default _default

declare module '@fower/atomic-props' {
  export interface AtomicProps {
    gradientX?: boolean | FowerColor[]

    gradientY?: boolean | FowerColor[]
  }
}
