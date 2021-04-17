import { Parser } from '@styli/parser'
import { Atom } from '@styli/atom'
import plugin from '.'

const { isMatch, handleAtom } = plugin()
const parser = {} as Parser

test('isMatch', () => {
  expect(isMatch!('boxSizing')).toEqual(true)
  expect(isMatch!('boxBorder')).toEqual(true)
  expect(isMatch!('boxContent')).toEqual(true)
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

test('boxContent={true}', () => {
  const atom = handleAtom!(
    new Atom({
      propKey: 'boxContent',
      propValue: true,
    }),
    parser,
  )
  expect(atom.style.boxSizing).toEqual('content-box')
})

test('boxBorder={true}', () => {
  const atom = handleAtom!(
    new Atom({
      propKey: 'boxBorder',
      propValue: true,
    }),
    parser,
  )
  expect(atom.style.boxSizing).toEqual('border-box')
})
