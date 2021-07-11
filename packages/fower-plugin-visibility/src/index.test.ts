import { Parser, Atom } from '@fower/core'
import plugin from '.'

const { isMatch, handleAtom } = plugin()
const parser = {} as Parser

test('isMatch', () => {
  expect(isMatch!('visibility')).toEqual(true)
  expect(isMatch!('visible')).toEqual(true)
  expect(isMatch!('invisible')).toEqual(true)
  expect(isMatch!('foovisible')).toEqual(false)
})

test('visibility="hidden"', () => {
  const atom = handleAtom!(
    new Atom({
      propKey: 'visibility',
      propValue: 'hidden',
    }),
    parser,
  )
  expect(atom.style.visibility).toEqual('hidden')
})

test('visible', () => {
  const atom = handleAtom!(
    new Atom({
      propKey: 'visible',
      propValue: true,
    }),
    parser,
  )
  expect(atom.style.visibility).toEqual('visible')
})

test('invisible', () => {
  const atom = handleAtom!(
    new Atom({
      propKey: 'invisible',
      propValue: true,
    }),
    parser,
  )
  expect(atom.style.visibility).toEqual('hidden')
})
