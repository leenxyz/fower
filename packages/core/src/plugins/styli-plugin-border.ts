import { Plugin } from '../types'
import { isBorderKey } from '../utils/propKey'
import { borderPropToStyle } from '../utils/propToStyle'

export default (): Plugin => {
  return {
    onVisitProp(prop, sheet) {
      if (!isBorderKey(prop.key)) return { sheet }

      const style = borderPropToStyle(prop.key)

      sheet.addRule({ name: prop.key, style })
      return { sheet, matched: true }
    },
  }
}
