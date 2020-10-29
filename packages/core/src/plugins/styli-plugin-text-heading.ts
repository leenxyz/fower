import { headings } from '../constants/typo'
import { Plugin } from '../types'
import { isTextHeadingKey } from '../utils/propKey'

export const pluginTextHeading = (): Plugin => {
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
