import { Atom, CSSObject, SheetType } from '@styli/types'
import plugin from '../src'

describe('styli-plugin-css', () => {
  const { isMatch, onAtomStyleCreate } = plugin()
  const sheet = {} as SheetType

  it('isMatch', () => {
    expect(isMatch!('css')).toEqual(true)
    expect(isMatch!('acss')).toEqual(false)
    expect(isMatch!('cssb')).toEqual(false)
  })

  it('onAtomStyleCreate', () => {
    const value: CSSObject = {
      border: '1px solid red',
      ':hover': {
        color: 'yellow',
      },
    }

    const atom: Atom = {
      key: 'css',
      propKey: 'css',
      propValue: value,
      style: {},
      type: 'prefix',
    }

    const newAtom: Atom = {
      key: 'css',
      propKey: 'css',
      propValue: value,
      style: value,
      type: 'prefix',
    }

    expect(onAtomStyleCreate!(atom, sheet)).toMatchObject(newAtom)
  })
})
