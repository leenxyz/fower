import { Plugin } from '../types'
import { isTextWeightKey } from '../utils/propKey'
import { textWeightPropToStyle } from '../utils/propToStyle'

export default (): Plugin => {
  return {
    onVisitProp(prop, sheet) {
      if (!isTextWeightKey(prop.key)) return sheet

      const style = textWeightPropToStyle(prop.key, prop.value)

      sheet.addRule({ name: prop.key, style })
      return sheet
    },
  }
}
