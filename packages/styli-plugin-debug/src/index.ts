import { CSSObject, StyliPlugin } from '@styli/types'

export default (): StyliPlugin => {
  return {
    name: 'styli-plugin-debug',
    isMatch(key) {
      return /^debug(Children)?/i.test(key)
    },
    onAtomStyleCreate(atom) {
      const propValueIsTrue = atom.propValue === true

      const { propKey } = atom
      const { style, type } = getDebugConf(propKey.replace('debug', '').toLowerCase())

      atom.type = type as any
      atom.style = propValueIsTrue ? style : (atom.propValue as CSSObject)

      return atom
    },
  }
}

function getDebugConf(key: string) {
  switch (key) {
    case 'children':
      return {
        style: {
          border: '1px solid gold',
          '> *': { border: '1px solid gold' },
        },
        type: 'prefix',
      }
    default:
      return {
        style: {
          border: '1px solid gold',
        },
        type: 'prefix',
      }
  }
}
