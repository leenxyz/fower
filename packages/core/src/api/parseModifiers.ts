import { Styli } from '../styli'
import { memorize } from '../utils'
import { convertConfigs, ConvertConfig } from '../utils/convertConfigs'

interface Props {
  [key: string]: any
}

interface ParsedModifiers {
  styliKeys: string[]
  style: any
}

export function toStyle(style: any, propStyle: any = {}): any {
  if (Array.isArray(propStyle)) return [style, ...propStyle]
  return { ...style, ...propStyle }
}

// cache styli key
const isPropKey = memorize(
  (key: ConvertConfig['key'], prop: string, propValue: any, props: any) => {
    return typeof key === 'string' ? prop === key : key(prop, propValue, props)
  },
)

// cache styli style
const getPropStyle = memorize(
  (convertStyle: ConvertConfig['style'], prop: string, propValue: any, props: any) => {
    return typeof convertStyle === 'object' ? convertStyle : convertStyle(prop, propValue, props)
  },
)

const getConvertConfigs = () => {
  const customConvertConfig = Styli.getConfig('convertConfig') as ConvertConfig[]
  return convertConfigs.concat(customConvertConfig)
}

export function parseModifiers(props: Props): ParsedModifiers {
  let style: any = {}
  const styliKeys: string[] = []

  const convertMap = getConvertConfigs()
  const convertMapsLength = convertMap.length

  for (const [prop, propValue] of Object.entries(props)) {
    for (let i = 0; i < convertMapsLength; i++) {
      const { key, style: convertStyle } = convertMap[i]
      const cacheKey = `${prop}${propValue}`
      if (isPropKey(cacheKey, key, prop, propValue, props)) {
        styliKeys.push(prop)
        if (propValue !== false) {
          style = {
            ...style,
            ...getPropStyle(cacheKey, convertStyle, prop, propValue, props),
          }
        }
        break
      }
    }
  }
  return { styliKeys, style }
}
