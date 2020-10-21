import { PlainObject } from '../types'

export default function (
  finalProps: PlainObject,
  styliStyle: PlainObject,
  props: PlainObject,
): PlainObject {
  if (Array.isArray(props.style)) {
    finalProps.style = [styliStyle, ...props.style]
  } else {
    finalProps.style = { ...styliStyle, ...props.style }
  }
  return finalProps
}
