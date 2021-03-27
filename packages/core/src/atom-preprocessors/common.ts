import { Atom } from '@styli/atom'
import { isBooleanFalse } from '@styli/utils'

const invalidProps = ['excludedProps', 'styliName']

export function commonPreprocessor(atom: Atom): Atom {
  const { propKey, propValue } = atom

  if (isBooleanFalse(propValue)) {
    atom.type = 'invalid'
  }

  // spacial props
  if (invalidProps.includes(propKey)) {
    atom.type = 'invalid'
  }

  return atom
}
