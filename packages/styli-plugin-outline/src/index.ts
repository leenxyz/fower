import { StyliPlugin } from '@styli/types'
import { isValueProp } from '@styli/utils'

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
      outlineOffset: isValueProp(propValue) ? propValue : offsetValue || 1,
    }
  }

  return { outline: isValueProp(propValue) ? propValue : 'none' }
}

export default (): StyliPlugin => {
  return {
    isMatch: isOutLineKey,
    handleAtom(atom) {
      atom.style = outLinePropToStyle(atom.propKey, atom.propValue)
      return atom
    },
  }
}
