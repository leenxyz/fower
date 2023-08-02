import { AtomicProps } from '@fower/atomic-props'
import type { Atom } from './atom'
import type { Parser } from './parser'
import * as CSS from 'csstype'
import React from 'react'

export type ComponentProps<T extends As> = React.ComponentProps<T> & {
  as?: As
}

export type FowerHTMLProps<T extends As> = ComponentProps<T> & AtomicProps & { as?: As }

export type Preset = Partial<Configuration>

export type ResponsiveValue<T = any> =
  | [T | false, ...(T | false)[]]
  | (T | false)
  | ((props: any) => [T | false, ...(T | false)[]])
  | ((props: any) => T | false)

export type ResponsiveBoolean = ResponsiveValue<boolean> | boolean

export type PropValue = boolean | number | string

export type ModeType = 'light' | 'dark' | ({} & string)

export type FowerColor = CSS.Property.Color | keyof Colors

export type FowerThemeColor = keyof Colors

export type As = React.ElementType | React.ComponentType

export type GroupedAtomicProps = AtomicProps | (keyof AtomicProps)[]

export interface FowerCSSProperties extends AtomicProps, Omit<CSS.Properties, keyof AtomicProps> {}

export type PseudosObject = { [P in CSS.Pseudos]?: FowerCSSProperties }

export type AtomicKey = keyof Omit<AtomicProps, keyof PostfixAtomicProps> | ({} & string)

export type AtomicArray = AtomicKey[]

export type StyledArgs = (AtomicArray | CSSObject)[]

export type CSSArgs = (AtomicArray | CSSObject | AtomicKey | ({} & string))[]

export type CSSObject<T = any> =
  | (FowerCSSProperties & PseudosObject)
  | {
      [K in keyof T]?: T[K] extends object
        ? CSSObject<T[K]>
        : FowerCSSProperties | number | string | boolean
    }

export interface FowerPlugin {
  isMatch(key: string, parser?: Parser): boolean

  init?(props: Props): void

  /**
   * before handle atom
   * to modify some atom attr before handle
   * @param atom
   * @param parser
   */
  beforeHandleAtom?(atom: Atom, parser: Parser): Atom

  /**
   * on atom style creating
   * @param atom
   * @param parser
   */
  handleAtom?(atom: Atom, parser: Parser): Atom

  /**
   * after atom style created
   * @param parser
   */
  afterAtomStyleCreate?(parser: Parser): void
}

export interface PostfixAtomicProps {
  _sm?: GroupedAtomicProps
  _md?: GroupedAtomicProps
  _lg?: GroupedAtomicProps
  _xl?: GroupedAtomicProps
  _2xl?: GroupedAtomicProps

  _dark?: GroupedAtomicProps

  _active?: GroupedAtomicProps
  _checked?: GroupedAtomicProps
  _disabled?: GroupedAtomicProps
  _enabled?: GroupedAtomicProps
  _default?: GroupedAtomicProps
  _empty?: GroupedAtomicProps
  _focus?: GroupedAtomicProps
  _focusWithin?: GroupedAtomicProps
  _invalid?: GroupedAtomicProps
  _hover?: GroupedAtomicProps
  _link?: GroupedAtomicProps
  _visited?: GroupedAtomicProps
  _firstChild?: GroupedAtomicProps
  _lastChild?: GroupedAtomicProps
  _after?: GroupedAtomicProps
  _before?: GroupedAtomicProps
  _placeholder?: GroupedAtomicProps
  _selection?: GroupedAtomicProps
}

export interface Configuration {
  unit: 'none' | 'px' | 'rem' | 'em' | 'vh' | 'rpx' | ({} & string)

  /**
   * prefix for all css classes
   */
  prefix?: string

  /**
   *  use inline style or not
   *  */
  inline?: boolean

  /**
   * make all rule important
   */
  important?: boolean

  /**
   * object style keys, default is ['css'], you can customize it to ['sx'], or both ['css', 'sx']
   */
  objectPropKeys?: string[]

  mode: {
    /**
     * @example
     *  current: 'dark', default is light
     */
    currentMode: ModeType

    /**
     * @example
     *  modeList: ['dark', 'yellow']
     */
    modeList: ModeType[]

    /**
     * enable auto dark mode
     */
    autoDarkMode: {
      enabled: boolean
      mappings: Record<string, string | boolean>
    }

    classPrefix?: string // eg: fower-
  }

  pseudos?: string[]

  theme: Theme

  plugins: FowerPlugin[]

  transformUnit?: (data: string | number) => string
}

export interface Props {
  style?: any
  className?: string
  css?: CSSObject

  /**
   * props not convert to atomic props
   */
  excludedProps?: string[]
  [key: string]: any
}

export interface Theme {
  breakpoints: {
    sm: string
    md: string
    lg: string
    xl: string
    '2xl': string
  }

  colors: Colors
  spacings: {
    0: string | number
    1: string | number
    2: string | number
    3: string | number
    4: string | number
    5: string | number
    6: string | number
    7: string | number
    8: string | number
    9: string | number
    10: string | number
    11: string | number
    12: string | number
    14: string | number
    16: string | number
    20: string | number
    24: string | number
    28: string | number
    32: string | number
    36: string | number
    40: string | number
    44: string | number
    48: string | number
    52: string | number
    56: string | number
    60: string | number
    64: string | number
    72: string | number
    80: string | number
    96: string | number
  }
  fontFamilies: {
    sans: string
    serif: string
    mono: string
  }

  fontSizes: {
    xs: string | number
    sm: string | number
    base: string | number
    lg: string | number
    xl: string | number
    '2xl': string | number
    '3xl': string | number
    '4xl': string | number
    '5xl': string | number
    '6xl': string | number
    '7xl': string | number
    '8xl': string | number
    '9xl': string | number
  }

  fontWeights: {
    hairline: string | number
    thin: string | number
    light: string | number
    normal: string | number
    medium: string | number
    semibold: string | number
    bold: string | number
    extrabold: string | number
    black: string | number
  }

  lineHeights: {
    none: number | string
    tight: number | string
    snug: number | string
    normal: number | string
    relaxed: number | string
    loose: number | string
  }
  letterSpacings: {
    tighter: number | string
    tight: number | string
    normal: number | string
    wide: number | string
    wider: number | string
    widest: number | string
  }
  radii: {
    none: number | string
    sm: number | string
    md: number | string
    lg: number | string
    xl: number | string
    '2xl': number | string
    '3xl': number | string
    full: number | string
  }
  shadows: {
    sm: number | string
    md: number | string
    lg: number | string
    xl: number | string
    '2xl': number | string
    '3xl': number | string

    inner: string
    outline: string
    none: string
  }
}

export interface Colors {
  modes?: Record<string, Omit<Colors, 'modes'> | { [key: string]: any }>

  transparent: string
  black: string
  white: string

  brand50: string
  brand100: string
  brand200: string
  brand300: string
  brand400: string
  brand500: string
  brand600: string
  brand700: string
  brand800: string
  brand900: string
  brand950: string

  slate50: string
  slate100: string
  slate200: string
  slate300: string
  slate400: string
  slate500: string
  slate600: string
  slate700: string
  slate800: string
  slate900: string
  slate950: string

  gray50: string
  gray100: string
  gray200: string
  gray300: string
  gray400: string
  gray500: string
  gray600: string
  gray700: string
  gray800: string
  gray900: string
  gray950: string

  zinc50: string
  zinc100: string
  zinc200: string
  zinc300: string
  zinc400: string
  zinc500: string
  zinc600: string
  zinc700: string
  zinc800: string
  zinc900: string
  zinc950: string

  neutral50: string
  neutral100: string
  neutral200: string
  neutral300: string
  neutral400: string
  neutral500: string
  neutral600: string
  neutral700: string
  neutral800: string
  neutral900: string
  neutral950: string

  stone50: string
  stone100: string
  stone200: string
  stone300: string
  stone400: string
  stone500: string
  stone600: string
  stone700: string
  stone800: string
  stone900: string
  stone950: string

  red50: string
  red100: string
  red200: string
  red300: string
  red400: string
  red500: string
  red600: string
  red700: string
  red800: string
  red900: string
  red950: string

  orange50: string
  orange100: string
  orange200: string
  orange300: string
  orange400: string
  orange500: string
  orange600: string
  orange700: string
  orange800: string
  orange900: string
  orange950: string

  amber50: string
  amber100: string
  amber200: string
  amber300: string
  amber400: string
  amber500: string
  amber600: string
  amber700: string
  amber800: string
  amber900: string
  amber950: string

  yellow50: string
  yellow100: string
  yellow200: string
  yellow300: string
  yellow400: string
  yellow500: string
  yellow600: string
  yellow700: string
  yellow800: string
  yellow900: string
  yellow950: string

  lime50: string
  lime100: string
  lime200: string
  lime300: string
  lime400: string
  lime500: string
  lime600: string
  lime700: string
  lime800: string
  lime900: string
  lime950: string

  green50: string
  green100: string
  green200: string
  green300: string
  green400: string
  green500: string
  green600: string
  green700: string
  green800: string
  green900: string
  green950: string

  emerald50: string
  emerald100: string
  emerald200: string
  emerald300: string
  emerald400: string
  emerald500: string
  emerald600: string
  emerald700: string
  emerald800: string
  emerald900: string
  emerald950: string

  teal50: string
  teal100: string
  teal200: string
  teal300: string
  teal400: string
  teal500: string
  teal600: string
  teal700: string
  teal800: string
  teal900: string
  teal950: string

  cyan50: string
  cyan100: string
  cyan200: string
  cyan300: string
  cyan400: string
  cyan500: string
  cyan600: string
  cyan700: string
  cyan800: string
  cyan900: string
  cyan950: string

  sky50: string
  sky100: string
  sky200: string
  sky300: string
  sky400: string
  sky500: string
  sky600: string
  sky700: string
  sky800: string
  sky900: string
  sky950: string

  blue50: string
  blue100: string
  blue200: string
  blue300: string
  blue400: string
  blue500: string
  blue600: string
  blue700: string
  blue800: string
  blue900: string
  blue950: string

  indigo50: string
  indigo100: string
  indigo200: string
  indigo300: string
  indigo400: string
  indigo500: string
  indigo600: string
  indigo700: string
  indigo800: string
  indigo900: string
  indigo950: string

  violet50: string
  violet100: string
  violet200: string
  violet300: string
  violet400: string
  violet500: string
  violet600: string
  violet700: string
  violet800: string
  violet900: string
  violet950: string

  purple50: string
  purple100: string
  purple200: string
  purple300: string
  purple400: string
  purple500: string
  purple600: string
  purple700: string
  purple800: string
  purple900: string
  purple950: string

  fuchsia50: string
  fuchsia100: string
  fuchsia200: string
  fuchsia300: string
  fuchsia400: string
  fuchsia500: string
  fuchsia600: string
  fuchsia700: string
  fuchsia800: string
  fuchsia900: string
  fuchsia950: string

  pink50: string
  pink100: string
  pink200: string
  pink300: string
  pink400: string
  pink500: string
  pink600: string
  pink700: string
  pink800: string
  pink900: string
  pink950: string

  rose50: string
  rose100: string
  rose200: string
  rose300: string
  rose400: string
  rose500: string
  rose600: string
  rose700: string
  rose800: string
  rose900: string
  rose950: string
}

export interface Meta {
  /**
   * color mode
   * @example
   * mode: 'dark'
   */
  mode?: string

  /**
   * @example
   * breakpoint: '640px'
   */
  breakpoint?: string

  /**
   * @example
   * --hover -> hover
   * --befor -> befor
   */
  pseudo?: string

  /**
   * @example
   * --hover -> :
   * --before -> ::
   */
  pseudoPrefix?: string

  /**
   * child selector for atom.className
   * @example
   * childSelector: '.child'
   */
  childSelector?: string

  /**
   * sibling selector for atom.className
   * @example
   * childSelector: '.sibling'
   */
  siblingSelector?: string

  /**
   * parent class for group pseudo
   * @example
   * parentClass: 'group'
   */
  parentClass?: string

  /**
   * is !important style
   */
  important?: boolean

  /**
   * is global style, value is global selector
   */
  global?: string

  /**
   * color name or value
   * @example
   * gray200--O20 -> gray200
   * gray200--T20 -> gray200
   * #666--D40 -> #666
   * #999--L40 -> #999
   */
  color?: string

  /**
   * color postfix for opacify,transparent,darken,lighten
   * @example
   * gray200--O20 -> O20
   * gray200--T20 -> T20
   * #666--D40 -> D40
   * #999--L40 -> L40
   */
  colorPostfix?: string
}
export interface Options {
  propKey: 'css' | 'debug' | ({} & string)

  propValue?: any

  key?: string

  value?: any

  type?: string

  meta?: Meta

  style?: any

  handled?: boolean

  props?: any
}
