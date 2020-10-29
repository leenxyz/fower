import { Plugin } from '../types'

export default (): Plugin => {
  return {
    onVisitProp(prop, sheet) {
      const caseKeys = ['normalcase', 'uppercase', 'lowercase', 'capitalize']
      const isCaseKey = caseKeys.includes(prop.key)

      if (!isCaseKey) return { sheet }

      const value: any = prop.key === 'normalcase' ? 'none' : prop.key

      sheet.addRule({
        name: prop.key,
        style: { textTransform: value },
      })

      return { sheet, matched: true }
    },
  }
}
