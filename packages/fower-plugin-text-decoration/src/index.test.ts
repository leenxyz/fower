import { Atom } from '@fower/core'
import plugin from '.'

const { isMatch, handleAtom } = plugin()

const parser = {} as any
test('isMatch', () => {
  const keys = ['underline', 'lineThrough']
  for (const key of keys) {
    expect(isMatch!(key)).toEqual(true)
  }
})

test('noUnderline', () => {
  const atom = handleAtom!(
    new Atom({
      propKey: 'noUnderline',
      propValue: true,
    }),
    parser,
  )
  expect(atom.style.textDecoration).toEqual('none')
})

test('textDecoration', () => {
  const atom = handleAtom!(
    new Atom({
      propKey: 'textDecoration',
      propValue: 'none',
    }),
    parser,
  )
  expect(atom.style.textDecoration).toEqual('none')
})
