import { CssObject, Plugin } from '@styli/core'

export default (): Plugin => {
  return {
    name: 'styli-plugin-css',
    isMatch(key) {
      return key === 'css'
    },
    onVisitProp(atom) {
      atom.type = 'prefix'
      atom.style = atom.propValue as CssObject
      return atom
    },
  }
}
