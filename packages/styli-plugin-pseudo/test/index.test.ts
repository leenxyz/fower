import { Atom, Sheet, Plugin, getValue, ModifierType, styli } from '@styli/core'
import { isValidPropValue } from '@styli/utils'
import plugin from '../src'

describe('styli-plugin-pseudo', () => {
  styli.configure({ unit: 'px' })

  const { middleware } = plugin()
  const sheet = {} as Sheet

  it('middleware', () => {
    const atom1 = { propKey: 'f-10--hover', propValue: true } as Atom
    expect(middleware!(textPlugin(), atom1, sheet, {} as any)).toMatchObject({
      ...atom1,
      style: {
        ':hover': {
          fontSize: '10px',
        },
      },
    })
  })
})

const textPlugin = (): Plugin => {
  return {
    name: 'styli-plugin-pseudo',
    isMatch(key) {
      return /^f(-.+)?$/.test(key)
    },
    onAtomStyleCreate(atom) {
      const { propKey, propValue } = atom
      if (isValidPropValue(propValue)) {
        atom.style = {
          fontSize: Array.isArray(propValue)
            ? propValue.map((v) => getValue(v, ModifierType.text))
            : getValue('' + propValue, ModifierType.text),
        }
      } else {
        const [, value] = propKey.split('-')
        atom.style = { fontSize: getValue(value, ModifierType.text) }
      }

      return atom
    },
  }
}
