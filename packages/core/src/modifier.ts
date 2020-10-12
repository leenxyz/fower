import { Styli } from './styli'
import { convertConfigs, ConvertConfig } from './convertConfigs'

interface Props {
  [key: string]: any
}

interface ParsedModifiers {
  styleKeys: string[]
  style: any
}

export function toStyle(style: any, propStyle: any = {}): any {
  if (Array.isArray(propStyle)) return [style, ...propStyle]
  return { ...style, ...propStyle }
}

export function toFinalProps(props: any) {
  const { styleKeys = [], style } = parseModifiers(props)

  const finalProps = Object.keys(props).reduce((result, key) => {
    if (styleKeys.includes(key)) return result

    return { ...result, [key]: props[key] }
  }, {} as any)

  finalProps.style = toStyle(style, props.style)

  return finalProps
}

export function parseModifiers(props: Props): ParsedModifiers {
  let style: any = {}
  const styleKeys: string[] = []

  const convertMap = [...convertConfigs, ...(Styli.configs.ConvertConfig || [])]
  const convertMapsLength = convertMap.length

  for (const [prop, propValue] of Object.entries(props)) {
    for (let i = 0; i < convertMapsLength; i++) {
      const { key, style: covertStyle } = convertMap[i]
      if (isPropKey(key, prop, propValue, props)) {
        styleKeys.push(prop)
        if (propValue) style = { ...style, ...getPropStyle(covertStyle, prop, propValue, props) }
        break
      }
    }
  }

  return { styleKeys, style }
}

function isPropKey(key: ConvertConfig['key'], prop: string, propValue: any, props: any) {
  return typeof key === 'string' ? prop === key : key(prop, propValue, props)
}

function getPropStyle(
  covertStyle: ConvertConfig['style'],
  prop: string,
  propValue: any,
  props: any,
) {
  return typeof covertStyle === 'object' ? covertStyle : covertStyle(prop, propValue, props)
}
