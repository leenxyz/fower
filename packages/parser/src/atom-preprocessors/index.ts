import { Parser } from '../parser'
import { Atom } from '@styli/atom'
import { commonPreprocessor } from './common'
import { pseudoPreprocessor } from './pseudo'
import { spacePreprocessor } from './space'
import { responsivePreprocessor } from './responsive'

export function runPreprocessors(initialAtom: Atom, parser: Parser, styli: any) {
  let atom = { ...initialAtom }
  atom = commonPreprocessor(atom)

  if (atom.type === 'invalid') return atom

  atom = pseudoPreprocessor(atom, parser, styli)
  atom = spacePreprocessor(atom, styli)
  atom = responsivePreprocessor(atom, parser, styli)

  return atom
}
