import { Parser, Atom } from '@fower/core'
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
