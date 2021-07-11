import { Atom } from '@fower/core'
import plugin from '.'

const { isMatch, handleAtom } = plugin()

const parser = {} as any
test('isMatch', () => {
  const keys = ['truncate', 'overflowEllipsis', 'overflowClip']
  for (const key of keys) {
    expect(isMatch(key)).toEqual(true)
  }

  expect(isMatch('overflowX')).toEqual(false)
})

test('truncate', () => {
  const atom = handleAtom!(
    new Atom({
      propKey: 'truncate',
      propValue: true,
    }),
    parser,
  )
  expect(atom.style).toMatchObject({
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  })
})

test('overflowEllipsis', () => {
  const atom = handleAtom!(
    new Atom({
      propKey: 'overflowEllipsis',
      propValue: true,
    }),
    parser,
  )
  expect(atom.style.textOverflow).toEqual('ellipsis')
})

test('overflowClip', () => {
  const atom = handleAtom!(
    new Atom({
      propKey: 'overflowClip',
      propValue: true,
    }),
    parser,
  )
  expect(atom.style.textOverflow).toEqual('clip')
})
