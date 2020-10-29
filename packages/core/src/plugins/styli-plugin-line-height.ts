import { Plugin } from '../types'
import { isTextLineHeightKey } from '../utils/propKey'
import { textLineHeightPropToStyle } from '../utils/propToStyle'

export default (): Plugin => {
  return {
    onVisitProp(prop, sheet) {
      if (!isTextLineHeightKey(prop.key)) return { sheet }

      const style = textLineHeightPropToStyle(prop.key, prop.value)

      sheet.addRule({ name: prop.key, style })
      return { sheet, matched: true }
    },
  }
}
