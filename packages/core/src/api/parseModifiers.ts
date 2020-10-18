import { Styli } from '../styli'
import { PlainObject } from '../types'
import { memorize } from '../utils'
import { convertConfigs, ConvertConfig } from '../utils/convertConfigs'

interface ParsedModifiers {
  styliKeys: string[]
  styliStyle: any
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

function getConvertConfigs() {
  const customConvertConfig = Styli.getConfig('convertConfig') as ConvertConfig[]
  return convertConfigs.concat(customConvertConfig)
}

export function parseModifiers(props: PlainObject): ParsedModifiers {
  let styliStyle: any = {}
  const styliKeys: string[] = []

  const convertMap = getConvertConfigs()
  const convertMapsLength = convertMap.length

  for (const [prop, propValue] of Object.entries(props)) {
    for (let i = 0; i < convertMapsLength; i++) {
      const { key, style } = convertMap[i]
      const cacheKey = `${prop}${propValue}`
      if (isPropKey(cacheKey, key, prop, propValue, props)) {
        styliKeys.push(prop)
        if (propValue !== false) {
          const unitStyle = getPropStyle(cacheKey, style, prop, propValue, props)
          Object.assign(styliStyle, unitStyle)
        }
        break
      }
    }
  }

  return { styliKeys, styliStyle }
}
