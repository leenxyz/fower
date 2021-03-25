import { styli } from '@styli/core'
import { StyliPlugin } from '@styli/types'
import { isValidPropValue } from '@styli/utils'

export function isSpaceKey(key: string) {
  return /^space[xXyY]?(-[\dA-Za-z]+)?$/.test(key)
}

const spaceMap: any = {
  all: ['marginRight', 'marginBottom'],
  x: ['marginRight'],
  y: ['marginBottom'],
}

export function spacePropToStyle(propKey: string, propValue: any) {
  const [, pos = 'all', , val] = propKey.match(/^space([XY])?(-([\dA-Za-z]+))?$/i) || []
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
    beforeAtomStyleCreate(atom) {
      const { propKey } = atom
      const [, key, value] = propKey.match(/^([a-zA-Z]+)(\d+)$/) || []
      if (!key || !value || !isSpaceKey(key)) return atom

      const spacing = styli.getTheme<string[]>('spacing') || []

      if (!spacing.length) {
        console.error('theme spacing is not provide')
      }

      return {
        ...atom,
        propKey: key,
        propValue: spacing[Number(value)],
        className: propKey,
        classNames: [propKey],
      }
    },
    onAtomStyleCreate(atom) {
      atom.type = 'prefix'
      atom.style = spacePropToStyle(atom.propKey, atom.propValue)
      return atom
    },
  }
}
