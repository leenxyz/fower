import { Styli } from '../styli'
import { PlainObject } from '../types'
import { convertConfigs, ConvertConfig } from '../utils/convertConfigs'

interface ParsedModifiers {
  styliKeys: string[]
  styliStyle: any
}

function getConvertConfigs() {
  const customConvertConfig = Styli.getConfig('convertConfig') as ConvertConfig[]
  return convertConfigs.concat(customConvertConfig)
}

function isFalsyProp(propValue: any) {
  return typeof propValue == 'boolean' && !propValue
}

export function parseModifiers(props: PlainObject): ParsedModifiers {
  let styliStyle: any = {}
  const styliKeys: string[] = []
  const convertMap = getConvertConfigs()

  for (const [prop, propValue] of Object.entries(props)) {
    // ignore false value
    if (isFalsyProp(propValue)) continue

    let convertConfig: ConvertConfig | null = null

    for (const item of convertMap) {
      const { isMatch } = item
      if (isMatch(prop, propValue, props)) {
        convertConfig = item
        styliKeys.push(prop)
        break
      }
    }

    if (!convertConfig) continue

    const { toStyle } = convertConfig
    const style = toStyle(prop, propValue, props)

    styliStyle = { ...styliStyle, ...style }
  }

  return { styliKeys, styliStyle }
}
