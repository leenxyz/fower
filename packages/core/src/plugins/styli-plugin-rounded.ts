import { Plugin } from '../types'
import { isRoundedKey } from '../utils/propKey'
import { roundedPropToStyle } from '../utils/propToStyle'

export default (): Plugin => {
  return {
    onVisitProp(prop, sheet) {
      if (!isRoundedKey(prop.key)) return { sheet }

      const style = roundedPropToStyle(prop.key, prop.value)

      sheet.addRule({ name: prop.key, style })
      return { sheet, matched: true }
    },
  }
}
