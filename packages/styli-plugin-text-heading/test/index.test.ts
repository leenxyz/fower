import { styli } from '@styli/core'
import { Atom } from '@styli/types'
import plugin from '../src'

describe('styli-plugin-text-heading', () => {
  styli.configure({
    unit: 'px',
    theme: {
      headings: ['48px', '32px', '24px', '20px', '16px', '14px'] as string[] | number[],
    } as any,
  })

  const { isMatch, onAtomStyleCreate } = plugin()
  const sheet = {} as any
  it('isMatch', () => {
    expect(isMatch!('heading3')).toEqual(true)
  })

  it('onAtomStyleCreate', () => {
    const atom1: Atom = {
      propKey: 'heading3',
      propValue: true,
      key: 'heading3',
      type: 'style',
      style: {},
    }
    const newAtom1: Atom = {
      key: 'heading3',
      propKey: 'heading3',
      propValue: true,
      style: {
        display: 'block',
        fontWeight: 'bold',
        fontSize: '24px',
      },
      type: 'style',
    }
    expect(onAtomStyleCreate!(atom1, sheet)).toMatchObject(newAtom1)
  })
})
