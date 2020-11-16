import { Atom, styli } from '@styli/core'
import plugin from '../src'

describe('styli-plugin-position', () => {
  styli.configure({ unit: 'px' })

  const { isMatch, onVisitProp } = plugin()
  const sheet = {} as any

  it('isMatch', () => {
    expect(isMatch!('w')).toEqual(true)
    expect(isMatch!('s-20')).toEqual(true)
    expect(isMatch!('c-10rem')).toEqual(true)
    expect(isMatch!('maxH-10')).toEqual(true)
  })

  it('onVisitProp', () => {
    const atom1 = { propKey: 'w', propValue: 10 } as Atom
    const newAtom1 = { propKey: 'w', propValue: 10, style: { width: '10px' } }
    expect(onVisitProp!(atom1, sheet)).toMatchObject(newAtom1)

    const atom2 = { propKey: 's-20', propValue: true } as Atom
    const newAtom2 = { propKey: 's-20', propValue: true, style: { width: '20px', height: '20px' } }
    expect(onVisitProp!(atom2, sheet)).toMatchObject(newAtom2)

    const atom3 = { propKey: 'c-10rem', propValue: true } as Atom
    const newAtom3 = {
      propKey: 'c-10rem',
      propValue: true,
      style: { width: '10rem', height: '10rem', borderRadius: '10rem' },
    }
    expect(onVisitProp!(atom3, sheet)).toMatchObject(newAtom3)

    const atom4 = { propKey: 'maxH-10', propValue: true } as Atom
    const newAtom4 = {
      propKey: 'maxH-10',
      propValue: true,
      style: { maxHeight: '10px' },
    }
    expect(onVisitProp!(atom4, sheet)).toMatchObject(newAtom4)
  })
})
