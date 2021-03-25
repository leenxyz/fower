import { Theme } from '@styli/types'
import { colors } from '@styli/colors'

export const theme: Partial<Theme> = {
  colors: colors,
  spacing: [0, 4, 8, 12, 16, 20, 24, 28, 32, 36],
  sizes: [0, 4, 8, 12, 16, 20, 24, 28, 32, 36],

  fontSize: {
    xs: 12,
    sm: 14,
    base: 16,
    lg: 18,
    xl: 20,
    '2xl': 24,
    '3xl': 30,
    '4xl': 36,
    '5xl': 48,
    '6xl': 60,
    '7xl': 72,
    '8xl': 96,
    '9xl': 128,
  },
  headings: [48, 32, 24, , 20, 16, 14] as string[] | number[],
  lineHeight: {
    none: 1,
    tight: 1.25,
    snug: 1.375,
    normal: 1.5,
    relaxed: 1.625,
    loose: 2,
  },
  borderWidths: [0, 1, 2, 4],
  borderRadius: {
    none: 0,
    sm: 2,
    default: 4,
    md: 6,
    lg: 8,
    full: 9999,
  },
  fontWeights: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 'bold',
    extrabold: 800,
    black: 900,
  },
}
