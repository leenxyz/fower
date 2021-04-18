import { Atom } from '@fower/atom'
import plugin from '.'

const { isMatch, handleAtom } = plugin()

const parser = {} as any

test('isMatch', () => {
  expect(isMatch!('opacity')).toEqual(true)
})

test('opacity={60}', () => {
  const atom = handleAtom!(
    new Atom({
      propKey: 'opacity',
      propValue: 60,
    }),
    parser,
  )
  expect(atom.style.opacity).toEqual(0.6)
})
