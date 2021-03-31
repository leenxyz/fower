import { Atom } from '@styli/atom'
import plugin from '../src'

describe('styli-plugin-text-size', () => {
  const { isMatch, handleAtom } = plugin()
  const parser = {} as any

  it('isMatch', () => {
    expect(isMatch!('text')).toEqual(true)
    expect(isMatch!('text-10')).toEqual(true)
    expect(isMatch!('text-10rem')).toEqual(true)
  })

  it('handleAtom', () => {
    const atom1 = new Atom({
      propKey: 'text',
      propValue: 10,
      key: 'text',
      style: {},
    })
    const newAtom1 = new Atom({
      propKey: 'text',
      propValue: 10,
      style: { fontSize: 10 },
      key: 'text',
    })
    expect(handleAtom!(atom1, parser)).toMatchObject(newAtom1)
  })
})
