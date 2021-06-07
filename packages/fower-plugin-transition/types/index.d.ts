import { FowerPlugin } from '@fower/types'

declare const _default: () => FowerPlugin
export default _default

declare module '@fower/types' {
  export interface AtomicProps {
    transition?: boolean

    transitionNone?: boolean

    transitionAll?: boolean

    transitionCommon?: boolean

    transitionColors?: boolean

    transitionOpacity?: boolean

    transitionShadow?: boolean

    transitionTransform?: boolean

    duration?: boolean | number

    delay?: boolean | number

    easeLinear?: boolean

    easeIn?: boolean

    easeOut?: boolean

    easeInOut?: boolean
  }
}
