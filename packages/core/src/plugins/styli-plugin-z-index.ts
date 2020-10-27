import { Plugin } from '../types'
import { isZIndexKey } from '../utils/propKey'
import { zIndexPropToStyle } from '../utils/propToStyle'

export default (): Plugin => {
  return {
    onVisitProp(prop, sheet) {
      if (!isZIndexKey(prop.key)) return sheet

      const style = zIndexPropToStyle(prop.key, prop.value)

      sheet.addRule({ name: prop.key, style })
      return sheet
    },
  }
}
