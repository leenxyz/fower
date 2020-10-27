import { Plugin } from '../types'
import { isTextHeadingKey } from '../utils/propKey'
import { textHeadingPropToStyle } from '../utils/propToStyle'

export default (): Plugin => {
  return {
    onVisitProp(prop, sheet) {
      if (!isTextHeadingKey(prop.key)) return sheet

      const style = textHeadingPropToStyle(prop.key)

      sheet.addRule({ name: prop.key, style })
      return sheet
    },
  }
}
