import { Atom } from '@styli/atom'
import plugin from '../src'

describe('styli-plugin-rouned', () => {
  const { isMatch, handleAtom } = plugin()

  const parser = {} as any

  it('isMatch', () => {
    expect(isMatch!('rounded')).toEqual(true)
    expect(isMatch!('roundedT-10')).toEqual(true)
    expect(isMatch!('roundedBL-10rem')).toEqual(true)
  })

  it('handleAtom', () => {
    const atom1 = new Atom({
      propKey: 'rounded',
      propValue: 10,
      key: 'rounded',
      style: {},
    })
    const newAtom1 = new Atom({
      key: 'rounded',
      propKey: 'rounded',
      propValue: 10,
      style: {
        borderRadius: 10,
      },
    })
    expect(handleAtom!(atom1, parser)).toMatchObject(newAtom1)
  })
})
