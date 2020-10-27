import { Plugin } from '../types'
import { isBgColorKey } from '../utils/propKey'
import { bgPropToStyle } from '../utils/propToStyle'

export default (): Plugin => {
  return {
    onVisitProp(prop, sheet) {
      if (!isBgColorKey(prop.key)) return sheet

      const style = bgPropToStyle(prop.key, prop.value)

      sheet.addRule({ name: prop.key, style })
      return sheet
    },
  }
}
