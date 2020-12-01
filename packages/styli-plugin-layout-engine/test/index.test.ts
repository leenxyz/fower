import { Atom } from '@styli/core'
import plugin from '../src'

describe('styli-plugin-layout-engine', () => {
  const { isMatch, onAtomStyleCreate } = plugin()

  it('isMatch', () => {
    expect(isMatch!('row')).toEqual(true)
    expect(isMatch!('column')).toEqual(true)
    expect(isMatch!('center')).toEqual(true)
    expect(isMatch!('centerX')).toEqual(true)
    expect(isMatch!('centerY')).toEqual(true)
    expect(isMatch!('evenly')).toEqual(true)
    expect(isMatch!('around')).toEqual(true)
    expect(isMatch!('between')).toEqual(true)
    expect(isMatch!('bottom')).toEqual(true)
    expect(isMatch!('top')).toEqual(true)
    expect(isMatch!('left')).toEqual(true)
    expect(isMatch!('right')).toEqual(true)
  })

  it('onAtomStyleCreate', () => {
    const sheet1 = { props: { row: true, center: true } } as any
    const atom1 = { propKey: 'center', propValue: true } as Atom
    const newAtom1 = {
      propKey: 'center',
      propValue: true,
      style: {
        flexDirection: 'row',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
    }
    expect(onAtomStyleCreate!(atom1, sheet1)).toMatchObject(newAtom1)
  })
})
