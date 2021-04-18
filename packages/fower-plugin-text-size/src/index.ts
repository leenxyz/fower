import { store } from '@fower/store'
import { FowerPlugin } from '@fower/types'

function isPreset(key: string) {
  const { fontSizes = {} } = store.getTheme()
  const keys = Object.keys(fontSizes) || []
  if (!keys.length) return false
  const reg = new RegExp(`^text(${keys.join('|')})$`, 'i')
  return reg.test(key)
}
export function isMatch(key: string) {
  return /^text$/.test(key) || isPreset(key)
}

export function toStyle(key: string, value: any) {
  if (isPreset(key)) {
    const fontSizes: any = store.getTheme().fontSizes || {}
    const fontSizeKey = key.replace(/^text/, '').toLowerCase()
    return { fontSize: fontSizes[fontSizeKey] }
  }

  return { fontSize: value }
}

export default (): FowerPlugin => {
  return {
    isMatch,
    handleAtom(atom) {
      atom.style = toStyle(atom.key, atom.value)
      return atom
    },
  }
}
