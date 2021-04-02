import { Atom } from '@styli/atom'

/**
 * @example p2,mx4,left10,spaceX4...
 * @example p-20,opacity-80
 */
const digitReg = /^([mp][xytrbl]?|space[xy]?|space|top|right|bottom|left|[wh]|square|circle|min[hw]|max[hw]|opacity|text|zindex|leading|fontWeight|flex|border[trbl]?|rounded([tlrb]|t[lr]|b[lr])?)-?-?\d+[a-z]*?$/i

/**
 * TODO: need test
 * @param atom
 * @param styli
 * @returns
 */
export function digitPreprocessor(atom: Atom, styli: any): Atom {
  const { propKey } = atom

  if (!digitReg.test(atom.key)) return atom

  // is theme space key
  const isSpace = /^([a-z]+)(\d+)$/i.test(atom.key)

  /**
   *  match props link: m4,mx2,mt9, spaceX4...
   *  to m4 -> [ key: m, value: 4 ]
   *  to m-20 -> [ key: m, value: 20 ]
   *  to m-20px -> [ key: m, value: '20px' ]
   */

  const result = atom.key.match(/^([a-z]+)(\d+)$/i) || atom.key.match(/^([a-z]*)--?(\d+[a-z]*?)$/i)

  if (!result) return atom

  const [, key, value] = result

  const { spacing: spacings } = styli.getTheme()

  atom.key = key
  atom.propValue = isSpace ? spacings[value] : value
  atom.className = propKey

  return atom
}
