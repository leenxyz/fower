import { Atom, SheetType } from '@styli/types'
import plugin from '../src'

describe('styli-plugin-debug', () => {
  const { isMatch, onAtomStyleCreate } = plugin()
  const sheet = {} as SheetType

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

    expect(onAtomStyleCreate!(atom, sheet)).toMatchObject(newAtom)

    const atom1 = { propKey: 'debugAll', propValue: true } as Atom


    const newAtom1 = {
      propKey: 'debugAll',
      propValue: true,
      style: {
        '*': { border: '1px solid gold' }
      },
      type: 'global',
    }

    expect(onAtomStyleCreate!(atom1, sheet)).toMatchObject(newAtom1)

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

    expect(onAtomStyleCreate!(atom2, sheet)).toMatchObject(newAtom2)
  })
})
