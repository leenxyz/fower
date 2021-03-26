import { styli } from '@styli/core'
import { Atom, StyliPlugin } from '@styli/types'
import { isValidPropValue } from '@styli/utils'
import plugin from '../src'

describe('styli-plugin-media-queries', () => {
  styli.configure(() => {
    return {
      theme: {
        breakpoints: {
          // => @media (min-width: 640px) { ... }
          sm: '640px',
          // => @media (min-width: 768px) { ... }
          md: '768px',

          // => @media (min-width: 1024px) { ... }
          lg: '1024px',

          // => @media (min-width: 1280px) { ... }
          xl: '1280px',

          // => @media (min-width: 1536px) { ... }
          '2xl': '1536px',
        },
      } as any,
    }
  })

  const { onAtomModify } = plugin()
  const sheet = {} as any

  it('onAtomModify', () => {
    const atom = {
      propKey: 'f',
      propValue: [10, 20, 30, 40] as any,
      type: 'style',
      style: {},
    } as Atom
    const newAtom = {
      propKey: 'f',
      propValue: [10, 20, 30, 40] as any,
      type: 'media-queries',
      style: {
        base: { fontSize: '10px' },
        '640px': { fontSize: '20px' },
        '768px': { fontSize: '30px' },
        '1024px': { fontSize: '40px' },
      } as any,
    } as Atom
    expect(onAtomModify!(textPlugin(), atom, sheet, {} as any)).toMatchObject(newAtom)
  })
})

const textPlugin = (): StyliPlugin => {
  return {
    name: 'styli-plugin-pseudo',
    isMatch(key) {
      return /^f(-.+)?$/.test(key)
    },
    onAtomStyleCreate(atom) {
      const { propKey, propValue } = atom
      if (isValidPropValue(propValue)) {
        atom.style = {
          fontSize: styli.getValue('' + propValue),
        }
      } else {
        const [, value] = propKey.split('-')
        atom.style = { fontSize: styli.getValue(value) }
      }

      return atom
    },
  }
}
