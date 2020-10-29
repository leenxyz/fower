import { Plugin } from '../types'
import { isMarginKey } from '../utils/propKey'
import { marginPropToStyle } from '../utils/propToStyle'

export default (): Plugin => {
  return {
    onVisitProp(prop, sheet) {
      if (!isMarginKey(prop.key)) return { sheet }

      const style = marginPropToStyle(prop.key, prop.value)

      sheet.addRule({ name: prop.key, style })
      return { sheet, matched: true }
    },
  }
}
