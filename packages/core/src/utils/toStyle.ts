import { PlainObject } from '../types'

export function toStyle() {
  return function (finalProps: PlainObject, styliStyle: any): PlainObject {
    if (Array.isArray(finalProps.style)) {
      finalProps.style = [styliStyle, ...finalProps.style]
    } else {
      finalProps.style = { ...styliStyle, ...finalProps.style }
    }
    return finalProps
  }
}
