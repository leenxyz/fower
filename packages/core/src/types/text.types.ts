import { Property } from 'csstype'
import { PropValue } from './common.types'
import { Theme } from './theme.types'

export interface Texts {
  textAlign?: string | string[]
  textLeft?: boolean
  textCenter?: boolean
  textRight?: boolean
  textJustify?: boolean

  /**
   * Set heading
   *
   * h1
   * ```css
   * {
   *   font-size: 2em;
   *   font-weight: bold;
   * }
   * ```
   *
   * 用 View 作为示例:
   * ```tsx
   * <View heading1></View>
   * ```
   */
  heading1?: boolean
  heading2?: boolean
  heading3?: boolean
  heading4?: boolean
  heading5?: boolean
  heading6?: boolean

  /**
   * Set fontSize
   *
   * f-[xs|sm|base|lg|xl|2xl|3xl|4xl|5xl|6xl|number]
   *
   * ```css
   * {
   *   font-size: number;
   * }
   * ```
   *
   * 用 View 作为示例:
   * ```tsx
   * <View f-xs></View>
   * ```
   */
  f?: PropValue
  f1?: boolean
  f2?: boolean
  f3?: boolean
  f4?: boolean
  f5?: boolean
  f6?: boolean
  f7?: boolean
  f8?: boolean

  fontWeight?: PropValue
  fontHairline?: boolean
  fontThin?: boolean
  fontLight?: boolean
  fontNormal?: boolean
  fontMedium?: boolean
  fontSemibold?: boolean
  fontBold?: boolean
  fontExtrabold?: boolean

  lh?: PropValue

  lhNone?: boolean
  lhTight?: boolean
  lhSnug?: boolean
  lhNormal?: boolean
  lhRelaxed?: boolean
  lhLoose?: boolean

  normalcase?: boolean
  uppercase?: boolean
  lowercase?: boolean
  capitalize?: boolean

  color?: Property.Color | Property.Color[] | ((theme: Theme) => Property.Color | Property.Color[])

  colorBrand?: boolean

  colorPrimary?: boolean

  colorSecondary?: boolean

  colorInfo?: boolean

  colorWarning?: boolean

  colorError?: boolean

  colorSuccess?: boolean

  ellipsis?: PropValue
  ellipsis1?: PropValue
  ellipsis2?: PropValue
  ellipsis3?: PropValue
  ellipsis4?: PropValue
  ellipsis5?: PropValue
}
