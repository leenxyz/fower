import { Styli } from '../styli'
import { PlainObject, StyliUnit } from '../types'
import { isEmptyObj } from '../utils'
import { convertConfigs, ConvertConfig } from '../utils/convertConfigs'

interface ParsedModifiers {
  styliKeys: string[]
  styliUnits: StyliUnit[]
}

function getConvertConfigs() {
  const customConvertConfig = Styli.getConfig<ConvertConfig[]>('convertConfig')
  return convertConfigs.concat(customConvertConfig)
}

function isFalsyProp(propValue: any) {
  return typeof propValue == 'boolean' && !propValue
}

export function parseModifiers(props: PlainObject): ParsedModifiers {
  let styliUnits: StyliUnit[] = []
  const styliKeys: string[] = []

  if (isEmptyObj(props)) {
    return { styliKeys, styliUnits }
  }

  const convertMap = getConvertConfigs()

  for (const [prop, propValue] of Object.entries(props)) {
    // ignore false value
    if (isFalsyProp(propValue)) continue

    // if (['css'].includes(prop)) {
    //   styliUnit = { ...styliUnit, ...{ [prop]: propValue } }
    //   styliKeys.push(prop)
    //   continue
    // }

    for (const item of convertMap) {
      const { isMatch, toStyle } = item
      if (isMatch(prop, propValue, props)) {
        styliKeys.push(prop)
        styliUnits = styliUnits.concat(
          toStyle(prop, propValue, props).map((o) => ({ ...o, prop, propValue })),
        )
        break
      }
    }
  }

  return { styliKeys, styliUnits }
}
