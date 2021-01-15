import { StyliPlugin } from '@styli/types'

declare const _default: () => StyliPlugin
export default _default

declare module '@styli/types' {
  export interface AtomicProps {
    /**
     * Set children element space.
     *
     * It will add 'margin-right', 'margin-bottom' to children element
     *
     * @example
     * ```tsx
     * <View space-1rem></View>
     * <View space="1rem"></View>
     * ```
     */
    space?: PropValue

    /**
     * Set children element space.
     *
     * NOTE: Theme restrict. You must config spacing
     *
     * if spacing is [0, 10, 20, 30, 40, 50, 60, 70, 80, 90]
     *
     * space0 is `margin-right: 0px; margin-bottom: 0px`
     */
    space0?: boolean

    /**
     * Set children element space.
     *
     * NOTE: Theme restrict. You must config spacing
     *
     * if spacing is [0, 10, 20, 30, 40, 50, 60, 70, 80, 90]
     *
     * space1 is `margin-right: 10px; margin-bottom:10px`
     */
    space1?: boolean

    /**
     * Set children element space.
     *
     * NOTE: Theme restrict. You must config spacing
     *
     * if spacing is [0, 10, 20, 30, 40, 50, 60, 70, 80, 90]
     *
     * space2 is `margin-right: 20px; margin-bottom:20px`
     */
    space2?: boolean

    /**
     * Set children element space.
     *
     * NOTE: Theme restrict. You must config spacing
     *
     * if spacing is [0, 10, 20, 30, 40, 50, 60, 70, 80, 90]
     *
     * space3 is `margin-right: 30px; margin-bottom:30px`
     */
    space3?: boolean

    /**
     * Set children element space.
     *
     * NOTE: Theme restrict. You must config spacing
     *
     * if spacing is [0, 10, 20, 30, 40, 50, 60, 70, 80, 90]
     *
     * space4 is `margin-right: 40px; margin-bottom:40px`
     */
    space4?: boolean

    /**
     * Set children element space.
     *
     * NOTE: Theme restrict. You must config spacing
     *
     * if spacing is [0, 10, 20, 30, 40, 50, 60, 70, 80, 90]
     *
     * space5 is `margin-right: 50px; margin-bottom:50px`
     */
    space5?: boolean

    /**
     * Set children element space.
     *
     * NOTE: Theme restrict. You must config spacing
     *
     * if spacing is [0, 10, 20, 30, 40, 50, 60, 70, 80, 90]
     *
     * space6 is `margin-right: 60px; margin-bottom:60px`
     */
    space6?: boolean

    /**
     * Set children element space.
     *
     * NOTE: Theme restrict. You must config spacing
     *
     * if spacing is [0, 10, 20, 30, 40, 50, 60, 70, 80, 90]
     *
     * space7 is `margin-right: 70px; margin-bottom:70px`
     */
    space7?: boolean

    /**
     * Set children element space.
     *
     * NOTE: Theme restrict. You must config spacing
     *
     * if spacing is [0, 10, 20, 30, 40, 50, 60, 70, 80, 90]
     *
     * space8 is `margin-right: 80px; margin-bottom:80px`
     */
    space8?: boolean

    /**
     * Set children element space.
     *
     * NOTE: Theme restrict. You must config spacing
     *
     * if spacing is [0, 10, 20, 30, 40, 50, 60, 70, 80, 90]
     *
     * space9 is `margin-right: 90px; margin-bottom:90px`
     */
    space9?: boolean

    /**
     * Set children element horizontal orientation space.
     *
     * It will add 'margin-right' to children element
     *
     * @example
     * ```tsx
     * <View spaceX-1rem></View>
     * <View spaceX="1rem"></View>
     * ```
     */
    spaceX?: PropValue

    /**
     * Set children element horizontal orientation space.
     *
     * NOTE: Theme restrict. You must config spacing
     *
     * if spacing is [0, 10, 20, 30, 40, 50, 60, 70, 80, 90]
     *
     * spaceX0 is `margin-right: 0px`
     */
    spaceX0?: boolean

    /**
     * Set children element horizontal orientation space.
     *
     * NOTE: Theme restrict. You must config spacing
     *
     * if spacing is [0, 10, 20, 30, 40, 50, 60, 70, 80, 90]
     *
     * spaceX1 is `margin-right: 10px`
     */
    spaceX1?: boolean

    /**
     * Set children element horizontal orientation space.
     *
     * NOTE: Theme restrict. You must config spacing
     *
     * if spacing is [0, 10, 20, 30, 40, 50, 60, 70, 80, 90]
     *
     * spaceX2 is `margin-right: 20px`
     */
    spaceX2?: boolean

    /**
     * Set children element horizontal orientation space.
     *
     * NOTE: Theme restrict. You must config spacing
     *
     * if spacing is [0, 10, 20, 30, 40, 50, 60, 70, 80, 90]
     *
     * spaceX3 is `margin-right: 30px`
     */
    spaceX3?: boolean

    /**
     * Set children element horizontal orientation space.
     *
     * NOTE: Theme restrict. You must config spacing
     *
     * if spacing is [0, 10, 20, 30, 40, 50, 60, 70, 80, 90]
     *
     * spaceX4 is `margin-right: 40px`
     */
    spaceX4?: boolean

    /**
     * Set children element horizontal orientation space.
     *
     * NOTE: Theme restrict. You must config spacing
     *
     * if spacing is [0, 10, 20, 30, 40, 50, 60, 70, 80, 90]
     *
     * spaceX5 is `margin-right: 50px`
     */
    spaceX5?: boolean

    /**
     * Set children element horizontal orientation space.
     *
     * NOTE: Theme restrict. You must config spacing
     *
     * if spacing is [0, 10, 20, 30, 40, 50, 60, 70, 80, 90]
     *
     * spaceX6 is `margin-right: 60px`
     */
    spaceX6?: boolean

    /**
     * Set children element horizontal orientation space.
     *
     * NOTE: Theme restrict. You must config spacing
     *
     * if spacing is [0, 10, 20, 30, 40, 50, 60, 70, 80, 90]
     *
     * spaceX7 is `margin-right: 70px`
     */
    spaceX7?: boolean

    /**
     * Set children element horizontal orientation space.
     *
     * NOTE: Theme restrict. You must config spacing
     *
     * if spacing is [0, 10, 20, 30, 40, 50, 60, 70, 80, 90]
     *
     * spaceX8 is `margin-right: 80px`
     */
    spaceX8?: boolean

    /**
     * Set children element horizontal orientation space.
     *
     * NOTE: Theme restrict. You must config spacing
     *
     * if spacing is [0, 10, 20, 30, 40, 50, 60, 70, 80, 90]
     *
     * spaceX9 is `margin-right: 90px`
     */
    spaceX9?: boolean

    /**
     * Set children element vertical orientation space.
     *
     * It will add 'margin-bottom' to children element
     *
     * @example
     * ```tsx
     * <View spaceY-1rem></View>
     * <View spaceY="1rem"></View>
     * ```
     */
    spaceY?: PropValue

    /**
     * Set children element vertical orientation space.
     *
     * NOTE: Theme restrict. You must config spacing
     *
     * if spacing is [0, 10, 20, 30, 40, 50, 60, 70, 80, 90]
     *
     * spaceY0 is `margin-bottom: 0px`
     */
    spaceY0?: boolean

    /**
     * Set children element vertical orientation space.
     *
     * NOTE: Theme restrict. You must config spacing
     *
     * if spacing is [0, 10, 20, 30, 40, 50, 60, 70, 80, 90]
     *
     * spaceY1 is `margin-bottom: 10px`
     */
    spaceY1?: boolean

    /**
     * Set children element vertical orientation space.
     *
     * NOTE: Theme restrict. You must config spacing
     *
     * if spacing is [0, 10, 20, 30, 40, 50, 60, 70, 80, 90]
     *
     * spaceY2 is `margin-bottom: 20px`
     */
    spaceY2?: boolean

    /**
     * Set children element vertical orientation space.
     *
     * NOTE: Theme restrict. You must config spacing
     *
     * if spacing is [0, 10, 20, 30, 40, 50, 60, 70, 80, 90]
     *
     * spaceY3 is `margin-bottom: 30px`
     */
    spaceY3?: boolean

    /**
     * Set children element vertical orientation space.
     *
     * NOTE: Theme restrict. You must config spacing
     *
     * if spacing is [0, 10, 20, 30, 40, 50, 60, 70, 80, 90]
     *
     * spaceY4 is `margin-bottom: 40px`
     */
    spaceY4?: boolean

    /**
     * Set children element vertical orientation space.
     *
     * NOTE: Theme restrict. You must config spacing
     *
     * if spacing is [0, 10, 20, 30, 40, 50, 60, 70, 80, 90]
     *
     * spaceY5 is `margin-bottom: 50px`
     */
    spaceY5?: boolean

    /**
     * Set children element vertical orientation space.
     *
     * NOTE: Theme restrict. You must config spacing
     *
     * if spacing is [0, 10, 20, 30, 40, 50, 60, 70, 80, 90]
     *
     * spaceY6 is `margin-bottom: 60px`
     */
    spaceY6?: boolean

    /**
     * Set children element vertical orientation space.
     *
     * NOTE: Theme restrict. You must config spacing
     *
     * if spacing is [0, 10, 20, 30, 40, 50, 60, 70, 80, 90]
     *
     * spaceY7 is `margin-bottom: 70px`
     */
    spaceY7?: boolean

    /**
     * Set children element vertical orientation space.
     *
     * NOTE: Theme restrict. You must config spacing
     *
     * if spacing is [0, 10, 20, 30, 40, 50, 60, 70, 80, 90]
     *
     * spaceY8 is `margin-bottom: 80px`
     */
    spaceY8?: boolean

    /**
     * Set children element vertical orientation space.
     *
     * NOTE: Theme restrict. You must config spacing
     *
     * if spacing is [0, 10, 20, 30, 40, 50, 60, 70, 80, 90]
     *
     * spaceY9 is `margin-bottom: 90px`
     */
    spaceY9?: boolean
  }
}
