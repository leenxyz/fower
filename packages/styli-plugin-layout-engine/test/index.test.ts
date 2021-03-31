import { Atom } from '@styli/atom'
import plugin from '../src'

describe('styli-plugin-layout-engine', () => {
  const { isMatch, handleAtom } = plugin()

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

  it('handleAtom', () => {
    const parser1 = { props: { row: true, toCenter: true } } as any
    const atom1 = new Atom({
      propKey: 'toCenter',
      propValue: true,
    })
    const newAtom1 = new Atom({
      propKey: 'toCenter',
      propValue: true,
      style: {
        justifyContent: 'center',
        alignItems: 'center',
      },
    })
    expect(handleAtom!(atom1, parser1)).toMatchObject(newAtom1)
  })
})
