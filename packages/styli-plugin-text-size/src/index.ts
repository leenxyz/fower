import { styli } from '@styli/core'
import { StyliPlugin } from '@styli/types'

function isPreset(key: string) {
  return /^text(xs|sm|base|lg|[2-9]?xl)$/i.test(key)
}
export function isMatch(key: string) {
  return /^text(-.+)?$/.test(key) || isPreset(key)
}

export function textSizePropToStyle(prop: string, propValue: any) {
  if (isPreset(prop)) {
    const fontSizes: any = styli.getTheme().fontSizes
    const key = prop.replace(/^text/, '').toLowerCase()
    return { fontSize: fontSizes[key] }
  }

  return { fontSize: propValue }
}

export default (): StyliPlugin => {
  return {
    isMatch,
    handleAtom(atom) {
      atom.style = textSizePropToStyle(atom.propKey, atom.propValue)
      return atom
    },
  }
}
