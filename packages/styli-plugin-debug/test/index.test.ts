import { Atom, Sheet } from '@styli/core'
import plugin from '../src'

describe('styli-plugin-debug', () => {
  const { isMatch, onVisitProp } = plugin()
  const sheet = {} as Sheet

  it('isMatch', () => {
    expect(isMatch!('debug')).toEqual(true)
    expect(isMatch!('adebug')).toEqual(false)
    expect(isMatch!('deghb')).toEqual(false)
  })

  it('onVisitProp', () => {
    const atom = { propKey: 'debug', propValue: true } as Atom

    const newAtom = {
      propKey: 'debug',
      propValue: true,
      style: {
        border: '1px solid gray',
        div: {
          border: '1px solid gray',
        },
      },
      type: 'prefix',
    }

    expect(onVisitProp!(atom, sheet)).toMatchObject(newAtom)
  })
})
