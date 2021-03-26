import { Atom, ParserType } from '@styli/types'
import { commonPreprocessor } from './common'
import { pseudoPreprocessor } from './pseudo'
import { spacePreprocessor } from './space'
import { responsivePreprocessor } from './responsive'

export function runPreprocessors(initialAtom: Atom, parser: ParserType) {
  let atom = { ...initialAtom }
  atom = commonPreprocessor(atom)

  if (atom.type === 'invalid') return atom

  atom = pseudoPreprocessor(atom, parser)
  atom = spacePreprocessor(atom)
  atom = responsivePreprocessor(atom, parser)

  return atom
}
