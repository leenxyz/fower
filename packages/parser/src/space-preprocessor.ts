import { Atom } from '@styli/atom'

/**
 * @example p2,mx4,left10,spaceX4...
 */
const spaceReg = /^([mp][xytrbl]?|space[xy]?|space|top|right|bottom|left|[wh]|square|circle|min[hw]|max[hw])(\d+)$/i

export function spacePreprocessor(atom: Atom, styli: any): Atom {
  const { propKey } = atom

  if (!spaceReg.test(atom.key)) return atom

  /**
   *  match props link: m4,mx2,mt9, spaceX4...
   *  to m4 -> [ key: m, value: 4 ]
   */
  const result = atom.key.match(/^([a-z]+)(\d+)$/i) || []

  const [, key, value] = result

  if (!key || !value) return atom

  const { spacing } = styli.getTheme()

  atom.key = key
  atom.propValue = spacing[value] // value from theme
  atom.className = propKey

  return atom
}
