import { Plugin } from '../types'
import { isDisplayKey } from '../utils/propKey'
import { displayPropToStyle } from '../utils/propToStyle'

export default (): Plugin => {
  return {
    onVisitProp(prop, sheet) {
      if (!isDisplayKey(prop.key)) return sheet

      const style = displayPropToStyle(prop.key, prop.value)

      sheet.addRule({ name: prop.key, style })
      return sheet
    },
  }
}
