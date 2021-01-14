import { StyliPlugin } from '@styli/types'

declare const _default: () => StyliPlugin
export default _default

declare module '@styli/types' {
  export interface AtomicProps {
    space?: PropValue
    spaceX?: PropValue
    spaceY?: PropValue
  }
}
