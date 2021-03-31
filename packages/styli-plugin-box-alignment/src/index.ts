import { StyliPlugin } from '@styli/types'

const alignmentsRegex = /^(justifyContent|justifyItems|justifySelf|alignItems|alignContent|alignSelf)$/i

function isMatch(key: string) {
  return alignmentsRegex.test(key)
}

function flexPropToStyle(prop: string, propValue: any) {
  return { [prop]: propValue }
}

export default (): StyliPlugin => {
  return {
    isMatch,
    handleAtom(atom) {
      atom.style = flexPropToStyle(atom.propKey, atom.propValue)
      return atom
    },
  }
}
