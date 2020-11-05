export interface Theme {
  breakpoints: string[] | number[]
  spacing: string[] | number[]
  fontSizes: string[] | number[]
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

  colors: {
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
  [key: string]: any
}
