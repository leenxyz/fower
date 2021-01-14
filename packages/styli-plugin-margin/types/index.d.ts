import { StyliPlugin } from '@styli/types'

declare const _default: () => StyliPlugin
export default _default

declare module '@styli/types' {
  export interface AtomicProps {
    /**
     * Set margin
     *
     * @example
     * ```tsx
     * <View m-10></View>
     * <View m-1rem></View>
     * <View m-10p></View>
     * <View m={10}></View>
     * <View m="10px 20px"></View>
     * <View m={a + b}></View>
     * ```
     */
    m?: PropValue

    /**
     * Set margin
     *
     * NOTE: Theme restrict. You must config spacing
     *
     * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
     *
     * m0 is `margin: 10px`
     */
    m0?: boolean

    /**
     * Set margin
     *
     * NOTE: Theme restrict. You must config spacing
     *
     * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
     *
     * m1 is `margin: 20px`
     */
    m1?: boolean

    /**
     * Set margin
     *
     * NOTE: Theme restrict. You must config spacing
     *
     * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
     *
     * m2 is `margin: 30px`
     */
    m2?: boolean

    /**
     * Set margin
     *
     * NOTE: Theme restrict. You must config spacing
     *
     * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
     *
     * m3 is `margin: 40px`
     */
    m3?: boolean

    /**
     * Set margin
     *
     * NOTE: Theme restrict. You must config spacing
     *
     * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
     *
     * m4 is `margin: 50px`
     */
    m4?: boolean

    /**
     * Set margin
     *
     * NOTE: Theme restrict. You must config spacing
     *
     * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
     *
     * m5 is `margin: 60px`
     */
    m5?: boolean

    /**
     * Set margin
     *
     * NOTE: Theme restrict. You must config spacing
     *
     * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
     *
     * m6 is `margin: 70px`
     */
    m6?: boolean

    /**
     * Set margin
     *
     * NOTE: Theme restrict. You must config spacing
     *
     * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
     *
     * m7 is `margin: 80px`
     */
    m7?: boolean

    /**
     * Set margin
     *
     * NOTE: Theme restrict. You must config spacing
     *
     * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
     *
     * m8 is `margin: 90px`
     */
    m8?: boolean

    /**
     * Set margin
     *
     * NOTE: Theme restrict. You must config spacing
     *
     * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
     *
     * m9 is `margin: 100px`
     */
    m9?: boolean

    /**
     * Set margin horizontal
     *
     * mx-10 is `margin-left: 10px; margin-right: 10px;`
     *
     * @example
     * ```tsx
     * <View mx-10></View>
     * <View mx-1rem></View>
     * <View mx-10p></View>
     * <View mx={a + b}></View>
     * ```
     */
    mx?: PropValue

    /**
     * Set marginLeft and marginRight
     *
     * NOTE: Theme restrict. You must config spacing
     *
     * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
     *
     * mx0 is `margin-left: 10px; margin-right: 10px`
     */
    mx0?: boolean

    /**
     * Set marginLeft and marginRight
     *
     * NOTE: Theme restrict. You must config spacing
     *
     * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
     *
     * mx1 is `margin-left: 20px; margin-right: 20px`
     */
    mx1?: boolean

    /**
     * Set marginLeft and marginRight
     *
     * NOTE: Theme restrict. You must config spacing
     *
     * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
     *
     * mx2 is `margin-left: 30px; margin-right: 30px`
     */
    mx2?: boolean

    /**
     * Set marginLeft and marginRight
     *
     * NOTE: Theme restrict. You must config spacing
     *
     * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
     *
     * mx3 is `margin-left: 40px; margin-right: 40px`
     */
    mx3?: boolean

    /**
     * Set marginLeft and marginRight
     *
     * NOTE: Theme restrict. You must config spacing
     *
     * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
     *
     * mx4 is `margin-left: 50px; margin-right: 50px`
     */
    mx4?: boolean

    /**
     * Set marginLeft and marginRight
     *
     * NOTE: Theme restrict. You must config spacing
     *
     * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
     *
     * mx5 is `margin-left: 60px; margin-right: 60px`
     */
    mx5?: boolean

    /**
     * Set marginLeft and marginRight
     *
     * NOTE: Theme restrict. You must config spacing
     *
     * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
     *
     * mx6 is `margin-left: 70px; margin-right: 70px`
     */
    mx6?: boolean

    /**
     * Set marginLeft and marginRight
     *
     * NOTE: Theme restrict. You must config spacing
     *
     * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
     *
     * mx7 is `margin-left: 80px; margin-right: 80px`
     */
    mx7?: boolean

    /**
     * Set marginLeft and marginRight
     *
     * NOTE: Theme restrict. You must config spacing
     *
     * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
     *
     * mx8 is `margin-left: 90px; margin-right: 90px`
     */
    mx8?: boolean

    /**
     * Set marginLeft and marginRight
     *
     * NOTE: Theme restrict. You must config spacing
     *
     * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
     *
     * mx9 is `margin-left: 100px; margin-right: 100px`
     */
    mx9?: boolean

    /**
     * Set margin vertical
     *
     * my-10 is `margin-top: 10px; margin-bottom: 10px;`
     *
     * @example
     * ```tsx
     * <View my-10></View>
     * <View my-1rem></View>
     * <View my-10p></View>
     * <View my={a + b}></View>
     * ```
     */
    my?: PropValue

    /**
     * Set marginTop and marginBottom
     *
     * NOTE: Theme restrict. You must config spacing
     *
     * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
     *
     * my0 is `margin-left: 10px; margin-right: 10px`
     */
    my0?: boolean

    /**
     * Set marginTop and marginBottom
     *
     * NOTE: Theme restrict. You must config spacing
     *
     * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
     *
     * my1 is `margin-left: 20px; margin-right: 20px`
     */
    my1?: boolean

    /**
     * Set marginTop and marginBottom
     *
     * NOTE: Theme restrict. You must config spacing
     *
     * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
     *
     * my2 is `margin-left: 30px; margin-right: 30px`
     */
    my2?: boolean

    /**
     * Set marginTop and marginBottom
     *
     * NOTE: Theme restrict. You must config spacing
     *
     * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
     *
     * my3 is `margin-left: 40px; margin-right: 40px`
     */
    my3?: boolean

    /**
     * Set marginTop and marginBottom
     *
     * NOTE: Theme restrict. You must config spacing
     *
     * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
     *
     * my4 is `margin-left: 50px; margin-right: 50px`
     */
    my4?: boolean

    /**
     * Set marginTop and marginBottom
     *
     * NOTE: Theme restrict. You must config spacing
     *
     * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
     *
     * my5 is `margin-left: 60px; margin-right: 60px`
     */
    my5?: boolean

    /**
     * Set marginTop and marginBottom
     *
     * NOTE: Theme restrict. You must config spacing
     *
     * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
     *
     * my6 is `margin-left: 70px; margin-right: 70px`
     */
    my6?: boolean

    /**
     * Set marginTop and marginBottom
     *
     * NOTE: Theme restrict. You must config spacing
     *
     * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
     *
     * my7 is `margin-left: 80px; margin-right: 80px`
     */
    my7?: boolean

    /**
     * Set marginTop and marginBottom
     *
     * NOTE: Theme restrict. You must config spacing
     *
     * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
     *
     * my8 is `margin-left: 90px; margin-right: 90px`
     */
    my8?: boolean

    /**
     * Set marginTop and marginBottom
     *
     * NOTE: Theme restrict. You must config spacing
     *
     * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
     *
     * my9 is `margin-left: 100px; margin-right: 100px`
     */
    my9?: boolean

    /**
     * Set marginTop
     *
     * @example
     * ```tsx
     * <View mt-10></View>
     * <View mt-1rem></View>
     * <View mt-10p></View>
     * <View mt={10}></View>
     * <View mt="10px 20px"></View>
     * <View mt={a + b}></View>
     * ```
     */
    mt?: PropValue

    /**
     * Set marginTop
     *
     * NOTE: Theme restrict. You must config spacing
     *
     * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
     *
     * mt0 is `margin-top: 10px`
     */
    mt0?: boolean

    /**
     * Set marginTop
     *
     * NOTE: Theme restrict. You must config spacing
     *
     * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
     *
     * mt1 is `margin-top: 20px`
     */
    mt1?: boolean

    /**
     * Set marginTop
     *
     * NOTE: Theme restrict. You must config spacing
     *
     * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
     *
     * mt2 is `margin-top: 30px`
     */
    mt2?: boolean

    /**
     * Set marginTop
     *
     * NOTE: Theme restrict. You must config spacing
     *
     * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
     *
     * mt3 is `margin-top: 40px`
     */
    mt3?: boolean

    /**
     * Set marginTop
     *
     * NOTE: Theme restrict. You must config spacing
     *
     * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
     *
     * mt4 is `margin-top: 50px`
     */
    mt4?: boolean

    /**
     * Set marginTop
     *
     * NOTE: Theme restrict. You must config spacing
     *
     * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
     *
     * mt5 is `margin-top: 60px`
     */
    mt5?: boolean

    /**
     * Set marginTop
     *
     * NOTE: Theme restrict. You must config spacing
     *
     * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
     *
     * mt6 is `margin-top: 70px`
     */
    mt6?: boolean

    /**
     * Set marginTop
     *
     * NOTE: Theme restrict. You must config spacing
     *
     * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
     *
     * mt7 is `margin-top: 80px`
     */
    mt7?: boolean

    /**
     * Set marginTop
     *
     * NOTE: Theme restrict. You must config spacing
     *
     * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
     *
     * mt8 is `margin-top: 90px`
     */
    mt8?: boolean

    /**
     * Set marginTop
     *
     * NOTE: Theme restrict. You must config spacing
     *
     * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
     *
     * mt9 is `margin-top: 100px`
     */
    mt9?: boolean

    /**
     * Set margin bottom, mb is margin-bottom
     *
     * @example
     * ```tsx
     * <View mb-10></View>
     * <View mb-1rem></View>
     * <View mb-10p></View>
     * <View mb={10}></View>
     * <View mb="10px 20px"></View>
     * <View mb={a + b}></View>
     * ```
     */
    mb?: PropValue

    /**
     * Set marginBottom
     *
     * NOTE: Theme restrict. You must config spacing
     *
     * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
     *
     * mb0 is `margin-bottom: 10px`
     */
    mb0?: boolean

    /**
     * Set marginBottom
     *
     * NOTE: Theme restrict. You must config spacing
     *
     * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
     *
     * mb1 is `margin-bottom: 20px`
     */
    mb1?: boolean

    /**
     * Set marginBottom
     *
     * NOTE: Theme restrict. You must config spacing
     *
     * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
     *
     * mb2 is `margin-bottom: 30px`
     */
    mb2?: boolean

    /**
     * Set marginBottom
     *
     * NOTE: Theme restrict. You must config spacing
     *
     * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
     *
     * mb3 is `margin-bottom: 40px`
     */
    mb3?: boolean

    /**
     * Set marginBottom
     *
     * NOTE: Theme restrict. You must config spacing
     *
     * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
     *
     * mb4 is `margin-bottom: 50px`
     */
    mb4?: boolean

    /**
     * Set marginBottom
     *
     * NOTE: Theme restrict. You must config spacing
     *
     * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
     *
     * mb5 is `margin-bottom: 60px`
     */
    mb5?: boolean

    /**
     * Set marginBottom
     *
     * NOTE: Theme restrict. You must config spacing
     *
     * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
     *
     * mb6 is `margin-bottom: 70px`
     */
    mb6?: boolean

    /**
     * Set marginBottom
     *
     * NOTE: Theme restrict. You must config spacing
     *
     * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
     *
     * mb7 is `margin-bottom: 80px`
     */
    mb7?: boolean

    /**
     * Set marginBottom
     *
     * NOTE: Theme restrict. You must config spacing
     *
     * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
     *
     * mb8 is `margin-bottom: 90px`
     */
    mb8?: boolean

    /**
     * Set marginBottom
     *
     * NOTE: Theme restrict. You must config spacing
     *
     * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
     *
     * mb9 is `margin-bottom: 100px`
     */
    mb9?: boolean

    /**
     * Set marginRight
     *
     * @example
     * ```tsx
     * <View mr-10></View>
     * <View mr-1rem></View>
     * <View mr-10p></View>
     * <View mr={10}></View>
     * <View mr="10px 20px"></View>
     * <View mr={a + b}></View>
     * ```
     */
    mr?: PropValue

    /**
     * Set marginRight
     *
     * NOTE: Theme restrict. You must config spacing
     *
     * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
     *
     * mr0 is `margin-right: 10px`
     */
    mr0?: boolean

    /**
     * Set marginRight
     *
     * NOTE: Theme restrict. You must config spacing
     *
     * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
     *
     * mr1 is `margin-right: 20px`
     */
    mr1?: boolean

    /**
     * Set marginRight
     *
     * NOTE: Theme restrict. You must config spacing
     *
     * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
     *
     * mr2 is `margin-right: 30px`
     */
    mr2?: boolean

    /**
     * Set marginRight
     *
     * NOTE: Theme restrict. You must config spacing
     *
     * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
     *
     * mr3 is `margin-right: 40px`
     */
    mr3?: boolean

    /**
     * Set marginRight
     *
     * NOTE: Theme restrict. You must config spacing
     *
     * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
     *
     * mr4 is `margin-right: 40px`
     */
    mr4?: boolean

    /**
     * Set marginRight
     *
     * NOTE: Theme restrict. You must config spacing
     *
     * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
     *
     * mr5 is `margin-right: 50px`
     */
    mr5?: boolean

    /**
     * Set marginRight
     *
     * NOTE: Theme restrict. You must config spacing
     *
     * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
     *
     * mr6 is `margin-right: 70px`
     */
    mr6?: boolean

    /**
     * Set marginRight
     *
     * NOTE: Theme restrict. You must config spacing
     *
     * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
     *
     * mr7 is `margin-right: 80px`
     */
    mr7?: boolean

    /**
     * Set marginRight
     *
     * NOTE: Theme restrict. You must config spacing
     *
     * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
     *
     * mr8 is `margin-right: 90px`
     */
    mr8?: boolean

    /**
     * Set marginRight
     *
     * NOTE: Theme restrict. You must config spacing
     *
     * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
     *
     * mr9 is `margin-right: 100px`
     */
    mr9?: boolean

    /**
     * Set marginLeft
     *
     * @example
     * ```tsx
     * <View ml-10></View>
     * <View ml-1rem></View>
     * <View ml-10p></View>
     * <View ml={10}></View>
     * <View ml="10px 20px"></View>
     * <View ml={a + b}></View>
     * ```
     */
    ml?: PropValue

    /**
     * Set marginLeft
     *
     * NOTE: Theme restrict. You must config spacing
     *
     * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
     *
     * ml0 is `margin-left: 10px`
     */
    ml0?: boolean

    /**
     * Set marginLeft
     *
     * NOTE: Theme restrict. You must config spacing
     *
     * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
     *
     * ml1 is `margin-left: 20px`
     */
    ml1?: boolean

    /**
     * Set marginLeft
     *
     * NOTE: Theme restrict. You must config spacing
     *
     * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
     *
     * ml2 is `margin-left: 30px`
     */
    ml2?: boolean

    /**
     * Set marginLeft
     *
     * NOTE: Theme restrict. You must config spacing
     *
     * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
     *
     * ml3 is `margin-left: 40px`
     */
    ml3?: boolean

    /**
     * Set marginLeft
     *
     * NOTE: Theme restrict. You must config spacing
     *
     * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
     *
     * ml4 is `margin-left: 50px`
     */
    ml4?: boolean

    /**
     * Set marginLeft
     *
     * NOTE: Theme restrict. You must config spacing
     *
     * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
     *
     * ml5 is `margin-left: 60px`
     */
    ml5?: boolean

    /**
     * Set marginLeft
     *
     * NOTE: Theme restrict. You must config spacing
     *
     * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
     *
     * ml6 is `margin-left: 70px`
     */
    ml6?: boolean

    /**
     * Set marginLeft
     *
     * NOTE: Theme restrict. You must config spacing
     *
     * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
     *
     * ml7 is `margin-left: 80px`
     */
    ml7?: boolean

    /**
     * Set marginLeft
     *
     * NOTE: Theme restrict. You must config spacing
     *
     * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
     *
     * ml8 is `margin-left: 90px`
     */
    ml8?: boolean

    /**
     * Set marginLeft
     *
     * NOTE: Theme restrict. You must config spacing
     *
     * if spacing is [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
     *
     * ml9 is `margin-left: 100px`
     */
    ml9?: boolean
  }
}
