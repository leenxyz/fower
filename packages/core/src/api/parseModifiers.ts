import { Styli } from '../styli'
import { PlainObject, StyliStyle } from '../types'
import { isEmptyObj } from '../utils'
import { convertConfigs, ConvertConfig } from '../utils/convertConfigs'

interface ParsedModifiers {
  styliKeys: string[]
  styliStyle: any
}

function getConvertConfigs() {
  const customConvertConfig = Styli.getConfig<ConvertConfig[]>('convertConfig')
  return convertConfigs.concat(customConvertConfig)
}

function isFalsyProp(propValue: any) {
  return typeof propValue == 'boolean' && !propValue
}

export function parseModifiers(props: PlainObject): ParsedModifiers {
  let styliStyle: StyliStyle = {}
  const styliKeys: string[] = []

  if (isEmptyObj(props)) {
    return { styliKeys, styliStyle }
  }

  const convertMap = getConvertConfigs()

  for (const [prop, propValue] of Object.entries(props)) {
    // ignore false value
    if (isFalsyProp(propValue)) continue

    if (['css'].includes(prop)) {
      styliStyle = { ...styliStyle, ...{ [prop]: propValue } }
      styliKeys.push(prop)
      continue
    }

    for (const item of convertMap) {
      const { isMatch, toStyle } = item
      if (isMatch(prop, propValue, props)) {
        styliKeys.push(prop)
        styliStyle = { ...styliStyle, ...toStyle(prop, propValue, props) }
        break
      }
    }
  }

  return { styliKeys, styliStyle }
}
