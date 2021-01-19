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
    dev?: boolean
    prefix?: string
    /** use inline style or not */
    inline?: boolean
    important?: boolean
    theme: Theme
    plugins: StyliPlugin[]
    transformUnit(data: string | number): string
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
    gray10: string
    gray20: string
    gray30: string
    gray40: string
    gray50: string
    gray60: string
    gray70: string
    gray80: string
    gray90: string

    red: string
    red10: string
    red20: string
    red30: string
    red40: string
    red50: string
    red60: string
    red70: string
    red80: string
    red90: string

    orange: string
    orange10: string
    orange20: string
    orange30: string
    orange40: string
    orange50: string
    orange60: string
    orange70: string
    orange80: string
    orange90: string

    yellow: string
    yellow10: string
    yellow20: string
    yellow30: string
    yellow40: string
    yellow50: string
    yellow60: string
    yellow70: string
    yellow80: string
    yellow90: string

    green: string
    green10: string
    green20: string
    green30: string
    green40: string
    green50: string
    green60: string
    green70: string
    green80: string
    green90: string

    teal: string
    teal10: string
    teal20: string
    teal30: string
    teal40: string
    teal50: string
    teal60: string
    teal70: string
    teal80: string
    teal90: string

    blue: string
    blue10: string
    blue20: string
    blue30: string
    blue40: string
    blue50: string
    blue60: string
    blue70: string
    blue80: string
    blue90: string

    indigo: string
    indigo10: string
    indigo20: string
    indigo30: string
    indigo40: string
    indigo50: string
    indigo60: string
    indigo70: string
    indigo80: string
    indigo90: string

    purple: string
    purple10: string
    purple20: string
    purple30: string
    purple40: string
    purple50: string
    purple60: string
    purple70: string
    purple80: string
    purple90: string

    pink: string
    pink10: string
    pink20: string
    pink30: string
    pink40: string
    pink50: string
    pink60: string
    pink70: string
    pink80: string
    pink90: string
  }
}
