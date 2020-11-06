import { Atom, Sheet } from '@styli/core'
import plugin from '../src'

describe('styli-plugin-reset', () => {
  const { isMatch, onVisitProp } = plugin()
  const sheet = {} as Sheet

  it('isMatch', () => {
    expect(isMatch!('reset')).toEqual(true)
    expect(isMatch!('areset')).toEqual(false)
    expect(isMatch!('resdet')).toEqual(false)
  })

  it('onVisitProp', () => {
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
      type: 'no-prefix',
    }

    expect(onVisitProp!(atom, sheet)).toMatchObject(newAtom)
  })
})
