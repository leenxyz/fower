import { CSSObject, StyliPlugin } from '@styli/types'
import { hash } from '@styli/utils'

export default (): StyliPlugin => {
  return {
    name: 'styli-plugin-css',
    isMatch(key) {
      return key === 'css'
    },
    onVisitProp(atom) {
      atom.type = 'prefix'
      atom.style = atom.propValue as CSSObject
      atom.className = 'css-' + hash(JSON.stringify(atom.propValue))
      return atom
    },
  }
}
