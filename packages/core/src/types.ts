export enum ModifierType {
  margin = 'margin',
  padding = 'padding',
  border = 'border',
  position = 'position',
  text = 'text',
  size = 'size',
}

export interface Modifiers
  extends Sizes,
    Paddings,
    Margins,
    Flexs,
    Borders,
    Positions,
    Backgrounds,
    Texts {}

export interface Sizes {
  /**
   * Set width, w is width
   *
   * 用 View 作为示例:
   * ```tsx
   * <View w-10></View>
   * <View w-1rem></View>
   * <View w-10p></View>
   * <View w={10}></View>
   * <View w="10px 20px"></View>
   * <View w={a + b}></View>
   * ```
   */
  w?: boolean | number | string

  /**
   * Set height, h is height
   *
   * 用 View 作为示例:
   * ```tsx
   * <View h-10></View>
   * <View h-1rem></View>
   * <View h-10p></View>
   * <View h={10}></View>
   * <View h="10px 20px"></View>
   * <View h={a + b}></View>
   * ```
   */
  h?: boolean | number | string

  /**
   * Set square size
   *
   * s-10 相当于下面：
   *
   * ```css
   * {
   *   width: 10px;
   *   height: 10px;
   * }
   * ```
   *
   * 用 View 作为示例:
   * ```tsx
   * <View s-10></View>
   * <View s-1rem></View>
   * <View s-10p></View>
   * <View s={a + b}></View>
   * ```
   */
  s?: boolean | number | string

  /**
   * Set min-width
   *
   * 用 View 作为示例:
   * ```tsx
   * <View minW-10></View>
   * <View minW-1rem></View>
   * <View minW-10p></View>
   * <View minW={10}></View>
   * <View minW="10px 20px"></View>
   * <View minW={a + b}></View>
   * ```
   */
  minW?: boolean | number | string

  /**
   * Set max-height
   *
   * 用 View 作为示例:
   * ```tsx
   * <View maxW-10></View>
   * <View maxW-1rem></View>
   * <View maxW-10p></View>
   * <View maxW={10}></View>
   * <View maxW="10px 20px"></View>
   * <View maxW={a + b}></View>
   * ```
   */
  maxW?: boolean | number | string

  /**
   * Set min-height
   *
   * 用 View 作为示例:
   * ```tsx
   * <View minH-10></View>
   * <View minH-1rem></View>
   * <View minH-10p></View>
   * <View minH={10}></View>
   * <View minH="10px 20px"></View>
   * <View minH={a + b}></View>
   * ```
   */
  minH?: boolean | number | string

  /**
   * Set max-height
   *
   * 用 View 作为示例:
   * ```tsx
   * <View maxH-10></View>
   * <View maxH-1rem></View>
   * <View maxH-10p></View>
   * <View maxH={10}></View>
   * <View maxH="10px 20px"></View>
   * <View maxH={a + b}></View>
   * ```
   */
  maxH?: boolean | number | string
}

export interface Paddings {
  /**
   * Set padding, p is padding
   *
   * 用 View 作为示例:
   * ```tsx
   * <View p-10></View>
   * <View p-1rem></View>
   * <View p-10p></View>
   * <View p={10}></View>
   * <View p="10px 20px"></View>
   * <View p={a + b}></View>
   * ```
   */
  p?: boolean | number | string

  /**
   * Set padding horizontal
   *
   * px-10 相当于下面：
   *
   * ```css
   * {
   *   padding-left: 10px;
   *   padding-right: 10px;
   * }
   * ```
   *
   * 用 View 作为示例:
   * ```tsx
   * <View px-10></View>
   * <View px-1rem></View>
   * <View px-10p></View>
   * <View px={a + b}></View>
   * ```
   */
  px?: boolean | number | string

  /**
   * Set padding vertical
   *
   * py-10 相当于下面：
   *
   * ```css
   * {
   *   padding-top: 10px;
   *   padding-bottom: 10px;
   * }
   * ```
   *
   * 用 View 作为示例:
   * ```tsx
   * <View py-10></View>
   * <View py-1rem></View>
   * <View py-10p></View>
   * <View py={a + b}></View>
   * ```
   */
  py?: boolean | number | string

  /**
   * Set padding top, pt is padding-top
   *
   * 用 View 作为示例:
   * ```tsx
   * <View pt-10></View>
   * <View pt-1rem></View>
   * <View pt-10p></View>
   * <View pt={10}></View>
   * <View pt="10px 20px"></View>
   * <View pt={a + b}></View>
   * ```
   */
  pt?: boolean | number | string

  /**
   * Set padding bottom, pb is padding-bottom
   *
   * 用 View 作为示例:
   * ```tsx
   * <View pb-10></View>
   * <View pb-1rem></View>
   * <View pb-10p></View>
   * <View pb={10}></View>
   * <View pb="10px 20px"></View>
   * <View pb={a + b}></View>
   * ```
   */
  pb?: boolean | number | string

  /**
   * Set padding right, pr is padding-right
   *
   * 用 View 作为示例:
   * ```tsx
   * <View pr-10></View>
   * <View pr-1rem></View>
   * <View pr-10p></View>
   * <View pr={10}></View>
   * <View pr="10px 20px"></View>
   * <View pr={a + b}></View>
   * ```
   */
  pr?: boolean | number | string

  /**
   * Set padding left, pl is padding-left
   *
   * 用 View 作为示例:
   * ```tsx
   * <View pl-10></View>
   * <View pl-1rem></View>
   * <View pl-10p></View>
   * <View pl={10}></View>
   * <View pl="10px 20px"></View>
   * <View pl={a + b}></View>
   * ```
   */
  pl?: boolean | number | string
}

export interface Margins {
  /**
   * Set margin, m is margin
   *
   * 用 View 作为示例:
   * ```tsx
   * <View m-10></View>
   * <View m-1rem></View>
   * <View m-10p></View>
   * <View m={10}></View>
   * <View m="10px 20px"></View>
   * <View m={a + b}></View>
   * ```
   */
  m?: boolean | number | string

  /**
   * Set margin horizontal
   *
   * mx-10 相当于下面：
   *
   * ```css
   * margin-left: 10px;
   * margin-right: 10px;
   * ```
   *
   * 用 View 作为示例:
   * ```tsx
   * <View mx-10></View>
   * <View mx-1rem></View>
   * <View mx-10p></View>
   * <View mx={a + b}></View>
   * ```
   */
  mx?: boolean | number | string

  /**
   * Set margin vertical
   *
   * my-10 相当于下面：
   *
   * ```css
   * margin-top: 10px;
   * margin-bottom: 10px;
   * ```
   *
   * 用 View 作为示例:
   * ```tsx
   * <View my-10></View>
   * <View my-1rem></View>
   * <View my-10p></View>
   * <View my={a + b}></View>
   * ```
   */
  my?: boolean | number | string

  /**
   * Set margin top, mt is margin-top
   *
   * 用 View 作为示例:
   * ```tsx
   * <View mt-10></View>
   * <View mt-1rem></View>
   * <View mt-10p></View>
   * <View mt={10}></View>
   * <View mt="10px 20px"></View>
   * <View mt={a + b}></View>
   * ```
   */
  mt?: boolean | number | string

  /**
   * Set margin bottom, mb is margin-bottom
   *
   * 用 View 作为示例:
   * ```tsx
   * <View mb-10></View>
   * <View mb-1rem></View>
   * <View mb-10p></View>
   * <View mb={10}></View>
   * <View mb="10px 20px"></View>
   * <View mb={a + b}></View>
   * ```
   */
  mb?: boolean | number | string

  /**
   * Set margin right, mr is margin-right
   *
   * 用 View 作为示例:
   * ```tsx
   * <View mr-10></View>
   * <View mr-1rem></View>
   * <View mr-10p></View>
   * <View mr={10}></View>
   * <View mr="10px 20px"></View>
   * <View mr={a + b}></View>
   * ```
   */
  mr?: boolean | number | string

  /**
   * Set margin left, ml is margin-left
   *
   * 用 View 作为示例:
   * ```tsx
   * <View ml-10></View>
   * <View ml-1rem></View>
   * <View ml-10p></View>
   * <View ml={10}></View>
   * <View ml="10px 20px"></View>
   * <View ml={a + b}></View>
   * ```
   */
  ml?: boolean | number | string
}

export interface Flexs {
  /**
   * Set flex-direction: row;
   *
   * 相当于下面 (自动 display: flex)：
   *
   * ```css
   * {
   *   flex-direction: row;
   *   display: flex;
   * }
   * ```
   *
   * 用 View 作为示例:
   * ```tsx
   * <View row></View>
   * ```
   */
  row?: boolean

  /**
   * Set flex-direction: column;
   *
   * 相当于下面 (自动 display: flex)：
   *
   * ```css
   * {
   *   flex-direction: column;
   *   display: flex;
   * }
   * ```
   *
   * 用 View 作为示例:
   * ```tsx
   * <View column></View>
   * ```
   */
  column?: boolean

  /**
   * set flex-flow、flex-shrink、flex-basic
   *
   * 用 View 作为示例:
   * ```tsx
   * <View flex-1></View> // flex: 1 1 0%;
   * <View flex-auto></View> // flex: 1 1 auto;
   * <View flex-initial></View> // flex: 0 1 auto;
   * <View flex-none></View> // flex: none;
   * ```
   */
  flex?: boolean

  /**
   * Flex items nowrap
   * ```css
   * { flex-wrap: nowrap }
   * ```
   * 用 View 作为示例:
   * ```tsx
   * <View nowrap></View>
   * ```
   */
  nowrap?: boolean

  /**
   * Flex items wrap
   * ```css
   * { flex-wrap: wrap }
   * ```
   * 用 View 作为示例:
   * ```tsx
   * <View wrap></View>
   * ```
   */
  wrap?: boolean

  /**
   * Set justify-content
   * ```css
   * { justify-content: flex-start }
   * ```
   * 用 View 作为示例:
   * ```tsx
   * <View justifyStart></View>
   * ```
   */
  justifyStart?: boolean

  /**
   * Set justify-content
   * ```css
   * { justify-content: flex-end }
   * ```
   * 用 View 作为示例:
   * ```tsx
   * <View justifyEnd></View>
   * ```
   */
  justifyEnd?: boolean

  /**
   * Set justify-content
   * ```css
   * { justify-content: center }
   * ```
   * 用 View 作为示例:
   * ```tsx
   * <View justifyCenter></View>
   * ```
   */
  justifyCenter?: boolean

  /**
   * Set justify-content
   * ```css
   * { justify-content: space-between }
   * ```
   * 用 View 作为示例:
   * ```tsx
   * <View justifyBetween></View>
   * ```
   */
  justifyBetween?: boolean

  /**
   * Set justify-content
   * ```css
   * { justify-content: space-around }
   * ```
   * 用 View 作为示例:
   * ```tsx
   * <View justifyAround></View>
   * ```
   */
  justifyAround?: boolean

  /**
   * Set justify-content
   * ```css
   * { justify-content: space-around }
   * ```
   * 用 View 作为示例:
   * ```tsx
   * <View justifyAround></View>
   * ```
   */
  justifyEvenly?: boolean

  /**
   * Set align-items
   * ```css
   * { align-items: flex-start }
   * ```
   * 用 View 作为示例:
   * ```tsx
   * <View alignStart></View>
   * ```
   */
  alignStart?: boolean

  /**
   * Set align-items
   * ```css
   * { align-items: flex-end }
   * ```
   * 用 View 作为示例:
   * ```tsx
   * <View alignEnd></View>
   * ```
   */
  alignEnd?: boolean

  /**
   * Set align-items
   * ```css
   * { align-items: center }
   * ```
   * 用 View 作为示例:
   * ```tsx
   * <View alignCenter></View>
   * ```
   */
  alignCenter?: boolean

  /**
   * Set align-items
   * ```css
   * { align-items: baseline }
   * ```
   * 用 View 作为示例:
   * ```tsx
   * <View alignBaseline></View>
   * ```
   */
  alignBaseline?: boolean

  /**
   * Set align-items
   * ```css
   * { align-items: stretch }
   * ```
   * 用 View 作为示例:
   * ```tsx
   * <View alignStretch></View>
   * ```
   */
  alignStretch?: boolean

  /**
   * Set flex item center in x y  (水平垂直对齐), 默认flex: row
   * ```css
   * {
   *   display: flex;
   *   justify-content: center;
   *   justify-items: center;
   * }
   * ```
   * 用 View 作为示例:
   * ```tsx
   * <View center></View>
   * ```
   */
  center?: boolean

  /**
   * Set center in x axis，不管改容器是 row 还是 column, 只会在 x 轴生效
   *
   * 用 View 作为示例:
   *
   * ```tsx
   * <View centerX></View>
   * ```
   */
  centerX?: boolean

  /**
   * Set center in y axis，不管改容器是 row 还是 column, 只会在 y 轴生效
   *
   * 用 View 作为示例:
   *
   * ```tsx
   * <View centerY></View>
   * ```
   */
  centerY?: boolean

  left?: boolean

  right?: boolean

  top?: boolean

  bottom?: boolean

  between?: boolean

  around?: boolean

  evenly?: boolean
}

export interface Positions {
  static?: boolean

  fixed?: boolean

  absolute?: boolean

  relative?: boolean

  sticky?: boolean

  T?: boolean | number | string
  R?: boolean | number | string
  B?: boolean | number | string
  L?: boolean | number | string
}
export interface Texts {
  textLeft?: boolean
  textCenter?: boolean
  textRight?: boolean
  textJustify?: boolean

  lineHeight?: boolean

  body?: boolean | number | string

  h1?: boolean | number | string

  h2?: boolean | number | string

  h3?: boolean | number | string

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

export interface Backgrounds {
  bgBlack?: boolean

  bgWhite?: boolean

  bgGray?: boolean
  bgGray100?: boolean // #f7fafc
  bgGray200?: boolean // #edf2f7
  bgGray300?: boolean // #e2e8f0
  bgGray400?: boolean // #cbd5e0
  bgGray500?: boolean // #a0aec0
  bgGray600?: boolean // #718096
  bgGray700?: boolean // #4a5568
  bgGray800?: boolean // #2d3748
  bgGray900?: boolean // #1a202c

  bgRed?: boolean
  bgRed100?: boolean // #fff5f5
  bgRed200?: boolean // #fed7d7
  bgRed300?: boolean // #feb2b2
  bgRed400?: boolean // #fc8181
  bgRed500?: boolean // #f56565
  bgRed600?: boolean // #e53e3e
  bgRed700?: boolean // #c53030
  bgRed800?: boolean // #9b2c2c
  bgRed900?: boolean // #742a2a

  bgOrange?: boolean // orange
  bgOrange100?: boolean // #fffaf0
  bgOrange200?: boolean // #feebc8
  bgOrange300?: boolean // #fbd38d
  bgOrange400?: boolean // #f6ad55
  bgOrange500?: boolean // #ed8936
  bgOrange600?: boolean // #dd6b20
  bgOrange700?: boolean // #c05621
  bgOrange800?: boolean // #9c4221
  bgOrange900?: boolean // #7b341e

  bgYellow?: boolean
  bgYellow100?: boolean // #fffff0
  bgYellow200?: boolean // #fefcbf
  bgYellow300?: boolean // #faf089
  bgYellow400?: boolean // #f6e05e
  bgYellow500?: boolean // #ecc94b
  bgYellow600?: boolean // #d69e2e
  bgYellow700?: boolean // #b7791f
  bgYellow800?: boolean // #975a16
  bgYellow900?: boolean // #744210

  bgGreen?: boolean
  bgGreen100?: boolean // #f0fff4
  bgGreen200?: boolean // #c6f6d5
  bgGreen300?: boolean // #9ae6b4
  bgGreen400?: boolean // #68d391
  bgGreen500?: boolean // #48bb78
  bgGreen600?: boolean // #38a169
  bgGreen700?: boolean // #2f855a
  bgGreen800?: boolean // #276749
  bgGreen900?: boolean // #22543d

  bgTeal?: boolean
  bgTeal100?: boolean // #e6fffa
  bgTeal200?: boolean // #b2f5ea
  bgTeal300?: boolean // #81e6d9
  bgTeal400?: boolean // #4fd1c5
  bgTeal500?: boolean // #38b2ac
  bgTeal600?: boolean // #319795
  bgTeal700?: boolean // #2c7a7b
  bgTeal800?: boolean // #285e61
  bgTeal900?: boolean // #234e52

  bgBlue?: boolean
  bgBlue100?: boolean // #ebf8ff
  bgBlue200?: boolean // #bee3f8
  bgBlue300?: boolean // #90cdf4
  bgBlue400?: boolean // #63b3ed
  bgBlue500?: boolean // #4299e1
  bgBlue600?: boolean // #3182ce
  bgBlue700?: boolean // #2b6cb0
  bgBlue800?: boolean // #2c5282
  bgBlue900?: boolean // #2a4365

  bgIndigo?: boolean
  bgIndigo100?: boolean // #ebf4ff
  bgIndigo200?: boolean // #c3dafe
  bgIndigo300?: boolean // #a3bffa
  bgIndigo400?: boolean // #7f9cf5
  bgIndigo500?: boolean // #667eea
  bgIndigo600?: boolean // #5a67d8
  bgIndigo700?: boolean // #4c51bf
  bgIndigo800?: boolean // #434190
  bgIndigo900?: boolean // #3c366b

  bgPurple?: boolean
  bgPurple100?: boolean // #faf5ff
  bgPurple200?: boolean // #e9d8fd
  bgPurple300?: boolean // #d6bcfa
  bgPurple400?: boolean // #b794f4
  bgPurple500?: boolean // #9f7aea
  bgPurple600?: boolean // #805ad5
  bgPurple700?: boolean // #6b46c1
  bgPurple800?: boolean // #553c9a
  bgPurple900?: boolean // #44337a

  bgPink?: boolean
  bgPink100?: boolean // #fff5f7
  bgPink200?: boolean // #fed7e2
  bgPink300?: boolean // #fbb6ce
  bgPink400?: boolean // #f687b3
  bgPink500?: boolean // #ed64a6
  bgPink600?: boolean // #d53f8c
  bgPink700?: boolean // #b83280
  bgPjink800?: boolean // #97266d
  bgPink900?: boolean // #702459
}

export interface Borders {
  rounded?: boolean | number | string

  roundedT?: boolean | number | string
  roundedR?: boolean | number | string
  roundedB?: boolean | number | string
  roundedL?: boolean | number | string

  roundedTL?: boolean | number | string
  roundedTR?: boolean | number | string
  roundedBL?: boolean | number | string
  roundedBR?: boolean | number | string

  border?: boolean | number | string
  borderT?: boolean | number | string
  borderR?: boolean | number | string
  borderB?: boolean | number | string
  borderL?: boolean | number | string

  borderSolid?: boolean
  borderDashed?: boolean
  borderDotted?: boolean
  borderDouble?: boolean
  borderNone?: boolean

  borderBlack?: boolean

  borderwhite?: boolean

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

  borderOrange?: boolean
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
  borderPjink800?: boolean // #97266d
  borderPink900?: boolean // #702459
}
