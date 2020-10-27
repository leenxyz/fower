import { Plugin } from '../types'
import { isOverFlowKey } from '../utils/propKey'
import { overFlowPropToStyle } from '../utils/propToStyle'

export default (): Plugin => {
  return {
    onVisitProp(prop, sheet) {
      if (!isOverFlowKey(prop.key)) return sheet

      const style = overFlowPropToStyle(prop.key, prop.value)

      sheet.addRule({ name: prop.key, style })
      return sheet
    },
  }
}
