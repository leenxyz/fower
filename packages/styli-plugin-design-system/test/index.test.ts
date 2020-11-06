import { Atom, Sheet, Plugin, getValue, ModifierType, styli } from '@styli/core'
import { isValidPropValue } from '@styli/utils'
import plugin from '../src'

describe('styli-plugin-design-system', () => {

  styli.setup({
    theme: {
      fontSizes: ['12px', '14px', '16px', '20px', '24px', '32px', '48px', '64px']
    } as any
  })

  const { middleware } = plugin()
  const sheet = {} as Sheet

  it('middleware', () => {
    const atom1 = { propKey: 'f0', propValue: true } as Atom
    expect(middleware!(textPlugin(), atom1, sheet)).toMatchObject({
      ...atom1,
      style: {
        fontSize: '12px'
      },
    })

    const atom2 = { propKey: 'f3', propValue: true } as Atom
    expect(middleware!(textPlugin(), atom2, sheet)).toMatchObject({
      ...atom2,
      style: {
        fontSize: '20px'
      },
    })
  })
})


const textPlugin = (): Plugin => {
  return {
    name: 'styli-plugin-text-heading',
    isMatch(key) { return /^f(-.+)?$/.test(key) },
    onVisitProp(atom) {
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
