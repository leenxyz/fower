import { Atom } from '@styli/types'
import plugin from '../src'

describe('styli-plugin-layout-engine', () => {
  const { isMatch, onAtomStyleCreate } = plugin()

  it('isMatch', () => {
    expect(isMatch!('toCenter')).toEqual(true)
    expect(isMatch!('toCenterX')).toEqual(true)
    expect(isMatch!('toCenterY')).toEqual(true)
    expect(isMatch!('toEvenly')).toEqual(true)
    expect(isMatch!('toAround')).toEqual(true)
    expect(isMatch!('toBetween')).toEqual(true)
    expect(isMatch!('toBottom')).toEqual(true)
    expect(isMatch!('toTop')).toEqual(true)
    expect(isMatch!('toLeft')).toEqual(true)
    expect(isMatch!('toRight')).toEqual(true)
  })

  it('onAtomStyleCreate', () => {
    const sheet1 = { props: { row: true, toCenter: true } } as any
    const atom1 = { propKey: 'toCenter', propValue: true } as Atom
    const newAtom1 = {
      propKey: 'toCenter',
      propValue: true,
      style: {
        justifyContent: 'center',
      },
    }
    expect(onAtomStyleCreate!(atom1, sheet1)).toMatchObject(newAtom1)
  })
})
