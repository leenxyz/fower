import { PlainObject, StyliUnit } from '../types'

export function toStyle() {
  return function (
    finalProps: PlainObject,
    styliUnits: StyliUnit[],
    props: PlainObject,
  ): PlainObject {
    const style: any = {}
    styliUnits.forEach((item) => {
      style[item.attr] = item.value
    })
    finalProps.style = { ...style, ...props.style }
    return finalProps
  }
}
