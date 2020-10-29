import { Property } from 'csstype'

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
   * <View h1></View>
   * ```
   */
  heading?: string | string[]
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
  f?: boolean | number | string | number[] | string[]

  fontWeight?: string | number | number[] | string[]
  fontHairline?: boolean
  fontThin?: boolean
  fontLight?: boolean
  fontNormal?: boolean
  fontMedium?: boolean
  fontSemibold?: boolean
  fontBold?: boolean
  fontExtrabold?: boolean

  lh?: boolean | number | string | number[] | string[]

  lhNone?: boolean
  lhTight?: boolean
  lhSnug?: boolean
  lhNormal?: boolean
  lhRelaxed?: boolean
  lhLoose?: boolean

  color?: Property.Color | Property.Color[]

  // TODO: 改掉: 用 color 开头
  primaryColor?: boolean // '#2364AA'
  secondaryColor?: boolean // '#81C3D7'
  errorColor?: boolean // '#E63B2E'
  successColor?: boolean // '#ADC76F'
  dangerColor?: boolean // '#E63B2E'
  warningColor?: boolean // '#FF963C'

  // 上面的替换成下面

  // Organization or company brand color.
  colorbrand?: boolean

  // Primary color. Typically buttons, links, bars, active states, etc.
  colorprimary?: boolean

  // Accent color. Provides emphasis and contrast to the primary color.
  colorsecondary?: boolean

  // Additional complementary color for more variation.
  colortertiary?: boolean

  // Whites, grays, blacks, etc that make up background, border, shadow, and other layout related pieces.
  colorneutral?: boolean

  // Disabled and empty like states.
  colormuted?: boolean

  // State that denotes something as informational.
  colorinfo?: boolean

  // State that warns the user of something minor.
  colorwarning?: boolean

  // State that indicates a destructive, atomic, or irreversible action.
  colordanger?: boolean

  // State when something errors or fails.
  colorfailure?: boolean

  // State when something succeeds or passes
  colorsuccess?: boolean
}
