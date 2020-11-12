import { CssObject, Plugin } from '@styli/core'
import { hash } from '@styli/utils'

export default (): Plugin => {
  return {
    name: 'styli-plugin-css',
    isMatch(key) {
      return key === 'css'
    },
    onVisitProp(atom) {
      atom.type = 'prefix'
      atom.style = atom.propValue as CssObject
      atom.className = 'css-' + hash(JSON.stringify(atom.propValue))
      return atom
    },
  }
}
