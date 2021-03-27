import { Atom } from '@styli/atom'
import plugin from '../src'

describe('styli-plugin-position', () => {
  const { isMatch, onAtomStyleCreate } = plugin()

  const parser = {} as any

  it('isMatch', () => {
    expect(isMatch!('rounded')).toEqual(true)
    expect(isMatch!('roundedT-10')).toEqual(true)
    expect(isMatch!('roundedBL-10rem')).toEqual(true)
  })

  it('onAtomStyleCreate', () => {
    const atom1 = new Atom({
      propKey: 'rounded',
      propValue: 10,
      key: 'rounded',
      type: 'style',
      style: {},
    })
    const newAtom1 = new Atom({
      key: 'rounded',
      type: 'style',
      propKey: 'rounded',
      propValue: 10,
      style: {
        borderRadius: '10px',
      },
    })
    expect(onAtomStyleCreate!(atom1, parser)).toMatchObject(newAtom1)

    const atom2 = new Atom({
      propKey: 'roundedT-10',
      propValue: true,
      key: 'roundedT-10',
      type: 'style',
      style: {},
    })
    const newAtom2 = {
      key: 'roundedT-10',
      type: 'style',
      propKey: 'roundedT-10',
      propValue: true,
      style: { borderTopLeftRadius: '10px', borderTopRightRadius: '10px' },
    }
    expect(onAtomStyleCreate!(atom2, parser)).toMatchObject(newAtom2)

    const atom3 = new Atom({
      propKey: 'roundedBR-10rem',
      propValue: true,
      key: 'roundedBR-10rem',
      type: 'style',
      style: {},
    })
    const newAtom3 = new Atom({
      key: 'roundedBR-10rem',
      type: 'style',
      propKey: 'roundedBR-10rem',
      propValue: true,
      style: { borderBottomRightRadius: '10rem' },
    })
    expect(onAtomStyleCreate!(atom3, parser)).toMatchObject(newAtom3)
  })
})
