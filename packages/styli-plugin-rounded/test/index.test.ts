import { Atom, styli } from '@styli/core'
import plugin from '../src'

describe('styli-plugin-position', () => {
  styli.setup({ unit: 'px' })

  const { isMatch, onVisitProp } = plugin()

  const sheet = {} as any

  it('isMatch', () => {
    expect(isMatch!('rounded')).toEqual(true)
    expect(isMatch!('roundedT-10')).toEqual(true)
    expect(isMatch!('roundedBL-10rem')).toEqual(true)
  })

  it('onVisitProp', () => {
    const atom1 = { propKey: 'rounded', propValue: 10 } as Atom
    const newAtom1 = {
      propKey: 'rounded',
      propValue: 10,
      style: {
        borderBottomLeftRadius: '10px',
        borderBottomRightRadius: '10px',
        borderTopLeftRadius: '10px',
        borderTopRightRadius: '10px',
      },
    }
    expect(onVisitProp!(atom1, sheet)).toMatchObject(newAtom1)

    const atom2 = { propKey: 'roundedT-10', propValue: true } as Atom
    const newAtom2 = {
      propKey: 'roundedT-10',
      propValue: true,
      style: { borderTopLeftRadius: '10px', borderTopRightRadius: '10px' },
    }
    expect(onVisitProp!(atom2, sheet)).toMatchObject(newAtom2)

    const atom3 = { propKey: 'roundedBR-10rem', propValue: true } as Atom
    const newAtom3 = {
      propKey: 'roundedBR-10rem',
      propValue: true,
      style: { borderBottomRightRadius: '10rem' },
    }
    expect(onVisitProp!(atom3, sheet)).toMatchObject(newAtom3)
  })
})
