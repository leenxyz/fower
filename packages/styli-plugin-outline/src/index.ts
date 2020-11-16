import { getValue } from '@styli/core'
import { StyliPlugin } from '@styli/types'
import { isValidPropValue } from '@styli/utils'

export function isOutLineKey(key: string) {
  const isOutlineNone = /^outline[nN]one$/.test(key)
  const isOutlineOffset = /^outline[Oo]ffset(-.+)?$/.test(key)
  const isOutline = /^outline$/.test(key)
  return isOutlineNone || isOutlineOffset || isOutline
}

export function outLinePropToStyle(propKey: string, propValue: any): any {
  const [, keyIsNone] = propKey.match(/^outline([nN]one)$/) || []
  if (keyIsNone) return { outline: 'none' }

  const [, keyIsOffset, , offsetValue] = propKey.match(/^outline([Oo]ffset)(-(.+))?$/) || []
  if (keyIsOffset) {
    return { outlineOffset: isValidPropValue(propValue) ? propValue : getValue(offsetValue || 1) }
  }

  return { outline: isValidPropValue(propValue) ? propValue : 'none' }
}

export default (): StyliPlugin => {
  return {
    name: 'styli-plugin-outline',
    isMatch: isOutLineKey,
    onVisitProp(atom) {
      atom.style = outLinePropToStyle(atom.propKey, atom.propValue)
      return atom
    },
  }
}
