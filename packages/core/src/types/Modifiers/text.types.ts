export interface Texts {
  textLeft?: boolean
  textCenter?: boolean
  textRight?: boolean
  textJustify?: boolean

  lineHeight?: boolean

  body?: boolean | number | string

  /**
    h1-h6 级标题
   */
  h1?: boolean
  h2?: boolean
  h3?: boolean
  h4?: boolean
  h5?: boolean
  h6?: boolean

  /**
    text-xs
    text-sm
    text-base
    text-lg
    text-xl
    text-2xl
    text-3xl
    text-4xl
    text-5xl
    text-6xl

    或则具体数值 text-12、text-16
   */
  text?: boolean

  fontHairline?: boolean
  fontThin?: boolean
  fontLight?: boolean
  fontNormal?: boolean
  fontMedium?: boolean
  fontSemibold?: boolean
  fontBold?: boolean
  fontExtrabold?: boolean
  fontBlack?: boolean

  leading?: boolean

  leadingNone?: boolean
  leadingTight?: boolean
  leadingSnug?: boolean
  leadingNormal?: boolean
  leadingRelaxed?: boolean
  leadingLoose?: boolean

  color?: string

  black?: boolean

  white?: boolean

  primaryColor?: boolean // '#2364AA'
  secondaryColor?: boolean // '#81C3D7'
  errorColor?: boolean // '#E63B2E'
  successColor?: boolean // '#ADC76F'
  dangerColor?: boolean // '#E63B2E'
  warningColor?: boolean // '#FF963C'

  gray?: boolean
  gray100?: boolean // #f7fafc
  gray200?: boolean // #edf2f7
  gray300?: boolean // #e2e8f0
  gray400?: boolean // #cbd5e0
  gray500?: boolean // #a0aec0
  gray600?: boolean // #718096
  gray700?: boolean // #4a5568
  gray800?: boolean // #2d3748
  gray900?: boolean // #1a202c

  red?: boolean
  red100?: boolean // #fff5f5
  red200?: boolean // #fed7d7
  red300?: boolean // #feb2b2
  red400?: boolean // #fc8181
  red500?: boolean // #f56565
  red600?: boolean // #e53e3e
  red700?: boolean // #c53030
  red800?: boolean // #9b2c2c
  red900?: boolean // #742a2a

  orange?: boolean
  orange100?: boolean // #fffaf0
  orange200?: boolean // #feebc8
  orange300?: boolean // #fbd38d
  orange400?: boolean // #f6ad55
  orange500?: boolean // #ed8936
  orange600?: boolean // #dd6b20
  orange700?: boolean // #c05621
  orange800?: boolean // #9c4221
  orange900?: boolean // #7b341e

  yellow?: boolean
  yellow100?: boolean // #fffff0
  yellow200?: boolean // #fefcbf
  yellow300?: boolean // #faf089
  yellow400?: boolean // #f6e05e
  yellow500?: boolean // #ecc94b
  yellow600?: boolean // #d69e2e
  yellow700?: boolean // #b7791f
  yellow800?: boolean // #975a16
  yellow900?: boolean // #744210

  green?: boolean
  green100?: boolean // #f0fff4
  green200?: boolean // #c6f6d5
  green300?: boolean // #9ae6b4
  green400?: boolean // #68d391
  green500?: boolean // #48bb78
  green600?: boolean // #38a169
  green700?: boolean // #2f855a
  green800?: boolean // #276749
  green900?: boolean // #22543d

  teal?: boolean
  teal100?: boolean // #e6fffa
  teal200?: boolean // #b2f5ea
  teal300?: boolean // #81e6d9
  teal400?: boolean // #4fd1c5
  teal500?: boolean // #38b2ac
  teal600?: boolean // #319795
  teal700?: boolean // #2c7a7b
  teal800?: boolean // #285e61
  teal900?: boolean // #234e52

  blue?: boolean
  blue100?: boolean // #ebf8ff
  blue200?: boolean // #bee3f8
  blue300?: boolean // #90cdf4
  blue400?: boolean // #63b3ed
  blue500?: boolean // #4299e1
  blue600?: boolean // #3182ce
  blue700?: boolean // #2b6cb0
  blue800?: boolean // #2c5282
  blue900?: boolean // #2a4365

  indigo?: boolean
  indigo100?: boolean // #ebf4ff
  indigo200?: boolean // #c3dafe
  indigo300?: boolean // #a3bffa
  indigo400?: boolean // #7f9cf5
  indigo500?: boolean // #667eea
  indigo600?: boolean // #5a67d8
  indigo700?: boolean // #4c51bf
  indigo800?: boolean // #434190
  indigo900?: boolean // #3c366b

  purple?: boolean
  purple100?: boolean // #faf5ff
  purple200?: boolean // #e9d8fd
  purple300?: boolean // #d6bcfa
  purple400?: boolean // #b794f4
  purple500?: boolean // #9f7aea
  purple600?: boolean // #805ad5
  purple700?: boolean // #6b46c1
  purple800?: boolean // #553c9a
  purple900?: boolean // #44337a

  pink?: boolean
  pink100?: boolean // #fff5f7
  pink200?: boolean // #fed7e2
  pink300?: boolean // #fbb6ce
  pink400?: boolean // #f687b3
  pink500?: boolean // #ed64a6
  pink600?: boolean // #d53f8c
  pink700?: boolean // #b83280
  pink800?: boolean // #97266d
  pink900?: boolean // #702459
}
