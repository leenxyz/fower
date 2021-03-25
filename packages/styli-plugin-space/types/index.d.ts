import { StyliPlugin } from '@styli/types'

declare const _default: () => StyliPlugin
export default _default

declare module '@styli/types' {
  export interface AtomicProps {
    /**
     * Set children elements space.
     *
     * It will add 'margin-right', 'margin-bottom' to children elements
     *
     * @example
     * ```tsx
     * <View space-1rem></View>
     * <View space="1rem"></View>
     * ```
     */
    space?: PropValue

    /**
     * Set children elements space.
     *
     * NOTE: Theme restrict.
     *
     * space0 is `margin-right: 0px; margin-bottom: 0px`
     */
    space0?: boolean

    /**
     * Set children elements space.
     *
     * NOTE: Theme restrict.

     *
     * space1 is `margin-right: 0px; margin-bottom:0px`
     */
    space1?: boolean

    /**
     * Set children elements space.
     *
     * NOTE: Theme restrict.

     *
     * space2 is `margin-right: 4px; margin-bottom:4px`
     */
    space2?: boolean

    /**
     * Set children elements space.
     *
     * NOTE: Theme restrict.

     *
     * space3 is `margin-right: 12px; margin-bottom:12px`
     */
    space3?: boolean

    /**
     * Set children elements space.
     *
     * NOTE: Theme restrict.

     *
     * space4 is `margin-right: 16px; margin-bottom:16px`
     */
    space4?: boolean

    /**
     * Set children elements space.
     *
     * NOTE: Theme restrict.

     *
     * space5 is `margin-right: 20px; margin-bottom:20px`
     */
    space5?: boolean

    /**
     * Set children elements space.
     *
     * NOTE: Theme restrict.

     *
     * space6 is `margin-right: 24px; margin-bottom:24px`
     */
    space6?: boolean

    /**
     * Set children elements space.
     *
     * NOTE: Theme restrict.

     *
     * space7 is `margin-right: 28px; margin-bottom:28px`
     */
    space7?: boolean

    /**
     * Set children elements space.
     *
     * NOTE: Theme restrict.

     *
     * space8 is `margin-right: 32px; margin-bottom:32px`
     */
    space8?: boolean

    /**
     * Set children elements space.
     *
     * NOTE: Theme restrict.

     *
     * space9 is `margin-right: 36px; margin-bottom:36px`
     */
    space9?: boolean
    space10?: boolean
    space11?: boolean
    space12?: boolean
    space14?: boolean
    space16?: boolean
    space20?: boolean
    space24?: boolean
    space28?: boolean
    space32?: boolean
    space36?: boolean
    space40?: boolean
    space44?: boolean
    space48?: boolean
    space52?: boolean
    space56?: boolean
    space60?: boolean
    space64?: boolean
    space72?: boolean
    space80?: boolean
    space96?: boolean

    /**
     * Set children elements horizontal orientation space.
     *
     * It will add 'margin-right' to children elements
     *
     * @example
     * ```tsx
     * <View spaceX-1rem></View>
     * <View spaceX="1rem"></View>
     * ```
     */
    spaceX?: PropValue

    /**
     * Set children elements horizontal orientation space.
     *
     * NOTE: Theme restrict.

     *
     * spaceX0 is `margin-right: 0px`
     */
    spaceX0?: boolean

    /**
     * Set children elements horizontal orientation space.
     *
     * NOTE: Theme restrict.

     *
     * spaceX1 is `margin-right: 0px`
     */
    spaceX1?: boolean

    /**
     * Set children elements horizontal orientation space.
     *
     * NOTE: Theme restrict.

     *
     * spaceX2 is `margin-right: 4px`
     */
    spaceX2?: boolean

    /**
     * Set children elements horizontal orientation space.
     *
     * NOTE: Theme restrict.

     *
     * spaceX3 is `margin-right: 12px`
     */
    spaceX3?: boolean

    /**
     * Set children elements horizontal orientation space.
     *
     * NOTE: Theme restrict.

     *
     * spaceX4 is `margin-right: 16px`
     */
    spaceX4?: boolean

    /**
     * Set children elements horizontal orientation space.
     *
     * NOTE: Theme restrict.

     *
     * spaceX5 is `margin-right: 20px`
     */
    spaceX5?: boolean

    /**
     * Set children elements horizontal orientation space.
     *
     * NOTE: Theme restrict.

     *
     * spaceX6 is `margin-right: 24px`
     */
    spaceX6?: boolean

    /**
     * Set children elements horizontal orientation space.
     *
     * NOTE: Theme restrict.

     *
     * spaceX7 is `margin-right: 28px`
     */
    spaceX7?: boolean

    /**
     * Set children elements horizontal orientation space.
     *
     * NOTE: Theme restrict.

     *
     * spaceX8 is `margin-right: 32px`
     */
    spaceX8?: boolean

    /**
     * Set children elements horizontal orientation space.
     *
     * NOTE: Theme restrict.

     *
     * spaceX9 is `margin-right: 36px`
     */
    spaceX9?: boolean
    spaceX10?: boolean
    spaceX11?: boolean
    spaceX12?: boolean
    spaceX14?: boolean
    spaceX16?: boolean
    spaceX20?: boolean
    spaceX24?: boolean
    spaceX28?: boolean
    spaceX32?: boolean
    spaceX36?: boolean
    spaceX40?: boolean
    spaceX44?: boolean
    spaceX48?: boolean
    spaceX52?: boolean
    spaceX56?: boolean
    spaceX60?: boolean
    spaceX64?: boolean
    spaceX72?: boolean
    spaceX80?: boolean
    spaceX96?: boolean

    /**
     * Set children elements vertical orientation space.
     *
     * It will add 'margin-bottom' to children elements
     *
     * @example
     * ```tsx
     * <View spaceY-1rem></View>
     * <View spaceY="1rem"></View>
     * ```
     */
    spaceY?: PropValue

    /**
     * Set children elements vertical orientation space.
     *
     * NOTE: Theme restrict.

     *
     * spaceY0 is `margin-bottom: 0px`
     */
    spaceY0?: boolean

    /**
     * Set children elements vertical orientation space.
     *
     * NOTE: Theme restrict.

     *
     * spaceY1 is `margin-bottom: 0px`
     */
    spaceY1?: boolean

    /**
     * Set children elements vertical orientation space.
     *
     * NOTE: Theme restrict.

     *
     * spaceY2 is `margin-bottom: 4px`
     */
    spaceY2?: boolean

    /**
     * Set children elements vertical orientation space.
     *
     * NOTE: Theme restrict.

     *
     * spaceY3 is `margin-bottom: 12px`
     */
    spaceY3?: boolean

    /**
     * Set children elements vertical orientation space.
     *
     * NOTE: Theme restrict.

     *
     * spaceY4 is `margin-bottom: 16px`
     */
    spaceY4?: boolean

    /**
     * Set children elements vertical orientation space.
     *
     * NOTE: Theme restrict.

     *
     * spaceY5 is `margin-bottom: 20px`
     */
    spaceY5?: boolean

    /**
     * Set children elements vertical orientation space.
     *
     * NOTE: Theme restrict.

     *
     * spaceY6 is `margin-bottom: 24px`
     */
    spaceY6?: boolean

    /**
     * Set children elements vertical orientation space.
     *
     * NOTE: Theme restrict.

     *
     * spaceY7 is `margin-bottom: 28px`
     */
    spaceY7?: boolean

    /**
     * Set children elements vertical orientation space.
     *
     * NOTE: Theme restrict.

     *
     * spaceY8 is `margin-bottom: 32px`
     */
    spaceY8?: boolean

    /**
     * Set children elements vertical orientation space.
     *
     * NOTE: Theme restrict.

     *
     * spaceY9 is `margin-bottom: 36px`
     */
    spaceY9?: boolean
    spaceY10?: boolean
    spaceY11?: boolean
    spaceY12?: boolean
    spaceY14?: boolean
    spaceY16?: boolean
    spaceY20?: boolean
    spaceY24?: boolean
    spaceY28?: boolean
    spaceY32?: boolean
    spaceY36?: boolean
    spaceY40?: boolean
    spaceY44?: boolean
    spaceY48?: boolean
    spaceY52?: boolean
    spaceY56?: boolean
    spaceY60?: boolean
    spaceY64?: boolean
    spaceY72?: boolean
    spaceY80?: boolean
    spaceY96?: boolean
  }
}
