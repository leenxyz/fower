import { Parser } from './parser'
import { Atom } from '@styli/atom'
import { isBooleanFalse } from '@styli/utils'
import { spacePreprocessor } from './space-preprocessor'

const invalidProps = ['excludedProps', 'styliName']
const connector = '--'
const pseudoKeys = [
  'active',
  'checked',
  'disabled',
  'enabled',
  'default',
  'empty',
  'focus',
  'focus-within',
  'invalid',
  'hover',
  'link',
  'visited',
  'first-child',
  'last-child',
  'after',
  'before',
  'placeholder',
  'selection',
]
const specialPseudos = ['after', 'before', 'placeholder', 'selection']

export function atomPreprocessor(initialAtom: Atom, parser: Parser, styli: any): Atom {
  let atom = { ...initialAtom }
  const { plugins = [] } = styli.config
  const { propKey, propValue } = atom
  const meta: typeof atom.meta = {}
  const breakpoints = styli.getTheme('breakpoints') || {}

  const breakpointKeys = Object.keys(breakpoints)
  const modeKeys: string[] = styli.getTheme('modes') || []

  const regResponsiveStr = `${connector}(${breakpointKeys.join('|')})`
  const regModeStr = `${connector}(${modeKeys.join('|')})$`
  const regPseudoStr = `${connector}(${pseudoKeys.join('|')})`

  const regMode = new RegExp(regModeStr)
  const regPseudo = new RegExp(regPseudoStr)
  const regResponsive = new RegExp(regResponsiveStr)

  /** invalid prop */
  if (invalidProps.includes(propKey) || isBooleanFalse(propValue)) {
    return { ...atom, isValid: false }
  }

  const isMode = regMode.test(propKey) // is mode style
  const isPseudo = regPseudo.test(propKey) // is pseudo style
  const isResponsive = regResponsive.test(propKey) // is responsive style

  if (!isMode && !isPseudo && !isResponsive) {
    // handle spacing directly
    return spacePreprocessor(atom, styli)
  }

  const result = propKey.split(connector)

  atom.key = result[0]

  if (isMode) {
    meta.mode = result.find((i) => modeKeys.includes(i))
  }

  if (isPseudo) {
    const pseudo = result.find((i) => pseudoKeys.includes(i)) as string
    const pseudoPrefix = specialPseudos.includes(pseudo) ? '::' : ':'
    meta.pseudo = pseudoPrefix + pseudo
  }

  if (isResponsive) {
    const breakpointType = result.find((i) => breakpointKeys.includes(i)) as string
    meta.breakpoint = breakpoints[breakpointType]
  }

  // check is theme space key, if yes, preprocess it
  atom = spacePreprocessor({ ...atom, key: atom.key }, styli)

  /** handle style */
  const plugin = plugins.find((i: any) => i.isMatch?.(atom.key))
  if (plugin) {
    atom = plugin.onAtomStyleCreate!({ ...atom, key: atom.key }, parser)
    atom.style = atom.style
  }

  // atom.key = key
  atom.className = propKey
  atom.meta = meta
  atom.handled = true

  return atom
}
