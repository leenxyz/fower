import { CssObject, Plugin } from '@styli/core'

export default (): Plugin => {
  return {
    name: 'styli-plugin-debug',
    isMatch(key) {
      const list = ['debug', 'debugChildren', 'debugAll']
      return list.includes(key)
    },
    onVisitProp(atom) {
      const propValueIsTrue = atom.propValue === true
      switch (atom.propKey) {
        case 'debug': {
          atom.type = 'prefix'
          atom.style = propValueIsTrue
            ? {
                border: '1px solid gray',
              }
            : (atom.propValue as CssObject)
          break
        }
        case 'debugChildren': {
          atom.type = 'prefix'
          atom.style = propValueIsTrue
            ? {
                border: '1px solid gray',
                div: {
                  border: '1px solid gray',
                },
              }
            : (atom.propValue as CssObject)
          break
        }
        case 'debugAll': {
          atom.type = 'no-prefix'
          atom.style = propValueIsTrue
            ? {
                '*': {
                  border: '1px solid gray',
                },
              }
            : (atom.propValue as CssObject)
          break
        }
      }
      return atom
    },
  }
}
