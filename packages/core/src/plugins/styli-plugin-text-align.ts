import { Plugin } from '../types'
import { isTextAlign } from '../utils/propKey'
import { textAlignPropToStyle } from '../utils/propToStyle'

export default (): Plugin => {
  return {
    onVisitProp(prop, sheet) {
      if (!isTextAlign(prop.key)) return { sheet }

      const style = textAlignPropToStyle(prop.key, prop.value)

      sheet.addRule({ name: prop.key, style })
      return { sheet, matched: true }
    },
  }
}
