import { parseModifiers, toStyle } from './parseModifiers'

export function toFinalProps(props: any) {
  const { styliKeys = [], style } = parseModifiers(props)

  const finalProps = Object.keys(props).reduce((result, key) => {
    if (styliKeys.includes(key)) return result

    return { ...result, [key]: props[key] }
  }, {} as any)

  finalProps.style = toStyle(style, props.style)

  return finalProps
}
