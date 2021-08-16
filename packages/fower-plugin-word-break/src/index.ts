import { FowerPlugin } from '@fower/core'

const maps: any = {
  breaknormal: { overflowWrap: 'normal', wordBreak: 'normal' },
  breakwords: { overflowWrap: 'break-word' },
  breakall: { wordBreak: 'break-all' },
}

export default (): FowerPlugin => {
  return {
    isMatch(key) {
      return /^break(normal|words|all)$/i.test(key)
    },
    handleAtom(atom) {
      atom.style = maps[atom.key.toLowerCase()]
      return atom
    },
  }
}
