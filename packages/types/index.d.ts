import * as CSS from 'csstype'
import { Atom } from '@styli/atom'
import { Parser } from '@styli/parser'

// tslint:disable-next-line:export-just-namespace
export = StyliTypes
export as namespace StyliTypes

declare namespace StyliTypes {
  type StyliColor = CSS.Property.Color | keyof Colors

  type As = React.ElementType

  // props from a React element or component
  type ComponentProps<T extends As> = React.ComponentProps<T> & {
    as?: As
  }

  type StyliHTMLProps<T extends As> = ComponentProps<T> & AtomicProps & { as?: As }

  type Preset = Partial<Configuration>

  type PropValue = boolean | number | string

  interface StyliCSSProperties extends AtomicProps, Omit<CSS.Properties, keyof AtomicProps> {}

  type PseudosObject = { [P in CSS.Pseudos]?: StyliCSSProperties }

  type CSSObject<T = any> =
    | (StyliCSSProperties & PseudosObject)
    | {
        [K in keyof T]?: T[K] extends object
          ? CSSObject<T[K]>
          : StyliCSSProperties | number | string | boolean
      }

  // type CSSObject<T = StyliCSSProperties> =
  //   | (StyliCSSProperties & PseudosObject)
  //   | {
  //       [K in keyof T]?: T[K] extends object
  //         ? CSSObject<T[K]> & AtomicProps
  //         : StyliCSSProperties | number | string | boolean
  //     }

  interface AtomicProps {
    /**
     * if Atomic Prop is conflict with others, you can use this ignore Styli Atomic Prop, And it will be pass to inner component.
     *
     * ```tsx
     * import React, { FC } from 'react'
     * import { styled } from '@styli/styled'
     *
     * interface TestProps {
     *   toCenter: string
     * }
     *
     * const Test: FC<TestProp> = ({ toCenter, className }) => {
     *    return <View className={className}>{toCenter}</View>
     * }
     *
     * const StyledTest = styled(Test)
     *
     * // toCenter prop will be handled by Styli. And convert it to className prop.
     * <StyledTest toCenter />
     *
     * // toCenter prop will be handled by Test Component.
     * <StyledTest toCenter excludedProps={['toCenter']} />
     * ```
     */
    excludedProps?: string[]

    /**
     * This Atomic Prop can improve code readability and semantically.
     */
    styliName?: string

    /**
     * CSS
     *
     * Like style prop, but you can do more.
     *
     * Styli will auto add a className to element and parse css prop`s value to a css string, then add it to style element.
     *
     * @example
     * ```tsx
     * <View css={
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
     * }></View>
     * ```
     */
    css?: CSSObject
  }

  interface Configuration {
    unit: 'none' | 'px' | 'rem' | 'em' | 'vh' | 'rpx' | ({} & string)
    prefix?: string
    /** use inline style or not */
    inline?: boolean
    important?: boolean
    pseudos?: string[]
    theme: Theme
    plugins: StyliPlugin[]
    transformUnit?: (data: string | number) => string
  }

  interface Props {
    style?: any
    className?: string
    css?: any

    /**
     * props not convert to atomic props
     */
    excludedProps?: string[]
    [key: string]: any
  }

  interface StyliPlugin {
    isMatch?(key: string): boolean

    /**
     * before atom style creating
     * to modify some atom attr before creating
     * @param atom
     * @param parser
     */
    beforeAtomStyleCreate?(atom: Atom, parser: Parser): Atom

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
    modes?: string[] // eg: modes: ['dark', 'yellow']
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
      base: number | string
      md: number | string
      lg: number | string
      xl: number | string
      '2xl': number | string
      '3xl': number | string
      full: number | string
    }
    shadows: {
      // xs: string
      sm: string
      base: string
      md: string
      lg: string
      xl: string
      '2xl': string
      inner: string
      outline: string
      none: string
    }
  }

  interface Colors {
    transparent: string
    black: string
    white: string

    rose50: string // '#fff1f2'
    rose100: string // '#ffe4e6'
    rose200: string // '#fecdd3'
    rose300: string // '#fda4af'
    rose400: string // '#fb7185'
    rose500: string // '#f43f5e'
    rose600: string // '#e11d48'
    rose700: string // '#be123c'
    rose800: string // '#9f1239'
    rose900: string // '#881337'

    pink50: string // '#fdf2f8'
    pink100: string // '#fce7f3'
    pink200: string // '#fbcfe8'
    pink300: string // '#f9a8d4'
    pink400: string // '#f472b6'
    pink500: string // '#ec4899'
    pink600: string // '#db2777'
    pink700: string // '#be185d'
    pink800: string // '#9d174d'
    pink900: string // '#831843'

    fuchsia50: string // '#fdf4ff'
    fuchsia100: string // '#fae8ff'
    fuchsia200: string // '#f5d0fe'
    fuchsia300: string // '#f0abfc'
    fuchsia400: string // '#e879f9'
    fuchsia500: string // '#d946ef'
    fuchsia600: string // '#c026d3'
    fuchsia700: string // '#a21caf'
    fuchsia800: string // '#86198f'
    fuchsia900: string // '#701a75'

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

    lightBlue50: string // '#f0f9ff'
    lightBlue100: string // '#e0f2fe'
    lightBlue200: string // '#bae6fd'
    lightBlue300: string // '#7dd3fc'
    lightBlue400: string // '#38bdf8'
    lightBlue500: string // '#0ea5e9'
    lightBlue600: string // '#0284c7'
    lightBlue700: string // '#0369a1'
    lightBlue800: string // '#075985'
    lightBlue900: string // '#0c4a6e'

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

    emerald50: string // '#ecfdf5'
    emerald100: string // '#d1fae5'
    emerald200: string // '#a7f3d0'
    emerald300: string // '#6ee7b7'
    emerald400: string // '#34d399'
    emerald500: string // '#10b981'
    emerald600: string // '#059669'
    emerald700: string // '#047857'
    emerald800: string // '#065f46'
    emerald900: string // '#064e3b'

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

    amber50: string // '#fffbeb'
    amber100: string // '#fef3c7'
    amber200: string // '#fde68a'
    amber300: string // '#fcd34d'
    amber400: string // '#fbbf24'
    amber500: string // '#f59e0b'
    amber600: string // '#d97706'
    amber700: string // '#b45309'
    amber800: string // '#92400e'
    amber900: string // '#78350f'

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

    warmGray50: string // '#fafaf9'
    warmGray100: string // '#f5f5f4'
    warmGray200: string // '#e7e5e4'
    warmGray300: string // '#d6d3d1'
    warmGray400: string // '#a8a29e'
    warmGray500: string // '#78716c'
    warmGray600: string // '#57534e'
    warmGray700: string // '#44403c'
    warmGray800: string // '#292524'
    warmGray900: string // '#1c1917'

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

    coolGray50: string // '#f9fafb'
    coolGray100: string // '#f3f4f6'
    coolGray200: string // '#e5e7eb'
    coolGray300: string // '#d1d5db'
    coolGray400: string // '#9ca3af'
    coolGray500: string // '#6b7280'
    coolGray600: string // '#4b5563'
    coolGray700: string // '#374151'
    coolGray800: string // '#1f2937'
    coolGray900: string // '#111827'

    blueGray50: string // '#f8fafc'
    blueGray100: string // '#f1f5f9'
    blueGray200: string // '#e2e8f0'
    blueGray300: string // '#cbd5e1'
    blueGray400: string // '#94a3b8'
    blueGray500: string // '#64748b'
    blueGray600: string // '#475569'
    blueGray700: string // '#334155'
    blueGray800: string // '#1e293b'
    blueGray900: string // '#0f172a'
  }
}
