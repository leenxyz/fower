import { Atom, SheetType } from '@styli/types'
import plugin from '../src'

describe('styli-plugin-reset', () => {
  const { isMatch, onAtomStyleCreate } = plugin()
  const sheet = {} as SheetType

  it('isMatch', () => {
    expect(isMatch!('reset')).toEqual(true)
    expect(isMatch!('areset')).toEqual(false)
    expect(isMatch!('resdet')).toEqual(false)
  })

  it('onAtomStyleCreate', () => {
    const value = {
      '*': {
        margin: 0,
        padding: 0,
      },
    }

    const atom: Atom = {
      propKey: 'reset',
      propValue: value,
      key: 'reset',
      type: 'style',
      style: {},
    }

    const newAtom: Atom = {
      key: 'reset',
      propKey: 'reset',
      propValue: value,
      style: value,
      type: 'global',
    }

    expect(onAtomStyleCreate!(atom, sheet)).toMatchObject(newAtom)
  })
})
