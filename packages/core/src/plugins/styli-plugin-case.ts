import { Plugin } from '../types'
import { kebab } from '../utils'

export const pluginCase = (): Plugin => {
  return {
    onVisitProp({ propKey }, rule) {
      const caseKeys = ['normalcase', 'uppercase', 'lowercase', 'capitalize']
      const isCaseKey = caseKeys.includes(propKey)

      if (!isCaseKey) return

      const value: any = propKey === 'normalcase' ? 'none' : propKey

      const key = 'textTransform'
      rule.style = { [key]: value }
      rule.cssFragment = `${kebab(key)}:${value}`

      return rule
    },
  }
}
