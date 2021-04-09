import { Parser } from '@styli/parser'
import { Atom } from '@styli/atom'
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
