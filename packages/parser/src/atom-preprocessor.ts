import { Atom } from '@styli/atom'
import { Parser } from './parser'
import { isBooleanFalse } from '@styli/utils'
import { digitPreprocessor } from './digit-preprocessor'

const invalidProps = ['excludedProps', 'styliName']
const connector = '--'
const specialPseudos = ['after', 'before', 'placeholder', 'selection']

export function atomPreprocessor(atom: Atom, parser: Parser, styli: any): Atom {
  // let atom = { ...atom }
  const { plugins = [], pseudos = [] } = styli.config
  const { propKey, propValue } = atom
  const { breakpoints, modes } = styli.getTheme()

  const breakpointKeys = Object.keys(breakpoints)
  const modeKeys: string[] = modes || []
  const pseudoKeys: string[] = pseudos

  const regResponsiveStr = `${connector}(${breakpointKeys.join('|')})`
  const regModeStr = `${connector}(${modeKeys.join('|')})$`
  const regPseudoStr = `${connector}(${pseudoKeys.join('|')})`

  const regMode = new RegExp(regModeStr)
  const regPseudo = new RegExp(regPseudoStr)
  const regResponsive = new RegExp(regResponsiveStr)
  const regImportant = /--i/i
  const regColorPostfix = /--[told](\d{1,2}|100)($|--)/i

  /** invalid prop */
  if (invalidProps.includes(propKey) || isBooleanFalse(propValue)) {
    return { ...atom, isValid: false }
  }

  /** handle value like: red500--T40, #666--O30 */
  if (regColorPostfix.test(propValue)) {
    const [colorName, postfix] = propValue.split('--')
    atom.propValue = colorName
    atom.meta.colorPostfix = postfix
  }

  const isMode = regMode.test(propKey)
  const isPseudo = regPseudo.test(propKey)
  const isResponsive = regResponsive.test(propKey)
  const isImportant = regImportant.test(propKey)
  const isColorPostfix = regColorPostfix.test(propKey)

  if (!isMode && !isPseudo && !isResponsive && !isImportant && !isColorPostfix) {
    // handle spacing directly
    return digitPreprocessor(atom, styli)
  }

  const result = propKey.split(connector)

  atom.key = result[0] // key that already removed postfix

  if (isMode) {
    atom.meta.mode = result.find((i) => modeKeys.includes(i))
  }

  if (isPseudo) {
    const pseudo = result.find((i) => pseudoKeys.includes(i)) as string
    const pseudoPrefix = specialPseudos.includes(pseudo) ? '::' : ':'
    atom.meta.pseudo = pseudoPrefix + pseudo
  }

  if (isResponsive) {
    const breakpointType = result.find((i) => breakpointKeys.includes(i)) as string
    atom.meta.breakpoint = breakpoints[breakpointType]
  }

  if (isImportant) {
    atom.meta.important = !!result.find((i) => i === 'i')
  }

  if (isColorPostfix) {
    atom.meta.colorPostfix = result.find((i) => regColorPostfix.test(`--${i}`))
  }

  // check is theme space key, if yes, preprocess it
  atom = digitPreprocessor({ ...atom, key: atom.key }, styli)

  /** handle style */
  const plugin = plugins.find((i: any) => i.isMatch?.(atom.key))
  if (plugin) {
    atom = plugin.handleAtom!({ ...atom, key: atom.key }, parser)
    atom.style = atom.style
  }

  // atom.key = key
  atom.className = propKey
  atom.handled = true

  return atom
}
