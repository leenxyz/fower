import { styli } from '@styli/core'
import { StyliPlugin } from '@styli/types'

export const positionKeys = ['static', 'fixed', 'absolute', 'relative', 'sticky']

export function isMatch(key: string) {
  return (
    /^(top|right|bottom|left)(-.+)?$/i.test(key) || positionKeys.includes(key) || key === 'position'
  )
}

export function positionPropToStyle(prop: string, propValue: any): any {
  if (prop === 'position') return { position: propValue }

  /** @example absolute, relative  */
  if (positionKeys.includes(prop)) return { position: prop }

  /** @example top={0}, right={10}... */
  if (/^(top|right|bottom|left)$/gi.test(prop)) {
    return { [prop]: styli.getValue(propValue) }
  }

  /** @example top-0, right-10, left--10... */
  const [, matchKey, , value] = prop.match(/^(top|right|bottom|left)(-(-?[\d+A-Z]+))?$/i) || []
  const key = matchKey.toLowerCase()
  return { [key]: styli.getValue(value) }
}

export default (): StyliPlugin => {
  return {
    name: 'styli-plugin-position',
    isMatch,

    beforeAtomStyleCreate(atom) {
      const { propKey } = atom
      const [, key, value] = propKey.match(/^([a-zA-Z]+)(\d+)$/) || []
      if (!key || !value || !isMatch(key)) return atom

      const spacing = styli.getTheme('spacing')

      if (!spacing) {
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
      atom.style = positionPropToStyle(atom.propKey, atom.propValue)
      return atom
    },
  }
}
