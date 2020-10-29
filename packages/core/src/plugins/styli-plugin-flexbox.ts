import { Plugin } from '../types'
import { isFlexBoxKey } from '../utils/propKey'
import { flexPropToStyle } from '../utils/propToStyle'

export default (): Plugin => {
  return {
    onVisitProp(prop, sheet) {
      if (!isFlexBoxKey(prop.key)) return { sheet }

      const style = flexPropToStyle(prop.key)

      sheet.addRule({ name: prop.key, style })
      return { sheet, matched: true }
    },
  }
}
