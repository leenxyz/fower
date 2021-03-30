import { StyliPlugin } from '@styli/types'

function isMatch(key: string) {
  return key === 'visibility'
}

function visibilityPropToStyle(propKey: string, propValue: any): any {
  return { [propKey]: propValue }
}

export default (): StyliPlugin => {
  return {
    isMatch,
    onAtomStyleCreate(atom) {
      atom.style = visibilityPropToStyle(atom.propKey, atom.propValue)
      return atom
    },
  }
}
