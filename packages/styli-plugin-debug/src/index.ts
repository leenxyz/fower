import { CssObject, Plugin } from '@styli/core'

export default (): Plugin => {
  return {
    name: 'styli-plugin-debug',
    isMatch(key) {
      return key === 'debug'
    },
    onVisitProp(atom) {
      atom.type = 'prefix'

      if (atom.propValue === true) {
        atom.style = {
          border: '1px solid gray',
          div: {
            border: '1px solid gray',
          },
        }
      } else {
        atom.style = atom.propValue as CssObject
      }

      return atom
    },
  }
}
