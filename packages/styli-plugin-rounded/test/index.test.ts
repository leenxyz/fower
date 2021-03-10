import { Atom } from '@styli/types'
import plugin from '../src'

describe('styli-plugin-position', () => {
  const { isMatch, onAtomStyleCreate } = plugin()

  const sheet = {} as any

  it('isMatch', () => {
    expect(isMatch!('rounded')).toEqual(true)
    expect(isMatch!('roundedT-10')).toEqual(true)
    expect(isMatch!('roundedBL-10rem')).toEqual(true)
  })

  it('onAtomStyleCreate', () => {
    const atom1: Atom = {
      propKey: 'rounded',
      propValue: 10,
      key: 'rounded',
      type: 'style',
      style: {},
    }
    const newAtom1: Atom = {
      key: 'rounded',
      type: 'style',
      propKey: 'rounded',
      propValue: 10,
      style: {
        borderRadius: '10px',
      },
    }
    expect(onAtomStyleCreate!(atom1, sheet)).toMatchObject(newAtom1)

    const atom2: Atom = {
      propKey: 'roundedT-10',
      propValue: true,
      key: 'roundedT-10',
      type: 'style',
      style: {},
    }
    const newAtom2 = {
      key: 'roundedT-10',
      type: 'style',
      propKey: 'roundedT-10',
      propValue: true,
      style: { borderTopLeftRadius: '10px', borderTopRightRadius: '10px' },
    }
    expect(onAtomStyleCreate!(atom2, sheet)).toMatchObject(newAtom2)

    const atom3: Atom = {
      propKey: 'roundedBR-10rem',
      propValue: true,
      key: 'roundedBR-10rem',
      type: 'style',
      style: {},
    }
    const newAtom3: Atom = {
      key: 'roundedBR-10rem',
      type: 'style',
      propKey: 'roundedBR-10rem',
      propValue: true,
      style: { borderBottomRightRadius: '10rem' },
    }
    expect(onAtomStyleCreate!(atom3, sheet)).toMatchObject(newAtom3)
  })
})
