import { Plugin } from '@styli/core'

export const headingTypes = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']

export const headings: any = {
  h1: 2,
  h2: 1.5,
  h3: 1.17,
  h4: 1.12,
  h5: 0.83,
  h6: 0.75,
}

export function isTextHeadingKey(key: string) {
  return headingTypes.includes(key) || /^heading$/.test(key)
}

export default (): Plugin => {
  return {
    onVisitProp({ propKey, propValue }, rule) {
      if (!isTextHeadingKey(propKey)) return

      const style: any = {
        display: 'block',
        fontWeight: 'bold',
        fontSize: headings[propValue] + 'em',
      }

      rule.cssFragment = Object.keys(style).reduce((t, c) => `${t}${c}:${style[c]};`, '')
      rule.style = style

      return rule
    },
  }
}
