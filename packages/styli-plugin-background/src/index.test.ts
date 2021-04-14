import { setConfig } from '@styli/core'
import { Parser } from '@styli/parser'
import { presetWeb } from '@styli/preset-web'
import { Atom } from '@styli/atom'
import plugin from '.'

setConfig(presetWeb)

const { isMatch, handleAtom } = plugin()
const parser = new Parser({})

test('isMatch', () => {
  expect(isMatch!('bg')).toEqual(true)
  expect(isMatch!('bgRed200')).toEqual(true)
  expect(isMatch!('backgroundImage')).toEqual(true)
  expect(isMatch!('backgroundPosition')).toEqual(true)
  expect(isMatch!('backgroundSize')).toEqual(true)
  expect(isMatch!('backgroundRepeat')).toEqual(true)
})

test('bg="#000"', () => {
  const atom = handleAtom!(
    new Atom({
      propKey: 'bg',
      propValue: '#000',
    }),
    parser,
  )
  expect(atom.style.backgroundColor).toEqual('#000')
})

test('bgRed400', () => {
  const atom = handleAtom!(
    new Atom({
      propKey: 'bgRed400',
      propValue: true,
    }),
    parser,
  )
  expect(atom.style.backgroundColor).toEqual('red400')
})

test('backgroundImage', () => {
  const value = 'url("http...")'
  const atom = handleAtom!(
    new Atom({
      propKey: 'backgroundImage',
      propValue: value,
    }),
    parser,
  )
  expect(atom.style.backgroundImage).toEqual(value)
})

test('backgroundPosition', () => {
  const value = 'center center'
  const atom = handleAtom!(
    new Atom({
      propKey: 'backgroundPosition',
      propValue: value,
    }),
    parser,
  )
  expect(atom.style.backgroundPosition).toEqual(value)
})

test('backgroundSize', () => {
  const value = 'center center'
  const atom = handleAtom!(
    new Atom({
      propKey: 'backgroundSize',
      propValue: value,
    }),
    parser,
  )
  expect(atom.style.backgroundSize).toEqual(value)
})

test('backgroundRepeat', () => {
  const value = 'no-repeat'
  const atom = handleAtom!(
    new Atom({
      propKey: 'backgroundRepeat',
      propValue: value,
    }),
    parser,
  )
  expect(atom.style.backgroundRepeat).toEqual(value)
})
