import { StyliPlugin } from '@styli/types'
import { isValidPropValue, isNumber } from '@styli/utils'

export function isFlexItemKey(key: string) {
  return /^flex(-\d+)?$|^order(-\d+)?$/.test(key)
}

export function flexItemPropToStyle(prop: string, propValue: any) {
  const style: any = {}

  const [, key] = prop.match(/(\w+)(-\d+)?/) || []

  if (isValidPropValue(propValue)) {
    style[key] = propValue
  } else {
    const [, value] = prop.split('-')
    const finalValue = value || (propValue === true ? 1 : propValue)
    style[key] = isNumber(finalValue) ? Number(finalValue) : finalValue
  }

  return style
}

export default (): StyliPlugin => {
  return {
    name: 'styli-plugin-flex-item',
    isMatch: isFlexItemKey,
    onAtomStyleCreate(atom) {
      atom.style = flexItemPropToStyle(atom.propKey, atom.propValue)
      return atom
    },
  }
}
