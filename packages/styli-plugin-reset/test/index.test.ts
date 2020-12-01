import { Atom, Sheet } from '@styli/core'
import plugin from '../src'

describe('styli-plugin-reset', () => {
  const { isMatch, onAtomStyleCreate } = plugin()
  const sheet = {} as Sheet

  it('isMatch', () => {
    expect(isMatch!('reset')).toEqual(true)
    expect(isMatch!('areset')).toEqual(false)
    expect(isMatch!('resdet')).toEqual(false)
  })

  it('onAtomStyleCreate', () => {
    const atom = { propKey: 'reset', propValue: true } as Atom

    const newAtom = {
      propKey: 'reset',
      propValue: true,
      style: {
        '*': {
          margin: 0,
          padding: 0,
        },
      },
      type: 'global',
    }

    expect(onAtomStyleCreate!(atom, sheet)).toMatchObject(newAtom)
  })
})
