import { setConfig } from '@fower/core'
import { Parser } from '@fower/parser'
import { presetWeb } from '@fower/preset-web'
import { Atom } from '@fower/atom'
import plugin from '.'

setConfig(presetWeb)

const { isMatch, handleAtom } = plugin()
const parser = new Parser({})

test('isMatch', () => {
  expect(isMatch!('italic')).toEqual(true)
  expect(isMatch!('notItalic')).toEqual(true)
})

test('italic', () => {
  const atom = handleAtom!(
    new Atom({
      propKey: 'italic',
      propValue: true,
    }),
    parser,
  )
  expect(atom.style.fontStyle).toEqual('italic')
})

test('notItalic', () => {
  const atom = handleAtom!(
    new Atom({
      propKey: 'notItalic',
      propValue: true,
    }),
    parser,
  )
  expect(atom.style.fontStyle).toEqual('normal')
})
