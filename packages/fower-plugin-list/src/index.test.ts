import { Atom } from '@fower/atom'
import plugin from '.'

const { isMatch, handleAtom } = plugin()

const parser = {} as any
test('isMatch', () => {
  const keys = ['listNone', 'listDisc', 'listDecimal']
  for (const key of keys) {
    expect(isMatch!(key)).toEqual(true)
  }
})

test('listNone', () => {
  const atom = handleAtom!(
    new Atom({
      propKey: 'listNone',
      propValue: true,
    }),
    parser,
  )
  expect(atom.style.listStyleType).toEqual('none')
})

test('listDisc', () => {
  const atom = handleAtom!(
    new Atom({
      propKey: 'listDisc',
      propValue: true,
    }),
    parser,
  )
  expect(atom.style.listStyleType).toEqual('disc')
})

test('listDecimal', () => {
  const atom = handleAtom!(
    new Atom({
      propKey: 'listDecimal',
      propValue: true,
    }),
    parser,
  )
  expect(atom.style.listStyleType).toEqual('decimal')
})
