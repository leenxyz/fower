import { Property } from 'csstype'
import { PropValue } from './common.types'

export interface Borders {
  rounded?: PropValue

  roundedT?: PropValue
  roundedR?: PropValue
  roundedB?: PropValue
  roundedL?: PropValue

  roundedTL?: PropValue
  roundedTR?: PropValue
  roundedBL?: PropValue
  roundedBR?: PropValue

  border?: Property.Border | boolean
  borderT?: boolean | number | string
  borderR?: boolean | number | string
  borderB?: boolean | number | string
  borderL?: boolean | number | string
  borderX?: boolean | number | string
  borderY?: boolean | number | string

  borderSolid?: boolean
  borderDashed?: boolean
  borderDotted?: boolean
  borderDouble?: boolean
  borderNone?: boolean

  borderWidth?: Property.BorderWidth
  borderColor?: Property.BorderColor
  BorderStyle?: Property.BorderStyle

  borderTopWidth?: Property.BorderTopWidth | number | boolean
  borderTopColor?: Property.BorderTopColor | boolean
  borderTopStyle?: Property.BorderTopStyle | boolean

  borderLeftWidth?: Property.BorderLeftWidth | number | boolean
  borderLeftColor?: Property.BorderLeftColor | boolean
  BorderLeftStyle?: Property.BorderLeftStyle | boolean

  borderBottomWidth?: Property.BorderBottomWidth | number | boolean
  borderBottomColor?: Property.BorderBottomColor | boolean
  borderBottomStyle?: Property.BorderBottomStyle | boolean

  borderRightWidth?: Property.BorderRightWidth | number | boolean
  borderRightColor?: Property.BorderRightColor | boolean
  borderRightStyle?: Property.BorderRightStyle | boolean

  borderBlack?: boolean

  borderWhite?: boolean

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
