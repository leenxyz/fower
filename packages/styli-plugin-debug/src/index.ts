import { CssObject, Plugin } from '@styli/core'

export default (): Plugin => {
  return {
    name: 'styli-plugin-debug',
    isMatch(key) {
      return /^debug([Cc]hildren|[Aa]ll)?/.test(key)
    },
    onVisitProp(atom) {
      const propValueIsTrue = atom.propValue === true

      const stylesMap: any = {
        debug: { border: '1px solid gold' },
        debugchildren: {
          border: '1px solid gold',
          '> *': { border: '1px solid gold' },
        },
        debugall: { '*': { border: '1px solid gold' } },
      }

      const typesMap: any = {
        debug: 'prefix',
        debugchildren: 'prefix',
        debugall: 'no-prefix',
      }
      const key = atom.propKey.toLowerCase()

      atom.type = typesMap[key]
      atom.style = propValueIsTrue ? stylesMap[key] : (atom.propValue as CssObject)

      return atom
    },
  }
}
