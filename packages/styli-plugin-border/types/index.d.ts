import { StyliPlugin } from '@styli/types'
import * as CSS from 'csstype'

declare const _default: () => StyliPlugin
export default _default

declare module '@styli/types' {
  export interface AtomicProps {
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
    border?: CSS.Property.Border | boolean

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
    borderStyle?: CSS.Property.BorderStyle | boolean

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
    borderWidth?: CSS.Property.BorderWidth | number | boolean

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
    borderTopWidth?: CSS.Property.BorderTopWidth | number | boolean

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
    borderTopStyle?: CSS.Property.BorderTopStyle | boolean

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
    borderLeftWidth?: CSS.Property.BorderLeftWidth | number | boolean

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
    borderLeftStyle?: CSS.Property.BorderLeftStyle | boolean

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
    borderBottomWidth?: CSS.Property.BorderBottomWidth | number | boolean

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
    borderBottomStyle?: CSS.Property.BorderBottomStyle | boolean

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
    borderRightWidth?: CSS.Property.BorderRightWidth | number | boolean

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
    borderRightStyle?: CSS.Property.BorderRightStyle | boolean

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
    borderGray100?: boolean // #f7fafc
    borderGray200?: boolean // #edf2f7
    borderGray300?: boolean // #e2e8f0
    borderGray400?: boolean // #cbd5e0
    borderGray500?: boolean // #a0aec0
    borderGray600?: boolean // #718096
    borderGray700?: boolean // #4a5568
    borderGray800?: boolean // #2d3748
    borderGray900?: boolean // #1a202c

    borderRed?: boolean
    borderRed100?: boolean // #fff5f5
    borderRed200?: boolean // #fed7d7
    borderRed300?: boolean // #feb2b2
    borderRed400?: boolean // #fc8181
    borderRed500?: boolean // #f56565
    borderRed600?: boolean // #e53e3e
    borderRed700?: boolean // #c53030
    borderRed800?: boolean // #9b2c2c
    borderRed900?: boolean // #742a2a

    borderOrange?: boolean // orange
    borderOrange100?: boolean // #fffaf0
    borderOrange200?: boolean // #feebc8
    borderOrange300?: boolean // #fbd38d
    borderOrange400?: boolean // #f6ad55
    borderOrange500?: boolean // #ed8936
    borderOrange600?: boolean // #dd6b20
    borderOrange700?: boolean // #c05621
    borderOrange800?: boolean // #9c4221
    borderOrange900?: boolean // #7b341e

    borderYellow?: boolean
    borderYellow100?: boolean // #fffff0
    borderYellow200?: boolean // #fefcbf
    borderYellow300?: boolean // #faf089
    borderYellow400?: boolean // #f6e05e
    borderYellow500?: boolean // #ecc94b
    borderYellow600?: boolean // #d69e2e
    borderYellow700?: boolean // #b7791f
    borderYellow800?: boolean // #975a16
    borderYellow900?: boolean // #744210

    borderGreen?: boolean
    borderGreen100?: boolean // #f0fff4
    borderGreen200?: boolean // #c6f6d5
    borderGreen300?: boolean // #9ae6b4
    borderGreen400?: boolean // #68d391
    borderGreen500?: boolean // #48bb78
    borderGreen600?: boolean // #38a169
    borderGreen700?: boolean // #2f855a
    borderGreen800?: boolean // #276749
    borderGreen900?: boolean // #22543d

    borderTeal?: boolean
    borderTeal100?: boolean // #e6fffa
    borderTeal200?: boolean // #b2f5ea
    borderTeal300?: boolean // #81e6d9
    borderTeal400?: boolean // #4fd1c5
    borderTeal500?: boolean // #38b2ac
    borderTeal600?: boolean // #319795
    borderTeal700?: boolean // #2c7a7b
    borderTeal800?: boolean // #285e61
    borderTeal900?: boolean // #234e52

    borderBlue?: boolean
    borderBlue100?: boolean // #ebf8ff
    borderBlue200?: boolean // #bee3f8
    borderBlue300?: boolean // #90cdf4
    borderBlue400?: boolean // #63b3ed
    borderBlue500?: boolean // #4299e1
    borderBlue600?: boolean // #3182ce
    borderBlue700?: boolean // #2b6cb0
    borderBlue800?: boolean // #2c5282
    borderBlue900?: boolean // #2a4365

    borderIndigo?: boolean
    borderIndigo100?: boolean // #ebf4ff
    borderIndigo200?: boolean // #c3dafe
    borderIndigo300?: boolean // #a3bffa
    borderIndigo400?: boolean // #7f9cf5
    borderIndigo500?: boolean // #667eea
    borderIndigo600?: boolean // #5a67d8
    borderIndigo700?: boolean // #4c51bf
    borderIndigo800?: boolean // #434190
    borderIndigo900?: boolean // #3c366b

    borderPurple?: boolean
    borderPurple100?: boolean // #faf5ff
    borderPurple200?: boolean // #e9d8fd
    borderPurple300?: boolean // #d6bcfa
    borderPurple400?: boolean // #b794f4
    borderPurple500?: boolean // #9f7aea
    borderPurple600?: boolean // #805ad5
    borderPurple700?: boolean // #6b46c1
    borderPurple800?: boolean // #553c9a
    borderPurple900?: boolean // #44337a

    borderPink?: boolean
    borderPink100?: boolean // #fff5f7
    borderPink200?: boolean // #fed7e2
    borderPink300?: boolean // #fbb6ce
    borderPink400?: boolean // #f687b3
    borderPink500?: boolean // #ed64a6
    borderPink600?: boolean // #d53f8c
    borderPink700?: boolean // #b83280
    borderPink800?: boolean // #97266d
    borderPink900?: boolean // #702459
  }
}
