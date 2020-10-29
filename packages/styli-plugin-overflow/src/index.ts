import { Plugin } from '@styli/core'
import { downFirst, isValidPropValue } from '@styli/utils'

export const overFlowTypes = ['visible', 'hidden', 'scroll', 'auto', 'inherit', 'initial', 'unset']

export function isOverFlowKey(key: string) {
  if (/^overflow[XY]?$/.test(key)) return true
  const [, value] = key.match(/^o[xy]?([A-Z]\w+)$/) || []
  return overFlowTypes.includes(downFirst(value))
}

export function overFlowPropToStyle(prop: string, propValue: any): any {
  const [, key, value] = prop.match(/^(o[xy]?)([A-Z]\w+)$/) || []
  if (isValidPropValue(propValue)) return { [prop]: propValue }

  const val: any = downFirst(value)
  switch (key) {
    case 'ox':
      return { overflowX: val }
    case 'oy':
      return { overflowY: val }
    default:
      return { overflow: val }
  }
}

export default (): Plugin => {
  return {
    onVisitProp({ propKey, propValue }, rule) {
      if (!isOverFlowKey(propKey)) return
      rule.style = overFlowPropToStyle(propKey, propValue)
      return rule
    },
  }
}
