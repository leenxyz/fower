import { setConfig, Parser, Atom } from '@fower/core'
import { presetWeb } from '@fower/preset-web'
import plugin from '.'

setConfig(presetWeb)

const { isMatch, handleAtom } = plugin()
const parser = new Parser({})

test('isMatch', () => {
  expect(isMatch!('border')).toEqual(true)
  expect(isMatch!('borderTop')).toEqual(true)
  expect(isMatch!('borderTopRight')).toEqual(true)
  expect(isMatch!('borderRed400')).toEqual(true)
  expect(isMatch!('borderTopRed400')).toEqual(true)
})

test('border', () => {
  const atom = handleAtom!(
    new Atom({
      propKey: 'border',
      propValue: true,
    }),
    parser,
  )
  expect(atom.style.borderWidth).toEqual(1)
})

test('border={2}', () => {
  const atom = handleAtom!(
    new Atom({
      propKey: 'border',
      propValue: 2,
    }),
    parser,
  )
  expect(atom.style.borderWidth).toEqual(2)
})

test('border="1px solid red"', () => {
  const atom = handleAtom!(
    new Atom({
      propKey: 'border',
      propValue: '1px solid red',
    }),
    parser,
  )
  expect(atom.style.border).toEqual('1px solid red')
})

test('border="none"', () => {
  const atom = handleAtom!(
    new Atom({
      propKey: 'border',
      propValue: 'none',
    }),
    parser,
  )
  expect(atom.style.border).toEqual('none')
})

test('borderTop', () => {
  const atom = handleAtom!(
    new Atom({
      propKey: 'borderTop',
      propValue: true,
    }),
    parser,
  )
  expect(atom.style.borderTopWidth).toEqual(1)
})

test('borderTop={2}', () => {
  const atom = handleAtom!(
    new Atom({
      propKey: 'borderTop',
      propValue: 2,
    }),
    parser,
  )
  expect(atom.style.borderTopWidth).toEqual(2)
})

test('borderTop="1px solid green"', () => {
  const atom = handleAtom!(
    new Atom({
      propKey: 'borderTop',
      propValue: '1px solid green',
    }),
    parser,
  )
  expect(atom.style.borderTop).toEqual('1px solid green')
})

test('borderTopRed400', () => {
  const atom = handleAtom!(
    new Atom({
      propKey: 'borderTopRed400',
      propValue: true,
    }),
    parser,
  )
  expect(atom.style.borderTopColor).toEqual('#ff8787')
})

test('borderDashed', () => {
  const atom = handleAtom!(
    new Atom({
      propKey: 'borderDashed',
      propValue: true,
    }),
    parser,
  )
  expect(atom.style.borderStyle).toEqual('dashed')
})

test('borderSolid', () => {
  const atom = handleAtom!(
    new Atom({
      propKey: 'borderSolid',
      propValue: true,
    }),
    parser,
  )
  expect(atom.style.borderStyle).toEqual('solid')
})

test('borderRed400', () => {
  const atom = handleAtom!(
    new Atom({
      propKey: 'borderRed400',
      propValue: true,
    }),
    parser,
  )
  expect(atom.style.borderColor).toEqual('red400')
})

test('borderColor="#000', () => {
  const atom = handleAtom!(
    new Atom({
      propKey: 'borderColor',
      propValue: '#000',
    }),
    parser,
  )
  expect(atom.style.borderColor).toEqual('#000')
})

test('borderNone', () => {
  const atom = handleAtom!(
    new Atom({
      propKey: 'borderNone',
      propValue: true,
    }),
    parser,
  )
  expect(atom.style.borderStyle).toEqual('none')
})

test('borderStyle="solid', () => {
  const atom = handleAtom!(
    new Atom({
      propKey: 'borderStyle',
      propValue: 'solid',
    }),
    parser,
  )
  expect(atom.style.borderStyle).toEqual('solid')
})
