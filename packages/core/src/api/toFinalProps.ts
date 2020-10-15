import { parseModifiers, toStyle } from './parseModifiers'

export function toFinalProps(props: any) {
  const { styleKeys = [], style } = parseModifiers(props)

  const finalProps = Object.keys(props).reduce((result, key) => {
    if (styleKeys.includes(key)) return result

    return { ...result, [key]: props[key] }
  }, {} as any)

  finalProps.style = toStyle(style, props.style)

  return finalProps
}
