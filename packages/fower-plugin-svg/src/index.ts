import { store } from '@fower/store'
import { downFirst } from '@fower/utils'
import { FowerPlugin } from '@fower/types'

function isFillColor(key = '') {
  if (!key.startsWith('fill')) return false

  const colors: any = store.theme.colors
  const colorKey = downFirst(key.replace(/^fill/, ''))
  if (colors[colorKey]) return true

  return false
}

function isMatch(key: string) {
  return /^stroke$|^(stroke|fill)?(Current|None)$/i.test(key) || isFillColor(key)
}

function toStyle(key: string, value: any): any {
  if (/Current$/i.test(key)) {
    const cssKey = key.replace(/current$/i, '')
    return { [cssKey]: 'currentColor' }
  }

  if (/None$/i.test(key)) {
    const cssKey = key.replace(/none$/i, '')
    return { [cssKey]: 'none' }
  }

  if (key === 'stroke') {
    if (/^\d+/.test(value)) {
      return { strokeWidth: value }
    }
    return { stroke: value }
  }

  if (isFillColor(key)) {
    const colorKey = downFirst(key.replace(/^fill/, ''))
    return { fill: colorKey }
  }
}

export default (): FowerPlugin => {
  return {
    isMatch,
    handleAtom(atom) {
      const { key, value } = atom
      atom.style = toStyle(key, value)

      return atom
    },
  }
}
