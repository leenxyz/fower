import { styli } from '@styli/core'
import { Atom } from '@styli/atom'
import plugin from '../src'

describe('styli-plugin-text-align', () => {
  styli.configure({ unit: 'px' })

  const { isMatch, onAtomStyleCreate } = plugin()
  const parser = {} as any

  it('isMatch', () => {
    expect(isMatch!('textAlign')).toEqual(true)
    expect(isMatch!('textCenter')).toEqual(true)
  })

  it('onAtomStyleCreate', () => {
    const atom1 = new Atom({
      propKey: 'textAlign',
      propValue: 'center',
      key: 'textAlign',
      type: 'style',
      style: {},
    })
    const newAtom1 = new Atom({
      propKey: 'textAlign',
      propValue: 'center',
      style: { textAlign: 'center' },
      key: 'textAlign',
      type: 'style',
    })
    expect(onAtomStyleCreate!(atom1, parser)).toMatchObject(newAtom1)

    const atom2 = new Atom({
      propKey: 'textCenter',
      propValue: true,
      key: 'textCenter',
      type: 'style',
      style: {},
    })
    const newAtom2 = new Atom({
      propKey: 'textCenter',
      propValue: true,
      style: { textAlign: 'center' },
      key: 'textCenter',
      type: 'style',
    })
    expect(onAtomStyleCreate!(atom2, parser)).toMatchObject(newAtom2)
  })
})
