import { configure } from '@styli/core'
import { Atom } from '@styli/atom'
import plugin from '../src'

describe('s-plugin-font-weight', () => {
  configure({
    theme: {
      fontWeights: {
        medium: 500,
      },
    },
  })

  const { isMatch, handleAtom } = plugin()
  const parser = {} as any
  it('isMatch', () => {
    expect(isMatch!('fontWeight')).toEqual(true)
    expect(isMatch!('fontMedium')).toEqual(true)
  })

  it('handleAtom', () => {
    const atom2 = new Atom({
      propKey: 'fontMedium',
      propValue: true,
    })
    const newAtom2 = new Atom({
      propKey: 'fontMedium',
      propValue: true,
      style: { fontWeight: 500 },
    })
    expect(handleAtom!(atom2, parser)).toMatchObject(newAtom2)
  })
})
