import { Plugin } from '@styli/core'
import { isValidPropValue, isNumber } from '@styli/utils'

export function isFlexItemKey(key: string) {
  return /^flex(-\d+)?$/.test(key)
}

// set flex-flow、flex-shrink、flex-basic
export function flexItemPropToStyle(prop: any, propValue: any) {
  if (isValidPropValue(propValue)) return { flex: propValue }
  const [, value] = prop.split('-')
  const flexValue = value || (propValue === true ? 1 : propValue)
  return { flex: isNumber(flexValue) ? Number(flexValue) : flexValue }
}

export default (): Plugin => {
  return {
    onVisitProp(atom) {
      if (!isFlexItemKey(atom.propKey)) return
      atom.style = flexItemPropToStyle(atom.propKey, atom.propValue)
      return atom
    },
  }
}
