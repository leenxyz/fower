import * as CSS from 'csstype'

// tslint:disable-next-line:export-just-namespace
export = StyliTypes
export as namespace StyliTypes

declare namespace StyliTypes {
  enum ModifierType {
    margin = 'margin',
    padding = 'padding',
    border = 'border',
    position = 'position',
    text = 'text',
    size = 'size',
    ZIndex = 'ZIndex',
    opacity = 'opacity',
    shadow = 'shadow',
    flex = 'flex',
    flexItem = 'flexItem',
    lineHeight = 'lineHeight',
  }

  type StyliColor = CSS.Property.Color | keyof Colors

  type As = React.ElementType

  // props from a React element or component
  type ComponentProps<T extends As> = React.ComponentProps<T> & {
    as?: As
  }

  type StyliHTMLProps<T extends As> = ComponentProps<T> & AtomicProps & { as?: As }

  type FnValue = (theme: Theme) => boolean | number | string | (boolean | number | string)[]

  type Preset = Partial<Configuration>

  type PropValue = FnValue | boolean | number | string | (boolean | number | string)[]

  type CSSProperties = CSS.Properties<number | string>

  type PseudosObject = { [P in CSS.Pseudos]?: CSSProperties }

  type CSSObject<T = any> =
    | (CSSProperties & PseudosObject)
    | {
        [K in keyof T]?: T[K] extends object ? CSSObject<T[K]> : CSSProperties
      }

  /**
   * type style. convert result can be used in inline style directly
   * @example
   * ```
   * <View p-10px></View>
   *
   * p-10px => padding: 10px
   * ```
   *
   * type prefix. convert result must add a className and it can not be used in inline style
   * @example
   * ```
   * <View css={{ ':hover': { color: 'red' } }}></View>
   *
   * { ':hover': { color: 'red' } } => .className:hover{ color: 'red' }
   * the className will auto add by styli core
   * ```
   *
   * type global. convert result should not add a className and it can not be used in inline style
   * @example
   * ```
   * <View clear></View>
   *
   * clear => *{ padding: 0; margin: 0 }
   * ```
   *
   * type media-queries. convert result should add a className and it can not be used in inline style
   * @example
   * ```
   * <View p={[10, 20, 30, 40]}></View>
   *
   * p={[10, 20, 30, 40] => @media(min-width: 100px) { .className { padding: 10px }}   *   4
   * the className will auto add by styli core
   * ```
   *
   * type invalid. propValue is falsy. styli core will collect and remove it from origin attr or prop
   * @example
   * ```
   * <View p={false} w={() => false}></View>
   * ```
   */
  type AtomType = 'style' | 'prefix' | 'global' | 'media-queries' | 'invalid'

  interface Atom {
    /**
     * propKey may changed by plugin, so use key record origin propKey
     */
    key: 'css' | 'debug' | 'reset' | ({} & string)

    propKey: 'css' | 'debug' | 'reset' | ({} & string)

    propValue: string | number | boolean | CSSObject | ((theme: Theme, props: any) => any)

    style: CSSObject

    type: AtomType

    className?: string

    /**
     * plugin name matched for this atom
     */
    matchedPlugin?: string

    /**
     * atom can be cached
     * TODO: 命名有歧义，需解释什么时候可以被 cached
     */
    cache?: boolean
  }

  interface AtomicProps {
    /**
     * if Atomic Prop is conflict with others, you can use this ignore Styli Atomic Prop, And it will be pass to inner component.
     *
     * ```tsx
     * import React, { FC } from 'react'
     * import { styled } from '@styli/react'
     *
     * interface TestProps {
     *   center: string
     * }
     *
     * const Test: FC<TestProp> = ({ center, className }) => {
     *    return <View className={className}>{center}</View>
     * }
     *
     * const StyledTest = styled(Test)
     *
     * // center prop will be handled by Styli. And convert it to className prop.
     * <StyledTest center />
     *
     * // center prop will be handled by Test Component.
     * <StyledTest center styliIgnore={['center']} />
     * ```
     */
    styliIgnore?: string[]

    /**
     * This Atomic Prop can improve code readability and semantically.
     */
    styliName?: string
  }

  interface Configuration {
    unit: 'none' | 'px' | 'rem' | 'em' | 'vh' | 'rpx' | ({} & string)
    prefix?: string
    /** use inline style or not */
    inline?: boolean
    important?: boolean
    theme: Theme
    plugins: StyliPlugin[]
    transformUnit(data: string | number, type?: ModifierType): string
  }

  interface Props {
    style?: any
    className?: string
    css?: any
    [key: string]: any
  }

  interface SheetType {
    props: Props
    theme: Theme
    atoms: Atom[]
    className: string
    setUniteClassName(): void
    traverseProps(): void
    getClassPostfix(): string

    createAtomClassName(atom: Atom): Atom
    getClassNames(): string
    toStyles(): CSSProperties
    toCss(): string
    getParsedProps(): Props
  }

  interface StyliPlugin {
    name: string
    isMatch?(key: string): boolean
    beforeAtomStyleCreate?(atom: Atom, sheet: SheetType): Atom
    onAtomStyleCreate?(atom: Atom, sheet: SheetType): Atom
    onStyleCreate?(sheet: SheetType): void
    onAtomModify?(plugin: StyliPlugin, atoms: Atom, sheet: SheetType, theme: Theme): Atom
  }

  interface PluginCategory {
    atomModifiers: StyliPlugin[]
    atomStyleCreations: StyliPlugin[]
    styleCreations: StyliPlugin[]
  }

  interface Theme {
    breakpoints: string[] | number[]
    spacing: string[] | number[]
    fontSizes: string[] | number[]
    headings: string[] | number[]
    iconSizes: string[] | number[]
    lineHeight: {
      none: number | string
      tight: number | string
      snug: number | string
      normal: number | string
      relaxed: number | string
      loose: number | string
    }
    borderColors: string[]
    borderWidths: string[] | number[]
    borderRadius: {
      none: number | string
      sm: number | string
      default: number | string
      md: number | string
      lg: number | string
      full: number | string
    }
    shadow: {
      xs: string
      sm: string
      base: string
      md: string
      lg: string
      xl: string
      xxl: string
      inner: string
      outline: string
      none: string
    }

    colors: Colors
    [key: string]: any
  }
  interface Colors {
    transparent: string
    white: string
    black: string

    brand: string
    primary: string
    secondary: string
    info: string
    warning: string
    error: string
    success: string

    gray: string
    gray100: string
    gray200: string
    gray300: string
    gray400: string
    gray500: string
    gray600: string
    gray700: string
    gray800: string
    gray900: string

    red: string
    red100: string
    red200: string
    red300: string
    red400: string
    red500: string
    red600: string
    red700: string
    red800: string
    red900: string

    orange: string
    orange100: string
    orange200: string
    orange300: string
    orange400: string
    orange500: string
    orange600: string
    orange700: string
    orange800: string
    orange900: string

    yellow: string
    yellow100: string
    yellow200: string
    yellow300: string
    yellow400: string
    yellow500: string
    yellow600: string
    yellow700: string
    yellow800: string
    yellow900: string

    green: string
    green100: string
    green200: string
    green300: string
    green400: string
    green500: string
    green600: string
    green700: string
    green800: string
    green900: string

    teal: string
    teal100: string
    teal200: string
    teal300: string
    teal400: string
    teal500: string
    teal600: string
    teal700: string
    teal800: string
    teal900: string

    blue: string
    blue100: string
    blue200: string
    blue300: string
    blue400: string
    blue500: string
    blue600: string
    blue700: string
    blue800: string
    blue900: string

    indigo: string
    indigo100: string
    indigo200: string
    indigo300: string
    indigo400: string
    indigo500: string
    indigo600: string
    indigo700: string
    indigo800: string
    indigo900: string

    purple: string
    purple100: string
    purple200: string
    purple300: string
    purple400: string
    purple500: string
    purple600: string
    purple700: string
    purple800: string
    purple900: string

    pink: string
    pink100: string
    pink200: string
    pink300: string
    pink400: string
    pink500: string
    pink600: string
    pink700: string
    pink800: string
    pink900: string
  }
}
