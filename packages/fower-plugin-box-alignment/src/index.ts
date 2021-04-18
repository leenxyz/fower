import { FowerPlugin } from '@fower/types'

function isMatch(key: string) {
  return /^justify(Content|Items|Self)$|^align(Items|Content|Self)$/i.test(key)
}

export default (): FowerPlugin => {
  return {
    isMatch,
    handleAtom(atom) {
      atom.style = {
        [atom.key]: atom.value,
      }
      return atom
    },
  }
}
