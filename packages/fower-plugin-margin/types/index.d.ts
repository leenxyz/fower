import { FowerPlugin } from '@fower/types'

declare const _default: () => FowerPlugin
export default _default

declare module '@fower/types' {
  export interface AtomicProps {
    /**
     * Set margin
     *
     * @example
     * ```tsx
     * <Box m-10></Box>
     * <Box m-1rem></Box>
     * <Box m-10p></Box>
     * <Box m={10}></Box>
     * <Box m="10px 4px"></Box>
     * <Box m={a + b}></Box>
     * ```
     */
    m?: PropValue

    mXS?: boolean
    mSM?: boolean
    mMD?: boolean
    mLG?: boolean
    mXL?: boolean

    mxXS?: boolean
    mxSM?: boolean
    mxMD?: boolean
    mxLG?: boolean
    mxXL?: boolean

    myXS?: boolean
    mySM?: boolean
    myMD?: boolean
    myLG?: boolean
    myXL?: boolean

    mtXS?: boolean
    mtSM?: boolean
    mtMD?: boolean
    mtLG?: boolean
    mtXL?: boolean

    mrXS?: boolean
    mrSM?: boolean
    mrMD?: boolean
    mrLG?: boolean
    mrXL?: boolean

    mbXS?: boolean
    mbSM?: boolean
    mbMD?: boolean
    mbLG?: boolean
    mbXL?: boolean

    mlXS?: boolean
    mlSM?: boolean
    mlMD?: boolean
    mlLG?: boolean
    mlXL?: boolean

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
    m14?: boolean
    m16?: boolean
    m20?: boolean
    m24?: boolean
    m28?: boolean
    m32?: boolean
    m36?: boolean
    m40?: boolean
    m44?: boolean
    m48?: boolean
    m52?: boolean
    m56?: boolean
    m60?: boolean
    m64?: boolean
    m72?: boolean
    m80?: boolean
    m96?: boolean

    /**
     * Set margin horizontal
     *
     * mx-10 is `margin-left: 10px; margin-right: 10px;`
     *
     * @example
     * ```tsx
     * <Box mx-10></Box>
     * <Box mx-1rem></Box>
     * <Box mx-10p></Box>
     * <Box mx={a + b}></Box>
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
    mx14?: boolean
    mx16?: boolean
    mx20?: boolean
    mx24?: boolean
    mx28?: boolean
    mx32?: boolean
    mx36?: boolean
    mx40?: boolean
    mx44?: boolean
    mx48?: boolean
    mx52?: boolean
    mx56?: boolean
    mx60?: boolean
    mx64?: boolean
    mx72?: boolean
    mx80?: boolean
    mx96?: boolean

    /**
     * Set margin vertical
     *
     * my-10 is `margin-top: 10px; margin-bottom: 10px;`
     *
     * @example
     * ```tsx
     * <Box my-10></Box>
     * <Box my-1rem></Box>
     * <Box my-10p></Box>
     * <Box my={a + b}></Box>
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
    my14?: boolean
    my16?: boolean
    my20?: boolean
    my24?: boolean
    my28?: boolean
    my32?: boolean
    my36?: boolean
    my40?: boolean
    my44?: boolean
    my48?: boolean
    my52?: boolean
    my56?: boolean
    my60?: boolean
    my64?: boolean
    my72?: boolean
    my80?: boolean
    my96?: boolean

    /**
     * Set marginTop
     *
     * @example
     * ```tsx
     * <Box mt-10></Box>
     * <Box mt-1rem></Box>
     * <Box mt-10p></Box>
     * <Box mt={10}></Box>
     * <Box mt="10px 4px"></Box>
     * <Box mt={a + b}></Box>
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
    mt14?: boolean
    mt16?: boolean
    mt20?: boolean
    mt24?: boolean
    mt28?: boolean
    mt32?: boolean
    mt36?: boolean
    mt40?: boolean
    mt44?: boolean
    mt48?: boolean
    mt52?: boolean
    mt56?: boolean
    mt60?: boolean
    mt64?: boolean
    mt72?: boolean
    mt80?: boolean
    mt96?: boolean

    /**
     * Set margin bottom, mb is margin-bottom
     *
     * @example
     * ```tsx
     * <Box mb-10></Box>
     * <Box mb-1rem></Box>
     * <Box mb-10p></Box>
     * <Box mb={10}></Box>
     * <Box mb="10px 4px"></Box>
     * <Box mb={a + b}></Box>
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
    mb14?: boolean
    mb16?: boolean
    mb20?: boolean
    mb24?: boolean
    mb28?: boolean
    mb32?: boolean
    mb36?: boolean
    mb40?: boolean
    mb44?: boolean
    mb48?: boolean
    mb52?: boolean
    mb56?: boolean
    mb60?: boolean
    mb64?: boolean
    mb72?: boolean
    mb80?: boolean
    mb96?: boolean

    /**
     * Set marginRight
     *
     * @example
     * ```tsx
     * <Box mr-10></Box>
     * <Box mr-1rem></Box>
     * <Box mr-10p></Box>
     * <Box mr={10}></Box>
     * <Box mr="10px 4px"></Box>
     * <Box mr={a + b}></Box>
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
    mr14?: boolean
    mr16?: boolean
    mr20?: boolean
    mr24?: boolean
    mr28?: boolean
    mr32?: boolean
    mr36?: boolean
    mr40?: boolean
    mr44?: boolean
    mr48?: boolean
    mr52?: boolean
    mr56?: boolean
    mr60?: boolean
    mr64?: boolean
    mr72?: boolean
    mr80?: boolean
    mr96?: boolean

    /**
     * Set marginLeft
     *
     * @example
     * ```tsx
     * <Box ml-10></Box>
     * <Box ml-1rem></Box>
     * <Box ml-10p></Box>
     * <Box ml={10}></Box>
     * <Box ml="10px 4px"></Box>
     * <Box ml={a + b}></Box>
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
    ml14?: boolean
    ml16?: boolean
    ml20?: boolean
    ml24?: boolean
    ml28?: boolean
    ml32?: boolean
    ml36?: boolean
    ml40?: boolean
    ml44?: boolean
    ml48?: boolean
    ml52?: boolean
    ml56?: boolean
    ml60?: boolean
    ml64?: boolean
    ml72?: boolean
    ml80?: boolean
    ml96?: boolean
  }
}
