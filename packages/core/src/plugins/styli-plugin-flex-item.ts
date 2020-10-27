import { Plugin } from '../types'
import { isFlexItemKey } from '../utils/propKey'
import { flexItemPropToStyle } from '../utils/propToStyle'

export default (): Plugin => {
  return {
    onVisitProp(prop, sheet) {
      if (!isFlexItemKey(prop.key)) return sheet

      const style = flexItemPropToStyle(prop.key, prop.value)

      sheet.addRule({ name: prop.key, style })
      return sheet
    },
  }
}
