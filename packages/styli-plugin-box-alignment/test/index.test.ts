import { Parser } from '@styli/parser'
import { Atom } from '@styli/atom'
import plugin from '../src'

describe('styli-plugin-flex-box', () => {
  const { handleAtom } = plugin()
  const parser = {} as Parser

  it('handleAtom', () => {
    const atom1 = { propKey: 'column', propValue: true } as Atom
    const newAtom1 = {
      propKey: 'column',
      propValue: true,
      style: {},
    }
    expect(handleAtom!(atom1, parser)).toMatchObject(newAtom1)

    const atom2 = { propKey: 'flexWrap', propValue: 'wrap' } as Atom
    const newAtom2 = { propKey: 'flexWrap', propValue: 'wrap', style: { flexWrap: 'wrap' } }
    expect(handleAtom!(atom2, parser)).toMatchObject(newAtom2)
  })
})
