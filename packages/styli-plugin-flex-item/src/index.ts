import { StyliPlugin } from '@styli/types'
import { isValidPropValue, isNumber } from '@styli/utils'

const maps: any = {
  auto: '1 1 auto',
  initial: '0 1 auto',
  none: 'none',
}

const specials = /^flex(Auto|Initial|None)$/i

export function isFlexItemKey(key: string) {
  return /^flex(-\d+)?$|^order(-\d+)?$/.test(key) || specials.test(key)
}

export function flexItemPropToStyle(prop: string, propValue: any) {
  const style: any = {}

  const [, key] = prop.match(/(\w+)(-\d+)?/) || []

  if (specials.test(prop)) {
    const posfix = prop.replace(/^flex/, '').toLowerCase()
    style.flex = maps[posfix]
    return style
  }

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
