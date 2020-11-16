import { Atom, styli } from '@styli/core'
import plugin from '../src'

describe('styli-plugin-margin', () => {
  styli.configure({ unit: 'px' })

  const { isMatch, onVisitProp } = plugin()
  const sheet = {} as any
  it('isMatch', () => {
    expect(isMatch!('m')).toEqual(true)
    expect(isMatch!('ml')).toEqual(true)
    expect(isMatch!('my')).toEqual(true)
    expect(isMatch!('mx-10')).toEqual(true)
    expect(isMatch!('mx-10rem')).toEqual(true)
  })

  it('onVisitProp', () => {
    const atom1 = { propKey: 'm', propValue: 10 } as Atom
    const newAtom1 = { propKey: 'm', propValue: 10, style: { margin: '10px' } }
    expect(onVisitProp!(atom1, sheet)).toMatchObject(newAtom1)

    const atom2 = { propKey: 'ml-20', propValue: true } as Atom
    const newAtom2 = { propKey: 'ml-20', propValue: true, style: { marginLeft: '20px' } }
    expect(onVisitProp!(atom2, sheet)).toMatchObject(newAtom2)

    const atom3 = { propKey: 'mx-10rem', propValue: true } as Atom
    const newAtom3 = {
      propKey: 'mx-10rem',
      propValue: true,
      style: { marginLeft: '10rem', marginRight: '10rem' },
    }
    expect(onVisitProp!(atom3, sheet)).toMatchObject(newAtom3)
  })
})
