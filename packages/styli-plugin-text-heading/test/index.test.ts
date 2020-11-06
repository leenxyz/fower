import { Atom, styli } from '@styli/core'
import plugin from '../src'

describe('styli-plugin-text-heading', () => {
  styli.setup({
    unit: 'px',
    theme: {
      headings: ['48px', '32px', '24px', '20px', '16px', '14px'] as string[] | number[],
    } as any
  })

  const { isMatch, onVisitProp } = plugin()
  const sheet = {} as any
  it('isMatch', () => {
    expect(isMatch!('heading3')).toEqual(true)
  })

  it('onVisitProp', () => {
    const atom1 = { propKey: 'heading3', propValue: true } as Atom
    const newAtom1 = { propKey: 'heading3', propValue: true, style: {
      display: 'block',
      fontWeight: 'bold',
      fontSize: '24px',
    } }
    expect(onVisitProp!(atom1, sheet)).toMatchObject(newAtom1)
  })
})
