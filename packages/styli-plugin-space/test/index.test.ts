import { Parser } from '@styli/parser'
import { Atom } from '@styli/atom'
import plugin from '../src'

describe('styli-plugin-space', () => {
  const { isMatch, onAtomStyleCreate } = plugin()
  const parser = {} as Parser

  it('isMatch', () => {
    expect(isMatch!('space')).toEqual(true)
    expect(isMatch!('spaceX')).toEqual(true)
    expect(isMatch!('spaceX-10')).toEqual(true)
    expect(isMatch!('spaceY-20')).toEqual(true)
  })

  it('onAtomStyleCreate', () => {
    const atom1 = new Atom({
      propKey: 'space',
      propValue: 10,
      style: {},
      key: 'space',
    })
    const newAtom1 = new Atom({
      propKey: 'space',
      propValue: 10,
      key: 'space',
      style: {
        '>*:not(:last-child)': {
          marginRight: '10px',
          marginBottom: '10px',
        },
      },
    })
    expect(onAtomStyleCreate!(atom1, parser)).toMatchObject(newAtom1)
  })
})
