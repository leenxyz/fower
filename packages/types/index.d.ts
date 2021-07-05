import * as CSS from 'csstype'
import type { Atom } from '@fower/atom'
import type { Parser } from '@fower/parser'

// tslint:disable-next-line:export-just-namespace
export = FowerTypes
export as namespace FowerTypes

declare namespace FowerTypes {
  type FowerColor = CSS.Property.Color | keyof Colors

  type FowerThemeColor = keyof Colors

  type As = React.ElementType

  // props from a React element or component
  type ComponentProps<T extends As> = React.ComponentProps<T> & {
    as?: As
  }

  type FowerHTMLProps<T extends As> = ComponentProps<T> & AtomicProps & { as?: As }

  type Preset = Partial<Configuration>

  type PropValue = boolean | number | string

  type ModeType = 'light' | 'dark' | ({} & string)

  type GroupedAtomicProps = AtomicProps | (keyof AtomicProps)[]

  interface FowerCSSProperties extends AtomicProps, Omit<CSS.Properties, keyof AtomicProps> {}

  type PseudosObject = { [P in CSS.Pseudos]?: FowerCSSProperties }

  type AtomicKey = keyof Omit<AtomicProps, keyof PostfixAtomicProps> | ({} & string)

  type AtomicArray = AtomicKey[]

  type CSSObject<T = any> =
    | (FowerCSSProperties & PseudosObject)
    | {
        [K in keyof T]?: T[K] extends object
          ? CSSObject<T[K]>
          : FowerCSSProperties | number | string | boolean
      }

  type StyledArgs = (AtomicArray | CSSObject)[]

  type CSSArgs = (AtomicArray | CSSObject | AtomicKey)[]

  // type CSSObject<T = FowerCSSProperties> =
  //   | (FowerCSSProperties & PseudosObject)
  //   | {
  //       [K in keyof T]?: T[K] extends object
  //         ? CSSObject<T[K]> & AtomicProps
  //         : FowerCSSProperties | number | string | boolean
  //     }

  interface PostfixAtomicProps {
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

  interface AtomicProps extends PostfixAtomicProps {
    /**
     * if Atomic Prop is conflict with others, you can use this ignore Fower Atomic Prop, And it will be pass to inner component.
     *
     * ```tsx
     * import React, { FC } from 'react'
     * import { styled } from '@fower/styled'
     *
     * interface TestProps {
     *   toCenter: string
     * }
     *
     * const Test: FC<TestProp> = ({ toCenter, className }) => {
     *    return <Box className={className}>{toCenter}</Box>
     * }
     *
     * const StyledTest = styled(Test)
     *
     * // toCenter prop will be handled by Fower. And convert it to className prop.
     * <StyledTest toCenter />
     *
     * // toCenter prop will be handled by Test Component.
     * <StyledTest toCenter excludedProps={['toCenter']} />
     * ```
     */
    excludedProps?: string[]

    /**
     * CSS
     *
     * Like style prop, but you can do more.
     *
     * Fower will auto add a className to element and parse css prop`s value to a css string, then add it to style element.
     *
     * @example
     * ```tsx
     * <Box css={
     *  {
     *     transition: 'all 0.3s',
     *     '::after': {
     *        content: '""',
     *        display: 'block',
     *      },
     *     '>span': {
     *        color: 'red',
     *     },
     *     '.dot': {
     *        '.text': {
     *           color: 'yellow',
     *           fontSize: '12px',
     *        },
     *     }
     *  }
     * }></Box>
     * ```
     */
    css?: CSSObject
  }

  interface Configuration {
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

  interface Props {
    style?: any
    className?: string
    css?: CSSObject

    /**
     * props not convert to atomic props
     */
    excludedProps?: string[]
    [key: string]: any
  }

  interface FowerPlugin {
    isMatch(key: string): boolean

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

  interface Theme {
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

      tiny: number | string
      small: number | string
      medium: number | string
      large: number | string
      huge: number | string
      gigantic: number | string

      full: number | string
    }
    shadows: {
      tiny: number | string
      small: number | string
      medium: number | string
      large: number | string
      huge: number | string
      gigantic: number | string

      inner: string
      outline: string
      none: string
    }
  }

  interface Colors {
    modes?: Record<string, Omit<Colors, 'modes'> | { [key: string]: any }>

    transparent: string
    black: string
    white: string

    brand: string
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

    purple50: string // '#faf5ff'
    purple100: string // '#f3e8ff'
    purple200: string // '#e9d5ff'
    purple300: string // '#d8b4fe'
    purple400: string // '#c084fc'
    purple500: string // '#a855f7'
    purple600: string // '#9333ea'
    purple700: string // '#7e22ce'
    purple800: string // '#6b21a8'
    purple900: string // '#581c87'

    violet50: string // '#f5f3ff'
    violet100: string // '#ede9fe'
    violet200: string // '#ddd6fe'
    violet300: string // '#c4b5fd'
    violet400: string // '#a78bfa'
    violet500: string // '#8b5cf6'
    violet600: string // '#7c3aed'
    violet700: string // '#6d28d9'
    violet800: string // '#5b21b6'
    violet900: string // '#4c1d95'

    indigo50: string // '#eef2ff'
    indigo100: string // '#e0e7ff'
    indigo200: string // '#c7d2fe'
    indigo300: string // '#a5b4fc'
    indigo400: string // '#818cf8'
    indigo500: string // '#6366f1'
    indigo600: string // '#4f46e5'
    indigo700: string // '#4338ca'
    indigo800: string // '#3730a3'
    indigo900: string // '#312e81'

    blue50: string // '#eff6ff'
    blue100: string // '#dbeafe'
    blue200: string // '#bfdbfe'
    blue300: string // '#93c5fd'
    blue400: string // '#60a5fa'
    blue500: string // '#3b82f6'
    blue600: string // '#2563eb'
    blue700: string // '#1d4ed8'
    blue800: string // '#1e40af'
    blue900: string // '#1e3a8a'

    cyan50: string // '#ecfeff'
    cyan100: string // '#cffafe'
    cyan200: string // '#a5f3fc'
    cyan300: string // '#67e8f9'
    cyan400: string // '#22d3ee'
    cyan500: string // '#06b6d4'
    cyan600: string // '#0891b2'
    cyan700: string // '#0e7490'
    cyan800: string // '#155e75'
    cyan900: string // '#164e63'

    teal50: string // '#f0fdfa'
    teal100: string // '#ccfbf1'
    teal200: string // '#99f6e4'
    teal300: string // '#5eead4'
    teal400: string // '#2dd4bf'
    teal500: string // '#14b8a6'
    teal600: string // '#0d9488'
    teal700: string // '#0f766e'
    teal800: string // '#115e59'
    teal900: string // '#134e4a'

    green50: string // '#f0fdf4'
    green100: string // '#dcfce7'
    green200: string // '#bbf7d0'
    green300: string // '#86efac'
    green400: string // '#4ade80'
    green500: string // '#22c55e'
    green600: string // '#16a34a'
    green700: string // '#15803d'
    green800: string // '#166534'
    green900: string // '#14532d'

    lime50: string // '#f7fee7'
    lime100: string // '#ecfccb'
    lime200: string // '#d9f99d'
    lime300: string // '#bef264'
    lime400: string // '#a3e635'
    lime500: string // '#84cc16'
    lime600: string // '#65a30d'
    lime700: string // '#4d7c0f'
    lime800: string // '#3f6212'
    lime900: string // '#365314'

    yellow50: string // '#fefce8'
    yellow100: string // '#fef9c3'
    yellow200: string // '#fef08a'
    yellow300: string // '#fde047'
    yellow400: string // '#facc15'
    yellow500: string // '#eab308'
    yellow600: string // '#ca8a04'
    yellow700: string // '#a16207'
    yellow800: string // '#854d0e'
    yellow900: string // '#713f12'

    orange50: string // '#fff7ed'
    orange100: string // '#ffedd5'
    orange200: string // '#fed7aa'
    orange300: string // '#fdba74'
    orange400: string // '#fb923c'
    orange500: string // '#f97316'
    orange600: string // '#ea580c'
    orange700: string // '#c2410c'
    orange800: string // '#9a3412'
    orange900: string // '#7c2d12'

    red50: string // '#fef2f2'
    red100: string // '#fee2e2'
    red200: string // '#fecaca'
    red300: string // '#fca5a5'
    red400: string // '#f87171'
    red500: string // '#ef4444'
    red600: string // '#dc2626'
    red700: string // '#b91c1c'
    red800: string // '#991b1b'
    red900: string // '#7f1d1d'

    trueGray50: string // '#fafafa'
    trueGray100: string // '#f5f5f5'
    trueGray200: string // '#e5e5e5'
    trueGray300: string // '#d4d4d4'
    trueGray400: string // '#a3a3a3'
    trueGray500: string // '#737373'
    trueGray600: string // '#525252'
    trueGray700: string // '#404040'
    trueGray800: string // '#262626'
    trueGray900: string // '#171717'

    gray50: string // '#fafafa'
    gray100: string // '#f4f4f5'
    gray200: string // '#e4e4e7'
    gray300: string // '#d4d4d8'
    gray400: string // '#a1a1aa'
    gray500: string // '#71717a'
    gray600: string // '#52525b'
    gray700: string // '#3f3f46'
    gray800: string // '#27272a'
    gray900: string // '#18181b'
  }
}
