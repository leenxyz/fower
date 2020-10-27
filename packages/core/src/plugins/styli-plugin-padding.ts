import { Plugin } from '../types'
import { isPaddingKey } from '../utils/propKey'
import { paddingPropToStyle } from '../utils/propToStyle'

export default (): Plugin => {
  return {
    onVisitProp(prop, sheet) {
      if (!isPaddingKey(prop.key)) return sheet

      const style = paddingPropToStyle(prop.key, prop.value)

      sheet.addRule({ name: prop.key, style })
      return sheet
    },
  }
}
