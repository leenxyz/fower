import { styli } from '@styli/core'
import { CSSObject, StyliPlugin } from '@styli/types'

export default (): StyliPlugin => {
  return {
    name: 'styli-plugin-debug',
    isMatch(key) {
      return /^debug([Cc]hildren|[Aa]ll)?/.test(key)
    },
    onAtomStyleCreate(atom) {
      if (!styli.getConfig('dev')) {
        atom.type = 'invalid'
        return atom
      }

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
        debugall: 'global',
      }
      const key = atom.propKey.toLowerCase()

      atom.type = typesMap[key]
      atom.style = propValueIsTrue ? stylesMap[key] : (atom.propValue as CSSObject)

      return atom
    },
  }
}
