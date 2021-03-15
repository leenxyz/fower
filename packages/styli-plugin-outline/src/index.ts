import { styli } from '@styli/core'
import { StyliPlugin } from '@styli/types'
import { isValidPropValue } from '@styli/utils'

export function isOutLineKey(key: string) {
  return key === 'outline' || isOutLineNone(key) || isOutLineOffset(key)
}

function isOutLineNone(key: string) {
  return /^outlineNone$/i.test(key)
}

function isOutLineOffset(key: string) {
  return /^outlineOffset(-.+)?$/i.test(key)
}

export function outLinePropToStyle(propKey: string, propValue: any): any {
  if (isOutLineNone(propKey)) return { outline: 'none' }

  if (isOutLineOffset(propKey)) {
    const [, , offsetValue] = propKey.match(/^outlineOffset(-(.+))?$/i) || []
    return {
      outlineOffset: isValidPropValue(propValue) ? propValue : styli.getValue(offsetValue || 1),
    }
  }

  return { outline: isValidPropValue(propValue) ? propValue : 'none' }
}

export default (): StyliPlugin => {
  return {
    name: 'styli-plugin-outline',
    isMatch: isOutLineKey,
    onAtomStyleCreate(atom) {
      atom.style = outLinePropToStyle(atom.propKey, atom.propValue)
      return atom
    },
  }
}
