import { styli } from '@styli/core'
import { Atom, ModifierType, SheetType, StyliPlugin } from '@styli/types'
import { isValidPropValue } from '@styli/utils'
import plugin from '../src'

describe('styli-plugin-pseudo', () => {
  const { onAtomModify } = plugin()
  const sheet = {} as SheetType

  it('middleware', () => {
    const atom1: Atom = {
      propKey: 'f-10--hover',
      propValue: true,
      key: 'f-10--hover',
      type: 'style',
      style: {},
    }

    expect(onAtomModify!(textPlugin(), atom1, sheet, {} as any)).toMatchObject({
      ...atom1,
      type: 'prefix',
      style: {
        ':hover': {
          fontSize: '10px',
        },
      },
    })
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
          fontSize: styli.getValue('' + propValue, ModifierType.text),
        }
      } else {
        const [, value] = propKey.split('-')
        atom.style = { fontSize: styli.getValue(value, ModifierType.text) }
      }

      return atom
    },
  }
}
