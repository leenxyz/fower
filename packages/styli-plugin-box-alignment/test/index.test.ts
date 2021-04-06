import { Parser } from '@styli/parser'
import { Atom } from '@styli/atom'
import plugin from '../src'

describe('styli-plugin-box-alignment', () => {
  const { handleAtom } = plugin()
  const parser = {} as Parser

  it('handleAtom', () => {
    const atom1 = new Atom({ propKey: 'column', propValue: true })
    const newAtom1 = new Atom({
      propKey: 'column',
      propValue: true,
      style: {},
    })
    expect(handleAtom!(atom1, parser)).toMatchObject(newAtom1)

    const atom2 = new Atom({ propKey: 'flexWrap', propValue: 'wrap' })
    const newAtom2 = new Atom({
      propKey: 'flexWrap',
      propValue: 'wrap',
      style: { flexWrap: 'wrap' },
    })
    expect(handleAtom!(atom2, parser)).toMatchObject(newAtom2)
  })
})
