import { Property } from 'csstype'

export interface Texts {
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
   * <View h1></View>
   * ```
   */
  h1?: boolean
  h2?: boolean
  h3?: boolean
  h4?: boolean
  h5?: boolean
  h6?: boolean

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
  f?: boolean | number | string

  fontWeight?: string | number
  fontHairline?: boolean
  fontThin?: boolean
  fontLight?: boolean
  fontNormal?: boolean
  fontMedium?: boolean
  fontSemibold?: boolean
  fontBold?: boolean
  fontExtrabold?: boolean

  leading?: boolean | number | string

  leadingNone?: boolean
  leadingTight?: boolean
  leadingSnug?: boolean
  leadingNormal?: boolean
  leadingRelaxed?: boolean
  leadingLoose?: boolean

  color?: Property.Color

  primaryColor?: boolean // '#2364AA'
  secondaryColor?: boolean // '#81C3D7'
  errorColor?: boolean // '#E63B2E'
  successColor?: boolean // '#ADC76F'
  dangerColor?: boolean // '#E63B2E'
  warningColor?: boolean // '#FF963C'
}
