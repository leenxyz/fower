import { Atom, SheetType } from '@styli/types'
import plugin from '../src'

describe('styli-plugin-flex-box', () => {
  const { isMatch, onAtomStyleCreate } = plugin()
  const sheet = {} as SheetType

  it('isMatch', () => {
    expect(isMatch!('flex')).toEqual(true)
    expect(isMatch!('order')).toEqual(true)
  })

  it('onAtomStyleCreate', () => {
    const atom1 = { propKey: 'flex', propValue: true } as Atom
    const newAtom1 = {
      propKey: 'flex',
      propValue: true,
      style: { flex: 1 },
    }
    expect(onAtomStyleCreate!(atom1, sheet)).toMatchObject(newAtom1)

    const atom2 = { propKey: 'flex-2', propValue: true } as Atom
    const newAtom2 = { propKey: 'flex-2', propValue: true, style: { flex: 2 } }
    expect(onAtomStyleCreate!(atom2, sheet)).toMatchObject(newAtom2)

    const atom3 = { propKey: 'order-1', propValue: true } as Atom
    const newAtom3 = {
      propKey: 'order-1',
      propValue: true,
      style: { order: 1 },
    }
    expect(onAtomStyleCreate!(atom3, sheet)).toMatchObject(newAtom3)
  })
})
