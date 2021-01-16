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
     * <View m="10px 4px"></View>
     * <View m={a + b}></View>
     * ```
     */
    m?: PropValue

    /**
     * Set margin
     *
     * NOTE: Theme restrict. 

     *
     * m0 is `margin: 0px`
     */
    m0?: boolean

    /**
     * Set margin
     *
     * NOTE: Theme restrict. 

     *
     * m1 is `margin: 4px`
     */
    m1?: boolean

    /**
     * Set margin
     *
     * NOTE: Theme restrict. 

     *
     * m2 is `margin: 8px`
     */
    m2?: boolean

    /**
     * Set margin
     *
     * NOTE: Theme restrict. 

     *
     * m3 is `margin: 12px`
     */
    m3?: boolean

    /**
     * Set margin
     *
     * NOTE: Theme restrict. 

     *
     * m4 is `margin: 16px`
     */
    m4?: boolean

    /**
     * Set margin
     *
     * NOTE: Theme restrict. 

     *
     * m5 is `margin: 20px`
     */
    m5?: boolean

    /**
     * Set margin
     *
     * NOTE: Theme restrict. 

     *
     * m6 is `margin: 24px`
     */
    m6?: boolean

    /**
     * Set margin
     *
     * NOTE: Theme restrict. 

     *
     * m7 is `margin: 28px`
     */
    m7?: boolean

    /**
     * Set margin
     *
     * NOTE: Theme restrict. 

     *
     * m8 is `margin: 32px`
     */
    m8?: boolean

    /**
     * Set margin
     *
     * NOTE: Theme restrict. 

     *
     * m9 is `margin: 36px`
     */
    m9?: boolean

    m10?: boolean
    m11?: boolean
    m12?: boolean
    m13?: boolean
    m14?: boolean
    m15?: boolean
    m16?: boolean
    m17?: boolean
    m18?: boolean
    m19?: boolean
    m20?: boolean

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
     * NOTE: Theme restrict. 

     *
     * mx0 is `margin-left: 0px; margin-right: 0px`
     */
    mx0?: boolean

    /**
     * Set marginLeft and marginRight
     *
     * NOTE: Theme restrict. 

     *
     * mx1 is `margin-left: 4px; margin-right: 4px`
     */
    mx1?: boolean

    /**
     * Set marginLeft and marginRight
     *
     * NOTE: Theme restrict. 

     *
     * mx2 is `margin-left: 8px; margin-right: 8px`
     */
    mx2?: boolean

    /**
     * Set marginLeft and marginRight
     *
     * NOTE: Theme restrict. 

     *
     * mx3 is `margin-left: 12px; margin-right: 12px`
     */
    mx3?: boolean

    /**
     * Set marginLeft and marginRight
     *
     * NOTE: Theme restrict. 

     *
     * mx4 is `margin-left: 16px; margin-right: 16px`
     */
    mx4?: boolean

    /**
     * Set marginLeft and marginRight
     *
     * NOTE: Theme restrict. 

     *
     * mx5 is `margin-left: 20px; margin-right: 20px`
     */
    mx5?: boolean

    /**
     * Set marginLeft and marginRight
     *
     * NOTE: Theme restrict. 

     *
     * mx6 is `margin-left: 24px; margin-right: 24px`
     */
    mx6?: boolean

    /**
     * Set marginLeft and marginRight
     *
     * NOTE: Theme restrict. 

     *
     * mx7 is `margin-left: 28px; margin-right: 28px`
     */
    mx7?: boolean

    /**
     * Set marginLeft and marginRight
     *
     * NOTE: Theme restrict. 

     *
     * mx8 is `margin-left: 32px; margin-right: 32px`
     */
    mx8?: boolean

    /**
     * Set marginLeft and marginRight
     *
     * NOTE: Theme restrict. 

     *
     * mx9 is `margin-left: 36px; margin-right: 36px`
     */
    mx9?: boolean

    mx10?: boolean
    mx11?: boolean
    mx12?: boolean
    mx13?: boolean
    mx14?: boolean
    mx15?: boolean
    mx16?: boolean
    mx17?: boolean
    mx18?: boolean
    mx19?: boolean
    mx20?: boolean

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
     * NOTE: Theme restrict. 

     *
     * my0 is `margin-left: 0px; margin-right: 0px`
     */
    my0?: boolean

    /**
     * Set marginTop and marginBottom
     *
     * NOTE: Theme restrict. 

     *
     * my1 is `margin-left: 4px; margin-right: 4px`
     */
    my1?: boolean

    /**
     * Set marginTop and marginBottom
     *
     * NOTE: Theme restrict. 

     *
     * my2 is `margin-left: 8px; margin-right: 8px`
     */
    my2?: boolean

    /**
     * Set marginTop and marginBottom
     *
     * NOTE: Theme restrict. 

     *
     * my3 is `margin-left: 12px; margin-right: 12px`
     */
    my3?: boolean

    /**
     * Set marginTop and marginBottom
     *
     * NOTE: Theme restrict. 

     *
     * my4 is `margin-left: 16px; margin-right: 16px`
     */
    my4?: boolean

    /**
     * Set marginTop and marginBottom
     *
     * NOTE: Theme restrict. 

     *
     * my5 is `margin-left: 20px; margin-right: 20px`
     */
    my5?: boolean

    /**
     * Set marginTop and marginBottom
     *
     * NOTE: Theme restrict. 

     *
     * my6 is `margin-left: 24px; margin-right: 24px`
     */
    my6?: boolean

    /**
     * Set marginTop and marginBottom
     *
     * NOTE: Theme restrict. 

     *
     * my7 is `margin-left: 28px; margin-right: 28px`
     */
    my7?: boolean

    /**
     * Set marginTop and marginBottom
     *
     * NOTE: Theme restrict. 

     *
     * my8 is `margin-left: 32px; margin-right: 32px`
     */
    my8?: boolean

    /**
     * Set marginTop and marginBottom
     *
     * NOTE: Theme restrict. 

     *
     * my9 is `margin-left: 36px; margin-right: 36px`
     */
    my9?: boolean

    my10?: boolean
    my11?: boolean
    my12?: boolean
    my13?: boolean
    my14?: boolean
    my15?: boolean
    my16?: boolean
    my17?: boolean
    my18?: boolean
    my19?: boolean
    my20?: boolean

    /**
     * Set marginTop
     *
     * @example
     * ```tsx
     * <View mt-10></View>
     * <View mt-1rem></View>
     * <View mt-10p></View>
     * <View mt={10}></View>
     * <View mt="10px 4px"></View>
     * <View mt={a + b}></View>
     * ```
     */
    mt?: PropValue

    /**
     * Set marginTop
     *
     * NOTE: Theme restrict. 

     *
     * mt0 is `margin-top: 0px`
     */
    mt0?: boolean

    /**
     * Set marginTop
     *
     * NOTE: Theme restrict. 

     *
     * mt1 is `margin-top: 4px`
     */
    mt1?: boolean

    /**
     * Set marginTop
     *
     * NOTE: Theme restrict. 

     *
     * mt2 is `margin-top: 8px`
     */
    mt2?: boolean

    /**
     * Set marginTop
     *
     * NOTE: Theme restrict. 

     *
     * mt3 is `margin-top: 12px`
     */
    mt3?: boolean

    /**
     * Set marginTop
     *
     * NOTE: Theme restrict. 

     *
     * mt4 is `margin-top: 16px`
     */
    mt4?: boolean

    /**
     * Set marginTop
     *
     * NOTE: Theme restrict. 

     *
     * mt5 is `margin-top: 20px`
     */
    mt5?: boolean

    /**
     * Set marginTop
     *
     * NOTE: Theme restrict. 

     *
     * mt6 is `margin-top: 24px`
     */
    mt6?: boolean

    /**
     * Set marginTop
     *
     * NOTE: Theme restrict. 

     *
     * mt7 is `margin-top: 28px`
     */
    mt7?: boolean

    /**
     * Set marginTop
     *
     * NOTE: Theme restrict. 

     *
     * mt8 is `margin-top: 32px`
     */
    mt8?: boolean

    /**
     * Set marginTop
     *
     * NOTE: Theme restrict. 

     *
     * mt9 is `margin-top: 36px`
     */
    mt9?: boolean

    mt10?: boolean
    mt11?: boolean
    mt12?: boolean
    mt13?: boolean
    mt14?: boolean
    mt15?: boolean
    mt16?: boolean
    mt17?: boolean
    mt18?: boolean
    mt19?: boolean
    mt20?: boolean

    /**
     * Set margin bottom, mb is margin-bottom
     *
     * @example
     * ```tsx
     * <View mb-10></View>
     * <View mb-1rem></View>
     * <View mb-10p></View>
     * <View mb={10}></View>
     * <View mb="10px 4px"></View>
     * <View mb={a + b}></View>
     * ```
     */
    mb?: PropValue

    /**
     * Set marginBottom
     *
     * NOTE: Theme restrict. 

     *
     * mb0 is `margin-bottom: 0px`
     */
    mb0?: boolean

    /**
     * Set marginBottom
     *
     * NOTE: Theme restrict. 

     *
     * mb1 is `margin-bottom: 4px`
     */
    mb1?: boolean

    /**
     * Set marginBottom
     *
     * NOTE: Theme restrict. 

     *
     * mb2 is `margin-bottom: 8px`
     */
    mb2?: boolean

    /**
     * Set marginBottom
     *
     * NOTE: Theme restrict. 

     *
     * mb3 is `margin-bottom: 12px`
     */
    mb3?: boolean

    /**
     * Set marginBottom
     *
     * NOTE: Theme restrict. 

     *
     * mb4 is `margin-bottom: 16px`
     */
    mb4?: boolean

    /**
     * Set marginBottom
     *
     * NOTE: Theme restrict. 

     *
     * mb5 is `margin-bottom: 20px`
     */
    mb5?: boolean

    /**
     * Set marginBottom
     *
     * NOTE: Theme restrict. 

     *
     * mb6 is `margin-bottom: 24px`
     */
    mb6?: boolean

    /**
     * Set marginBottom
     *
     * NOTE: Theme restrict. 

     *
     * mb7 is `margin-bottom: 28px`
     */
    mb7?: boolean

    /**
     * Set marginBottom
     *
     * NOTE: Theme restrict. 

     *
     * mb8 is `margin-bottom: 32px`
     */
    mb8?: boolean

    /**
     * Set marginBottom
     *
     * NOTE: Theme restrict. 

     *
     * mb9 is `margin-bottom: 36px`
     */
    mb9?: boolean

    mb10?: boolean
    mb11?: boolean
    mb12?: boolean
    mb13?: boolean
    mb14?: boolean
    mb15?: boolean
    mb16?: boolean
    mb17?: boolean
    mb18?: boolean
    mb19?: boolean
    mb20?: boolean

    /**
     * Set marginRight
     *
     * @example
     * ```tsx
     * <View mr-10></View>
     * <View mr-1rem></View>
     * <View mr-10p></View>
     * <View mr={10}></View>
     * <View mr="10px 4px"></View>
     * <View mr={a + b}></View>
     * ```
     */
    mr?: PropValue

    /**
     * Set marginRight
     *
     * NOTE: Theme restrict. 

     *
     * mr0 is `margin-right: 0px`
     */
    mr0?: boolean

    /**
     * Set marginRight
     *
     * NOTE: Theme restrict. 

     *
     * mr1 is `margin-right: 4px`
     */
    mr1?: boolean

    /**
     * Set marginRight
     *
     * NOTE: Theme restrict. 

     *
     * mr2 is `margin-right: 8px`
     */
    mr2?: boolean

    /**
     * Set marginRight
     *
     * NOTE: Theme restrict. 

     *
     * mr3 is `margin-right: 12px`
     */
    mr3?: boolean

    /**
     * Set marginRight
     *
     * NOTE: Theme restrict. 

     *
     * mr4 is `margin-right: 12px`
     */
    mr4?: boolean

    /**
     * Set marginRight
     *
     * NOTE: Theme restrict. 

     *
     * mr5 is `margin-right: 16px`
     */
    mr5?: boolean

    /**
     * Set marginRight
     *
     * NOTE: Theme restrict. 

     *
     * mr6 is `margin-right: 24px`
     */
    mr6?: boolean

    /**
     * Set marginRight
     *
     * NOTE: Theme restrict. 

     *
     * mr7 is `margin-right: 28px`
     */
    mr7?: boolean

    /**
     * Set marginRight
     *
     * NOTE: Theme restrict. 

     *
     * mr8 is `margin-right: 32px`
     */
    mr8?: boolean

    /**
     * Set marginRight
     *
     * NOTE: Theme restrict. 

     *
     * mr9 is `margin-right: 36px`
     */
    mr9?: boolean

    mr10?: boolean
    mr11?: boolean
    mr12?: boolean
    mr13?: boolean
    mr14?: boolean
    mr15?: boolean
    mr16?: boolean
    mr17?: boolean
    mr18?: boolean
    mr19?: boolean
    mr20?: boolean

    /**
     * Set marginLeft
     *
     * @example
     * ```tsx
     * <View ml-10></View>
     * <View ml-1rem></View>
     * <View ml-10p></View>
     * <View ml={10}></View>
     * <View ml="10px 4px"></View>
     * <View ml={a + b}></View>
     * ```
     */
    ml?: PropValue

    /**
     * Set marginLeft
     *
     * NOTE: Theme restrict. 

     *
     * ml0 is `margin-left: 0px`
     */
    ml0?: boolean

    /**
     * Set marginLeft
     *
     * NOTE: Theme restrict. 

     *
     * ml1 is `margin-left: 4px`
     */
    ml1?: boolean

    /**
     * Set marginLeft
     *
     * NOTE: Theme restrict. 

     *
     * ml2 is `margin-left: 8px`
     */
    ml2?: boolean

    /**
     * Set marginLeft
     *
     * NOTE: Theme restrict. 

     *
     * ml3 is `margin-left: 12px`
     */
    ml3?: boolean

    /**
     * Set marginLeft
     *
     * NOTE: Theme restrict. 

     *
     * ml4 is `margin-left: 16px`
     */
    ml4?: boolean

    /**
     * Set marginLeft
     *
     * NOTE: Theme restrict. 

     *
     * ml5 is `margin-left: 20px`
     */
    ml5?: boolean

    /**
     * Set marginLeft
     *
     * NOTE: Theme restrict. 

     *
     * ml6 is `margin-left: 24px`
     */
    ml6?: boolean

    /**
     * Set marginLeft
     *
     * NOTE: Theme restrict. 

     *
     * ml7 is `margin-left: 28px`
     */
    ml7?: boolean

    /**
     * Set marginLeft
     *
     * NOTE: Theme restrict. 

     *
     * ml8 is `margin-left: 32px`
     */
    ml8?: boolean

    /**
     * Set marginLeft
     *
     * NOTE: Theme restrict. 

     *
     * ml9 is `margin-left: 36px`
     */
    ml9?: boolean

    ml10?: boolean
    ml11?: boolean
    ml12?: boolean
    ml13?: boolean
    ml14?: boolean
    ml15?: boolean
    ml16?: boolean
    ml17?: boolean
    ml18?: boolean
    ml19?: boolean
    ml20?: boolean
  }
}
