import { Plugin } from '../types'
import { isTextSizeKey } from '../utils/propKey'
import { textSizePropToStyle } from '../utils/propToStyle'

export default (): Plugin => {
  return {
    onVisitProp(prop, sheet) {
      if (!isTextSizeKey(prop.key)) return { sheet }

      const style = textSizePropToStyle(prop.key, prop.value)

      sheet.addRule({ name: prop.key, style })
      return { sheet, matched: true }
    },
  }
}
