import { styli } from '@styli/core'
import { Atom } from '@styli/atom'
import plugin from '../src'

describe('styli-plugin-shadow', () => {
  styli.configure({
    theme: {
      shadow: {
        xs: '0 0 0 1px rgba(0, 0, 0, 0.05)',
      },
    } as any,
  })

  const { isMatch, handleAtom } = plugin()
  const parser = {} as any
  it('isMatch', () => {
    expect(isMatch!('shadow')).toEqual(true)
    expect(isMatch!('shadowXS')).toEqual(true)
  })

  it('handleAtom', () => {
    const atom1 = new Atom({
      propKey: 'shadow',
      propValue: '0 0 0 1px rgba(0, 0, 0, 0.05)',
      key: 'shadow',
      style: {},
    })
    const newAtom1 = new Atom({
      key: 'shadow',
      propKey: 'shadow',
      propValue: '0 0 0 1px rgba(0, 0, 0, 0.05)',
      style: { boxShadow: '0 0 0 1px rgba(0, 0, 0, 0.05)' },
    })
    expect(handleAtom!(atom1, parser)).toMatchObject(newAtom1)

    const atom2 = new Atom({
      propKey: 'shadowXS',
      propValue: true,
      key: 'shadowXS',
      style: {},
    })
    const newAtom2 = {
      propKey: 'shadowXS',
      propValue: true,
      style: { boxShadow: '0 0 0 1px rgba(0, 0, 0, 0.05)' },
      key: 'shadowXS',
    }
    expect(handleAtom!(atom2, parser)).toMatchObject(newAtom2)
  })
})
