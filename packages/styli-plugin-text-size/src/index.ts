import { styli } from '@styli/core'
import { StyliPlugin } from '@styli/types'
import { isValueProp } from '@styli/utils'

function isPreset(key: string) {
  return /^text(xs|sm|base|lg|[2-9]?xl)$/i.test(key)
}
export function isMatch(key: string) {
  return /^text(-.+)?$/.test(key) || isPreset(key)
}

export function textSizePropToStyle(prop: string, propValue: any) {
  if (isValueProp(propValue)) {
    return { fontSize: propValue }
  }

  if (isPreset(prop)) {
    const fontSize = styli.getTheme().fontSize as any
    const key = prop.replace(/^text/, '').toLowerCase()
    return { fontSize: fontSize[key] }
  }

  const [, value] = prop.split('-')

  return { fontSize: value }
}

export default (): StyliPlugin => {
  return {
    isMatch,
    onAtomStyleCreate(atom) {
      atom.style = textSizePropToStyle(atom.propKey, atom.propValue)
      return atom
    },
  }
}
