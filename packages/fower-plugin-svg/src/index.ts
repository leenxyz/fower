import { FowerPlugin } from '@fower/types'

function isMatch(key: string) {
  return /^stroke$|^(stroke|fill)?(Current|None)$/i.test(key)
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
