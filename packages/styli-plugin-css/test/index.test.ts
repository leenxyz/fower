import { Atom, Sheet } from '@styli/core'
import plugin from '../src'

describe('styli-plugin-css', () => {
  const { isMatch, onVisitProp } = plugin()
  const sheet = {} as Sheet

  it('isMatch', () => {
    expect(isMatch!('css')).toEqual(true)
    expect(isMatch!('acss')).toEqual(false)
    expect(isMatch!('cssb')).toEqual(false)
  })

  it('onVisitProp', () => {
    const atom = {
      propKey: 'css',
      propValue: {
        border: '1px solid red',
        ':hover': {
          color: 'yellow',
        },
      },
      style: {},
    } as Atom

    const newAtom = {
      propKey: 'css',
      propValue: {
        border: '1px solid red',
        ':hover': {
          color: 'yellow',
        },
      },
      style: {
        border: '1px solid red',
        ':hover': {
          color: 'yellow',
        },
      },
      type: 'prefix',
    }

    expect(onVisitProp!(atom, sheet)).toMatchObject(newAtom)
  })
})
