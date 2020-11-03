import { CssObject, Plugin } from '@styli/core'

export default (): Plugin => {
  return {
    name: 'styli-plugin-reset',
    isMatch(key) {
      return key === 'reset'
    },
    onVisitProp(atom) {
      atom.type = 'no-prefix'

      if (atom.propValue === true) {
        atom.style = {
          '*': {
            padding: 0,
            margin: 0,
          },
        }
      } else {
        atom.style = atom.propValue as CssObject
      }

      return atom
    },
  }
}
