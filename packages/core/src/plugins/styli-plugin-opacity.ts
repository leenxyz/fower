import { Plugin } from '../types'
import { isOpacityKey } from '../utils/propKey'
import { opacityPropToStyle } from '../utils/propToStyle'

export default (): Plugin => {
  return {
    onVisitProp(prop, sheet) {
      if (!isOpacityKey(prop.key)) return { sheet }

      const style = opacityPropToStyle(prop.key, prop.value)

      sheet.addRule({ name: prop.key, style })
      return { sheet, matched: true }
    },
  }
}
