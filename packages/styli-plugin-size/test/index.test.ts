import { Atom } from '@styli/atom'
import plugin from '../src'

describe('styli-plugin-size', () => {
  const { isMatch, handleAtom } = plugin()
  const parser = {} as any

  it('isMatch', () => {
    expect(isMatch!('w')).toEqual(true)
    expect(isMatch!('square-20')).toEqual(true)
    expect(isMatch!('circle-10rem')).toEqual(true)
    expect(isMatch!('maxH-10')).toEqual(true)
    expect(isMatch!('square-10px')).toEqual(true)
  })

  it('handleAtom', () => {
    const atom1 = new Atom({
      propKey: 'w',
      propValue: 10,
      key: 'w',
      style: {},
    })
    const newAtom1 = new Atom({
      propKey: 'w',
      propValue: 10,
      style: { width: 10 },
      key: 'w',
    })
    expect(handleAtom!(atom1, parser)).toMatchObject(newAtom1)
  })
})
