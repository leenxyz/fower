import { Property } from 'csstype'
import { PropValue } from './common.types'
import { Theme } from '../Theme'

export interface Texts {
  /**
   * Set textAlign
   *
   * @example
   * ```tsx
   * <View textAlign="center"></View>
   * ```
   */
  textAlign?: string | string[]

  /**
   * Set textAlign to left
   *
   * textLeft is `text-align: left`
   *
   * @example
   * ```tsx
   * <View textLeft></View>
   * ```
   */
  textLeft?: boolean

  /**
   * Set textAlign to center
   *
   * textCenter is `text-align: center`
   *
   * @example
   * ```tsx
   * <View textCenter></View>
   * ```
   */
  textCenter?: boolean

  /**
   * Set textAlign to right
   *
   * textRight is `text-align: right`
   *
   * @example
   * ```tsx
   * <View textRight></View>
   * ```
   */
  textRight?: boolean

  /**
   * Set textAlign to justify
   *
   * textJustify is `text-align: justify`
   *
   * @example
   * ```tsx
   * <View textJustify></View>
   * ```
   */
  textJustify?: boolean

  /**
   * Set heading
   *
   * NOTE: Theme restrict. You must config heading
   *
   * heading1 is `display: block; font-weight: bold; font-size: {theme}px`
   *
   * @example
   * ```tsx
   * <View heading1></View>
   * ```
   */
  heading1?: boolean

  /**
   * Set heading
   *
   * NOTE: Theme restrict. You must config heading
   *
   * heading2 is `display: block; font-weight: bold; font-size: {theme}px`
   *
   * @example
   * ```tsx
   * <View heading1></View>
   * ```
   */
  heading2?: boolean

  /**
   * Set heading
   *
   * NOTE: Theme restrict. You must config heading
   *
   * heading3 is `display: block; font-weight: bold; font-size: {theme}px`
   *
   * @example
   * ```tsx
   * <View heading1></View>
   * ```
   */
  heading3?: boolean

  /**
   * Set heading
   *
   * NOTE: Theme restrict. You must config heading
   *
   * heading4 is `display: block; font-weight: bold; font-size: {theme}px`
   *
   * @example
   * ```tsx
   * <View heading1></View>
   * ```
   */
  heading4?: boolean

  /**
   * Set heading
   *
   * NOTE: Theme restrict. You must config heading
   *
   * heading5 is `display: block; font-weight: bold; font-size: {theme}px`
   *
   * @example
   * ```tsx
   * <View heading1></View>
   * ```
   */
  heading5?: boolean

  /**
   * Set heading
   *
   * NOTE: Theme restrict. You must config heading
   *
   * heading6 is `display: block; font-weight: bold; font-size: {theme}px`
   *
   * @example
   * ```tsx
   * <View heading1></View>
   * ```
   */
  heading6?: boolean

  /**
   * Set fontSize
   *
   * @example
   * ```tsx
   * <View f-10></View>
   * <View f={10}></View>
   * <View f-10rem></View>
   * <View f="10rem"></View>
   * ```
   */
  f?: PropValue

  /**
   * Set fontSize
   *
   * NOTE: Theme restrict. You must config fontSizes
   *
   * if fontSizes is [10, 20, 30, 40, 50, 60, 70, 80]
   *
   * f1 is `font-size: 10px`
   */
  f1?: boolean

  /**
   * Set fontSize
   *
   * NOTE: Theme restrict. You must config fontSizes
   *
   * if fontSizes is [10, 20, 30, 40, 50, 60, 70, 80]
   *
   * f2 is `font-size: 20px`
   */
  f2?: boolean

  /**
   * Set fontSize
   *
   * NOTE: Theme restrict. You must config fontSizes
   *
   * if fontSizes is [10, 20, 30, 40, 50, 60, 70, 80]
   *
   * f3 is `font-size: 30px`
   */
  f3?: boolean

  /**
   * Set fontSize
   *
   * NOTE: Theme restrict. You must config fontSizes
   *
   * if fontSizes is [10, 20, 30, 40, 50, 60, 70, 80]
   *
   * f4 is `font-size: 40px`
   */
  f4?: boolean

  /**
   * Set fontSize
   *
   * NOTE: Theme restrict. You must config fontSizes
   *
   * if fontSizes is [10, 20, 30, 40, 50, 60, 70, 80]
   *
   * f5 is `font-size: 50px`
   */
  f5?: boolean

  /**
   * Set fontSize
   *
   * NOTE: Theme restrict. You must config fontSizes
   *
   * if fontSizes is [10, 20, 30, 40, 50, 60, 70, 80]
   *
   * f6 is `font-size: 60px`
   */
  f6?: boolean

  /**
   * Set fontSize
   *
   * NOTE: Theme restrict. You must config fontSizes
   *
   * if fontSizes is [10, 20, 30, 40, 50, 60, 70, 80]
   *
   * f7 is `font-size: 70px`
   */
  f7?: boolean

  /**
   * Set fontSize
   *
   * NOTE: Theme restrict. You must config fontSizes
   *
   * if fontSizes is [10, 20, 30, 40, 50, 60, 70, 80]
   *
   * f8 is `font-size: 80px`
   */
  f8?: boolean

  /**
   * Set fontWeight
   *
   * @example
   * ```tsx
   * <View fontWeight="bold"></View>
   * ```
   */
  fontWeight?: PropValue

  /**
   * Set fontWeight
   *
   * NOTE: Theme restrict. You must config fontWeights
   *
   * @example
   * ```tsx
   * <View fontHairline></View>
   * ```
   */
  fontHairline?: boolean

  /**
   * Set fontWeight
   *
   * NOTE: Theme restrict. You must config fontWeights
   *
   * @example
   * ```tsx
   * <View fontThin></View>
   * ```
   */
  fontThin?: boolean

  /**
   * Set fontWeight
   *
   * NOTE: Theme restrict. You must config fontWeights
   *
   * @example
   * ```tsx
   * <View fontLight></View>
   * ```
   */
  fontLight?: boolean

  /**
   * Set fontWeight
   *
   * NOTE: Theme restrict. You must config fontWeights
   *
   * @example
   * ```tsx
   * <View fontNormal></View>
   * ```
   */
  fontNormal?: boolean

  /**
   * Set fontWeight
   *
   * NOTE: Theme restrict. You must config fontWeights
   *
   * @example
   * ```tsx
   * <View fontMedium></View>
   * ```
   */
  fontMedium?: boolean

  /**
   * Set fontWeight
   *
   * NOTE: Theme restrict. You must config fontWeights
   *
   * @example
   * ```tsx
   * <View fontSemibold></View>
   * ```
   */
  fontSemibold?: boolean

  /**
   * Set fontWeight
   *
   * NOTE: Theme restrict. You must config fontWeights
   *
   * @example
   * ```tsx
   * <View fontBold></View>
   * ```
   */
  fontBold?: boolean

  /**
   * Set fontWeight
   *
   * NOTE: Theme restrict. You must config fontWeights
   *
   * @example
   * ```tsx
   * <View fontExtrabold></View>
   * ```
   */
  fontExtrabold?: boolean

  /**
   * Set lineHeight
   *
   * @example
   * ```tsx
   * <View lh-10></View>
   * <View lh="10px"></View>
   * ```
   */
  lh?: PropValue

  /**
   * Set lineHeight
   *
   * NOTE: Theme restrict. You must config lineHeight
   *
   * @example
   * ```tsx
   * <View lhNone></View>
   * ```
   */
  lhNone?: boolean

  /**
   * Set lineHeight
   *
   * NOTE: Theme restrict. You must config lineHeight
   *
   * @example
   * ```tsx
   * <View lhTight></View>
   * ```
   */
  lhTight?: boolean

  /**
   * Set lineHeight
   *
   * NOTE: Theme restrict. You must config lineHeight
   *
   * @example
   * ```tsx
   * <View lhSnug></View>
   * ```
   */
  lhSnug?: boolean

  /**
   * Set lineHeight
   *
   * NOTE: Theme restrict. You must config lineHeight
   *
   * @example
   * ```tsx
   * <View lhNormal></View>
   * ```
   */
  lhNormal?: boolean

  /**
   * Set lineHeight
   *
   * NOTE: Theme restrict. You must config lineHeight
   *
   * @example
   * ```tsx
   * <View lhRelaxed></View>
   * ```
   */
  lhRelaxed?: boolean

  /**
   * Set lineHeight
   *
   * NOTE: Theme restrict. You must config lineHeight
   *
   * @example
   * ```tsx
   * <View lhLoose></View>
   * ```
   */
  lhLoose?: boolean

  /**
   * Set textTransform to none
   *
   * normalcase is `text-transform: none`
   *
   * @example
   * ```tsx
   * <View normalcase></View>
   * ```
   */
  normalcase?: boolean

  /**
   * Set textTransform to uppercase
   *
   * uppercase is `text-transform: uppercase`
   *
   * @example
   * ```tsx
   * <View uppercase></View>
   * ```
   */
  uppercase?: boolean

  /**
   * Set textTransform to lowercase
   *
   * lowercase is `text-transform: lowercase`
   *
   * @example
   * ```tsx
   * <View lowercase></View>
   * ```
   */
  lowercase?: boolean

  /**
   * Set textTransform to capitalize
   *
   * capitalize is `text-transform: capitalize`
   *
   * @example
   * ```tsx
   * <View capitalize></View>
   * ```
   */
  capitalize?: boolean

  /**
   * Set color
   *
   * @example
   * ```tsx
   * <View c="#FFF"></View>
   * ```
   */
  c?:
    | Property.Color
    | Property.Color[]
    | ((theme: Theme) => Property.Color | Property.Color[])
    | boolean

  /**
   * Set color
   *
   * @example
   * ```tsx
   * <View c="#FFF"></View>
   * ```
   */
  color?:
    | Property.Color
    | Property.Color[]
    | ((theme: Theme) => Property.Color | Property.Color[])
    | boolean

  colorBrand?: boolean

  colorPrimary?: boolean

  colorSecondary?: boolean

  colorInfo?: boolean

  colorWarning?: boolean

  colorError?: boolean

  colorSuccess?: boolean

  /**
   * single line of text ellipsis
   *
   * ellipsis is `white-space: nowrap; overflow: hidden; textOverflow: ellipsis; max-width:100px`
   *
   * @example
   * ```tsx
   * <View ellipsis></View>
   * <View ellipsis-200></View>
   * <View ellipsis-200px></View>
   * <View ellipsis="200rem></View>
   * ```
   */
  ellipsis?: PropValue

  /**
   * single line of text ellipsis
   *
   * ellipsis1 is `white-space: nowrap; overflow: hidden; textOverflow: ellipsis; max-width:100px`
   *
   * @example
   * ```tsx
   * <View ellipsis1></View>
   * <View ellipsis1-200></View>
   * <View ellipsis1-200px></View>
   * <View ellipsis1="200rem"></View>
   * ```
   */
  ellipsis1?: PropValue

  /**
   * multiline of text ellipsis
   *
   * NOTE: webkit only
   * @see https://developer.mozilla.org/zh-CN/docs/Web/CSS/-webkit-line-clamp
   *
   * @example
   * ```tsx
   * <View ellipsis2></View>
   * <View ellipsis2-200></View>
   * <View ellipsis2-200px></View>
   * <View ellipsis2="200rem"></View>
   * ```
   */
  ellipsis2?: PropValue

  /**
   * multiline of text ellipsis
   *
   * NOTE: webkit only
   * @see https://developer.mozilla.org/zh-CN/docs/Web/CSS/-webkit-line-clamp
   *
   * @example
   * ```tsx
   * <View ellipsis3></View>
   * <View ellipsis3-200></View>
   * <View ellipsis3-200px></View>
   * <View ellipsis3="200rem"></View>
   * ```
   */
  ellipsis3?: PropValue

  /**
   * multiline of text ellipsis
   *
   * NOTE: webkit only
   * @see https://developer.mozilla.org/zh-CN/docs/Web/CSS/-webkit-line-clamp
   *
   * @example
   * ```tsx
   * <View ellipsis4></View>
   * <View ellipsis4-200></View>
   * <View ellipsis4-200px></View>
   * <View ellipsis4="200rem"></View>
   * ```
   */
  ellipsis4?: PropValue

  /**
   * multiline of text ellipsis
   *
   * NOTE: webkit only
   * @see https://developer.mozilla.org/zh-CN/docs/Web/CSS/-webkit-line-clamp
   *
   * @example
   * ```tsx
   * <View ellipsis5></View>
   * <View ellipsis5-200></View>
   * <View ellipsis5-200px></View>
   * <View ellipsis5="200rem"></View>
   * ```
   */
  ellipsis5?: PropValue
}
