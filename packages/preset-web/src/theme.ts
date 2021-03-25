import { Theme } from '@styli/types'
import { colors } from '@styli/colors'

export const theme: Theme = {
  breakpoints: {
    // => @media (min-width: 640px) { ... }
    sm: '640px',
    // => @media (min-width: 768px) { ... }
    md: '768px',

    // => @media (min-width: 1024px) { ... }
    lg: '1024px',

    // => @media (min-width: 1280px) { ... }
    xl: '1280px',

    // => @media (min-width: 1536px) { ... }
    xxl: '1536px',
  },
  colors,
  spacing: [
    '0',
    '4px',
    '8px',
    '12px',
    '16px',
    '20px',
    '24px',
    '28px',
    '32px',
    '36px',
    '40px',
    '44px',
    '48px',
    '52px',
    '56px',
    '60px',
    '64px',
    '68px',
    '72px',
    '76px',
    '80px',
  ],
  headings: ['48px', '32px', '24px', , '20px', '16px', '14px'] as string[] | number[],
  fontSize: {
    xs: '12px',
    sm: '14px',
    base: '16px',
    lg: '18px',
    xl: '20px',
    '2xl': '24px',
    '3xl': '30px',
    '4xl': '36px',
    '5xl': '48px',
    '6xl': '60px',
    '7xl': '72px',
    '8xl': '96px',
    '9xl': '128px',
  },
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
    none: '0',
    sm: '2px',
    default: '4px',
    md: '6px',
    lg: '8px',
    full: '9999px',
  },
  shadow: {
    xs: '0 1px 1px rgba(0, 0, 0, 0.12), 0 0 1px rgba(0,0,0,0.01)',
    sm: '0 1px 3px rgba(0, 0, 0, 0.12), 0 0 1px rgba(0,0,0,0.01)',
    base: '0 2px 4px rgba(0, 0, 0, 0.12), 0 0 2px rgba(0,0,0,0.02)',
    md: '0 4px 8px rgba(0, 0, 0, 0.12), 0 0 2px rgba(0,0,0,0.02)',
    lg: '0 8px 16px rgba(0, 0, 0, 0.12), 0 0 2px rgba(0,0,0,0.02)',
    xl: '0 14px 24px rgba(0, 0, 0, 0.16), 0 0 2px rgba(0,0,0,0.02)',
    xxl: '0 24px 48px rgba(0, 0, 0, 0.2), 0 0 2px rgba(0,0,0,0.02)',
    inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
    outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
    none: 'none',
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
