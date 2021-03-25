import { styli } from '@styli/core'
import { Atom, SheetType } from '@styli/types'
import plugin from '../src'

describe('styli-plugin-ellipsis', () => {
  styli.configure(() => ({ unit: 'px' }))

  const { isMatch, onAtomStyleCreate } = plugin()
  const sheet = {} as SheetType

  it('isMatch', () => {
    expect(isMatch!('ellipsis')).toEqual(true)
    expect(isMatch!('ellipsis1')).toEqual(true)
    expect(isMatch!('ellipsis-100')).toEqual(true)
    expect(isMatch!('ellipsis2-200')).toEqual(true)
  })

  it('onAtomStyleCreate', () => {
    const atom1 = { propKey: 'ellipsis', propValue: true } as Atom
    const newAtom1 = {
      propKey: 'ellipsis',
      propValue: true,
      style: {
        maxWidth: '100px',
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
      },
    }
    expect(onAtomStyleCreate!(atom1, sheet)).toMatchObject(newAtom1)

    const atom2 = { propKey: 'ellipsis1', propValue: true } as Atom
    const newAtom2 = {
      propKey: 'ellipsis1',
      propValue: true,
      style: {
        maxWidth: '100px',
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
      },
    }
    expect(onAtomStyleCreate!(atom2, sheet)).toMatchObject(newAtom2)

    const atom3 = { propKey: 'ellipsis-300', propValue: true } as Atom
    const newAtom3 = {
      propKey: 'ellipsis-300',
      propValue: true,
      style: {
        maxWidth: '300px',
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
      },
    }
    expect(onAtomStyleCreate!(atom3, sheet)).toMatchObject(newAtom3)

    const atom4 = { propKey: 'ellipsis2', propValue: true } as Atom
    const newAtom4 = {
      propKey: 'ellipsis2',
      propValue: true,
      style: {
        maxWidth: '100px',
        display: '-webkit-box',
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden',
        WebkitLineClamp: 2,
      },
    }
    expect(onAtomStyleCreate!(atom4, sheet)).toMatchObject(newAtom4)

    const atom5 = { propKey: 'ellipsis6-500', propValue: true } as Atom
    const newAtom5 = {
      propKey: 'ellipsis6-500',
      propValue: true,
      style: {
        maxWidth: '500px',
        display: '-webkit-box',
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden',
        WebkitLineClamp: 6,
      },
    }
    expect(onAtomStyleCreate!(atom5, sheet)).toMatchObject(newAtom5)
  })
})
