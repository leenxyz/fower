import { Parser } from '@fower/parser'
import { Atom } from '@fower/atom'
import plugin from '.'

const { isMatch, handleAtom } = plugin()
const parser = new Parser({})

test('isMatch', () => {
  expect(isMatch!('delay')).toEqual(true)
  expect(isMatch!('duration')).toEqual(true)
})

test('delay', () => {
  const atom = handleAtom!(
    new Atom({
      propKey: 'delay',
      propValue: 100,
    }),
    parser,
  )
  expect(atom.style.transitionDelay).toEqual('100ms')
})

test('duration', () => {
  const atom = handleAtom!(
    new Atom({
      propKey: 'duration',
      propValue: 100,
    }),
    parser,
  )
  expect(atom.style.transitionDuration).toEqual('100ms')
})
