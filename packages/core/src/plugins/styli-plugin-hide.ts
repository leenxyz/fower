import { Plugin } from '../types'

export const pluginHidden = (): Plugin => {
  return {
    onVisitProp({ propKey }, rule) {
      if (propKey !== 'hide') return

      rule.style = { display: 'none' }

      return rule
    },
  }
}
