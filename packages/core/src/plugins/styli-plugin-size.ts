import { Plugin } from '../types'
import { isSizeKey } from '../utils/propKey'
import { sizePropToStyle } from '../utils/propToStyle'

export default (): Plugin => {
  return {
    onVisitProp(prop, sheet) {
      if (!isSizeKey(prop.key)) return { sheet, matched: false }

      const style = sizePropToStyle(prop.key, prop.value)

      sheet.addRule({ name: prop.key, style })
      return { sheet, matched: true }
    },
  }
}
