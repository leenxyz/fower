import { styli } from '@styli/core'
import { Atom, StyliPlugin } from '@styli/types'
import { isValidPropValue } from '@styli/utils'
import plugin from '../src'

describe('styli-plugin-media-queries', () => {

  styli.configure(() => {
    return {
      theme: {
        breakpoints: ['100px', '200px', '300px', '300px']
      } as any
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
        '100px': { fontSize: '10px' },
        '200px': { fontSize: '20px' },
        '300px': { fontSize: '40px' }
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
