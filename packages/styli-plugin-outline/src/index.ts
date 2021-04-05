import { StyliPlugin } from '@styli/types'
import { isValueProp } from '@styli/utils'

export function isMatch(key: string) {
  return key === 'outline' || isOutLineNone(key) || isOutLineOffset(key)
}

function isOutLineNone(key: string) {
  return /^outlineNone$/i.test(key)
}

function isOutLineOffset(key: string) {
  return /^outlineOffset$/i.test(key)
}

export function outLinePropToStyle(key: string, propValue: any): any {
  if (isOutLineNone(key)) return { outline: 'none' }

  if (isOutLineOffset(key)) {
    return { outlineOffset: propValue }
  }

  return { outline: isValueProp(propValue) ? propValue : 'none' }
}

export default (): StyliPlugin => {
  return {
    isMatch,
    handleAtom(atom) {
      atom.style = outLinePropToStyle(atom.key, atom.propValue)
      return atom
    },
  }
}
