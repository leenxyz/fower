import { Parser } from '../parser'
import { Atom } from '@styli/atom'
// import { toRules } from '@styli/css-object-processor'
// import { spacePreprocessor } from './space'

export function modePreprocessor(atom: Atom, parser: Parser, styli: any): Atom {
  const { propKey, propValue } = atom
  const reg = /--dark$/

  if (!reg.test(atom.propKey)) return atom
  const { plugins = [] } = styli.config

  const key = propKey.replace(reg, '')

  const plugin = plugins.find((i: any) => i.isMatch?.(key))
  if (plugin) {
    atom = plugin.onAtomStyleCreate!({ ...atom, key: atom.key }, parser)
    atom.style = atom.style
  }

  // .dark .bg--dark {}

  atom.key = key
  atom.type = 'style'
  atom.className = propKey
  atom.id = `${propKey}-${propValue}`
  atom.prefixClassName = 'dark'
  atom.mode = 'dark'
  atom.handled = true
  return atom
}
