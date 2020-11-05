import { colors } from './colors'

export const theme = {
  breakpoints: ['640px', '768px', '1024px', '1280px'],
  colors,
  spacing: ['0', '4px', '8px', '12px', '16px', '20px', '24px', '28px', '32px', '36px'],
  fontSizes: ['12px', '14px', '16px', '20px', '24px', '32px', '48px', '64px'],
  headings: ['48px', '32px', '24px', , '20px', '16px', '14px'],
  iconSizes: ['16px', '24px', '32px'],
  lineHeight: {
    none: 1,
    tight: 1.25,
    snug: 1.375,
    normal: 1.5,
    relaxed: 1.625,
    loose: 2,
  },
  borderColor: '#dddddd',
  borderRadius: {
    none: '0',
    sm: '2px',
    default: '4px',
    md: '6px',
    lg: '8px',
    full: '9999px',
  },
  shadow: {
    xs: '0 0 0 1px rgba(0, 0, 0, 0.05)',
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    xxl: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
    outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
    none: 'none',
  },
}
