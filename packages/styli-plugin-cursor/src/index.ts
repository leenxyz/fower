import { Plugin } from '@styli/core'
import { isValidPropValue } from '@styli/utils'

export function isCursorKey(key: string) {
  return /^cursor([Nn]one|[Hh]elp|[Pp]ointer|[Pp]rogress|[Cc]ell|[Cc]opy|[Gg]rab)$|^cursor$/.test(
    key,
  )
}

export function cursorPropToStyle(prop: string, propValue: any): any {
  const [, value] =
    prop.match(/^cursor([Nn]one|[Hh]elp|[Pp]ointer|[Pp]rogress|[Cc]ell|[Cc]opy|[Gg]rab)$/) || []
  return { cursor: isValidPropValue(propValue) ? propValue : value?.toLowerCase() || 'pointer' }
}

export default (): Plugin => {
  return {
    name: 'styli-plugin-cursor',
    isMatch: isCursorKey,
    onVisitProp(atom) {
      atom.style = cursorPropToStyle(atom.propKey, atom.propValue)
      return atom
    },
  }
}
