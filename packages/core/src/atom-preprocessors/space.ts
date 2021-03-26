import { Atom } from '@styli/types'
import { styli } from '../styli'

/**
 * @example p2,mx4,left10,spaceX4...
 */
const spaceReg = /^([mp][xytrbl]?|space[xy]?|space|top|right|bottom|left|[wh]|square|circle|min[hw]|max[hw])(\d+)$/i

export function spacePreprocessor(atom: Atom): Atom {
  const { propKey } = atom

  if (!spaceReg.test(atom.key)) return atom

  /**
   *  match props link: m4,mx2,mt9...
   *  to m4 -> [ key: m, value: 4 ]
   */
  const result = atom.key.match(/^([a-z]+)(\d+)$/) || []
  const [, key, value] = result

  if (!key || !value) return atom

  const spacing = styli.getTheme('spacing')

  atom.key = key
  atom.propValue = spacing[value] // value from theme
  atom.classNames = [propKey]

  return atom
}
