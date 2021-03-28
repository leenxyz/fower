import { Atom } from '@styli/atom'
import { Parser } from '../parser'
import { spacePreprocessor } from './space'

export function responsivePreprocessor(atom: Atom, parser: Parser, styli: any): Atom {
  const { propKey, propValue } = atom
  const { plugins = [] } = styli.config
  const breakpoints = styli.getTheme('breakpoints') || {}
  const breakpointKeys = Object.keys(breakpoints)

  if (!breakpointKeys.length) {
    console.error('theme breakpoints not provide')
  }

  const regStr = `--(${breakpointKeys.join('|')})`

  if (!new RegExp(regStr).test(propKey)) return atom

  const result = propKey.match(new RegExp(`(.*)${regStr}`)) || []

  let [, key, point] = result

  // check is theme space key, if yes, preprocess it
  atom = spacePreprocessor({ ...atom, key }, styli)

  /** handle style */
  const plugin = plugins.find((i: any) => i.isMatch?.(atom.key))
  if (plugin) {
    atom = plugin.onAtomStyleCreate!({ ...atom, key: atom.key }, parser)
    atom.style = atom.style
  }

  atom.key = key
  atom.breakpoint = point
  atom.type = 'responsive'
  atom.id = `${propKey}-${propValue}`
  atom.className = propKey
  atom.handled = true

  return atom
}
