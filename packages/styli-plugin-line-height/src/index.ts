import { getValue, styli } from '@styli/core'
import { StyliPlugin } from '@styli/types'
import { downFirst, isValidPropValue } from '@styli/utils'

export function isTextLineHeightKey(key: string) {
  return /^lh([Nn]one|[Tt]ight|[Ss]nug|[Nn]ormal|[Rr]elaxed|[Ll]oose|-.+)?$/.test(key)
}

export function textLineHeightPropToStyle(prop: string, propValue: any): any {
  if (isValidPropValue(propValue)) {
    return { lineHeight: getValue(propValue) }
  }

  const [, value = ''] = prop.match(/lh-?(\w+)?/) || []

  const leadings = styli.getTheme('lineHeight') || {}
  const inline = styli.getConfig('inline')

  if (leadings[downFirst(value)]) {
    if (inline) {
      return { lineHeight: leadings[downFirst(value)] }
    }

    // TODO: for rn
    return { lineHeight: 20 }
  }

  return {
    lineHeight: getValue(value),
  }
}

export default (): StyliPlugin => {
  return {
    name: 'styli-plugin-line-height',
    isMatch: isTextLineHeightKey,
    onAtomStyleCreate(atom) {
      atom.style = textLineHeightPropToStyle(atom.propKey, atom.propValue)
      return atom
    },
  }
}
