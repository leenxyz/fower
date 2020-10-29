import { Plugin } from '@styli/core'

export default (): Plugin => {
  return {
    onVisitProp({ propKey }, rule) {
      const caseKeys = ['normalcase', 'uppercase', 'lowercase', 'capitalize']
      const isCaseKey = caseKeys.includes(propKey)

      if (!isCaseKey) return

      const value: any = propKey === 'normalcase' ? 'none' : propKey

      const key = 'textTransform'
      rule.style = { [key]: value }

      return rule
    },
  }
}
