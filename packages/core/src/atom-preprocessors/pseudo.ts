import { Atom, ParserType } from '@styli/types'
import { styli } from '../styli'
import { spacePreprocessor } from './space'

const regStr =
  '--(active|checked|disabled|enabled|default|empty|focus|focus-within|invalid|hover|link|visited|first-child|last-child|after|before|placeholder|selection)$'

const specials = ['after', 'before', 'placeholder', 'selection']

function isPseudoKey(str: string) {
  return new RegExp(regStr).test(str)
}

export function pseudoPreprocessor(atom: Atom, parser: ParserType): Atom {
  const { propKey } = atom

  // not pseudo style, return atom
  if (!isPseudoKey(propKey)) return atom

  const { plugins = [] } = styli.config
  const result = propKey.match(new RegExp(`(.*)${regStr}`)) || []

  let [, key, pseudo] = result

  // check is theme space key, if yes, preprocess it
  atom = spacePreprocessor({ ...atom, key })

  pseudo = pseudo.replace('--', '')
  pseudo = specials.includes(pseudo) ? '::' + pseudo : ':' + pseudo

  /** handle style */
  const plugin = plugins.find((i) => i.isMatch?.(atom.key))
  if (plugin) {
    atom = plugin.onAtomStyleCreate!({ ...atom, key: atom.key }, parser)
    atom.style = { [pseudo]: atom.style }
  }

  atom.key = key
  atom.type = 'prefix'
  atom.classNames = [propKey]
  atom.handled = true

  return atom
}
