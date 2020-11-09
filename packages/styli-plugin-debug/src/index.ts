import { CssObject, Plugin } from '@styli/core'

export default (): Plugin => {
  return {
    name: 'styli-plugin-debug',
    isMatch(key) {
      const list = ['debug', 'debugChildren', 'debugAll']
      return list.includes(key)
    },
    onVisitProp(atom) {
      if (atom.propValue !== true) {
        atom.style = atom.propValue as CssObject
      } else {
        switch (atom.propKey) {
          case 'debug': {
            atom.type = 'prefix'
            atom.style = {
              border: '1px solid gray',
            }
            break
          }
          case 'debugChildren': {
            atom.type = 'prefix'
            atom.style = {
              border: '1px solid gray',
              div: {
                border: '1px solid gray',
              },
            }
            break
          }
          case 'debugAll': {
            atom.type = 'no-prefix'
            atom.style = {
              '*': {
                border: '1px solid gray',
              },
            }
            break
          }
        }
      }

      return atom
    },
  }
}
