import { Plugin } from '../types'
import { isColorKey } from '../utils/propKey'
import { colorPropToStyle } from '../utils/propToStyle'

export default (): Plugin => {
  return {
    onVisitProp(prop, sheet) {
      if (!isColorKey(prop.key)) return sheet

      const style = colorPropToStyle(prop.key, prop.value)

      sheet.addRule({ name: prop.key, style })
      return sheet
    },
  }
}
