import { Parser } from '@fower/parser'
import { Atom } from '@fower/atom'
import plugin from '.'

const { handleAtom, isMatch } = plugin()
const parser = {} as Parser

test('isMatch', () => {
  expect(isMatch!('justifyContent')).toEqual(true)
})

test('justifyContent', () => {
  const atom = handleAtom!(
    new Atom({
      propKey: 'justifyContent',
      propValue: 'center',
    }),
    parser,
  )
  expect(atom.style.justifyContent).toEqual('center')
})
