import { Plugin } from '../types'
import { isShadowKey } from '../utils/propKey'
import { shadowPropToStyle } from '../utils/propToStyle'

export default (): Plugin => {
  return {
    onVisitProp(prop, sheet) {
      if (!isShadowKey(prop.key)) return sheet

      const style = shadowPropToStyle(prop.key, prop.value)

      sheet.addRule({ name: prop.key, style })
      return sheet
    },
  }
}
