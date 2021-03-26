import { styli } from '@styli/core'
import { StyliPlugin } from '@styli/types'
import { isValidPropValue } from '@styli/utils'

export function isSpaceKey(key: string) {
  return /^space[xy]?(-[\dA-Z]+)?$/i.test(key)
}

const spaceMap: any = {
  all: ['marginRight', 'marginBottom'],
  x: ['marginRight'],
  y: ['marginBottom'],
}

export function spacePropToStyle(key: string, propValue: any) {
  const [, pos = 'all', , val] = key.match(/^space([XY])?(-([\dA-Za-z]+))?$/i) || []
  const position = pos.toLowerCase() as any

  const value = isValidPropValue(propValue) ? propValue : val

  let style: any = {}
  spaceMap[position].forEach((key: string) => {
    style[key] = styli.getValue(value)
  })

  return {
    '>*:not(:last-child)': style,
  }
}

export default (): StyliPlugin => {
  return {
    name: 'styli-plugin-space',
    isMatch: isSpaceKey,
    onAtomStyleCreate(atom) {
      atom.type = 'prefix'
      atom.style = spacePropToStyle(atom.key, atom.propValue)
      return atom
    },
  }
}
