import { Parser } from '@styli/parser'
import { Atom } from '@styli/atom'
import plugin from '.'

const { isMatch, handleAtom } = plugin()
const parser = {} as Parser

test('isMatch', () => {
  expect(isMatch!('boxSizing')).toEqual(true)
  expect(isMatch!('borderBox')).toEqual(true)
  expect(isMatch!('contentBox')).toEqual(true)
})

test('boxSizing="borderBox"', () => {
  const atom = handleAtom!(
    new Atom({
      propKey: 'boxSizing',
      propValue: 'border-box',
    }),
    parser,
  )
  expect(atom.style.boxSizing).toEqual('border-box')
})

test('contentBox={true}', () => {
  const atom = handleAtom!(
    new Atom({
      propKey: 'contentBox',
      propValue: true,
    }),
    parser,
  )
  expect(atom.style.boxSizing).toEqual('content-box')
})
