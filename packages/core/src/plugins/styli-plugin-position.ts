import { Plugin } from '../types'
import { isPositionKey } from '../utils/propKey'
import { positionPropToStyle } from '../utils/propToStyle'

export default (): Plugin => {
  return {
    onVisitProp(prop, sheet) {
      if (!isPositionKey(prop.key)) return sheet

      const style = positionPropToStyle(prop.key, prop.value)

      sheet.addRule({ name: prop.key, style })
      return sheet
    },
  }
}
