import { StyliPlugin } from '@styli/types'

const alignmentsRegex = /^(justifyContent|justifyItems|justifySelf|alignItems|alignContent|alignSelf)$/i

function isMatch(key: string) {
  return alignmentsRegex.test(key)
}

function flexPropToStyle(key: string, value: any) {
  return { [key]: value }
}

export default (): StyliPlugin => {
  return {
    isMatch,
    handleAtom(atom) {
      atom.style = flexPropToStyle(atom.key, atom.value)
      return atom
    },
  }
}
