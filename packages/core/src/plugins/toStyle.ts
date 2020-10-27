import { PlainObject, StyliUnit } from '../types'

export function toStyle() {
  return function (
    finalProps: PlainObject,
    styliUnits: StyliUnit[],
    props: PlainObject,
  ): PlainObject {
    const style = styliUnits.reduce((style: any, cur: StyliUnit) => {
      style[cur.attr] = cur.value
      return style
    }, {})
    finalProps.style = { ...style, ...props.style }
    return finalProps
  }
}
