import { Atom } from '@styli/atom'
import plugin from '../src'

describe('styli-plugin-margin', () => {
  const { isMatch, handleAtom } = plugin()
  const parser = {} as any
  it('isMatch', () => {
    expect(isMatch!('m')).toEqual(true)
    expect(isMatch!('ml')).toEqual(true)
    expect(isMatch!('my')).toEqual(true)
    expect(isMatch!('mx-10')).toEqual(true)
    expect(isMatch!('mx-10rem')).toEqual(true)
  })

  it('handleAtom', () => {
    const atom1 = new Atom({
      propKey: 'm',
      propValue: 10,
      key: 'm',
      style: {},
    })
    const newAtom1 = new Atom({
      propKey: 'm',
      propValue: 10,
      style: { margin: 10 },
      key: 'm',
    })
    expect(handleAtom!(atom1, parser)).toMatchObject(newAtom1)
  })
})
