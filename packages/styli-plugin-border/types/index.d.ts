import { StyliPlugin, Property, StyliColor } from '@styli/types'

declare const _default: () => StyliPlugin
export default _default

declare module '@styli/types' {
  export interface AtomicProps {
    /**
     * Set borderRadius
     *
     * @example
     * ```tsx
     * <View rounded-10></View>
     * <View rounded-10rem></View>
     * <View rounded-100p></View>
     * <View rounded="10"></View>
     * ```
     */
    rounded?: PropValue

    /**
     * Set borderRadius to 0
     *
     * roundedNone is `border-radius: 0;`
     *
     * @example
     * ```tsx
     * <View roundedNone></View>
     * ```
     */
    roundedNone?: PropValue

    /**
     * Set borderRadius to 9999px
     *
     * roundedFull is `border-radius: 9999px;`
     *
     * @example
     * ```tsx
     * <View roundedFull></View>
     * ```
     */
    roundedFull?: PropValue

    /**
     * Set borderTopLeftRadius and borderTopRightRadius
     *
     * roundedT-10 is `border-top-left-radius: 10px; border-top-right-radius: 10px;`
     *
     * @example
     * ```tsx
     * <View roundedT-10></View>
     * <View roundedT-10rem></View>
     * <View roundedT="10"></View>
     * ```
     */
    roundedT?: PropValue

    /**
     * Set borderTopRightRadius and borderBottomRightRadius
     *
     * roundedR-10 is `border-top-right-radius: 10px; border-bottom-right-radius: 10px;`
     *
     * @example
     * ```tsx
     * <View roundedR-10></View>
     * <View roundedR-10p></View>
     * <View roundedR="10"></View>
     * ```
     */
    roundedR?: PropValue

    /**
     * Set borderBottomLeftRadius and borderBottomRightRadius
     *
     * roundedB-10 is `border-bottom-left-radius: 10px; border-bottom-right-radius: 10px;`
     *
     * @example
     * ```tsx
     * <View roundedB-10></View>
     * <View roundedB-10p></View>
     * <View roundedB="10"></View>
     * ```
     */
    roundedB?: PropValue

    /**
     * Set borderTopLeftRadius and borderBottomLeftRadius
     *
     * roundedB-10 is `border-top-left-radius: 10px; border-bottom-left-radius: 10px;`
     *
     * @example
     * ```tsx
     * <View roundedL-10></View>
     * <View roundedL-10p></View>
     * <View roundedL="10"></View>
     * ```
     */
    roundedL?: PropValue

    /**
     * Set borderTopLeftRadius
     *
     * roundedTL-10 is `border-top-left-radius: 10px;`
     *
     * @example
     * ```tsx
     * <View roundedTL-10></View>
     * <View roundedTL-10p></View>
     * <View roundedTL="10"></View>
     * ```
     */
    roundedTL?: PropValue

    /**
     * Set borderTopRightRadius
     *
     * roundedTR-10 is `border-top-right-radius: 10px;`
     *
     * @example
     * ```tsx
     * <View roundedTR-10></View>
     * <View roundedTR-10p></View>
     * <View roundedTR="10"></View>
     * ```
     */
    roundedTR?: PropValue

    /**
     * Set borderBottomLeftRadius
     *
     * roundedBL-10 is `border-bottom-left-radius: 10px;`
     *
     * @example
     * ```tsx
     * <View roundedBL-10></View>
     * <View roundedBL-10p></View>
     * <View roundedBL="10"></View>
     * ```
     */
    roundedBL?: PropValue

    /**
     * Set borderBottomRightRadius
     *
     * roundedBR-10 is `border-bottom-right-radius: 10px;`
     *
     * @example
     * ```tsx
     * <View roundedBR-10></View>
     * <View roundedBR-10p></View>
     * <View roundedBR="10"></View>
     * ```
     */
    roundedBR?: PropValue

    /**
     * Set border
     *
     * @example
     * ```tsx
     * <View border-10></View>
     * <View border={10}></View>
     * <View border="10"></View>
     * ```
     */
    border?: Property.Border | boolean

    /**
     * Set borderTop
     *
     * @example
     * ```tsx
     * <View borderT-10></View>
     * <View borderT={10}></View>
     * <View borderT="1px solid red"></View>
     * ```
     */
    borderT?: boolean | number | string

    /**
     * Set borderRight
     *
     * @example
     * ```tsx
     * <View borderR-10></View>
     * <View borderR={10}></View>
     * <View borderR="1px solid red"></View>
     * ```
     */
    borderR?: boolean | number | string

    /**
     * Set borderBottom
     *
     * @example
     * ```tsx
     * <View borderB-10></View>
     * <View borderB={10}></View>
     * <View borderB="1px solid red"></View>
     * ```
     */
    borderB?: boolean | number | string

    /**
     * Set borderLeft
     *
     * @example
     * ```tsx
     * <View borderL-10></View>
     * <View borderL={10}></View>
     * <View borderL="1px solid red"></View>
     * ```
     */
    borderL?: boolean | number | string

    /**
     * Set borderStyle
     *
     * @example
     * ```tsx
     * <View borderStyle="none"></View>
     * ```
     */
    borderStyle?: Property.BorderStyle | boolean

    /**
     * Set borderStyle to solid
     *
     * borderSolid is `border-style: solid;`
     *
     * @example
     * ```tsx
     * <View borderSolid></View>
     * ```
     */
    borderSolid?: boolean

    /**
     * Set borderStyle to dashed
     *
     * borderDashed is `border-style: dashed;`
     *
     * @example
     * ```tsx
     * <View borderDashed></View>
     * ```
     */
    borderDashed?: boolean

    /**
     * Set borderStyle to dotted
     *
     * borderDotted is `border-style: dotted;`
     *
     * @example
     * ```tsx
     * <View borderDotted></View>
     * ```
     */
    borderDotted?: boolean

    /**
     * Set borderStyle to double
     *
     * borderDouble is `border-style: double;`
     *
     * @example
     * ```tsx
     * <View borderDouble></View>
     * ```
     */
    borderDouble?: boolean

    /**
     * Set borderStyle to none
     *
     * borderNone is `border-style: none;`
     *
     * @example
     * ```tsx
     * <View borderNone></View>
     * ```
     */
    borderNone?: boolean

    /**
     * Set borderWidth
     *
     * @example
     * ```tsx
     * <View borderWidth-10></View>
     * <View borderWidth-10px></View>
     * <View borderWidth="10px"></View>
     * <View borderWidth={10}></View>
     * ```
     */
    borderWidth?: Property.BorderWidth | number | boolean

    /**
     * Set borderColor
     *
     * @example
     * ```tsx
     * <View borderColor="gray20"></View>
     * ```
     */
    borderColor?: StyliColor | boolean

    /**
     * Set borderTopWidth
     *
     * @example
     * ```tsx
     * <View borderTopWidth-1></View>
     * <View borderTopWidth="1"></View>
     * <View borderTopWidth="1px"></View>
     * ```
     */
    borderTopWidth?: Property.BorderTopWidth | number | boolean

    /**
     * Set borderTopColor
     *
     * @example
     * ```tsx
     * <View borderTopColor="gray20"></View>
     * ```
     */
    borderTopColor?: StyliColor | boolean

    /**
     * Set borderTopStyle
     *
     * @example
     * ```tsx
     * <View borderTopStyle="solid"></View>
     * ```
     */
    borderTopStyle?: Property.BorderTopStyle | boolean

    /**
     * Set borderLeftWidth
     *
     * @example
     * ```tsx
     * <View borderLeftWidth-1></View>
     * <View borderLeftWidth="1"></View>
     * <View borderLeftWidth="1px"></View>
     * ```
     */
    borderLeftWidth?: Property.BorderLeftWidth | number | boolean

    /**
     * Set borderLeftColor
     *
     * @example
     * ```tsx
     * <View borderLeftColor="gray20"></View>
     * ```
     */
    borderLeftColor?: StyliColor | boolean

    /**
     * Set borderLeftStyle
     *
     * @example
     * ```tsx
     * <View borderLeftStyle="solid"></View>
     * ```
     */
    borderLeftStyle?: Property.BorderLeftStyle | boolean

    /**
     * Set borderBottomWidth
     *
     * @example
     * ```tsx
     * <View borderBottomWidth-1></View>
     * <View borderBottomWidth="1"></View>
     * <View borderBottomWidth="1px"></View>
     * ```
     */
    borderBottomWidth?: Property.BorderBottomWidth | number | boolean

    /**
     * Set borderBottomColor
     *
     * @example
     * ```tsx
     * <View borderBottomColor="gray20"></View>
     * ```
     */
    borderBottomColor?: StyliColor | boolean

    /**
     * Set borderBottomStyle
     *
     * @example
     * ```tsx
     * <View borderBottomStyle="solid"></View>
     * ```
     */
    borderBottomStyle?: Property.BorderBottomStyle | boolean

    /**
     * Set borderRightWidth
     *
     * @example
     * ```tsx
     * <View borderRightWidth-1></View>
     * <View borderRightWidth="1"></View>
     * <View borderRightWidth="1px"></View>
     * ```
     */
    borderRightWidth?: Property.BorderRightWidth | number | boolean

    /**
     * Set borderRightColor
     *
     * @example
     * ```tsx
     * <View borderRightColor="gray20"></View>
     * ```
     */
    borderRightColor?: StyliColor | boolean

    /**
     * Set borderRightStyle
     *
     * @example
     * ```tsx
     * <View borderRightStyle="solid"></View>
     * ```
     */
    borderRightStyle?: Property.BorderRightStyle | boolean

    borderBlack?: boolean

    borderWhite?: boolean

    borderBrand?: boolean

    borderPrimary?: boolean

    borderSecondary?: boolean

    borderInfo?: boolean

    borderWarning?: boolean

    borderError?: boolean

    borderSuccess?: boolean

    borderGray?: boolean
    borderGray10?: boolean // #f7fafc
    borderGray20?: boolean // #edf2f7
    borderGray30?: boolean // #e2e8f0
    borderGray40?: boolean // #cbd5e0
    borderGray50?: boolean // #a0aec0
    borderGray60?: boolean // #718096
    borderGray70?: boolean // #4a5568
    borderGray80?: boolean // #2d3748
    borderGray90?: boolean // #1a202c

    borderRed?: boolean
    borderRed10?: boolean // #fff5f5
    borderRed20?: boolean // #fed7d7
    borderRed30?: boolean // #feb2b2
    borderRed40?: boolean // #fc8181
    borderRed50?: boolean // #f56565
    borderRed60?: boolean // #e53e3e
    borderRed70?: boolean // #c53030
    borderRed80?: boolean // #9b2c2c
    borderRed90?: boolean // #742a2a

    borderOrange?: boolean // orange
    borderOrange10?: boolean // #fffaf0
    borderOrange20?: boolean // #feebc8
    borderOrange30?: boolean // #fbd38d
    borderOrange40?: boolean // #f6ad55
    borderOrange50?: boolean // #ed8936
    borderOrange60?: boolean // #dd6b20
    borderOrange70?: boolean // #c05621
    borderOrange80?: boolean // #9c4221
    borderOrange90?: boolean // #7b341e

    borderYellow?: boolean
    borderYellow10?: boolean // #fffff0
    borderYellow20?: boolean // #fefcbf
    borderYellow30?: boolean // #faf089
    borderYellow40?: boolean // #f6e05e
    borderYellow50?: boolean // #ecc94b
    borderYellow60?: boolean // #d69e2e
    borderYellow70?: boolean // #b7791f
    borderYellow80?: boolean // #975a16
    borderYellow90?: boolean // #744210

    borderGreen?: boolean
    borderGreen10?: boolean // #f0fff4
    borderGreen20?: boolean // #c6f6d5
    borderGreen30?: boolean // #9ae6b4
    borderGreen40?: boolean // #68d391
    borderGreen50?: boolean // #48bb78
    borderGreen60?: boolean // #38a169
    borderGreen70?: boolean // #2f855a
    borderGreen80?: boolean // #276749
    borderGreen90?: boolean // #22543d

    borderTeal?: boolean
    borderTeal10?: boolean // #e6fffa
    borderTeal20?: boolean // #b2f5ea
    borderTeal30?: boolean // #81e6d9
    borderTeal40?: boolean // #4fd1c5
    borderTeal50?: boolean // #38b2ac
    borderTeal60?: boolean // #319795
    borderTeal70?: boolean // #2c7a7b
    borderTeal80?: boolean // #285e61
    borderTeal90?: boolean // #234e52

    borderBlue?: boolean
    borderBlue10?: boolean // #ebf8ff
    borderBlue20?: boolean // #bee3f8
    borderBlue30?: boolean // #90cdf4
    borderBlue40?: boolean // #63b3ed
    borderBlue50?: boolean // #4299e1
    borderBlue60?: boolean // #3182ce
    borderBlue70?: boolean // #2b6cb0
    borderBlue80?: boolean // #2c5282
    borderBlue90?: boolean // #2a4365

    borderIndigo?: boolean
    borderIndigo10?: boolean // #ebf4ff
    borderIndigo20?: boolean // #c3dafe
    borderIndigo30?: boolean // #a3bffa
    borderIndigo40?: boolean // #7f9cf5
    borderIndigo50?: boolean // #667eea
    borderIndigo60?: boolean // #5a67d8
    borderIndigo70?: boolean // #4c51bf
    borderIndigo80?: boolean // #434190
    borderIndigo90?: boolean // #3c366b

    borderPurple?: boolean
    borderPurple10?: boolean // #faf5ff
    borderPurple20?: boolean // #e9d8fd
    borderPurple30?: boolean // #d6bcfa
    borderPurple40?: boolean // #b794f4
    borderPurple50?: boolean // #9f7aea
    borderPurple60?: boolean // #805ad5
    borderPurple70?: boolean // #6b46c1
    borderPurple80?: boolean // #553c9a
    borderPurple90?: boolean // #44337a

    borderPink?: boolean
    borderPink10?: boolean // #fff5f7
    borderPink20?: boolean // #fed7e2
    borderPink30?: boolean // #fbb6ce
    borderPink40?: boolean // #f687b3
    borderPink50?: boolean // #ed64a6
    borderPink60?: boolean // #d53f8c
    borderPink70?: boolean // #b83280
    borderPink80?: boolean // #97266d
    borderPink90?: boolean // #702459
  }
}
