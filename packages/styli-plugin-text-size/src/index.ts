import { styli } from '@styli/core'
import { StyliPlugin } from '@styli/types'

function isPreset(key: string) {
  const { fontSizes } = styli.getTheme()
  const keys = Object.keys(fontSizes) || []
  const reg = new RegExp(`^text(${keys.join('|')})$`, 'i')
  return reg.test(key)
}
export function isMatch(key: string) {
  return /^text(-.+)?$/.test(key) || isPreset(key)
}

export function toStyle(key: string, value: any) {
  if (isPreset(key)) {
    const fontSizes: any = styli.getTheme().fontSizes
    const fontSizeKey = key.replace(/^text/, '').toLowerCase()
    return { fontSize: fontSizes[fontSizeKey] }
  }

  return { fontSize: value }
}

export default (): StyliPlugin => {
  return {
    isMatch,
    handleAtom(atom) {
      atom.style = toStyle(atom.key, atom.value)
      return atom
    },
  }
}
