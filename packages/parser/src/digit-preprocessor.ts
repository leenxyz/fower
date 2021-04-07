import { Atom } from '@styli/atom'

/**
 * @example p2,mx4,left10,spaceX4...
 * @example p-20,opacity-80
 */
export const digitReg = /^([mp][xytrbl]?|space[xy]?|space|top|right|bottom|left|[wh]|square|circle|min[hw]|max[hw]|opacity|text|zindex|leading|fontWeight|flex|rowGap|columnGap|gridTemplateColumns|border[trbl]?|rounded([tlrb]|t[lr]|b[lr])?)-?-?\d+[a-z]*?$/i

/**
 * TODO: need test
 * @param atom
 * @param styli
 * @returns
 */
export function digitPreprocessor(atom: Atom, spacings: any): Atom {
  if (!digitReg.test(atom.key)) return atom

  // is theme space key
  const isSpace = /^([a-z]+)(\d+)$/i.test(atom.key)

  /**
   *  match props link: m4,mx2,mt9, spaceX4...
   *  to m4 -> [ key: m, value: 4 ]
   *  to m-20 -> [ key: m, value: 20 ]
   *  to m-20px -> [ key: m, value: '20px' ]
   */

  const keyStr = atom.key.toString()
  const result = keyStr.match(/^([a-z]+)(\d+)$/i) || keyStr.match(/^([a-z]*)--?(\d+[a-z]*?)$/i)

  const [, newKey, newPropValue] = result!

  atom.key = newKey
  atom.value = isSpace ? spacings[newPropValue] : newPropValue
  // atom.className = propKey

  return atom
}
