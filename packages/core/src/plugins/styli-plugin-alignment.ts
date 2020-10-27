import { Plugin } from '../types'
import { isAlignmentKey } from '../utils/propKey'
import { alignmentPropToStyle } from '../utils/propToStyle'

export default (): Plugin => {
  return {
    onVisitProp(prop, sheet) {
      if (!isAlignmentKey(prop.key)) return sheet

      const { props } = sheet
      const newProps = props.row || props.column ? props : { ...props, row: true }
      const style = alignmentPropToStyle(newProps)

      sheet.addRule({ name: prop.key, style })
      return sheet
    },
  }
}
