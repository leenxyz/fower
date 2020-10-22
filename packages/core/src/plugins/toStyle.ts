import { PlainObject, StyliStyle } from '../types'

export function toStyle() {
  return function (
    finalProps: PlainObject,
    styliStyle: StyliStyle,
    props: PlainObject,
  ): PlainObject {
    if (Array.isArray(props.style)) {
      finalProps.style = [styliStyle, ...props.style]
    } else {
      finalProps.style = { ...styliStyle, ...props.style }
    }
    return finalProps
  }
}
