import { Atom, ParserType } from '@styli/types'
import plugin from '../src'

describe('styli-plugin-debug', () => {
  const { isMatch, onAtomStyleCreate } = plugin()
  const parser = {} as ParserType

  it('isMatch', () => {
    expect(isMatch!('debug')).toEqual(true)
    expect(isMatch!('adebug')).toEqual(false)
    expect(isMatch!('deghb')).toEqual(false)
  })

  it('onAtomStyleCreate', () => {
    const atom = { propKey: 'debug', propValue: true } as Atom

    const newAtom = {
      propKey: 'debug',
      propValue: true,
      style: {
        border: '1px solid gold',
      },
      type: 'prefix',
    }

    expect(onAtomStyleCreate!(atom, parser)).toMatchObject(newAtom)

    const atom2 = { propKey: 'debugChildren', propValue: true } as Atom

    const newAtom2 = {
      propKey: 'debugChildren',
      propValue: true,
      style: {
        border: '1px solid gold',
        '> *': { border: '1px solid gold' },
      },
      type: 'prefix',
    }

    expect(onAtomStyleCreate!(atom2, parser)).toMatchObject(newAtom2)
  })
})
