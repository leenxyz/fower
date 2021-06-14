import { FowerPlugin } from '@fower/types'

declare const _default: () => FowerPlugin
export default _default

declare module '@fower/types' {
  export interface AtomicProps {
    fillCurrent?: boolean

    strokeCurrent?: boolean

    stroke?: boolean
  }
}