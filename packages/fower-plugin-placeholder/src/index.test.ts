import { setConfig } from '@fower/core'
import { Parser } from '@fower/parser'
import { presetWeb } from '@fower/preset-web'
import { Atom } from '@fower/atom'
import plugin from './index'

setConfig(presetWeb)

const { isMatch, handleAtom } = plugin()
const parser = new Parser({})

test('isMatch', () => {
  expect(isMatch!('placeholder')).toEqual(false)
  expect(isMatch!('placeholderGreen400')).toEqual(true)
  expect(isMatch!('placeholderGreen400')).toEqual(true)
})

test('placeholderGreen400', () => {
  const atom = handleAtom!(
    new Atom({
      propKey: 'placeholderGreen400',
      propValue: true,
    }),
    parser,
  )

  expect(atom.meta.pseudoPrefix).toEqual('::')
  expect(atom.meta.pseudo).toEqual('placeholder')
  expect(atom.style.color).toEqual('green400')
})

test('placeholderInvalidColor', () => {
  const atom = handleAtom!(
    new Atom({
      propKey: 'placeholderInvalidColor',
      propValue: true,
    }),
    parser,
  )

  expect(atom.style).toBeUndefined()
})
