import { objectToClassName } from '@styli/utils'
import { Atom } from '@styli/atom'
import { Parser } from '../parser'

export function responsivePreprocessor(atom: Atom, parser: Parser, styli: any): Atom {
  const { propValue } = atom

  // not responsive style, return atom
  if (!Array.isArray(propValue)) return atom
  const { plugins = [] } = styli.config

  const breakpoints = styli.getTheme('breakpoints') || {}
  const breakpointKeys = Object.keys(breakpoints)

  if (!breakpointKeys.length) {
    console.error('theme breakpoints not provide')
  }

  const plugin = plugins.find((i: any) => i.isMatch?.(atom.key))

  if (!plugin) return atom


  const result = propValue.reduce((result, cur, i) => {
    const { style } = plugin.onAtomStyleCreate!({ ...atom, propValue: cur }, parser)

    const key = breakpoints[breakpointKeys[i - 1]] || 'base'

    return {
      ...result,
      [key]: style,
    }
  }, {})

  atom.style = result
  atom.type = 'responsive'
  atom.className = objectToClassName(propValue)
  atom.handled = true

  return atom
}
