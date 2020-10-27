import { Plugin } from '../types'

export default (): Plugin => {
  return {
    onVisitProp(prop, sheet) {
      if (prop.key !== 'hide') return sheet

      sheet.addRule({
        name: prop.key,
        style: { display: 'none' },
      })

      return sheet
    },
  }
}
