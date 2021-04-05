import { styli } from '@styli/core'
import { StyliPlugin } from '@styli/types'
import { downFirst, isValueProp } from '@styli/utils'

export function isTextLineHeightKey(key: string) {
  return /^leading(None|Tight|Snug|Normal|Relaxed|Loose|-.+)?$/i.test(key)
}

export function textLineHeightPropToStyle(key: string, propValue: any): any {
  if (isValueProp(propValue)) {
    return { lineHeight: propValue }
  }

  const [, value = ''] = key.match(/leading-?(\w+)?/) || []

  const leadings: any = styli.getTheme().lineHeights
  const { inline } = styli.config

  if (leadings[downFirst(value)]) {
    if (!inline) {
      return { lineHeight: leadings[downFirst(value)] }
    }

    // TODO: for rn
    return { lineHeight: 20 }
  }

  return { lineHeight: value }
}

export default (): StyliPlugin => {
  return {
    isMatch: isTextLineHeightKey,
    handleAtom(atom) {
      atom.style = textLineHeightPropToStyle(atom.key, atom.propValue)
      return atom
    },
  }
}
