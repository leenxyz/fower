import { Sheet } from '../Sheet'
import { PlainObject } from '../types'

export function toStyle(finalProps: PlainObject, sheet: Sheet) {
  const style = sheet.getRulesStyles()
  if (Array.isArray(finalProps.style)) {
    finalProps.style = [style, ...finalProps.style]
  } else {
    finalProps.style = { ...style, ...finalProps.style }
  }
  return finalProps
}
