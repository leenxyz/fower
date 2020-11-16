import { StyliPlugin } from '@styli/types'
import { downFirst, isValidPropValue } from '@styli/utils'

export const overFlowTypes = ['visible', 'hidden', 'scroll']

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

export default (): StyliPlugin => {
  return {
    name: 'styli-plugin-overflow',
    isMatch: isOverFlowKey,
    onVisitProp(atom) {
      atom.style = overFlowPropToStyle(atom.propKey, atom.propValue)
      return atom
    },
  }
}
